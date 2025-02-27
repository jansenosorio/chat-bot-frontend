"use client";

import InputDefault from "@/components/inputs/InputDefault";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [ragState, setRagState] = useState(true);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([
    {
      agent_user: "Jansen Chat",
      message: "Olá, como posso te ajudar?",
    },
  ]);

  const fetchData = async () => {
    try {
      const res = await fetch(`http://localhost:3001/talk=rag_${ragState}`, {
        body: JSON.stringify({ user_message: question }),
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });
      return res.json();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSend = async () => {
    await fetchData().then((res) => {
      console.log(res);
      setMessages([
        ...messages,
        { agent_user: "Eu", message: question },
        { agent_user: "Jansen Chat", message: res.messages },
      ]);
      setQuestion("");
      const chatBot = document.getElementsByClassName("chat");
      setTimeout(() => {
        if (chatBot)
          chatBot[chatBot.length - 1].scrollIntoView({ behavior: "smooth" });
      }, 100);
    });
  };

  return (
    <main
      className={clsx(
        "flex items-center justify-center",
        "w-screen h-screen",
        "bg-gradient-to-t from-blue-600 to-blue-200",
        "text-black"
      )}
    >
      <div
        className={clsx(
          "flex flex-col items-end justify-end gap-4",
          "w-full lg:w-4/5 h-5/6 bg-blue-100 p-4",
          "border border-blue-300 rounded-lg",
          "shadow-2xl"
        )}
      >
        <div
          id="chat-bot"
          className={clsx("w-full", "transition-all overflow-y-scroll")}
        >
          {messages?.map((msg, index) => {
            if (msg.agent_user === "Jansen Chat") {
              return (
                <div key={index} className={clsx("chat chat-start max-w-1/2")}>
                  <div className="chat-header">{msg.agent_user}</div>
                  <div className="chat-bubble max-w-1/2 whitespace-pre-wrap">
                    {msg.message}
                  </div>
                </div>
              );
            } else {
              return (
                <div key={index} className={clsx("chat chat-end max-w-1/2")}>
                  <div className="chat-header">{msg.agent_user}</div>
                  <div className="chat-bubble max-w-1/2 whitespace-pre-wrap">
                    {msg.message}
                  </div>
                </div>
              );
            }
          })}
        </div>
        <div className={clsx("relative", "w-full", "flex items-center gap-2")}>
          <InputDefault
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Pergunte ao chat..."
          />
          <Image
            onClick={() => handleSend()}
            src={"/icons/btn-send.png"}
            alt="Enviar"
            width={30}
            height={30}
            className={clsx(
              "cursor-pointer",
              "absolute right-3 top-[calc(50%-15px)]"
            )}
          />
        </div>
      </div>
    </main>
  );
}
