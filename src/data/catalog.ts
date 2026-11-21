export interface ServiceDetail {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  duration: string;
  warranty: string;
  suitableFor: string[];
  steps: string[];
  photoNote: string;
}

export interface BrandDetail {
  slug: string;
  name: string;
  headline: string;
  summary: string;
  commonCalibres: string[];
  commonIssues: string[];
  technicalNotes: string[];
  photoNote: string;
}

export interface RepairCase {
  slug: string;
  title: string;
  brand: string;
  model: string;
  issue: string;
  workDone: string[];
  result: string;
  beforeNote: string;
  afterNote: string;
}

export interface ArticleItem {
  slug: string;
  title: string;
  category: string;
  summary: string;
  readTime: string;
  sections: { heading: string; body: string[] }[];
}

export const EIGHT_SERVICES = [
  {
    title: 'Bảo dưỡng đồng hồ cơ cao cấp',
    desc: 'Tháo rời toàn bộ bộ máy, rửa sạch bằng máy siêu âm chuyên dụng, tra dầu đúng điểm theo tiêu chuẩn Thụy Sĩ.',
    href: '/dich-vu/bao-duong-dong-ho/',
  },
  {
    title: 'Sửa chữa bộ máy Automatic / Manual',
    desc: 'Xử lý đồng hồ đứng máy, chạy yếu cót, kẹt lịch, mòn bánh răng hoặc sai số lớn.',
    href: '/dich-vu/sua-bo-may-dong-ho/',
  },
  {
    title: 'Phục hồi đồng hồ cổ, Vintage',
    desc: 'Giữ nguyên giá trị nguyên bản, xử lý rỉ sét nhẹ, làm sạch máy cẩn thận cho các mẫu đời sâu.',
    href: '/dich-vu/phuc-hoi-dong-ho/',
  },
  {
    title: 'Sửa đồng hồ Chronograph',
    desc: 'Căn chỉnh cơ cấu bấm giờ thể thao, kim giây bấm giờ không reset về 12h hoặc nút bấm bị kẹt.',
    href: '/dich-vu/sua-bo-may-dong-ho/',
  },
  {
    title: 'Kiểm tra & xử lý đồng hồ vào nước',
    desc: 'Sấy ẩm khẩn cấp, làm sạch vết ố trên máy trước khi rỉ sét lan rộng, thay gioăng và thử áp suất.',
    href: '/dich-vu/phuc-hoi-dong-ho/',
  },
  {
    title: 'Đánh bóng, phục hồi vỏ và dây',
    desc: 'Làm mờ vết xước dăm, giữ đúng đường nét phay xước và cạnh vát sắc của vỏ đồng hồ cao cấp.',
    href: '/dich-vu/phuc-hoi-dong-ho/',
  },
  {
    title: 'Thay kính Sapphire, núm và gioăng',
    desc: 'Thay kính Sapphire bị nứt vỡ, thay núm vặn ren mòn và bộ gioăng cao su chống nước.',
    href: '/dich-vu/phuc-hoi-dong-ho/',
  },
  {
    title: 'Kiểm tra độ kín nước & căn chỉnh sai số',
    desc: 'Đo độ kín nước bằng máy thử áp suất và căn chỉnh biên độ, độ chính xác trên máy đo chuyên dụng.',
    href: '/dich-vu/bao-duong-dong-ho/',
  },
] as const;

