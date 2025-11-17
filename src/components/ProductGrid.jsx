import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

export default function ProductGrid({ onSelect }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/products`)
        if (!res.ok) throw new Error('Failed to load products')
        const data = await res.json()
        setProducts(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  if (loading) return <div className="py-20 text-center text-gray-500">Loading products...</div>
  if (error) return <div className="py-20 text-center text-red-600">{error}</div>

  return (
    <section id="shop" className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular products</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onSelect={onSelect} />
        ))}
      </div>
    </section>
  )
}
