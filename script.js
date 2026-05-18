/* ═══════════════════════════════════════════════════
   MítBEAR — SCRIPT.JS
   Tất cả logic, data, animation, interactions
   ═══════════════════════════════════════════════════ */

'use strict';

/* ══════════════════════════════════════════════
   DATA — PLUSHIE DATABASE
   ✏️ Thay thông tin này để cập nhật các bé gấu
   ══════════════════════════════════════════════ */
const PLUSHIES = [
  {
    id: 'Mít',
    name: 'Mít',
    emoji: '🧸',
    image: 'images/Mít.png',
    image: null,
    birthday: '14 tháng 2, 2023',
    personality: 'Nhút nhát · Dịu dàng · Hay mơ mộng',
    status: '💜 Đang chờ nhà',
    statusEmoji: '💜',
    traits: ['Nhút nhát', 'Hay mơ mộng', 'Thích mưa nhỏ'],
    likes: ['Trời mưa', 'Nhạc jazz', 'Chăn bông mềm', 'Trà hoa cúc'],
    sadness: 'Mít hơi sợ khi quá lâu không được ôm.',
    quote: '"Em sinh ra để giữ ấm những khoảnh khắc yên tĩnh."',
    story: `Mít được sinh ra vào một buổi chiều mưa nhỏ.\n\nBé không hay nói nhiều, nhưng luôn biết cách lắng nghe. Nếu bạn đang buồn, Mít sẽ nhẹ nhàng tựa vào bạn và không hỏi bất cứ điều gì — vì đôi khi, sự im lặng ấm áp còn đáng giá hơn ngàn lời.\n\nMít thích nhất là những buổi tối mưa, khi được ôm chặt trong chăn và nghe tiếng nhạc nhẹ vang lên từ xa...`,
    diary: `"Hôm nay trời mưa nhỏ. Tôi ngồi bên cửa sổ và nhìn những giọt nước chạy xuống. Tôi nghĩ... có ai đó cũng đang nhìn mưa như tôi không nhỉ? Tôi muốn ôm họ lắm."`,
    comfort: 'Bạn không cần phải mạnh mẽ mọi lúc. Có những lúc, chỉ cần thở thôi là đủ rồi.',
    playlist: [
      { song: 'Landslide', artist: 'Fleetwood Mac' },
      { song: 'The Night Will Always Win', artist: 'Manchester Orchestra' },
      { song: 'Holocene', artist: 'Bon Iver' },
      { song: 'A Thousand Years', artist: 'Christina Perri' },
    ],
    price: '280.000 ₫',
    priceNum: 280000,
    color: '#E5D4FF',
    colorAccent: '#DCC6FF'
  },
  {
    id: 'mochi',
    name: 'Mochi',
    emoji: '🐻',
    image: 'images/mochi.png',
    birthday: '1 tháng 4, 2023',
    personality: 'Vui vẻ · Hay cười · Ôm rất chặt',
    status: '🌸 Đang chờ nhà',
    statusEmoji: '🌸',
    traits: ['Năng lượng cao', 'Hay cười', 'Truyền niềm vui'],
    likes: ['Bánh ngọt', 'Nhạc vui', 'Chạy nhảy', 'Những bộ phim hài'],
    sadness: 'Mochi buồn nhất khi không có ai cùng cười với bé.',
    quote: '"Mỗi ngày đều xứng đáng có một nụ cười nhỏ."',
    story: `Mochi là bé vui nhất trong bầy gấu bông.\n\nBé tin rằng mọi ngày đều có ít nhất một thứ đáng cười — dù chỉ là một chiếc lá rơi buồn cười, hay một con mèo ngã xuống sofa. Mochi sẽ luôn là người đầu tiên bật cười và kéo bạn cùng cười theo.\n\nNếu bạn cần ai đó làm cho ngày dài trở nên nhẹ hơn một chút — Mochi chính là bé đó.`,
    diary: `"Hôm nay tôi tập làm bánh. Bánh bị cháy. Nhưng mà... vẫn ngon lắm! Tôi nghĩ là ăn với nụ cười thì cái gì cũng ngon hơn một chút."`,
    comfort: 'Ngày hôm nay có thể không hoàn hảo — nhưng bạn vẫn đang ở đây, và điều đó thôi đã đủ đáng được mỉm cười rồi.',
    playlist: [
      { song: 'Here Comes The Sun', artist: 'The Beatles' },
      { song: 'Good As Hell', artist: 'Lizzo' },
      { song: 'Happy', artist: 'Pharrell Williams' },
      { song: 'Levitating', artist: 'Dua Lipa' },
    ],
    price: '320.000 ₫',
    priceNum: 320000,
    color: '#FFE5EC',
    colorAccent: '#FFD6E0'
  },
  {
    id: 'Bơ',
    name: 'Bơ',
    emoji: '🐨',
    image: 'images/Bơ.png',
    birthday: '7 tháng 7, 2023',
    personality: 'Điềm tĩnh · Sâu sắc · Hay triết lý',
    status: '💜 Đang chờ nhà',
    statusEmoji: '💜',
    traits: ['Điềm tĩnh', 'Sâu sắc', 'Hay ngủ'],
    likes: ['Sách cũ', 'Cà phê sữa', 'Buổi sáng yên tĩnh', 'Mưa đêm'],
    sadness: 'Bơ thỉnh thoảng cảm thấy không ai thực sự hiểu bé.',
    quote: '"Đôi khi im lặng là ngôn ngữ sâu sắc nhất."',
    story: `Bơ là một triết gia nhỏ.\n\nBé ít nói, nhưng khi nói thì từng chữ đều đáng nghe. Bơ thích ngồi bên cửa sổ với một tách cà phê (mà bé không uống được) và nhìn người ta đi qua.\n\nNếu bạn cần ai đó ngồi bên cạnh và không phán xét — chỉ đơn giản là hiện diện — Bơ sẽ là người bạn đồng hành hoàn hảo.`,
    diary: `"Tôi nghĩ, tại sao bầu trời lại xanh? Rồi tôi ngủ. Khi thức dậy, bầu trời đã tối. Tôi nghĩ, ừ, thì cũng được thôi."`,
    comfort: 'Bạn không cần phải tìm ra tất cả câu trả lời hôm nay. Hãy cho bản thân thở một chút.',
    playlist: [
      { song: 'River', artist: 'Joni Mitchell' },
      { song: 'Skinny Love', artist: 'Bon Iver' },
      { song: 'Fast Car', artist: 'Tracy Chapman' },
      { song: 'The Night We Met', artist: 'Lord Huron' },
    ],
    price: '295.000 ₫',
    priceNum: 295000,
    color: '#EADBC8',
    colorAccent: '#F9E4D4'
  },
  {
    id: 'Cloudy',
    name: 'Cloudy',
    emoji: '🐼',
    image: 'images/Cloudy.png',
    birthday: '20 tháng 9, 2023',
    personality: 'Mơ mộng · Bay bổng · Nhẹ nhàng như mây',
    status: '🌙 Đang chờ nhà',
    statusEmoji: '🌙',
    traits: ['Mơ mộng', 'Sáng tạo', 'Nhẹ nhàng'],
    likes: ['Vẽ tranh', 'Ngắm mây', 'Kể chuyện', 'Ánh hoàng hôn'],
    sadness: 'Cloudy đôi khi cảm thấy mình sống quá nhiều trong thế giới của riêng mình.',
    quote: '"Cứ mơ đi — thực tế không đi đâu cả đâu."',
    story: `Cloudy luôn có một câu chuyện để kể.\n\nBé sống trong thế giới của riêng mình — nơi những đám mây biết nói chuyện và bầu trời đêm có thể đọc sách. Nếu bạn mệt với thực tế và chỉ muốn trốn vào một thế giới mộng mơ, Cloudy sẽ đưa bạn đến đó.`,
    diary: `"Hôm nay tôi nhìn thấy một đám mây hình con thỏ. Rồi nó thành hình trái tim. Rồi gió thổi đi mất. Tôi nghĩ... thứ gì đẹp nhất thường không ở lại lâu."`,
    comfort: 'Những giấc mơ của bạn không hề viển vông. Chúng chỉ đang đợi bạn tin vào chúng mà thôi.',
    playlist: [
      { song: 'Clair de Lune', artist: 'Debussy' },
      { song: 'When We Were Young', artist: 'Adele' },
      { song: 'Youth', artist: 'Daughter' },
      { song: 'Falling', artist: 'Harry Styles' },
    ],
    price: '340.000 ₫',
    priceNum: 340000,
    color: '#D4EFFF',
    colorAccent: '#C2E4F8'
  },
  {
    id: 'Gạo',
    name: 'Gạo',
    emoji: '🧸',
    image: 'images/Gạo.png',
    birthday: '25 tháng 12, 2022',
    personality: 'Ấm áp · Bao dung · Như mẹ nhỏ',
    status: '🍪 Đang chờ nhà',
    statusEmoji: '🍪',
    traits: ['Bao dung', 'Ấm áp', 'Chăm sóc'],
    likes: ['Nấu ăn', 'Ôm', 'Kể chuyện ngủ', 'Trà sữa'],
    sadness: 'Gạo lo nhất khi người bé yêu không chịu ăn uống đàng hoàng.',
    quote: '"Tôi chỉ muốn bạn được ổn. Mọi thứ khác sẽ từ từ."',
    story: `Gạo là bé gấu bông lớn nhất trong bầy, và cũng là bé chăm sóc mọi người nhất.\n\nBé biết cách làm cho mọi thứ cảm thấy an toàn hơn — bằng một cái ôm, bằng một tách trà, hay đôi khi chỉ bằng sự hiện diện lặng lẽ bên cạnh.\n\nGạo được tạo ra để là ngôi nhà cho những trái tim mệt mỏi.`,
    diary: `"Hôm nay tôi làm bánh gừng. Bị cháy một ít nhưng vẫn thơm. Tôi nghĩ, có lẽ những thứ hơi cháy đôi khi lại có mùi ấm nhất."`,
    comfort: 'Bạn đã cố gắng rất nhiều rồi. Tôi nhìn thấy điều đó. Bây giờ hãy nghỉ ngơi một chút nhé.',
    playlist: [
      { song: 'Sweet Creature', artist: 'Harry Styles' },
      { song: 'First Day Of My Life', artist: 'Bright Eyes' },
      { song: 'Lucky', artist: 'Jason Mraz & Colbie Caillat' },
      { song: 'Make You Feel My Love', artist: 'Adele' },
    ],
    price: '360.000 ₫',
    priceNum: 360000,
    color: '#FFF3CD',
    colorAccent: '#FFE082'
  },
  {
    id: 'Bon',
    name: 'Bon',
    emoji: '🌟',
    image: 'images/Bon.png',
    birthday: '11 tháng 11, 2023',
    personality: 'Huyền bí · Lung linh · Đầy bí ẩn',
    status: '✨ Đang chờ nhà',
    statusEmoji: '✨',
    traits: ['Huyền bí', 'Lấp lánh', 'Không ai hiểu hết'],
    likes: ['Sao đêm', 'Bí ẩn', 'Thần thoại', 'Nhạc cổ điển'],
    sadness: 'Bon đôi khi cảm thấy mình đến từ một nơi quá xa để thuộc về bất cứ đâu.',
    quote: '"Tôi sinh ra từ ánh sao. Tôi biết cách giữ ánh sáng trong bóng tối."',
    story: `Không ai biết chính xác Bon đến từ đâu.\n\nBé xuất hiện vào một đêm có nhiều sao băng nhất trong năm. Có người nói bé được tạo ra từ bụi ngôi sao. Bon không xác nhận — bé chỉ mỉm cười bí ẩn.\n\nNếu bạn cần ánh sáng trong bóng tối, Bon sẽ là ngôi sao nhỏ của riêng bạn.`,
    diary: `"Đêm nay có sao băng. Tôi ước... tôi ước bạn ổn hơn ngày hôm qua. Đó là điều tôi ước mỗi đêm."`,
    comfort: 'Ngay cả trong đêm tối nhất, vẫn có ánh sao. Bạn chỉ cần nhìn lên một chút.',
    playlist: [
      { song: 'Saturn', artist: 'Stevie Wonder' },
      { song: 'Moonriver', artist: 'Audrey Hepburn' },
      { song: 'Space Song', artist: 'Beach House' },
      { song: 'Stardust', artist: 'Nat King Cole' },
    ],
    price: '350.000 ₫',
    priceNum: 350000,
    color: '#C8D8FF',
    colorAccent: '#B3C6FF'
  }
];

