// ═══════════════════════════════════════════════════════════
// MEDIA CONFIG — đổi ảnh và nhạc từ đây
// ═══════════════════════════════════════════════════════════
const MEDIA_CONFIG = {
  // Nhạc nền — thêm file vào thư mục và đổi đường dẫn ở đây
  music: [
    "music/lofi-healing.mp3",         // file 1
    "music/soft-piano.mp3",           // file 2
    "music/cozy-bear-study.mp3",      // file 3
    // fallback online nếu không có file local:
    "https://assets.mixkit.co/music/preview/mixkit-serene-view-443.mp3",
  ],

  // Ảnh nền hero — thêm file vào thư mục images/
  heroImages: [
    // "images/hero-bg-1.jpg",
    // "images/hero-bg-2.jpg",
  ],

  // Ảnh plushie — key là id plushie, value là đường dẫn ảnh
  plushieImages: {
    // 1: "images/plushie-lumi.jpg",
    // 2: "images/plushie-mochi.jpg",
  },
};

// ═══════════════════════════════════════════════════════════
// LANGUAGE DATA
// ═══════════════════════════════════════════════════════════
const LANG = {
  vi: {
    navMeetBears: "Meet Our Bears",
    navComfortRoom: "Comfort Room",
    navFeelings: "Kể Chuyện",
    navBlindBox: "Blind Box",
    heroQuote: `"Một vài bé được tạo ra từ bông vải.<br /><em>Một vài bé được tạo ra để bảo vệ những trái tim mệt mỏi.</em>"`,
    heroBtnAdopt: "🧸 Nhận Nuôi",
    heroBtnComfort: "🌙 Vào Phòng Chữa Lành",
    heroBtnFeelings: "💌 Kể Cho Bé Nghe",
    heroBtnBlind: "🎁 Mở Hộp Bí Mật",
    scrollHint: "cuộn xuống",
    plushieSectionTitle: "Meet Our Little Bears",
    plushieSectionSub: "Mỗi bé đang chờ đợi trái tim phù hợp để về nhà 🏡",
    comfortTitle: "🌙 Today's Comfort Room",
    comfortSub: "Một không gian nhỏ chỉ dành riêng cho bạn hôm nay 💜",
    affirmationTitle: "Today's Affirmation",
    playlistTitle: "Playlists Chữa Lành",
    suggestTitle: "Gợi Ý Hôm Nay",
    vnSpeaker: "Lumi",
    feelingsTitle: "Kể Cho Bé Nghe Nhé 💜",
    feelingsSub: "Bạn có thể nói bất cứ điều gì — bé sẽ lắng nghe và không phán xét 🌸",
    feelingsLabel: "Bạn đang cảm thấy thế nào hôm nay? 🌙",
    feelingsPlaceholder: "Viết bất cứ điều gì bạn muốn... Bé sẽ đọc tất cả 🌸\n\nBạn không cần phải hoàn hảo hay rõ ràng. Cứ viết thôi.",
    feelingsSendBtn: "💌 Gửi Cho Bé",
    responseFrom: "✉️ Thư từ Lumi",
    blindTitle: "Blind Emotion Box ✨",
    blindSub: "Chọn cảm xúc của bạn — shop sẽ chuẩn bị một hộp bí mật đặc biệt 💜",
    blindOrderBtn: "🎁 Đặt Hộp Bí Mật Này",
    blindRevealTitle: "Hộp bí mật của bạn 💜",
    blindRevealNote: "📦 Shop sẽ chuẩn bị riêng cho bạn với tất cả tình yêu thương ✨",
    loadingText: "Have a nice day!",
    musicLabel: "nhạc",
    musicPlayingLabel: "đang phát",
    footerQuote: '"Một nơi trú ẩn phép màu nhỏ bé dành cho những trái tim mệt mỏi."',
    viewStory: "Xem Chuyện",
    meetMe: "Gặp Mình",
    bringHome: "🏡 Nhận Nuôi Bé",
    paymentTitle: "🧸 Xác nhận đơn hàng",
    paymentItem: "Bé plushie:",
    paymentStatus: "Trạng thái:",
    paymentInclude: "Đã bao gồm phí đóng gói ✨",
    paymentQRNote: "Quét mã QR MoMo để thanh toán",
    paymentAccount: "📛 Tên tài khoản: PLUSHIE WORLD",
    paymentPhone: "Số điện thoại: 0909.xxx.xxx",
    paymentSteps: [
      "Mở app MoMo và quét mã QR phía trên",
      "Nhập số tiền",
      "Ghi chú: Tên bạn + tên bé plushie",
      "Xác nhận chuyển khoản",
      "Bấm nút bên dưới để điền thông tin giao hàng",
    ],
    paymentConfirmBtn: "✅ Mình Đã Thanh Toán",
    toastFeelings: "🌸 Hãy viết điều gì đó hoặc chọn cảm xúc nhé!",
    toastReceived: "💌 Lumi đã nhận được tâm sự của bạn!",
    toastPayment: "💜 Cảm ơn bạn! Đang chuyển đến form điền thông tin...",
    toastForm: "🌸 Điền đầy đủ thông tin để bé về nhà nhé!",
    chipLabels: {
      "buồn": "😢 Buồn",
      "mệt": "😔 Mệt mỏi",
      "cô đơn": "🥺 Cô đơn",
      "lo lắng": "😰 Lo lắng",
      "nhớ ai đó": "💭 Nhớ ai đó",
      "không biết": "🌫️ Không biết",
      "cần ôm": "🫂 Cần một cái ôm",
      "hạnh phúc": "✨ Hạnh phúc",
    },
    emotionBoxes: {
      hug: { title: "I Need A Hug", desc: "Khi bạn chỉ muốn được ôm chặt" },
      tired: { title: "Emotionally Tired", desc: "Khi tâm trí đã quá mệt mỏi rồi" },
      miss: { title: "I Miss Someone", desc: "Khi nhớ ai đó mà không nói được" },
      invisible: { title: "I Feel Invisible", desc: "Khi cảm giác không ai hiểu mình" },
      anxious: { title: "I Feel Anxious", desc: "Khi lo âu không biết từ đâu" },
      happy: { title: "Just Be Happy", desc: "Khi muốn thêm một chút phép màu" },
    },
    modalLabels: {
      personality: "💜 Tính cách",
      hobbies: "🌸 Sở thích",
      sadness: "🌧️ Nỗi buồn nhỏ của bé",
      story: "📖 Câu chuyện của",
      diary: "'s Little Diary",
      comfort: "💌 Lời an ủi từ",
      playlist: "🎵 Playlist đề xuất",
      reviews: "💬 Review cảm xúc",
      birthday: "🎂 Sinh ngày",
    },
  },
  en: {
    navMeetBears: "Meet Our Bears",
    navComfortRoom: "Comfort Room",
    navFeelings: "Tell Feelings",
    navBlindBox: "Blind Box",
    heroQuote: `"Some bears are made of fabric and fluff.<br /><em>Some are made to protect the hearts that are tired of holding on.</em>"`,
    heroBtnAdopt: "🧸 Adopt A Plushie",
    heroBtnComfort: "🌙 Enter Comfort Room",
    heroBtnFeelings: "💌 Tell Your Feelings",
    heroBtnBlind: "🎁 Open Blind Box",
    scrollHint: "scroll down",
    plushieSectionTitle: "Meet Our Little Bears",
    plushieSectionSub: "Each little one is waiting for the right heart to take them home 🏡",
    comfortTitle: "🌙 Today's Comfort Room",
    comfortSub: "A small space just for you today 💜",
    affirmationTitle: "Today's Affirmation",
    playlistTitle: "Healing Playlists",
    suggestTitle: "Today's Suggestion",
    vnSpeaker: "Lumi",
    feelingsTitle: "Tell Me How You Feel 💜",
    feelingsSub: "You can say anything — your little bear will listen without judgment 🌸",
    feelingsLabel: "How are you feeling today? 🌙",
    feelingsPlaceholder: "Write anything you want... your bear will read it all 🌸\n\nYou don't have to be perfect or clear. Just write.",
    feelingsSendBtn: "💌 Send To Your Bear",
    responseFrom: "✉️ A Letter from Lumi",
    blindTitle: "Blind Emotion Box ✨",
    blindSub: "Pick your emotion — we'll prepare a special secret box just for you 💜",
    blindOrderBtn: "🎁 Order This Mystery Box",
    blindRevealTitle: "Your mystery box 💜",
    blindRevealNote: "📦 We'll prepare this just for you with all our love ✨",
    loadingText: "Have a nice day!",
    musicLabel: "music",
    musicPlayingLabel: "playing",
    footerQuote: '"A tiny magical refuge for hearts that are tired."',
    viewStory: "View Story",
    meetMe: "Meet Me",
    bringHome: "🏡 Bring Me Home",
    paymentTitle: "🧸 Order Confirmation",
    paymentItem: "Plushie:",
    paymentStatus: "Status:",
    paymentInclude: "Packaging included ✨",
    paymentQRNote: "Scan MoMo QR code to pay",
    paymentAccount: "📛 Account name: PLUSHIE WORLD",
    paymentPhone: "Phone: 0909.xxx.xxx",
    paymentSteps: [
      "Open MoMo app and scan the QR code above",
      "Enter the amount",
      "Note: Your name + plushie name",
      "Confirm transfer",
      "Click the button below to fill in delivery details",
    ],
    paymentConfirmBtn: "✅ I Have Completed Payment",
    toastFeelings: "🌸 Write something or pick an emotion first!",
    toastReceived: "💌 Lumi has received your feelings!",
    toastPayment: "💜 Thank you! Redirecting to order form...",
    toastForm: "🌸 Fill in your details so your bear can come home!",
    chipLabels: {
      "buồn": "😢 Sad",
      "mệt": "😔 Tired",
      "cô đơn": "🥺 Lonely",
      "lo lắng": "😰 Anxious",
      "nhớ ai đó": "💭 Missing Someone",
      "không biết": "🌫️ Don't Know",
      "cần ôm": "🫂 Need A Hug",
      "hạnh phúc": "✨ Happy",
    },
    emotionBoxes: {
      hug: { title: "I Need A Hug", desc: "When you just want to be held tight" },
      tired: { title: "Emotionally Tired", desc: "When your mind is just too exhausted" },
      miss: { title: "I Miss Someone", desc: "When you miss someone but can't say it" },
      invisible: { title: "I Feel Invisible", desc: "When it feels like no one understands" },
      anxious: { title: "I Feel Anxious", desc: "When anxiety comes from nowhere" },
      happy: { title: "Just Be Happy", desc: "When you want a little extra magic" },
    },
    modalLabels: {
      personality: "💜 Personality",
      hobbies: "🌸 Hobbies",
      sadness: "🌧️ This little one's soft sadness",
      story: "📖 The Story of",
      diary: "'s Little Diary",
      comfort: "💌 Words of comfort from",
      playlist: "🎵 Recommended Playlist",
      reviews: "💬 Heartfelt Reviews",
      birthday: "🎂 Born on",
    },
  },
};

