import React from "react";
import './App.css';

const App = () => {
  return (
      <div className="bg-[#aeb8e4] overflow-hidden border border-solid border-black w-[1440px] h-[4324px] relative">
        <div className="absolute w-[1150px] h-[116px] top-4 left-[145px] bg-[#d9d9d9] rounded-[85.5px]">
          <div className="absolute w-[816px] h-[63px] top-[27px] left-[82px]">
            <div className="absolute w-[816px] h-[63px] top-0 left-0">
              <div className="absolute w-[756px] h-[34px] top-3 left-0">
                <a 
                  href="/about"
                  className="w-[167px] left-[147px] absolute top-0 [font-family:'Modak',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[normal] whitespace-nowrap hover:text-[#ff5536] hover:glow-effect transition-all duration-300"
                  style={{
                    '--glow-color': '#ff5536',
                    textShadow: 'var(--hover-shadow, none)'
                  }}
                  onMouseEnter={e => e.target.style.setProperty('--hover-shadow', '0 0 10px var(--glow-color)')}
                  onMouseLeave={e => e.target.style.setProperty('--hover-shadow', 'none')}
                >
                  ABOUT
                </a>

                <a 
                  href="/chart"
                  className="w-[167px] left-[581px] absolute top-0 [font-family:'Modak',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[normal] whitespace-nowrap hover:text-[#ff5536] hover:glow-effect transition-all duration-300"
                  style={{
                    '--glow-color': '#ff5536',
                    textShadow: 'var(--hover-shadow, none)'
                  }}
                  onMouseEnter={e => e.target.style.setProperty('--hover-shadow', '0 0 10px var(--glow-color)')}
                  onMouseLeave={e => e.target.style.setProperty('--hover-shadow', 'none')}
                >
                  CHART
                </a>

                <a 
                  href="/"
                  className="w-[138px] left-0 absolute top-0 [font-family:'Modak',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[normal] whitespace-nowrap hover:text-[#ff5536] hover:glow-effect transition-all duration-300"
                  style={{
                    '--glow-color': '#ff5536',
                    textShadow: 'var(--hover-shadow, none)'
                  }}
                  onMouseEnter={e => e.target.style.setProperty('--hover-shadow', '0 0 10px var(--glow-color)')}
                  onMouseLeave={e => e.target.style.setProperty('--hover-shadow', 'none')}
                >
                  HOME
                </a>

                <a 
                  href="/how-to-buy"
                  className="absolute w-[185px] top-0 left-[323px] [font-family:'Modak',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[normal] whitespace-nowrap hover:text-[#ff5536] hover:glow-effect transition-all duration-300"
                  style={{
                    '--glow-color': '#ff5536',
                    textShadow: 'var(--hover-shadow, none)'
                  }}
                  onMouseEnter={e => e.target.style.setProperty('--hover-shadow', '0 0 10px var(--glow-color)')}
                  onMouseLeave={e => e.target.style.setProperty('--hover-shadow', 'none')}
                >
                  HOW TO BUY
                </a>
              </div>

              <div className="absolute w-[63px] h-[63px] top-0 left-[753px] bg-[#ff5536] rounded-[31.5px] cursor-pointer transition-all duration-300 hover:shadow-[0_0_15px_#ff5536] hover:scale-110" />
            </div>

            {/* Twitter/X Circle */}
            <a 
              href="https://twitter.com/yourhandle" 
              target="_blank" 
              rel="noopener noreferrer"
              className="absolute w-[63px] h-[63px] top-0 left-[753px] bg-[#ff5536] rounded-[31.5px] cursor-pointer transition-all duration-300 hover:shadow-[0_0_15px_#ff5536] hover:scale-110"
              onMouseEnter={e => e.target.style.transform = 'scale(1.1)'}
              onMouseLeave={e => e.target.style.transform = 'scale(1)'}
            />
          </div>

          {/* Telegram Circle */}
          <a 
            href="https://t.me/yourchannel" 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute w-[63px] h-[63px] top-[27px] left-[923px] bg-[#ff5536] rounded-[31.5px] cursor-pointer transition-all duration-300 hover:shadow-[0_0_15px_#ff5536] hover:scale-110"
            onMouseEnter={e => e.target.style.transform = 'scale(1.1)'}
            onMouseLeave={e => e.target.style.transform = 'scale(1)'}
          />

          {/* Discord Circle */}
          <a 
            href="https://discord.gg/yourinvite" 
            target="_blank" 
            rel="noopener noreferrer"
            className="absolute w-[63px] h-[63px] top-[27px] left-[1011px] bg-[#ff5536] rounded-[31.5px] cursor-pointer transition-all duration-300 hover:shadow-[0_0_15px_#ff5536] hover:scale-110"
            onMouseEnter={e => e.target.style.transform = 'scale(1.1)'}
            onMouseLeave={e => e.target.style.transform = 'scale(1)'}
          />
        </div>

        <div className="absolute w-[1440px] h-[1181px] top-[226px] left-0">
          <div className="absolute w-[1440px] h-[461px] top-[720px] left-0 bg-[#abb8e5]" />

          <div className="relative">
            {/* Smoke particles - more particles for continuous effect */}
            <div className="absolute top-[350px] left-[250px] z-10">
              <div className="smoke-particle smoke-1" />
              <div className="smoke-particle smoke-2" />
              <div className="smoke-particle smoke-3" />
              <div className="smoke-particle smoke-4" />
              <div className="smoke-particle smoke-5" />
              <div className="smoke-particle smoke-6" />
              <div className="smoke-particle smoke-7" />
              <div className="smoke-particle smoke-8" />
            </div>

            <img
              className="w-[632px] top-[3px] absolute h-[719px] left-0 object-cover"
              alt="My character"
              src="https://c.animaapp.com/8z7bWV7X/img/my-character--6--2.png"
            />
          </div>

          <div className="absolute w-[537px] h-[399px] top-[284px] left-[624px] rotate-[8.00deg]">
            <div className="relative w-[488px] h-[312px] top-[43px] left-[25px] rotate-[11.00deg]">
              <div className="relative w-[486px] h-[312px]">
                <div className="absolute w-[454px] h-[174px] top-[69px] left-4 bg-[#402b64] rounded-[52px] rotate-[-19.00deg]" />

                <div className="absolute top-[94px] left-[71px] rotate-[-19.00deg] [-webkit-text-stroke:4px_#000000] [font-family:'Modak',Helvetica] font-normal text-[#fdfff5] text-9xl tracking-[3.84px] leading-[128px] whitespace-nowrap">
                  H&nbsp;&nbsp; DL
                </div>

                <div className="absolute w-[76px] h-[76px] top-32 left-[169px] bg-[#fdfff5] rounded-[14px] rotate-[-64.00deg]" />

                <div className="absolute w-[45px] h-[46px] top-36 left-[185px] bg-[#402b64] rounded rotate-[-58.00deg]" />
              </div>
            </div>
          </div>

          <div className="absolute top-[743px] left-[713px] [-webkit-text-stroke:7px_#000000] [font-family:'Modak',Helvetica] font-normal text-white text-[64px] tracking-[1.92px] leading-[64px] whitespace-nowrap">
            CONTRACT ADDRESS
          </div>

          <p className="absolute w-[743px] top-24 left-[614px] [font-family:'Modak',Helvetica] font-normal text-transparent text-9xl tracking-[3.84px] leading-[128px] animate-fade-in">
            <span className="text-[#402b64] tracking-[4.92px] inline-block animate-slide-up">
              Hold On For
            </span>

            <span className="text-[#ff5536] tracking-[4.92px]">
              {" "}
              <br />
            </span>

            <span className="text-[#ff2121] tracking-[4.92px] inline-block animate-slide-up animation-delay-300">Dear Life</span>
          </p>

          <div className="absolute w-[1024px] h-[113px] top-[847px] left-[354px]">
            <div className="relative w-[1020px] h-[113px] bg-[#d9d9d9]">
              <div className="absolute w-[764px] top-[41px] left-[170px] [font-family:'Modak',Helvetica] font-normal text-[#ff5536] text-[32px] tracking-[0.96px] leading-8 whitespace-nowrap flex items-center gap-4">
                <span>0xF9C19f0838eAb1c3F31E1bd5A3c340D8736C62B7</span>
                <svg
                  onClick={() => {
                    navigator.clipboard.writeText('0xF9C19f0838eAb1c3F31E1bd5A3c340D8736C62B7');
                    alert('Contract address copied!');
                  }}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 cursor-pointer text-[#ff5536] hover:text-[#ff6546] transition-colors duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  style={{ minWidth: '32px' }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>

              <div className="absolute w-[123px] h-[83px] top-[15px] left-[37px] bg-[#ff5536]">
                <div className="absolute w-[68px] top-[26px] left-[34px] [font-family:'Modak',Helvetica] font-normal text-[#fdfff5] text-4xl tracking-[1.08px] leading-9 whitespace-nowrap">
                  CA:
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute w-[1463px] h-[3107px] top-[1407px] left-0">
          <img
            className="absolute w-[1440px] h-[2498px] top-0 left-0"
            alt="Element"
            src="https://c.animaapp.com/8z7bWV7X/img/1-1.png"
          />

          <img
            className="absolute w-[391px] h-[414px] top-[2079px] left-[1049px] object-cover"
            alt="My character"
            src="https://c.animaapp.com/8z7bWV7X/img/my-character--4--1@2x.png"
          />

          <img
            className="absolute w-[406px] h-[406px] top-[2092px] left-[753px] object-cover"
            alt="My character"
            src="https://c.animaapp.com/8z7bWV7X/img/my-character--5--1@2x.png"
          />

          <img
            className="absolute w-[406px] h-[406px] top-[2092px] left-[441px] object-cover"
            alt="My character"
            src="https://c.animaapp.com/8z7bWV7X/img/my-character--3--1@2x.png"
          />

          <p className="absolute top-[68px] left-[101px] [-webkit-text-stroke:7px_#000000] [font-family:'Modak',Helvetica] font-normal text-transparent text-8xl tracking-[2.88px] leading-[96px]">
            <span className="text-[#fdfff5] tracking-[2.76px]">HODL</span>

            <span className="text-black tracking-[2.76px]">
              {" "}
              <br />
            </span>

            <span className="text-[#fdfff5] tracking-[2.76px]">FUN FACT</span>
          </p>

          <div className="absolute top-[953px] left-[770px] [-webkit-text-stroke:7px_#000000] [font-family:'Modak',Helvetica] font-normal text-[#fdfff5] text-8xl tracking-[2.88px] leading-[96px] whitespace-nowrap">
            BUY NOW !
          </div>

          <div className="absolute w-[1463px] h-[614px] top-[2493px] left-0">
            <div className="relative w-[1473px] h-[614px]">
              <div className="absolute w-[1473px] h-[614px] top-0 left-0">
                <div className="relative w-[1463px] h-[608px]">
                  <div className="absolute w-[1440px] h-[429px] top-0 left-0 bg-[#ff5536]" />

                  <div className="absolute top-[156px] left-[457px] [-webkit-text-stroke:6px_#000000] [font-family:'Modak',Helvetica] font-normal text-white text-[300px] tracking-[0] leading-[normal]">
                    HODL
                  </div>

                  <div className="absolute w-[53px] h-[55px] top-[420px] left-[138px] bg-[#ff2121] rounded-[1px]" />

                  <div className="absolute top-[66px] left-[41px] [font-family:'Inter',Helvetica] font-bold text-white text-base tracking-[0] leading-[normal] whitespace-nowrap">
                    © HOLD 2025
                  </div>

                  <p className="absolute w-[272px] top-[287px] left-[1191px] [font-family:'Modak',Helvetica] font-normal text-white text-[32px] tracking-[0] leading-[normal] whitespace-nowrap">
                    Hold On <br />
                    For Dear Life
                  </p>
                </div>
              </div>

              <div className="absolute w-[260px] h-[282px] top-[230px] left-24">
                <div className="relative h-[282px]">
                  <div className="absolute w-[260px] h-[269px] top-[13px] left-0 bg-[#d9d9d9] rounded-[130px/134.41px]" />

                  <img
                    className="absolute w-[239px] h-[194px] top-0 left-2.5 object-cover"
                    alt="My character"
                    src="https://c.animaapp.com/8z7bWV7X/img/my-character--6--2-1@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute w-[579px] h-[572px] top-[324px] left-[117px] bg-[#fdfff5] rounded-[46px] rotate-[-5.00deg]" />

          <p className="absolute w-[521px] top-[385px] left-[161px] rotate-[-5.00deg] [font-family:'Modern_Antiqua',Helvetica] font-normal text-black text-4xl tracking-[1.08px] leading-9">
            <span className="tracking-[0.39px]">
              HODL memecoin characters were created in{" "}
            </span>

            <span className="[font-family:'Modak',Helvetica] tracking-[0.39px]">
              Monadverse
            </span>

            <span className="tracking-[0.39px]">
              , where digital innovation meets crypto culture. These iconic
              figures that remind investors to &#39;Hold On for Dear Life&#39;
              emerged from our creative platform, embodying the spirit of
              cryptocurrency resilience in visual form.
            </span>
          </p>

          <img
            className="absolute w-[367px] h-[367px] top-[198px] left-[928px] object-cover"
            alt="Img"
            src="https://c.animaapp.com/8z7bWV7X/img/img-1@2x.png"
          />

          <div className="absolute w-[233px] h-[73px] top-[596px] left-[995px] bg-[#ff5536]">
            <a 
              href="https://monadverse.land/"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute w-full h-full flex items-center justify-center hover:text-[#ff5536] hover:glow-effect transition-all duration-300"
              style={{
                '--glow-color': '#ff5536',
                textShadow: 'var(--hover-shadow, none)'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.setProperty('--hover-shadow', '0 0 20px var(--glow-color)');
                e.currentTarget.style.backgroundColor = '#ff6546';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.setProperty('--hover-shadow', 'none');
                e.currentTarget.style.backgroundColor = '#ff5536';
              }}
            >
              <div className="[-webkit-text-stroke:3px_#000000] [font-family:'Modak',Helvetica] font-normal text-white text-4xl tracking-[1.08px] leading-9 whitespace-nowrap">
                In here
              </div>
            </a>
          </div>
          <div className="absolute top-[1516px] left-[322px] [-webkit-text-stroke:5px_#000000] [font-family:'Modak',Helvetica] font-normal text-[#ff5536] text-[64px] tracking-[1.92px] leading-[64px] whitespace-nowrap cursor-pointer hover:glow-effect transition-all duration-300"
            style={{
              '--glow-color': '#ff5536',
              textShadow: 'var(--hover-shadow, none)'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.setProperty('--hover-shadow', '0 0 15px var(--glow-color)');
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.setProperty('--hover-shadow', 'none');
              e.currentTarget.style.transform = 'scale(1)';
            }}
            onClick={() => window.open('https://app.uniswap.org', '_blank')}
          >
            UNISWAP
          </div>

          <div className="absolute top-[1516px] left-[855px] [-webkit-text-stroke:5px_#000000] [font-family:'Modak',Helvetica] font-normal text-[#ff5536] text-[64px] tracking-[1.92px] leading-[64px] whitespace-nowrap cursor-pointer hover:glow-effect transition-all duration-300"
            style={{
              '--glow-color': '#ff5536',
              textShadow: 'var(--hover-shadow, none)'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.setProperty('--hover-shadow', '0 0 15px var(--glow-color)');
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.setProperty('--hover-shadow', 'none');
              e.currentTarget.style.transform = 'scale(1)';
            }}
            onClick={() => window.open('https://testnet.nad.fun/tokens/0xF9C19f0838eAb1c3F31E1bd5A3c340D8736C62B7', '_blank')}
          >
            NADFUN
          </div>

          <div className="absolute w-[352px] h-[349px] top-[1109px] left-[800px]">
            <div className="relative h-[349px]">
              <div className="absolute w-[340px] h-[333px] top-4 left-3 bg-[#d9d9d9] rounded-[170px/166.5px]" />

              <img
                className="absolute w-[343px] h-[342px] top-0 left-0"
                alt="Img"
                src="https://c.animaapp.com/8z7bWV7X/img/67b45b944608fa8af6fc8fa9-nad-fun-preview-image--updated---1--p-1@2x.png"
              />
            </div>
          </div>

          <div className="absolute w-[352px] h-[349px] top-[1109px] left-[800px]">
            <div className="relative h-[349px]">
              <div className="absolute w-[340px] h-[333px] top-4 left-3 bg-[#d9d9d9] rounded-[170px/166.5px]" />

              <img
                className="absolute w-[343px] h-[342px] top-0 left-0"
                alt="Img"
                src="https://c.animaapp.com/8z7bWV7X/img/67b45b944608fa8af6fc8fa9-nad-fun-preview-image--updated---1--p-1@2x.png"
              />
            </div>
          </div>

          <p className="absolute top-[1937px] left-[49px] [-webkit-text-stroke:6px_#000000] [font-family:'Modak',Helvetica] font-normal text-white text-[64px] tracking-[1.92px] leading-[64px] whitespace-nowrap">
            &#34;Burn your cigarette now and hold HODL&#34; -
          </p>

          <div className="absolute w-[345px] h-[343px] top-[1125px] left-72">
            <div className="relative h-[343px]">
              <div className="absolute w-[340px] h-[333px] top-0 left-[5px] bg-[#d9d9d9] rounded-[170px/166.5px]" />

              <img
                className="absolute w-[345px] h-[343px] top-0 left-0 object-cover"
                alt="Download"
                src="https://c.animaapp.com/8z7bWV7X/img/download-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
  );
};

export default App;