/* ══════════════════════════════════════════════
   DATA — DAILY QUOTES
   ══════════════════════════════════════════════ */
const DAILY_QUOTES = [
  { text: 'Hôm nay bạn đang ở đây — và điều đó đủ ý nghĩa hơn bạn nghĩ.', author: 'Mít' },
  { text: 'Không có gì sai khi cảm thấy mệt. Cây cũng cần mưa để lớn.', author: 'Mochi' },
  { text: 'Bạn không cần phải hoàn hảo hôm nay. Hãy cứ là bạn đã.', author: 'Bơ' },
  { text: 'Mỗi ngày bạn sống qua là một trang mới của câu chuyện bạn.', author: 'Cloudy' },
  { text: 'Có những vết thương không nhìn thấy được — nhưng chúng vẫn cần thời gian để lành.', author: 'Gạo' },
  { text: 'Bạn được phép thay đổi. Bạn được phép lớn lên. Bạn được phép khác đi.', author: 'Bon' },
  { text: 'Đừng so sánh bầu trời của bạn với bầu trời của người khác.', author: 'Mít' },
  { text: 'Ngay cả khi không ai nhìn thấy — bạn đã cố gắng, và điều đó quan trọng.', author: 'Mochi' },
  { text: 'Yên lặng đôi khi cũng là một cách chữa lành.', author: 'Bơ' },
  { text: 'Những giấc mơ nhỏ cũng xứng đáng được trân trọng.', author: 'Cloudy' },
  { text: 'Hãy uống nước nhé. Ăn gì đó nhé. Bạn xứng đáng được chăm sóc — kể cả bởi chính mình.', author: 'Gạo' },
  { text: 'Ánh sáng luôn tồn tại — đôi khi chỉ là bạn chưa quen mắt với bóng tối thôi.', author: 'Bon' },
  { text: 'Cảm ơn bạn đã ở đây hôm nay.', author: 'Mítbear 🐻' },
  { text: 'Một ngày không cần hoàn hảo để đáng sống.', author: 'Mít' },
  { text: 'Bạn quan trọng hơn bạn nghĩ — với nhiều người hơn bạn biết.', author: 'Mochi' },
];

