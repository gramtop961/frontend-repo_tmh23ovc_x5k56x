import Hero3D from './components/Hero3D';
import Animals from './components/Animals';
import Trees from './components/Trees';
import Footer from './components/Footer';

function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-2xl bg-emerald-900/60 px-4 py-3 text-emerald-50 backdrop-blur-md ring-1 ring-white/10">
          <span className="font-display text-lg font-semibold">Wildscape</span>
          <nav className="hidden gap-6 text-sm sm:flex">
            <a href="#animals" className="hover:text-white">Animals</a>
            <a href="#trees" className="hover:text-white">Trees</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-emerald-900 font-sans">
      <Header />
      <main>
        <Hero3D />
        <div id="animals">
          <Animals />
        </div>
        <div id="trees">
          <Trees />
        </div>
      </main>
      <Footer />
    </div>
  );
}
