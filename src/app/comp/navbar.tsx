import './main.css'

export default function Navbar() {
  return (
    <div className="header-warp bg-custom-dark-blue px-16 py-10 text-white ml-16 med:px-12 med:ml-20">
        <div className="header-warp-inner flex flex-row justify-between">
            <div className="left-part">
              <div className='octagonwrap shadow-3xl hover:shadow-custom-bit-green hover:cursor-pointer transition-all duration-150 ease-linear'>
                <div className='octagon'>
                  <div className='inner'>P</div>
                </div>
              </div>
            </div>
            <div className="right-part flex flex-row items-center gap-16 med:gap-10">
                <div className="links flex flex-row gap-10 text-x text-custom-gray">
                    <a href="#Home" className="link1 hover:text-custom-bit-green active:text-custom-bit-green transition-all duration-200 ease-linear">Home</a>
                    <a href="#About" className="link2 hover:text-custom-bit-green active:text-custom-bit-green transition-all duration-200 ease-linear">About</a>
                    <a href="#Projects" className="link3 hover:text-custom-bit-green active:text-custom-bit-green transition-all duration-200 ease-linear">Projects</a>
                    <a href="#Contact" className="link4 hover:text-custom-bit-green active:text-custom-bit-green transition-all duration-200 ease-linear">Contact</a>
                </div>
                {/* <div className="resume text-x px-8 py-3 rounded-lg border-custom-bit-green border-2 text-custom-bit-green shadow-3xl hover:shadow-custom-bit-green hover:cursor-pointer transition-all duration-150 ease-linear">Resume</div> */}
                <a 
            href="/assets/cv.pdf" 
            className="resume text-x px-8 py-3 rounded-lg border-custom-bit-green border-2 text-custom-bit-green shadow-3xl hover:shadow-custom-bit-green cursor-pointer transition-all duration-150 ease-linear"
            aria-label="Resume"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
            </div>
        </div>
      </div>
  );
}
