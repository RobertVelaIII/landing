import ChatWidget from "../components/ChatWidget";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section id="hero" className="pt-24 h-[800px] flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl mb-6 leading-tight">Permanent Art for the Discerning Soul</h1>
            <p className="text-xl text-neutral-300 mb-8">Premium custom tattoos crafted by award-winning artists in a private studio setting.</p>
            <span className="inline-block bg-white text-black px-8 py-4 text-lg hover:bg-neutral-200 transition-colors cursor-pointer">Book a Consultation</span>
          </div>
        </div>
      </section>
      <ChatWidget />
    </div>
  );
}