export const SERVICES: ServiceDetail[] = [
  {
    slug: 'bao-duong-dong-ho',
    title: 'Bảo dưỡng & lau dầu đồng hồ cơ cao cấp',
    shortTitle: 'Bảo dưỡng đồng hồ',
    summary:
      'Đồng hồ cơ giống như động cơ xe sang: sau 3–5 năm chạy liên tục, dầu bôi trơn bị khô hoặc bám bụi làm mòn chi tiết. Lau dầu đúng cách giúp máy chạy êm, giữ sai số ổn định và bền bỉ nhiều năm.',
    duration: '5 – 7 ngày làm việc (bao gồm theo dõi chạy thử)',
    warranty: 'Bảo hành kỹ thuật 12 tháng',
    suitableFor: [
      'Đồng hồ Automatic, lên cót tay (Manual) của Rolex, Omega, Patek Philippe, AP, Cartier, IWC, JLC, Longines...',
      'Đồng hồ chạy nhanh/chậm bất thường, trữ cót ngắn hơn trước.',
      'Đồng hồ đã 4–5 năm chưa kiểm tra dù bên ngoài vẫn chạy.',
    ],
    steps: [
      'Kiểm tra ngoại quan, đo sai số ban đầu trên máy đo chuyên dụng.',
      'Mở nắp đáy, kiểm tra tình trạng dầu và các bánh răng bằng kính hiển vi.',
      'Tháo rời từng chi tiết máy, vệ sinh bằng máy rửa siêu âm với dung dịch chuyên dụng.',
      'Lắp ráp lại, tra đúng loại dầu Thụy Sĩ cho từng vị trí chịu lực và bộ thoát.',
      'Thay gioăng chống nước, thử áp suất và theo dõi chạy thử thực tế nhiều ngày trước khi giao.',
    ],
    photoNote: 'Ảnh bộ máy đang được tháo rời trên khay kỹ thuật & máy rửa siêu âm',
  },
  {
    slug: 'sua-bo-may-dong-ho',
    title: 'Sửa chữa bộ máy Automatic, Manual & Chronograph',
    shortTitle: 'Sửa bộ máy đồng hồ',
    summary:
      'Khi đồng hồ bị rơi, va đập, đứng máy hoàn toàn hoặc chức năng Chronograph / lịch ngày bị kẹt, tôi kiểm tra trực tiếp từng chi tiết để xác định đúng lỗi và báo phương án rõ ràng trước khi làm.',
    duration: '7 – 14 ngày tùy mức độ hư hỏng',
    warranty: 'Bảo hành 12 tháng cho phần kỹ thuật đã xử lý',
    suitableFor: [
      'Đồng hồ bị đứng máy, lắc không chạy hoặc lên cót không vào.',
      'Đồng hồ Chronograph bấm giờ không chạy, kim không trả về đúng vị trí 0.',
      'Đồng hồ bị rơi rớt dẫn đến lệch trục, gãy chân kính hoặc chạy sai nhiều phút mỗi ngày.',
    ],
    steps: [
      'Tiếp nhận, kiểm tra tình trạng máy và chụp ảnh ghi nhận hiện trạng ban đầu.',
      'Xác định chi tiết bị mòn, cong trục hoặc hư hỏng và báo giá minh bạch.',
      'Xử lý, thay thế linh kiện đúng chuẩn (nếu cần) và cân chỉnh lại toàn bộ bộ truyền động.',
      'Đo biên độ dao động, độ lệch nhịp (Beat Error) ở nhiều tư thế khác nhau.',
      'Kiểm tra lại độ kín nước và chạy thử ổn định trước khi bàn giao.',
    ],
    photoNote: 'Ảnh kiểm tra bộ máy dưới kính hiển vi và máy đo sai số',
  },
  {
    slug: 'phuc-hoi-dong-ho',
    title: 'Phục hồi đồng hồ cổ, xử lý vào nước & làm đẹp vỏ dây',
    shortTitle: 'Phục hồi đồng hồ',
    summary:
      'Dành cho đồng hồ bị hấp hơi nước, trầy xước vỏ dây hoặc đồng hồ Vintage cần phục hồi cẩn thận mà vẫn giữ đúng nét nguyên bản của chiếc đồng hồ.',
    duration: '5 – 10 ngày tùy hạng mục',
    warranty: 'Bảo hành chống nước & kỹ thuật theo từng hạng mục',
    suitableFor: [
      'Đồng hồ bị mờ kính, vào nước do hở gioăng hoặc quên đóng núm.',
      'Đồng hồ có vết xước trên vỏ, dây thép hoặc vàng cần làm mới nhẹ nhàng.',
      'Đồng hồ kính Sapphire bị mẻ, nứt cần thay kính mới và test áp suất.',
    ],
    steps: [
      'Nếu đồng hồ vào nước: mở máy xử lý sấy ẩm ngay để tránh rỉ sét mặt số và kim.',
      'Vệ sinh vỏ, dây bằng sóng siêu âm và kiểm tra toàn bộ hệ thống gioăng núm, gioăng đáy.',
      'Đánh bóng hoặc chải tia lại đúng kỹ thuật bề mặt gốc (không làm mất cạnh sắc).',
      'Kiểm tra độ kín nước bằng máy thử áp suất khô/ướt chuyên dụng.',
    ],
    photoNote: 'Ảnh so sánh trước và sau khi phục hồi vỏ dây hoặc xử lý vào nước',
  },
];