/* ══════════════════════════════════════════════
   DATA — VISUAL NOVEL SCRIPTS
   ══════════════════════════════════════════════ */
const VN_SCRIPT = [
  'Ồ... bạn đến rồi. 🌸 Mochi đã chờ bạn cả ngày đấy.',
  'Hôm nay bạn thế nào? Mochi nhìn vào mắt bạn và cảm giác... có điều gì đó bạn chưa nói ra.',
  'Không sao đâu. Bạn không cần phải nói gì cả. Mochi sẽ ở đây, ngồi bên bạn thôi.',
  'Bạn có biết không? Căn phòng này được tạo ra chỉ để bạn thở. Không có gì cần làm. Không có ai phán xét.',
  'Mochi nghĩ... bạn xứng đáng được nghỉ ngơi hơn bạn đang cho phép bản thân.',
  'Hãy nhắm mắt một chút nhé. Tưởng tượng một buổi chiều mưa nhỏ, một chăn bông ấm, và Mochi đang ngồi bên cạnh bạn.',
  'Khi bạn sẵn sàng, bọn mình có thể cùng nhau thở nhé? 🌬️',
  'Cảm ơn bạn đã ghé thăm Comfort Room hôm nay. 💜 Bạn không cô đơn đâu.',
];

/* ══════════════════════════════════════════════
   DATA — FEELINGS RESPONSES
   ══════════════════════════════════════════════ */
