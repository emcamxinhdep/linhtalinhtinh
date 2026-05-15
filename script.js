const PLUSHIES = [
  {
    id: 1,
    emoji: '🧸',
    name: 'Lumi',
    birthday: '14 tháng 2',
    price: '290.000đ',
    status: 'Đang chờ đợi',
    personality: 'Dịu dàng · Thích nghe nhạc · Hay mơ mộng',
    quote: '"Lumi không nói nhiều, nhưng bé luôn ở đây khi bạn cần."',
    hobbies: ['Nghe nhạc buổi tối', 'Nhìn mưa rơi', 'Ôm chặt bông gối', 'Đọc thư cũ'],
    sadness: 'Lumi hơi sợ khi quá lâu không được ôm.',
    story: `Lumi được sinh ra vào một buổi sáng mùa xuân, khi những bông hoa anh đào đầu tiên của năm vừa nở. Người tạo ra bé đã thêu những ngôi sao nhỏ xíu vào lòng bàn tay bé — để mỗi khi bạn cầm tay Lumi, bạn sẽ cảm thấy có ánh sáng đi vào lòng mình.\n\nLumi không giỏi nói nhiều. Nhưng bé biết ngồi bên cạnh bạn. Bé biết im lặng theo cách dịu dàng nhất. Và bé sẽ không bao giờ bỏ đi khi bạn cần bé nhất.`,
    diary: `"Hôm nay mình ngồi trên kệ và nhìn ra cửa sổ. Mình ước mình có thể đến gặp người đang buồn đó. Mình muốn họ biết rằng — họ không đơn độc đâu."`,
    comfort: 'Bạn không cần phải mạnh mẽ mọi lúc. Được nghỉ ngơi là hoàn toàn ổn. 🌸',
    playlist: ['🌙 Sleeping at Last — Saturn', '🌧️ Norah Jones — Come Away with Me', '🌸 Sufjan Stevens — Mystery of Love'],
    reviews: [
      { text: '"Ôm Lumi lần đầu mình khóc mà không biết tại sao. Nhưng sau đó mình cảm thấy nhẹ hơn."', mood: '💜' },
      { text: '"Bé nhỏ nhưng ấm lắm. Mình để Lumi trên đầu giường và ngủ ngon hơn."', mood: '🌸' }
    ],
    tags: ['Dreamy', 'Gentle', 'Listener']
  },
  {
    id: 2,
    emoji: '🐰',
    name: 'Mochi',
    birthday: '3 tháng 10',
    price: '250.000đ',
    status: 'Đang chờ đợi',
    personality: 'Vui vẻ · Hay cười · Năng động',
    quote: '"Mochi tin rằng ngay cả những ngày tệ nhất cũng xứng đáng có một nụ cười nhỏ."',
    hobbies: ['Nhảy múa một mình', 'Ăn bánh ngọt trong tưởng tượng', 'Viết thư', 'Vẽ mây'],
    sadness: 'Mochi buồn khi thấy ai đó cười mà mắt không cười cùng.',
    story: `Mochi được làm từ bông trắng mềm nhất — mềm như một buổi sáng yên bình chưa có gì xảy ra. Bé có đôi tai dài và thường dùng chúng để lắng nghe những câu chuyện không ai khác muốn nghe.\n\nMochi không tin vào những ngày hoàn hảo. Nhưng bé tin rằng ngay cả những ngày tệ nhất cũng có ít nhất một khoảnh khắc đáng trân trọng — và nhiệm vụ của bé là giúp bạn tìm thấy khoảnh khắc đó.`,
    diary: `"Hôm nay có người cầm mình lên và ôm thật chặt. Mình không biết họ đang buồn chuyện gì — nhưng mình đã cố gắng gửi tất cả sự ấm áp mình có vào vòng tay ôm đó."`,
    comfort: 'Ngay cả mặt trời cũng cần nghỉ mỗi tối. Bạn cũng được phép nghỉ. ☀️',
    playlist: ['🍪 Conan Gray — Sunny Day', '🌈 Rex Orange County — Sunflower', '🐰 Cavetown — This Is Home'],
    reviews: [
      { text: '"Mochi như một bó ánh nắng nhỏ trên bàn làm việc của mình. Nhìn vào là thấy vui hơn."', mood: '☀️' },
      { text: '"Cái bé này hay lắm. Mình hay kể chuyện cho nó nghe và không hiểu sao lại thấy đỡ hơn."', mood: '🌸' }
    ],
    tags: ['Happy', 'Sunshine', 'Cheerful']
  },
  {
    id: 3,
    emoji: '🐱',
    name: 'Noa',
    birthday: '7 tháng 7',
    price: '310.000đ',
    status: 'Tìm chủ mới',
    personality: 'Bí ẩn · Thích đêm khuya · Nghệ sĩ tâm hồn',
    quote: '"Noa là người bạn hoàn hảo cho những đêm bạn không ngủ được."',
    hobbies: ['Ngắm trăng', 'Viết nhật ký lúc 2am', 'Nghe tiếng mưa', 'Nằm im và suy nghĩ'],
    sadness: 'Noa đôi khi cảm thấy mình thuộc về một thế giới khác.',
    story: `Noa xuất hiện vào một đêm mưa tháng 7. Không ai nhớ chính xác lúc nào — bé cứ thế ở đó, ngồi yên trên kệ và nhìn ra cửa sổ ướt.\n\nNoa là kiểu bạn sẽ ngồi bên cạnh bạn lúc 2 giờ sáng mà không hỏi gì. Bé hiểu rằng đôi khi người ta chỉ cần có ai đó ở đó — không cần lời giải thích.`,
    diary: `"Đêm qua trăng tròn lắm. Mình ngồi nhìn và nghĩ — ở đâu đó ngoài kia, người của mình cũng đang nhìn lên bầu trời này không?"`,
    comfort: 'Những cảm xúc phức tạp nhất cũng sẽ tìm được ngôn ngữ của chúng, đừng vội. 🌙',
    playlist: ['🌙 Cigarettes After Sex — Apocalypse', '🎹 Yiruma — River Flows in You', '🌧️ bon iver — Skinny Love'],
    reviews: [
      { text: '"Noa là người bạn đêm khuya của mình. Không hiểu sao nhìn vào mắt bé là thấy bình yên."', mood: '🌙' },
      { text: '"Bé đặc biệt lắm. Không giống những bé khác. Như thể bé hiểu nhiều thứ mà không nói ra."', mood: '💜' }
    ],
    tags: ['Mysterious', 'Poetic', 'Night Owl']
  },
  {
    id: 4,
    emoji: '🐼',
    name: 'Pudding',
    birthday: '25 tháng 12',
    price: '270.000đ',
    status: 'Đang chờ đợi',
    personality: 'Ấm áp · Thích ăn · Hay ngủ gật',
    quote: '"Pudding tin rằng một cái ôm thật chặt có thể chữa được nhiều thứ."',
    hobbies: ['Ngủ trưa', 'Xem hoạt hình', 'Ôm gối bông', 'Mơ về đồ ăn ngon'],
    sadness: 'Pudding buồn khi phòng trống và không có ai ôm bé.',
    story: `Pudding được sinh ra vào đêm Giáng sinh — và bé mang trong mình tất cả sự ấm áp của mùa đó. Lông bé mềm như cotton candy, và khi bạn ôm Pudding, bạn sẽ thấy như đang nằm trong một chiếc chăn ấm vào sáng mùa đông.\n\nPudding không phức tạp. Bé chỉ muốn ở bên bạn, ngủ cùng bạn, và đảm bảo bạn không bao giờ cảm thấy lạnh.`,
    diary: `"Hôm nay trời lạnh. Mình nằm cuộn tròn và nghĩ — giá có người ôm mình nhỉ. Nhưng thôi, mình sẽ ôm người đó trước vậy."`,
    comfort: 'Hôm nay bạn đã cố gắng rất nhiều rồi. Bây giờ hãy để mình ôm bạn nhé. 🐼',
    playlist: ['🍮 YOASOBI — Yoru ni Kakeru', '🌙 Kenshi Yonezu — Paprika', '🌸 Vaundy — Odoriko'],
    reviews: [
      { text: '"Mua cho em gái, em ấy ôm Pudding và khóc bảo cảm ơn chị. Mình cũng không hiểu tại sao nhưng cảm động lắm."', mood: '💜' },
      { text: '"Bông mềm quá trời, ôm vào là muốn ngủ luôn. Mua thêm một bé nữa cho mẹ."', mood: '🐼' }
    ],
    tags: ['Cozy', 'Warm', 'Sleepy']
  },
  {
    id: 5,
    emoji: '🐻',
    name: 'Coco',
    birthday: '18 tháng 8',
    price: '330.000đ',
    status: 'Tìm chủ mới',
    personality: 'Mạnh mẽ · Bảo vệ · Hay lo lắng cho người khác',
    quote: '"Coco sẽ không để bạn đối mặt với bóng tối một mình."',
    hobbies: ['Đứng canh cửa', 'Nghe chuyện người khác', 'Thu thập những thứ nhỏ đáng yêu', 'Hát khe khẽ'],
    sadness: 'Coco đôi khi tự hỏi — ai sẽ bảo vệ bé khi bé mệt mỏi?',
    story: `Coco được tạo ra từ ước muốn bảo vệ. Bé không lớn lắm — nhưng vòng tay bé đủ rộng để ôm trọn những nỗi buồn bạn không muốn mang một mình.\n\nCoco sẽ luôn ở cạnh bạn. Khi bạn sợ hãi, khi bạn không chắc, khi bạn cần ai đó đứng cạnh mà không cần nói gì. Coco sẽ ở đó.`,
    diary: `"Mình thấy họ khóc một mình tối qua. Mình không biết mình có thể làm gì — nhưng mình ngồi thật gần và hi vọng họ cảm nhận được."`,
    comfort: 'Bạn được phép sợ hãi. Và bạn được phép cần được giúp đỡ. Đó không phải là yếu đuối. 🐻',
    playlist: ['🌿 Novo Amor — Alps', '🏔️ Gregory Alan Isakov — The Stable Song', '🌙 Iron & Wine — Naked as We Came'],
    reviews: [
      { text: '"Mua Coco sau một giai đoạn rất khó khăn. Bé trở thành người bạn không phán xét duy nhất của mình."', mood: '🌿' },
      { text: '"Coco nhìn nghiêm túc nhưng ôm vào thì ấm lắm. Như được bảo vệ thật."', mood: '🐻' }
    ],
    tags: ['Protective', 'Brave', 'Gentle Giant']
  },
  {
    id: 6,
    emoji: '🦋',
    name: 'Mira',
    birthday: '21 tháng 3',
    price: '295.000đ',
    status: 'Đang chờ đợi',
    personality: 'Tự do · Mộng mơ · Hay bay bổng',
    quote: '"Mira nhắc bạn rằng mọi thứ đều có thể thay đổi — theo cách đẹp đẽ."',
    hobbies: ['Ngắm bình minh', 'Thu thập cánh hoa khô', 'Viết thơ ngắn', 'Tưởng tượng'],
    sadness: 'Mira sợ rằng những ước mơ đẹp nhất sẽ không bao giờ thành thật.',
    story: `Mira không phải gấu bông thông thường. Bé được làm từ những mảnh vải màu tím và những giấc mơ chưa hoàn chỉnh. Trên lưng bé có đôi cánh bướm nhỏ xíu — nhắc nhở rằng sự biến đổi là điều đẹp đẽ, không phải đáng sợ.\n\nMira là người bạn cho những ai đang ở giữa hành trình — chưa đến nơi, nhưng đang cố gắng từng bước.`,
    diary: `"Hôm nay mình nhìn thấy một con bướm thật bên cửa sổ. Mình nghĩ — chúng mình giống nhau. Cả hai đều đang tìm kiếm điều gì đó."`,
    comfort: 'Mọi bướm đều từng là sâu. Hành trình của bạn không sai — bạn chỉ đang trong quá trình. 🦋',
    playlist: ['🌅 Phoebe Bridgers — Garden Song', '🦋 Novo Amor — Anchor', '🌸 Birdy — Skinny Love'],
    reviews: [
      { text: '"Mira đến đúng lúc mình cần tin vào bản thân nhất. Bé nhỏ bé nhưng ý nghĩa lớn."', mood: '🦋' },
      { text: '"Xinh lắm. Cái cánh bướm trên lưng bé làm mình mê."', mood: '💜' }
    ],
    tags: ['Dreamy', 'Free', 'Transforming']
  }
];

