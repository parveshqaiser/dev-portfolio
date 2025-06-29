import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Clock, CheckCircle } from "lucide-react"

export default function Contact() {
    return (
        <div className="min-h-screen">
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
            <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
            <div className="text-center">
                <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Let's Work
                <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Together
                </span>
                </h1>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                Ready to bring your ideas to life? I'm here to help you build something extraordinary.
                </p>
            </div>
            </div>
        </section>

        {/* Main Content */}
        <section className="max-w-7xl mx-auto px-6 py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Contact Info */}
            <div className="space-y-12">
                <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Get In Touch</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                    Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear
                    from you. Let's create something amazing together.
                </p>
                </div>

                {/* Contact Methods */}
                <div className="space-y-6">
                <a
                    href="mailto:hello@example.com"
                    className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-all duration-300 group"
                >
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                    <h3 className="font-semibold text-slate-900">Email</h3>
                    <p className="text-slate-600">hello@example.com</p>
                    </div>
                </a>

                <a
                    href="tel:+1234567890"
                    className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-all duration-300 group"
                >
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                    <h3 className="font-semibold text-slate-900">Phone</h3>
                    <p className="text-slate-600">+1 (234) 567-8900</p>
                    </div>
                </a>

                <div className="flex items-center gap-4 p-6 bg-slate-50 rounded-2xl">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                    <h3 className="font-semibold text-slate-900">Location</h3>
                    <p className="text-slate-600">San Francisco, CA</p>
                    </div>
                </div>
                </div>

                {/* Availability */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100">
                <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <h3 className="font-semibold text-slate-900">Availability</h3>
                </div>
                <p className="text-slate-600 mb-4">Currently accepting new projects for Q2 2025</p>
                <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-green-700 font-medium">Available for new projects</span>
                </div>
                </div>
            </div>

            {/* Right Column - Additional Info */}
            <div className="space-y-12">
                {/* What I Do */}
                <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">What I Do</h3>
                <div className="grid gap-4">
                    {[
                    "Full-Stack Web Development",
                    "React & Next.js Applications",
                    "UI/UX Design & Prototyping",
                    "API Development & Integration",
                    "Performance Optimization",
                    "Technical Consulting",
                    ].map((service, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-xl hover:border-slate-300 transition-colors"
                    >
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <span className="text-slate-700">{service}</span>
                    </div>
                    ))}
                </div>
                </div>

                {/* Response Time */}
                <div className="bg-slate-900 text-white p-8 rounded-2xl">
                <h3 className="text-xl font-bold mb-4">Quick Response</h3>
                <p className="text-slate-300 mb-6">
                    I typically respond to emails within 24 hours. For urgent matters, feel free to call or text.
                </p>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-400">Usually responds within a few hours</span>
                </div>
                </div>
            </div>
            </div>
        </section>

        {/* Social Links */}
        <section className="bg-slate-50 py-16">
            <div className="max-w-7xl mx-auto px-6 text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Connect With Me</h3>
            <div className="flex justify-center gap-6">
                {[
                {
                    icon: Github,
                    href: "https://github.com",
                    label: "GitHub",
                    color: "hover:bg-slate-900 hover:text-white",
                },
                {
                    icon: Linkedin,
                    href: "https://linkedin.com",
                    label: "LinkedIn",
                    color: "hover:bg-blue-600 hover:text-white",
                },
                {
                    icon: Twitter,
                    href: "https://twitter.com",
                    label: "Twitter",
                    color: "hover:bg-blue-400 hover:text-white",
                },
                ].map((social, index) => (
                <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-14 h-14 bg-white border-2 border-slate-200 rounded-xl transition-all duration-300 ${social.color} hover:scale-110 hover:shadow-lg group`}
                    aria-label={social.label}
                >
                    <social.icon className="w-6 h-6 text-slate-600 group-hover:text-current transition-colors" />
                </a>
                ))}
            </div>
            </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-slate-400">© 2025 Your Name. Crafted with passion and precision.</p>
                <p className="text-slate-400 text-sm">Available for freelance opportunities worldwide</p>
            </div>
            </div>
        </footer>
        </div>
    )
}