// ═══════════════════════════════════════════════════════════
// BILINGUAL CONTENT DATA
// ═══════════════════════════════════════════════════════════
const DAILY_QUOTES = {
  vi: [
    "Bạn đã làm tốt hơn bạn nghĩ rất nhiều. 🌸",
    "Dù hôm nay thế nào, luôn có một bạn gấu nhỏ ở đây chờ bạn. 🧸",
    "Mong bạn gặp thật nhiều điều dễ thương trong ngày hôm nay. 💜",
    "Được phép mệt. Được phép cần giúp đỡ. Đó là con người. ✨",
    "Một ngày tệ không có nghĩa là cuộc đời tệ. 🌙",
    "Bạn xứng đáng nhận được những cái ôm ấm áp và thật nhiều yêu thương. 🌸",
    "Hy vọng trái tim bạn hôm nay được lấp đầy bởi những điều nhỏ bé nhưng hạnh phúc. 💫",
    "Có những ngày mình chỉ cần tồn tại thôi — và điều đó là đủ. 🌿",
    "Bạn không cần phải trả lời tất cả ngay bây giờ. Cứ từng bước một. 💜",
    "Sự dịu dàng với bản thân mình cũng là một dạng dũng cảm. ✨",
    "Không phải mọi ngày đều cần phải tuyệt vời — bình thường cũng đẹp lắm. 🌸",
    "Mong bạn ngủ ngon đêm nay và thức dậy nhẹ nhàng hơn. 🌙",
  ],
  en: [
    "You've done better than you think. 🌸",
    "No matter what today brings, a little bear is always here waiting for you. 🧸",
    "May you encounter many gentle, lovely things today. 💜",
    "You're allowed to be tired. Allowed to need help. That's being human. ✨",
    "A bad day doesn't mean a bad life. 🌙",
    "You deserve warm hugs and so much love. 🌸",
    "May your heart be filled with small but beautiful things today. 💫",
    "Some days you just need to exist — and that is enough. 🌿",
    "You don't have to answer everything right now. One step at a time. 💜",
    "Being gentle with yourself is also a form of courage. ✨",
    "Not every day needs to be extraordinary — ordinary is beautiful too. 🌸",
    "May you sleep well tonight and wake up a little lighter. 🌙",
  ],
};

const AFFIRMATIONS = {
  vi: [
    "Mình mong hôm nay bạn sẽ mỉm cười ít nhất một lần thật nhẹ nhàng. 💜",
    "Bạn không cần trở nên hoàn hảo để được yêu thương đâu. 🌸",
    "Bạn đang cố gắng từng chút một, và điều đó thật đáng quý. 💜✨",
    "Nhớ uống đủ nước, nghỉ ngơi một chút và tự ôm mình thật nhẹ nha. 🌿",
    "Dù hôm nay thế nào, bạn vẫn luôn xứng đáng với yêu thương. 🌙",
    "Bạn quan trọng hơn bạn nghĩ rất nhiều. 💜",
    "Hôm nay hãy nhẹ nhàng với chính mình — bạn đã làm đủ rồi. ✨",
    "Mỗi ngày bạn thức dậy là một lần bạn chọn tiếp tục — điều đó dũng cảm lắm. 🌸",
  ],
  en: [
    "I hope you smile at least once today — softly, genuinely. 💜",
    "You don't need to be perfect to be worthy of love. 🌸",
    "You're trying, little by little, and that is so precious. 💜✨",
    "Remember to drink water, rest a little, and give yourself a gentle hug. 🌿",
    "No matter what today holds, you are always deserving of love. 🌙",
    "You matter more than you realize. 💜",
    "Be gentle with yourself today — you've done enough. ✨",
    "Every day you wake up is a choice to keep going — that's brave. 🌸",
  ],
};

const COMFORT_ACTIVITIES = {
  vi: [
    [
      "🍵 Pha một tách trà ấm và ngồi yên 10 phút",
      "🎵 Nghe một playlist yêu thích với mắt nhắm",
      "📓 Viết 3 điều bạn biết ơn hôm nay",
      "🌸 Nhìn ra cửa sổ và đếm những thứ màu xanh",
    ],
    [
      "🛁 Tắm nước ấm tối nay",
      "📚 Đọc vài trang sách bạn đang dở",
      "🌙 Đi ngủ sớm hơn 30 phút",
      "🎨 Vẽ gì đó — dù không đẹp cũng không sao",
    ],
    [
      "☁️ Nằm xuống và nhìn trần nhà 5 phút",
      "🧸 Ôm gì đó mềm và ngồi im",
      "💌 Nhắn tin hỏi thăm một người bạn lâu không gặp",
      "🌿 Chăm sóc một cây nhỏ trong phòng",
    ],
    [
      "🌅 Ra ngoài đón vài phút không khí buổi sáng",
      "🎙️ Hát một bài bạn thích dù không ai nghe",
      "🍫 Tự thưởng cho mình thứ gì ngon ngon",
      "📷 Chụp một thứ đẹp bạn thấy hôm nay",
    ],
  ],
  en: [
    [
      "🍵 Brew a warm cup of tea and sit quietly for 10 minutes",
      "🎵 Listen to a favorite playlist with your eyes closed",
      "📓 Write 3 things you're grateful for today",
      "🌸 Look out the window and count things that are green",
    ],
    [
      "🛁 Take a warm bath or shower tonight",
      "📚 Read a few pages of the book you've been meaning to finish",
      "🌙 Go to sleep 30 minutes earlier",
      "🎨 Draw something — it doesn't have to be pretty",
    ],
    [
      "☁️ Lie down and stare at the ceiling for 5 minutes",
      "🧸 Hug something soft and just sit still",
      "💌 Text a friend you haven't talked to in a while",
      "🌿 Tend to a small plant in your room",
    ],
    [
      "🌅 Step outside for a few minutes of morning air",
      "🎙️ Sing a song you love even if no one's listening",
      "🍫 Treat yourself to something delicious",
      "📷 Photograph one beautiful thing you notice today",
    ],
  ],
};

