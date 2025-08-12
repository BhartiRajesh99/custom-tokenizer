# Custom Tokenizer

A simple React/Next.js app that tokenizes input text into tokens of different types (words, numbers, punctuation, whitespace), assigns each token a unique numeric ID (persisted in localStorage), and provides decoding of token ID sequences back to text.

---

## Features

- **Tokenization**: Splits input text into tokens by type:
  - Whitespace
  - Words (alphabetic)
  - Numbers (digits)
  - Punctuation
- **Token IDs**: Each unique token is assigned a persistent numeric ID stored in `localStorage`.
- **Encode & Decode**:
  - Displays encoded tokens with their IDs.
  - Allows decoding from comma-separated token ID inputs.
- **Token Visualization**: Shows tokens with whitespace replaced by dots (`.`) to visualize spaces.
- **Persistent token dictionary** in browser localStorage for consistent ID assignment across sessions.

---

## Demo
1. Text Encoding
![Text Encoding](/tokenizer/public/images/1.png)
2. Text Decoding
![Text Decoding](/tokenizer/public/images/2.png)

---

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/BhartiRajesh99/custom-tokenizer.git
cd custom-tokenizer 
```

2. Install dependencies:
```bash
npm install
# or
yarn
```
3. Run the development server:
```bash
npm run dev
# or
yarn dev
```
4. Open http://localhost:3000 to view in your browser.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs) — Official Next.js docs for building React apps.
- [React Documentation](https://reactjs.org/docs/getting-started.html) — Learn about React fundamentals.
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) — Deep dive into TypeScript.
- [Tailwind CSS](https://tailwindcss.com/docs) — Utility-first CSS framework used for styling.
- [MDN Web Docs - Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) — Learn how regex works in JavaScript.
- [Using localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) — Browser API for persistent storage.

Feel free to explore these resources to understand the technologies and concepts used in this project.


