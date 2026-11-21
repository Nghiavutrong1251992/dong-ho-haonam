# Quy tắc dự án Hao Nam Watch Care

Khi làm việc trên dự án này, luôn tuân thủ các quy tắc bắt buộc sau:

1. **Không được dùng bảng (`<table>`)**: Không sử dụng thẻ `<table>` hay layout dạng bảng trong giao diện website và câu trả lời cho dự án này. Hãy dùng cấu trúc `.grid`, `.card`, hoặc danh sách (`<ul>` / `<ol>`).
2. **Không được thêm file CSS mới vào dự án**: Không tạo thêm file `.css` mới (và không cài thêm framework CSS như Tailwind/Bootstrap). Toàn bộ hệ thống giao diện chỉ dùng `src/styles/global.css`.
3. **Không hardcode CSS**: Không viết cứng mã màu (`#...`), font chữ, hay inline style tùy tiện trong các file `.astro`. Luôn tái sử dụng các CSS variables trong `:root` (`var(--bg)`, `var(--surface)`, `var(--ink)`, `var(--gold)`, `var(--dark)`, `var(--font-sans)`, `var(--font-serif)`) và các class chuẩn sẵn có (`.container`, `.section`, `.grid`, `.card`, `.btn`, `.prose`, `.notice`).
4. **Cấu trúc & Thương hiệu**:
   - Tên thương hiệu: **Hao Nam Watch Care** (cổng dev/preview mặc định: `4322`, không dùng `4321`).
   - Giọng văn: Chuyên sửa đồng hồ cao cấp, giải thích đơn giản, rõ ràng, trung thực.
   - Font chữ: `Be Vietnam Pro` và `Playfair Display` (miễn phí từ Google Fonts).
