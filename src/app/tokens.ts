export type Token = {
  id: number;
  value: string;
};

function tokenize(text: string): Token[] {
  let savedTokens: Token[] = JSON.parse(localStorage.getItem("tokens") || "[]");

  const tokenSpec: [string, RegExp][] = [
    ["whitespace", /^\s+/],
    ["word", /^[a-zA-Z]+/],
    ["number", /^\d+/],
    ["punctuation", /^[.,!?;:()"'`]/],
  ];

  
  const tokenDictionary: Record<string, number> = {};
  savedTokens.forEach((t, index) => {
    tokenDictionary[t.value] = index;
  });

  let tokens: Token[] = [];
  let remaining = text;

  while (remaining.length > 0) {
    let matched = false;

    for (const [, regex] of tokenSpec) {
      const match = regex.exec(remaining);
      if (match) {
        const value = match[0];

        let id: number;
        if (tokenDictionary.hasOwnProperty(value)) {
          id = tokenDictionary[value];
        } else {
          id = savedTokens.length;
          savedTokens.push({ id, value });
          tokenDictionary[value] = id;
        }

        tokens.push({ id, value });
        remaining = remaining.slice(value.length);
        matched = true;
        break;
      }
    }

    if (!matched) {
      const value = remaining[0];
      let id: number;
      if (tokenDictionary.hasOwnProperty(value)) {
        id = tokenDictionary[value];
      } else {
        id = savedTokens.length;
        savedTokens.push({ id, value });
        tokenDictionary[value] = id;
      }
      tokens.push({ id, value });
      remaining = remaining.slice(1);
    }
  }

  localStorage.setItem("tokens", JSON.stringify(savedTokens));

  return tokens;
}


function decodeTokens(tokens: number[]): string {
  const storedDict = JSON.parse(
    localStorage.getItem("tokens") || "{}"
  );
  
  return tokens
    .map((token) => {
      if (storedDict[token] !== undefined) {
        return storedDict[token].value;
      } else {
        return "[UNK]";
      }
    })
    .join("");
}


export {tokenize, decodeTokens}