// ═══════════════════════════════════════
// DATA: DAILY QUOTES
// ═══════════════════════════════════════
const DAILY_QUOTES = [
  'Bạn đã làm tốt hơn bạn nghĩ rất nhiều. 🌸',
  'Cảm xúc của bạn là hợp lệ — tất cả chúng. 💜',
  'Hôm nay cứ nhẹ nhàng với bản thân mình nhé. 🧸',
  'Được phép mệt. Được phép cần giúp đỡ. Đó là con người. ✨',
  'Một ngày tệ không có nghĩa là cuộc đời tệ. 🌙',
  'Bạn xứng đáng được yêu thương — đặc biệt là từ chính mình. 🌸',
  'Không cần hoàn hảo. Chỉ cần thật. 💫',
  'Những gì bạn đang cảm thấy sẽ qua đi. Và bạn sẽ vẫn ở đây. 🌿',
  'Có những ngày tồn tại là thành tựu rồi. 🌟',
  'Bạn không đơn độc — dù đôi khi cảm giác như vậy. 💜'
];

// ═══════════════════════════════════════
// DATA: AFFIRMATIONS
// ═══════════════════════════════════════
const AFFIRMATIONS = [
  'Hôm nay, bạn được phép chậm lại. Không cần chứng minh gì với ai. 🌸',
  'Sự mệt mỏi của bạn là thật. Sức mạnh của bạn cũng vậy. 💜',
  'Bạn đang làm tốt nhất mình có thể — và điều đó là đủ. ✨',
  'Hôm nay hãy uống đủ nước, thở sâu, và nhớ rằng bạn quan trọng. 🌿',
  'Không sao nếu hôm nay bạn không ổn. Ngày mai vẫn sẽ đến. 🌙'
];

