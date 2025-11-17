import { useState, useCallback } from 'react'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import ProductModal from './components/ProductModal'

function App() {
  const [selected, setSelected] = useState(null)
  const onSelect = useCallback((p) => setSelected(p), [])
  const onClose = useCallback(() => setSelected(null), [])

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white font-bold">V</span>
            <span className="font-semibold text-gray-900">Vollara Wellness</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-700">
            <a href="#shop" className="hover:text-blue-700">Shop</a>
            <a href="#learn" className="hover:text-blue-700">About</a>
            <a href="#contact" className="hover:text-blue-700">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero onShop={() => {
          const el = document.getElementById('shop');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }} />
        <ProductGrid onSelect={onSelect} />

        <section id="learn" className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-6">
            {["Air purification","Water ionization","Active wellness"].map((t, i) => (
              <div key={i} className="p-6 rounded-xl border border-gray-100 shadow-sm">
                <h3 className="font-semibold text-gray-900">{t}</h3>
                <p className="mt-2 text-gray-600 text-sm">Science-backed technology designed to elevate everyday health at home and on the go.</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-gray-100 mt-10">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Vollara Wellness — Independent Distributor concept</p>
          <a className="text-blue-700" href="mailto:info@example.com">info@example.com</a>
        </div>
      </footer>

      <ProductModal product={selected} onClose={onClose} />
    </div>
  )
}

export default App
