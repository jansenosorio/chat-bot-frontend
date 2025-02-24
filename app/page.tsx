import clsx from "clsx";

export default function Home() {
  return (
    <main
      className={clsx(
        "flex items-center justify-center",
        "w-screen h-screen",
        "bg-gradient-to-tr from-blue-200 to-blue-600",
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
        <div className={clsx("w-full", "transition-all")}>
          <div className="chat chat-start">
            <div className="chat-header">Obi-Wan Kenobi</div>
            <div className="chat-bubble">
              Its over Anakin,
              <br />I have the high ground.
            </div>
          </div>
          <div className="chat chat-end">
            <div className="chat-header">Obi-Wan Kenobi</div>
            <div className="chat-bubble">You underestimate my power!</div>
          </div>
        </div>
        <div className={clsx("w-full")}>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-primary w-full"
          />
        </div>
      </div>
    </main>
  );
}
