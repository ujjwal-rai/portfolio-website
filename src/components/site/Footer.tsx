import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl px-5 text-sm text-white/60 sm:px-8">
        <div className="w-full text-center">
          © 2026 {profile.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

