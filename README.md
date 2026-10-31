# Web Search Agent

A command-line web research agent that uses Gemini to answer questions and Tavily Search to find current information.

## Requirements

- Node.js 20 or later
- A [Google Gemini API key](https://aistudio.google.com/apikey)
- A [Tavily API key](https://tavily.com/)

## Setup

```sh
npm install
cp .env.example .env
```

Add your API keys to `.env`:

```env
GEMINI_API_KEY=your_gemini_api_key
TAVILY_API_KEY=your_tavily_api_key
```

Keep `.env` private; it is excluded from Git.

## Run

```sh
npm start
```

Ask questions in the terminal. Type `exit` to quit. When the agent searches the web, it includes relevant source URLs in its answer.