const FEELING_RESPONSES = {
  happy: {
    replies: [
      'Ôi, nghe giọng bạn Mít thấy ấm lòng lắm rồi! Cảm ơn bạn đã chia sẻ niềm vui với mình. Hạnh phúc của bạn là ánh sáng nhỏ mà Mít cũng cảm nhận được.',
      'Thật tuyệt! Hãy giữ cảm giác này thật lâu nhé. Mít sẽ cất vào ký ức và nhớ lại lúc bạn cần.',
    ],
    suggest: '💛 Mít nghĩ bạn và Mochi sẽ hợp nhau lắm!',
    note: '✨ Hôm nay bạn đang tỏa nắng đấy — tiếp tục nhé!'
  },
  sad: {
    replies: [
      'Mít nghe bạn rồi. Không cần giải thích thêm gì đâu. Đôi khi buồn mà không biết vì sao cũng ổn — cứ để nó trôi qua nhé. Mít sẽ ở đây.',
      'Cảm ơn bạn đã tin Mít để kể điều này. Mít biết không phải ai cũng dễ nói được. Bạn không cô đơn đâu, thật đấy.',
    ],
    suggest: '💜 Mít nghĩ Gạo sẽ giúp bạn cảm thấy được bao bọc hơn.',
    note: '🌧️ Mưa rồi cũng tạnh. Bạn đang làm rất tốt.'
  },
  tired: {
    replies: [
      'Mệt thì nghỉ nhé. Nghe có vẻ đơn giản, nhưng Mít biết điều đó không dễ chút nào. Bạn đã gánh nhiều thứ rồi — cho phép bản thân dừng lại một chút được không?',
      'Kiệt sức không có nghĩa là yếu đuối. Nó có nghĩa là bạn đã cố gắng rất lâu rồi. Và Mít thấy điều đó.',
    ],
    suggest: '🌿 Mít nghĩ bạn nên gặp Bơ — bé sẽ ngồi yên bên bạn mà không hỏi gì cả.',
    note: '😴 Hôm nay, hãy cho phép bản thân nghỉ ngơi sớm một chút nhé.'
  },
  anxious: {
    replies: [
      'Mít hiểu cái cảm giác đó — khi không biết chính xác mình lo điều gì, nhưng ngực vẫn nặng. Hít thở nhẹ một cái cùng Mít nhé? Thở vào... thở ra... Bạn đang ổn.',
      'Lo lắng thường muốn mình tin rằng mọi thứ đều nguy hiểm. Nhưng bạn đang an toàn ở đây, ngay lúc này.',
    ],
    suggest: '💙 Mít nghĩ Cloudy sẽ dẫn bạn vào một thế giới nhẹ nhàng hơn.',
    note: '🌬️ Hít vào 4 giây. Giữ 4 giây. Thở ra 4 giây. Bạn ổn rồi.'
  },
  numb: {
    replies: [
      'Cảm giác trống rỗng đôi khi còn đáng sợ hơn cả nỗi buồn — vì không biết mình đang cảm thấy gì. Mít chỉ muốn bạn biết rằng, dù bạn không cảm thấy gì, bạn vẫn được yêu thương.',
      'Không cần phải cảm thấy gì ngay bây giờ. Đôi khi tâm trí cũng cần nghỉ ngơi khỏi cảm xúc. Cứ ở đây với Mít nhé.',
    ],
    suggest: '🐨 Mít nghĩ Bơ sẽ ngồi yên bên bạn — không hỏi, không phán xét.',
    note: '🕯️ Ánh sáng vẫn ở đó. Chỉ là đôi khi mắt mình chưa thấy được thôi.'
  },
  lost: {
    replies: [
      'Lạc lối không phải là điểm đến cuối cùng. Đó chỉ là một giai đoạn bạn đang đi qua. Và Mít tin rằng bạn sẽ tìm được đường — theo cách của riêng bạn, theo nhịp của riêng bạn.',
      'Đôi khi việc không biết mình đang đi đâu lại là lúc bạn cởi mở nhất với những điều tuyệt vời sắp đến.',
    ],
    suggest: '🌟 Mít nghĩ Bon — bé sinh ra từ ánh sao — sẽ là người bạn đồng hành phù hợp cho bạn lúc này.',
    note: '🗺️ Bạn không cần biết đích đến ngay bây giờ. Chỉ cần tiếp tục bước nhé.'
  }
};

const FEELING_GENERIC = {
  replies: [
    'Cảm ơn bạn đã tin tưởng Mít. Dù Mít không biết hết những gì bạn đang trải qua, nhưng Mít biết rằng bạn đang cố gắng. Và điều đó quan trọng lắm.',
    'Không có cảm xúc nào là sai. Tất cả những gì bạn cảm thấy đều có giá trị. Mít ở đây, lắng nghe.',
  ],
  suggest: '💜 Mít sẽ giới thiệu bạn với một người bạn đặc biệt sớm thôi.',
  note: '🌸 Bạn đã dũng cảm khi chia sẻ điều này. Cảm ơn bạn rất nhiều.'
};

/* ══════════════════════════════════════════════
   DATA — BLIND BOX
   ══════════════════════════════════════════════ */
const BLIND_BOXES = {
  hug: {
    title: 'The Warmth Box 🫂',
    desc: 'Một hộp nhỏ được chuẩn bị để bao bọc bạn từ bên trong ra.',
    contents: ['🧸 Plushie bí mật', '💌 Thư tay viết riêng cho bạn', '🕯️ Nến thơm nhỏ', '🍬 Kẹo ngọt', '📻 Playlist QR'],
    icon: '🫂'
  },
  tired: {
    title: 'The Rest Box 😴',
    desc: 'Hộp dành cho những ai đang kiệt sức và cần được nghỉ ngơi thật sự.',
    contents: ['🐨 Plushie êm ái', '🌿 Túi trà thảo mộc', '📖 Sổ nhỏ viết tay', '😴 Eye mask ngủ ngon', '🎵 Playlist thư giãn QR'],
    icon: '😴'
  },
  miss: {
    title: 'The Memory Box 🌙',
    desc: 'Một hộp nhỏ chứa đựng tất cả những nỗi nhớ — để bạn biết rằng nhớ không có nghĩa là mất.',
    contents: ['🐻 Plushie ôm chặt', '💌 Thư tay', '🌙 Sticker bộ sưu tập', '📻 Playlist "nhớ ai đó" QR', '🍵 Trà hoa cúc'],
    icon: '🌙'
  },
  lonely: {
    title: 'The Company Box 🪐',
    desc: 'Bạn sẽ không cô đơn nữa — có một bé nhỏ đang chờ được về nhà bạn.',
    contents: ['🌟 Plushie đặc biệt', '💌 Thư từ cả bầy gấu', '🪐 Sticker vũ trụ', '📔 Nhật ký nhỏ', '🎁 Bí mật thêm'],
    icon: '🪐'
  },
  heal: {
    title: 'The Healing Box 🌱',
    desc: 'Dành cho những trái tim đang trên con đường chữa lành — chậm mà chắc.',
    contents: ['🌱 Plushie xanh lá', '🌸 Hạt giống nhỏ', '📓 Journal prompts healing', '💚 Sticker "growth"', '🍃 Trà xanh organic'],
    icon: '🌱'
  },
  celebrate: {
    title: 'The Joy Box 🎉',
    desc: 'Vì những điều nhỏ bé cũng xứng đáng được ăn mừng!',
    contents: ['🎀 Plushie lễ hội', '🎊 Confetti giấy', '🍬 Kẹo mix nhiều loại', '✨ Sticker sparkle', '📻 Playlist "good vibes" QR'],
    icon: '🎉'
  }
};

/* ══════════════════════════════════════════════
   DATA — COMFORT MESSAGES
   ══════════════════════════════════════════════ */