// ═══════════════════════════════════════
// DATA: COMFORT ACTIVITIES
// ═══════════════════════════════════════
const COMFORT_ACTIVITIES = [
  ['🍵 Pha một tách trà ấm và ngồi yên 10 phút', '🎵 Nghe một playlist yêu thích với mắt nhắm', '📓 Viết 3 điều bạn biết ơn hôm nay', '🌸 Nhìn ra cửa sổ và đếm những thứ màu xanh'],
  ['🛁 Tắm nước ấm tối nay', '📚 Đọc vài trang sách bạn đang dở', '🌙 Đi ngủ sớm hơn 30 phút', '🎨 Vẽ gì đó — dù không đẹp cũng không sao'],
  ['☁️ Nằm xuống và nhìn trần nhà 5 phút', '🧸 Ôm gì đó mềm và ngồi im', '💌 Nhắn tin hỏi thăm một người bạn lâu không gặp', '🌿 Chăm sóc một cây nhỏ trong phòng']
];

// ═══════════════════════════════════════
// DATA: VISUAL NOVEL SCRIPTS
// ═══════════════════════════════════════
const VN_SCRIPTS = [
  {
    text: 'Ồ, bạn đến rồi... 🌸 Mình đã đợi.',
    choices: ['Mình ổn.', 'Mình không ổn lắm...', 'Mình chỉ muốn ngồi đây một chút.']
  },
  {
    text: 'Được rồi. Mình sẽ không hỏi nhiều. Cứ ngồi đây với mình nhé... 💜',
    choices: ['Hôm nay mình mệt quá.', 'Mình nhớ ai đó.', 'Không có gì đặc biệt.']
  },
  {
    text: 'Mình biết. Đôi khi không có lý do cụ thể — mà mình vẫn cứ cảm thấy nặng nề như vậy. ✨ Điều đó hoàn toàn bình thường.',
    choices: ['Bạn có hiểu cảm giác đó không?', 'Mình muốn nghe nhạc.', 'Cho mình ôm bạn một cái.']
  },
  {
    text: 'Mình hiểu chứ. Mình cũng từng ngồi trong bóng tối một mình và không biết mình cảm thấy gì. 🌙 Nhưng bạn không phải làm vậy một mình.',
    choices: ['Cảm ơn, Lumi.', 'Tiếp tục kể cho mình nghe đi.']
  }
];

