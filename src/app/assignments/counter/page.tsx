"use client";

import Header from "@/components/header";
import { useState } from "react";

export default function Assignment3() {
  return (
    <>
      <Header title={"카운터 만들기"} hasBack={true} />
      <Counter></Counter>
    </>
  );
}

function Counter() {
  // let count = 0;
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-2 m-5">
      <div className="text-6xl">{count}</div>
      <div className="flex gap-2">
        <button
          className="bg-blue-400 text-white font-semibold text-2xl size-10 rounded-md active:bg-blue-500 active:scale-95"
          onClick={() => {
            // count = count + 1;
            setCount(count + 1);
          }}
        >
          +
        </button>
        <button
          className="bg-blue-400 text-white font-semibold text-2xl size-10 rounded-md active:bg-blue-500 active:scale-95"
          onClick={() => {
            if(count >0) {
            setCount(count - 1)};
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}
