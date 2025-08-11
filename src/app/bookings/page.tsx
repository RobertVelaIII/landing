"use client";

import React from 'react';

export default function BookingsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Booking Form */}
      <section id="booking" className="py-20 bg-black border-t border-neutral-800">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl mb-12">Book Your Consultation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm mb-2">Full Name</label>
                    <input type="text" className="w-full p-3 bg-black border border-neutral-800 focus:border-white focus:outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Email Address</label>
                    <input type="email" className="w-full p-3 bg-black border border-neutral-800 focus:border-white focus:outline-none transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm mb-2">Phone Number</label>
                  <input type="tel" className="w-full p-3 bg-black border border-neutral-800 focus:border-white focus:outline-none transition-colors" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm mb-2">Placement</label>
                    <select className="w-full p-3 bg-black border border-neutral-800 focus:border-white focus:outline-none transition-colors">
                      <option>Arm</option>
                      <option>Leg</option>
                      <option>Back</option>
                      <option>Chest</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm mb-2">Size</label>
                    <select className="w-full p-3 bg-black border border-neutral-800 focus:border-white focus:outline-none transition-colors">
                      <option>Small (2-3 inches)</option>
                      <option>Medium (4-6 inches)</option>
                      <option>Large (7-10 inches)</option>
                      <option>Extra Large (11+ inches)</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm mb-2">Style</label>
                  <select className="w-full p-3 bg-black border border-neutral-800 focus:border-white focus:outline-none transition-colors">
                    <option>Japanese Traditional</option>
                    <option>Neo-Traditional</option>
                    <option>American Traditional</option>
                    <option>Blackwork</option>
                    <option>Fine Line</option>
                    <option>Custom Lettering</option>
                    <option>Geometric</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-2">Additional Notes</label>
                  <textarea rows={4} className="w-full p-3 bg-black border border-neutral-800 focus:border-white focus:outline-none transition-colors"></textarea>
                </div>
                <button type="submit" className="w-full bg-white text-black py-4 hover:bg-neutral-200 transition-colors">Submit Request</button>
              </form>
            </div>
            <div className="space-y-8">
              <div className="border border-neutral-800 p-8">
                <h3 className="text-2xl mb-4">Consultation Process</h3>
                <p className="text-neutral-300 mb-6">After submitting your request, our artists will review your concept and contact you within 48 hours to schedule an in-person or virtual consultation.</p>
                <ul className="space-y-3 text-neutral-300">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-1 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Discuss your vision and placement</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-1 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Review artist portfolios and select your artist</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-1 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Get a custom quote and timeline</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 mt-1 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Schedule your session(s)</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col space-y-4">
                <button className="flex items-center justify-center space-x-2 bg-black border-2 border-white py-4 hover:bg-neutral-900 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  <span>Chat with an Artist</span>
                </button>
                <button className="flex items-center justify-center space-x-2 bg-white text-black py-4 hover:bg-neutral-200 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Call Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