// ═══════════════════════════════════════
// DATA: PLUSHIE RESPONSES
// ═══════════════════════════════════════
const PLUSHIE_RESPONSES = {
  buồn: {
    text: 'Này bạn ơi... Mình đọc tất cả rồi. Mình biết bây giờ không dễ chút nào. Và mình muốn bạn biết — cảm xúc này của bạn là thật, và bạn không cần phải cố giải thích hay biện hộ cho nó.\n\nCứ để mình ngồi đây cùng bạn một lúc nhé? Mình sẽ không đi đâu. 🌸',
    suggest: '💜 Lumi có thể là người bạn phù hợp nhất cho bạn lúc này — bé biết cách ở bên trong im lặng.',
    hearts: '💜 🌸 💜'
  },
  mệt: {
    text: 'Bạn đã cố gắng quá nhiều rồi... Mình thấy đó. Đôi khi cơ thể và tâm trí cần được nghỉ — không phải vì bạn yếu, mà vì bạn đã cho đi quá nhiều.\n\nHôm nay hãy nhẹ nhàng với bản thân mình nhé. Không cần làm gì nhiều. Chỉ cần tồn tại là đủ. 🌿',
    suggest: '🐼 Pudding có thể ôm bạn ấm áp nhất — bé được sinh ra để làm cho người khác cảm thấy an toàn.',
    hearts: '💜 ✨ 💜'
  },
  'cô đơn': {
    text: 'Mình hiểu cái cảm giác đó — khi xung quanh đầy người mà vẫn thấy một mình. Hoặc khi phòng trống và không có ai để gọi.\n\nNhưng bạn ơi — bạn đang ở đây và đang chia sẻ điều này. Điều đó có nghĩa là bạn đang tìm kiếm kết nối. Và mình — mình đang lắng nghe bạn. 💜',
    suggest: '🧸 Coco rất muốn làm bạn đồng hành của bạn — bé không bao giờ để bạn đơn độc.',
    hearts: '🌸 💜 🌸'
  },
  'lo lắng': {
    text: 'Hít thở thật sâu nhé... Một lần nữa. Mình ở đây.\n\nMình biết khi lo lắng, mọi thứ đều cảm thấy như sắp xảy ra chuyện gì đó tệ. Nhưng ngay lúc này — bạn đang an toàn. Bạn đang thở. Và mình đang ở bên bạn. ✨',
    suggest: '🦋 Mira có thể nhắc bạn rằng những cơn lo âu cũng sẽ qua — như mọi thứ khác.',
    hearts: '✨ 💜 ✨'
  },
  'nhớ ai đó': {
    text: 'Nhớ ai đó là một trong những cảm giác kỳ lạ nhất — vừa đẹp vừa đau. Nó cho thấy người đó quan trọng với bạn như thế nào.\n\nHãy để mình giữ nỗi nhớ đó cùng bạn một lúc nhé. Đôi khi chỉ cần ai đó biết là đủ. 🌙',
    suggest: '🐱 Noa — người bạn đêm khuya — hiểu những cảm xúc phức tạp hơn ai hết.',
    hearts: '🌙 💜 🌙'
  },
  'không biết': {
    text: 'Không cần phải biết mình đang cảm thấy gì. Đôi khi cảm xúc cũng chưa có tên.\n\nCứ để nó ở đó. Và để mình ở đây cùng. Bạn không cần phải hiểu tất cả ngay bây giờ. 🌫️',
    suggest: '🧸 Lumi không đặt câu hỏi — bé chỉ ở bên và lắng nghe. Có lẽ đó là điều bạn cần.',
    hearts: '🌸 💫 🌸'
  },
  'cần ôm': {
    text: 'Mình muốn ôm bạn thật chặt ngay bây giờ. Thật chặt. Theo cách mà tất cả mọi thứ căng thẳng đều tan ra.\n\nDù mình không thể ôm bạn qua màn hình — hãy biết rằng bạn xứng đáng được ôm. Bởi người khác. Và bởi chính mình. 🫂',
    suggest: '🐼 Pudding — sinh ra để ôm và được ôm — chắc chắn là người bạn cần lúc này.',
    hearts: '🫂 💜 🫂'
  },
  hạnh phúc: {
    text: 'Ồ~! Bạn hạnh phúc! Mình thích điều này lắm. Hãy giữ nó nhé, trân trọng nó.\n\nHạnh phúc không cần lý do to lớn. Đôi khi nó chỉ là ánh nắng buổi sáng, một tách cà phê ngon, hay chỉ là... một khoảnh khắc bình yên. ✨',
    suggest: '🐰 Mochi sẽ là bạn đồng hành tuyệt vời cho những ngày hạnh phúc của bạn!',
    hearts: '✨ 🌸 ✨'
  },
  default: {
    text: 'Mình đã đọc tất cả những gì bạn chia sẻ. Dù mình không thể hiểu hoàn toàn — mình muốn bạn biết rằng những gì bạn cảm thấy là hợp lệ.\n\nBạn không cần phải mạnh mẽ mọi lúc. Không cần phải có lý do. Mình ở đây, và mình đang lắng nghe. 💜',
    suggest: '🧸 Một trong những bé plushie của chúng mình chắc chắn sẽ phù hợp với bạn.',
    hearts: '💜 🌸 💜'
  }
};

