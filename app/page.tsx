"use client";

import InputDefault from "@/components/inputs/InputDefault";
import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [ragState, setRagState] = useState(false);
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<
    { agent_user: string; message: string }[]
  >([]);

  const fetchData = async () => {
    const url = "https://chatbot-api-973786037919.us-central1.run.app";
    try {
      const res = await fetch(`${url}/talk=rag_${ragState}`, {
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
    if (question?.length > 0) {
      await fetchData().then((res) => {
        setMessages([
          ...messages,
          { agent_user: "Eu", message: question },
          { agent_user: "Agent AI", message: res.messages },
        ]);
        setQuestion("");
        const chatBot = document.getElementsByClassName("chat");
        setTimeout(() => {
          if (chatBot)
            chatBot[chatBot.length - 1].scrollIntoView({ behavior: "smooth" });
        }, 100);
      });
    }
  };

  return (
    <main
      className={clsx(
        "flex items-center justify-center",
        "w-screen h-screen",
        "bg-gradient-to-tr from-blue-200 via-blue-400 to-blue-200",
        "text-black"
      )}
    >
      <div
        className={clsx(
          "relative",
          "flex flex-col items-center justify-center gap-4",
          "w-full  px-4 py-6"
        )}
      >
        {/* <div
          className={clsx(
            "absolute -top-10 right-4",
            "flex items-center justify-center gap-2"
          )}
        >
          <label className="font-manrope font-bold text-blue-950 text-[20px]">
            RAG
          </label>
          <input
            type="checkbox"
            className="toggle border-blue-800 bg-blue-950 hover:bg-blue-900 toggle-lg [--tglbg:#ccdcff]"
            checked={ragState}
            onChange={() => setRagState(!ragState)}
          />
        </div> */}

        {messages.length === 0 ? (
          <div
            className={clsx(
              "animate-fade-down",
              "flex flex-col items-center justify-center",
              "font-sigmar text-[50px] text-blue-100"
            )}
          >
            <h2 className="text-blue-900">Olá, visitante!</h2>
            <p className="text-[40px]">Eu posso te ajudar com algo?</p>
            <p className="max-w-md text-[20px] text-blue-white text-center leading-6 font-manrope pt-4 font-semibold">
              Pronto para te ajudar, basta digitar o que precisar, seja
              perguntas, recomendações ou dúvidas frequentes.
            </p>
          </div>
        ) : (
          <div className="mockup-code bg-blue-900/10 rounded-xl mb-10">
            <div
              id="chat-bot"
              className={clsx(
                // "flex flex-col justify-end gap-4",
                "animate-fade-up pb-4",
                "w-[95vw] lg:w-[60vw] h-[70vh]",
                "transition-all overflow-y-scroll scrollbar-none"
              )}
            >
              {messages?.map((msg, index) => {
                if (msg.agent_user === "Agent AI") {
                  return (
                    <div
                      key={index}
                      className={clsx(
                        "chat chat-start  p-4 font-manrope rounded-md"
                      )}
                    >
                      <div className="chat-header pb-2 text-blue-50 font-bold text-[16px]">
                        {msg.agent_user}
                      </div>
                      <div className="chat-bubble bg-blue-900/50 text-blue-50 text-[18px] max-w-1/2 whitespace-pre-wrap animate-fade-up">
                        {msg.message}
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={index}
                      className={clsx(
                        "chat chat-end p-4 max-w-1/2 font-manrope"
                      )}
                    >
                      <div className="chat-header pb-2 px-2 text-[16px] font-bold text-blue-800">
                        {msg.agent_user}
                      </div>
                      <div className="chat-bubble bg-blue-50 text-blue-900 text-[18px] max-w-1/2 whitespace-pre-wrap animate-fade-up">
                        {msg.message}
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        )}

        <div
          className={clsx(
            "w-[95vw] lg:w-[60vw]",
            "flex items-center justify-center",
            "fixed bottom-10 right-[calc(50%-47.55vw)] lg:right-[calc(50%-30vw)]"
          )}
        >
          <button
            onClick={() => handleSend()}
            className={clsx(
              "flex items-center gap-2",
              "absolute right-1",
              "w-fit min-h-[56px] rounded-full px-10 bg-blue-900",
              "font-manrope text-white text-[20px] font-bold",
              "transition-all active:scale-95"
            )}
          >
            Send
            <Image
              src={"/icons/btn-send-white.png"}
              alt="Send icon"
              width={20}
              height={30}
            />
          </button>
          <InputDefault
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Pergunte o que quiser..."
          />
        </div>
      </div>
    </main>
  );
}
