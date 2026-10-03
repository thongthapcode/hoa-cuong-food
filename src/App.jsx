import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import { About, Contact, News, Nutrition, Partners, ProductDetail, Products, Safety } from './pages/GenericPages';

function ScrollToTop(){
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

function NotFound(){
  return <div className="container-page py-28 text-center"><p className="eyebrow">404</p><h1 className="mt-3 text-4xl font-extrabold">Trang không tồn tại</h1><p className="body-copy mt-4">Đường dẫn mày nhập chưa được cấu hình trong website.</p><a href="/" className="btn-primary mt-7">Về trang chủ</a></div>
}

export default function App(){
  return <><ScrollToTop/><Header/><main><Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/gioi-thieu" element={<About/>}/>
    <Route path="/san-pham" element={<Products/>}/>
    <Route path="/san-pham/:id" element={<ProductDetail/>}/>
    <Route path="/an-toan" element={<Safety/>}/>
    <Route path="/doi-tac" element={<Partners/>}/>
    <Route path="/tin-tuc" element={<News/>}/>
    <Route path="/dinh-duong" element={<Nutrition/>}/>
    <Route path="/lien-he" element={<Contact/>}/>
    <Route path="*" element={<NotFound/>}/>
  </Routes></main><Footer/></>
}