export const BRANDS: BrandDetail[] = [
  {
    slug: 'rolex',
    name: 'Rolex',
    headline: 'Sửa chữa & bảo dưỡng đồng hồ Rolex',
    summary:
      'Nhận kiểm tra, lau dầu, xử lý vào nước và sửa bộ máy cho các dòng Rolex từ đời 4 số, 5 số đến 6 số hiện đại với đầy đủ dụng cụ mở đáy chuyên dụng và máy đo sai số chuẩn xác.',
    commonCalibres: ['Calibre 3135 / 3130 / 3155', 'Calibre 3235 / 3230', 'Calibre 4130 (Daytona)', 'Calibre 1570 / 3035 (Vintage)'],
    commonIssues: [
      'Dầu khô sau 4–5 năm khiến biên độ dao động giảm, đồng hồ chạy chậm.',
      'Vấn đề ở bộ tự động (bánh xe đảo chiều) khiến đồng hồ đeo cả ngày vẫn mau hết cót.',
      'Gioăng núm Twinlock / Triplock lão hóa làm giảm khả năng chống nước.',
    ],
    technicalNotes: [
      'Sử dụng bộ mở đáy đúng chuẩn rãnh Rolex, tránh làm trầy xước nắp lưng.',
      'Chú trọng làm sạch kỹ càng và tra dầu đúng quy cách cho dòng 3235 thế hệ mới.',
    ],
    photoNote: 'Ảnh mở nắp đáy và kiểm tra bộ máy Rolex tại bàn kỹ thuật',
  },
  {
    slug: 'omega',
    name: 'Omega',
    headline: 'Sửa chữa & bảo dưỡng đồng hồ Omega',
    summary:
      'Kinh nghiệm xử lý các dòng Omega Seamaster, Speedmaster, Constellation, De Ville — bao gồm cả bộ máy Co-Axial và các dòng máy bấm giờ Chronograph phức tạp.',
    commonCalibres: ['Omega Co-Axial 2500 / 8500 / 8900', 'Speedmaster 1861 / 3861', 'Calibre 1120 / 3303', 'Omega Vintage 565 / 751'],
    commonIssues: [
      'Bộ thoát Co-Axial đòi hỏi quy trình tra dầu chuẩn xác và sạch tuyệt đối.',
      'Nút bấm hoặc cơ cấu Chronograph trên Speedmaster bị kẹt do bụi hoặc khô dầu.',
      'Núm vặn ren bị trờn ren sau nhiều năm sử dụng.',
    ],
    technicalNotes: [
      'Kiểm tra kỹ độ kín nước cho dòng Seamaster bằng máy thử áp suất.',
      'Căn chỉnh sai số ổn định ở nhiều tư thế đeo thực tế.',
    ],
    photoNote: 'Ảnh bảo dưỡng bộ máy Omega Co-Axial / Speedmaster',
  },
  {
    slug: 'patek-philippe',
    name: 'Patek Philippe',
    headline: 'Bảo dưỡng & kiểm tra đồng hồ Patek Philippe',
    summary:
      'Xử lý cẩn trọng các dòng Calatrava, Aquanaut, Nautilus và các mẫu máy mỏng, lịch thường niên. Mọi thao tác đều ưu tiên sự an toàn và giữ nguyên giá trị sưu tầm.',
    commonCalibres: ['Calibre 324 S C / 26-330 S C', 'Calibre 240 (Micro-rotor)', 'Calibre 215 PS (Lên cót tay)'],
    commonIssues: [
      'Máy mỏng và micro-rotor rất nhạy cảm với bụi bẩn và va chạm.',
      'Cần kiểm tra định kỳ để tránh mài mòn cầu máy và chân kính.',
    ],
    technicalNotes: [
      'Không đánh bóng tùy tiện vỏ máy nếu khách muốn giữ nguyên cạnh sắc sưu tầm.',
      'Tiếp nhận kiểm tra kỹ trước khi báo phương án chi tiết.',
    ],
    photoNote: 'Ảnh kiểm tra bộ máy Patek Philippe dưới kính hiển vi',
  },
  {
    slug: 'audemars-piguet',
    name: 'Audemars Piguet',
    headline: 'Sửa chữa & bảo dưỡng Audemars Piguet',
    summary:
      'Tiếp nhận kiểm tra, lau dầu và phục hồi vỏ dây cho các dòng Royal Oak, Royal Oak Offshore với độ chính xác cao ở các đường phay xước đặc trưng.',
    commonCalibres: ['Calibre 3120 / 4302', 'Calibre 2385 / 3126 (Chronograph)'],
    commonIssues: [
      'Vỏ và vành bezel bát giác dễ bị cấn xước khi đeo hàng ngày.',
      'Cơ cấu chuyển lịch và rotor lên cót cần bảo dưỡng định kỳ để tránh kẹt.',
    ],
    technicalNotes: [
      'Đánh bóng / phay xước giữ nguyên độ sắc của 8 cạnh bezel Royal Oak.',
      'Kiểm tra gioăng và ốc vít vành bezel đúng lực.',
    ],
    photoNote: 'Ảnh phục hồi hoặc bảo dưỡng Audemars Piguet Royal Oak',
  },
  {
    slug: 'cartier',
    name: 'Cartier',
    headline: 'Sửa chữa & bảo dưỡng đồng hồ Cartier',
    summary:
      'Chăm sóc các dòng Cartier Santos, Tank, Ballon Bleu, Pasha — từ máy cơ Automatic đến các dòng máy mỏng lên cót tay.',
    commonCalibres: ['Cartier 1847 MC', 'Calibre 1904 MC', 'Các dòng máy cơ ETA / Piaget nền tảng'],
    commonIssues: [
      'Vành bezel bóng của Santos / Ballon Bleu dễ trầy xước nhẹ.',
      'Khô dầu ở hệ thống bánh răng lên cót hoặc lịch ngày.',
    ],
    technicalNotes: [
      'Xử lý xước nhẹ vành bezel gọn gàng, sạch sẽ.',
      'Thay gioăng và kiểm tra chống nước trước khi bàn giao.',
    ],
    photoNote: 'Ảnh bảo dưỡng đồng hồ Cartier tại Hao Nam Watch Care',
  },
];