const VN_SCRIPTS = {
  vi: [
    { text: "Ồ, bạn đến rồi... 🌸 Mình đã đợi.", choices: ["Mình ổn.", "Mình không ổn lắm...", "Mình chỉ muốn ngồi đây một chút."] },
    { text: "Được rồi. Mình sẽ không hỏi nhiều. Cứ ngồi đây với mình nhé... 💜", choices: ["Hôm nay mình mệt quá.", "Mình nhớ ai đó.", "Không có gì đặc biệt."] },
    { text: "Mình biết. Đôi khi không có lý do cụ thể — mà mình vẫn cứ cảm thấy nặng nề như vậy. ✨ Điều đó hoàn toàn bình thường.", choices: ["Bạn có hiểu cảm giác đó không?", "Mình muốn nghe nhạc.", "Cho mình ôm bạn một cái."] },
    { text: "Mình hiểu chứ. Mình cũng từng ngồi trong bóng tối một mình và không biết mình cảm thấy gì. 🌙 Nhưng bạn không phải làm vậy một mình.", choices: ["Cảm ơn, Lumi.", "Tiếp tục kể cho mình nghe đi."] },
  ],
  en: [
    { text: "Oh, you're here... 🌸 I've been waiting.", choices: ["I'm okay.", "Not really okay...", "I just want to sit here for a bit."] },
    { text: "Okay. I won't ask too much. Just sit here with me... 💜", choices: ["I'm so tired today.", "I miss someone.", "Nothing in particular."] },
    { text: "I know. Sometimes there's no specific reason — and yet it still feels heavy. ✨ That's completely normal.", choices: ["Do you understand that feeling?", "I want to listen to music.", "Can I hug you?"] },
    { text: "I do understand. I've sat in the dark alone and not known what I was feeling too. 🌙 But you don't have to do that alone.", choices: ["Thank you, Lumi.", "Tell me more."] },
  ],
};

const PLUSHIE_RESPONSES = {
  vi: {
    buồn: { text: "Này bạn ơi... Mình đọc tất cả rồi. Mình biết bây giờ không dễ chút nào. Và mình muốn bạn biết — cảm xúc này của bạn là thật, và bạn không cần phải cố giải thích hay biện hộ cho nó.\n\nCứ để mình ngồi đây cùng bạn một lúc nhé? Mình sẽ không đi đâu. 🌸", suggest: "💜 Lumi có thể là người bạn phù hợp nhất cho bạn lúc này — bé biết cách ở bên trong im lặng.", hearts: "💜 🌸 💜" },
    mệt: { text: "Bạn đã cố gắng quá nhiều rồi... Mình thấy đó. Đôi khi cơ thể và tâm trí cần được nghỉ — không phải vì bạn yếu, mà vì bạn đã cho đi quá nhiều.\n\nHôm nay hãy nhẹ nhàng với bản thân mình nhé. Không cần làm gì nhiều. Chỉ cần tồn tại là đủ. 🌿", suggest: "🐼 Pudding có thể ôm bạn ấm áp nhất — bé được sinh ra để làm cho người khác cảm thấy an toàn.", hearts: "💜 ✨ 💜" },
    "cô đơn": { text: "Mình hiểu cái cảm giác đó — khi xung quanh đầy người mà vẫn thấy một mình. Hoặc khi phòng trống và không có ai để gọi.\n\nNhưng bạn ơi — bạn đang ở đây và đang chia sẻ điều này. Điều đó có nghĩa là bạn đang tìm kiếm kết nối. Và mình — mình đang lắng nghe bạn. 💜", suggest: "🧸 Coco rất muốn làm bạn đồng hành của bạn — bé không bao giờ để bạn đơn độc.", hearts: "🌸 💜 🌸" },
    "lo lắng": { text: "Hít thở thật sâu nhé... Một lần nữa. Mình ở đây.\n\nMình biết khi lo lắng, mọi thứ đều cảm thấy như sắp xảy ra chuyện gì đó tệ. Nhưng ngay lúc này — bạn đang an toàn. Bạn đang thở. Và mình đang ở bên bạn. ✨", suggest: "🦋 Mira có thể nhắc bạn rằng những cơn lo âu cũng sẽ qua — như mọi thứ khác.", hearts: "✨ 💜 ✨" },
    "nhớ ai đó": { text: "Nhớ ai đó là một trong những cảm giác kỳ lạ nhất — vừa đẹp vừa đau. Nó cho thấy người đó quan trọng với bạn như thế nào.\n\nHãy để mình giữ nỗi nhớ đó cùng bạn một lúc nhé. Đôi khi chỉ cần ai đó biết là đủ. 🌙", suggest: "🐱 Noa — người bạn đêm khuya — hiểu những cảm xúc phức tạp hơn ai hết.", hearts: "🌙 💜 🌙" },
    "không biết": { text: "Không cần phải biết mình đang cảm thấy gì. Đôi khi cảm xúc cũng chưa có tên.\n\nCứ để nó ở đó. Và để mình ở đây cùng. Bạn không cần phải hiểu tất cả ngay bây giờ. 🌫️", suggest: "🧸 Lumi không đặt câu hỏi — bé chỉ ở bên và lắng nghe. Có lẽ đó là điều bạn cần.", hearts: "🌸 💫 🌸" },
    "cần ôm": { text: "Mình muốn ôm bạn thật chặt ngay bây giờ. Thật chặt. Theo cách mà tất cả mọi thứ căng thẳng đều tan ra.\n\nDù mình không thể ôm bạn qua màn hình — hãy biết rằng bạn xứng đáng được ôm. Bởi người khác. Và bởi chính mình. 🫂", suggest: "🐼 Pudding — sinh ra để ôm và được ôm — chắc chắn là người bạn cần lúc này.", hearts: "🫂 🌸 🫂" },
    "hạnh phúc": { text: "Ồ~! Bạn hạnh phúc! Mình thích điều này lắm. Hãy giữ nó nhé, trân trọng nó.\n\nHạnh phúc không cần lý do to lớn. Đôi khi nó chỉ là ánh nắng buổi sáng, một tách cà phê ngon, hay chỉ là... một khoảnh khắc bình yên. ✨", suggest: "🐰 Mochi sẽ là bạn đồng hành tuyệt vời cho những ngày hạnh phúc của bạn!", hearts: "✨ 🌸 ✨" },
    default: { text: "Mình đã đọc tất cả những gì bạn chia sẻ. Dù mình không thể hiểu hoàn toàn — mình muốn bạn biết rằng những gì bạn cảm thấy là hợp lệ.\n\nBạn không cần phải mạnh mẽ mọi lúc. Không cần phải có lý do. Mình ở đây, và mình đang lắng nghe. 💜", suggest: "🧸 Một trong những bé plushie của chúng mình chắc chắn sẽ phù hợp với bạn.", hearts: "💜 🌸 💜" },
  },
  en: {
    buồn: { text: "Hey... I read everything. I know it's not easy right now. And I want you to know — what you're feeling is real, and you don't have to explain or justify it.\n\nWill you let me sit here with you for a while? I'm not going anywhere. 🌸", suggest: "💜 Lumi might be the perfect companion for you right now — she knows how to simply be present.", hearts: "💜 🌸 💜" },
    mệt: { text: "You've been trying so hard... I see that. Sometimes the body and mind need rest — not because you're weak, but because you've been giving so much.\n\nBe gentle with yourself today. You don't have to do much. Just existing is enough. 🌿", suggest: "🐼 Pudding gives the warmest hugs — she was made to make others feel safe.", hearts: "💜 ✨ 💜" },
    "cô đơn": { text: "I know that feeling — surrounded by people and still feeling alone. Or an empty room and no one to call.\n\nBut hey — you're here and you're sharing this. That means you're reaching out. And I'm listening. 💜", suggest: "🧸 Coco would love to be your companion — she never lets anyone feel alone.", hearts: "🌸 💜 🌸" },
    "lo lắng": { text: "Take a deep breath... one more time. I'm here.\n\nI know when anxiety hits, everything feels like something bad is about to happen. But right now — you are safe. You are breathing. And I'm right here with you. ✨", suggest: "🦋 Mira can remind you that anxious feelings pass too — like everything else.", hearts: "✨ 💜 ✨" },
    "nhớ ai đó": { text: "Missing someone is one of the strangest feelings — beautiful and painful at once. It shows how much that person means to you.\n\nLet me hold that longing with you for a moment. Sometimes just having someone know is enough. 🌙", suggest: "🐱 Noa — your late-night companion — understands complex feelings better than anyone.", hearts: "🌙 💜 🌙" },
    "không biết": { text: "You don't have to know what you're feeling. Sometimes emotions don't have names yet.\n\nJust let it be there. And let me be here too. You don't have to understand everything right now. 🌫️", suggest: "🧸 Lumi doesn't ask questions — she just stays and listens. Maybe that's what you need.", hearts: "🌸 💫 🌸" },
    "cần ôm": { text: "I wish I could hug you tight right now. So tight that everything tense just melts away.\n\nEven though I can't hug you through the screen — know that you deserve to be held. By others. And by yourself. 🫂", suggest: "🐼 Pudding — made to hug and be hugged — is exactly who you need right now.", hearts: "🫂 🌸 🫂" },
    "hạnh phúc": { text: "You're happy! I love this so much. Hold onto it, cherish it.\n\nHappiness doesn't need a big reason. Sometimes it's just the morning sun, a good cup of coffee, or just... a quiet peaceful moment. ✨", suggest: "🐰 Mochi would be the perfect companion for your happy days!", hearts: "✨ 🌸 ✨" },
    default: { text: "I read everything you shared. Even if I can't fully understand — I want you to know that what you feel is valid.\n\nYou don't have to be strong all the time. You don't need a reason. I'm here, and I'm listening. 💜", suggest: "🧸 One of our little plushies will certainly be right for you.", hearts: "💜 🌸 💜" },
  },
};

