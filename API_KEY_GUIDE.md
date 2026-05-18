# 🔑 Hướng Dẫn Lấy Gemini API Key

## Tại sao cần API Key?

Để bé gấu có thể trò chuyện và trả lời bạn, chúng ta cần kết nối đến Google Gemini AI (miễn phí!).

---

## 📝 Các Bước Lấy API Key (5 phút)

### **Bước 1: Truy cập Google AI Studio**

Mở link này trong trình duyệt:
👉 **https://aistudio.google.com**

### **Bước 2: Đăng nhập Google**

- Nếu chưa đăng nhập, bấm "Sign in" và dùng tài khoản Google của bạn
- Chọn tài khoản bạn muốn dùng

### **Bước 3: Tạo API Key**

1. Trên trang chính, tìm menu bên trái
2. Bấm vào **"Get API key"** hoặc **"Create API key"**
3. Chọn **"Create new secret key in new project"** (hoặc sử dụng project hiện tại)
4. Chợp, API key của bạn sẽ được tạo!

### **Bước 4: Copy API Key**

- Bạn sẽ thấy một key bắt đầu bằng `AIzaSy...`
- Bấm nút **"Copy"** (nút tái lập) để copy key này

### **Bước 5: Dán vào Website**

Có 2 cách:

#### **Cách 1: Dán vào trang (Dễ nhất)**

1. Vào trang web "Góc Tâm Sự" (chat với bé gấu)
2. Ở phía trên, bạn sẽ thấy một form có dòng chữ "Nhập Gemini API Key để chat"
3. Dán API key vào ô input
4. Bấm nút "Lưu ✓"
5. ✅ Xong! Giờ bạn có thể chat được rồi!

#### **Cách 2: Dán vào file config.js (Để lâu dài)**

1. Mở file `config.js` trong thư mục dự án
2. Tìm dòng này:
   ```javascript
   GEMINI_API_KEY: "";
   ```
3. Dán API key vào giữa dấu ngoặc kép:
   ```javascript
   GEMINI_API_KEY: "AIzaSy_YOUR_KEY_HERE";
   ```
4. Lưu file
5. Refresh trang web
6. ✅ Xong!

---

## ⚠️ Lưu Ý Quan Trọng

### **Bảo Mật**

- 🔒 **KHÔNG chia sẻ API key cho ai khác!**
- 🔒 **KHÔNG đăng lên GitHub hay mạng xã hội!**
- Nếu vô tình share, hãy xóa key và tạo key mới trên Google AI Studio

### **Giới Hạn Sử Dụng**

- Google cung cấp **60 lời nhắn miễn phí mỗi phút** cho Gemini API
- Nếu vượt quá giới hạn, chỉ cần chờ một vài phút là dùng được lại
- Nếu muốn dùng nhiều hơn, bạn có thể nâng cấp tài khoản Google Cloud

---

## 🐛 Xử Lý Sự Cố

### **Lỗi: "API Key không hợp lệ"**

- ✅ API key phải bắt đầu bằng `AIzaSy`
- ✅ Kiểm tra xem bạn có copy đúng key không
- ✅ Xóa dữ liệu và thử lại

### **Lỗi: "Quá giới hạn"**

- ⏳ Chỉ cần chờ 1-2 phút
- 📊 Giới hạn sẽ reset sau đó

### **Bé gấu không trả lời**

- ✅ Kiểm tra kết nối internet
- ✅ Kiểm tra API key có hợp lệ không
- ✅ Refresh trang và thử lại

---

## 📞 Cần Giúp?

Nếu vẫn không được, bạn có thể:

1. Đọc lại tài liệu trên Google AI Studio
2. Thử tạo API key mới
3. Kiểm tra console (F12) xem có lỗi gì không

---

## 🎉 Xong Rồi!

Chúc mừng! 🎉 Bây giờ bạn có thể tâm sự với bé gấu của mình rồi 💜

Hãy nhớ: Bé gấu luôn lắng nghe và sẵn sàng chữa lành cho bạn! 🐻✨
