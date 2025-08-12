"use client";
import React from "react";
import { tokenize, decodeTokens, Token } from "./tokens";
import Link from "next/link";

export default function Home() {
  const [input, setInput] = React.useState("");
  const [tokens, setTokens] = React.useState<Token[]>([]);
  const [encodedTokens, setEncodedTokens] = React.useState<Token[]>([]);
  const [decodedTokens, setDecodedTokens] = React.useState<number[]>([]);
  const [decodeResult, setDecodeResult] = React.useState("");

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setInput(newValue);
    const newTokens = tokenize(newValue);
    setTokens(newTokens);
    setEncodedTokens(newTokens);
  };

  const handleDecode = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawIDs = e.target.value;
    if (rawIDs.length === 0) {
      setDecodedTokens([]);
      setDecodeResult("");
    }
    const tokenIDs = rawIDs
      .split(",")
      .map((id) => {
        const trimmed = id.trim();
        const num = parseInt(trimmed, 10);
        return isNaN(num) ? null : num;
      })
      .filter((id): id is number => id !== null);

    setDecodedTokens(tokenIDs);
    setDecodeResult(decodeTokens(tokenIDs));
  };

  const spacesToDots = (str: string): string => {
    return str.replace(/ +/g, (match) => ".".repeat(match.length));
  };

  return (
    <div className="font-sans min-h-screen md:p-8 mx-8 my-8 md:mx-20 sm:my-10">
      <main className="w-full flex flex-col gap-4">
        <div>
          <h1 className="text-3xl py-6 px-4 flex justify-between items-center rounded-lg bg-amber-500/10 text-center font-bold">
            <span>Custom Tokenizer</span>
            <Link
              href={"https://github.com/BhartiRajesh99/custom-tokenizer"}
              className="text-sm font-medium bg-transparent border-1 px-4 py-2 rounded-lg"
            >
              Github Repo
            </Link>
          </h1>
        </div>
        <div className="flex gap-4 w-full">
          <div className="border-2 flex flex-col w-1/2 border-amber-500 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">Text Input</h2>
            <textarea
              onChange={handleInput}
              placeholder="enter text here"
              value={input}
              className="p-2 bg-gray-500/10 min-h-31 resize-none rounded-md outline-none"
            />
          </div>
          <div className="border-2 w-1/2 flex gap-2 flex-col border-amber-500 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">Encoded Token</h2>
            <div className="p-2 min-h-10 bg-gray-500/10 rounded-md flex items-center gap-2 flex-wrap">
              {encodedTokens.map((token, index) => (
                <p key={index} className="text-sm">
                  <span className="p-1 rounded-md bg-gray-500/20">{`"${token.value}"`}</span>
                  -{token.id}
                </p>
              ))}
            </div>
            <span className="text-sm">Encode sequence</span>
            <div className="text-sm p-2 min-h-8 flex rounded-md bg-amber-500/10">
              <span>{`[${encodedTokens.map((token) => `${token.id}`)}]`}</span>
            </div>
          </div>
        </div>
        <div>
          <div className="border-2 flex flex-col w-full border-amber-500 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">Token Visualization</h2>
            <div className="p-2 bg-gray-500/10 min-h-40 flex flex-wrap gap-1 rounded-md outline-none">
              {tokens.map((token, index) => {
                return (
                  <div
                    key={index}
                    className={`py-1 h-8 flex justify-center px-2 min-w-8  text-center text-md rounded-xl border-1 border-blue-400`}
                  >
                    <span className="w-full">
                      {token.value.trim() === "" && token.value.length >= 1
                        ? spacesToDots(token.value)
                        : token.value}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div>
          <div className="border-2 flex flex-col w-full border-amber-500 rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">Token Decode</h2>
            <p className="mb-2 text-sm text-white/40">
              Enter Comma-seperated values (e.g 1,2,3){" "}
            </p>
            <input
              onChange={handleDecode}
              type="text"
              className="p-2 bg-gray-500/10 rounded-md outline-none"
            />
            {decodeResult && (
              <div>
                <p className="text-sm ">Encoded Text: </p>
                <div className="text-sm p-2 rounded-md bg-amber-500/10">
                  {decodeResult}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <footer className="text-sm p-4 text-right font-semibold">
        Built By Rajesh
      </footer>
    </div>
  );
}
