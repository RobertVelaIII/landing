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
      
      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl mb-12">Our Masterpieces</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-neutral-800 h-96 flex items-center justify-center">
              <span className="text-white">Black & Grey Realism</span>
            </div>
            <div className="bg-neutral-800 h-96 flex items-center justify-center">
              <span className="text-white">Japanese Traditional</span>
            </div>
            <div className="bg-neutral-800 h-96 flex items-center justify-center">
              <span className="text-white">Neo-Traditional</span>
            </div>
            <div className="bg-neutral-800 h-96 flex items-center justify-center">
              <span className="text-white">Blackwork</span>
            </div>
            <div className="bg-neutral-800 h-96 flex items-center justify-center">
              <span className="text-white">Fine Line</span>
            </div>
            <div className="bg-neutral-800 h-96 flex items-center justify-center">
              <span className="text-white">Custom Lettering</span>
            </div>
          </div>
        </div>
      </section>
      
      <ChatWidget />
    </div>
  );
}
