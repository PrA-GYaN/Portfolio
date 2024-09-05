'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faXRay } from '@fortawesome/free-solid-svg-icons';

export default function Style() {
    const openLink = (url: string) => {
        window.open(url, '_blank');
    };

    return (
        <div className="side-style">
            <div className="left-side fixed bottom-0 left-11">
                <div className="icons flex flex-col gap-10 text-custom-offwhite hover:cursor-pointer">
                    <div
                        onClick={() => openLink('https://github.com/PrA-GYaN')}
                        className="github hover:text-custom-bit-green hover:-translate-y-1 transition-all duration-200 ease-in-out"
                        aria-label="GitHub Profile"
                    >
                        <FontAwesomeIcon icon={faGithub} style={{ width: '25px', height: '25px' }} />

                    </div>
                    <div
                        onClick={() => openLink('https://www.instagram.com/pragyankc404/')}
                        className="insta hover:text-custom-bit-green hover:-translate-y-1 transition-all duration-200 ease-in-out"
                        aria-label="Instagram Profile"
                    >
                        <FontAwesomeIcon icon={faInstagram} style={{ width: '25px', height: '25px' }} />
                    </div>
                    <div
                        onClick={() => openLink('https://www.linkedin.com/in/pragyan-kc')}
                        className="linkdin hover:text-custom-bit-green hover:-translate-y-1 transition-all duration-200 ease-in-out"
                        aria-label="LinkedIn Profile"
                    >
                        <FontAwesomeIcon icon={faLinkedin} style={{ width: '25px', height: '25px' }} />
                    </div>
                    <div
                        onClick={() => openLink('https://x.com/PrgyanKc')}
                        className="x hover:text-custom-bit-green hover:-translate-y-1 transition-all duration-200 ease-in-out"
                        aria-label="X (formerly Twitter) Profile"
                    >
                        <FontAwesomeIcon icon={faXTwitter} style={{ width: '25px', height: '25px' }} />
                    </div>
                </div>
            </div>
            <div className="right-side fixed bottom-0 right-11">
                <div className="email flex flex-row text-custom-offwhite tracking-widest gap-8 hover:text-custom-bit-green">
                    <a
                        href="mailto:pragyann.kc@gmail.com"
                        className="text-lg opacity-60 hover:-translate-y-1 transition-all duration-200 ease-linear hover:cursor-pointer hover:opacity-100"
                        aria-label="Email"
                    >
                        pragyann.kc@gmail.com
                    </a>
                </div>
            </div>
        </div>
    );
}
