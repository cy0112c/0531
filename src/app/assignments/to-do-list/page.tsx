"use client";

import Header from "@/components/header";
import { link } from "fs";
import { useState } from "react";

export default function Assignment5() {
  const [사용자입력, set사용자입력] = useState("");
  const [할일목록, set할일목록] = useState<string[]>([]);

  return (
    <>
      <Header title={"To do List 만들기"} hasBack={true} />
      <div className="flex flex-col h-full">
        <div className="sticky top-0 bg-white p-3 flex gap-2 justify-center">
          <input
            type="text"
            onChange={(event) => set사용자입력(event.target.value)}
            className="border p-2 rounded-md w-80"
          />
          <button
            onClick={() => {
              set할일목록([...할일목록, 사용자입력]);
            }}
          >
            추가
          </button>
        </div>
        <div className="flex-1 overflow-y-auto pb-24">
          <ul className="flex flex-col gap-3 w-full px-10">
            {할일목록.map((할일하나) => (
              <li>{할일하나}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