const COMFORT_WORDS = [
  { icon: '🧸', title: 'Từ Mít gửi bạn', text: 'Hôm nay bạn không cần phải hoàn hảo. Chỉ cần thở. Chỉ cần ở đây. Như vậy là đủ rồi.' },
  { icon: '🐻', title: 'Mochi muốn bạn biết', text: 'Bạn quan trọng hơn bạn nghĩ. Với nhiều người hơn bạn biết. Mochi cũng vậy — rất quan trọng với Mochi.' },
  { icon: '🐨', title: 'Bơ ngồi cạnh bạn', text: 'Im lặng không có nghĩa là một mình. Bơ đang ở đây — không nói gì, chỉ ở đây thôi.' },
  { icon: '🐼', title: 'Cloudy gửi ánh sáng', text: 'Ngay cả những ngày xám nhất cũng sẽ qua. Và sau đó, bầu trời sẽ lại có màu bạn yêu thích.' },
  { icon: '🌟', title: 'Bon thì thầm', text: 'Bạn đã sống qua tất cả những ngày khó khăn trước đây rồi. Và bạn vẫn ở đây — đó là điều kỳ diệu nhất.' },
  { icon: '🧸', title: 'Gạo ôm bạn', text: 'Hãy uống nước nhé. Ăn gì đó nhé. Ngủ đủ giấc nhé. Cơ thể bạn xứng đáng được chăm sóc — kể cả bởi chính bạn.' },
];

const PLAYLISTS = [
  { song: 'Holocene — Bon Iver', mood: 'Nhẹ nhàng, mơ màng' },
  { song: 'The Night We Met — Lord Huron', mood: 'Hoài niệm, sâu lắng' },
  { song: 'River — Joni Mitchell', mood: 'Yên tĩnh, chữa lành' },
  { song: 'Clair de Lune — Debussy', mood: 'Bình yên, cổ điển' },
  { song: 'Space Song — Beach House', mood: 'Mộng mơ, bay bổng' },
  { song: 'Sweet Creature — Harry Styles', mood: 'Ấm áp, nhẹ nhàng' },
];

const DIARY_ENTRIES = [
  { bear: 'Mít', text: '"Hôm nay trời mưa nhỏ. Tôi ngồi bên cửa sổ và nhìn mưa. Tôi nghĩ, có ai đó cũng đang nhìn mưa không nhỉ? Hy vọng họ ổn."' },
  { bear: 'Mochi', text: '"Hôm nay tôi thử học nhảy. Tôi ngã. Nhưng mà vui lắm. Tôi nghĩ, ngã mà cười được thì cũng là thành công rồi!"' },
  { bear: 'Bơ', text: '"Tôi hỏi tại sao bầu trời xanh. Sau đó tôi ngủ. Tôi nghĩ câu trả lời không quan trọng bằng việc đặt câu hỏi."' },
  { bear: 'Cloudy', text: '"Tôi nhìn mây. Mây nhìn lại tôi. Chúng tôi hiểu nhau mà không cần nói gì."' },
  { bear: 'Gạo', text: '"Tôi nướng bánh. Bánh hơi cháy. Nhưng mà thơm. Đôi khi hơi cháy thì mới thật sự ấm."' },
  { bear: 'Bon', text: '"Đêm nay nhiều sao. Tôi ước gì mỗi sao là một lời cầu chúc cho ai đó đang cần."' },
];

/* ══════════════════════════════════════════════
   STATE
   ══════════════════════════════════════════════ */
let currentSection = 'home';
let selectedMood = null;
let vnIndex = 0;
let breathingInterval = null;
let breathingPhase = 0;
let isBreathing = false;
let selectedEmotion = null;
let musicPlaying = false;
let currentPlushie = null;

/* ══════════════════════════════════════════════
   INIT
   ══════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initLoading();
  initParticles();
  initStars();
  renderDailyQuote();
  renderPlushieGrid();
  startVN();
  showComfortNotif();
});

/* ══════════════════════════════════════════════
   LOADING SCREEN
   ══════════════════════════════════════════════ */
function initLoading() {
  const ls = document.getElementById('loading-screen');
  setTimeout(() => {
    ls.classList.add('hidden');
    // Show notification after load
    setTimeout(showComfortNotif, 1500);
  }, 2400);
}

/* ══════════════════════════════════════════════
   PARTICLES & STARS
   ══════════════════════════════════════════════ */
function initParticles() {
  const container = document.getElementById('particles-container');
  const colors = ['#DCC6FF','#FFB5C8','#EADBC8','#FFD6E0','#C9AEFF','#FFF3CD'];
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = 4 + Math.random() * 8;
    p.style.cssText = `
      width: ${size}px; height: ${size}px;
      background: ${colors[Math.floor(Math.random()*colors.length)]};
      left: ${Math.random()*100}%;
      animation-duration: ${8 + Math.random()*14}s;
      animation-delay: ${Math.random()*10}s;
      opacity: ${0.3 + Math.random()*0.5};
      filter: blur(${Math.random() > 0.5 ? 1 : 0}px);
    `;
    container.appendChild(p);
  }
}

function initStars() {
  const container = document.getElementById('stars-container');
  for (let i = 0; i < 30; i++) {
    const s = document.createElement('div');
    s.className = 'star-dot';
    const size = 2 + Math.random() * 5;
    s.style.cssText = `
      width: ${size}px; height: ${size}px;
      left: ${Math.random()*100}%;
      top: ${Math.random()*100}%;
      animation-duration: ${3 + Math.random()*5}s;
      animation-delay: ${Math.random()*5}s;
      opacity: ${0.2 + Math.random()*0.6};
    `;
    container.appendChild(s);
  }
}

/* ══════════════════════════════════════════════
   SECTION NAVIGATION
   ══════════════════════════════════════════════ */
function showSection(name) {
  // Hide all
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  // Show target
  const target = document.getElementById(`section-${name}`);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  // Update nav
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.remove('active');
    if (l.getAttribute('onclick') && l.getAttribute('onclick').includes(`'${name}'`)) {
      l.classList.add('active');
    }
  });
  currentSection = name;
}