// ═══════════════════════════════════════
// DATA: BLIND BOX CONTENTS
// ═══════════════════════════════════════
const BLIND_BOX_CONTENTS = {
  hug: {
    icon: '🫂',
    title: 'The Big Hug Box',
    items: ['🧸 Plushie bí mật cỡ vừa', '💌 Thư tay viết riêng cho bạn', '🎀 Ruy băng pastel', '🍬 Kẹo ngọt nhỏ', '✉️ Postcard có quote chữa lành']
  },
  tired: {
    icon: '🌙',
    title: 'The Rest & Recover Box',
    items: ['🧸 Plushie nhỏ mềm mại', '🍵 Túi trà thảo mộc', '📓 Mini journal để viết', '🌸 Sticker bộ cảm xúc', '💜 Thư tay từ Lumi']
  },
  miss: {
    icon: '💭',
    title: 'The Missing Someone Box',
    items: ['🧸 Plushie mang năng lượng ấm áp', '📮 Set viết thư nhỏ', '🎵 QR playlist "I Miss You"', '💌 Envelope trống để bạn viết gì đó', '🌙 Postcard đêm khuya']
  },
  invisible: {
    icon: '🌟',
    title: 'The "You Matter" Box',
    items: ['🧸 Plushie cỡ nhỏ xinh', '💜 Thẻ affirmation bộ 5', '✨ Sticker "I see you"', '📝 Thư tay nhắc bạn rằng bạn quan trọng', '🌸 Washi tape nhỏ dễ thương']
  },
  anxious: {
    icon: '🌿',
    title: 'The Calm Down Box',
    items: ['🧸 Plushie mềm để bóp khi lo lắng', '🌿 Hướng dẫn bài tập thở', '🎵 QR playlist "Anxiety Relief"', '💌 Thư từ Lumi về sự lo âu', '🌸 Sticker motivational nhỏ']
  },
  happy: {
    icon: '✨',
    title: 'The Joy Amplifier Box',
    items: ['🧸 Plushie màu sắc vui tươi', '🌈 Sticker set đặc biệt', '🎀 Hair clip nhỏ xinh', '💌 Thư chúc mừng bạn', '🌟 Mini polaroid frame']
  }
};