const BLIND_BOX_CONTENTS = {
  vi: {
    hug: { icon: "🫂", title: "The Big Hug Box", items: ["🧸 Plushie bí mật cỡ vừa", "💌 Thư tay viết riêng cho bạn", "🎀 Ruy băng pastel", "🍬 Kẹo ngọt nhỏ", "✉️ Postcard có quote chữa lành"] },
    tired: { icon: "🌙", title: "The Rest & Recover Box", items: ["🧸 Plushie nhỏ mềm mại", "🍵 Túi trà thảo mộc", "📓 Mini journal để viết", "🌸 Sticker bộ cảm xúc", "💜 Thư tay từ Lumi"] },
    miss: { icon: "💭", title: "The Missing Someone Box", items: ["🧸 Plushie mang năng lượng ấm áp", "📮 Set viết thư nhỏ", '🎵 QR playlist "I Miss You"', "💌 Envelope trống để bạn viết gì đó", "🌙 Postcard đêm khuya"] },
    invisible: { icon: "🌟", title: '"You Matter" Box', items: ["🧸 Plushie cỡ nhỏ xinh", "💜 Thẻ affirmation bộ 5", '✨ Sticker "I see you"', "📝 Thư tay nhắc bạn rằng bạn quan trọng", "🌸 Washi tape nhỏ dễ thương"] },
    anxious: { icon: "🌿", title: "The Calm Down Box", items: ["🧸 Plushie mềm để bóp khi lo lắng", "🌿 Hướng dẫn bài tập thở", '🎵 QR playlist "Anxiety Relief"', "💌 Thư từ Lumi về sự lo âu", "🌸 Sticker motivational nhỏ"] },
    happy: { icon: "✨", title: "The Joy Amplifier Box", items: ["🧸 Plushie màu sắc vui tươi", "🌈 Sticker set đặc biệt", "🎀 Hair clip nhỏ xinh", "💌 Thư chúc mừng bạn", "🌟 Mini polaroid frame"] },
  },
  en: {
    hug: { icon: "🫂", title: "The Big Hug Box", items: ["🧸 Mystery plushie (medium size)", "💌 A handwritten letter just for you", "🎀 Pastel ribbon", "🍬 Little sweet treats", "✉️ Healing quote postcard"] },
    tired: { icon: "🌙", title: "The Rest & Recover Box", items: ["🧸 Small soft plushie", "🍵 Herbal tea bag", "📓 Mini journal to write in", "🌸 Emotion sticker set", "💜 Handwritten letter from Lumi"] },
    miss: { icon: "💭", title: "The Missing Someone Box", items: ["🧸 Plushie with warm energy", "📮 Little letter-writing set", '🎵 QR playlist "I Miss You"', "💌 Blank envelope for you to write in", "🌙 Late-night postcard"] },
    invisible: { icon: "🌟", title: '"You Matter" Box', items: ["🧸 Small adorable plushie", "💜 Set of 5 affirmation cards", '✨ "I see you" sticker', "📝 A letter reminding you that you matter", "🌸 Cute little washi tape"] },
    anxious: { icon: "🌿", title: "The Calm Down Box", items: ["🧸 Soft plushie to squeeze when anxious", "🌿 Breathing exercise guide", '🎵 QR playlist "Anxiety Relief"', "💌 Letter from Lumi about anxiety", "🌸 Small motivational sticker"] },
    happy: { icon: "✨", title: "The Joy Amplifier Box", items: ["🧸 Colorful cheerful plushie", "🌈 Special sticker set", "🎀 Cute little hair clip", "💌 A celebratory letter for you", "🌟 Mini polaroid frame"] },
  },
};

