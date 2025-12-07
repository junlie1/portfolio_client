type AboutPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function AboutPopup({ isOpen, onClose }: AboutPopupProps) {
  if (!isOpen) return null;

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

        <div className="relative w-full md:w-1/2 bg-slate-50 px-5 py-7 sm:px-8 sm:py-10 text-slate-900 overflow-y-auto">
          <div className="relative z-10">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              About Me.
            </h3>
            <p className="mt-1 text-xs sm:text-sm font-medium text-slate-500">
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

            <div className="mt-6 flex flex-wrap gap-3 sm:gap-4 text-2xl sm:text-3xl">
              <span>⚛️</span>
              <span>💻</span>
              <span>{`</>`}</span>
              <span className="text-base sm:text-lg font-semibold">JS</span>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-slate-950 px-5 py-7 sm:px-8 sm:py-10 text-slate-100 overflow-y-auto">
          <h3 className="text-lg sm:text-xl font-semibold">Let&apos;s talk.</h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-300">
            New projects, internship inquiries or even a coffee chat.
          </p>

          <form className="mt-6 sm:mt-8 space-y-5 sm:space-y-6">
            <div>
              <label className="text-[11px] sm:text-xs font-semibold uppercase tracking-wide text-slate-300">
                Name *
              </label>
              <input
                type="text"
                className="mt-1 w-full border-b border-slate-700 bg-transparent px-0 py-2 text-sm outline-none focus:border-indigo-400"
              />
            </div>

            <div>
              <label className="text-[11px] sm:text-xs font-semibold uppercase tracking-wide text-slate-300">
                E-mail *
              </label>
              <input
                type="email"
                className="mt-1 w-full border-b border-slate-700 bg-transparent px-0 py-2 text-sm outline-none focus:border-indigo-400"
              />
            </div>

            <div>
              <label className="text-[11px] sm:text-xs font-semibold uppercase tracking-wide text-slate-300">
                Message *
              </label>
              <textarea
                rows={3}
                className="mt-1 w-full border-b border-slate-700 bg-transparent px-0 py-2 text-sm outline-none focus:border-indigo-400 resize-none"
              />
            </div>

            <button
              type="submit"
              className="
                mt-3 sm:mt-4 inline-flex items-center justify-center
                rounded-md bg-[#ff5a3c] px-5 sm:px-6 py-2.5
                text-sm font-semibold text-white
                shadow-lg shadow-[#ff5a3c]/40
                transition hover:-translate-y-[2px] hover:bg-[#ff765d]
              "
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
