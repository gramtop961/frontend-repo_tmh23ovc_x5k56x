export default function Footer() {
  return (
    <footer className="bg-emerald-950 py-10 text-emerald-100">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm">© {new Date().getFullYear()} Wildscape. All rights reserved.</p>
          <p className="text-sm">Built with love for nature and curiosity for 3D.</p>
        </div>
      </div>
    </footer>
  );
}
