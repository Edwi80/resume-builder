# resume-builder

# Cloudflare Workers Guestbook ✍️

## Overview

This project is a simple **Guestbook application** built as part of a Cloudflare Workers assignment. Visitors can submit their name and a message, which is then stored and displayed on the site. The app demonstrates how to use **Cloudflare Workers** to provide serverless API functionality and **Cloudflare D1** to persist guestbook entries.

## Features Implemented

- 🌐 Static website with resume and guestbook section
- ⚙️ Cloudflare Worker backend that handles:
  - `GET /api/entries`: returns all stored entries
  - `POST /api/entries`: saves a new entry (name + message)
- 🧠 Cloudflare D1 integration to persist guestbook entries in a SQL database
- 📋 Entries are listed on the page and sorted by most recent
- ✅ Fully deployed with Cloudflare Pages + Workers

## How to Run / Test Locally

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install/)

### Clone the Repo

```bash
git clone https://github.com/your-username/guestbook-app
cd guestbook-app
