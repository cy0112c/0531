"use client";

import { useState } from "react";

import Header from "@/components/header";

export default function Assignment4() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Header title={"좋아요 / 싫어요 만들기"} hasBack={true} />
      <div>안녕하세요</div>
      <div className="h-screen flex items-center justify-center">
        <div className="flex gap-2 mb-20">
          <button
            className="bg-blue-400 text-white font-semibold text-xl rounded-md active:bg-blue-500 active:scale-95 p-2"
            onClick={() => setCount(count + 1)}
          >
            좋아요
          </button>
          <button
            className="bg-blue-400 text-white font-semibold text-xl rounded-md active:bg-blue-500 active:scale-95 p-2"
            onClick={() => setCount(count - 1)}
          >
            싫어요
          </button>
        </div>
      </div>
    </>
  );
}
