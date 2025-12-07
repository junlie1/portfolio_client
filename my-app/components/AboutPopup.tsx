type AboutPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function AboutPopup({ isOpen, onClose }: AboutPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
      <div className="relative mx-4 flex max-w-5xl flex-col overflow-hidden rounded-3xl bg-slate-900 shadow-2xl md:flex-row">
        {/* nút đóng */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 text-2xl text-slate-400 hover:text-white"
        >
          ×
        </button>

        {/* Bên trái: About Me (nền sáng) */}
        <div className="relative w-full bg-slate-50 px-8 py-10 text-slate-900 md:w-1/2">
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-slate-900">About Me.</h3>
            <p className="mt-1 text-sm font-medium text-slate-500">
              Interactive Front-end developer.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-slate-700">
              I&apos;m Nguyễn Lê Trung, a developer who loves making interactive
              web experiences. I enjoy resolving design problems, creating smart
              user interfaces and building useful web applications.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-700">
              When I&apos;m not coding, I keep learning new tools and try to
              improve my problem-solving skills through real projects. I&apos;m
              currently looking for internship opportunities.
            </p>

            {/* icons tech đơn giản */}
            <div className="mt-6 flex flex-wrap gap-4 text-3xl">
              <span>⚛️</span>
              <span>💻</span>
              <span>{`</>`}</span>
              <span>JS</span>
            </div>
          </div>
        </div>

        {/* Bên phải: Contact form (nền tối) */}
        <div className="w-full bg-slate-950 px-8 py-10 text-slate-100 md:w-1/2">
          <h3 className="text-xl font-semibold">Let&apos;s talk.</h3>
          <p className="mt-2 text-sm text-slate-300">
            New projects, internship inquiries or even a coffee chat.
          </p>

          <form className="mt-8 space-y-6">
            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                Name *
              </label>
              <input
                type="text"
                className="mt-1 w-full border-b border-slate-700 bg-transparent px-0 py-2 text-sm outline-none focus:border-indigo-400"
              />
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                E-mail *
              </label>
              <input
                type="email"
                className="mt-1 w-full border-b border-slate-700 bg-transparent px-0 py-2 text-sm outline-none focus:border-indigo-400"
              />
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                Message *
              </label>
              <textarea
                rows={3}
                className="mt-1 w-full border-b border-slate-700 bg-transparent px-0 py-2 text-sm outline-none focus:border-indigo-400"
              />
            </div>

            <button
              type="submit"
              className="mt-4 inline-flex items-center rounded-md bg-[#ff5a3c] px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-[#ff5a3c]/40 transition hover:-translate-y-[2px] hover:bg-[#ff765d]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
