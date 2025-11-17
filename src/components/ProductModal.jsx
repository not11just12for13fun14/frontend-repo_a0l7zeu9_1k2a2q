import { useEffect } from 'react'

export default function ProductModal({ product, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!product) return null

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute inset-x-0 top-10 mx-auto max-w-3xl bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="grid md:grid-cols-2">
          <img src={product.images?.[0]} alt={product.title} className="w-full h-full object-cover" />
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-900">{product.title}</h3>
            <p className="mt-2 text-gray-600">{product.description}</p>
            {product.features?.length ? (
              <ul className="mt-4 list-disc list-inside text-gray-700 space-y-1">
                {product.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            ) : null}
            <div className="mt-6 flex items-center justify-between">
              <span className="text-blue-700 font-semibold text-xl">${product.price?.toFixed(2)}</span>
              <a href="#" className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700">Buy now</a>
            </div>
          </div>
        </div>
        <button className="absolute top-3 right-3 bg-white/80 backdrop-blur px-3 py-1.5 rounded-md border" onClick={onClose}>Close</button>
      </div>
    </div>
  )
}
