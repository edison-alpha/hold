import React from "react";
import './App.css';

const App = () => {
  return (
    <div className="min-h-screen bg-[#aeb8e4] flex flex-col items-center">
      <div className="w-full max-w-[1440px] relative bg-[#aeb8e4] overflow-x-hidden px-4 md:px-6 lg:px-8">
        {/* Navigation Bar */}
        <nav className="w-full max-w-[1150px] mx-auto mt-4 bg-[#d9d9d9] rounded-[85.5px] p-4">
          <div className="flex flex-wrap justify-between items-center gap-4">
            {/* Logo and Navigation Links */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
              {['HOME', 'ABOUT', 'HOW TO BUY', 'CHART'].map((item, index) => (
                <a 
                  key={index}
                  href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="font-['Modak'] text-2xl md:text-3xl text-black hover:text-[#ff5536] transition-all duration-300"
                  style={{
                    '--glow-color': '#ff5536',
                    textShadow: 'var(--hover-shadow, none)'
                  }}
                  onMouseEnter={e => e.target.style.setProperty('--hover-shadow', '0 0 10px var(--glow-color)')}
                  onMouseLeave={e => e.target.style.setProperty('--hover-shadow', 'none')}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              {[
                { platform: 'twitter', url: 'https://twitter.com/yourhandle' },
                { platform: 'telegram', url: 'https://t.me/yourchannel' },
                { platform: 'discord', url: 'https://discord.gg/yourinvite' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-[50px] h-[50px] md:w-[63px] md:h-[63px] bg-[#ff5536] rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_15px_#ff5536] hover:scale-110"
                >
                  {/* Add icon placeholder */}
                  <svg 
                    className="w-6 h-6 text-white" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                  >
                    {/* Simple placeholder icons */}
                    {social.platform === 'twitter' && (
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    )}
                    {social.platform === 'telegram' && (
                      <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-16.55 6.62a2.24 2.24 0 0 0 .85 4.27l4.13.62 1.56 4.67a2.24 2.24 0 0 0 2.27 1.56 2.24 2.24 0 0 0 1.82-1.3l2.53-5.94 5.53.83a2.24 2.24 0 0 0 2.39-3.39L21.198 2.433z"></path>
                    )}
                    {social.platform === 'discord' && (
                      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286z"></path>
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative order-2 lg:order-1">
            <div className="relative">
              <img
                className="w-full max-w-[639px] h-auto object-cover mx-auto"
                alt="Hero character"
                src="https://c.animaapp.com/8z7bWV7X/img/my-character--6--1.png"
              />
              {/* Smoke effect */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className={`smoke-particle smoke-${i + 1}`} />
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h1 className="font-['Modak'] text-5xl md:text-7xl lg:text-9xl leading-tight">
              <span className="text-[#402b64] block animate-fade-in">
                Hold On For
              </span>
              <span className="text-[#ff2121] block animate-slide-up">
                Dear Life
              </span>
            </h1>
          </div>
        </section>

        {/* Contract Address Section */}
        <section className="mt-16 px-4">
          <h2 className="text-center font-['Modak'] text-4xl md:text-6xl text-white [-webkit-text-stroke:4px_#000000] mb-8">
            CONTRACT ADDRESS
          </h2>
          
          <div className="bg-[#d9d9d9] p-4 rounded-lg flex flex-wrap items-center justify-between gap-4">
            <div className="bg-[#ff5536] px-6 py-2 rounded">
              <span className="font-['Modak'] text-white text-2xl">CA:</span>
            </div>
            <div className="flex-1 flex items-center justify-between gap-4 font-['Modak'] text-[#ff5536] text-lg md:text-2xl break-all">
              <span>0x1C51641d1fA0aa078Bf6548cF2E9e57F86Bf082D</span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText('0x1C51641d1fA0aa078Bf6548cF2E9e57F86Bf082D');
                  alert('Contract address copied!');
                }}
                className="p-2 hover:text-[#ff6546] transition-colors"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* HODL Fun Fact Section */}
        <section className="mt-16 px-4">
          <h2 className="text-center font-['Modak'] text-4xl md:text-6xl text-white [-webkit-text-stroke:4px_#000000] mb-8">
            HODL FUN FACT
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="bg-[#fdfff5] rounded-3xl p-6 md:p-8 transform rotate-[-5deg] shadow-lg">
                <p className="font-['Modern_Antiqua'] text-xl md:text-2xl lg:text-4xl leading-relaxed">
                  <span>HODL memecoin characters were created in </span>
                  <span className="font-['Modak']">Monadverse</span>
                  <span>, where digital innovation meets crypto culture. These iconic
                  figures that remind investors to 'Hold On for Dear Life'
                  emerged from our creative platform, embodying the spirit of
                  cryptocurrency resilience in visual form.</span>
                </p>
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-6">
              <img
                className="w-full max-w-[367px] h-auto object-cover rounded-lg"
                alt="HODL illustration"
                src="https://c.animaapp.com/8z7bWV7X/img/img-1@2x.png"
              />
              
              <a 
                href="https://monadverse.land/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#ff5536] px-8 py-3 rounded-lg text-white font-['Modak'] text-2xl md:text-3xl [-webkit-text-stroke:2px_#000000] transition-all duration-300 hover:shadow-[0_0_15px_#ff5536] hover:bg-[#ff6546]"
              >
                In here
              </a>
            </div>
          </div>
        </section>
        
        {/* Buy Now Section */}
        <section className="mt-16 px-4">
          <h2 className="text-center font-['Modak'] text-4xl md:text-6xl text-white [-webkit-text-stroke:4px_#000000] mb-8">
            BUY NOW !
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col items-center">
              <img
                className="w-full max-w-[345px] h-auto object-cover rounded-full bg-[#d9d9d9] p-2"
                alt="Uniswap"
                src="https://c.animaapp.com/8z7bWV7X/img/download-1@2x.png"
              />
              
              <div 
                className="mt-6 font-['Modak'] text-3xl md:text-4xl lg:text-6xl text-[#ff5536] [-webkit-text-stroke:3px_#000000] cursor-pointer transition-all duration-300 hover:shadow-[0_0_15px_#ff5536] hover:scale-105"
                onClick={() => window.open('https://app.uniswap.org', '_blank')}
              >
                UNISWAP
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <img
                className="w-full max-w-[345px] h-auto object-cover rounded-full bg-[#d9d9d9] p-2"
                alt="NADFUN"
                src="https://c.animaapp.com/8z7bWV7X/img/67b45b944608fa8af6fc8fa9-nad-fun-preview-image--updated---1--p-1@2x.png"
              />
              
              <div 
                className="mt-6 font-['Modak'] text-3xl md:text-4xl lg:text-6xl text-[#ff5536] [-webkit-text-stroke:3px_#000000] cursor-pointer transition-all duration-300 hover:shadow-[0_0_15px_#ff5536] hover:scale-105"
                onClick={() => window.open('https://testnet.nad.fun/tokens/0x1C51641d1fA0aa078Bf6548cF2E9e57F86Bf082D', '_blank')}
              >
                NADFUN
              </div>
            </div>
          </div>
        </section>
        
        {/* Quote Section */}
        <section className="mt-16 px-4">
          <h2 className="text-center font-['Modak'] text-3xl md:text-4xl lg:text-6xl text-white [-webkit-text-stroke:3px_#000000] mb-8">
            "Smoke your cigarette and hold" -
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center">
            {[1, 2, 3].map((index) => (
              <img
                key={index}
                className="w-full max-w-[300px] h-auto object-cover rounded-full bg-[#d9d9d9] p-2"
                alt={`Character ${index}`}
                src={`https://c.animaapp.com/8z7bWV7X/img/my-character--${index + 2}--1${index !== 1 ? '@2x' : ''}.png`}
              />
            ))}
          </div>
        </section>
        
        {/* Footer Section */}
        <footer className="mt-16 bg-[#ff5536] py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Logo and Copyright */}
              <div className="flex flex-col items-center md:items-start gap-4">
                <div className="w-[260px] h-auto bg-[#d9d9d9] rounded-full p-4 flex items-center justify-center">
                  <img
                    className="w-[200px] h-auto object-cover"
                    alt="HODL Logo"
                    src="https://c.animaapp.com/8z7bWV7X/img/my-character--6--2-1@2x.png"
                  />
                </div>
                <div className="font-bold text-white text-base">
                  © HOLD 2025
                </div>
              </div>
              
              {/* Brand Name */}
              <div className="flex items-center justify-center">
                <h2 className="font-['Modak'] text-8xl md:text-9xl text-white [-webkit-text-stroke:4px_#000000]">
                  HODL
                </h2>
              </div>
              
              {/* Links and Slogan */}
              <div className="flex flex-col items-center md:items-end gap-6">
                <a
                  className="font-['Modak'] text-white text-2xl hover:text-[#d9d9d9] transition-colors duration-300"
                  href="https://www.thrive.co.id/service/it-outsourcing-service"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  IT Consultation
                </a>
                
                <p className="font-['Modak'] text-white text-2xl text-center md:text-right">
                  Hold On <br />
                  For Dear Life
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;