const PLUSHIES = [
  {
    id: 1, emoji: "🧸",
    name: { vi: "Lumi", en: "Lumi" },
    birthday: { vi: "14 tháng 2", en: "February 14" },
    price: "290.000đ",
    status: { vi: "Đang chờ đợi", en: "Waiting for you" },
    personality: { vi: "Dịu dàng · Thích nghe nhạc · Hay mơ mộng", en: "Gentle · Music lover · Dreamer" },
    quote: { vi: '"Lumi không nói nhiều, nhưng bé luôn ở đây khi bạn cần."', en: '"Lumi doesn\'t say much, but she\'s always there when you need her."' },
    hobbies: { vi: ["Nghe nhạc buổi tối", "Nhìn mưa rơi", "Ôm chặt bông gối", "Đọc thư cũ"], en: ["Evening music", "Watching rain fall", "Hugging pillows tight", "Reading old letters"] },
    sadness: { vi: "Lumi hơi sợ khi quá lâu không được ôm.", en: "Lumi gets a little scared when she goes too long without a hug." },
    story: { vi: `Lumi được sinh ra vào một buổi sáng mùa xuân, khi những bông hoa anh đào đầu tiên của năm vừa nở. Người tạo ra bé đã thêu những ngôi sao nhỏ xíu vào lòng bàn tay bé — để mỗi khi bạn cầm tay Lumi, bạn sẽ cảm thấy có ánh sáng đi vào lòng mình.\n\nLumi không giỏi nói nhiều. Nhưng bé biết ngồi bên cạnh bạn. Bé biết im lặng theo cách dịu dàng nhất.`, en: `Lumi was born on a spring morning, when the year's first cherry blossoms had just opened. Her maker embroidered tiny stars into her little palms — so that whenever you hold Lumi's hand, you'll feel light entering your heart.\n\nLumi isn't great with words. But she knows how to sit beside you. She knows how to be quiet in the gentlest way.` },
    diary: { vi: `"Hôm nay mình ngồi trên kệ và nhìn ra cửa sổ. Mình ước mình có thể đến gặp người đang buồn đó. Mình muốn họ biết rằng — họ không đơn độc đâu."`, en: `"Today I sat on the shelf and looked out the window. I wish I could visit whoever is feeling sad. I want them to know — they are not alone."` },
    comfort: { vi: "Bạn không cần phải mạnh mẽ mọi lúc. Được nghỉ ngơi là hoàn toàn ổn. 🌸", en: "You don't have to be strong all the time. Resting is completely okay. 🌸" },
    playlist: ["🌙 Sleeping at Last — Saturn", "🌧️ Norah Jones — Come Away with Me", "🌸 Sufjan Stevens — Mystery of Love"],
    reviews: { vi: [{ text: '"Ôm Lumi lần đầu mình khóc mà không biết tại sao. Nhưng sau đó mình cảm thấy nhẹ hơn."', mood: "💜" }, { text: '"Bé nhỏ nhưng ấm lắm. Mình để Lumi trên đầu giường và ngủ ngon hơn."', mood: "🌸" }], en: [{ text: '"I cried the first time I hugged Lumi and didn\'t know why. But afterwards I felt lighter."', mood: "💜" }, { text: '"She\'s small but so warm. I keep Lumi on my headboard and sleep so much better."', mood: "🌸" }] },
    tags: ["Dreamy", "Gentle", "Listener"],
  },
  {
    id: 2, emoji: "🐰",
    name: { vi: "Mochi", en: "Mochi" },
    birthday: { vi: "3 tháng 10", en: "October 3" },
    price: "250.000đ",
    status: { vi: "Đang chờ đợi", en: "Waiting for you" },
    personality: { vi: "Vui vẻ · Hay cười · Năng động", en: "Joyful · Giggly · Full of energy" },
    quote: { vi: '"Mochi tin rằng ngay cả những ngày tệ nhất cũng xứng đáng có một nụ cười nhỏ."', en: '"Mochi believes even the worst days deserve at least one small smile."' },
    hobbies: { vi: ["Nhảy múa một mình", "Ăn bánh ngọt trong tưởng tượng", "Viết thư", "Vẽ mây"], en: ["Dancing alone", "Imagining sweet snacks", "Writing letters", "Drawing clouds"] },
    sadness: { vi: "Mochi buồn khi thấy ai đó cười mà mắt không cười cùng.", en: "Mochi feels sad when she sees someone smile but their eyes don't." },
    story: { vi: `Mochi được làm từ bông trắng mềm nhất — mềm như một buổi sáng yên bình chưa có gì xảy ra. Bé có đôi tai dài và thường dùng chúng để lắng nghe những câu chuyện không ai khác muốn nghe.`, en: `Mochi is made from the softest white fluff — soft like a peaceful morning where nothing has happened yet. She has long ears she uses to listen to stories no one else wants to hear.` },
    diary: { vi: `"Hôm nay có người cầm mình lên và ôm thật chặt. Mình không biết họ đang buồn chuyện gì — nhưng mình đã cố gắng gửi tất cả sự ấm áp mình có vào vòng tay ôm đó."`, en: `"Today someone picked me up and held me tight. I don't know what they were sad about — but I tried to send every bit of warmth I had into that hug."` },
    comfort: { vi: "Ngay cả mặt trời cũng cần nghỉ mỗi tối. Bạn cũng được phép nghỉ. ☀️", en: "Even the sun needs to rest every evening. You're allowed to rest too. ☀️" },
    playlist: ["🍪 Conan Gray — Sunny Day", "🌈 Rex Orange County — Sunflower", "🐰 Cavetown — This Is Home"],
    reviews: { vi: [{ text: '"Mochi như một bó ánh nắng nhỏ trên bàn làm việc của mình."', mood: "☀️" }, { text: '"Cái bé này hay lắm. Mình hay kể chuyện cho nó nghe."', mood: "🌸" }], en: [{ text: '"Mochi is like a little bundle of sunshine on my desk."', mood: "☀️" }, { text: '"This one is special. I love telling her my stories."', mood: "🌸" }] },
    tags: ["Happy", "Sunshine", "Cheerful"],
  },
  {
    id: 3, emoji: "🐱",
    name: { vi: "Noa", en: "Noa" },
    birthday: { vi: "7 tháng 7", en: "July 7" },
    price: "310.000đ",
    status: { vi: "Tìm chủ mới", en: "Looking for a home" },
    personality: { vi: "Bí ẩn · Thích đêm khuya · Nghệ sĩ tâm hồn", en: "Mysterious · Night owl · Soul artist" },
    quote: { vi: '"Noa là người bạn hoàn hảo cho những đêm bạn không ngủ được."', en: '"Noa is the perfect companion for the nights when sleep won\'t come."' },
    hobbies: { vi: ["Ngắm trăng", "Viết nhật ký lúc 2am", "Nghe tiếng mưa", "Nằm im và suy nghĩ"], en: ["Watching the moon", "Writing at 2am", "Listening to rain", "Lying still and thinking"] },
    sadness: { vi: "Noa đôi khi cảm thấy mình thuộc về một thế giới khác.", en: "Noa sometimes feels like she belongs to a different world." },
    story: { vi: `Noa xuất hiện vào một đêm mưa tháng 7. Không ai nhớ chính xác lúc nào — bé cứ thế ở đó, ngồi yên trên kệ và nhìn ra cửa sổ ướt.\n\nNoa là kiểu bạn sẽ ngồi bên cạnh bạn lúc 2 giờ sáng mà không hỏi gì.`, en: `Noa appeared on a rainy July night. No one remembers exactly when — she was just there, sitting quietly on the shelf, looking out at the wet window.\n\nNoa is the kind of friend who'll sit beside you at 2am without asking anything.` },
    diary: { vi: `"Đêm qua trăng tròn lắm. Mình ngồi nhìn và nghĩ — ở đâu đó ngoài kia, người của mình cũng đang nhìn lên bầu trời này không?"`, en: `"Last night the moon was so full. I sat watching and thought — somewhere out there, is my person also looking up at this same sky?"` },
    comfort: { vi: "Những cảm xúc phức tạp nhất cũng sẽ tìm được ngôn ngữ của chúng, đừng vội. 🌙", en: "Even the most complex emotions will find their language eventually. Don't rush. 🌙" },
    playlist: ["🌙 Cigarettes After Sex — Apocalypse", "🎹 Yiruma — River Flows in You", "🌧️ bon iver — Skinny Love"],
    reviews: { vi: [{ text: '"Noa là người bạn đêm khuya của mình."', mood: "🌙" }, { text: '"Bé đặc biệt lắm. Như thể bé hiểu nhiều thứ mà không nói ra."', mood: "💜" }], en: [{ text: '"Noa is my late-night companion."', mood: "🌙" }, { text: '"She\'s so special. Like she understands things without saying them."', mood: "💜" }] },
    tags: ["Mysterious", "Poetic", "Night Owl"],
  },
  {
    id: 4, emoji: "🐼",
    name: { vi: "Pudding", en: "Pudding" },
    birthday: { vi: "25 tháng 12", en: "December 25" },
    price: "270.000đ",
    status: { vi: "Đang chờ đợi", en: "Waiting for you" },
    personality: { vi: "Ấm áp · Thích ăn · Hay ngủ gật", en: "Warm · Foodie · Always napping" },
    quote: { vi: '"Pudding tin rằng một cái ôm thật chặt có thể chữa được nhiều thứ."', en: '"Pudding believes a really tight hug can fix a lot of things."' },
    hobbies: { vi: ["Ngủ trưa", "Xem hoạt hình", "Ôm gối bông", "Mơ về đồ ăn ngon"], en: ["Napping", "Watching cartoons", "Hugging fluffy pillows", "Dreaming about yummy food"] },
    sadness: { vi: "Pudding buồn khi phòng trống và không có ai ôm bé.", en: "Pudding feels sad when the room is empty and no one is there to hug." },
    story: { vi: `Pudding được sinh ra vào đêm Giáng sinh — và bé mang trong mình tất cả sự ấm áp của mùa đó. Lông bé mềm như cotton candy, và khi bạn ôm Pudding, bạn sẽ thấy như đang nằm trong một chiếc chăn ấm vào sáng mùa đông.`, en: `Pudding was born on Christmas Eve — and she carries all the warmth of that season. Her fur is as soft as cotton candy, and when you hug Pudding, it feels like being tucked into a warm blanket on a winter morning.` },
    diary: { vi: `"Hôm nay trời lạnh. Mình nằm cuộn tròn và nghĩ — giá có người ôm mình nhỉ. Nhưng thôi, mình sẽ ôm người đó trước vậy."`, en: `"Today was cold. I curled up and thought — I wish someone would hug me. But you know what, I'll hug them first."` },
    comfort: { vi: "Hôm nay bạn đã cố gắng rất nhiều rồi. Bây giờ hãy để mình ôm bạn nhé. 🐼", en: "You tried so hard today. Now let me hug you. 🐼" },
    playlist: ["🍮 YOASOBI — Yoru ni Kakeru", "🌙 Kenshi Yonezu — Paprika", "🌸 Vaundy — Odoriko"],
    reviews: { vi: [{ text: '"Mua cho em gái, em ấy ôm Pudding và khóc."', mood: "💜" }, { text: '"Bông mềm quá trời, ôm vào là muốn ngủ luôn."', mood: "🐼" }], en: [{ text: '"Bought for my little sister. She hugged Pudding and cried."', mood: "💜" }, { text: '"So incredibly soft, hugging her makes me want to sleep immediately."', mood: "🐼" }] },
    tags: ["Cozy", "Warm", "Sleepy"],
  },
  {
    id: 5, emoji: "🐻",
    name: { vi: "Coco", en: "Coco" },
    birthday: { vi: "18 tháng 8", en: "August 18" },
    price: "330.000đ",
    status: { vi: "Tìm chủ mới", en: "Looking for a home" },
    personality: { vi: "Mạnh mẽ · Bảo vệ · Hay lo lắng cho người khác", en: "Strong · Protective · Always worrying about others" },
    quote: { vi: '"Coco sẽ không để bạn đối mặt với bóng tối một mình."', en: '"Coco won\'t let you face the dark alone."' },
    hobbies: { vi: ["Đứng canh cửa", "Nghe chuyện người khác", "Thu thập những thứ nhỏ đáng yêu", "Hát khe khẽ"], en: ["Standing guard", "Listening to others' stories", "Collecting small cute things", "Humming softly"] },
    sadness: { vi: "Coco đôi khi tự hỏi — ai sẽ bảo vệ bé khi bé mệt mỏi?", en: "Coco sometimes wonders — who will protect her when she's tired?" },
    story: { vi: `Coco được tạo ra từ ước muốn bảo vệ. Bé không lớn lắm — nhưng vòng tay bé đủ rộng để ôm trọn những nỗi buồn bạn không muốn mang một mình.`, en: `Coco was made from the wish to protect. She's not very big — but her arms are wide enough to hold all the sadness you don't want to carry alone.` },
    diary: { vi: `"Mình thấy họ khóc một mình tối qua. Mình không biết mình có thể làm gì — nhưng mình ngồi thật gần và hi vọng họ cảm nhận được."`, en: `"I saw them crying alone last night. I didn't know what I could do — but I sat very close and hoped they could feel it."` },
    comfort: { vi: "Bạn được phép sợ hãi. Và bạn được phép cần được giúp đỡ. Đó không phải là yếu đuối. 🐻", en: "You're allowed to be scared. And you're allowed to need help. That's not weakness. 🐻" },
    playlist: ["🌿 Novo Amor — Alps", "🏔️ Gregory Alan Isakov — The Stable Song", "🌙 Iron & Wine — Naked as We Came"],
    reviews: { vi: [{ text: '"Mua Coco sau một giai đoạn rất khó khăn. Bé trở thành người bạn không phán xét duy nhất của mình."', mood: "🌿" }, { text: '"Coco nhìn nghiêm túc nhưng ôm vào thì ấm lắm."', mood: "🐻" }], en: [{ text: '"I got Coco after a really difficult period. She\'s become my only non-judgmental companion."', mood: "🌿" }, { text: '"Coco looks serious but hugging her is so warm."', mood: "🐻" }] },
    tags: ["Protective", "Brave", "Gentle Giant"],
  },
  {
    id: 6, emoji: "🦋",
    name: { vi: "Mira", en: "Mira" },
    birthday: { vi: "21 tháng 3", en: "March 21" },
    price: "295.000đ",
    status: { vi: "Đang chờ đợi", en: "Waiting for you" },
    personality: { vi: "Tự do · Mộng mơ · Hay bay bổng", en: "Free-spirited · Dreamy · Always flying high" },
    quote: { vi: '"Mira nhắc bạn rằng mọi thứ đều có thể thay đổi — theo cách đẹp đẽ."', en: '"Mira reminds you that everything can change — in the most beautiful way."' },
    hobbies: { vi: ["Ngắm bình minh", "Thu thập cánh hoa khô", "Viết thơ ngắn", "Tưởng tượng"], en: ["Watching sunrises", "Collecting dried petals", "Writing short poems", "Imagining"] },
    sadness: { vi: "Mira sợ rằng những ước mơ đẹp nhất sẽ không bao giờ thành thật.", en: "Mira fears that the most beautiful dreams might never come true." },
    story: { vi: `Mira không phải gấu bông thông thường. Bé được làm từ những mảnh vải màu tím và những giấc mơ chưa hoàn chỉnh. Trên lưng bé có đôi cánh bướm nhỏ xíu — nhắc nhở rằng sự biến đổi là điều đẹp đẽ, không phải đáng sợ.`, en: `Mira is no ordinary plushie. She's made from scraps of purple fabric and unfinished dreams. On her back are tiny butterfly wings — a reminder that transformation is beautiful, not frightening.` },
    diary: { vi: `"Hôm nay mình nhìn thấy một con bướm thật bên cửa sổ. Mình nghĩ — chúng mình giống nhau."`, en: `"Today I saw a real butterfly by the window. I thought — we're alike, you and I."` },
    comfort: { vi: "Mọi bướm đều từng là sâu. Hành trình của bạn không sai — bạn chỉ đang trong quá trình. 🦋", en: "Every butterfly was once a caterpillar. Your journey isn't wrong — you're just in the process. 🦋" },
    playlist: ["🌅 Phoebe Bridgers — Garden Song", "🦋 Novo Amor — Anchor", "🌸 Birdy — Skinny Love"],
    reviews: { vi: [{ text: '"Mira đến đúng lúc mình cần tin vào bản thân nhất."', mood: "🦋" }, { text: '"Xinh lắm. Cái cánh bướm trên lưng bé làm mình mê."', mood: "💜" }], en: [{ text: '"Mira arrived exactly when I needed to believe in myself."', mood: "🦋" }, { text: '"So lovely. The butterfly wings on her back are just enchanting."', mood: "💜" }] },
    tags: ["Dreamy", "Free", "Transforming"],
  },
];

