"use client";

import ChatWidget from "../components/ChatWidget";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState, useEffect } from "react";

export default function Home() {
  const sliderRef = useRef<Slider>(null);
  const [windowWidth, setWindowWidth] = useState<number>(0);
  const [isClient, setIsClient] = useState<boolean>(false);
  
  // Initialize client-side rendering and window width
  useEffect(() => {
    setIsClient(true);
    setWindowWidth(window.innerWidth);
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  
  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section 
        id="hero" 
        className="relative h-[800px] flex items-center bg-neutral-900"
      >
        {/* Solid background as fallback since image isn't loading */}
        <div className="absolute inset-0 bg-gradient-to-b from-black to-neutral-800"></div>
        
        {/* Hero Content */}
        <div className="container relative z-10 mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl mb-6 leading-tight">Permanent Art for the Discerning Soul</h1>
            <p className="text-xl text-neutral-300 mb-8">Premium custom tattoos crafted by award-winning artists in a private studio setting.</p>
            <div className="flex space-x-4">
              <span className="inline-block bg-red-600 text-white px-8 py-4 text-lg font-medium rounded-full hover:bg-red-700 transition-colors cursor-pointer">Book</span>
              <span className="inline-block bg-neutral-200 text-black px-8 py-4 text-lg font-medium rounded-full hover:bg-neutral-300 transition-colors cursor-pointer">Chat with Artist</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Portfolio Section - Netflix Style Carousel */}
      <section id="portfolio" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="mb-6">
            <h2 className="text-4xl">Our Masterpieces</h2>
          </div>
          
          <div className="relative overflow-hidden group">
            <button 
              onClick={goToPrev}
              className="absolute left-0 top-1/2 z-10 transform -translate-y-1/2 p-2 rounded-full bg-red-600 hover:bg-red-700 transition-colors opacity-70"
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={goToNext}
              className="absolute right-0 top-1/2 z-10 transform -translate-y-1/2 p-2 rounded-full bg-red-600 hover:bg-red-700 transition-colors opacity-70"
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            {isClient && (
              <Slider 
                ref={sliderRef} 
                {...settings} 
                className="-mx-2"
                slidesToShow={windowWidth < 640 ? 1 : windowWidth < 768 ? 2 : windowWidth < 1024 ? 3 : windowWidth < 1280 ? 4 : 5}
                arrows={false}
                swipeToSlide={true}
              >

              <div className="px-2">
                <div className="bg-neutral-800 h-96 rounded-lg overflow-hidden relative group cursor-pointer">
                  <div className="w-full h-full bg-neutral-700 flex items-center justify-center">
                    <img 
                      src="/images/tattoo2.jpg" 
                      alt="Japanese Traditional" 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null; // Prevent infinite loop
                        target.style.display = 'none';
                        target.parentElement!.classList.add('flex', 'items-center', 'justify-center');
                        const textEl = document.createElement('span');
                        textEl.textContent = 'Japanese Traditional';
                        textEl.className = 'text-white text-lg font-medium';
                        target.parentElement!.appendChild(textEl);
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-lg font-medium">Japanese Traditional</span>
                  </div>
                </div>
              </div>
              <div className="px-2">
                <div className="bg-neutral-800 h-96 rounded-lg overflow-hidden relative group cursor-pointer">
                  <div className="w-full h-full bg-neutral-700 flex items-center justify-center">
                    <img 
                      src="/images/tattoo3.jpg" 
                      alt="Neo-Traditional" 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null; // Prevent infinite loop
                        target.style.display = 'none';
                        target.parentElement!.classList.add('flex', 'items-center', 'justify-center');
                        const textEl = document.createElement('span');
                        textEl.textContent = 'Neo-Traditional';
                        textEl.className = 'text-white text-lg font-medium';
                        target.parentElement!.appendChild(textEl);
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-lg font-medium">Neo-Traditional</span>
                  </div>
                </div>
              </div>
              <div className="px-2">
                <div className="bg-neutral-800 h-96 rounded-lg overflow-hidden relative group cursor-pointer">
                  <img 
                    src="/images/tattoo4.jpg" 
                    alt="American Traditional" 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null; // Prevent infinite loop
                      target.style.display = 'none';
                      target.parentElement!.classList.add('flex', 'items-center', 'justify-center');
                      const textEl = document.createElement('span');
                      textEl.textContent = 'American Traditional';
                      textEl.className = 'text-white text-lg font-medium';
                      target.parentElement!.appendChild(textEl);
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-lg font-medium">American Traditional</span>
                  </div>
                </div>
              </div>
              <div className="px-2">
                <div className="bg-neutral-800 h-96 rounded-lg overflow-hidden relative group cursor-pointer">
                  <div className="w-full h-full bg-neutral-700 flex items-center justify-center">
                    <img 
                      src="/images/tattoo5.jpg" 
                      alt="Fine Line" 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null; // Prevent infinite loop
                        target.style.display = 'none';
                        target.parentElement!.classList.add('flex', 'items-center', 'justify-center');
                        const textEl = document.createElement('span');
                        textEl.textContent = 'Fine Line';
                        textEl.className = 'text-white text-lg font-medium';
                        target.parentElement!.appendChild(textEl);
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-lg font-medium">Fine Line</span>
                  </div>
                </div>
              </div>
              <div className="px-2">
                <div className="bg-neutral-800 h-96 rounded-lg overflow-hidden relative group cursor-pointer">
                  <img 
                    src="/images/tattoo6.jpg" 
                    alt="Custom Lettering" 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/400x600/333333/FFFFFF?text=Custom+Lettering';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-lg font-medium">Custom Lettering</span>
                  </div>
                </div>
              </div>

              <div className="px-2">
                <div className="bg-neutral-800 h-96 rounded-lg overflow-hidden relative group cursor-pointer">
                  <div className="w-full h-full bg-neutral-700 flex items-center justify-center">
                    <img 
                      src="/images/tattoo8.jpg" 
                      alt="Geometric" 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null; // Prevent infinite loop
                        target.style.display = 'none';
                        target.parentElement!.classList.add('flex', 'items-center', 'justify-center');
                        const textEl = document.createElement('span');
                        textEl.textContent = 'Geometric';
                        textEl.className = 'text-white text-lg font-medium';
                        target.parentElement!.appendChild(textEl);
                      }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-lg font-medium">Geometric</span>
                  </div>
                </div>
              </div>
            </Slider>
            )}
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-20 bg-black border-t border-neutral-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-black border border-neutral-800 p-8 hover:border-white transition-colors">
              <h3 className="text-2xl mb-4">Custom Design</h3>
              <p className="text-neutral-300 mb-6">Unique artwork created specifically for you, based on your vision and our artistic expertise.</p>
              <p className="text-xl">From $300</p>
            </div>
            <div className="bg-black border border-neutral-800 p-8 hover:border-white transition-colors">
              <h3 className="text-2xl mb-4">Cover-Up Work</h3>
              <p className="text-neutral-300 mb-6">Transform existing tattoos into new, beautiful designs that align with your current aesthetic.</p>
              <p className="text-xl">From $450</p>
            </div>
            <div className="bg-black border border-neutral-800 p-8 hover:border-white transition-colors">
              <h3 className="text-2xl mb-4">Full Sleeve</h3>
              <p className="text-neutral-300 mb-6">Comprehensive design and execution of full arm artwork with multiple sessions.</p>
              <p className="text-xl">From $2,500</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-black border-t border-neutral-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl mb-12">Client Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6">
              <div className="w-20 h-20 rounded-full bg-neutral-800 flex-shrink-0 overflow-hidden">
                <img src="/images/joe-rogan.png" alt="Joe Rogan" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="w-12 h-1 bg-white mb-4"></div>
                <p className="text-neutral-300 mb-4">"I'm Joe rogan, and these fucking tattoo's hurt, the fucking numbing cream wore off but the tattoos are so good. Have you ever tried DMT ? I just took a hit to the skull. Fuck Joe Biden. Highly recommend Chrispy Craig for your tattoo needs."</p>
                <p className="mb-4">— Joe Rogan</p>
                <div className="flex items-center space-x-2">
                  <button 
                    className="p-2 rounded-full bg-red-600 hover:bg-red-700 transition-colors"
                    onClick={() => {
                      const audio = document.getElementById('audio-testimonial-1') as HTMLAudioElement;
                      if (audio.paused) {
                        audio.play();
                      } else {
                        audio.pause();
                        audio.currentTime = 0;
                      }
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                  <span className="text-sm text-neutral-400">Listen to testimonial</span>
                  <audio id="audio-testimonial-1" src="/audio/testimonial1.mp3" preload="none"></audio>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-6">
              <div className="w-20 h-20 rounded-full bg-neutral-800 flex-shrink-0 overflow-hidden">
                <img src="/images/andrew-tate.png" alt="Andrew Tate" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="w-12 h-1 bg-white mb-4"></div>
                <p className="text-neutral-300 mb-4">"Chrispy Craig has the fucking sauce, do you understand? 
                His unmatched perspicacity coupled with his sheer indefitigability makes him a feared opponent in any realm of human endeavor. American Traditional, Neo Traditional, everything else., blah blah blah, shit you can not afford because you are broke! Your fucking Poor!  Are you connecting the dots? Put him on fucking ink master. "</p>
                <p className="mb-4">— Andrew Tate</p>
                <div className="flex items-center space-x-2">
                  <button 
                    className="p-2 rounded-full bg-red-600 hover:bg-red-700 transition-colors"
                    onClick={() => {
                      const audio = document.getElementById('audio-testimonial-2') as HTMLAudioElement;
                      if (audio.paused) {
                        audio.play();
                      } else {
                        audio.pause();
                        audio.currentTime = 0;
                      }
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                  <span className="text-sm text-neutral-400">Listen to testimonial</span>
                  <audio id="audio-testimonial-2" src="/audio/testimonial2.mp3" preload="none"></audio>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <ChatWidget />
    </div>
  );
}
