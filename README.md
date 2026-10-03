# Hoa Cương Food — School Food Supply Website

Website demo cho công ty cung cấp thực phẩm cho trường học.

## Công nghệ
- React + Vite
- React Router
- Tailwind CSS
- Lucide React
- Docker + Nginx

## Chạy local

```bash
npm install
npm run dev
```

Mở địa chỉ Vite in ra trong terminal.

## Build production

```bash
npm run build
npm run preview
```

## Chạy bằng Docker

```bash
docker compose up --build -d
```

Mở `http://localhost:8080`.

## Cấu trúc chính

```text
src/
├── components/
├── data/
├── pages/
├── App.jsx
├── index.css
└── main.jsx
Dockerfile
nginx.conf
docker-compose.yml
```

## Bước DevOps tiếp theo
1. Đẩy project lên GitHub.
2. Tạo GitHub Actions để tự chạy build mỗi lần push.
3. Thêm backend Node.js/Express.
4. Thêm PostgreSQL.
5. Đóng gói frontend/backend/database bằng Docker Compose.
6. Deploy lên VPS, dùng Nginx reverse proxy và HTTPS.

> Lưu ý: các tên công ty, trường học, số liệu, chứng nhận và hình ảnh trong bản demo cần được thay bằng dữ liệu thật trước khi sử dụng thương mại.
