"use client";

const NavHomebar = () => {
  return (
    <nav className="fixed left-0 top-0 z-50 w-full px-4 py-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-lg border border-white/10 bg-[#09090b]/90 px-4 py-3 shadow-2xl shadow-black/25 backdrop-blur-xl md:px-5">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_38%,rgba(255,255,255,0.04)_72%,transparent)]" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent" />

          <div className="relative flex items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.08]">
                <img
                  src="https://m.media-amazon.com/images/I/61-DC+EzC+L.png"
                  alt="logo"
                  width={28}
                  height={28}
                />
              </div>
              <span className="hidden text-sm font-semibold tracking-wide text-white sm:block">
                SchoolM
              </span>
            </div>

            <div className="hidden items-center gap-1 rounded-lg border border-white/[0.08] bg-white/[0.03] p-1 text-sm font-medium text-zinc-300 md:flex">
              <button className="rounded-md px-3 py-2 transition hover:bg-white/[0.08] hover:text-white">
                Dashboard
              </button>
              <button className="rounded-md px-3 py-2 transition hover:bg-white/[0.08] hover:text-white">
                Admissions
              </button>
              <button className="rounded-md px-3 py-2 transition hover:bg-white/[0.08] hover:text-white">
                Academics
              </button>
              <button className="rounded-md px-3 py-2 transition hover:bg-white/[0.08] hover:text-white">
                Finance
              </button>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center gap-3">
              <button className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-zinc-200 backdrop-blur-md transition hover:bg-white/10 hover:text-white">
                Sign In
              </button>

              <button className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavHomebar;