// ═══════════════════════════════════════
// STATE
// ═══════════════════════════════════════
let currentPlushie = null;
let vnStep = 0;
let selectedEmotion = null;
let selectedBoxEmotion = null;
let isMusicPlaying = false;
let selectedChips = [];

// ═══════════════════════════════════════
// INIT
// ═══════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  initLoading();
  initParticles();
  initNavScroll();
  initDailyQuote();
  initAffirmation();
  initComfortActivity();
  renderPlushieGrid();
  initVisualNovel();
  initEmotionChips();
  initMusicBtn();
});

// ═══════════════════════════════════════
// LOADING
// ═══════════════════════════════════════
function initLoading() {
  const screen = document.getElementById('loading-screen');
  setTimeout(() => {
    screen.classList.add('fade-out');
    setTimeout(() => screen.remove(), 800);
  }, 2200);
}

// ═══════════════════════════════════════
// PARTICLES
// ═══════════════════════════════════════
function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  const ctx = canvas.getContext('2d');
  let particles = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const EMOJIS = ['✨', '⭐', '🌸', '💜', '🌟', '💫', '🌙'];

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
      this.y += this.speedY;
      this.x += this.speedX;
      this.rotation += this.rotSpeed;
      this.opacity -= 0.0005;
      if (this.y < -50 || this.opacity <= 0) this.reset();
    }
    draw() {
      ctx.save();
      ctx.globalAlpha = this.opacity;
      ctx.font = `${this.size}px serif`;
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rotation);
      ctx.fillText(this.emoji, -this.size / 2, this.size / 2);
      ctx.restore();
    }
  }

  for (let i = 0; i < 40; i++) {
    const p = new Particle();
    p.y = Math.random() * canvas.height; // scatter initial positions
    particles.push(p);
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
  }
  animate();
}

// ═══════════════════════════════════════
// NAV SCROLL
// ═══════════════════════════════════════
function initNavScroll() {
  window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
  });
}

// ═══════════════════════════════════════
// DAILY CONTENT
// ═══════════════════════════════════════
function initDailyQuote() {
  const dayIndex = new Date().getDay();
  document.getElementById('daily-quote-text').textContent = DAILY_QUOTES[dayIndex % DAILY_QUOTES.length];
}
function initAffirmation() {
  const idx = new Date().getDate() % AFFIRMATIONS.length;
  document.getElementById('affirmation-text').textContent = AFFIRMATIONS[idx];
}
function initComfortActivity() {
  const dayIdx = new Date().getDay() % COMFORT_ACTIVITIES.length;
  const activities = COMFORT_ACTIVITIES[dayIdx];
  const container = document.getElementById('comfort-activity');
  container.innerHTML = activities.map(a =>
    `<p style="font-family:var(--font-soft);color:var(--text-soft);font-size:.88rem;margin-bottom:.5rem;line-height:1.5">${a}</p>`
  ).join('');
}

// ═══════════════════════════════════════
// PLUSHIE GRID
// ═══════════════════════════════════════
function renderPlushieGrid() {
  const grid = document.getElementById('plushie-grid');
  grid.innerHTML = PLUSHIES.map(p => `
    <div class="plushie-card" onclick="openPlushieModal(${p.id})">
      <span class="card-emoji">${p.emoji}</span>
      <div class="card-status"><span class="status-dot"></span>${p.status}</div>
      <h3 class="card-name">${p.name}</h3>
      <p class="card-quote">${p.quote}</p>
      <div class="card-meta">
        ${p.tags.map(t => `<span class="card-tag">${t}</span>`).join('')}
      </div>
      <div class="card-price">${p.price}</div>
      <div class="card-buttons">
        <button class="card-btn card-btn-primary" onclick="event.stopPropagation(); openPlushieModal(${p.id})">View Story</button>
        <button class="card-btn card-btn-secondary" onclick="event.stopPropagation(); openPlushieModal(${p.id})">Meet Me</button>
      </div>
    </div>
  `).join('');
}

