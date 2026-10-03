export const categories = ['Tất cả', 'Rau củ', 'Thịt', 'Hải sản', 'Thực phẩm khô', 'Trái cây'];

export const products = [
  { id: 1, name: 'Rau cải xanh VietGAP', category: 'Rau củ', unit: '5kg / khay', origin: 'Lâm Đồng', image: 'https://images.unsplash.com/photo-1536354992121-15c0b7d1a4c1?auto=format&fit=crop&w=900&q=85', desc: 'Rau tươi thu hoạch theo ngày, phù hợp bếp ăn học đường.' },
  { id: 2, name: 'Cà rốt tươi', category: 'Rau củ', unit: '10kg / thùng', origin: 'Đà Lạt', image: 'https://images.unsplash.com/photo-1447175008436-054170c2e979?auto=format&fit=crop&w=900&q=85', desc: 'Cà rốt chọn lọc, sơ chế sạch, giao trong ngày theo lịch.' },
  { id: 3, name: 'Thịt heo nạc vai', category: 'Thịt', unit: '5kg / khay', origin: 'Đồng Nai', image: 'https://images.unsplash.com/photo-1603048297172-c92544798d5a?auto=format&fit=crop&w=900&q=85', desc: 'Thịt heo kiểm soát nguồn gốc, đóng khay kín và bảo quản lạnh.' },
  { id: 4, name: 'Ức gà tươi', category: 'Thịt', unit: '5kg / khay', origin: 'Long An', image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=900&q=85', desc: 'Ức gà giàu đạm, cắt quy cách cho bếp ăn tập thể.' },
  { id: 5, name: 'Cá basa phi lê', category: 'Hải sản', unit: '5kg / thùng', origin: 'ĐBSCL', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=85', desc: 'Phi lê cá tiện sơ chế, cấp đông nhanh và giữ chất lượng.' },
  { id: 6, name: 'Tôm bóc nõn', category: 'Hải sản', unit: '2kg / túi', origin: 'Cà Mau', image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?auto=format&fit=crop&w=900&q=85', desc: 'Tôm bóc nõn tiện dụng cho suất ăn học sinh và món canh.' },
  { id: 7, name: 'Gạo thơm học đường', category: 'Thực phẩm khô', unit: '25kg / bao', origin: 'An Giang', image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=900&q=85', desc: 'Gạo thơm, hạt đều, đóng bao tiêu chuẩn và truy xuất theo lô.' },
  { id: 8, name: 'Chuối cau chọn lọc', category: 'Trái cây', unit: '10kg / thùng', origin: 'Tiền Giang', image: 'https://images.unsplash.com/photo-1574226516831-e1dff420e8f8?auto=format&fit=crop&w=900&q=85', desc: 'Trái cây theo mùa, chọn kích thước đồng đều cho học sinh.' }
];

export function getProduct(id) {
  return products.find((product) => product.id === Number(id));
}
