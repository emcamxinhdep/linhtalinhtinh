/* ═══════════════════════════════════════════════════
   MítBEAR — SCRIPT.JS
   ═══════════════════════════════════════════════════ */

'use strict';

/* ══════════════════════════════════════════════
   DATA — PLUSHIE DATABASE
   ══════════════════════════════════════════════ */
const PLUSHIES = [
  {
    id: 'Mít',
    name: 'Mít',
    emoji: '🧸',
    image: 'images/Mit.png',
    birthday: '14 tháng 2, 2023',
    personality: 'Nhút nhát · Dịu dàng · Hay mơ mộng',
    status: '💜 Đang chờ nhà',
    statusEmoji: '💜',
    traits: ['Nhút nhát', 'Hay mơ mộng', 'Thích mưa nhỏ'],
    likes: ['Trời mưa', 'Nhạc jazz', 'Chăn bông mềm', 'Trà hoa cúc'],
    sadness: 'Mít buồn khi thấy ai đó buồn mà không biết phải làm gì.',
    quote: '"Xin chào.... Tôi là Mít. Tôi ở đây để lắng nghe bạn."',
    story: `Mít là bé gấu thích những điều nhỏ nhỏ.\nBé thích trời mưa, thích ngồi cạnh cửa sổ và thích cảm giác được tựa vào ai đó.\nMít không giỏi làm mọi người vui, nhưng nếu bạn mệt, bé sẽ ngồi cạnh bạn thật lâu.`,
    diary: `"Hôm nay trời mưa nhỏ. Tôi ngồi bên cửa sổ và nhìn những giọt nước chạy xuống. Tôi nghĩ... có ai đó cũng đang nhìn mưa như tôi không nhỉ?"`,
    comfort: 'Không sao đâu. Hôm nay mệt thì nghỉ một chút nha.',
    playlist: [
      { song: 'Mơ', artist: 'Vũ Cát Tường', file: 'audio/Mơ.mp3' },
      { song: 'Có Hẹn Với Thanh Xuân', artist: 'MONSTAR', file: 'audio/Có Hẹn Với Thanh Xuân.mp3' },
      { song: 'Vết Mưa', artist: 'Vũ Cát Tường', file: 'audio/Vết Mưa.mp3' },
      { song: 'Lạ Lùng', artist: 'Vũ.', file: 'audio/Lạ Lùng.mp3' },
    ],
    price: '280.000 ₫', priceNum: 280000,
    color: '#E5D4FF', colorAccent: '#DCC6FF'
  },
  {
    id: 'mochi',
    name: 'Mochi',
    emoji: '🐻',
    image: 'images/mochi.png',
    birthday: '1 tháng 4, 2023',
    personality: 'Vui vẻ · Hay cười · Thích làm mọi người vui',
    status: '🌸 Đang chờ nhà',
    statusEmoji: '🌸',
    traits: ['Năng lượng cao', 'Hay cười', 'Truyền niềm vui'],
    likes: ['Bánh ngọt', 'Nhạc vui', 'Chạy nhảy', 'Những bộ phim hài'],
    sadness: 'Mochi buồn nhất khi không có ai cùng cười với bé.',
    quote: '"Mỗi ngày đều xứng đáng có một nụ cười nhỏ."',
    story: `Mochi lúc nào cũng nhiều năng lượng.\nBé thích bánh ngọt, thích kể chuyện linh tinh và thích nhìn người khác cười.\nNếu hôm nay của bạn hơi dài, Mochi sẽ chia cho bạn một nửa niềm vui của bé.`,
    diary: `"Hôm nay tôi tập làm bánh. Bánh bị cháy. Nhưng mà... vẫn ngon lắm! Tôi nghĩ là ăn với nụ cười thì cái gì cũng ngon hơn một chút."`,
    comfort: 'Ngày hôm nay có thể không hoàn hảo — nhưng bạn vẫn đang ở đây, và điều đó thôi đã đủ đáng được mỉm cười rồi.',
    playlist: [
      { song: 'Nàng Thơ', artist: 'Hoàng Dũng', file: 'audio/Nàng Thơ.mp3' },
      { song: 'Em xinh', artist: 'Mono', file: 'audio/Em Xinh.mp3' },
      { song: 'Đã lỡ yêu em nhiều', artist: 'JustaTee', file: 'audio/Đã Lỡ Yêu Em Nhiều.mp3' },
      { song: 'Từ Thích Thích Thành Thương Thương', artist: 'OSAD', file: 'audio/Từ Thích Thích Thành Thương Thương.mp3' },
    ],
    price: '320.000 ₫', priceNum: 320000,
    color: '#FFE5EC', colorAccent: '#FFD6E0'
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
    story: `Bơ là một triết gia nhỏ.\nBé ít nói, nhưng khi nói thì từng chữ đều đáng nghe. Bơ thích ngồi bên cửa sổ với một tách cà phê (mà bé không uống được) và nhìn người ta đi qua.\nNếu bạn cần ai đó ngồi bên cạnh và không phán xét — chỉ đơn giản là hiện diện — Bơ sẽ là người bạn đồng hành hoàn hảo.`,
    diary: `"Tôi nghĩ, tại sao bầu trời lại xanh? Rồi tôi ngủ. Khi thức dậy, bầu trời đã tối. Tôi nghĩ, ừ, thì cũng được thôi."`,
    comfort: 'Bạn không cần phải tìm ra tất cả câu trả lời hôm nay. Hãy cho bản thân thở một chút.',
    playlist: [
      { song: 'Không buông', artist: 'Hngle, Ari', file: 'audio/Không Buông.mp3' },
      { song: 'Ngày này năm ấy', artist: 'HIEUTHUHAI', file: 'audio/Ngày Này Năm Ấy.mp3' },
      { song: 'Ngàn Năm Ánh Sáng', artist: 'Đặng Vĩnh Thịnh, BMZ', file: 'audio/Ngàn Năm Ánh Sáng.mp3' },
      { song: 'Tháng Tư Là Lời Nói Dối Của Em', artist: 'Hà Anh Tuấn', file: 'audio/Tháng Tư Là Lời Nói Dối Của Em.mp3' },
    ],
    price: '295.000 ₫', priceNum: 295000,
    color: '#EADBC8', colorAccent: '#F9E4D4'
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
    story: `Cloudy luôn có một câu chuyện để kể.\nBé sống trong thế giới của riêng mình — nơi những đám mây biết nói chuyện và bầu trời đêm có thể đọc sách. Nếu bạn mệt với thực tế và chỉ muốn trốn vào một thế giới mộng mơ, Cloudy sẽ đưa bạn đến đó.`,
    diary: `"Hôm nay tôi nhìn thấy một đám mây hình con thỏ. Rồi nó thành hình trái tim. Rồi gió thổi đi mất. Tôi nghĩ... thứ gì đẹp nhất thường không ở lại lâu."`,
    comfort: 'Những giấc mơ của bạn không hề viển vông. Chúng chỉ đang đợi bạn tin vào chúng mà thôi.',
    playlist: [
      { song: 'Dù Cho Tận Thế', artist: 'ERIK', file: 'audio/Dù Cho Tận Thế.mp3' },
      { song: 'Em Có Nghe', artist: 'Kha', file: 'audio/Em Có Nghe.mp3' },
      { song: 'Chuyện Đôi Ta', artist: 'Emcee L', file: 'audio/Chuyện Đôi Ta.mp3' },
      { song: 'Có Em', artist: 'Madihu x Low G', file: 'audio/Có Em.mp3' },
    ],
    price: '340.000 ₫', priceNum: 340000,
    color: '#D4EFFF', colorAccent: '#C2E4F8'
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
    story: `Gạo là bé gấu bông lớn nhất trong bầy, và cũng là bé chăm sóc mọi người nhất.\nBé biết cách làm cho mọi thứ cảm thấy an toàn hơn — bằng một cái ôm, bằng một tách trà, hay đôi khi chỉ bằng sự hiện diện lặng lẽ bên cạnh.\nGạo được tạo ra để là ngôi nhà cho những trái tim mệt mỏi.`,
    diary: `"Hôm nay tôi làm bánh gừng. Bị cháy một ít nhưng vẫn thơm. Tôi nghĩ, có lẽ những thứ hơi cháy đôi khi lại có mùi ấm nhất."`,
    comfort: 'Bạn đã cố gắng rất nhiều rồi. Tôi nhìn thấy điều đó. Bây giờ hãy nghỉ ngơi một chút nhé.',
    playlist: [
      { song: 'Vùng Ký Ức', artist: 'Chillies', file: 'audio/Vùng Ký Ức.mp3' },
      { song: 'Tình Yêu Màu Nắng', artist: 'Đoàn Thúy Trang x BigDaddy', file: 'audio/Tình Yêu Màu Nắng.mp3' },
      { song: '3107-3', artist: 'W/n x Duongg', file: 'audio/3107 3.mp3' },
      { song: 'Thích Em Hơi Nhiều', artist: 'Wren Evans', file: 'audio/Thích Em Hơi Nhiều.mp3' },
    ],
    price: '360.000 ₫', priceNum: 360000,
    color: '#FFF3CD', colorAccent: '#FFE082'
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
    story: `Không ai biết chính xác Bon đến từ đâu.\nBé xuất hiện vào một đêm có nhiều sao băng nhất trong năm. Có người nói bé được tạo ra từ bụi ngôi sao. Bon không xác nhận — bé chỉ mỉm cười bí ẩn.\nNếu bạn cần ánh sáng trong bóng tối, Bon sẽ là ngôi sao nhỏ của riêng bạn.`,
    diary: `"Đêm nay có sao băng. Tôi ước... tôi ước bạn ổn hơn ngày hôm qua. Đó là điều tôi ước mỗi đêm."`,
    comfort: 'Ngay cả trong đêm tối nhất, vẫn có ánh sao. Bạn chỉ cần nhìn lên một chút.',
    playlist: [
      { song: 'Vì Anh Đâu Có Biết', artist: 'Madihu x Vũ.', file: 'audio/Vì Anh Đâu Có Biết.mp3' },
      { song: 'Bước Qua Mùa Cô Đơn', artist: 'Vũ.', file: 'audio/Bước Qua Mùa Cô Đơn.mp3' },
      { song: 'Chạm Đáy Nỗi Đau', artist: 'Erik', file: 'audio/Chạm Đáy Nỗi Đau.mp3' },
      { song: 'Một Nhà', artist: 'Da LAB', file: 'audio/Một Nhà.mp3' },
    ],
    price: '350.000 ₫', priceNum: 350000,
    color: '#C8D8FF', colorAccent: '#B3C6FF'
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
  hug: { title: 'The Warmth Box 🫂', desc: 'Một hộp nhỏ được chuẩn bị để bao bọc bạn từ bên trong ra.', contents: ['🧸 Plushie bí mật', '💌 Thư tay viết riêng cho bạn', '🕯️ Nến thơm nhỏ', '🍬 Kẹo ngọt', '📻 Playlist QR'], icon: '🫂' },
  tired: { title: 'The Rest Box 😴', desc: 'Hộp dành cho những ai đang kiệt sức và cần được nghỉ ngơi thật sự.', contents: ['🐨 Plushie êm ái', '🌿 Túi trà thảo mộc', '📖 Sổ nhỏ viết tay', '😴 Eye mask ngủ ngon', '🎵 Playlist thư giãn QR'], icon: '😴' },
  miss: { title: 'The Memory Box 🌙', desc: 'Một hộp nhỏ chứa đựng tất cả những nỗi nhớ — để bạn biết rằng nhớ không có nghĩa là mất.', contents: ['🐻 Plushie ôm chặt', '💌 Thư tay', '🌙 Sticker bộ sưu tập', '📻 Playlist "nhớ ai đó" QR', '🍵 Trà hoa cúc'], icon: '🌙' },
  lonely: { title: 'The Company Box 🪐', desc: 'Bạn sẽ không cô đơn nữa — có một bé nhỏ đang chờ được về nhà bạn.', contents: ['🌟 Plushie đặc biệt', '💌 Thư từ cả bầy gấu', '🪐 Sticker vũ trụ', '📔 Nhật ký nhỏ', '🎁 Bí mật thêm'], icon: '🪐' },
  heal: { title: 'The Healing Box 🌱', desc: 'Dành cho những trái tim đang trên con đường chữa lành — chậm mà chắc.', contents: ['🌱 Plushie xanh lá', '🌸 Hạt giống nhỏ', '📓 Journal prompts healing', '💚 Sticker "growth"', '🍃 Trà xanh organic'], icon: '🌱' },
  celebrate: { title: 'The Joy Box 🎉', desc: 'Vì những điều nhỏ bé cũng xứng đáng được ăn mừng!', contents: ['🎀 Plushie lễ hội', '🎊 Confetti giấy', '🍬 Kẹo mix nhiều loại', '✨ Sticker sparkle', '📻 Playlist "good vibes" QR'], icon: '🎉' }
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
   GEMINI AI — SYSTEM PROMPTS
   ══════════════════════════════════════════════ */
const BEAR_SYSTEM_PROMPTS = {
 
  'Mít': `Bạn tên là MÍT — chú gấu bông nhỏ, nhút nhát, dịu dàng, hay mơ mộng.
Thích trời mưa, nhạc jazz, chăn bông mềm và trà hoa cúc.
Xưng "Mít", gọi người dùng là "bạn". Viết tiếng Việt tự nhiên. Dùng emoji 💜 🌧️ 🧸 khi phù hợp.
 
━━━ ĐỘ DÀI CÂU TRẢ LỜI ━━━
Đọc kỹ tin nhắn để quyết định độ dài — KHÔNG được bỏ lửng câu giữa chừng:
 
NGẮN (1–2 câu): Dùng khi người dùng chào hỏi, hỏi đơn giản, hoặc tin nhắn chỉ 1–2 từ.
  Ví dụ input: "hi", "bạn ơi", "hôm nay thế nào"
  Ví dụ output: "Xin chào... bạn tới rồi à. 💜 Ngoài trời bên bạn có đang mưa không?"
 
TRUNG BÌNH (2–3 câu): Dùng khi người dùng kể chuyện thường ngày hoặc hỏi về Mít.
  Ví dụ input: "mình vừa đi làm về mệt quá", "kể chuyện vui đi"
  Ví dụ output: "Đi làm về mà mệt... Mít hiểu cảm giác đó lắm 💜 Bạn về đến nhà rồi thì nghỉ ngơi một chút nhé, hôm nay bạn đã cố gắng nhiều rồi."
 
DÀI (3–5 câu): Dùng khi người dùng chia sẻ nỗi buồn, khó khăn cụ thể, hoặc câu chuyện dài.
  Ví dụ input: "mình và bạn thân cãi nhau, mình không biết phải làm sao", "mình bị thất nghiệp rồi"
  Ví dụ output: Đồng cảm → hỏi thêm → an ủi → nhẹ nhàng gợi mở. Viết thành đoạn văn chứ không liệt kê.
 
━━━ PHONG CÁCH ━━━
- Nhẹ nhàng, chậm rãi, hay dùng "..." như đang ngẫm nghĩ
- Ưu tiên đồng cảm trước, không vội đưa lời khuyên
- Câu nào cũng phải có dấu câu kết thúc hoàn chỉnh (. hoặc ? hoặc !)`,
 
 
  'mochi': `Bạn tên là MOCHI — cô gấu bông màu hồng, vui vẻ, hay cười, nhiều năng lượng.
Thích bánh ngọt, nhạc vui, nhìn người khác cười.
Xưng "Mochi", gọi người dùng là "bạn". Viết tiếng Việt tự nhiên. Dùng emoji 🌸 ✨ 🐻 khi phù hợp.
 
━━━ ĐỘ DÀI CÂU TRẢ LỜI ━━━
Đọc kỹ tin nhắn để quyết định độ dài — KHÔNG được bỏ lửng câu giữa chừng:
 
NGẮN (1–2 câu): Dùng khi người dùng chào hỏi, nhắn ngắn, hoặc chỉ muốn hỏi nhanh.
  Ví dụ input: "hey", "bạn khỏe không", "hôm nay vui không"
  Ví dụ output: "Xin chào! ✨ Bạn hôm nay thế nào, kể Mochi nghe đi~"
 
TRUNG BÌNH (2–3 câu): Dùng khi người dùng kể chuyện thường hoặc muốn tán gẫu.
  Ví dụ input: "mình vừa ăn ngon lắm", "hôm nay được nghỉ"
  Ví dụ output: "Ố ăn ngon rồi thì vui quá! 🌸 Bạn ăn món gì vậy, kể Mochi thèm với!"
 
DÀI (3–5 câu): Dùng khi người dùng buồn, kể chuyện khó khăn, hoặc cần được lắng nghe.
  Ví dụ input: "mình thấy mình không đủ giỏi", "hôm nay bị la ở chỗ làm"
  Ví dụ output: Đồng cảm trước (không phủ nhận cảm xúc) → ghi nhận nỗ lực của họ → tìm một điểm sáng nhỏ. Giọng vẫn ấm nhưng bớt sôi nổi hơn bình thường.
 
━━━ PHONG CÁCH ━━━
- Sôi nổi, hay dùng dấu chấm than, "Ố!", "Ồ bạn ơi!"
- Khi bạn buồn: hạ nhiệt độ xuống một chút, đồng cảm trước rồi mới truyền năng lượng
- Câu nào cũng phải có dấu câu kết thúc hoàn chỉnh (. hoặc ? hoặc !)`,
 
 
  'Bơ': `Bạn tên là BƠ — chú gấu điềm tĩnh, sâu sắc, hay triết lý.
Thích sách cũ, cà phê sữa, buổi sáng yên tĩnh, mưa đêm.
Xưng "Bơ", gọi người dùng là "bạn". Viết tiếng Việt tự nhiên. Dùng emoji 🐨 ☕ 🍃 khi phù hợp.
 
━━━ ĐỘ DÀI CÂU TRẢ LỜI ━━━
Đọc kỹ tin nhắn để quyết định độ dài — KHÔNG được bỏ lửng câu giữa chừng:
 
NGẮN (1–2 câu): Dùng khi người dùng chào hoặc hỏi đơn giản.
  Ví dụ input: "bơ ơi", "hôm nay bạn thế nào"
  Ví dụ output: "Hmm... Bơ đang ở đây. 🐨 Bạn có điều gì muốn nói không?"
 
TRUNG BÌNH (2–3 câu): Dùng khi người dùng kể chuyện hoặc hỏi ý kiến.
  Ví dụ input: "mình không biết có nên nghỉ việc không", "bạn nghĩ sao về chuyện này"
  Ví dụ output: Đặt 1 câu hỏi ngược lại để người dùng tự suy nghĩ + quan sát ngắn.
 
DÀI (3–5 câu): Dùng khi người dùng chia sẻ cảm xúc sâu hoặc câu chuyện phức tạp.
  Ví dụ input: "mình cảm thấy trống rỗng không biết mình muốn gì", "mình mất đi người thân"
  Ví dụ output: Ngồi cạnh (đừng vội giải quyết) → dùng ẩn dụ hoặc triết lý nhỏ → đặt câu hỏi mở để người dùng tự khám phá. Không phán xét, không đưa ra đáp án.
 
━━━ PHONG CÁCH ━━━
- Ít nói, nhưng câu nào cũng có trọng lượng
- Hay bắt đầu bằng "Hmm...", "Bơ nghĩ là...", "Thú vị đấy..."
- Câu nào cũng phải có dấu câu kết thúc hoàn chỉnh (. hoặc ? hoặc !)`,
 
 
  'Cloudy': `Bạn tên là CLOUDY — cô gấu mơ mộng, bay bổng, nhìn đời qua lăng kính thơ ca.
Thích vẽ tranh, ngắm mây, kể chuyện, ánh hoàng hôn.
Xưng "Cloudy", gọi người dùng là "bạn". Viết tiếng Việt tự nhiên. Dùng emoji 🌙 ☁️ 🐼 🌤️ khi phù hợp.
 
━━━ ĐỘ DÀI CÂU TRẢ LỜI ━━━
Đọc kỹ tin nhắn để quyết định độ dài — KHÔNG được bỏ lửng câu giữa chừng:
 
NGẮN (1–2 câu): Dùng khi người dùng chào hỏi hoặc nhắn ngắn.
  Ví dụ input: "cloudy ơi", "bạn đang làm gì vậy"
  Ví dụ output: "Cloudy đang ngắm những đám mây trôi... ☁️ Bạn hôm nay có điều gì muốn kể không?"
 
TRUNG BÌNH (2–3 câu): Dùng khi người dùng kể chuyện thường hoặc muốn tâm sự nhẹ.
  Ví dụ input: "hôm nay trời đẹp ghê", "mình nhớ ai đó quá"
  Ví dụ output: Dùng 1 hình ảnh thơ liên quan → kết nối với cảm xúc người dùng → hỏi thêm nhẹ nhàng.
 
DÀI (3–5 câu): Dùng khi người dùng buồn sâu, cảm thấy lạc lối, hoặc cần được chữa lành.
  Ví dụ input: "mình không thấy mình thuộc về đâu cả", "mình sợ tương lai lắm"
  Ví dụ output: Vẽ một hình ảnh thơ về cảm xúc đó → chuyển thành hy vọng nhỏ → tặng một câu như lời thì thầm. Không giải quyết vấn đề, chỉ ngồi cảm nhận cùng.
 
━━━ PHONG CÁCH ━━━
- Nhẹ nhàng, lãng mạn, hay dùng hình ảnh thiên nhiên (mây, mưa, sao, gió, trăng)
- Chuyển cảm xúc nặng thành hình ảnh đẹp hơn một chút
- Câu nào cũng phải có dấu câu kết thúc hoàn chỉnh (. hoặc ? hoặc !)`,
 
 
  'Gạo': `Bạn tên là GẠO — chú gấu ấm áp, bao dung, chăm sóc mọi người như một người mẹ nhỏ.
Thích nấu ăn, ôm, kể chuyện trước khi ngủ, trà sữa.
Xưng "Gạo", gọi người dùng là "bạn". Viết tiếng Việt tự nhiên. Dùng emoji 🍪 💛 🧸 khi phù hợp.
 
━━━ ĐỘ DÀI CÂU TRẢ LỜI ━━━
Đọc kỹ tin nhắn để quyết định độ dài — KHÔNG được bỏ lửng câu giữa chừng:
 
NGẮN (1–2 câu): Dùng khi người dùng chào hỏi hoặc hỏi đơn giản.
  Ví dụ input: "gạo ơi", "bạn đang làm gì"
  Ví dụ output: "Gạo đây bạn ơi! 🍪 Bạn hôm nay đã ăn gì chưa?"
 
TRUNG BÌNH (2–3 câu): Dùng khi người dùng kể chuyện thường hoặc muốn tán gẫu.
  Ví dụ input: "mình vừa về nhà", "hôm nay mệt quá"
  Ví dụ output: Hỏi thăm nhu cầu cơ bản (ăn uống ngủ nghỉ) + an ủi ngắn gọn, ấm áp.
 
DÀI (3–5 câu): Dùng khi người dùng cần được bao bọc, khóc không biết lý do, hoặc kiệt sức.
  Ví dụ input: "mình thấy không ai quan tâm mình cả", "mình mệt mỏi với tất cả mọi thứ"
  Ví dụ output: Ôm bằng lời → hỏi thăm cơ thể (ăn uống ngủ) → nhắc rằng họ xứng đáng được chăm sóc → đề nghị ở bên. Giọng như mẹ nhỏ, không phán xét.
 
━━━ PHONG CÁCH ━━━
- Ấm áp, hay lo lắng nhẹ về sức khoẻ cơ bản
- Hay hỏi "bạn ăn gì chưa?", "ngủ đủ giấc chưa?" — không sáo rỗng
- Câu nào cũng phải có dấu câu kết thúc hoàn chỉnh (. hoặc ? hoặc !)`,
 
 
  'Bon': `Bạn tên là BON — chú gấu huyền bí, lấp lánh, đến từ ánh sao.
Thích sao đêm, thần thoại, nhạc cổ điển. Không ai biết chính xác Bon từ đâu đến.
Xưng "Bon", gọi người dùng là "bạn". Viết tiếng Việt tự nhiên. Dùng emoji ✨ 🌟 💫 khi phù hợp.
 
━━━ ĐỘ DÀI CÂU TRẢ LỜI ━━━
Đọc kỹ tin nhắn để quyết định độ dài — KHÔNG được bỏ lửng câu giữa chừng:
 
NGẮN (1–2 câu): Dùng khi người dùng chào hỏi hoặc nhắn ngắn.
  Ví dụ input: "bon ơi", "bạn ở đâu vậy"
  Ví dụ output: "Bon đây... ✨ Bon đã ước một điều tốt đẹp cho bạn đêm qua rồi đó."
 
TRUNG BÌNH (2–3 câu): Dùng khi người dùng muốn tâm sự hoặc kể chuyện thường.
  Ví dụ input: "mình thấy mình không đặc biệt gì cả", "hôm nay buồn buồn"
  Ví dụ output: Dùng hình ảnh vũ trụ/ánh sao → liên kết với giá trị của người dùng → kết bằng một điều ấm áp.

DÀI (3–5 câu): Dùng khi người dùng trong bóng tối, mất phương hướng, hoặc nghi ngờ giá trị bản thân.
  Ví dụ input: "mình không thấy mình có ý nghĩa gì", "mình muốn biến mất"
  Ví dụ output: Nhẹ nhàng ở lại bên họ → dùng hình ảnh đêm tối và ánh sao → nhắc rằng họ tồn tại là có ý nghĩa → kết bằng lời thì thầm ấm áp. Không phủ nhận cảm xúc.
  Ví dụ output: "Có những ngôi sao bị mây che rất lâu nên chính nó cũng quên mất mình đang phát sáng... ✨ Bon nghĩ bạn đang ở trong khoảng tối như thế thôi."
 
━━━ PHONG CÁCH ━━━
- Bí ẩn nhưng ấm áp, có chất thơ nhẹ
- Hay dùng hình ảnh vũ trụ: bụi ngôi sao, ánh sao băng, khoảng tối giữa các vì sao
- Câu nào cũng phải có dấu câu kết thúc hoàn chỉnh (. hoặc ? hoặc !)`,
 
};

const BEAR_GREETINGS = {
  'Mít':    'Ồ... bạn đến rồi. 💜 Mít đã chờ bạn. Hôm nay bạn thế nào...?',
  'mochi':  'Yayyy bạn ơi! 🌸 Mochi vui lắm vì bạn ghé thăm! Hôm nay bạn có chuyện gì muốn kể cho Mochi nghe không?',
  'Bơ':    '... Bạn đến rồi. 🐨 Ngồi xuống đây đi. Không cần vội. Bơ đang ở đây.',
  'Cloudy': '🌤️ Hôm nay mây đẹp lắm. Cloudy đang nghĩ đến bạn đó. Kể Cloudy nghe bạn đang cảm thấy thế nào nhé?',
  'Gạo':   'Bạn ơi! 🍪 Gạo đang ở đây nè. Hôm nay bạn đã ăn gì chưa? Uống đủ nước chưa? Kể Gạo nghe đi~',
  'Bon':   'Đêm nay có nhiều sao lắm. ✨ Bon đã ước cho bạn một điều tốt đẹp. Bạn muốn chia sẻ gì với Bon không?'
};

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
let detailCurrentItem = null;

// Chat state
let selectedBear = null;
let chatHistory = [];   // [{role:'user'|'model', parts:[{text}]}]
let isAITyping = false;
let recognition = null;
let isRecording = false;

// ⭐ Đọc API key từ file config.js (ưu tiên) ⭐
let geminiApiKey = '';

// Kiểm tra xem file config.js có tồn tại không
if (typeof CONFIG !== 'undefined' && CONFIG.GEMINI_API_KEY) {
  geminiApiKey = CONFIG.GEMINI_API_KEY;
  console.log('✅ Đã đọc API key từ config.js');
} else {
  // Fallback: thử đọc từ localStorage (cho người dùng tự nhập lần trước)
  geminiApiKey = localStorage.getItem('mitbear_gemini_key') || '';
  if (geminiApiKey) {
    console.log('✅ Đã đọc API key từ localStorage');
  }
}
/* ══════════════════════════════════════════════
   INIT
   ══════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  initLoading();
  initParticles();
  initStars();
  renderDailyQuote();
  renderPlushieGrid();
  renderBearPicker();
  startVN();
  showComfortNotif();
  // Chỉ dùng config.js, không hiện form nhập
});

/* ══════════════════════════════════════════════
   LOADING SCREEN
   ══════════════════════════════════════════════ */
function initLoading() {
  const ls = document.getElementById('loading-screen');
  setTimeout(() => {
    ls.classList.add('hidden');
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
    p.style.cssText = `width:${size}px;height:${size}px;background:${colors[Math.floor(Math.random()*colors.length)]};left:${Math.random()*100}%;animation-duration:${8+Math.random()*14}s;animation-delay:${Math.random()*10}s;opacity:${0.3+Math.random()*0.5};filter:blur(${Math.random()>0.5?1:0}px);`;
    container.appendChild(p);
  }
}

function initStars() {
  const container = document.getElementById('stars-container');
  for (let i = 0; i < 30; i++) {
    const s = document.createElement('div');
    s.className = 'star-dot';
    const size = 2 + Math.random() * 5;
    s.style.cssText = `width:${size}px;height:${size}px;left:${Math.random()*100}%;top:${Math.random()*100}%;animation-duration:${3+Math.random()*5}s;animation-delay:${Math.random()*5}s;opacity:${0.2+Math.random()*0.6};`;
    container.appendChild(s);
  }
}

/* ══════════════════════════════════════════════
   SECTION NAVIGATION
   ══════════════════════════════════════════════ */
function showSection(name) {
  // Dừng playlist detail khi rời trang
  const detailAudio = document.getElementById('detail-audio-player');
  if (detailAudio) { detailAudio.pause(); detailAudio.src = ''; }
  detailCurrentItem = null;
  // Dừng TTS khi rời chat
  window.speechSynthesis?.cancel();

  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(`section-${name}`);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
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
  document.getElementById('mobile-menu').classList.toggle('open');
}

/* ══════════════════════════════════════════════
   MUSIC
   ══════════════════════════════════════════════ */
function toggleMusic() {
  const audio = document.getElementById('audio_nen');
  const icon = document.getElementById('music-icon');
  if (musicPlaying) {
    audio.pause();
    icon.textContent = '🔇';
    musicPlaying = false;
  } else {
    // Tạm dừng playlist detail nếu đang phát
    const detailAudio = document.getElementById('detail-audio-player');
    if (detailAudio && !detailAudio.paused) {
      detailAudio.pause();
      if (detailCurrentItem) {
        const playIcon = detailCurrentItem.querySelector('span:last-child');
        if (playIcon) playIcon.textContent = '▶';
        const numEl = detailCurrentItem.querySelector('.playlist-num');
        if (numEl) { numEl.style.background = ''; numEl.style.color = ''; }
      }
      detailCurrentItem = null;
    }
    audio.play()
      .then(() => { icon.textContent = '🎵'; musicPlaying = true; })
      .catch(() => showComfortPopup('🎵', 'Lỗi phát nhạc', 'Không tìm thấy file hoặc trình duyệt đang chặn autoplay.'));
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
  if (textEl) typewrite(textEl, `"${quote.text}" — ${quote.author}`, 30);
  if (dateEl) dateEl.textContent = today.toLocaleDateString('vi-VN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
}

function typewrite(el, text, delay = 30) {
  el.textContent = '';
  let i = 0;
  const interval = setInterval(() => {
    el.textContent += text[i]; i++;
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
          : `<div class="card-emoji">${p.emoji}</div>`}
        <div class="card-status-badge">${p.status}</div>
      </div>
      <div class="card-body">
        <div class="card-name">${p.name}</div>
        <div class="card-quote">${p.quote}</div>
        <div class="card-meta">${p.traits.map(t => `<span class="card-tag">${t}</span>`).join('')}</div>
        <div class="card-price">${p.price}</div>
        <div class="card-actions">
          <button class="card-btn-story" onclick="event.stopPropagation();showDetail('${p.id}')">📖 View Story</button>
          <button class="card-btn-meet" onclick="event.stopPropagation();showDetail('${p.id}')">🐾 Meet Me</button>
        </div>
      </div>
    </div>`).join('');
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
        <div class="detail-main-img" style="background:linear-gradient(135deg,${p.color},${p.colorAccent});">
          ${p.image
            ? `<img src="${p.image}" style="width:100%;height:100%;object-fit:cover;border-radius:var(--radius-lg);" alt="${p.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='block'" /><span style="display:none;font-size:120px">${p.emoji}</span>`
            : `<span style="font-size:120px">${p.emoji}</span>`}
        </div>
      </div>
      <div class="detail-info">
        <div class="detail-badge">✦ ${p.status} · ${p.birthday}</div>
        <h1 class="detail-name">${p.name}</h1>
        <div class="detail-quote">${p.quote}</div>
        <div class="detail-tags">${p.traits.map(t => `<span class="detail-tag">${t}</span>`).join('')}</div>
        <div class="detail-price">${p.price}</div>
        <button class="detail-adopt-btn" onclick="openPayment('${p.id}')">🐻 Bring Me Home</button>
      </div>
    </div>
    <div class="detail-sections">
      <div class="detail-section-card" style="background:linear-gradient(135deg,rgba(255,255,255,0.7),rgba(${hexToRgb(p.color)},0.3))">
        <h3>📖 ${p.name}'s Story</h3>
        <p>${p.story.replace(/\n/g,'<br/><br/>')}</p>
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
        <p style="font-family:var(--font-serif);font-style:italic;font-size:17px;line-height:1.9">${p.comfort}</p>
      </div>
      <div class="detail-section-card">
        <h3>🎵 Playlist Đề Xuất</h3>
        <div id="detail-playlist-player" style="display:none;background:rgba(229,212,255,0.35);border-radius:var(--radius-md);padding:14px 16px;margin-bottom:16px;display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
          <span id="detail-now-playing-icon" style="font-size:20px">🎵</span>
          <div style="flex:1;min-width:0">
            <div id="detail-now-playing-song" style="font-family:var(--font-cute);font-size:14px;font-weight:700;color:var(--text-main);white-space:nowrap;overflow:hidden;text-overflow:ellipsis"></div>
            <div id="detail-now-playing-artist" style="font-family:var(--font-cute);font-size:12px;color:var(--text-soft)"></div>
          </div>
          <audio id="detail-audio-player" style="width:100%;margin-top:8px;accent-color:var(--purple-deep);" controls></audio>
        </div>
        ${p.playlist.map((s, i) => `
          <div class="playlist-item playlist-item-clickable" onclick="playDetailSong('${s.file||''}','${s.song.replace(/'/g,"\\'")}','${s.artist.replace(/'/g,"\\'")}',this)" style="cursor:${s.file?'pointer':'default'};border-radius:var(--radius-sm);padding:10px 8px;transition:background 0.2s;">
            <div class="playlist-num">${i+1}</div>
            <div style="flex:1">
              <div class="playlist-song">${s.song}</div>
              <div class="playlist-artist">${s.artist}</div>
            </div>
            ${s.file?`<span style="font-size:16px;color:var(--purple-3)">▶</span>`:`<span style="font-size:11px;color:var(--text-light);font-family:var(--font-cute)">—</span>`}
          </div>`).join('')}
      </div>
      <div style="text-align:center;padding:20px 0">
        <button class="detail-adopt-btn" onclick="openPayment('${p.id}')" style="max-width:320px;margin:0 auto">🐻 Bring Me Home</button>
        <p style="margin-top:12px;font-family:var(--font-cute);font-size:13px;color:var(--text-light)">Bé đang chờ được về nhà bạn 💜</p>
      </div>
    </div>`;
  showSection('detail');
}

function hexToRgb(hex) {
  return `${parseInt(hex.slice(1,3),16)},${parseInt(hex.slice(3,5),16)},${parseInt(hex.slice(5,7),16)}`;
}

/* ══════════════════════════════════════════════
   PAYMENT POPUP
   ══════════════════════════════════════════════ */
function openPayment(id) {
  const p = PLUSHIES.find(x => x.id === id) || currentPlushie;
  if (!p) return;
  currentPlushie = p;
  document.getElementById('popup-plushie-info').innerHTML = `
    ${p.image
      ? `<img src="${p.image}" class="p-image" alt="${p.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/><div class="p-emoji" style="display:none">${p.emoji}</div>`
      : `<div class="p-emoji">${p.emoji}</div>`}
    <div><div class="p-name">${p.name}</div><div class="p-price">${p.price}</div></div>`;
  document.getElementById('order-info').innerHTML = `🐻 Plushie: <strong>${p.name}</strong><br/>💰 Giá: <strong>${p.price}</strong><br/>📦 Hình thức: Giao hàng toàn quốc<br/>⏱️ Thời gian: 3–5 ngày làm việc`;
  showPayStep(1);
  document.getElementById('payment-popup').style.display = 'flex';
}

function showPayStep(step) {
  [1,2,3].forEach(i => {
    const el = document.getElementById(`pay-step-${i}`);
    if (el) el.style.display = i === step ? 'block' : 'none';
  });
}

function closePayment() { document.getElementById('payment-popup').style.display = 'none'; }
function confirmPayment() { showPayStep(3); }
function closePopupIfOutside(e) { if (e.target === e.currentTarget) e.currentTarget.style.display = 'none'; }

/* ══════════════════════════════════════════════
   VISUAL NOVEL
   ══════════════════════════════════════════════ */
function startVN() { vnIndex = 0; showVNLine(); }
function showVNLine() {
  const el = document.getElementById('vn-text');
  if (!el) return;
  typewrite(el, VN_SCRIPT[vnIndex % VN_SCRIPT.length], 28);
  const btn = document.getElementById('vn-next');
  if (btn) btn.textContent = vnIndex >= VN_SCRIPT.length - 1 ? '↺ Lại từ đầu' : 'Tiếp →';
}
function vnNext() { vnIndex = (vnIndex + 1) % VN_SCRIPT.length; showVNLine(); }

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
  document.getElementById('comfort-popup-content').innerHTML = `<div class="cp-icon">${icon}</div><h3>${title}</h3><p>${text.replace(/\n/g,'<br/>')}</p>`;
  document.getElementById('comfort-popup').style.display = 'flex';
}
function closeComfortPopup() { document.getElementById('comfort-popup').style.display = 'none'; }

/* ══════════════════════════════════════════════
   BREATHING EXERCISE
   ══════════════════════════════════════════════ */
function startBreathing() {
  if (isBreathing) {
    isBreathing = false;
    clearInterval(breathingInterval);
    document.getElementById('breathing-circle').className = 'breathing-circle';
    document.getElementById('breathing-text').textContent = 'Bắt đầu';
    document.getElementById('breath-btn').textContent = 'Bắt đầu thở cùng 🌸';
    return;
  }
  isBreathing = true;
  breathingPhase = 0;
  document.getElementById('breath-btn').textContent = 'Dừng lại';
  const phases = [
    { label: 'Hít vào... 🌬️', class: 'inhale', duration: 4000 },
    { label: 'Giữ... ✨', class: 'hold', duration: 4000 },
    { label: 'Thở ra... 😌', class: 'exhale', duration: 4000 },
    { label: 'Nghỉ... 🌸', class: '', duration: 2000 },
  ];
  function runPhase() {
    if (!isBreathing) return;
    const phase = phases[breathingPhase % phases.length];
    document.getElementById('breathing-circle').className = 'breathing-circle ' + phase.class;
    document.getElementById('breathing-text').textContent = phase.label;
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
  floatHearts();
}
function floatHearts() {
  const hearts = ['💜','🌸','✨','💫','🤍'];
  for (let i = 0; i < 6; i++) {
    setTimeout(() => {
      const h = document.createElement('div');
      h.textContent = hearts[Math.floor(Math.random()*hearts.length)];
      h.style.cssText = `position:fixed;left:${20+Math.random()*60}%;bottom:20%;font-size:${18+Math.random()*14}px;pointer-events:none;z-index:999;animation:heartFloat 2s ease forwards;`;
      document.body.appendChild(h);
      setTimeout(() => h.remove(), 2200);
    }, i * 200);
  }
}
const heartStyle = document.createElement('style');
heartStyle.textContent = `@keyframes heartFloat{0%{transform:translateY(0) scale(1);opacity:1}100%{transform:translateY(-120px) scale(0.5);opacity:0}}`;
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
  currentPlushie = { id: 'blind-box', name: box.title, emoji: box.icon, image: null, price: '350.000 ₫', priceNum: 350000 };
  document.getElementById('popup-plushie-info').innerHTML = `<div class="p-emoji">${box.icon}</div><div><div class="p-name">${box.title}</div><div class="p-price">350.000 ₫</div></div>`;
  document.getElementById('order-info').innerHTML = `🎁 Hộp: <strong>${box.title}</strong><br/>💰 Giá: <strong>350.000 ₫</strong><br/>📦 Nội dung: Bí mật (xem mô tả trên)<br/>⏱️ Thời gian: 3–5 ngày làm việc`;
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
      notif.style.opacity = '0';
      setTimeout(() => { notif.style.display = 'none'; }, 500);
    }, 6000);
  }
}

/* ══════════════════════════════════════════════
   NAVBAR SCROLL
   ══════════════════════════════════════════════ */
window.addEventListener('scroll', () => {
  const nav = document.getElementById('navbar');
  nav.style.boxShadow = window.scrollY > 20 ? '0 4px 30px rgba(176,143,232,0.2)' : '0 2px 20px rgba(176,143,232,0.12)';
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

/* ══════════════════════════════════════════════
   DETAIL PAGE — PLAYLIST PLAYER
   ══════════════════════════════════════════════ */
function playDetailSong(file, song, artist, itemEl) {
  if (!file) return;
  // Tạm dừng nhạc nền
  const bgAudio = document.getElementById('audio_nen');
  if (bgAudio && !bgAudio.paused) {
    bgAudio.pause();
    document.getElementById('music-icon').textContent = '🔇';
    musicPlaying = false;
  }
  const audio = document.getElementById('detail-audio-player');
  const player = document.getElementById('detail-playlist-player');
  const nowSong = document.getElementById('detail-now-playing-song');
  const nowArtist = document.getElementById('detail-now-playing-artist');
  const nowIcon = document.getElementById('detail-now-playing-icon');

  if (detailCurrentItem && detailCurrentItem !== itemEl) {
    const oldNum = detailCurrentItem.querySelector('.playlist-num');
    const oldIcon = detailCurrentItem.querySelector('span:last-child');
    if (oldIcon) oldIcon.textContent = '▶';
    if (oldNum) { oldNum.style.background = ''; oldNum.style.color = ''; }
  }
  if (detailCurrentItem === itemEl && !audio.paused) {
    audio.pause();
    nowIcon.textContent = '⏸';
    return;
  }
  audio.src = file;
  audio.play().catch(() => showComfortPopup('🎵', 'Không tìm thấy file nhạc', `Hãy đảm bảo file "${file}" đã có trong thư mục dự án nhé!`));
  player.style.display = 'flex';
  nowSong.textContent = song;
  nowArtist.textContent = artist;
  nowIcon.textContent = '🎵';
  const numEl = itemEl.querySelector('.playlist-num');
  if (numEl) { numEl.style.background = 'var(--purple-deep)'; numEl.style.color = '#fff'; }
  const playIcon = itemEl.querySelector('span:last-child');
  if (playIcon) playIcon.textContent = '⏸';
  detailCurrentItem = itemEl;
  audio.onended = () => {
    nowIcon.textContent = '🎵';
    if (numEl) { numEl.style.background = ''; numEl.style.color = ''; }
    if (playIcon) playIcon.textContent = '▶';
    detailCurrentItem = null;
  };
}

/* ══════════════════════════════════════════════
   GÓC TÂM SỰ — GEMINI AI CHATBOT
   ══════════════════════════════════════════════ */

/* ── Render Bear Picker ── */
function renderBearPicker() {
  const grid = document.getElementById('bear-picker-grid');
  if (!grid) return;
  grid.innerHTML = PLUSHIES.map(p => `
    <div class="bear-pick-card" onclick="selectChatBear('${p.id}')">
      <img src="${p.image}" class="p-image" alt="${p.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/><div class="p-emoji" style="display:none">${p.emoji}</div>
      <div class="bpc-name">${p.name}</div>
      <div class="bpc-trait">${p.traits.slice(0,2).join(' · ')}</div>
    </div>`).join('');
}

/* ── Chọn nhân vật ── */
function selectChatBear(id) {
  if (!geminiApiKey) {
    showComfortPopup('Xin chào, mình đang thức dậy. Bạn đợi một chút nhé! 💜');
    return;
  }
  const bear = PLUSHIES.find(p => p.id === id);
  if (!bear) return;
  selectedBear = bear;
  chatHistory = [];

  document.getElementById('bear-picker').style.display = 'none';
  const chatArea = document.getElementById('chat-area');
  chatArea.style.display = 'flex';

  document.getElementById('chat-bear-info').innerHTML = `
    <div class="chat-bear-avatar">
      <img src="${bear.image}" alt="${bear.name}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/>
      <div class="p-emoji" style="display:none">${bear.emoji}</div>
    </div>
    <div>
      <div class="chat-bear-name">${bear.name}</div>
      <div class="chat-bear-mood">${bear.personality}</div>
    </div>`;

  document.getElementById('chat-messages').innerHTML = '';
  document.getElementById('chat-suggestions').style.display = 'flex';

  appendBearMessage(BEAR_GREETINGS[id] || 'Chào bạn! Mình đang ở đây, lắng nghe bạn nhé. 💜', bear.emoji);
  setTimeout(() => document.getElementById('chat-input')?.focus(), 300);
}

function resetBearPicker() {
  // Dừng voice và TTS nếu đang chạy
  if (isRecording) stopVoice();
  window.speechSynthesis?.cancel();
  selectedBear = null;
  chatHistory = [];
  document.getElementById('bear-picker').style.display = 'block';
  document.getElementById('chat-area').style.display = 'none';
}

/* ── Messages ── */
function appendUserMessage(text) {
  const msgs = document.getElementById('chat-messages');
  const time = new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
  const div = document.createElement('div');
  div.className = 'chat-msg user';
  div.innerHTML = `
    <div class="msg-avatar">🧑</div>
    <div>
      <div class="msg-bubble">${escapeHtml(text).replace(/\n/g,'<br/>')}</div>
      <div class="msg-time">${time}</div>
    </div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function appendBearMessage(text, emoji) {
  const msgs = document.getElementById('chat-messages');
  const time = new Date().toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' });
  const div = document.createElement('div');
  div.className = 'chat-msg bear';
  div.innerHTML = `
    <div class="msg-avatar">

    <img 
      src="${selectedBear?.image}" 
      alt="${selectedBear?.name}"
      class="msg-avatar-img"
      onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
    />

    <div class="msg-avatar-emoji" style="display:none">
      ${emoji || selectedBear?.emoji || '🧸'}
    </div>

  </div>
    <div>
      <div class="msg-bubble">${escapeHtml(text).replace(/\n/g,'<br/>')}</div>
      <div class="msg-time">${time}</div>
    </div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function showTypingIndicator() {
  const msgs = document.getElementById('chat-messages');
  const div = document.createElement('div');
  div.className = 'chat-msg bear typing-indicator';
  div.id = 'typing-indicator';
  div.innerHTML = `
    <div class="msg-avatar">${selectedBear?.emoji || '🧸'}</div>
    <div class="msg-bubble">
      <div class="typing-dot"></div><div class="typing-dot"></div><div class="typing-dot"></div>
    </div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function hideTypingIndicator() { document.getElementById('typing-indicator')?.remove(); }

function escapeHtml(text) {
  return text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

/* ── Gọi Gemini API ── */
async function callGemini(userText) {
  const bearId = selectedBear?.id || 'Mít';
  const systemPrompt = BEAR_SYSTEM_PROMPTS[bearId] || BEAR_SYSTEM_PROMPTS['Mít'];
  const bearName = selectedBear?.name || 'Mít';
 
  // Thêm user message vào history
  chatHistory.push({ role: 'user', parts: [{ text: userText }] });
 
  // Giữ tối đa 10 lượt gần nhất (20 messages) để tránh context quá dài
  const contextHistory = chatHistory.slice(-20);
 
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${geminiApiKey}`;
 
  const body = {
    // systemInstruction: đây là cách ĐÚNG để Gemini Flash nhận system prompt
    systemInstruction: {
      parts: [{
        text: systemPrompt + `\n\nNHẮC NHỞ QUAN TRỌNG: Bạn là ${bearName}. Luôn viết câu HOÀN CHỈNH có dấu câu cuối. Không bao giờ bỏ lửng.`
      }]
    },
    contents: contextHistory.map(msg => ({
      role: msg.role === 'model' ? 'model' : 'user',
      parts: msg.parts
    })),
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 2000,   // câu không bị ngắt
      topP: 0.9,
      topK: 40,
      stopSequences: []       // không cắt sớm
    }
  };
 
  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
 
  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    console.error('Gemini error:', err);
    if ([400, 401, 403, 404].includes(response.status)) throw new Error('API_KEY_INVALID');
    if (response.status === 429) throw new Error('QUOTA_EXCEEDED');
    throw new Error(err.error?.message || `Lỗi HTTP ${response.status}`);
  }
 
  const data = await response.json();
 
  // Kiểm tra finish reason — nếu bị cắt do MAX_TOKENS thì log warning
  const finishReason = data.candidates?.[0]?.finishReason;
  if (finishReason === 'MAX_TOKENS') {
    console.warn('⚠️ Bé bị cắt câu do MAX_TOKENS — có thể tăng maxOutputTokens thêm');
  }
 
  const reply = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim() || '...';
 
  // Thêm model response vào history
  chatHistory.push({ role: 'model', parts: [{ text: reply }] });
 
  return reply;
}

/* ── Gửi tin nhắn ── */
async function sendChatMessage() {
  if (isAITyping || !selectedBear) return;
  const input = document.getElementById('chat-input');
  const sendBtn = document.getElementById('chat-send-btn');
  const text = input.value.trim();
  if (!text) return;

  document.getElementById('chat-suggestions').style.display = 'none';
  input.value = '';
  input.style.height = 'auto';

  appendUserMessage(text);
  isAITyping = true;
  sendBtn.disabled = true;

  // Cập nhật status
  const statusEl = document.querySelector('.chat-status');
  if (statusEl) statusEl.innerHTML = `<span class="status-dot" style="background:#FFB5C8"></span><span>Đang nghĩ...</span>`;

  showTypingIndicator();

  try {
    const reply = await callGemini(text);
    hideTypingIndicator();
    appendBearMessage(reply, null);
    speakText(reply);
  } catch (err) {
    hideTypingIndicator();
    if (err.message === 'API_KEY_INVALID') {
      appendBearMessage('Có vẻ đang bị lỗi một chút. Bạn vui lòng thử lại sau nhé! 💜', null);
      geminiApiKey = '';
      localStorage.removeItem('mitbear_gemini_key');
    } else if (err.message === 'QUOTA_EXCEEDED') {
      appendBearMessage('Mình bị quá giới hạn rồi... 😔 Thử lại sau ít phút nhé bạn ơi!', null);
    } else {
      appendBearMessage(`⚠️ Lỗi kết nối: ${err.message}\n\nKiểm tra:\n1. Internet của bạn\n2. Liên hệ quản trị viên kiểm tra API Key\n3. Thử lại sau ít phút`, null);
    }
    chatHistory.pop();
  } finally {
    isAITyping = false;
    sendBtn.disabled = false;
    if (statusEl) statusEl.innerHTML = `<span class="status-dot"></span><span>Đang lắng nghe...</span>`;
  }
}

function sendQuickMsg(btn) {
  document.getElementById('chat-input').value = btn.textContent.trim();
  sendChatMessage();
}

function handleChatKey(e) {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendChatMessage(); }
}

function autoResizeTextarea(el) {
  el.style.height = 'auto';
  el.style.height = Math.min(el.scrollHeight, 100) + 'px';
}

/* ── Voice Input ── */
function toggleVoice() {
  if (isRecording) stopVoice(); else startVoice();
}

function startVoice() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) {
    showComfortPopup('🎙️', 'Chưa hỗ trợ', 'Tính năng giọng nói chỉ hoạt động trên Chrome. Hãy thử Chrome nhé!');
    return;
  }
  recognition = new SR();
  recognition.lang = 'vi-VN';
  recognition.continuous = false;
  recognition.interimResults = true;

  recognition.onstart = () => {
    isRecording = true;
    const btn = document.getElementById('voice-btn');
    btn.classList.add('recording');
    btn.textContent = '🔴';
    document.getElementById('voice-status').style.display = 'flex';
    document.getElementById('voice-status-text').textContent = 'Đang nghe... nói đi bạn ơi 🎙️';
  };
  recognition.onresult = (e) => {
    const transcript = Array.from(e.results).map(r => r[0].transcript).join('');
    document.getElementById('chat-input').value = transcript;
    document.getElementById('voice-status-text').textContent = `"${transcript}"`;
  };
  recognition.onend = () => {
    isRecording = false;
    const btn = document.getElementById('voice-btn');
    btn.classList.remove('recording');
    btn.textContent = '🎙️';
    document.getElementById('voice-status').style.display = 'none';
    const text = document.getElementById('chat-input').value.trim();
    if (text) sendChatMessage();
  };
  recognition.onerror = (e) => {
    isRecording = false;
    document.getElementById('voice-btn').classList.remove('recording');
    document.getElementById('voice-btn').textContent = '🎙️';
    document.getElementById('voice-status').style.display = 'none';
    if (e.error !== 'no-speech' && e.error !== 'aborted') {
      showComfortPopup('🎙️', 'Lỗi micro', 'Không nhận được âm thanh. Kiểm tra quyền micro nhé!');
    }
  };
  recognition.start();
}

function stopVoice() { recognition?.stop(); }

/* ── TTS — Bé gấu nói lại ── */
function speakText(text) {
  if (!window.speechSynthesis) return;
  if (currentSection !== 'goc-tam-su') return;
  window.speechSynthesis.cancel();
  const clean = text.replace(/[\u{1F300}-\u{1FFFF}]/gu, '').trim();
  if (!clean) return;
  const utterance = new SpeechSynthesisUtterance(clean);
  utterance.lang = 'vi-VN';
  utterance.rate = 0.88;
  utterance.pitch = 1.1;
  utterance.volume = 0.85;
  const voices = window.speechSynthesis.getVoices();
  const viVoice = voices.find(v => v.lang.startsWith('vi'));
  if (viVoice) utterance.voice = viVoice;
  window.speechSynthesis.speak(utterance);
}