export default function Contact() {
    return (
        <div className="contact-wrapper">
            <div className="contact-header text-5xl relative text-custom-offwhite after:content-[''] after:bg-custom-bit-green after:w-64 after:h-3 after:absolute after:left-0 after:bottom-0 after:-z-50 after:opacity-70">Contact Me</div>
            <div className="mt-14  contact-content flex flex-col gap-5 justify-center items-center p-10">
                <div className="title text-4xl font-blod text-custom-bit-green">Get In Touch</div>
                <div className=" w-3/5 text-center leading-7 tracking-wide desc text-custom-gray">I’m currently exploring new opportunities and would love to connect. Whether you have a question, a potential opportunity, or just want to chat, feel free to reach out. I’ll do my best to respond promptly!</div>
                <a href="mailto:pragyann.kc@gmail.com" className="contact-btn mt-20 flex items-center justify-center text-lg px-8 py-3 rounded-lg border-custom-bit-green border-2 text-custom-bit-green shadow-3xl hover:shadow-custom-bit-green hover:cursor-pointer transition-all duration-150 ease-linear">Contact Me</a>
            </div>
            
        </div>
    );
}