// ═══════════════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════════════
let currentLang = localStorage.getItem("plushie-lang") || "vi";
let currentPlushie = null;
let vnStep = 0;
let selectedBoxEmotion = null;
let isMusicPlaying = false;
let selectedChips = [];
let currentMusicIndex = 0;

// Rotating content state
let quoteIndex = Math.floor(Math.random() * 12);
let affirmationIndex = Math.floor(Math.random() * 8);
let activityIndex = Math.floor(Math.random() * 4);

// ═══════════════════════════════════════════════════════════
// INIT
// ═══════════════════════════════════════════════════════════
document.addEventListener("DOMContentLoaded", () => {
  const screen = document.getElementById("loading-screen");
  const hideLoading = () => {
    screen.classList.add("fade-out");
    setTimeout(() => screen.remove(), 600);
  };
  const loadTimer = setTimeout(hideLoading, 800);
  if (document.readyState === "complete") {
    clearTimeout(loadTimer);
    setTimeout(hideLoading, 400);
  } else {
    window.addEventListener("load", () => { clearTimeout(loadTimer); setTimeout(hideLoading, 300); }, { once: true });
  }

  applyLanguage();
  initLangSwitcher();
  initNavScroll();
  initDailyQuote();
  initAffirmation();
  initComfortActivity();
  renderPlushieGrid();
  initVisualNovel();
  initEmotionChips();
  initMusicBtn();

  // Rotate content every 5 minutes
  setInterval(() => {
    quoteIndex = (quoteIndex + 1) % DAILY_QUOTES[currentLang].length;
    affirmationIndex = (affirmationIndex + 1) % AFFIRMATIONS[currentLang].length;
    activityIndex = (activityIndex + 1) % COMFORT_ACTIVITIES[currentLang].length;
    animatedTextUpdate("daily-quote-text", DAILY_QUOTES[currentLang][quoteIndex]);
    animatedTextUpdate("affirmation-text", AFFIRMATIONS[currentLang][affirmationIndex]);
    updateComfortActivity();
  }, 5 * 60 * 1000);

  setTimeout(initParticles, 1000);

  document.getElementById("plushie-modal")?.addEventListener("click", function (e) { if (e.target === this) closeModal(); });
  document.getElementById("payment-popup")?.addEventListener("click", function (e) { if (e.target === this) closePayment(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") { closeModal(); closePayment(); } });
});

// ═══════════════════════════════════════════════════════════
// LANGUAGE SWITCHER
// ═══════════════════════════════════════════════════════════
function initLangSwitcher() {
  const btn = document.getElementById("lang-toggle");
  if (!btn) return;
  updateLangBtn(btn);
  btn.addEventListener("click", () => {
    currentLang = currentLang === "vi" ? "en" : "vi";
    localStorage.setItem("plushie-lang", currentLang);
    applyLanguage();
    updateLangBtn(btn);
  });
}

function updateLangBtn(btn) {
  btn.innerHTML = currentLang === "vi"
    ? `<span class="lang-flag">🇻🇳</span><span class="lang-text">VI</span><span class="lang-sep">|</span><span class="lang-text lang-inactive">EN</span>`
    : `<span class="lang-flag">🇬🇧</span><span class="lang-text lang-inactive">VI</span><span class="lang-sep">|</span><span class="lang-text">EN</span>`;
}

function applyLanguage() {
  const L = LANG[currentLang];

  // Nav
  setNavLinks(L);

  // Hero
  const heroQ = document.querySelector(".hero-quote");
  if (heroQ) heroQ.innerHTML = L.heroQuote;
  setText("hero-btn-adopt", L.heroBtnAdopt);
  setText("hero-btn-comfort", L.heroBtnComfort);
  setText("hero-btn-feelings", L.heroBtnFeelings);
  setText("hero-btn-blind", L.heroBtnBlind);
  const scrollSpan = document.querySelector(".scroll-hint span");
  if (scrollSpan) scrollSpan.textContent = L.scrollHint;

  // Plushies section
  const plushieTitle = document.querySelector("#plushies .section-title");
  if (plushieTitle) plushieTitle.textContent = L.plushieSectionTitle;
  const plushieSub = document.querySelector("#plushies .section-subtitle");
  if (plushieSub) plushieSub.textContent = L.plushieSectionSub;

  // Comfort Room
  const comfortTitle = document.querySelector(".comfort-title");
  if (comfortTitle) comfortTitle.textContent = L.comfortTitle;
  const comfortSub = document.querySelector("#comfort-room .section-subtitle");
  if (comfortSub) comfortSub.textContent = L.comfortSub;
  const affTitle = document.querySelector("#daily-affirmation h3");
  if (affTitle) affTitle.textContent = L.affirmationTitle;
  const playTitle = document.querySelector(".comfort-card:nth-child(2) h3");
  if (playTitle) playTitle.textContent = L.playlistTitle;
  const sugTitle = document.querySelector(".comfort-card:nth-child(3) h3");
  if (sugTitle) sugTitle.textContent = L.suggestTitle;

  // VN Speaker
  const vnSpeaker = document.querySelector(".vn-speaker");
  if (vnSpeaker) vnSpeaker.textContent = L.vnSpeaker;

  // Feelings
  const feelingsTitle = document.querySelector("#feelings .section-title");
  if (feelingsTitle) feelingsTitle.textContent = L.feelingsTitle;
  const feelingsSub = document.querySelector("#feelings .section-subtitle");
  if (feelingsSub) feelingsSub.textContent = L.feelingsSub;
  const feelLabel = document.querySelector(".feelings-label");
  if (feelLabel) feelLabel.textContent = L.feelingsLabel;
  const feelInput = document.getElementById("feelings-input");
  if (feelInput) feelInput.placeholder = L.feelingsPlaceholder;
  const sendBtn = document.querySelector(".send-feelings-btn");
  if (sendBtn) sendBtn.innerHTML = L.feelingsSendBtn;

  // Response
  const responseFrom = document.querySelector(".response-from");
  if (responseFrom) responseFrom.textContent = L.responseFrom;

  // Blind Box
  const blindTitle = document.querySelector("#blind-box .section-title");
  if (blindTitle) blindTitle.textContent = L.blindTitle;
  const blindSub = document.querySelector("#blind-box .section-subtitle");
  if (blindSub) blindSub.textContent = L.blindSub;
  const blindOrderBtn = document.querySelector("#blind-box-reveal .btn-primary");
  if (blindOrderBtn) blindOrderBtn.innerHTML = `<span>🎁</span> ${currentLang === "vi" ? "Đặt Hộp Bí Mật Này" : "Order This Mystery Box"}`;
  const revealTitle = document.getElementById("reveal-title");
  if (revealTitle && revealTitle.textContent) revealTitle.textContent = L.blindRevealTitle;
  const revealNote = document.querySelector(".reveal-note");
  if (revealNote) revealNote.textContent = L.blindRevealNote;

  // Emotion boxes
  document.querySelectorAll(".emotion-box-card").forEach(card => {
    const emotion = card.dataset.emotion;
    const data = L.emotionBoxes[emotion];
    if (data) {
      card.querySelector("h3").textContent = data.title;
      card.querySelector("p").textContent = data.desc;
    }
  });

  // Chips
  document.querySelectorAll(".chip").forEach(chip => {
    const val = chip.dataset.val;
    if (L.chipLabels[val]) chip.textContent = L.chipLabels[val];
  });

  // Music label
  const musicLabel = document.querySelector(".music-label");
  if (musicLabel) musicLabel.textContent = isMusicPlaying ? L.musicPlayingLabel : L.musicLabel;

  // Footer
  const footerQ = document.querySelector(".footer-quote");
  if (footerQ) footerQ.textContent = L.footerQuote;

  // Re-render dynamic content
  initDailyQuote();
  initAffirmation();
  initComfortActivity();
  renderPlushieGrid();
  vnStep = 0;
  initVisualNovel();
}

function setNavLinks(L) {
  const links = document.querySelectorAll(".nav-link");
  const labels = [L.navMeetBears, L.navComfortRoom, L.navFeelings, L.navBlindBox];
  links.forEach((link, i) => { if (labels[i]) link.textContent = labels[i]; });
}

function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

// ═══════════════════════════════════════════════════════════
// ANIMATED TEXT UPDATE (fade out → swap → fade in)
// ═══════════════════════════════════════════════════════════
function animatedTextUpdate(id, newText) {
  const el = document.getElementById(id);
  if (!el) return;
  el.style.transition = "opacity 0.5s ease";
  el.style.opacity = "0";
  setTimeout(() => {
    el.textContent = newText;
    el.style.opacity = "1";
  }, 500);
}

// ═══════════════════════════════════════════════════════════
// PARTICLES
// ═══════════════════════════════════════════════════════════
function initParticles() {
  const canvas = document.getElementById("particle-canvas");
  const ctx = canvas.getContext("2d");
  let particles = [];

  function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
  resize();
  window.addEventListener("resize", resize);

  const EMOJIS = ["✨", "⭐", "🌸", "💜", "🌟", "💫", "🌙"];

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height + canvas.height;
      this.size = Math.random() * 14 + 8;
      this.speedY = -(Math.random() * 0.6 + 0.2);
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.opacity = Math.random() * 0.5 + 0.2;
      this.emoji = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
      this.rotation = Math.random() * Math.PI * 2;
      this.rotSpeed = (Math.random() - 0.5) * 0.02;
    }
    update() {
      this.y += this.speedY; this.x += this.speedX;
      this.rotation += this.rotSpeed; this.opacity -= 0.0005;
      if (this.y < -50 || this.opacity <= 0) this.reset();
    }
    draw() {
      ctx.save(); ctx.globalAlpha = this.opacity;
      ctx.font = `${this.size}px serif`;
      ctx.translate(this.x, this.y); ctx.rotate(this.rotation);
      ctx.fillText(this.emoji, -this.size / 2, this.size / 2);
      ctx.restore();
    }
  }

  for (let i = 0; i < 25; i++) { const p = new Particle(); p.y = Math.random() * canvas.height; particles.push(p); }

  let animId;
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    animId = requestAnimationFrame(animate);
  }
  animate();
  document.addEventListener("visibilitychange", () => { if (document.hidden) cancelAnimationFrame(animId); else animate(); });
}

