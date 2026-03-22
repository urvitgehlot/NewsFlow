# NewsFlow

A simple news web app built with React and Vite that fetches top headlines from NewsAPI and displays them by category.

## Features

- Browse top US headlines
- Switch categories from the navbar:
  - General
  - Technology
  - Business
  - Health
  - Sports
  - Entertainment
- Loading spinner while articles are being fetched
- Fallback image and fallback description for missing article data
- External "Read More" link for each article

## Tech Stack

- React 19
- Vite 7
- Bootstrap 5 (via CDN)
- NewsAPI (`/v2/top-headlines` endpoint)

## Prerequisites

- Node.js 18+ (recommended latest LTS)
- npm
- A NewsAPI key from [https://newsapi.org](https://newsapi.org)

## Getting Started

1. Clone the repository:

	```bash
	git clone <your-repo-url>
	cd NewsFlow
	```

2. Install dependencies:

	```bash
	npm install
	```

3. Create a `.env` file in the project root and add your API key:

	```env
	VITE_API_KEY=your_newsapi_key_here
	```

4. Start the development server:

	```bash
	npm run dev
	```

5. Open the local URL shown in terminal (usually `http://localhost:5173`).

## Available Scripts

- `npm run dev` - Starts Vite dev server
- `npm run build` - Builds the app for production
- `npm run preview` - Previews the production build
- `npm run lint` - Runs ESLint

## Project Structure

```text
NewsFlow/
├── public/
├── src/
│   ├── Components/
│   │   ├── Navbar.jsx
│   │   ├── NewsBoard.jsx
│   │   └── NewsItem.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## How It Works

- `App.jsx` stores the selected category in state.
- `Navbar.jsx` updates that category when a menu item is clicked.
- `NewsBoard.jsx` watches category changes, calls NewsAPI, and renders article cards.
- `NewsItem.jsx` renders a single article card.

## Notes

- This app currently fetches headlines for `country=us`.
- The NewsAPI key is required at runtime through Vite env variables.
- Free NewsAPI plans may have request limits.
