  import { useState } from 'react';
  import { Link, NavLink } from 'react-router-dom';
  import { Menu, X, PhoneCall } from 'lucide-react';

  const links = [
    ['Trang chủ', '/'], ['Giới thiệu', '/gioi-thieu'], ['Sản phẩm', '/san-pham'],
    ['An toàn thực phẩm', '/an-toan'], ['Đối tác', '/doi-tac'], ['Tin tức', '/tin-tuc'], ['Liên hệ', '/lien-he']
  ];

  export default function Header() {
    const [open, setOpen] = useState(false);
    const active = ({ isActive }) => isActive ? 'text-leaf-700 font-extrabold' : 'text-slate-600 hover:text-leaf-700';
    return (
      <header className="sticky top-0 z-50 border-b border-slate-100/80 bg-white/95 backdrop-blur">
        <div className="container-page flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-leaf-600 text-lg font-extrabold text-white">HCF</span>
            <span><strong className="block text-lg leading-none text-slate-900">Hoa Cương Food</strong><small className="text-[10px] font-bold uppercase tracking-[0.18em] text-leaf-600">School Supply</small></span>
          </Link>
          <nav className="hidden items-center gap-6 lg:flex">
            {links.map(([label, href]) => <NavLink key={href} to={href} className={active}>{label}</NavLink>)}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <a href="tel:19001234" className="btn-secondary px-4 py-2.5"><PhoneCall size={16}/>0976471361</a>
            <Link to="/lien-he" className="btn-primary px-4 py-2.5">Đăng ký hợp tác</Link>
          </div>
          <button className="rounded-xl border border-slate-200 p-2 lg:hidden" onClick={() => setOpen(!open)} aria-label="Mở menu">{open ? <X/> : <Menu/>}</button>
        </div>
        {open && <div className="border-t border-slate-100 bg-white lg:hidden"><nav className="container-page flex flex-col gap-1 py-4">{links.map(([label, href]) => <NavLink key={href} onClick={() => setOpen(false)} to={href} className="rounded-xl px-3 py-3 font-semibold text-slate-600 hover:bg-leaf-50 hover:text-leaf-700">{label}</NavLink>)}<Link onClick={() => setOpen(false)} to="/lien-he" className="btn-primary mt-2">Đăng ký hợp tác</Link></nav></div>}
      </header>
    );
  }
