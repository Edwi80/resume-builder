// src/index.ts
var index_default = {
  async fetch(request, env) {
    const url = new URL(request.url);
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    };
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }
    if (url.pathname === "/api/entries" && request.method === "GET") {
      try {
        const { results } = await env.DB.prepare(
          "SELECT name, message, created_at FROM entries ORDER BY id DESC"
        ).all();
        return new Response(JSON.stringify(results), {
          headers: { "Content-Type": "application/json", ...corsHeaders }
        });
      } catch (e) {
        return new Response(JSON.stringify({ error: "DB read error", details: e.message }), {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders }
        });
      }
    }
    if (url.pathname === "/api/entries" && request.method === "POST") {
      try {
        const { name, message } = await request.json();
        if (!name || !message) {
          return new Response(JSON.stringify({ error: "Missing name or message" }), {
            status: 400,
            headers: { "Content-Type": "application/json", ...corsHeaders }
          });
        }
        await env.DB.prepare(
          "INSERT INTO entries (name, message) VALUES (?, ?)"
        ).bind(name, message).run();
        return new Response(JSON.stringify({ success: true }), {
          headers: { "Content-Type": "application/json", ...corsHeaders }
        });
      } catch (e) {
        return new Response(JSON.stringify({ error: "DB write error", details: e.message }), {
          status: 500,
          headers: { "Content-Type": "application/json", ...corsHeaders }
        });
      }
    }
    return new Response("Not Found", { status: 404 });
  }
};
export {
  index_default as default
};
//# sourceMappingURL=index.js.map
