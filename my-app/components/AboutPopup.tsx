"use client";

import { useState, FormEvent } from "react";

type AboutPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function AboutPopup({ isOpen, onClose }: AboutPopupProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  if (!isOpen) return null;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Failed to send");
      }

      setStatus("success");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div
        className="
          relative mx-3 sm:mx-4 w-full max-w-5xl
          rounded-2xl sm:rounded-3xl
          bg-slate-900 shadow-2xl
          flex flex-col md:flex-row
          overflow-hidden
          max-h-[90vh]
        "
      >
        {/* nút đóng */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 sm:right-4 sm:top-4 z-20 text-xl sm:text-2xl text-slate-400 hover:text-white"
        >
          ×
        </button>

        {/* Left */}
        <div className="relative w-full md:w-1/2 bg-slate-50 px-5 py-7 sm:px-8 sm:py-10 text-slate-900 overflow-y-auto">
          <div className="relative z-10">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              About Me.
            </h3>
            <p className="mt-1 text-xs sm:text-sm font-medium text-slate-500">
              Full-stack Developer.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-slate-700">
              I&apos;m Nguyễn Lê Trung, a full-stack developer who enjoys
              building end-to-end web applications. I like turning ideas into
              usable products, from designing clear user flows to implementing
              robust APIs and data layers.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              When I&apos;m not coding, I explore new tools in the TypeScript,
              React, and backend ecosystem, and sharpen my problem-solving
              skills through real projects. I&apos;m currently looking for
              full-stack or backend internship opportunities.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 sm:gap-4 text-2xl sm:text-3xl">
              <span>⚛️</span>
              <span>💻</span>
              <span>{`</>`}</span>
              <span>TS</span>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="w-full md:w-1/2 bg-slate-950 px-5 py-7 sm:px-8 sm:py-10 text-slate-100 overflow-y-auto">
          <h3 className="text-lg sm:text-xl font-semibold">Let&apos;s talk.</h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-300">
            New projects, internship inquiries or even a coffee chat.
          </p>

          <form
            className="mt-6 sm:mt-8 space-y-5 sm:space-y-6"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="text-[11px] sm:text-xs font-semibold uppercase tracking-wide text-slate-300">
                Name *
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) =>
                  setForm((f) => ({ ...f, name: e.target.value }))
                }
                className="mt-1 w-full border-b border-slate-700 bg-transparent px-0 py-2 text-sm outline-none focus:border-indigo-400"
              />
            </div>

            <div>
              <label className="text-[11px] sm:text-xs font-semibold uppercase tracking-wide text-slate-300">
                E-mail *
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) =>
                  setForm((f) => ({ ...f, email: e.target.value }))
                }
                className="mt-1 w-full border-b border-slate-700 bg-transparent px-0 py-2 text-sm outline-none focus:border-indigo-400"
              />
            </div>

            <div>
              <label className="text-[11px] sm:text-xs font-semibold uppercase tracking-wide text-slate-300">
                Message *
              </label>
              <textarea
                rows={3}
                required
                value={form.message}
                onChange={(e) =>
                  setForm((f) => ({ ...f, message: e.target.value }))
                }
                className="mt-1 w-full border-b border-slate-700 bg-transparent px-0 py-2 text-sm outline-none focus:border-indigo-400 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="
                mt-3 sm:mt-4 inline-flex items-center justify-center
                rounded-md bg-[#ff5a3c] px-5 sm:px-6 py-2.5
                text-sm font-semibold text-white
                shadow-lg shadow-[#ff5a3c]/40
                transition hover:-translate-y-[2px] hover:bg-[#ff765d]
                disabled:opacity-60 disabled:hover:translate-y-0
              "
            >
              {submitting ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-xs sm:text-sm text-emerald-400">
                Message sent! I&apos;ll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-xs sm:text-sm text-red-400">
                Something went wrong. Please try again later.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
