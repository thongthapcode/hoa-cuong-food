import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function ProductCard({ product }) {
  return <article className="card group overflow-hidden">
    <div className="aspect-[4/3] overflow-hidden bg-stone-100"><img src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy"/></div>
    <div className="p-5"><div className="flex items-center justify-between gap-3"><span className="rounded-full bg-leaf-50 px-3 py-1 text-xs font-bold text-leaf-700">{product.category}</span><span className="text-xs text-slate-400">{product.unit}</span></div><h3 className="mt-4 text-lg font-extrabold text-slate-900">{product.name}</h3><p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">{product.desc}</p><div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4"><span className="text-xs font-semibold text-slate-400">Nguồn: {product.origin}</span><Link to={`/san-pham/${product.id}`} className="inline-flex items-center gap-1 text-sm font-extrabold text-leaf-700">Chi tiết <ArrowUpRight size={15}/></Link></div></div>
  </article>
}