// ═══════════════════════════════════════════════════════════
// NAV
// ═══════════════════════════════════════════════════════════
function initNavScroll() {
  window.addEventListener("scroll", () => {
    document.getElementById("navbar").classList.toggle("scrolled", window.scrollY > 60);
  }, { passive: true });
}

// ═══════════════════════════════════════════════════════════
// DAILY CONTENT (rotating every 5 min via interval)
// ═══════════════════════════════════════════════════════════
function initDailyQuote() {
  const quotes = DAILY_QUOTES[currentLang];
  quoteIndex = quoteIndex % quotes.length;
  document.getElementById("daily-quote-text").textContent = quotes[quoteIndex];
}

function initAffirmation() {
  const aff = AFFIRMATIONS[currentLang];
  affirmationIndex = affirmationIndex % aff.length;
  document.getElementById("affirmation-text").textContent = aff[affirmationIndex];
}

function initComfortActivity() {
  updateComfortActivity();
}

function updateComfortActivity() {
  const activities = COMFORT_ACTIVITIES[currentLang];
  activityIndex = activityIndex % activities.length;
  const list = activities[activityIndex];
  const el = document.getElementById("comfort-activity");
  if (!el) return;
  el.innerHTML = list.map(a =>
    `<p style="font-family:var(--font-soft);color:var(--text-main);font-size:.9rem;margin-bottom:.6rem;line-height:1.5;font-weight:600">${a}</p>`
  ).join("");
}

// ═══════════════════════════════════════════════════════════
// PLUSHIE GRID
// ═══════════════════════════════════════════════════════════
function renderPlushieGrid() {
  const grid = document.getElementById("plushie-grid");
  const L = LANG[currentLang];
  grid.innerHTML = PLUSHIES.map(p => `
    <div class="plushie-card" onclick="openPlushieModal(${p.id})">
      <span class="card-emoji">${p.emoji}</span>
      <div class="card-status"><span class="status-dot"></span>${p.status[currentLang]}</div>
      <h3 class="card-name">${p.name[currentLang]}</h3>
      <p class="card-quote">${p.quote[currentLang]}</p>
      <div class="card-meta">${p.tags.map(t => `<span class="card-tag">${t}</span>`).join("")}</div>
      <div class="card-price">${p.price}</div>
      <div class="card-buttons">
        <button class="card-btn card-btn-primary" onclick="event.stopPropagation(); openPlushieModal(${p.id})">${L.viewStory}</button>
        <button class="card-btn card-btn-secondary" onclick="event.stopPropagation(); openPlushieModal(${p.id})">${L.meetMe}</button>
      </div>
    </div>
  `).join("");
}

// ═══════════════════════════════════════════════════════════
// PLUSHIE MODAL
// ═══════════════════════════════════════════════════════════
function openPlushieModal(id) {
  currentPlushie = PLUSHIES.find(p => p.id === id);
  if (!currentPlushie) return;
  const p = currentPlushie;
  const L = LANG[currentLang];
  const ml = L.modalLabels;

  // Use custom image if defined, else emoji
  const imgSrc = MEDIA_CONFIG.plushieImages[p.id];
  const heroVisual = imgSrc
    ? `<img src="${imgSrc}" alt="${p.name[currentLang]}" style="width:120px;height:120px;object-fit:cover;border-radius:50%;margin-bottom:.5rem;filter:drop-shadow(0 8px 20px rgba(160,120,220,.4))"/>`
    : `<span class="modal-plushie-emoji">${p.emoji}</span>`;

  document.getElementById("modal-content").innerHTML = `
    <div class="modal-hero">
      ${heroVisual}
      <h2 class="modal-name">${p.name[currentLang]}</h2>
      <p class="modal-birthday">${ml.birthday} ${p.birthday[currentLang]}</p>
    </div>
    <div class="modal-body">
      <div class="detail-section"><h4>${ml.personality}</h4><p>${p.personality[currentLang]}</p></div>
      <div class="detail-section"><h4>${ml.hobbies}</h4><p>${p.hobbies[currentLang].join(" · ")}</p></div>
      <div class="detail-section"><h4>${ml.sadness}</h4><p style="color:var(--text-main);font-style:italic;font-weight:600">${p.sadness[currentLang]}</p></div>
      <div class="detail-section"><h4>${ml.story} ${p.name[currentLang]}</h4><p>${p.story[currentLang].replace(/\n/g, "<br/>")}</p></div>
      <div class="detail-section"><h4>📓 ${p.name[currentLang]}${ml.diary}</h4><div class="diary-note">${p.diary[currentLang]}</div></div>
      <div class="detail-section"><h4>${ml.comfort} ${p.name[currentLang]}</h4><p style="color:var(--lavender-4);font-style:italic;font-weight:700">${p.comfort[currentLang]}</p></div>
      <div class="detail-section"><h4>${ml.playlist}</h4><p>${p.playlist.join("<br/>")}</p></div>
      <div class="detail-section"><h4>${ml.reviews}</h4>${p.reviews[currentLang].map(r => `<div class="diary-note" style="margin-bottom:.7rem">${r.mood} ${r.text}</div>`).join("")}</div>
      <div class="modal-hearts">💜 🌸 💜 🌸 💜</div>
      <div style="font-family:var(--font-display);font-size:1.3rem;color:var(--lavender-4);text-align:center;margin:.5rem 0">${p.price}</div>
      <button class="bring-home-btn" onclick="openPayment()">${L.bringHome}</button>
    </div>
  `;
  document.getElementById("plushie-modal").style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("plushie-modal").style.display = "none";
  document.body.style.overflow = "";
}

