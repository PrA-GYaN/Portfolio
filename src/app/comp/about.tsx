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
                <p> Hello! My name is Pragyan KC, and I am a passionate software and full-stack developer currently pursuing my studies. I specialize in creating seamless and user-friendly web experiences, supported by a strong foundation in programming and problem-solving.</p>
              </div>
              <div className="about-desc-box2">As a fresher, I am continuously learning and adapting to new technologies. My primary focus is on front-end and full-stack development, where I enjoy transforming ideas into functional and efficient solutions. I have experience working with a variety of programming languages, including Python, Java, JavaScript, TypeScript, PHP, C, C++, and Go.</div>
              <div className="about-desc-box3">I am actively seeking internship opportunities to apply my skills, expand my knowledge, and collaborate with experienced professionals. If you&apos;re looking for a dedicated and quick-learning intern, I would love to connect and explore how I can contribute to your team.</div>
              <div className="about-desc-box4">Here are a few technologies I&apos;ve been working with recently:</div>
              <ul className="skill-list grid grid-cols-2 gap-3 list-disc list-inside marker:text-custom-bit-green">
                <li>React</li>
                <li>Python</li>
                <li>C#</li>
                <li>TypeScript</li>
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
                <div className="dev-desc max-w-72">Experienced in both functional and OOP: C++, Python, C, JavaScript,C#, Go.</div>
              </div>
              <div className="fdev flex flex-col border gap-6 border-custom-bit-green p-8">
                <div className="fdev-title flex flex-row gap-10 text-custom-offwhite">
                  <FontAwesomeIcon icon={faReact} className='w-10' size='1x'/>
                  <div className="dev-title text-2xl font-bold tracking-wide relative"><span className="after:content-[''] after:bg-custom-bit-green after:w-28 after:h-2 after:absolute after:left-0 after:bottom-9 after:-z-50 after:opacity-70">Full Stack</span><br />
                    Developer
                  </div>
                </div>
                <div className="dev-desc max-w-72">Passionate about UI/UX, I am a fresh graduate with experience in JavaScript, React, and Next.js, focused on creating seamless user experiences.</div>
              </div>
            </div>
        </div>
        </div>
    </div>
  )
}
