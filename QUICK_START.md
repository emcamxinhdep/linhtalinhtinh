# 💾 Lưu API Key Vĩnh Viễn — 2 Cách

## 🎯 Mục Đích

Sau khi lưu API key, lần sau vào web sẽ chat được **ngay lập tức** — không cần nhập lại!

---

## 📍 Cách 1: Dán vào file `config.js` (Lâu dài nhất ⭐)

### ✅ Ưu điểm:

- Lưu **vĩnh viễn** (không mất khi xóa cache/cookie)
- Ai vào trang là có key sẵn
- Tốt nhất cho máy cá nhân

### 📝 Các bước:

**Bước 1:** Lấy API key từ Google AI Studio

- Truy cập: https://aistudio.google.com
- Đăng nhập Google
- Bấm **"Create API key"**
- Copy key (bắt đầu bằng `AIzaSy...`)

**Bước 2:** Mở file `config.js` trong editor (VSCode hoặc Notepad)

**Bước 3:** Tìm dòng này:

```javascript
GEMINI_API_KEY: "",
```

**Bước 4:** Dán API key vào:

```javascript
GEMINI_API_KEY: "AIzaSyXXXXXXXXXXXX",  // ← Ví dụ
```

**Bước 5:** Lưu file (Ctrl+S)

**Bước 6:** Refresh trang web (F5)

**Bước 7:** ✅ Xong! Lần sau vào web là bạn sẽ thấy "✅ Đã kết nối Gemini!"

---

## 📍 Cách 2: Nhập qua Web (Tạm thời)

### ✅ Ưu điểm:

- Nhanh, không cần chỉnh sửa file
- Tiện lợi nếu không quen code

### ⚠️ Nhược điểm:

- Chỉ lưu trong **localStorage** (nếu xóa cache trình duyệt → mất key)
- Chỉ hoạt động trên máy tính/trình duyệt đó

### 📝 Các bước:

**Bước 1:** Vào trang **"Góc Tâm Sự"** (góc tâm sự tâm sự của bé gấu)

**Bước 2:** Bạn sẽ thấy form ở phía trên:

```
🔑 | Nhập Gemini API Key để chat
   | Lấy miễn phí tại aistudio.google.com (chỉ mất 1-2 phút)
   | [Ô input] [Lưu & Chat 💜]
```

**Bước 3:** Dán API key vào ô input

**Bước 4:** Bấm nút **"Lưu & Chat 💜"**

**Bước 5:** ✅ Xong! Bạn sẽ thấy thông báo:

```
✅ Lưu API key thành công!
Lần sau vào web là bạn sẽ chat được ngay, không cần nhập lại 💜
```

**Bước 6:** Chọn một bé gấu và bắt đầu chat!

---

## 🔄 Đổi/Reset API Key

Nếu muốn thay đổi hoặc xóa API key:

1. Vào trang **"Góc Tâm Sự"**
2. Bạn sẽ thấy: **✅ | Đã kết nối Gemini! 💚 | [🔄 Đổi Key]**
3. Bấm nút **"🔄 Đổi Key"**
4. Form nhập sẽ hiện lại
5. Dán API key mới hoặc để trống rồi bấm "Lưu & Chat 💜"

---

## ⚠️ Lưu Ý Bảo Mật

🔒 **KHÔNG chia sẻ API key của bạn!**

- Không đăng lên GitHub, Facebook, hay bất cứ đâu
- Nếu vô tình share, xóa key cũ và tạo key mới

🔒 **Nếu push lên GitHub:**

```bash
# Thêm config.js vào .gitignore:
echo "config.js" >> .gitignore
```

---

## ✅ Xác Nhận Đã Lưu

Khi đã lưu thành công, bạn sẽ thấy:

```
✅ | Đã kết nối Gemini! 💚
   | Key đã được lưu vĩnh viễn. Chọn bé gấu bên dưới để bắt đầu tâm sự 💜
   | [🔄 Đổi Key]
```

📱 Lần sau vào web → **Bỏ qua form → Thấy ngay "Connected" state → Chat được luôn!**

---

## 🐛 Xử Lý Sự Cố

| Vấn đề                             | Cách Sửa                                          |
| ---------------------------------- | ------------------------------------------------- |
| Nhấp **Lưu** mà không có gì xảy ra | Kiểm tra API key bắt đầu bằng `AIzaSy` chưa       |
| Lỗi "API key không hợp lệ"         | Copy đúng key từ aistudio.google.com              |
| Lần sau vào vẫn phải nhập lại      | Dùng **Cách 1** (config.js) cho kết quả vĩnh viễn |
| Quên API key                       | Tạo key mới trên aistudio.google.com              |

---

## 🎉 Xong!

Chúc mừng! 🎉 Giờ bạn có thể tâm sự với bé gấu mà không cần lo lắng về API key nữa! 💜

**Bạn sẽ chat được ngay khi vào trang lần tới** ✨
