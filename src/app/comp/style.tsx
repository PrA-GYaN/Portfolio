import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Style() {
  return (
    <div className="side-style">
        <div className="left-side fixed bottom-0 left-11">
            <div className="icons flex flex-col gap-10 text-custom-offwhite hover:cursor-pointer">
                <div className="github hover:text-custom-bit-green hover:-translate-y-1 transition-all duration-200 ease-in-out">
                <FontAwesomeIcon icon={faGithub} className='w-6'/>
                </div>
                <div className="insta hover:text-custom-bit-green hover:-translate-y-1 transition-all duration-200 ease-in-out">
                <FontAwesomeIcon icon={faInstagram} className='w-6'/>
                </div>
                <div className="linkdin hover:text-custom-bit-green hover:-translate-y-1 transition-all duration-200 ease-in-out">
                <FontAwesomeIcon icon={faLinkedin} className='w-6'/>
                </div>
                <div className="x hover:text-custom-bit-green hover:-translate-y-1 transition-all duration-200 ease-in-out">
                <FontAwesomeIcon icon={faXTwitter} className='w-6'/>
                </div>
            </div>
        </div>
        <div className="right-side fixed bottom-0 right-11">
            <div className="email flex flex-row  text-custom-offwhite tracking-widest gap-8 hover:text-custom-bit-green ">
                <a href="mailto:pragyann.kc@gmail.com" className="text-lg opacity-60 hover:-translate-y-1 transition-all duration-200 ease-linear hover:cursor-pointer hover:opacity-100">pragyann.kc@gmail.com</a>
            </div>
        </div>
    </div>
  )
}
