
import { Mail, Github, Linkedin, Twitter} from "lucide-react";

    let social = [
        {
            icon: Github,
            href: "https://github.com/parveshqaiser",
            label: "GitHub",
            color: "hover:bg-slate-900 hover:text-white",
        },
        {
            icon: Linkedin,
            href: "https://www.linkedin.com/in/parvesh-qaiser-/",
            label: "LinkedIn",
            color: "hover:bg-blue-600 hover:text-white",
        },
        {
            icon: Twitter,
            href: "https://x.com/ahmed99_parvesh",
            label: "Twitter",
            color: "hover:bg-blue-400 hover:text-white",
        },
    ];

export default function Contact() {


    return (
        <main className="min-h-screen max-w-7xl px-5 mx-auto pt-15 pb-10" id="contact">
            <section className="text-center">
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                    Let's Work
                    <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Together
                    </span>
                </h1>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                    Ready to bring your ideas to life? I'm here to help you build something extraordinary.
                </p>
            </section>

            <section className="flex justify-center items-center my-10">
                <a
                    href="mailto:imaparvesh75@gmail.com"
                    className="bg-gradient-to-r from-[#4F2428] to-[#311A1C] text-white px-6 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2 group"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Mail className="w-6 h-6 group-hover:animate-bounce" />
                    imaparvesh75@gmail.com
                </a>
            </section>

            <section className="">
                <div className="flex justify-center gap-6">
                {social.map((social, index) => (
                    <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center w-14 h-14 bg-gray-200 rounded-xl transition-all duration-300 ${social.color} hover:scale-110 hover:shadow-lg group`}
                        aria-label={social.label}
                    >
                        <social.icon className="w-6 h-6 text-slate-600 group-hover:text-current transition-colors" />
                    </a>
                ))}
                </div>
            </section>

            <footer className="pt-8 mt-15">
                <aside className="border-t border-gray-600">
                    <div className="max-w-7xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center pt-6 gap-4 text-gray-400">
                        <p className="text-sm hover:text-white hover:font-bold">
                            © 2025 Parvesh Qaiser. Crafted with passion and precision.
                        </p>
                        <p className="text-sm hover:text-white hover:font-bold">
                            Available for freelance opportunities worldwide
                        </p>
                    </div>
                </aside>
            </footer>
        </main>
    )
}