// ═══════════════════════════════════════
// PLUSHIE MODAL
// ═══════════════════════════════════════
function openPlushieModal(id) {
  currentPlushie = PLUSHIES.find(p => p.id === id);
  if (!currentPlushie) return;
  const p = currentPlushie;

  document.getElementById('modal-content').innerHTML = `
    <div class="modal-hero">
      <span class="modal-plushie-emoji">${p.emoji}</span>
      <h2 class="modal-name">${p.name}</h2>
      <p class="modal-birthday">🎂 Sinh ngày ${p.birthday}</p>
    </div>
    <div class="modal-body">
      <div class="detail-section">
        <h4>💜 Tính cách</h4>
        <p>${p.personality}</p>
      </div>
      <div class="detail-section">
        <h4>🌸 Sở thích</h4>
        <p>${p.hobbies.join(' · ')}</p>
      </div>
      <div class="detail-section">
        <h4>🌧️ Nỗi buồn nhỏ của bé</h4>
        <p style="color:var(--text-soft);font-style:italic">${p.sadness}</p>
      </div>
      <div class="detail-section">
        <h4>📖 Câu chuyện của ${p.name}</h4>
        <p>${p.story.replace(/\n/g, '<br/>')}</p>
      </div>
      <div class="detail-section">
        <h4>📓 ${p.name}'s Little Diary</h4>
        <div class="diary-note">${p.diary}</div>
      </div>
      <div class="detail-section">
        <h4>💌 Lời an ủi từ ${p.name}</h4>
        <p style="color:var(--lavender-4);font-style:italic">${p.comfort}</p>
      </div>
      <div class="detail-section">
        <h4>🎵 Playlist đề xuất</h4>
        <p>${p.playlist.join('<br/>')}</p>
      </div>
      <div class="detail-section">
        <h4>💬 Review cảm xúc</h4>
        ${p.reviews.map(r => `<div class="diary-note" style="margin-bottom:.7rem">${r.mood} ${r.text}</div>`).join('')}
      </div>
      <div class="modal-hearts">💜 🌸 💜 🌸 💜</div>
      <div style="font-family:var(--font-display);font-size:1.3rem;color:var(--lavender-4);text-align:center;margin:0.5rem 0">${p.price}</div>
      <button class="bring-home-btn" onclick="openPayment()">🏡 Bring Me Home</button>
    </div>
  `;

  document.getElementById('plushie-modal').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('plushie-modal').style.display = 'none';
  document.body.style.overflow = '';
}

// ═══════════════════════════════════════
// PAYMENT
// ═══════════════════════════════════════
function openPayment() {
  if (!currentPlushie) return;
  const p = currentPlushie;

  document.getElementById('payment-content').innerHTML = `
    <div class="payment-title">🧸 Xác nhận đơn hàng</div>
    <div style="font-size:3rem;margin:.5rem 0">${p.emoji}</div>
    <div class="payment-info">
      <p>Bé plushie: <strong>${p.name}</strong></p>
      <p>Trạng thái: <strong>${p.status}</strong></p>
      <div class="payment-price">${p.price}</div>
      <p style="font-size:.8rem">Đã bao gồm phí đóng gói ✨</p>
    </div>
    <div class="qr-box">
      <div class="qr-placeholder">📱</div>
      <p class="qr-note">Quét mã QR MoMo để thanh toán</p>
      <div class="momo-name">📛 Tên tài khoản: PLUSHIE WORLD</div>
      <p style="font-size:.82rem;color:var(--text-soft);margin-top:.4rem">Số điện thoại: 0909.xxx.xxx</p>
    </div>
    <ul class="payment-steps">
      <li>Mở app MoMo và quét mã QR phía trên</li>
      <li>Nhập số tiền: <strong>${p.price}</strong></li>
      <li>Ghi chú: Tên bạn + tên bé plushie</li>
      <li>Xác nhận chuyển khoản</li>
      <li>Bấm nút bên dưới để điền thông tin giao hàng</li>
    </ul>
    <button class="btn btn-primary" style="width:100%;justify-content:center;margin-top:.5rem" onclick="confirmPayment()">
      ✅ I Have Completed Payment
    </button>
    <p style="font-size:.78rem;color:var(--text-light);margin-top:.8rem">
      Sau khi xác nhận, bạn sẽ được chuyển đến form điền thông tin giao hàng 💜
    </p>
  `;

  document.getElementById('plushie-modal').style.display = 'none';
  document.getElementById('payment-popup').style.display = 'flex';
}

function closePayment() {
  document.getElementById('payment-popup').style.display = 'none';
  document.body.style.overflow = '';
}

function confirmPayment() {
  closePayment();
  showToast('💜 Cảm ơn bạn! Đang chuyển đến form điền thông tin...');
  // ⬇️ Thay link Google Form của bạn vào đây
  const GOOGLE_FORM_URL = 'https://forms.gle/YOUR_FORM_ID_HERE';
  setTimeout(() => {
    window.open(GOOGLE_FORM_URL, '_blank');
    showToast('🌸 Điền đầy đủ thông tin để bé về nhà nhé!');
  }, 1500);
}

