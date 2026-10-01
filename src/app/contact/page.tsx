"use client";

import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Github,
  Instagram,
} from "lucide-react";

function Contact() {
  return (
    <section id="contact" className="relative py-20 px-6 md:px-24 overflow-hidden">
      <div className="pointer-events-none absolute -bottom-20 left-1/3 w-96 h-96 rounded-full bg-[#7c3aed]/15 blur-3xl" />

      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-2">
            <span className="mono-label">04. Contact</span>
            <span className="h-px flex-1 bg-gradient-to-r from-[#7c3aed]/40 to-transparent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold gradient-text">Let&apos;s Connect</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Have a project or just want to connect? I&apos;d love to hear from you!
          </p>
        </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left: Info + Social */}
        <div className="space-y-10">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.02] text-[#93c5fd]">
                <Mail className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[#7c3aed]">
                  Email
                </h3>
                <p className="mt-0.5 text-foreground">summiyaashraf689@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.02] text-[#93c5fd]">
                <Phone className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[#7c3aed]">
                  Phone
                </h3>
                <p className="mt-0.5 text-foreground">+92 316 2573083</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.02] text-[#93c5fd]">
                <MapPin className="w-5 h-5" />
              </span>
              <div>
                <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[#7c3aed]">
                  Location
                </h3>
                <p className="mt-0.5 text-foreground">Karachi, Pakistan</p>
              </div>
            </div>
          </div>

          {/* Social Media Icons */}
          <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[#7c3aed]">
            {"// find me on"}
          </h3>
          <div className="flex gap-5 pt-6">
            {[
              { href: "https://www.facebook.com/profile.php?id=61553694430220", Icon: Facebook },
              { href: "https://x.com/SummiyaAshraf", Icon: Twitter },
              { href: "https://www.linkedin.com/in/summiya-ashraf-8249792ba/", Icon: Linkedin },
              { href: "https://github.com/Summiyaashraf", Icon: Github },
              { href: "https://www.instagram.com/summiya7127/", Icon: Instagram },
            ].map(({ href, Icon }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 hover:text-[#93c5fd] transition duration-200 text-muted-foreground"
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

{/* Right: Contact Form */}
        <div className="acrylic-panel hairline p-8 rounded-2xl shadow-lg space-y-5">
          <div className="flex items-center justify-between pb-1">
            <span className="mono-label">{"// send_message"}</span>
            <span className="font-mono text-[0.65rem] text-muted-foreground">form: ok</span>
          </div>

          <form
            action="https://formsubmit.co/summiyaashraf689@gmail.com"
            method="POST"
            className="space-y-5"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://yourportfolio.vercel.app/thankyou" />

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="p-3 bg-white/5 border border-white/10 rounded-lg w-full text-foreground placeholder:text-muted-foreground/60 focus:border-[#60a5fa]/70 focus:outline-none focus:ring-1 focus:ring-[#2563eb]/40 transition"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="p-3 bg-white/5 border border-white/10 rounded-lg w-full text-foreground placeholder:text-muted-foreground/60 focus:border-[#60a5fa]/70 focus:outline-none focus:ring-1 focus:ring-[#2563eb]/40 transition"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="p-3 bg-white/5 border border-white/10 rounded-lg w-full text-foreground placeholder:text-muted-foreground/60 focus:border-[#60a5fa]/70 focus:outline-none focus:ring-1 focus:ring-[#2563eb]/40 transition"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              className="p-3 bg-white/5 border border-white/10 rounded-lg w-full text-foreground placeholder:text-muted-foreground/60 focus:border-[#60a5fa]/70 focus:outline-none focus:ring-1 focus:ring-[#2563eb]/40 transition"
              required
            />

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#7c3aed] to-[#2563eb] text-white px-6 py-3 rounded-lg font-medium shadow-lg shadow-[#7c3aed]/30 hover:brightness-110 hover:shadow-[#7c3aed]/50 transition-all"
            >
Send Message
            </button>
          </form>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Contact;
