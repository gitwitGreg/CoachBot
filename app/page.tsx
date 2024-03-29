import Chat from "./chat/page";

export default function Home() {
  return (
    <main>
      <div className="bg-black h-auto w-full text-white">
        <div className="p-4 flex justify-between shadow border-b border-gray-800 px-10">
          <h1 className="text-xl">
            CoachBot
          </h1>
          <p>Talk to <span className="text-orange-400">Coach Bot</span></p>
        </div>
        <Chat />
      </div>
    </main>
  )
}
