"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const CONTACT_ITEMS = [
  { icon: Mail, label: "Email Us", value: "hello@yngtlntagency.com" },
  { icon: Phone, label: "Call Us", value: "(614) 123-4567" },
  { icon: MapPin, label: "Our Office", value: "Columbus, OH\nUnited States" },
  { icon: Clock, label: "Business Hours", value: "Mon - Fri: 9AM - 6PM EST" },
];

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  subject: string;
  message: string;
};

const EMPTY_FORM: FormState = {
  firstName: "", lastName: "", email: "",
  role: "", subject: "", message: "",
};

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }
      setStatus("success");
      setForm(EMPTY_FORM);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  const inputCls =
    "w-full border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#C41E3A] focus:ring-1 focus:ring-[#C41E3A] transition-colors";

  return (
    <section id="contact" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16">
        {/* Left: Form */}
        <div>
          <p className="text-[#C41E3A] text-xs font-bold tracking-[0.25em] uppercase mb-6">
            CONTACT US
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Let&apos;s build something
            <br />
            <span className="text-[#C41E3A]">incredible together.</span>
          </h2>
          <p className="text-gray-500 text-base mb-10">
            Whether you&apos;re a creator looking for representation or a brand looking to
            collaborate, we&apos;d love to hear from you.
            <br />
            Fill out the form and our team will get back to you soon.
          </p>

          {status === "success" ? (
            <div className="rounded-2xl bg-green-50 border border-green-200 p-8 text-center">
              <p className="text-green-700 font-bold text-lg mb-2">Message sent!</p>
              <p className="text-green-600 text-sm">
                Thanks for reaching out. We&apos;ll get back to you soon.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-4 text-sm text-green-700 underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name row */}
              <div className="grid grid-cols-2 gap-4">
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="First Name *"
                  required
                  className={inputCls}
                />
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Last Name *"
                  required
                  className={inputCls}
                />
              </div>

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address *"
                required
                className={inputCls}
              />

              <select
                name="role"
                value={form.role}
                onChange={handleChange}
                required
                className={`${inputCls} ${!form.role ? "text-gray-400" : "text-gray-900"}`}
              >
                <option value="" disabled>I am a... *</option>
                <option value="Creator">Creator</option>
                <option value="Brand">Brand</option>
                <option value="Other">Other</option>
              </select>

              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject *"
                required
                className={inputCls}
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us more about your inquiry *"
                required
                rows={5}
                className={`${inputCls} resize-y`}
              />

              {status === "error" && (
                <p className="text-red-500 text-sm">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#C41E3A] hover:bg-[#a01830] disabled:bg-[#C41E3A]/60 text-white text-xs font-bold tracking-widest uppercase px-8 py-4 rounded-lg transition-colors"
              >
                {status === "loading" ? "SENDING..." : "SEND MESSAGE"}
                {status !== "loading" && (
                  <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
                )}
              </button>

              <p className="text-gray-400 text-xs">
                By submitting this form, you agree to our{" "}
                <a href="/privacy" className="underline hover:text-gray-600">
                  Privacy Policy
                </a>
              </p>
            </form>
          )}
        </div>

        {/* Right: Info card */}
        <div
          className="rounded-2xl p-8 text-white flex flex-col gap-6"
          style={{
            background: "linear-gradient(135deg, #111 0%, #1a0505 100%)",
          }}
        >
          <div className="w-14 h-14 rounded-full bg-[#C41E3A]/20 border border-[#C41E3A]/30 flex items-center justify-center">
            <Send className="w-6 h-6 text-[#C41E3A]" />
          </div>

          <div>
            <h3 className="text-white text-2xl font-bold leading-snug mb-4">
              We&apos;re here for creators and brands.
            </h3>
            <div className="w-10 h-[3px] bg-[#C41E3A] mb-4" />
            <p className="text-gray-400 text-sm leading-relaxed">
              Have a question or just want to say hello? Reach out through any of the
              channels below.
            </p>
          </div>

          <div className="flex flex-col gap-0">
            {CONTACT_ITEMS.map((item, i) => (
              <div key={item.label}>
                <div className="flex items-start gap-4 py-4">
                  <div className="w-10 h-10 rounded-full border border-[#C41E3A]/40 bg-[#C41E3A]/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-[#C41E3A]" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{item.label}</p>
                    <p className="text-gray-400 text-sm mt-0.5 whitespace-pre-line">
                      {item.value}
                    </p>
                  </div>
                </div>
                {i < CONTACT_ITEMS.length - 1 && (
                  <div className="w-full h-px bg-white/5" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