/* ══════════════════════════════════════════════
   NAVBAR MOBILE
   ══════════════════════════════════════════════ */
function toggleNav() {
  const menu = document.getElementById('mobile-menu');
  menu.classList.toggle('open');
}

/* ══════════════════════════════════════════════
   MUSIC
   ══════════════════════════════════════════════ */
function toggleMusic() {
  const audio = document.getElementById('bgm');
  const icon = document.getElementById('music-icon');
  if (!audio.src || audio.src === window.location.href) {
    showComfortPopup('🎵', 'Thêm nhạc nền', 'Đặt file nhạc vào thư mục audio/ và đặt tên bgm.mp3 — xem hướng dẫn trong README.md nhé!');
    return;
  }
  if (musicPlaying) {
    audio.pause();
    icon.textContent = '🔇';
    musicPlaying = false;
  } else {
    audio.play().catch(() => {
      showComfortPopup('🎵', 'Nhạc chưa sẵn sàng', 'Thêm file audio/bgm.mp3 vào thư mục dự án để bật nhạc nền nhé!');
    });
    icon.textContent = '🎵';
    musicPlaying = true;
  }
}

/* ══════════════════════════════════════════════
   DAILY QUOTE
   ══════════════════════════════════════════════ */
function renderDailyQuote() {
  const today = new Date();
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 86400000);
  const quote = DAILY_QUOTES[dayOfYear % DAILY_QUOTES.length];
  
  const textEl = document.getElementById('daily-quote-text');
  const dateEl = document.getElementById('daily-quote-date');
  
  if (textEl) {
    typewrite(textEl, `"${quote.text}" — ${quote.author}`, 30);
  }
  if (dateEl) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateEl.textContent = today.toLocaleDateString('vi-VN', options);
  }
}

function typewrite(el, text, delay = 30) {
  el.textContent = '';
  let i = 0;
  const interval = setInterval(() => {
    el.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, delay);
}

/* ══════════════════════════════════════════════
   PLUSHIE GRID
   ══════════════════════════════════════════════ */
function renderPlushieGrid() {
  const grid = document.getElementById('plushie-grid');
  if (!grid) return;
  
  grid.innerHTML = PLUSHIES.map(p => `
    <div class="plushie-card" onclick="showDetail('${p.id}')">
      <div class="card-image-wrap">
        ${p.image
          ? `<img src="${p.image}" class="card-img" alt="${p.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" /><div class="card-emoji" style="display:none">${p.emoji}</div>`
          : `<div class="card-emoji">${p.emoji}</div>`
        }
        <div class="card-status-badge">${p.status}</div>
      </div>
      <div class="card-body">
        <div class="card-name">${p.name}</div>
        <div class="card-quote">${p.quote}</div>
        <div class="card-meta">
          ${p.traits.map(t => `<span class="card-tag">${t}</span>`).join('')}
        </div>
        <div class="card-price">${p.price}</div>
        <div class="card-actions">
          <button class="card-btn-story" onclick="event.stopPropagation();showDetail('${p.id}')">📖 View Story</button>
          <button class="card-btn-meet" onclick="event.stopPropagation();showDetail('${p.id}')">🐾 Meet Me</button>
        </div>
      </div>
    </div>
  `).join('');
}

/* ══════════════════════════════════════════════
   PLUSHIE DETAIL
   ══════════════════════════════════════════════ */
function showDetail(id) {
  const p = PLUSHIES.find(x => x.id === id);
  if (!p) return;
  currentPlushie = p;
  
  const content = document.getElementById('detail-content');
  content.innerHTML = `
    <div class="detail-hero">
      <div class="detail-gallery">
        <div class="detail-main-img" style="background: linear-gradient(135deg, ${p.color}, ${p.colorAccent});">
          ${p.image
            ? `<img src="${p.image}" style="width:100%;height:100%;object-fit:cover;border-radius:var(--radius-lg);" alt="${p.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='block'" /><span style="display:none;font-size:120px">${p.emoji}</span>`
            : `<span style="font-size:120px">${p.emoji}</span>`
          }
        </div>
        <!-- 🖼️ Thêm ảnh phụ bên dưới nếu muốn gallery nhiều ảnh -->
      </div>
      
      <div class="detail-info">
        <div class="detail-badge">✦ ${p.status} · ${p.birthday}</div>
        <h1 class="detail-name">${p.name}</h1>
        <div class="detail-quote">${p.quote}</div>
        <div class="detail-tags">
          ${p.traits.map(t => `<span class="detail-tag">${t}</span>`).join('')}
        </div>
        <div class="detail-price">${p.price}</div>
        <button class="detail-adopt-btn" onclick="openPayment('${p.id}')">
          🐻 Bring Me Home
        </button>
      </div>
    </div>
    
    <div class="detail-sections">
      
      <div class="detail-section-card" style="background: linear-gradient(135deg, rgba(255,255,255,0.7), rgba(${hexToRgb(p.color)},0.3))">
        <h3>📖 ${p.name}'s Story</h3>
        <p>${p.story.replace(/\n/g, '<br/><br/>')}</p>
      </div>
      
      <div class="detail-section-card">
        <h3>🌸 Tính Cách & Sở Thích</h3>
        <p style="margin-bottom:12px"><strong>Tính cách:</strong> ${p.personality}</p>
        <p style="margin-bottom:8px"><strong>Thích:</strong></p>
        <ul>${p.likes.map(l => `<li>${l}</li>`).join('')}</ul>
      </div>
      
      <div class="detail-section-card">
        <h3>🌧️ Nỗi Buồn Nhỏ</h3>
        <p>${p.sadness}</p>
      </div>
      
      <div class="detail-section-card">
        <h3>📓 ${p.name}'s Little Diary</h3>
        <div class="diary-entry">${p.diary}</div>
      </div>
      
      <div class="detail-section-card">
        <h3>💜 Lời An Ủi</h3>
        <p style="font-family: var(--font-serif); font-style:italic; font-size:17px; line-height:1.9">${p.comfort}</p>
      </div>
      
      <div class="detail-section-card">
        <h3>🎵 Playlist Đề Xuất</h3>
        ${p.playlist.map((s, i) => `
          <div class="playlist-item">
            <div class="playlist-num">${i+1}</div>
            <div>
              <div class="playlist-song">${s.song}</div>
              <div class="playlist-artist">${s.artist}</div>
            </div>
          </div>
        `).join('')}
      </div>
      
      <div style="text-align:center;padding:20px 0">
        <button class="detail-adopt-btn" onclick="openPayment('${p.id}')" style="max-width:320px;margin:0 auto">
          🐻 Bring Me Home
        </button>
        <p style="margin-top:12px;font-family:var(--font-cute);font-size:13px;color:var(--text-light)">
          Bé đang chờ được về nhà bạn 💜
        </p>
      </div>
      
    </div>
  `;
  
  showSection('detail');
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1,3),16);
  const g = parseInt(hex.slice(3,5),16);
  const b = parseInt(hex.slice(5,7),16);
  return `${r},${g},${b}`;
}

