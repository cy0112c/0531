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
  let count = 0;
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          count = count + 1;
          console.log(count);
        }}
      >
        증가
      </button>
    </div>
  );
}
