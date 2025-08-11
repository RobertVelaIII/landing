import ChatWidget from "../components/ChatWidget";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to my page</h1>
      </div>
      <ChatWidget />
    </div>
  );
}
