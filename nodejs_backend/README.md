# Flutter Todo App với NodeJS + MongoDB

**Sinh viên**: Nguyễn Tuấn Minh  
**MSSV**: 2224802010221  

## 🚀 Tech Stack

- **Frontend**: Flutter (Web)
- **Backend**: NodeJS + Express
- **Database**: MongoDB Atlas
- **Authentication**: JWT + bcrypt

## 📁 Cấu trúc project
todo_project/
├── nodejs_backend/      # Backend API
└── flutter_todo_app/    # Flutter frontend

## ⚙️ Cách chạy

### Backend

```bash
cd nodejs_backend
npm install
npx nodemon index.js
```

Server chạy tại: `http://localhost:3000`

### Frontend

```bash
cd flutter_todo_app
flutter pub get
flutter run -d chrome
```

## ✨ Tính năng

- ✅ Đăng ký tài khoản (mã hóa password bằng bcrypt)
- ✅ Đăng nhập với JWT token (hết hạn 1 giờ)
- ✅ Thêm Todo
- ✅ Xem danh sách Todo (chỉ của user đang đăng nhập)
- ✅ Xóa Todo (vuốt sang trái)
- ✅ Lưu trữ trên MongoDB Atlas Cloud

## 📡 API Endpoints

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| POST | `/register` | Đăng ký tài khoản |
| POST | `/login` | Đăng nhập, trả về JWT |
| POST | `/createToDo` | Tạo todo mới |
| POST | `/getUserTodoList` | Lấy danh sách todo của user |
| POST | `/deleteTodo` | Xóa todo |