export const OTHER_LUXURY_BRANDS = [
  'IWC Schaffhausen',
  'Jaeger-LeCoultre',
  'Breitling',
  'Tudor',
  'Longines',
  'Zenith',
  'Hublot',
  'Vacheron Constantin',
];

export const REPAIR_CASES: RepairCase[] = [
  {
    slug: 'bao-duong-rolex-datejust-3135',
    title: 'Bảo dưỡng toàn diện Rolex Datejust (Calibre 3135)',
    brand: 'Rolex',
    model: 'Datejust 36 — Cal. 3135',
    issue: 'Đồng hồ chạy chậm khoảng 18 giây/ngày, trữ cót yếu do 6 năm chưa lau dầu.',
    workDone: [
      'Tháo rời toàn bộ bộ máy 3135, vệ sinh bằng máy rửa siêu âm chuyên dụng.',
      'Kiểm tra bánh xe đảo chiều tự động và thay gioăng đáy, gioăng núm mới.',
      'Tra dầu chuẩn kỹ thuật và căn chỉnh sai số trên máy đo.',
    ],
    result: 'Sai số ổn định ở mức +1 đến +2 giây/ngày, biên độ đạt chuẩn, test kín nước đạt.',
    beforeNote: 'Ảnh trước: Bộ máy khô dầu, có bụi bám ở cầu tự động',
    afterNote: 'Ảnh sau: Bộ máy sạch sáng, kết quả đo sai số trên máy',
  },
  {
    slug: 'xu-ly-vao-nuoc-omega-seamaster',
    title: 'Xử lý vào nước & lau dầu Omega Seamaster Co-Axial',
    brand: 'Omega',
    model: 'Seamaster Diver 300M',
    issue: 'Mặt kính bị hấp hơi nước sau khi đi mưa do núm vặn chưa siết chặt hết ren.',
    workDone: [
      'Mở máy khẩn cấp ngay khi tiếp nhận để sấy khô và ngăn rỉ sét kim, cọc số.',
      'Tháo rời vệ sinh toàn bộ bộ máy Co-Axial, làm sạch dấu vết ẩm.',
      'Thay bộ gioăng mới và kiểm tra áp suất nước.',
    ],
    result: 'Mặt số giữ nguyên vẹn không ố, máy chạy ổn định và vượt qua bài test áp suất.',
    beforeNote: 'Ảnh trước: Mặt kính hấp hơi nước khi mới tiếp nhận',
    afterNote: 'Ảnh sau: Mặt kính trong suốt, máy chạy ổn định',
  },
];

