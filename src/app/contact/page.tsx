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
<section
      id="contact"
      className="relative overflow-hidden px-4 py-14 sm:px-6 sm:py-20 md:px-10 lg:px-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 left-1/3 h-96 w-96 rounded-full bg-[#7c3aed]/15 blur-3xl"
      />

      <div className="mx-auto max-w-5xl">
        <div className="mb-10 sm:mb-14">
          <div className="mb-2 flex items-center gap-3">
            <span className="mono-label">04. Contact</span>
            <span className="h-px flex-1 bg-gradient-to-r from-[#7c3aed]/40 to-transparent" />
          </div>
          <h2 className="text-balance text-3xl font-bold gradient-text sm:text-4xl lg:text-5xl">
            Let&apos;s Connect
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground sm:text-base">
            Have a project or just want to connect? I&apos;d love to hear from you!
          </p>
        </div>

        <div className="grid items-start gap-10 md:grid-cols-2 md:gap-12">
        {/* Left: Info + Social */}
        <div className="space-y-10">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.02] text-[#93c5fd]">
                <Mail className="w-5 h-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[#7c3aed]">
                  Email
                </h3>
                <a
                  href="mailto:summiyaashraf689@gmail.com"
                  className="mt-0.5 block break-words text-foreground transition-colors hover:text-[#a78bfa]"
                >
                  summiyaashraf689@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.02] text-[#93c5fd]">
                <Phone className="w-5 h-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[#7c3aed]">
                  Phone
                </h3>
                <a
                  href="tel:+923162573083"
                  className="mt-0.5 block break-words text-foreground transition-colors hover:text-[#a78bfa]"
                >
                  +92 316 2573083
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.02] text-[#93c5fd]">
                <MapPin className="w-5 h-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[#7c3aed]">
                  Location
                </h3>
                <p className="mt-0.5 break-words text-foreground">Karachi, Pakistan</p>
              </div>
            </div>
          </div>

          {/* Social Media Icons */}
          <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[#7c3aed]">
            {"// find me on"}
          </h3>
          <ul className="flex flex-wrap gap-5 pt-6">
            {[
              { href: "https://www.facebook.com/profile.php?id=61553694430220", Icon: Facebook, label: "Facebook" },
              { href: "https://x.com/SummiyaAshraf", Icon: Twitter, label: "X (Twitter)" },
              { href: "https://www.linkedin.com/in/summiya-ashraf-8249792ba/", Icon: Linkedin, label: "LinkedIn" },
              { href: "https://github.com/Summiyaashraf", Icon: Github, label: "GitHub" },
              { href: "https://www.instagram.com/summiya7127/", Icon: Instagram, label: "Instagram" },
            ].map(({ href, Icon, label }) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="block rounded-md text-muted-foreground transition duration-200 hover:scale-110 hover:text-[#93c5fd]"
                >
                  <Icon className="w-6 h-6" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

{/* Right: Contact Form */}
        <div className="acrylic-panel hairline space-y-5 rounded-2xl p-5 shadow-lg sm:p-8">
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

            {/* `min-w-0` on every field: grid/flex children default to
                `min-width: auto`, and an <input>'s intrinsic 20-character
                width is enough to push the column past 1fr and force a
                horizontal scrollbar on narrow screens. */}
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="min-w-0 w-full rounded-lg border border-white/10 bg-white/5 p-3 text-base text-foreground transition placeholder:text-muted-foreground/60 focus:border-[#60a5fa]/70 focus:outline-none focus:ring-1 focus:ring-[#2563eb]/40"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="min-w-0 w-full rounded-lg border border-white/10 bg-white/5 p-3 text-base text-foreground transition placeholder:text-muted-foreground/60 focus:border-[#60a5fa]/70 focus:outline-none focus:ring-1 focus:ring-[#2563eb]/40"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              className="min-w-0 w-full rounded-lg border border-white/10 bg-white/5 p-3 text-base text-foreground transition placeholder:text-muted-foreground/60 focus:border-[#60a5fa]/70 focus:outline-none focus:ring-1 focus:ring-[#2563eb]/40"
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              className="min-w-0 w-full resize-y rounded-lg border border-white/10 bg-white/5 p-3 text-base text-foreground transition placeholder:text-muted-foreground/60 focus:border-[#60a5fa]/70 focus:outline-none focus:ring-1 focus:ring-[#2563eb]/40"
              required
            />

            <button
              type="submit"
              className="w-full min-h-11 rounded-lg bg-gradient-to-r from-[#7c3aed] to-[#2563eb] px-6 py-3 font-medium text-white shadow-lg shadow-[#7c3aed]/30 transition-all hover:brightness-110 hover:shadow-[#7c3aed]/50"
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
