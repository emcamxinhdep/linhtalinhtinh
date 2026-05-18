# 🐻 Linh ta linh tinh — Nơi Chữa Lành Qua Gấu Bông AI

Một website tương tác dễ thương nơi bạn có thể nhận nuôi gấu bông plushie và tâm sự với chúng thông qua trí tuệ nhân tạo!

## 🌟 Tính Năng

✨ **Trang chủ:** Khám phá bầy gấu bông với thiết kế pastel ấm áp  
🐻 **Khu nhận nuôi:** Xem chi tiết từng bé gấu bông  
💜 **Góc tâm sự:** Chat với bé gấu bằng AI (Gemini)  
🎁 **Blind Emotion Box:** Lựa chọn cảm xúc và nhận hộp bí mật  
🎵 **Nhạc nền:** Thiên nhạc dịu dàng  
📱 **Responsive:** Hoạt động tốt trên desktop, tablet, mobile

---

## 🚀 Cách Sử Dụng

### **1. Lần Đầu Tiên**

1. Mở website trong trình duyệt
2. Vào trang **"Góc Tâm Sự"**
3. Bạn sẽ thấy form nhập **API Key**
4. Theo hướng dẫn để lấy API Key miễn phí (xem **API_KEY_GUIDE.md**)
5. Dán API Key vào ô input và bấm "Lưu ✓"

### **2. Chat Với Bé Gấu**

1. Chọn một bé gấu bạn thích
2. Gõ tin nhắn vào ô chat
3. Hoặc bấm nút 🎤 để nói (voice input)
4. Bé gấu sẽ trả lời bằng chính tính cách của nó!

### **3. Các Bé Gấu**

- **Mít** 🧸 - Nhút nhát, hay mơ mộng, lắng nghe sâu sắc
- **Mochi** 🐻 - Vui vẻ, truyền năng lượng tích cực
- **Bơ** 🐨 - Điềm tĩnh, sâu sắc, hay triết lý
- **Cloudy** 🐼 - Mơ mộng, kể chuyện, bay bổng
- **Gạo** 🧸 - Ấm áp, chăm sóc, như mẹ nhỏ
- **Bon** ⭐ - Huyền bí, lung linh, từ ánh sao

---

## 📦 Cấu Trúc File

```
linh-ta-linh-tinh/
├── index.html           # HTML chính
├── style.css            # CSS styling
├── script.js            # JavaScript logic
├── config.js            # Cấu hình API key
├── API_KEY_GUIDE.md     # Hướng dẫn lấy API key
├── audio/               # Thư mục nhạc nền
│   └── tam.mp3         # Nhạc background
├── images/              # Thư mục ảnh
│   ├── mít.png
│   ├── mochi.png
│   ├── Bơ.png
│   ├── Cloudy.png
│   ├── Gạo.png
│   ├── Bon.png
│   └── qr-momo.jpg     # QR thanh toán (tuỳ chọn)
└── README.md            # File này
```

---

## 🔧 Cấu Hình

### **API Key (Gemini)**

Xem file **API_KEY_GUIDE.md** để lấy API key miễn phí.

### **Thêm Nhạc Nền**

1. Đặt file nhạc MP3 vào thư mục `audio/`
2. Tên file phải là: `tam.mp3`
3. Refresh trang

### **Thêm QR MoMo**

1. Đặt ảnh QR vào thư mục `images/`
2. Tên file phải là: `qr-momo.jpg`
3. Uncomment thẻ `<img>` trong `index.html` (tìm section thanh toán)
4. Cập nhật thông tin MoMo (tên, số điện thoại)

### **Google Form Giao Hàng**

1. Tạo Google Form cho thông tin giao hàng
2. Copy link form (chia sẻ)
3. Tìm dòng này trong `index.html`:
   ```html
   href="https://forms.gle/THAY-LINK-GOOGLE-FORM-CUA-BAN"
   ```
4. Thay link của bạn vào

---

## 🎨 Tuỳ Chỉnh

### **Thay Đổi Màu Sắc**

Mở `style.css` và chỉnh các biến CSS:

```css
:root {
  --purple-1: #e5d4ff;
  --pink: #ffb5c8;
  --yellow: #fff3cd;
  /* ... */
}
```

### **Thêm Bé Gấu Mới**

1. Mở `script.js`
2. Tìm array `PLUSHIES`
3. Thêm object mới với cấu trúc:

```javascript
{
  id: 'ten-be',
  name: 'Tên Bé',
  emoji: '🧸',
  image: 'images/ten.png',
  // ... (xem các bé khác làm mẫu)
}
```

### **Thay Đổi Quote Hàng Ngày**

Mở `script.js`, tìm array `DAILY_QUOTES` và thêm/sửa quotes.

---

## 💬 Cách Bé Gấu Hoạt Động

Mỗi bé gấu có:

- **Tính cách riêng** (system prompt cho Gemini AI)
- **Phong cách nói chuyện** khác nhau
- **Reactions** theo cảm xúc của bạn

Ví dụ:

- Mít sẽ trả lời **nhẹ nhàng, thơ mộng**
- Mochi sẽ **vui vẻ, truyền năng lượng**
- Bơ sẽ **đặt câu hỏi sâu sắc**

---

## 🔒 Bảo Mật & Quyền Riêng Tư

⚠️ **QUAN TRỌNG:**

- API key của bạn được lưu trong **localStorage** (máy tính cá nhân)
- Không được share hoặc upload lên GitHub!
- Nếu vô tình share, xóa key cũ và tạo key mới trên Google AI Studio

---

## 📱 Mobile Support

Website hoạt động tốt trên:

- ✅ Desktop
- ✅ Tablet
- ✅ Mobile (responsive design)

---

## 🐛 Troubleshooting

| Vấn đề                      | Giải Pháp                                      |
| --------------------------- | ---------------------------------------------- |
| Bé gấu không trả lời        | Kiểm tra API key, refresh trang                |
| Lỗi "Quá giới hạn"          | Chờ 1-2 phút, giới hạn sẽ reset                |
| Nhạc không phát             | Kiểm tra file `tam.mp3` trong thư mục `audio/` |
| Voice input không hoạt động | Kiểm tra quyền microphone trong trình duyệt    |

---

## 📄 Giấy Phép

Dự án này được tạo cho mục đích cá nhân & cộng đồng 💜

---

## 🙏 Cảm Ơn

- **Google Gemini AI** - Cho trí tuệ nhân tạo
- **Fonts**: Google Fonts (Baloo 2, Be Vietnam Pro, etc.)
- **Bạn** - Vì đã tin tưởng bé gấu của chúng mình 💜

---

## 📞 Liên Hệ & Hỗ Trợ

Nếu có bất kỳ vấn đề gì, hãy:

1. Xem lại file **API_KEY_GUIDE.md**
2. Kiểm tra console (F12) có lỗi gì không
3. Refresh trang và thử lại

---

**Chúc bạn có một hành trình chữa lành thật tuyệt vời! 🐻✨💜**

_Mỗi bé gấu bông được tạo ra để bảo vệ những trái tim mệt mỏi._