export const ARTICLES: ArticleItem[] = [
  {
    slug: 'dong-ho-co-chay-sai-gio',
    title: 'Tại sao đồng hồ cơ chạy sai giờ và khi nào cần đem đi kiểm tra?',
    category: 'Kỹ thuật cơ bản',
    readTime: '3 phút đọc',
    summary:
      'Giải thích đơn giản những nguyên nhân phổ biến khiến đồng hồ cơ chạy nhanh hoặc chậm bất thường, và cách nhận biết lúc nào chỉ cần khử từ, lúc nào cần lau dầu.',
    sections: [
      {
        heading: '1. Đồng hồ cơ sai số bao nhiêu là bình thường?',
        body: [
          'Khác với đồng hồ pin, đồng hồ cơ hoạt động bằng bánh răng và dây tóc nên luôn có sai số nhất định. Với đồng hồ Thụy Sĩ cao cấp đạt chuẩn Chronometer, mức sai số thường nằm trong khoảng -4 đến +6 giây/ngày.',
          'Nếu chiếc đồng hồ của bạn bỗng nhiên chạy nhanh 30–60 giây mỗi ngày, hoặc chậm vài phút một ngày, đó là dấu hiệu bộ máy đang gặp vấn đề.',
        ],
      },
      {
        heading: '2. Ba nguyên nhân phổ biến nhất',
        body: [
          'Nhiễm từ: Để đồng hồ gần nam châm, loa, iPad hoặc túi xách có khóa từ làm dây tóc bị dính nhẹ, khiến đồng hồ chạy nhanh đột biến. Trường hợp này xử lý rất nhanh bằng máy khử từ.',
          'Khô dầu sau nhiều năm sử dụng: Dầu bôi trơn bị đặc hoặc khô tạo ma sát lớn, làm đồng hồ chạy chậm, yếu cót và dễ mòn trục bánh răng.',
          'Va đập mạnh: Rơi rớt có thể làm lệch ngựa, cong trục cân bằng hoặc xô lệch dây tóc, cần thợ có máy đo và kính hiển vi kiểm tra trực tiếp.',
        ],
      },
    ],
  },
  {
    slug: 'dau-hieu-dong-ho-can-bao-duong',
    title: '5 dấu hiệu rõ ràng cho thấy đồng hồ cao cấp cần được bảo dưỡng',
    category: 'Bảo quản đồng hồ',
    readTime: '3 phút đọc',
    summary:
      'Đừng đợi đồng hồ đứng hẳn mới đem đi sửa. Nhận biết sớm giúp bảo vệ các linh kiện đắt tiền bên trong bộ máy.',
    sections: [
      {
        heading: 'Khi nào bạn nên mang đồng hồ đi kiểm tra?',
        body: [
          '1. Thời gian trữ cót giảm rõ rệt: Trước đây tháo ra 2 ngày vẫn chạy, nay chỉ qua 1 đêm đã đứng.',
          '2. Kính bị mờ sương nhẹ khi thay đổi nhiệt độ: Dấu hiệu gioăng cao su đã lão hóa, hơi ẩm bắt đầu lọt vào.',
          '3. Cảm giác vặn núm lên cót bị sượng, nặng tay hơn bình thường.',
          '4. Sai số tăng bất thường dù không làm rơi.',
          '5. Đã quá 4–5 năm kể từ lần bảo dưỡng gần nhất.',
        ],
      },
    ],
  },
  {
    slug: 'chi-phi-bao-duong-dong-ho-cao-cap',
    title: 'Chi phí bảo dưỡng đồng hồ Rolex, Omega phụ thuộc vào những yếu tố nào?',
    category: 'Tư vấn khách hàng',
    readTime: '4 phút đọc',
    summary:
      'Giải thích minh bạch cách tính chi phí lau dầu, sửa chữa đồng hồ cao cấp để bạn yên tâm trước khi quyết định gửi máy.',
    sections: [
      {
        heading: 'Không có một mức giá chung cho mọi chiếc đồng hồ',
        body: [
          'Chi phí bảo dưỡng phụ thuộc chủ yếu vào độ phức tạp của bộ máy: đồng hồ 3 kim 1 lịch sẽ có thời gian tháo lắp khác hẳn so với đồng hồ Chronograph bấm giờ, GMT hay lịch vạn niên.',
          'Ngoài ra, nếu đồng hồ chỉ cần lau dầu định kỳ (chưa có linh kiện nào bị mòn gãy), chi phí sẽ nhẹ nhàng hơn nhiều so với việc để máy chạy khô quá lâu dẫn đến phải thay thế bánh răng hoặc trục.',
          'Tại Hao Nam Watch Care, tôi luôn kiểm tra trực tiếp tình trạng máy và báo giá rõ ràng từng hạng mục trước khi bắt đầu làm.',
        ],
      },
    ],
  },
];