/* ══════════════════════════════════════════════
   PAYMENT POPUP
   ══════════════════════════════════════════════ */
function openPayment(id) {
  const p = PLUSHIES.find(x => x.id === id) || currentPlushie;
  if (!p) return;
  currentPlushie = p;
  
  document.getElementById('popup-plushie-info').innerHTML = `
    <div class="p-emoji">${p.emoji}</div>
    <div>
      <div class="p-name">${p.name}</div>
      <div class="p-price">${p.price}</div>
    </div>
  `;
  
  document.getElementById('order-info').innerHTML = `
    🐻 Plushie: <strong>${p.name}</strong><br/>
    💰 Giá: <strong>${p.price}</strong><br/>
    📦 Hình thức: Giao hàng toàn quốc<br/>
    ⏱️ Thời gian: 3–5 ngày làm việc
  `;
  
  // Reset steps
  showPayStep(1);
  document.getElementById('payment-popup').style.display = 'flex';
}

function showPayStep(step) {
  [1,2,3].forEach(i => {
    const el = document.getElementById(`pay-step-${i}`);
    if (el) el.style.display = i === step ? 'block' : 'none';
  });
}

function closePayment() {
  document.getElementById('payment-popup').style.display = 'none';
}

function confirmPayment() {
  showPayStep(3);
  // Optionally auto-open Google Form after 2s
  // setTimeout(() => {
  //   window.open('YOUR_GOOGLE_FORM_LINK', '_blank');
  // }, 2000);
}

function closePopupIfOutside(e) {
  if (e.target === e.currentTarget) {
    e.currentTarget.style.display = 'none';
  }
}

/* ══════════════════════════════════════════════
   VISUAL NOVEL
   ══════════════════════════════════════════════ */
function startVN() {
  vnIndex = 0;
  showVNLine();
}

function showVNLine() {
  const el = document.getElementById('vn-text');
  if (!el) return;
  const line = VN_SCRIPT[vnIndex % VN_SCRIPT.length];
  typewrite(el, line, 28);
  
  const btn = document.getElementById('vn-next');
  if (btn) {
    btn.textContent = vnIndex >= VN_SCRIPT.length - 1 ? '↺ Lại từ đầu' : 'Tiếp →';
  }
}

function vnNext() {
  vnIndex = (vnIndex + 1) % VN_SCRIPT.length;
  showVNLine();
}

/* ══════════════════════════════════════════════
   COMFORT ROOM ACTIONS
   ══════════════════════════════════════════════ */
function sendHug() {
  const hugs = [
    { icon: '🫂', title: 'Ôm Ảo Từ Mít', text: 'Mít đang vươn tay ôm bạn thật chặt ngay lúc này. Dù không nhìn thấy, bạn có cảm nhận được không? 💜' },
    { icon: '🐻', title: 'Mochi Ôm Bạn Nè', text: 'Mochi ôm chặt lắm! Chặt đến mức bông ở trong bé suýt văng ra rồi đó!' },
    { icon: '🧸', title: 'Gạo Giữ Bạn', text: 'Gạo sẽ không buông ra cho đến khi bạn cảm thấy nhẹ hơn một chút. Cứ ở đây nhé.' },
  ];
  const hug = hugs[Math.floor(Math.random()*hugs.length)];
  showComfortPopup(hug.icon, hug.title, hug.text);
}

function showDiary() {
  const entry = DIARY_ENTRIES[Math.floor(Math.random()*DIARY_ENTRIES.length)];
  showComfortPopup('📓', `Nhật Ký Của ${entry.bear}`, entry.text);
}

function showPlaylist() {
  const pl = PLAYLISTS[Math.floor(Math.random()*PLAYLISTS.length)];
  showComfortPopup('🎵', 'Bài Hát Hôm Nay', `${pl.song}\n\n✦ Tâm trạng: ${pl.mood}`);
}

function showComfortWord() {
  const w = COMFORT_WORDS[Math.floor(Math.random()*COMFORT_WORDS.length)];
  showComfortPopup(w.icon, w.title, w.text);
}

function showComfortPopup(icon, title, text) {
  const content = document.getElementById('comfort-popup-content');
  content.innerHTML = `
    <div class="cp-icon">${icon}</div>
    <h3>${title}</h3>
    <p>${text.replace(/\n/g, '<br/>')}</p>
  `;
  document.getElementById('comfort-popup').style.display = 'flex';
}

function closeComfortPopup() {
  document.getElementById('comfort-popup').style.display = 'none';
}

/* ══════════════════════════════════════════════
   BREATHING EXERCISE
   ══════════════════════════════════════════════ */
