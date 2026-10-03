import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return <footer className="mt-20 bg-slate-950 text-white">
    <div className="container-page grid gap-10 py-14 md:grid-cols-4">
      <div className="md:col-span-2"><div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-leaf-600 font-extrabold">HCF</span><div><strong className="block text-lg">Hoa Cương Food</strong><small className="text-xs text-slate-400">Thực phẩm an toàn cho trường học</small></div></div><p className="mt-5 max-w-lg leading-7 text-slate-400">Đồng hành cùng nhà trường bằng nguồn thực phẩm có kiểm soát, giao hàng đúng lịch và hồ sơ minh bạch theo từng lô.</p><div className="mt-6 space-y-3 text-sm text-slate-300"><div className="flex gap-2"><MapPin size={18} className="shrink-0 text-leaf-500"/>Khu vực TP. Hồ Chí Minh và các tỉnh lân cận</div><div className="flex gap-2"><Phone size={18} className="shrink-0 text-leaf-500"/>0976471361</div><div className="flex gap-2"><Mail size={18} className="shrink-0 text-leaf-500"/>contact@hoacuongfood.vn</div></div></div>
      <div><h3 className="font-bold">Khám phá</h3><div className="mt-4 space-y-3 text-sm text-slate-400">{[['Giới thiệu','/gioi-thieu'],['Sản phẩm','/san-pham'],['An toàn thực phẩm','/an-toan'],['Dinh dưỡng học đường','/dinh-duong']].map(([x,y]) => <Link className="block hover:text-white" to={y} key={y}>{x}</Link>)}</div></div>
      <div><h3 className="font-bold">Hợp tác</h3><div className="mt-4 space-y-3 text-sm text-slate-400"><Link className="block hover:text-white" to="/doi-tac">Trường học & đối tác</Link><Link className="block hover:text-white" to="/lien-he">Đăng ký nhà cung cấp</Link><Link className="block hover:text-white" to="/lien-he">Yêu cầu báo giá</Link></div><Link to="/lien-he" className="mt-7 inline-flex items-center gap-1 text-sm font-bold text-leaf-400">Liên hệ ngay <ArrowUpRight size={16}/></Link></div>
    </div>
    <div className="border-t border-white/10"><div className="container-page flex flex-col justify-between gap-2 py-5 text-xs text-slate-500 sm:flex-row"><span>© 2026 Hoa Cương Food. Demo website.</span><span>Thiết kế cho mô hình cung cấp thực phẩm học đường.</span></div></div>
  </footer>
}
