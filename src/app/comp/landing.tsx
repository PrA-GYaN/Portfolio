import './main.css'

export default function Landing() {
  return (
    <div className="landing flex-grow flex">
        <div className="landing-wrapper flex flex-col py-10 pb-20">
            <div className="main-text text-7x font-bold text-custom-offwhite med:text-8x">PRAGYAN KC</div>
            <div className="sub-text text-4x font-semibold text-custom-gray med:text-4xh">SOFTWARE ENGINEER & FRONT END DEVELOPER</div>
            <div className="desc-text text-base text-custom-gray w-3/6 text-left my-7 med:my-5">
              <p>
                As an aspiring software developer, I am passionate about creating high-quality, user-centric digital experiences by building reliable applications and honing my skills in coding, debugging, and modern frameworks.
              </p>
            </div>
            <div className="contact-btn flex items-center justify-center text-lg px-8 py-3 rounded-lg border-custom-bit-green border-2 text-custom-bit-green shadow-3xl hover:shadow-custom-bit-green hover:cursor-pointer transition-all duration-150 ease-linear">Contact Me</div>
        </div>
    </div>
  )
}