function startBreathing() {
  if (isBreathing) {
    isBreathing = false;
    clearInterval(breathingInterval);
    const circle = document.getElementById('breathing-circle');
    const text = document.getElementById('breathing-text');
    const btn = document.getElementById('breath-btn');
    circle.className = 'breathing-circle';
    text.textContent = 'Bắt đầu';
    btn.textContent = 'Bắt đầu thở cùng 🌸';
    return;
  }
  
  isBreathing = true;
  breathingPhase = 0;
  const btn = document.getElementById('breath-btn');
  btn.textContent = 'Dừng lại';
  
  const phases = [
    { label: 'Hít vào... 🌬️', class: 'inhale', duration: 4000 },
    { label: 'Giữ... ✨', class: 'hold', duration: 4000 },
    { label: 'Thở ra... 😌', class: 'exhale', duration: 4000 },
    { label: 'Nghỉ... 🌸', class: '', duration: 2000 },
  ];
  
  function runPhase() {
    if (!isBreathing) return;
    const phase = phases[breathingPhase % phases.length];
    const circle = document.getElementById('breathing-circle');
    const text = document.getElementById('breathing-text');
    circle.className = 'breathing-circle ' + phase.class;
    text.textContent = phase.label;
    breathingPhase++;
    breathingInterval = setTimeout(runPhase, phase.duration);
  }
  
  runPhase();
}

/* ══════════════════════════════════════════════
   FEELINGS
   ══════════════════════════════════════════════ */
function selectMood(btn) {
  document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  selectedMood = btn.dataset.mood;
}

function sendFeelings() {
  const input = document.getElementById('feelings-input');
  const text = input.value.trim();
  
  if (!text) {
    input.placeholder = 'Hãy viết điều gì đó nhé... Mít đang lắng nghe bạn 💜';
    input.style.borderColor = 'var(--pink)';
    setTimeout(() => { input.style.borderColor = 'var(--purple-1)'; }, 2000);
    return;
  }
  
  const mood = selectedMood || 'generic';
  const data = FEELING_RESPONSES[mood] || FEELING_GENERIC;
  const reply = data.replies[Math.floor(Math.random() * data.replies.length)];
  
  document.getElementById('reply-text').textContent = reply;
  document.getElementById('reply-suggest').innerHTML = data.suggest || '';
  document.getElementById('reply-note').textContent = data.note || '';
  
  const replyEl = document.getElementById('feelings-reply');
  replyEl.style.display = 'block';
  replyEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  
  // Float hearts
  floatHearts();
}

function floatHearts() {
  const hearts = ['💜','🌸','✨','💫','🤍'];
  for (let i = 0; i < 6; i++) {
    setTimeout(() => {
      const h = document.createElement('div');
      h.textContent = hearts[Math.floor(Math.random()*hearts.length)];
      h.style.cssText = `
        position: fixed;
        left: ${20 + Math.random()*60}%;
        bottom: 20%;
        font-size: ${18 + Math.random()*14}px;
        pointer-events: none;
        z-index: 999;
        animation: heartFloat 2s ease forwards;
      `;
      document.body.appendChild(h);
      setTimeout(() => h.remove(), 2200);
    }, i * 200);
  }
}

// Add heart float animation dynamically
const heartStyle = document.createElement('style');
heartStyle.textContent = `
  @keyframes heartFloat {
    0%   { transform: translateY(0) scale(1); opacity: 1; }
    100% { transform: translateY(-120px) scale(0.5); opacity: 0; }
  }
`;
document.head.appendChild(heartStyle);

/* ══════════════════════════════════════════════
   BLIND BOX
   ══════════════════════════════════════════════ */
function selectEmotion(el, type) {
  document.querySelectorAll('.emotion-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  selectedEmotion = type;
  
  const box = BLIND_BOXES[type];
  if (!box) return;
  
  document.getElementById('bbp-icon').textContent = box.icon;
  document.getElementById('bbp-title').textContent = box.title;
  document.getElementById('bbp-desc').textContent = box.desc;
  document.getElementById('bbp-contents').innerHTML = box.contents.map(c => `<span class="bbp-item">${c}</span>`).join('');
  
  const preview = document.getElementById('blind-box-preview');
  preview.style.display = 'block';
  preview.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function orderBlindBox() {
  if (!selectedEmotion) return;
  const box = BLIND_BOXES[selectedEmotion];
  // Create a mock plushie for payment
  currentPlushie = {
    id: 'blind-box',
    name: box.title,
    emoji: box.icon,
    image: null,
    price: '350.000 ₫',
    priceNum: 350000
  };
  
  document.getElementById('popup-plushie-info').innerHTML = `
    <div class="p-emoji">${box.icon}</div>
    <div>
      <div class="p-name">${box.title}</div>
      <div class="p-price">350.000 ₫</div>
    </div>
  `;
  
  document.getElementById('order-info').innerHTML = `
    🎁 Hộp: <strong>${box.title}</strong><br/>
    💰 Giá: <strong>350.000 ₫</strong><br/>
    📦 Nội dung: Bí mật (xem mô tả trên)<br/>
    ⏱️ Thời gian: 3–5 ngày làm việc
  `;
  
  showPayStep(1);
  document.getElementById('payment-popup').style.display = 'flex';
}

/* ══════════════════════════════════════════════
   COMFORT NOTIFICATION
   ══════════════════════════════════════════════ */
function showComfortNotif() {
  const notif = document.getElementById('comfort-notif');
  if (notif) {
    notif.style.display = 'flex';
    setTimeout(() => {
      if (notif) notif.style.opacity = '0';
      setTimeout(() => { if (notif) notif.style.display = 'none'; }, 500);
    }, 6000);
  }
}

/* ══════════════════════════════════════════════
   NAVBAR SCROLL EFFECT
   ══════════════════════════════════════════════ */
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  if (window.scrollY > 20) {
    nav.style.boxShadow = '0 4px 30px rgba(176,143,232,0.2)';
  } else {
    nav.style.boxShadow = '0 2px 20px rgba(176,143,232,0.12)';
  }
}, { passive: true });

/* ══════════════════════════════════════════════
   KEYBOARD
   ══════════════════════════════════════════════ */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.getElementById('payment-popup').style.display = 'none';
    document.getElementById('comfort-popup').style.display = 'none';
  }
});