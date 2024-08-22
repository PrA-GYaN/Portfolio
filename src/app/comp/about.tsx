import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWatchmanMonitoring } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';

export default function About() {
  return (
    <div className="about" id="About">
        <div className="about-wrapper">
          <div className="text-5xl relative text-custom-offwhite after:content-[''] after:bg-custom-bit-green after:w-56 after:h-3 after:absolute after:left-0 after:bottom-0 after:-z-50 after:opacity-70">About Me</div>
          <div className="content flex flex-row flex-wrap justify-center">
            <div className="about-left-content min-w-48 w-1/3 flex flex-col flex-grow gap-5 text-custom-gray text-base py-12 text-justify">
              <div className="about-desc-box1">
                <p> Hello! My name is Pragyan KC, and I am a software and front-end developer currently studying. I am passionate about creating seamless and user-friendly web experiences and have a solid foundation in coding.</p>
              </div>
              <div className="about-desc-box2">As a fresher, I am continuously learning and adapting to new technologies. My focus has been on front-end development, where I enjoy bringing designs to life. I have experience with HTML, CSS, JavaScript, React, Next, C++ & Python.</div>
              <div className="about-desc-box3">I am actively seeking internship opportunities to apply my skills and learn from experienced professionals. If you are looking for a dedicated and quick-learning intern, I would love to connect and explore how I can contribute to your team.</div>
              <div className="about-desc-box4">Here are a few technologies I’ve been working with recently:</div>
              <ul className="skill-list grid grid-cols-2 gap-3 list-disc list-inside marker:text-custom-bit-green">
                <li>React</li>
                <li>Python</li>
                <li>MongoDb</li>
                <li>.Net</li>
                <li>Node.js</li>
                <li>Next.js</li>
              </ul>
            </div>
            <div className="about-right-content flex flex-col flex-grow items-center pl-8 pt-8 text-custom-offwhite">
              <div className="sdev flex flex-col border gap-6 border-custom-bit-green p-8">
                <div className="sdev-title flex flex-row gap-10 text-custom-offwhite">
                  <FontAwesomeIcon icon={faWatchmanMonitoring} className='w-10' size='1x'/>
                  <div className="dev-title text-2xl font-bold tracking-wide relative"><span className="after:content-[''] after:bg-custom-bit-green after:w-28 after:h-2 after:absolute after:left-0 after:bottom-9 after:-z-50 after:opacity-70">Software</span><br />
                    Developer
                  </div>
                </div>
                <div className="dev-desc max-w-72">Experienced in both functional and OOP: C++, Python, C, JavaScript, .Net.</div>
              </div>
              <div className="fdev flex flex-col border gap-6 border-custom-bit-green p-8">
                <div className="fdev-title flex flex-row gap-10 text-custom-offwhite">
                  <FontAwesomeIcon icon={faReact} className='w-10' size='1x'/>
                  <div className="dev-title text-2xl font-bold tracking-wide relative"><span className="after:content-[''] after:bg-custom-bit-green after:w-28 after:h-2 after:absolute after:left-0 after:bottom-9 after:-z-50 after:opacity-70">FrontEnd</span><br />
                    Developer
                  </div>
                </div>
                <div className="dev-desc max-w-72">Passionate about UI/UX.Fresh graduate with development experience in HTML, CSS, JS, React, and Next.js frameworks.</div>
              </div>
            </div>
        </div>
        </div>
    </div>
  )
}