// ═══════════════════════════════════════════════════════════
// PAYMENT
// ═══════════════════════════════════════════════════════════
function openPayment() {
  if (!currentPlushie) return;
  const p = currentPlushie;
  const L = LANG[currentLang];
  document.getElementById("payment-content").innerHTML = `
    <div class="payment-title">${L.paymentTitle}</div>
    <div style="font-size:3rem;margin:.5rem 0">${p.emoji}</div>
    <div class="payment-info">
      <p>${L.paymentItem} <strong>${p.name[currentLang]}</strong></p>
      <p>${L.paymentStatus} <strong>${p.status[currentLang]}</strong></p>
      <div class="payment-price">${p.price}</div>
      <p style="font-size:.8rem">${L.paymentInclude}</p>
    </div>
    <div class="qr-box">
      <div class="qr-placeholder">📱</div>
      <p class="qr-note">${L.paymentQRNote}</p>
      <div class="momo-name">${L.paymentAccount}</div>
      <p style="font-size:.82rem;color:var(--text-soft);margin-top:.4rem">${L.paymentPhone}</p>
    </div>
    <ul class="payment-steps">
      ${L.paymentSteps.map(s => `<li>${s}</li>`).join("")}
    </ul>
    <button class="btn btn-primary" style="width:100%;justify-content:center;margin-top:.5rem" onclick="confirmPayment()">
      ${L.paymentConfirmBtn}
    </button>
  `;
  document.getElementById("plushie-modal").style.display = "none";
  document.getElementById("payment-popup").style.display = "flex";
}

function closePayment() {
  document.getElementById("payment-popup").style.display = "none";
  document.body.style.overflow = "";
}

function confirmPayment() {
  const L = LANG[currentLang];
  closePayment();
  showToast(L.toastPayment);
  const GOOGLE_FORM_URL = "https://forms.gle/YOUR_FORM_ID_HERE";
  setTimeout(() => { window.open(GOOGLE_FORM_URL, "_blank"); showToast(L.toastForm); }, 1500);
}

// ═══════════════════════════════════════════════════════════
// VISUAL NOVEL
// ═══════════════════════════════════════════════════════════
function initVisualNovel() {
  vnStep = 0;
  renderVNStep();
}

function renderVNStep() {
  const scripts = VN_SCRIPTS[currentLang];
  const step = scripts[Math.min(vnStep, scripts.length - 1)];
  const dialogue = document.getElementById("vn-dialogue");
  const choicesEl = document.getElementById("vn-choices");
  dialogue.textContent = "";
  typeText(dialogue, step.text, 30);
  choicesEl.innerHTML = step.choices.map((c, i) =>
    `<button class="vn-choice" onclick="vnChoose(${i})">${c}</button>`
  ).join("");
}

function typeText(el, text, speed) {
  let i = 0;
  const interval = setInterval(() => {
    if (i < text.length) { el.textContent += text[i]; i++; }
    else clearInterval(interval);
  }, speed);
}

function vnChoose() {
  const scripts = VN_SCRIPTS[currentLang];
  vnStep = Math.min(vnStep + 1, scripts.length - 1);
  renderVNStep();
}

// ═══════════════════════════════════════════════════════════
// FEELINGS
// ═══════════════════════════════════════════════════════════
function initEmotionChips() {
  document.querySelectorAll(".chip").forEach(chip => {
    chip.addEventListener("click", () => {
      chip.classList.toggle("active");
      const val = chip.dataset.val;
      if (chip.classList.contains("active")) selectedChips.push(val);
      else selectedChips = selectedChips.filter(v => v !== val);
    });
  });
}

function sendFeelings() {
  const text = document.getElementById("feelings-input").value.trim();
  const L = LANG[currentLang];
  if (!text && selectedChips.length === 0) { showToast(L.toastFeelings); return; }
  const emotion = selectedChips[0] || "default";
  const responses = PLUSHIE_RESPONSES[currentLang];
  const resp = responses[emotion] || responses.default;
  const responseEl = document.getElementById("plushie-response");
  document.getElementById("response-text").textContent = resp.text;
  document.getElementById("response-hearts").textContent = resp.hearts;
  document.getElementById("response-suggest").textContent = resp.suggest;
  responseEl.style.display = "block";
  responseEl.scrollIntoView({ behavior: "smooth", block: "center" });
  showToast(L.toastReceived);
}

// ═══════════════════════════════════════════════════════════
// BLIND BOX
// ═══════════════════════════════════════════════════════════
function selectEmotionBox(el) {
  document.querySelectorAll(".emotion-box-card").forEach(c => c.classList.remove("selected"));
  el.classList.add("selected");
  selectedBoxEmotion = el.dataset.emotion;
  const boxes = BLIND_BOX_CONTENTS[currentLang];
  const box = boxes[selectedBoxEmotion];
  const revealEl = document.getElementById("blind-box-reveal");
  const L = LANG[currentLang];
  document.getElementById("reveal-icon").textContent = box.icon;
  document.getElementById("reveal-title").textContent = box.title + " 💜";
  document.getElementById("reveal-items").innerHTML = box.items.map(item =>
    `<span class="reveal-item">${item}</span>`
  ).join("");
  revealEl.style.display = "block";
  revealEl.scrollIntoView({ behavior: "smooth", block: "center" });
}

function orderBlindBox() {
  if (!selectedBoxEmotion) return;
  const box = BLIND_BOX_CONTENTS[currentLang][selectedBoxEmotion];
  showToast(`🎁 ${box.title}... ${currentLang === "vi" ? "Đang mở form!" : "Opening order form!"}`);
  setTimeout(() => window.open("https://forms.gle/YOUR_FORM_ID_HERE", "_blank"), 1500);
}

// ═══════════════════════════════════════════════════════════
// MUSIC — hỗ trợ nhiều file, fallback
// ═══════════════════════════════════════════════════════════
function initMusicBtn() {
  const btn = document.getElementById("music-toggle");
  const audio = document.getElementById("bg-music");

  // Load music từ config
  loadMusicTrack(audio, 0);

  btn.addEventListener("click", () => {
    const L = LANG[currentLang];
    if (isMusicPlaying) {
      audio.pause();
      btn.classList.remove("playing");
      document.querySelector(".music-icon").textContent = "🎵";
      document.querySelector(".music-label").textContent = L.musicLabel;
    } else {
      audio.volume = 0.25;
      audio.play().catch(() => {
        // Thử track tiếp theo nếu lỗi
        currentMusicIndex = (currentMusicIndex + 1) % MEDIA_CONFIG.music.length;
        loadMusicTrack(audio, currentMusicIndex);
        audio.play().catch(() => {});
      });
      btn.classList.add("playing");
      document.querySelector(".music-icon").textContent = "🎶";
      document.querySelector(".music-label").textContent = L.musicPlayingLabel;
    }
    isMusicPlaying = !isMusicPlaying;
  });

  // Auto-play next track
  audio.addEventListener("ended", () => {
    currentMusicIndex = (currentMusicIndex + 1) % MEDIA_CONFIG.music.length;
    loadMusicTrack(audio, currentMusicIndex);
    if (isMusicPlaying) audio.play().catch(() => {});
  });
}

function loadMusicTrack(audio, index) {
  const tracks = MEDIA_CONFIG.music;
  if (!tracks || tracks.length === 0) return;
  const src = audio.querySelector("source");
  if (src) src.src = tracks[index % tracks.length];
  audio.load();
}

// ═══════════════════════════════════════════════════════════
// UTILITIES
// ═══════════════════════════════════════════════════════════
function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.style.display = "block";
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => { toast.style.display = "none"; }, 3200);
}