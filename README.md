# TOEIC Study WebApp

Simple React (Vite) app for studying TOEIC vocabulary.

## Features
- Flashcard mode and multiple-choice quiz
- Autoplay (auto-advance)
- Local progress tracking (in-memory; extend to localStorage if desired)
- Includes ~300 TOEIC 700-level words (in `src/App.jsx` WORDS array)

## Run locally
1. Install dependencies:
```
npm install
```
2. Start dev server:
```
npm run dev
```

## How to publish
Create a GitHub repository and push the project:
```
git init
git add .
git commit -m "Initial commit"
# create repo on GitHub (via website or gh cli), then:
git remote add origin <your-git-url>
git push -u origin main
```

If you'd like, I can modify the project to save progress to `localStorage`, add audio pronunciation, or produce Playwright test hooks.