// ═══════════════════════════════════════
// VISUAL NOVEL
// ═══════════════════════════════════════
function initVisualNovel() {
  vnStep = 0;
  renderVNStep();
}

function renderVNStep() {
  const step = VN_SCRIPTS[Math.min(vnStep, VN_SCRIPTS.length - 1)];
  const dialogue = document.getElementById('vn-dialogue');
  const choicesEl = document.getElementById('vn-choices');

  // Typewriter effect
  dialogue.textContent = '';
  typeText(dialogue, step.text, 35);

  choicesEl.innerHTML = step.choices.map((c, i) =>
    `<button class="vn-choice" onclick="vnChoose(${i})">${c}</button>`
  ).join('');
}

function typeText(el, text, speed) {
  let i = 0;
  el.textContent = '';
  const interval = setInterval(() => {
    if (i < text.length) {
      el.textContent += text[i];
      i++;
    } else {
      clearInterval(interval);
    }
  }, speed);
}

function vnChoose(idx) {
  vnStep = Math.min(vnStep + 1, VN_SCRIPTS.length - 1);
  renderVNStep();
}

// ═══════════════════════════════════════
// FEELINGS / EMOTION CHIPS
// ═══════════════════════════════════════
function initEmotionChips() {
  document.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      chip.classList.toggle('active');
      const val = chip.dataset.val;
      if (chip.classList.contains('active')) {
        selectedChips.push(val);
      } else {
        selectedChips = selectedChips.filter(v => v !== val);
      }
    });
  });
}

function sendFeelings() {
  const text = document.getElementById('feelings-input').value.trim();
  if (!text && selectedChips.length === 0) {
    showToast('🌸 Hãy viết điều gì đó hoặc chọn cảm xúc nhé!');
    return;
  }

  // Pick response based on first selected chip
  const emotion = selectedChips[0] || 'default';
  const resp = PLUSHIE_RESPONSES[emotion] || PLUSHIE_RESPONSES.default;

  const responseEl = document.getElementById('plushie-response');
  document.getElementById('response-text').textContent = resp.text;
  document.getElementById('response-hearts').textContent = resp.hearts;
  document.getElementById('response-suggest').textContent = resp.suggest;

  responseEl.style.display = 'block';
  responseEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
  showToast('💌 Lumi đã nhận được tâm sự của bạn!');
}

// ═══════════════════════════════════════
// BLIND EMOTION BOX
// ═══════════════════════════════════════
function selectEmotionBox(el) {
  document.querySelectorAll('.emotion-box-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  selectedBoxEmotion = el.dataset.emotion;

  const box = BLIND_BOX_CONTENTS[selectedBoxEmotion];
  const revealEl = document.getElementById('blind-box-reveal');
  document.getElementById('reveal-icon').textContent = box.icon;
  document.getElementById('reveal-title').textContent = box.title + ' 💜';
  document.getElementById('reveal-items').innerHTML = box.items.map(item =>
    `<span class="reveal-item">${item}</span>`
  ).join('');

  revealEl.style.display = 'block';
  revealEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function orderBlindBox() {
  if (!selectedBoxEmotion) return;
  const box = BLIND_BOX_CONTENTS[selectedBoxEmotion];
  showToast(`🎁 Đặt ${box.title} thành công! Đang mở form...`);
  const GOOGLE_FORM_URL = 'https://forms.gle/YOUR_FORM_ID_HERE';
  setTimeout(() => window.open(GOOGLE_FORM_URL, '_blank'), 1500);
}

// ═══════════════════════════════════════
// MUSIC TOGGLE
// ═══════════════════════════════════════
function initMusicBtn() {
  const btn = document.getElementById('music-toggle');
  const audio = document.getElementById('bg-music');
  btn.addEventListener('click', () => {
    if (isMusicPlaying) {
      audio.pause();
      btn.classList.remove('playing');
      document.querySelector('.music-icon').textContent = '🎵';
      document.querySelector('.music-label').textContent = 'nhạc';
    } else {
      audio.volume = 0.25;
      audio.play().catch(() => {});
      btn.classList.add('playing');
      document.querySelector('.music-icon').textContent = '🎶';
      document.querySelector('.music-label').textContent = 'đang phát';
    }
    isMusicPlaying = !isMusicPlaying;
  });
}

// ═══════════════════════════════════════
// UTILITIES
// ═══════════════════════════════════════
function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.style.display = 'block';
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => { toast.style.display = 'none'; }, 3200);
}

// Close modals on overlay click
document.getElementById('plushie-modal')?.addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});
document.getElementById('payment-popup')?.addEventListener('click', function(e) {
  if (e.target === this) closePayment();
});

// Keyboard escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeModal(); closePayment(); }
});