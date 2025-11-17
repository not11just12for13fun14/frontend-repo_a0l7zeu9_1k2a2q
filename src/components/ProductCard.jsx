export default function ProductCard({ product, onSelect }) {
  return (
    <div className="group bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden border border-gray-100 flex flex-col">
      <div className="aspect-[4/3] bg-gray-50 overflow-hidden">
        <img src={product.images?.[0] || 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80&auto=format&fit=crop'} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition" />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-semibold text-gray-900">{product.title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2 mt-1">{product.description}</p>
        <div className="mt-auto pt-3 flex items-center justify-between">
          <span className="text-blue-700 font-semibold">${product.price?.toFixed(2)}</span>
          <button className="text-sm px-3 py-1.5 rounded-md bg-blue-600 text-white hover:bg-blue-700" onClick={() => onSelect(product)}>
            View
          </button>
        </div>
      </div>
    </div>
  )
}
