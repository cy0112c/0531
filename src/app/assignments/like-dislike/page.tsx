"use client";

import { useState } from "react";

import Header from "@/components/header";

export default function Assignment4() {
  const [like, setLike] = useState(false); //좋아요
  const [dislike, setDislike] = useState(false);

  function Ilike() {
    let 보여줄텍스트 = "좋아요";
    let 보여줄텍스트2 = "좋아요 취소";
    return like === false ? 보여줄텍스트 : 보여줄텍스트2;
    //   보여줄텍스트 = "좋아요 취소";
  }
  function Bad() {
    let 보여줄텍스트 = "싫어요";
    let 보여줄텍스트2 = "싫어요 취소";
    return dislike === false ? 보여줄텍스트 : 보여줄텍스트2;
  }

  return (
    <div>
      <Header title={"좋아요 / 싫어요 만들기"} hasBack={true} />
      <div className="h-screen flex items-center justify-center">
        <div className="flex gap-2 mb-20">
          <button
            onClick={() => setLike(!like)}
            className="bg-blue-400 text-white font-semibold text-xl rounded-md active:bg-blue-500 active:scale-95 p-2"
          >
            <Ilike />
          </button>
          <button
            onClick={() => setDislike(!dislike)}
            className="bg-blue-400 text-white font-semibold text-xl rounded-md active:bg-blue-500 active:scale-95 p-2"
          >
            <Bad />
          </button>
        </div>
      </div>
    </div>
  );
}
