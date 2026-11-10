LP.registerCourse({
  id: 'en', name: '英语', native: 'English', flag: '🇺🇸', tts: 'en-US', typing: true, order: true,
  levels: ['A1', 'A2', 'B1'],
  units: [
    { id: 'en-u1', title: '第一单元 · 打招呼', desc: '最基本的问候与自我介绍', color: '#58cc02', lessons: [
      { id: 'en-u1-l1', title: '你好', items: [
        { w: 'hello', t: '你好', e: 'Hello, how are you?', et: '你好，你好吗？' },
        { w: 'hi', t: '嗨', e: 'Hi, I am Anna.', et: '嗨，我是安娜。' },
        { w: 'goodbye', t: '再见', e: 'Goodbye, see you tomorrow.', et: '再见，明天见。' },
        { w: 'good morning', t: '早上好', e: 'Good morning, teacher.', et: '老师，早上好。' },
        { w: 'good evening', t: '晚上好', e: 'Good evening, everyone.', et: '大家晚上好。' },
        { w: 'please', t: '请', e: 'Water, please.', et: '请给我水。' },
        { w: 'thanks', t: '谢谢', e: 'Thanks for your help.', et: '谢谢你的帮助。' },
        { w: 'sorry', t: '对不起', e: 'Sorry, I am late.', et: '对不起，我迟到了。' }
      ] },
      { id: 'en-u1-l2', title: '我是谁', items: [
        { w: 'I', t: '我', e: 'I am a student.', et: '我是学生。' },
        { w: 'you', t: '你', e: 'You are my friend.', et: '你是我的朋友。' },
        { w: 'name', t: '名字', e: 'My name is Li Ming.', et: '我的名字是李明。' },
        { w: 'my', t: '我的', e: 'This is my book.', et: '这是我的书。' },
        { w: 'your', t: '你的', e: 'Is this your bag?', et: '这是你的包吗？' },
        { w: 'friend', t: '朋友', e: 'She is my friend.', et: '她是我的朋友。' },
        { w: 'nice', t: '友善的', e: 'She is a nice person.', et: '她是个友善的人。' },
        { w: 'meet', t: '见面/认识', e: 'Let us meet at the station.', et: '我们在车站见面吧。' }
      ] },
      { id: 'en-u1-l3', title: '是不是', items: [
        { w: 'yes', t: '是/是的', e: 'Yes, I am ready.', et: '是的，我准备好了。' },
        { w: 'no', t: '不/不是', e: 'No, this is not my bag.', et: '不，这不是我的包。' },
        { w: 'is', t: '是', e: 'This is a book.', et: '这是一本书。' },
        { w: 'am', t: '是（我）', e: 'I am happy.', et: '我很开心。' },
        { w: 'are', t: '是（你/你们）', e: 'You are right.', et: '你是对的。' },
        { w: 'not', t: '不', e: 'I am not tired.', et: '我不累。' },
        { w: 'this', t: '这个', e: 'This is my seat.', et: '这是我的座位。' },
        { w: 'that', t: '那个', e: 'That is my car.', et: '那是我的车。' }
      ] }
    ] },
    { id: 'en-u2', title: '第二单元 · 数字与时间', desc: '从数数到安排一天', color: '#1cb0f6', lessons: [
      { id: 'en-u2-l1', title: '一到八', items: [
        { w: 'one', t: '一', e: 'I have one book.', et: '我有一本书。' },
        { w: 'two', t: '二', e: 'Two cups, please.', et: '请给我两个杯子。' },
        { w: 'three', t: '三', e: 'Three cats are here.', et: '这里有三只猫。' },
        { w: 'four', t: '四', e: 'Four chairs, please.', et: '请给我四把椅子。' },
        { w: 'five', t: '五', e: 'Five minutes, please.', et: '请等五分钟。' },
        { w: 'six', t: '六', e: 'Six eggs, please.', et: '请给我六个鸡蛋。' },
        { w: 'seven', t: '七', e: 'Seven days in a week.', et: '一周有七天。' },
        { w: 'eight', t: '八', e: 'Eight hours of sleep.', et: '八小时睡眠。' }
      ] },
      { id: 'en-u2-l2', title: '九到十六', items: [
        { w: 'nine', t: '九', e: 'Nine students are here.', et: '这里有九个学生。' },
        { w: 'ten', t: '十', e: 'Ten books on the desk.', et: '桌上有十本书。' },
        { w: 'eleven', t: '十一', e: 'Eleven players on the team.', et: '队里有十一名队员。' },
        { w: 'twelve', t: '十二', e: 'Twelve months in a year.', et: '一年有十二个月。' },
        { w: 'thirteen', t: '十三', e: 'Thirteen people came.', et: '来了十三个人。' },
        { w: 'fourteen', t: '十四', e: 'Fourteen days is two weeks.', et: '十四天是两周。' },
        { w: 'fifteen', t: '十五', e: 'Fifteen minutes by bus.', et: '坐公交要十五分钟。' },
        { w: 'sixteen', t: '十六', e: 'She is sixteen years old.', et: '她十六岁。' }
      ] },
      { id: 'en-u2-l3', title: '今天和明天', items: [
        { w: 'today', t: '今天', e: 'Today is Monday.', et: '今天是星期一。' },
        { w: 'tomorrow', t: '明天', e: 'See you tomorrow.', et: '明天见。' },
        { w: 'yesterday', t: '昨天', e: 'Yesterday was Sunday.', et: '昨天是星期日。' },
        { w: 'morning', t: '早上', e: 'I run in the morning.', et: '我早上跑步。' },
        { w: 'night', t: '夜晚', e: 'Good night.', et: '晚安。' },
        { w: 'week', t: '星期/周', e: 'One week has seven days.', et: '一周有七天。' },
        { w: 'day', t: '天/日子', e: 'Have a nice day.', et: '祝你今天愉快。' },
        { w: 'time', t: '时间', e: 'What time is it?', et: '现在几点了？' }
      ] }
    ] },
    { id: 'en-u3', title: '第三单元 · 出门在外', desc: '点餐、问路、买东西', color: '#ff9600', lessons: [
      { id: 'en-u3-l1', title: '点餐', items: [
        { w: 'water', t: '水', e: 'A glass of water, please.', et: '请给我一杯水。' },
        { w: 'coffee', t: '咖啡', e: 'I drink coffee every morning.', et: '我每天早上喝咖啡。' },
        { w: 'tea', t: '茶', e: 'She likes green tea.', et: '她喜欢绿茶。' },
        { w: 'food', t: '食物', e: 'The food is ready.', et: '饭做好了。' },
        { w: 'bread', t: '面包', e: 'I eat bread for breakfast.', et: '我早饭吃面包。' },
        { w: 'rice', t: '米饭', e: 'We eat rice every day.', et: '我们每天吃米饭。' },
        { w: 'order', t: '点餐', e: 'I want to order now.', et: '我现在想点餐。' },
        { w: 'menu', t: '菜单', e: 'Can I see the menu?', et: '我可以看菜单吗？' }
      ] },
      { id: 'en-u3-l2', title: '问路', items: [
        { w: 'where', t: '哪里', e: 'Where is the station?', et: '车站在哪里？' },
        { w: 'here', t: '这里', e: 'Come here, please.', et: '请过来。' },
        { w: 'there', t: '那里', e: 'The shop is over there.', et: '商店在那边。' },
        { w: 'road', t: '路', e: 'This road is long.', et: '这条路很长。' },
        { w: 'station', t: '车站', e: 'The station is near.', et: '车站很近。' },
        { w: 'bus', t: '公交车', e: 'I take the bus to work.', et: '我坐公交车上班。' },
        { w: 'left', t: '左边', e: 'Turn left at the corner.', et: '在拐角处向左转。' },
        { w: 'right', t: '右边', e: 'The bank is on the right.', et: '银行在右边。' }
      ] },
      { id: 'en-u3-l3', title: '买东西', items: [
        { w: 'how much', t: '多少钱', e: 'How much is this bag?', et: '这个包多少钱？' },
        { w: 'money', t: '钱', e: 'I do not have much money.', et: '我没有很多钱。' },
        { w: 'price', t: '价格', e: 'The price is high.', et: '价格很高。' },
        { w: 'cheap', t: '便宜', e: 'This shirt is cheap.', et: '这件衬衫很便宜。' },
        { w: 'expensive', t: '贵', e: 'That watch is expensive.', et: '那块表很贵。' },
        { w: 'buy', t: '买', e: 'I want to buy this book.', et: '我想买这本书。' },
        { w: 'shop', t: '商店', e: 'The shop is closed.', et: '商店关门了。' },
        { w: 'bag', t: '包', e: 'This is my bag.', et: '这是我的包。' }
      ] }
    ] },
    { id: 'en-u4', level: 'A1', title: '第四单元 · 家人与身边人', desc: '说清谁是谁、长什么样、拥有什么', color: '#ce82ff', lessons: [
      { id: 'en-u4-l1', title: '家庭称谓', items: [
        { w: 'mother', t: '妈妈', e: 'My mother is a teacher.', et: '我妈妈是老师。' },
        { w: 'father', t: '爸爸', e: 'My father works in a bank.', et: '我爸爸在银行工作。' },
        { w: 'brother', t: '兄弟', e: 'I have one brother.', et: '我有一个兄弟。' },
        { w: 'sister', t: '姐妹', e: 'His sister is a nurse.', et: '他姐姐是护士。' },
        { w: 'son', t: '儿子', e: 'Their son is six.', et: '他们的儿子六岁。' },
        { w: 'daughter', t: '女儿', e: 'My daughter likes music.', et: '我女儿喜欢音乐。' },
        { w: 'parents', t: '父母', e: 'My parents live in Beijing.', et: '我父母住在北京。' },
        { w: 'family', t: '家庭', e: 'I love my family.', et: '我爱我的家人。' },
        { w: 'grandfather', t: '爷爷/外公', e: 'My grandfather is old.', et: '我爷爷年纪大了。' },
        { w: 'wife', t: '妻子', e: 'His wife is a doctor.', et: '他妻子是医生。' }
      ] },
      { id: 'en-u4-l2', title: '描述一个人', items: [
        { w: 'tall', t: '高的', e: 'My brother is tall.', et: '我兄弟很高。' },
        { w: 'slim', t: '苗条的', e: 'She is slim and fast.', et: '她又瘦又快。' },
        { w: 'old', t: '年老的', e: 'The old man is my neighbor.', et: '这位老人是我的邻居。' },
        { w: 'young', t: '年轻的', e: 'The young man is a student.', et: '那个年轻人是学生。' },
        { w: 'kind', t: '善良的', e: 'My teacher is kind.', et: '我老师很善良。' },
        { w: 'funny', t: '有趣的', e: 'He is a funny person.', et: '他是个有趣的人。' },
        { w: 'quiet', t: '安静的', e: 'The baby is quiet now.', et: '宝宝现在很安静。' },
        { w: 'busy', t: '忙的', e: 'My father is busy today.', et: '我爸爸今天很忙。' },
        { w: 'polite', t: '有礼貌的', e: 'The waiter is polite.', et: '服务员很有礼貌。' },
        { w: 'shy', t: '害羞的', e: 'The little girl is shy.', et: '那个小女孩很害羞。' }
      ] },
      { id: 'en-u4-l3', title: '拥有与所属', items: [
        { w: 'have', t: '有', e: 'I have two sisters.', et: '我有两个姐妹。' },
        { w: 'has', t: '有（他/她）', e: 'She has a nice voice.', et: '她的声音很好听。' },
        { w: 'our', t: '我们的', e: 'Our house is small.', et: '我们的房子很小。' },
        { w: 'their', t: '他们的', e: 'Their dog is friendly.', et: '他们的狗很友好。' },
        { w: 'his', t: '他的', e: 'His name is Tom.', et: '他叫汤姆。' },
        { w: 'her', t: '她的', e: 'Her bag is red.', et: '她的包是红色的。' },
        { w: 'child', t: '孩子', e: 'The child is sleeping.', et: '孩子在睡觉。' },
        { w: 'people', t: '人们', e: 'Many people work here.', et: '很多人在这里工作。' },
        { w: 'husband', t: '丈夫', e: 'Her husband cooks well.', et: '她丈夫做饭很好吃。' },
        { w: 'neighbor', t: '邻居', e: 'Our neighbor is friendly.', et: '我们的邻居很友好。' }
      ] }
    ] },
    { id: 'en-u5', level: 'A1', title: '第五单元 · 每天在做什么', desc: '从起床到睡前，讲清一天', color: '#58cc02', lessons: [
      { id: 'en-u5-l1', title: '日常动作', items: [
        { w: 'get up', t: '起床', e: 'I get up at six.', et: '我六点起床。' },
        { w: 'eat', t: '吃', e: 'We eat at seven.', et: '我们七点吃饭。' },
        { w: 'drink', t: '喝', e: 'I drink tea at night.', et: '我晚上喝茶。' },
        { w: 'sleep', t: '睡觉', e: 'The baby sleeps well.', et: '宝宝睡得很好。' },
        { w: 'work', t: '工作', e: 'I work from home.', et: '我在家工作。' },
        { w: 'study', t: '学习', e: 'She studies English every day.', et: '她每天学英语。' },
        { w: 'play', t: '玩', e: 'The children play outside.', et: '孩子们在外面玩。' },
        { w: 'watch', t: '观看', e: 'We watch a film at night.', et: '我们晚上看一部电影。' },
        { w: 'cook', t: '做饭', e: 'My father cooks on Sunday.', et: '我爸爸星期天做饭。' },
        { w: 'clean', t: '打扫', e: 'I clean my room today.', et: '我今天打扫房间。' }
      ] },
      { id: 'en-u5-l2', title: '一天安排', items: [
        { w: 'breakfast', t: '早饭', e: 'I eat breakfast at home.', et: '我在家吃早饭。' },
        { w: 'lunch', t: '午饭', e: 'We have lunch at noon.', et: '我们中午吃午饭。' },
        { w: 'dinner', t: '晚饭', e: 'Dinner is ready.', et: '晚饭好了。' },
        { w: 'home', t: '家', e: 'I go home after work.', et: '我下班后回家。' },
        { w: 'school', t: '学校', e: 'My son goes to school.', et: '我儿子上学。' },
        { w: 'office', t: '办公室', e: 'Her office is near.', et: '她的办公室很近。' },
        { w: 'early', t: '早', e: 'I arrive early every day.', et: '我每天到得很早。' },
        { w: 'late', t: '晚', e: 'Do not stay up late.', et: '不要熬夜。' },
        { w: 'noon', t: '中午', e: 'The shop opens at noon.', et: '商店中午开门。' },
        { w: 'evening', t: '傍晚', e: 'We walk in the evening.', et: '我们傍晚散步。' }
      ] },
      { id: 'en-u5-l3', title: '频率与习惯', items: [
        { w: 'always', t: '总是', e: 'He always helps me.', et: '他总是帮我。' },
        { w: 'often', t: '经常', e: 'We often walk together.', et: '我们经常一起散步。' },
        { w: 'sometimes', t: '有时', e: 'I sometimes cook dinner.', et: '我有时做晚饭。' },
        { w: 'never', t: '从不', e: 'She never drinks coffee.', et: '她从不喝咖啡。' },
        { w: 'usually', t: '通常', e: 'I usually read before bed.', et: '我通常在睡前读书。' },
        { w: 'every day', t: '每天', e: 'I practice every day.', et: '我每天练习。' },
        { w: 'once', t: '一次', e: 'I go once a week.', et: '我每周去一次。' },
        { w: 'twice', t: '两次', e: 'She calls me twice a day.', et: '她每天给我打两次电话。' },
        { w: 'habit', t: '习惯', e: 'Reading is a good habit.', et: '阅读是个好习惯。' },
        { w: 'routine', t: '日常安排', e: 'My morning routine is simple.', et: '我的早晨安排很简单。' }
      ] }
    ] },
    { id: 'en-u6', level: 'A1', title: '第六单元 · 感觉与身体', desc: '说出哪里不舒服、心情怎么样', color: '#ff4b4b', lessons: [
      { id: 'en-u6-l1', title: '身体部位', items: [
        { w: 'head', t: '头', e: 'My head hurts.', et: '我头疼。' },
        { w: 'hand', t: '手', e: 'Raise your hand.', et: '举起你的手。' },
        { w: 'eye', t: '眼睛', e: 'Close your eyes.', et: '闭上你的眼睛。' },
        { w: 'ear', t: '耳朵', e: 'My left ear hurts.', et: '我左耳疼。' },
        { w: 'mouth', t: '嘴', e: 'Open your mouth.', et: '张开嘴。' },
        { w: 'foot', t: '脚', e: 'My foot is cold.', et: '我的脚很冷。' },
        { w: 'back', t: '背', e: 'Her back hurts.', et: '她背疼。' },
        { w: 'stomach', t: '肚子', e: 'My stomach is full.', et: '我肚子很饱。' },
        { w: 'arm', t: '手臂', e: 'My arm is strong.', et: '我的手臂很有力。' },
        { w: 'leg', t: '腿', e: 'His leg hurts after the run.', et: '跑完步他腿疼。' }
      ] },
      { id: 'en-u6-l2', title: '身体状态', items: [
        { w: 'tired', t: '累的', e: 'I am tired tonight.', et: '我今晚很累。' },
        { w: 'hungry', t: '饿的', e: 'The children are hungry.', et: '孩子们饿了。' },
        { w: 'thirsty', t: '渴的', e: 'I am thirsty now.', et: '我现在渴了。' },
        { w: 'sick', t: '生病的', e: 'He is sick today.', et: '他今天生病了。' },
        { w: 'better', t: '好一些', e: 'I feel better now.', et: '我现在感觉好一些。' },
        { w: 'hurt', t: '疼', e: 'My leg hurts.', et: '我腿疼。' },
        { w: 'rest', t: '休息', e: 'You need to rest.', et: '你需要休息。' },
        { w: 'sleep well', t: '睡得好', e: 'I slept well last night.', et: '我昨晚睡得很好。' },
        { w: 'pain', t: '疼痛', e: 'I have a pain in my back.', et: '我背疼。' },
        { w: 'weak', t: '虚弱的', e: 'I feel weak today.', et: '我今天觉得虚弱。' }
      ] },
      { id: 'en-u6-l3', title: '情绪', items: [
        { w: 'happy', t: '开心', e: 'She is happy today.', et: '她今天很开心。' },
        { w: 'sad', t: '难过', e: 'The boy looks sad.', et: '那个男孩看起来很难过。' },
        { w: 'angry', t: '生气', e: 'My boss is angry.', et: '我老板生气了。' },
        { w: 'worried', t: '担心', e: 'I am worried about him.', et: '我很担心他。' },
        { w: 'afraid', t: '害怕', e: 'The dog is afraid.', et: '那只狗害怕了。' },
        { w: 'excited', t: '兴奋', e: 'We are excited about the trip.', et: '我们对这次旅行很兴奋。' },
        { w: 'calm', t: '平静', e: 'Stay calm, please.', et: '请保持冷静。' },
        { w: 'lonely', t: '孤单', e: 'He feels lonely at night.', et: '他晚上感到孤单。' },
        { w: 'nervous', t: '紧张', e: 'I am nervous before the exam.', et: '考试前我很紧张。' },
        { w: 'proud', t: '自豪', e: 'She is proud of her son.', et: '她为儿子感到自豪。' }
      ] }
    ] },
    { id: 'en-u7', level: 'A1', title: '第七单元 · 颜色与衣服', desc: '买衣服、说颜色、讲尺码', color: '#1cb0f6', lessons: [
      { id: 'en-u7-l1', title: '颜色', items: [
        { w: 'red', t: '红色', e: 'She wears a red coat.', et: '她穿着红色外套。' },
        { w: 'blue', t: '蓝色', e: 'The sky is blue.', et: '天空是蓝色的。' },
        { w: 'green', t: '绿色', e: 'I like green tea.', et: '我喜欢绿茶。' },
        { w: 'yellow', t: '黄色', e: 'The sun is yellow.', et: '太阳是黄色的。' },
        { w: 'black', t: '黑色', e: 'My shoes are black.', et: '我的鞋是黑色的。' },
        { w: 'white', t: '白色', e: 'The wall is white.', et: '墙是白色的。' },
        { w: 'brown', t: '棕色', e: 'He has brown eyes.', et: '他有棕色的眼睛。' },
        { w: 'pink', t: '粉色', e: 'Her dress is pink.', et: '她的连衣裙是粉色的。' },
        { w: 'gray', t: '灰色', e: 'The sky looks gray today.', et: '今天天空看起来灰灰的。' },
        { w: 'color', t: '颜色', e: 'What color do you like?', et: '你喜欢什么颜色？' }
      ] },
      { id: 'en-u7-l2', title: '衣服', items: [
        { w: 'shirt', t: '衬衫', e: 'This shirt is new.', et: '这件衬衫是新的。' },
        { w: 'T-shirt', t: 'T恤', e: 'I wear a T-shirt at home.', et: '我在家穿T恤。' },
        { w: 'pants', t: '裤子', e: 'These pants are long.', et: '这条裤子很长。' },
        { w: 'shoes', t: '鞋', e: 'My shoes are wet.', et: '我的鞋湿了。' },
        { w: 'coat', t: '外套', e: 'Take your coat with you.', et: '把外套带上。' },
        { w: 'hat', t: '帽子', e: 'He wears a black hat.', et: '他戴着一顶黑帽子。' },
        { w: 'dress', t: '连衣裙', e: 'She bought a blue dress.', et: '她买了一条蓝色连衣裙。' },
        { w: 'wear', t: '穿', e: 'I wear a uniform at work.', et: '我上班穿制服。' },
        { w: 'jacket', t: '夹克', e: 'This jacket fits me.', et: '这件夹克很合我的身。' },
        { w: 'size', t: '尺码', e: 'What size do you need?', et: '你需要什么尺码？' }
      ] },
      { id: 'en-u7-l3', title: '大小与合适', items: [
        { w: 'small', t: '小的', e: 'This size is too small.', et: '这个尺码太小了。' },
        { w: 'large', t: '大的', e: 'I need a large cup.', et: '我需要一个大杯子。' },
        { w: 'long', t: '长的', e: 'The line is long.', et: '队伍很长。' },
        { w: 'short', t: '短的', e: 'Her hair is short.', et: '她的头发很短。' },
        { w: 'new', t: '新的', e: 'This is my new phone.', et: '这是我的新手机。' },
        { w: 'second-hand', t: '二手的', e: 'I bought a second-hand bike.', et: '我买了一辆二手自行车。' },
        { w: 'fit', t: '合身', e: 'These shoes fit well.', et: '这双鞋很合脚。' },
        { w: 'try on', t: '试穿', e: 'Can I try on this coat?', et: '我可以试穿这件外套吗？' },
        { w: 'change', t: '换/零钱', e: 'I need to change this shirt.', et: '我需要换一件衬衫。' },
        { w: 'cash', t: '现金', e: 'Do you take cash?', et: '你们收现金吗？' }
      ] }
    ] },
    { id: 'en-u8', level: 'A2', title: '第八单元 · 出行与交通', desc: '坐车买票、赶时间、路上出状况', color: '#ff9600', lessons: [
      { id: 'en-u8-l1', title: '交通方式', items: [
        { w: 'train', t: '火车', e: 'The train leaves at nine.', et: '火车九点出发。' },
        { w: 'subway', t: '地铁', e: 'I take the subway to work.', et: '我坐地铁上班。' },
        { w: 'taxi', t: '出租车', e: 'Let us take a taxi.', et: '我们打车吧。' },
        { w: 'bike', t: '自行车', e: 'My bike is old.', et: '我的自行车很旧。' },
        { w: 'plane', t: '飞机', e: 'The plane is late.', et: '飞机晚了。' },
        { w: 'drive', t: '开车', e: 'My father drives to work.', et: '我爸爸开车上班。' },
        { w: 'ride', t: '骑', e: 'I ride my bike to school.', et: '我骑车上学。' },
        { w: 'walk', t: '走路', e: 'We walk to the park.', et: '我们走路去公园。' },
        { w: 'airport', t: '机场', e: 'The airport is far from here.', et: '机场离这里很远。' },
        { w: 'passport', t: '护照', e: 'Do not forget your passport.', et: '别忘了带护照。' }
      ] },
      { id: 'en-u8-l2', title: '买票与时间', items: [
        { w: 'ticket', t: '票', e: 'I need two tickets.', et: '我需要两张票。' },
        { w: 'platform', t: '站台', e: 'The train is at platform three.', et: '火车在三号站台。' },
        { w: 'arrive', t: '到达', e: 'We arrive at six.', et: '我们六点到。' },
        { w: 'leave', t: '离开', e: 'The bus leaves now.', et: '公交车现在出发。' },
        { w: 'delay', t: '延误', e: 'The flight has a delay.', et: '航班延误了。' },
        { w: 'on time', t: '准时', e: 'The train is on time.', et: '火车准点。' },
        { w: 'hour', t: '小时', e: 'It takes one hour.', et: '要一个小时。' },
        { w: 'minute', t: '分钟', e: 'Wait a minute, please.', et: '请等一分钟。' },
        { w: 'depart', t: '出发', e: 'The train departs at eight.', et: '火车八点出发。' },
        { w: 'return', t: '返回', e: 'When do you return?', et: '你什么时候回来？' }
      ] },
      { id: 'en-u8-l3', title: '路上问题', items: [
        { w: 'lost', t: '迷路', e: 'I am lost in this city.', et: '我在这个城市迷路了。' },
        { w: 'map', t: '地图', e: 'Show me the map, please.', et: '请把地图给我看看。' },
        { w: 'near', t: '近的', e: 'The hotel is near the station.', et: '酒店离车站很近。' },
        { w: 'far', t: '远的', e: 'The airport is far.', et: '机场很远。' },
        { w: 'traffic', t: '交通', e: 'The traffic is heavy today.', et: '今天交通很堵。' },
        { w: 'crowded', t: '拥挤的', e: 'The subway is crowded.', et: '地铁很挤。' },
        { w: 'hurry', t: '赶紧', e: 'We need to hurry.', et: '我们得赶紧。' },
        { w: 'wait', t: '等', e: 'Please wait here.', et: '请在这里等。' },
        { w: 'direction', t: '方向', e: 'We are going in the wrong direction.', et: '我们走错方向了。' },
        { w: 'address', t: '地址', e: 'What is the address?', et: '地址是什么？' }
      ] }
    ] },
    { id: 'en-u9', level: 'A2', title: '第九单元 · 工作与学习', desc: '课堂、职场、计划将来的事', color: '#ce82ff', lessons: [
      { id: 'en-u9-l1', title: '学校', items: [
        { w: 'class', t: '课', e: 'My class starts at eight.', et: '我的课八点开始。' },
        { w: 'teacher', t: '老师', e: 'Our teacher is very kind.', et: '我们的老师很善良。' },
        { w: 'student', t: '学生', e: 'The students are ready.', et: '学生们准备好了。' },
        { w: 'exam', t: '考试', e: 'I have an exam tomorrow.', et: '我明天有考试。' },
        { w: 'homework', t: '作业', e: 'I finish my homework early.', et: '我很早做完作业。' },
        { w: 'question', t: '问题', e: 'May I ask a question?', et: '我可以问一个问题吗？' },
        { w: 'answer', t: '回答', e: 'Your answer is useful.', et: '你的回答很有用。' },
        { w: 'practice', t: '练习', e: 'Practice helps a lot.', et: '练习很有帮助。' },
        { w: 'lesson', t: '课程', e: 'This lesson is easy.', et: '这节课很容易。' },
        { w: 'library', t: '图书馆', e: 'I study in the library.', et: '我在图书馆学习。' }
      ] },
      { id: 'en-u9-l2', title: '工作', items: [
        { w: 'job', t: '工作', e: 'She found a new job.', et: '她找到了一份新工作。' },
        { w: 'company', t: '公司', e: 'My company is small.', et: '我的公司很小。' },
        { w: 'meeting', t: '会议', e: 'The meeting starts at ten.', et: '会议十点开始。' },
        { w: 'boss', t: '老板', e: 'My boss is in the office.', et: '我老板在办公室。' },
        { w: 'customer', t: '客户', e: 'The customer is waiting.', et: '客户在等。' },
        { w: 'salary', t: '工资', e: 'The salary is good.', et: '工资不错。' },
        { w: 'project', t: '项目', e: 'We finish the project today.', et: '我们今天完成项目。' },
        { w: 'deadline', t: '截止日期', e: 'The deadline is Friday.', et: '截止日期是星期五。' },
        { w: 'colleague', t: '同事', e: 'My colleague helps me a lot.', et: '我同事帮了我很多。' },
        { w: 'report', t: '报告', e: 'The report is ready.', et: '报告准备好了。' }
      ] },
      { id: 'en-u9-l3', title: '计划与将来', items: [
        { w: 'plan', t: '计划', e: 'What is your plan?', et: '你的计划是什么？' },
        { w: 'will', t: '将要', e: 'I will call you later.', et: '我回头给你打电话。' },
        { w: 'going to', t: '打算', e: 'We are going to travel.', et: '我们打算去旅行。' },
        { w: 'next', t: '下一个', e: 'Next week is busy.', et: '下周会很忙。' },
        { w: 'later', t: '之后', e: 'See you later.', et: '回头见。' },
        { w: 'finish', t: '完成', e: 'I finish work at six.', et: '我六点下班。' },
        { w: 'start', t: '开始', e: 'Let us start now.', et: '我们现在开始吧。' },
        { w: 'ready', t: '准备好', e: 'I am ready to go.', et: '我准备好出发了。' },
        { w: 'decide', t: '决定', e: 'We decide today.', et: '我们今天决定。' },
        { w: 'future', t: '未来', e: 'Think about your future.', et: '想想你的未来。' }
      ] }
    ] },
    { id: 'en-u10', level: 'A2', title: '第十单元 · 健康与生活', desc: '看病、运动、吃得健康', color: '#58cc02', lessons: [
      { id: 'en-u10-l1', title: '看病', items: [
        { w: 'doctor', t: '医生', e: 'You should see a doctor.', et: '你应该去看医生。' },
        { w: 'nurse', t: '护士', e: 'The nurse is kind.', et: '护士很和善。' },
        { w: 'medicine', t: '药', e: 'Take this medicine after dinner.', et: '晚饭后吃这个药。' },
        { w: 'fever', t: '发烧', e: 'He has a fever.', et: '他发烧了。' },
        { w: 'cold', t: '感冒', e: 'I caught a cold.', et: '我感冒了。' },
        { w: 'appointment', t: '预约', e: 'I have an appointment at three.', et: '我三点有预约。' },
        { w: 'hospital', t: '医院', e: 'The hospital is near my home.', et: '医院离我家很近。' },
        { w: 'check', t: '检查', e: 'The doctor will check your eyes.', et: '医生会检查你的眼睛。' },
        { w: 'allergy', t: '过敏', e: 'I have an allergy to this medicine.', et: '我对这个药过敏。' },
        { w: 'recover', t: '恢复', e: 'You will recover soon.', et: '你很快会恢复。' }
      ] },
      { id: 'en-u10-l2', title: '运动', items: [
        { w: 'exercise', t: '锻炼', e: 'Exercise is good for you.', et: '锻炼对你有好处。' },
        { w: 'run', t: '跑步', e: 'I run every morning.', et: '我每天早上跑步。' },
        { w: 'swim', t: '游泳', e: 'She swims very well.', et: '她游泳游得很好。' },
        { w: 'gym', t: '健身房', e: 'I go to the gym twice a week.', et: '我每周去两次健身房。' },
        { w: 'strong', t: '强壮的', e: 'He is strong and healthy.', et: '他强壮又健康。' },
        { w: 'stretch', t: '拉伸', e: 'Stretch before you run.', et: '跑步前先拉伸。' },
        { w: 'breathe', t: '呼吸', e: 'Breathe slowly and relax.', et: '慢慢呼吸，放松。' },
        { w: 'sport', t: '运动项目', e: 'What sport do you like?', et: '你喜欢什么运动？' },
        { w: 'team', t: '队伍', e: 'Our team won the game.', et: '我们队赢了比赛。' },
        { w: 'coach', t: '教练', e: 'The coach is very strict.', et: '教练很严格。' }
      ] },
      { id: 'en-u10-l3', title: '饮食', items: [
        { w: 'vegetable', t: '蔬菜', e: 'Eat more vegetables.', et: '多吃蔬菜。' },
        { w: 'fruit', t: '水果', e: 'Fruit is sweet today.', et: '今天的水果很甜。' },
        { w: 'meat', t: '肉', e: 'I do not eat much meat.', et: '我不太吃肉。' },
        { w: 'fish', t: '鱼', e: 'We had fish for dinner.', et: '我们晚饭吃了鱼。' },
        { w: 'sugar', t: '糖', e: 'Too much sugar is bad.', et: '糖太多不好。' },
        { w: 'salt', t: '盐', e: 'Add a little salt.', et: '加一点盐。' },
        { w: 'healthy', t: '健康的', e: 'This is a healthy meal.', et: '这是一顿健康的饭。' },
        { w: 'taste', t: '味道', e: 'The soup tastes good.', et: '这汤味道不错。' },
        { w: 'soup', t: '汤', e: 'The soup is hot.', et: '汤很烫。' },
        { w: 'diet', t: '饮食', e: 'A good diet is important.', et: '好的饮食很重要。' }
      ] }
    ] },
    { id: 'en-u11', level: 'A2', title: '第十一单元 · 社交与观点', desc: '邀约、表达同意，讲过去发生的事', color: '#ff4b4b', lessons: [
      { id: 'en-u11-l1', title: '邀请与约定', items: [
        { w: 'invite', t: '邀请', e: 'I invite you to my home.', et: '我邀请你来我家。' },
        { w: 'visit', t: '拜访', e: 'We visit my grandmother on Sunday.', et: '我们星期天去看奶奶。' },
        { w: 'party', t: '聚会', e: 'The party starts at eight.', et: '聚会八点开始。' },
        { w: 'free', t: '有空', e: 'Are you free tonight?', et: '你今晚有空吗？' },
        { w: 'weekend', t: '周末', e: 'I rest on the weekend.', et: '我周末休息。' },
        { w: 'join', t: '加入', e: 'Come and join us.', et: '来加入我们吧。' },
        { w: 'together', t: '一起', e: 'We study together.', et: '我们一起学习。' },
        { w: 'meet up', t: '见面', e: 'Let us meet up at six.', et: '我们六点见吧。' },
        { w: 'guest', t: '客人', e: 'The guests arrive at seven.', et: '客人七点到。' },
        { w: 'gift', t: '礼物', e: 'This gift is for you.', et: '这份礼物是给你的。' }
      ] },
      { id: 'en-u11-l2', title: '同意与不同意', items: [
        { w: 'agree', t: '同意', e: 'I agree with you.', et: '我同意你。' },
        { w: 'disagree', t: '不同意', e: 'I disagree with this plan.', et: '我不同意这个计划。' },
        { w: 'think', t: '认为', e: 'I think it is a good idea.', et: '我觉得这是个好主意。' },
        { w: 'maybe', t: '也许', e: 'Maybe you are right.', et: '也许你是对的。' },
        { w: 'sure', t: '当然', e: 'Sure, I can help.', et: '当然，我可以帮忙。' },
        { w: 'correct', t: '正确的', e: 'The first answer is correct.', et: '第一个答案是对的。' },
        { w: 'wrong', t: '错的', e: 'This is the wrong address.', et: '这个地址是错的。' },
        { w: 'opinion', t: '看法', e: 'What is your opinion?', et: '你的看法是什么？' },
        { w: 'reason', t: '理由', e: 'Tell me your reason.', et: '告诉我你的理由。' },
        { w: 'true', t: '真的', e: 'This story is true.', et: '这个故事是真的。' }
      ] },
      { id: 'en-u11-l3', title: '过去的事', items: [
        { w: 'was', t: '是（过去）', e: 'I was at home last night.', et: '我昨晚在家。' },
        { w: 'were', t: '是（过去，复数）', e: 'They were very happy.', et: '他们那时很开心。' },
        { w: 'did', t: '做（过去）', e: 'I did my homework.', et: '我做了作业。' },
        { w: 'went', t: '去（过去）', e: 'She went to the market.', et: '她去了市场。' },
        { w: 'saw', t: '看见（过去）', e: 'I saw him yesterday.', et: '我昨天看见他了。' },
        { w: 'bought', t: '买（过去）', e: 'He bought a new phone.', et: '他买了一个新手机。' },
        { w: 'ago', t: '以前', e: 'We met two years ago.', et: '我们两年前认识的。' },
        { w: 'last night', t: '昨晚', e: 'It rained last night.', et: '昨晚下雨了。' },
        { w: 'before', t: '之前', e: 'I saw this film before.', et: '我以前看过这部电影。' },
        { w: 'story', t: '故事', e: 'She told me a funny story.', et: '她给我讲了个有趣的故事。' }
      ] }
    ] },
    { id: 'en-u12', level: 'B1', title: '第十二单元 · 出行与旅行', desc: '订票、过关、住宿，出门在外能自己搞定', color: '#1cb0f6', lessons: [
      { id: 'en-u12-l1', title: '出行准备', items: [
        { w: 'visa', t: '签证', e: 'I need a visa for this country.', et: '我去这个国家需要签证。' },
        { w: 'itinerary', t: '行程单', e: 'I printed my itinerary last night.', et: '我昨晚把行程单打印出来了。' },
        { w: 'luggage', t: '行李', e: 'My luggage is too heavy.', et: '我的行李太重了。' },
        { w: 'pack', t: '打包', e: 'I need to pack tonight.', et: '我今晚得收拾行李。' },
        { w: 'reserve', t: '预订', e: 'I reserved a room for two nights.', et: '我订了两晚的房间。' },
        { w: 'destination', t: '目的地', e: 'What is your final destination?', et: '你的最终目的地是哪里？' },
        { w: 'journey', t: '旅程', e: 'The journey takes four hours.', et: '这段旅程要四个小时。' },
        { w: 'departure', t: '出发', e: 'The departure time is nine.', et: '出发时间是九点。' },
        { w: 'suitcase', t: '行李箱', e: 'My suitcase is already packed.', et: '我的行李箱已经收拾好了。' },
        { w: 'flight', t: '航班', e: 'My flight is delayed.', et: '我的航班延误了。' }
      ] },
      { id: 'en-u12-l2', title: '车站与机场', items: [
        { w: 'carriage', t: '车厢', e: 'Our carriage is at the front.', et: '我们的车厢在前面。' },
        { w: 'terminal', t: '航站楼', e: 'Terminal two is on the left.', et: '二号航站楼在左边。' },
        { w: 'boarding pass', t: '登机牌', e: 'Please show your boarding pass.', et: '请出示你的登机牌。' },
        { w: 'cancel', t: '取消', e: 'They cancelled the flight.', et: '他们取消了航班。' },
        { w: 'board', t: '登机', e: 'We board at ten thirty.', et: '我们十点半登机。' },
        { w: 'security', t: '安检', e: 'Go through security first.', et: '先过安检。' },
        { w: 'gate', t: '登机口', e: 'The gate changed to B12.', et: '登机口改到 B12 了。' },
        { w: 'announcement', t: '广播', e: 'Listen to the announcement.', et: '听一下广播。' },
        { w: 'timetable', t: '时刻表', e: 'Check the timetable on the wall.', et: '看一下墙上的时刻表。' },
        { w: 'miss', t: '错过', e: 'I missed my train.', et: '我错过了火车。' }
      ] },
      { id: 'en-u12-l3', title: '住宿与游玩', items: [
        { w: 'hotel', t: '酒店', e: 'The hotel is near the station.', et: '酒店在车站附近。' },
        { w: 'check in', t: '入住', e: 'We can check in after two.', et: '两点以后可以入住。' },
        { w: 'reception', t: '前台', e: 'Ask at reception for a map.', et: '去前台要一张地图。' },
        { w: 'tourist', t: '游客', e: 'Many tourists visit this area.', et: '很多游客来这一带。' },
        { w: 'guide', t: '导游', e: 'The guide speaks English.', et: '导游会说英语。' },
        { w: 'sightseeing', t: '观光', e: 'We go sightseeing in the morning.', et: '我们上午去观光。' },
        { w: 'museum', t: '博物馆', e: 'The museum opens at nine.', et: '博物馆九点开门。' },
        { w: 'view', t: '景色', e: 'The view from the hill is beautiful.', et: '山上的景色很美。' },
        { w: 'souvenir', t: '纪念品', e: 'I bought a small souvenir.', et: '我买了一个小纪念品。' },
        { w: 'recommend', t: '推荐', e: 'Can you recommend a restaurant?', et: '你能推荐一家餐厅吗？' }
      ] }
    ] },
    { id: 'en-u13', level: 'B1', title: '第十三单元 · 工作与职业', desc: '面试、开会、谈职责，职场里能用英语应对', color: '#ffc800', lessons: [
      { id: 'en-u13-l1', title: '求职', items: [
        { w: 'career', t: '职业', e: 'She wants a career in design.', et: '她想从事设计行业。' },
        { w: 'interview', t: '面试', e: 'My interview is on Monday.', et: '我的面试在星期一。' },
        { w: 'apply', t: '申请', e: 'I applied for this job.', et: '我申请了这份工作。' },
        { w: 'resume', t: '简历', e: 'Please send your resume.', et: '请把你的简历发过来。' },
        { w: 'bonus', t: '奖金', e: 'The job offers a year-end bonus.', et: '这份工作有年终奖。' },
        { w: 'experience', t: '经验', e: 'I have three years of experience.', et: '我有三年经验。' },
        { w: 'skill', t: '技能', e: 'English is a useful skill.', et: '英语是一项有用的技能。' },
        { w: 'employer', t: '雇主', e: 'The employer offers training.', et: '雇主提供培训。' },
        { w: 'position', t: '职位', e: 'I am interested in this position.', et: '我对这个职位感兴趣。' },
        { w: 'hire', t: '雇用', e: 'They hired two new people.', et: '他们雇了两个新人。' }
      ] },
      { id: 'en-u13-l2', title: '办公室日常', items: [
        { w: 'assistant', t: '助理', e: 'The assistant books all our meetings.', et: '助理负责安排我们所有的会议。' },
        { w: 'manager', t: '经理', e: 'The manager is in a meeting.', et: '经理在开会。' },
        { w: 'department', t: '部门', e: 'He works in the sales department.', et: '他在销售部工作。' },
        { w: 'task', t: '任务', e: 'This task takes two days.', et: '这个任务要两天。' },
        { w: 'schedule', t: '日程', e: 'Let me check my schedule first.', et: '我先看下我的日程。' },
        { w: 'paperwork', t: '文书工作', e: 'I have too much paperwork today.', et: '我今天文书工作太多了。' },
        { w: 'presentation', t: '演示', e: 'She gave a short presentation.', et: '她做了一个简短的演示。' },
        { w: 'client', t: '客户', e: 'The client will call tomorrow.', et: '客户明天会打电话来。' },
        { w: 'desk', t: '办公桌', e: 'My desk is by the window.', et: '我的办公桌靠窗。' },
        { w: 'document', t: '文件', e: 'Print this document, please.', et: '请打印这份文件。' }
      ] },
      { id: 'en-u13-l3', title: '职业发展', items: [
        { w: 'training', t: '培训', e: 'New staff get two weeks of training.', et: '新员工有两周培训。' },
        { w: 'promote', t: '晋升', e: 'She was promoted last month.', et: '她上个月升职了。' },
        { w: 'resign', t: '辞职', e: 'He resigned for personal reasons.', et: '他因个人原因辞职了。' },
        { w: 'contract', t: '合同', e: 'Read the contract before signing.', et: '签字前先读合同。' },
        { w: 'overtime', t: '加班', e: 'I worked overtime last night.', et: '我昨晚加班了。' },
        { w: 'vacation', t: '假期', e: 'I have ten days of vacation.', et: '我有十天假期。' },
        { w: 'responsibility', t: '职责', e: 'Safety is everyone\'s responsibility.', et: '安全是每个人的责任。' },
        { w: 'succeed', t: '成功', e: 'Hard work helps you succeed.', et: '努力能帮你成功。' },
        { w: 'leadership', t: '领导力', e: 'The course teaches leadership.', et: '这门课教领导力。' },
        { w: 'retire', t: '退休', e: 'My father will retire next year.', et: '我父亲明年退休。' }
      ] }
    ] },
    { id: 'en-u14', level: 'B1', title: '第十四单元 · 健康与身体', desc: '说清症状、看诊拿药，身体不适不再只能比划', color: '#ff4b4b', lessons: [
      { id: 'en-u14-l1', title: '描述症状', items: [
        { w: 'flu', t: '流感', e: 'I caught the flu last week.', et: '我上周得了流感。' },
        { w: 'headache', t: '头痛', e: 'I have a bad headache.', et: '我头疼得厉害。' },
        { w: 'cough', t: '咳嗽', e: 'He has a dry cough.', et: '他干咳。' },
        { w: 'sore', t: '酸痛', e: 'My legs are sore.', et: '我腿酸。' },
        { w: 'dizzy', t: '头晕', e: 'I feel dizzy when I stand up.', et: '我站起来就头晕。' },
        { w: 'exhausted', t: '精疲力尽', e: 'I feel exhausted after work.', et: '下班后我觉得精疲力尽。' },
        { w: 'sneeze', t: '打喷嚏', e: 'I sneeze all morning.', et: '我一早上都在打喷嚏。' },
        { w: 'throat', t: '喉咙', e: 'My throat hurts.', et: '我喉咙疼。' },
        { w: 'chest', t: '胸部', e: 'I feel pain in my chest.', et: '我觉得胸口疼。' },
        { w: 'symptom', t: '症状', e: 'A fever is a common symptom.', et: '发烧是常见的症状。' }
      ] },
      { id: 'en-u14-l2', title: '看诊拿药', items: [
        { w: 'clinic', t: '诊所', e: 'The clinic opens at eight.', et: '诊所八点开门。' },
        { w: 'waiting room', t: '候诊室', e: 'Please wait in the waiting room.', et: '请在候诊室等一下。' },
        { w: 'pill', t: '药片', e: 'Take one pill after dinner.', et: '晚饭后吃一片药。' },
        { w: 'prescription', t: '处方', e: 'You need a prescription for this.', et: '这个需要处方。' },
        { w: 'examine', t: '检查', e: 'The doctor will examine you.', et: '医生会给你检查。' },
        { w: 'treatment', t: '治疗', e: 'The treatment takes two weeks.', et: '治疗要两周。' },
        { w: 'get better', t: '好转', e: 'You will get better soon.', et: '你很快就会好起来。' },
        { w: 'patient', t: '病人', e: 'The patient is waiting outside.', et: '病人在外面等着。' },
        { w: 'dentist', t: '牙医', e: 'I have an appointment with the dentist.', et: '我和牙医约好了。' },
        { w: 'insurance', t: '保险', e: 'Does your insurance cover this?', et: '你的保险能报这个吗？' }
      ] },
      { id: 'en-u14-l3', title: '健康生活', items: [
        { w: 'fitness', t: '健身', e: 'Fitness helps me sleep better.', et: '健身让我睡得更香。' },
        { w: 'stress', t: '压力', e: 'Too much stress is bad for you.', et: '压力太大对身体不好。' },
        { w: 'mood', t: '心情', e: 'Music improves my mood.', et: '音乐能改善我的心情。' },
        { w: 'energy', t: '精力', e: 'I have no energy today.', et: '我今天没精力。' },
        { w: 'lifestyle', t: '生活方式', e: 'A healthy lifestyle is worth it.', et: '健康的生活方式很值得。' },
        { w: 'balance', t: '平衡', e: 'Try to balance work and rest.', et: '尽量平衡工作和休息。' },
        { w: 'avoid', t: '避免', e: 'Avoid sugar at night.', et: '晚上避免吃糖。' },
        { w: 'mental', t: '心理的', e: 'Mental health matters.', et: '心理健康很重要。' },
        { w: 'relax', t: '放松', e: 'I relax by reading.', et: '我靠读书放松。' },
        { w: 'injury', t: '受伤', e: 'He has a knee injury.', et: '他膝盖受伤了。' }
      ] }
    ] },
    { id: 'en-u15', level: 'B1', title: '第十五单元 · 购物与售后', desc: '退换、保修、投诉，买东西不吃哑巴亏', color: '#8ee000', lessons: [
      { id: 'en-u15-l1', title: '挑选与试穿', items: [
        { w: 'receipt', t: '收据', e: 'Keep the receipt, please.', et: '请保留收据。' },
        { w: 'refund', t: '退款', e: 'I would like a refund.', et: '我想退款。' },
        { w: 'exchange', t: '换货', e: 'Can I exchange this shirt?', et: '这件衬衫能换吗？' },
        { w: 'medium', t: '中号', e: 'Do you have this in medium?', et: '这个有中号的吗？' },
        { w: 'tight', t: '紧的', e: 'This shirt is a bit tight.', et: '这件衬衫有点紧。' },
        { w: 'changing room', t: '试衣间', e: 'The changing room is over there.', et: '试衣间在那边。' },
        { w: 'cost', t: '花费', e: 'The cost is too high for me.', et: '这个花费对我来说太高了。' },
        { w: 'bargain', t: '划算的', e: 'This coat is a real bargain.', et: '这件外套真划算。' },
        { w: 'quality', t: '质量', e: 'The quality is very good.', et: '质量很好。' },
        { w: 'choose', t: '选择', e: 'It is hard to choose.', et: '很难选。' }
      ] },
      { id: 'en-u15-l2', title: '售后与投诉', items: [
        { w: 'warranty', t: '保修', e: 'The phone has a one-year warranty.', et: '这手机保修一年。' },
        { w: 'complain', t: '投诉', e: 'I want to complain about the service.', et: '我要投诉服务。' },
        { w: 'service', t: '服务', e: 'The service here is slow.', et: '这里的服务很慢。' },
        { w: 'shopper', t: '购物者', e: 'The shopper asked for help.', et: '那位购物者寻求帮助。' },
        { w: 'package', t: '包裹', e: 'My package arrived today.', et: '我的包裹今天到了。' },
        { w: 'deliver', t: '配送', e: 'They deliver in two days.', et: '他们两天内送货。' },
        { w: 'broken', t: '坏的', e: 'The screen is broken.', et: '屏幕坏了。' },
        { w: 'replace', t: '更换', e: 'Can you replace it for me?', et: '能帮我换一个吗？' },
        { w: 'discount', t: '折扣', e: 'Is there a student discount?', et: '有学生折扣吗？' },
        { w: 'sale', t: '促销', e: 'The sale ends on Sunday.', et: '促销星期天结束。' }
      ] },
      { id: 'en-u15-l3', title: '消费习惯', items: [
        { w: 'budget', t: '预算', e: 'We have a small budget.', et: '我们预算不多。' },
        { w: 'spend', t: '花费', e: 'I spend too much on coffee.', et: '我花太多钱在咖啡上。' },
        { w: 'save', t: '存钱', e: 'I save a little every month.', et: '我每月存一点钱。' },
        { w: 'afford', t: '负担得起', e: 'I cannot afford a new car.', et: '我买不起新车。' },
        { w: 'value', t: '价值', e: 'This watch is good value.', et: '这块表很值。' },
        { w: 'brand', t: '品牌', e: 'I do not care about the brand.', et: '我不在意品牌。' },
        { w: 'online', t: '网上的', e: 'I buy most things online.', et: '我大部分东西在网上买。' },
        { w: 'purchase', t: '购买', e: 'Keep your purchase receipt.', et: '保留你的购买凭证。' },
        { w: 'store', t: '商店', e: 'The store closes at nine.', et: '商店九点关门。' },
        { w: 'payment', t: '支付', e: 'Payment is by card only.', et: '只能刷卡支付。' }
      ] }
    ] },
    { id: 'en-u16', level: 'B1', title: '第十六单元 · 城市与居住', desc: '租房、通勤、聊城市问题，生活里用得上', color: '#1cb0f6', lessons: [
      { id: 'en-u16-l1', title: '租房与社区', items: [
        { w: 'neighborhood', t: '街区', e: 'It is a quiet neighborhood.', et: '这是一个安静的街区。' },
        { w: 'rent', t: '租金', e: 'The rent is too high.', et: '租金太高了。' },
        { w: 'apartment', t: '公寓', e: 'We rented a small apartment.', et: '我们租了一个小公寓。' },
        { w: 'landlord', t: '房东', e: 'The landlord fixed the sink.', et: '房东修好了水槽。' },
        { w: 'lease', t: '租约', e: 'The lease is for one year.', et: '租约是一年。' },
        { w: 'move', t: '搬家', e: 'We move in next month.', et: '我们下个月搬进来。' },
        { w: 'nearby', t: '附近的', e: 'There is a market nearby.', et: '附近有个市场。' },
        { w: 'facility', t: '设施', e: 'The building has good facilities.', et: '这栋楼设施不错。' },
        { w: 'convenient', t: '方便的', e: 'The location is very convenient.', et: '位置非常方便。' },
        { w: 'safe', t: '安全的', e: 'This area is safe at night.', et: '这一带晚上很安全。' }
      ] },
      { id: 'en-u16-l2', title: '通勤与交通', items: [
        { w: 'commute', t: '通勤', e: 'My commute takes an hour.', et: '我通勤要一个小时。' },
        { w: 'underground', t: '地铁（英式）', e: 'Take the underground across the city.', et: '坐地铁穿过整座城市。' },
        { w: 'route', t: '路线', e: 'This bus route is faster.', et: '这条公交路线更快。' },
        { w: 'fare', t: '车费', e: 'The fare is two dollars.', et: '车费两美元。' },
        { w: 'transfer', t: '换乘', e: 'Transfer at the next station.', et: '在下一站换乘。' },
        { w: 'packed', t: '挤满的', e: 'The bus is packed at eight.', et: '八点的时候公交车挤满了人。' },
        { w: 'rush hour', t: '高峰时段', e: 'Avoid driving at rush hour.', et: '高峰时段别开车。' },
        { w: 'seat', t: '座位', e: 'I always get a seat on the bus.', et: '我坐公交总能找到座位。' },
        { w: 'park', t: '停车', e: 'Where can I park?', et: '我能在哪停车？' },
        { w: 'distance', t: '距离', e: 'The distance is about five kilometers.', et: '距离大约五公里。' }
      ] },
      { id: 'en-u16-l3', title: '城市问题', items: [
        { w: 'noisy', t: '吵闹的', e: 'The street is noisy at night.', et: '这条街晚上很吵。' },
        { w: 'pollution', t: '污染', e: 'Air pollution is a big problem.', et: '空气污染是个大问题。' },
        { w: 'garbage', t: '垃圾', e: 'Please put the garbage outside.', et: '请把垃圾放到外面。' },
        { w: 'crime', t: '犯罪', e: 'The city has less crime now.', et: '这座城市犯罪率降低了。' },
        { w: 'improve', t: '改善', e: 'They want to improve public transport.', et: '他们想改善公共交通。' },
        { w: 'population', t: '人口', e: 'The population is growing fast.', et: '人口增长很快。' },
        { w: 'public', t: '公共的', e: 'Public parks are free.', et: '公共公园是免费的。' },
        { w: 'space', t: '空间', e: 'We need more green space.', et: '我们需要更多绿地。' },
        { w: 'modern', t: '现代的', e: 'The library is very modern.', et: '图书馆很现代。' },
        { w: 'environment', t: '环境', e: 'We should protect the environment.', et: '我们应该保护环境。' }
      ] }
    ] },
    { id: 'en-u17', level: 'B1', title: '第十七单元 · 计划与观点', desc: '做决定、讲利弊、谈未来，能表达自己的想法', color: '#ffc800', lessons: [
      { id: 'en-u17-l1', title: '做决定', items: [
        { w: 'decision', t: '决定', e: 'It was a difficult decision.', et: '这是个艰难的决定。' },
        { w: 'suggest', t: '建议', e: 'I suggest we leave early.', et: '我建议我们早点走。' },
        { w: 'prefer', t: '更喜欢', e: 'I prefer tea to coffee.', et: '比起咖啡我更喜欢茶。' },
        { w: 'depend', t: '取决于', e: 'It depends on the weather.', et: '这取决于天气。' },
        { w: 'possible', t: '可能的', e: 'Is it possible to change the date?', et: '有可能改日期吗？' },
        { w: 'instead', t: '代替', e: 'Let us take a walk instead.', et: '我们改去散步吧。' },
        { w: 'consider', t: '考虑', e: 'Please consider my idea.', et: '请考虑我的想法。' },
        { w: 'choice', t: '选择', e: 'You have two choices.', et: '你有两个选择。' },
        { w: 'option', t: '选项', e: 'You have another option.', et: '你还有另一个选项。' },
        { w: 'prepare', t: '准备', e: 'I need time to prepare.', et: '我需要时间准备。' }
      ] },
      { id: 'en-u17-l2', title: '讨论利弊', items: [
        { w: 'advantage', t: '优点', e: 'The main advantage is the price.', et: '主要优点是价格。' },
        { w: 'disadvantage', t: '缺点', e: 'The disadvantage is the noise.', et: '缺点是噪音。' },
        { w: 'result', t: '结果', e: 'The result was better than we expected.', et: '结果比我们预期的好。' },
        { w: 'effect', t: '影响', e: 'It has a bad effect on health.', et: '它对健康有不良影响。' },
        { w: 'argue', t: '争论', e: 'They argue about money.', et: '他们为钱争吵。' },
        { w: 'support', t: '支持', e: 'I support your plan.', et: '我支持你的计划。' },
        { w: 'against', t: '反对', e: 'Many people are against it.', et: '很多人反对这件事。' },
        { w: 'fair', t: '公平的', e: 'That is not a fair rule.', et: '那规则不公平。' },
        { w: 'solution', t: '解决办法', e: 'We need a simple solution.', et: '我们需要一个简单的办法。' },
        { w: 'issue', t: '问题', e: 'This is a serious issue.', et: '这是个严重的问题。' }
      ] },
      { id: 'en-u17-l3', title: '未来与目标', items: [
        { w: 'ambition', t: '抱负', e: 'Her ambition is to become a writer.', et: '她的抱负是成为作家。' },
        { w: 'hope', t: '希望', e: 'I hope to see you again.', et: '我希望再见到你。' },
        { w: 'goal', t: '目标', e: 'My goal is to speak fluently.', et: '我的目标是说得流利。' },
        { w: 'dream', t: '梦想', e: 'Her dream is to travel alone.', et: '她的梦想是独自旅行。' },
        { w: 'opportunity', t: '机会', e: 'This is a good opportunity.', et: '这是个好机会。' },
        { w: 'challenge', t: '挑战', e: 'Learning a language is a challenge.', et: '学一门语言是个挑战。' },
        { w: 'progress', t: '进步', e: 'You are making good progress.', et: '你进步很大。' },
        { w: 'develop', t: '发展', e: 'Children develop quickly.', et: '孩子成长得很快。' },
        { w: 'confident', t: '自信的', e: 'I feel more confident now.', et: '我现在更自信了。' },
        { w: 'success', t: '成功', e: 'Practice leads to success.', et: '练习带来成功。' }
      ] }
    ] }
  ],
  dialogues: [
    {
      id: 'en-d1', level: 'A1', title: '在咖啡店点单', scene: '街角咖啡店',
      setup: '你走进一家咖啡店，店员在柜台后面招呼你。',
      lines: [
        { npc: 'Hi there! What can I get for you?', tr: '你好！想要点什么？' },
        { ask: '你会怎么点？', me: [
          { t: 'A coffee, please.', tr: '请给我一杯咖啡。', best: true },
          { t: 'I want coffee.', tr: '我要咖啡。' },
          { t: 'Coffee for me, and quick.', tr: '给我咖啡，快点。' }
        ] },
        { npc: 'Sure. Small or large?', tr: '好的。小杯还是大杯？' },
        { ask: '选一个杯型，并问价格。', me: [
          { t: 'Large, please. How much is it?', tr: '大杯，谢谢。多少钱？', best: true },
          { t: 'Large one.', tr: '大杯。' },
          { t: 'Big and cheap, please.', tr: '又大又便宜的。' }
        ] },
        { npc: 'Large is four dollars. Anything else?', tr: '大杯四美元。还要别的吗？' },
        { say: 'No, thank you. Here you are.', tr: '不用了，谢谢。给你钱。', hint: '告诉对方不用了，并把钱递过去' },
        { npc: 'Thank you! Your coffee is ready. Have a nice day.', tr: '谢谢！你的咖啡好了。祝你今天愉快。' }
      ]
    },
    {
      id: 'en-d2', level: 'A1', title: '问路去火车站', scene: '街边',
      setup: '你在陌生街区，想走到火车站但不确定方向。',
      lines: [
        { npc: 'You look lost. Can I help you?', tr: '你好像迷路了，需要帮忙吗？' },
        { ask: '先礼貌开口问路。', me: [
          { t: 'Excuse me, where is the train station?', tr: '打扰一下，火车站在哪里？', best: true },
          { t: 'Station. Where?', tr: '车站。哪里？' },
          { t: 'Take me to the station.', tr: '带我去车站。' }
        ] },
        { npc: 'Go straight and turn left at the bank.', tr: '一直走，在银行那里左转。' },
        { say: 'Go straight, then turn left at the bank. Is it far?', tr: '一直走，然后在银行左转。远吗？', hint: '重复一遍路线，并问距离' },
        { npc: 'No, it is about five minutes on foot.', tr: '不远，走路大概五分钟。' },
        { ask: '表达感谢并道别。', me: [
          { t: 'Thank you so much. Have a good day!', tr: '太感谢了，祝你今天愉快！', best: true },
          { t: 'Okay, bye.', tr: '好，再见。' },
          { t: 'Five minutes? Are you sure?', tr: '五分钟？你确定吗？' }
        ] },
        { npc: 'You are welcome. Enjoy your trip!', tr: '不客气，旅途愉快！' }
      ]
    },
    {
      id: 'en-d3', level: 'A1', title: '在商店买衣服', scene: '服装店',
      setup: '你想买一件外套，需要问尺码、试穿、问价格。',
      lines: [
        { npc: 'Good afternoon! Can I help you find something?', tr: '下午好！需要我帮你找点什么吗？' },
        { ask: '告诉店员你想买什么。', me: [
          { t: 'I am looking for a coat.', tr: '我在找一件外套。', best: true },
          { t: 'Coat. I want.', tr: '外套。我要。' },
          { t: 'Give me your best coat.', tr: '把你们最好的外套给我。' }
        ] },
        { npc: 'What size do you wear?', tr: '你穿什么尺码？' },
        { ask: '说出尺码并请求试穿。', me: [
          { t: 'Medium, please. Can I try it on?', tr: '中码，谢谢。我可以试穿吗？', best: true },
          { t: 'Medium.', tr: '中码。' },
          { t: 'Any size is fine.', tr: '什么码都行。' }
        ] },
        { npc: 'Sure, the fitting room is over there.', tr: '当然，试衣间在那边。' },
        { say: 'It fits well. How much is it?', tr: '很合身。多少钱？', hint: '试穿后表示合身，并问价格' },
        { npc: 'It is sixty dollars, and it is on sale today.', tr: '六十美元，而且今天打折。' },
        { ask: '决定买下来。', me: [
          { t: 'Great, I will take it.', tr: '太好了，我买了。', best: true },
          { t: 'Sixty? Too much.', tr: '六十？太贵了。' },
          { t: 'Maybe next time.', tr: '也许下次吧。' }
        ] }
      ]
    },
    {
      id: 'en-d4', level: 'A1', title: '第一次见面聊天', scene: '朋友聚会',
      setup: '朋友把你介绍给他的同事，你们第一次见面。',
      lines: [
        { npc: 'Hi, I am Daniel. Nice to meet you.', tr: '你好，我是丹尼尔。很高兴认识你。' },
        { ask: '回应自我介绍。', me: [
          { t: 'Nice to meet you too. I am Lin.', tr: '我也很高兴认识你，我是小林。', best: true },
          { t: 'Daniel. Okay.', tr: '丹尼尔。好。' },
          { t: 'Who are you again?', tr: '你再说一遍你是谁？' }
        ] },
        { npc: 'Are you a friend of Anna?', tr: '你是安娜的朋友吗？' },
        { ask: '说明关系，并反问对方。', me: [
          { t: 'Yes, we work together. How about you?', tr: '是的，我们一起工作。你呢？', best: true },
          { t: 'Yes.', tr: '是的。' },
          { t: 'That is my business.', tr: '这是我的私事。' }
        ] },
        { npc: 'I am her neighbor. What do you do?', tr: '我是她的邻居。你是做什么工作的？' },
        { say: 'I work at a small company. I study English after work.', tr: '我在一家小公司工作，下班后学英语。', hint: '简单介绍自己的工作与学习' },
        { npc: 'That is great. Let us keep in touch!', tr: '很棒啊，我们保持联系！' }
      ]
    },
    {
      id: 'en-d5', level: 'A2', title: '餐厅点餐与结账', scene: '晚餐餐厅',
      setup: '你和朋友在一家餐厅吃晚饭，需要点菜、要水、最后结账。',
      lines: [
        { npc: 'Good evening. A table for two?', tr: '晚上好，两位吗？' },
        { ask: '确认人数并要座位。', me: [
          { t: 'Yes, a table for two, please.', tr: '是的，请给我们两个人的位子。', best: true },
          { t: 'Two people.', tr: '两个人。' },
          { t: 'Any table.', tr: '随便什么桌子。' }
        ] },
        { npc: 'This way, please. Here is the menu.', tr: '这边请，这是菜单。' },
        { ask: '你想点菜，问问推荐。', me: [
          { t: 'What do you recommend tonight?', tr: '今晚有什么推荐的？', best: true },
          { t: 'I do not know this food.', tr: '我不认识这些菜。' },
          { t: 'Everything looks expensive.', tr: '看起来都很贵。' }
        ] },
        { npc: 'The fish is very fresh tonight.', tr: '今晚的鱼很新鲜。' },
        { say: 'I will have the fish, and a glass of water, please.', tr: '我要鱼，再要一杯水。', hint: '点菜并要一杯水' },
        { npc: 'Of course. Anything else?', tr: '好的，还要别的吗？' },
        { ask: '吃完后要结账。', me: [
          { t: 'No, thank you. Could we have the bill?', tr: '不用了，谢谢。可以结账吗？', best: true },
          { t: 'Money now.', tr: '现在给钱。' },
          { t: 'Where is the door?', tr: '门在哪里？' }
        ] },
        { npc: 'Sure, that is thirty dollars in total.', tr: '好的，一共三十美元。' }
      ]
    },
    {
      id: 'en-d6', level: 'A2', title: '坐地铁去机场', scene: '地铁站',
      setup: '你要赶飞机，但不确定坐哪条线、在哪站换乘。',
      lines: [
        { npc: 'Excuse me, do you need help?', tr: '打扰一下，你需要帮忙吗？' },
        { ask: '请对方告诉你去机场怎么坐地铁。', me: [
          { t: 'Yes, which line goes to the airport?', tr: '是的，哪条线去机场？', best: true },
          { t: 'Airport. Subway.', tr: '机场。地铁。' },
          { t: 'Move, please.', tr: '请让开。' }
        ] },
        { npc: 'Take line two and change at the central station.', tr: '坐二号线，在中央车站换乘。' },
        { say: 'Line two, then change at the central station. How long does it take?', tr: '二号线，然后在中央车站换乘。要多久？', hint: '确认线路，并问需要多久' },
        { npc: 'About forty minutes. The train is crowded now.', tr: '大约四十分钟。现在地铁很挤。' },
        { ask: '你时间紧，想确认还有几站。', me: [
          { t: 'How many stops from here?', tr: '从这里还有几站？', best: true },
          { t: 'I am late, I am late.', tr: '我晚了，我晚了。' },
          { t: 'Forty minutes is too long.', tr: '四十分钟太长了。' }
        ] },
        { npc: 'Six stops. You will be on time if you hurry.', tr: '六站。你抓紧时间就能赶上。' },
        { say: 'Thank you. I have to go now.', tr: '谢谢，我得赶紧走了。', hint: '表示感谢并告别' },
        { npc: 'Good luck, and have a safe flight!', tr: '祝你好运，飞行平安！' }
      ]
    },
    {
      id: 'en-d7', level: 'A2', title: '打电话约周末', scene: '电话里',
      setup: '你打电话给朋友，想约他周末一起看电影。',
      lines: [
        { npc: 'Hello? This is Mike speaking.', tr: '你好？我是迈克。' },
        { ask: '说明你是谁、为什么打来。', me: [
          { t: 'Hi Mike, it is Lin. Are you free this weekend?', tr: '嗨迈克，我是小林。你这周末有空吗？', best: true },
          { t: 'Mike. Weekend. Free?', tr: '迈克。周末。有空？' },
          { t: 'Who is this?', tr: '这是谁？' }
        ] },
        { npc: 'I am free on Saturday afternoon. What is the plan?', tr: '我星期六下午有空。什么安排？' },
        { ask: '提出一起看电影。', me: [
          { t: 'I want to see a film. Would you like to join me?', tr: '我想看一部电影。你愿意一起吗？', best: true },
          { t: 'We watch film. You come.', tr: '我们看电影。你来。' },
          { t: 'Nothing. Just call you.', tr: '没什么，就是打个电话。' }
        ] },
        { npc: 'Sounds good. Which film?', tr: '听起来不错。哪部电影？' },
        { say: 'The new comedy at three. Let us meet at the cinema at two thirty.', tr: '三点那场新喜剧。我们两点半在电影院见。', hint: '说出电影、时间与见面地点' },
        { npc: 'Perfect. See you on Saturday!', tr: '太好了，星期六见！' },
        { ask: '结束通话。', me: [
          { t: 'See you then. Bye!', tr: '到时候见，拜拜！', best: true },
          { t: 'Okay, hang up now.', tr: '好，现在挂吧。' },
          { t: 'Do not be late.', tr: '别迟到。' }
        ] }
      ]
    },
    {
      id: 'en-d8', level: 'A2', title: '看医生', scene: '诊所',
      setup: '你发烧、嗓子疼，来诊所看医生。',
      lines: [
        { npc: 'Good morning. What is the problem?', tr: '早上好，哪里不舒服？' },
        { ask: '描述症状。', me: [
          { t: 'I have a fever and a sore throat.', tr: '我发烧，嗓子也疼。', best: true },
          { t: 'I am sick.', tr: '我病了。' },
          { t: 'Everything hurts.', tr: '全身都疼。' }
        ] },
        { npc: 'How long have you felt like this?', tr: '这样多久了？' },
        { ask: '说清时间，并说明吃过什么药。', me: [
          { t: 'For two days. I took some cold medicine.', tr: '两天了。我吃过一点感冒药。', best: true },
          { t: 'Two days.', tr: '两天。' },
          { t: 'I do not remember.', tr: '我不记得了。' }
        ] },
        { npc: 'Do you have an allergy to any medicine?', tr: '你对什么药过敏吗？' },
        { say: 'I am not sure. I have never had an allergy.', tr: '我不确定，我从来没有过敏过。', hint: '回答过敏问题' },
        { npc: 'Alright. Take this medicine twice a day and rest.', tr: '好的。这个药一天吃两次，多休息。' },
        { ask: '确认用药方法。', me: [
          { t: 'Twice a day, after dinner. Thank you, doctor.', tr: '一天两次，晚饭后吃。谢谢医生。', best: true },
          { t: 'Okay, bye.', tr: '好，再见。' },
          { t: 'Can I go to work today?', tr: '我今天能去上班吗？' }
        ] },
        { npc: 'You should rest at home for two days. Get well soon!', tr: '你应该在家休息两天。早日康复！' }
      ]
    },
    {
      id: 'en-d9', level: 'B1', title: '预订酒店房间', scene: '酒店前台',
      setup: '你旅行到一座陌生城市，想订一间两晚的房间，房间要有窗、能看城市。',
      lines: [
        { npc: 'Good evening. How can I help you?', tr: '晚上好，有什么可以帮您？' },
        { ask: '说明你要订房和住多久。', me: [
          { t: 'I would like to book a room for two nights.', tr: '我想订一间房，住两晚。', best: true },
          { t: 'Room. Two.', tr: '房间。两个。' },
          { t: 'I need a bed tonight.', tr: '我今晚要一张床。' }
        ] },
        { npc: 'Of course. Do you have a reservation?', tr: '好的。您有预订吗？' },
        { ask: '说明没有预订，并问价格。', me: [
          { t: 'No, I do not. How much is it per night?', tr: '没有。每晚多少钱？', best: true },
          { t: 'No reservation. Cheap room.', tr: '没预订。便宜的房间。' },
          { t: 'Why do you ask?', tr: '你为什么问这个？' }
        ] },
        { npc: 'A standard room is eighty dollars a night. It has a window and a city view.', tr: '标准间一晚八十美元，有窗，能看到城市。' },
        { say: 'That sounds fine. I will take it for two nights.', tr: '听起来不错，我就订两晚。', hint: '确认订这间房、住两晚' },
        { npc: 'May I have your passport, please?', tr: '可以给我您的护照吗？' },
        { ask: '问早餐和退房时间。', me: [
          { t: 'Sure, here it is. Does the price include breakfast?', tr: '当然，给您。这个价格含早餐吗？', best: true },
          { t: 'Passport. Yes. Breakfast?', tr: '护照。是的。早餐？' },
          { t: 'I do not want breakfast.', tr: '我不要早餐。' }
        ] },
        { npc: 'Breakfast is included, and check-out is at noon. Here is your key card.', tr: '含早餐，中午十二点前退房。这是您的房卡。' },
        { say: 'Thank you. Which floor is my room on, and where is the lift?', tr: '谢谢。我的房间在几楼？电梯在哪里？', hint: '确认楼层和电梯位置' },
        { npc: 'You are on the ninth floor, and the lift is behind you.', tr: '您在九楼，电梯就在您身后。' }
      ]
    },
    {
      id: 'en-d10', level: 'B1', title: '机场值机与行李', scene: '机场值机柜台',
      setup: '你要坐国际航班，行李可能超重，需要办理值机、问清楚登机口。',
      lines: [
        { npc: 'Good morning. May I see your ticket and passport?', tr: '早上好，请给我机票和护照。' },
        { ask: '递上证件，并说明目的地。', me: [
          { t: 'Here you are. I am flying to London.', tr: '给您。我飞往伦敦。', best: true },
          { t: 'Ticket. London.', tr: '机票。伦敦。' },
          { t: 'Where is my plane?', tr: '我的飞机在哪？' }
        ] },
        { npc: 'Thank you. Please put your bag on the scale.', tr: '谢谢。请把包放在秤上。' },
        { ask: '发现行李超重，询问怎么办。', me: [
          { t: 'It looks too heavy. What should I do?', tr: '好像超重了。我该怎么办？', best: true },
          { t: 'Heavy bag.', tr: '重包。' },
          { t: 'I have no money.', tr: '我没钱。' }
        ] },
        { npc: 'It is three kilograms over. You can pay a fee or move some things to your hand bag.', tr: '超了三公斤。您可以付费，或者把一些东西放到随身包里。' },
        { say: 'I will move some clothes to my hand bag, thanks for the advice.', tr: '我把一些衣服放到随身包里，谢谢你的建议。', hint: '说出解决办法并致谢' },
        { npc: 'Good. Now please go to gate thirty-two.', tr: '好。现在请前往三十二号登机口。' },
        { ask: '确认登机口和登机时间。', me: [
          { t: 'Gate thirty-two. When does boarding start?', tr: '三十二号登机口。什么时候开始登机？', best: true },
          { t: 'Gate thirty-two. Good.', tr: '三十二号登机口。好。' },
          { t: 'Is the plane late?', tr: '飞机晚点了吗？' }
        ] },
        { npc: 'Boarding starts at eleven twenty. Have a nice flight!', tr: '十一点二十开始登机。祝您旅途愉快！' }
      ]
    },
    {
      id: 'en-d11', level: 'B1', title: '兼职面试', scene: '咖啡店办公室',
      setup: '你应聘一家咖啡店的周末兼职，需要介绍自己、说清可工作时间、回答对方提问。',
      lines: [
        { npc: 'Thanks for coming. Tell me a little about yourself.', tr: '谢谢你来。简单介绍一下你自己吧。' },
        { ask: '介绍身份、经验与性格。', me: [
          { t: 'I am a student, and I worked in a restaurant last summer.', tr: '我是学生，去年夏天在一家餐厅做过工。', best: true },
          { t: 'I am a student.', tr: '我是学生。' },
          { t: 'I need money.', tr: '我需要钱。' }
        ] },
        { npc: 'Why do you want to work here?', tr: '你为什么想来这里工作？' },
        { ask: '说明喜欢咖啡、想练沟通。', me: [
          { t: 'I like coffee, and I want to improve my speaking skills.', tr: '我喜欢咖啡，也想提高我的沟通能力。', best: true },
          { t: 'Because you are near my home.', tr: '因为你们离我家近。' },
          { t: 'I do not know.', tr: '我不知道。' }
        ] },
        { npc: 'We need someone on weekends. Are you free on Saturday and Sunday?', tr: '我们需要周末的人手。你星期六和星期日有空吗？' },
        { say: 'Yes, I am free both days. I can work from nine in the morning to six in the evening.', tr: '有空，两天都有空。我早上九点到晚上六点都能工作。', hint: '说明可工作时间' },
        { npc: 'That works. How do you deal with a busy line of customers?', tr: '可以。客人排长队的时候你怎么应对？' },
        { ask: '说出实际做法。', me: [
          { t: 'I stay calm and take orders one by one, and I ask a colleague for help.', tr: '我会保持冷静，一个个点单，并向同事求助。', best: true },
          { t: 'I work faster.', tr: '我就快点干。' },
          { t: 'I do not like long lines.', tr: '我不喜欢排长队。' }
        ] },
        { npc: 'Sounds good. We will call you next week.', tr: '听起来不错，我们下周会通知你。' },
        { say: 'Thank you for your time. I look forward to hearing from you.', tr: '谢谢您的时间，我期待您的回复。', hint: '礼貌结束面试' }
      ]
    },
    {
      id: 'en-d12', level: 'B1', title: '退换商品', scene: '商场服务台',
      setup: '你上周买的耳机有问题，带着小票来退换，需要说明问题、争取换货。',
      lines: [
        { npc: 'Hello. How can I help you today?', tr: '你好，今天有什么可以帮您？' },
        { ask: '说明来意并拿出小票。', me: [
          { t: 'I bought these earphones here, but they stopped working. Here is the receipt.', tr: '我在这里买的这副耳机不工作了。这是小票。', best: true },
          { t: 'These are broken.', tr: '这些坏了。' },
          { t: 'I want my money back now.', tr: '我现在就要退钱。' }
        ] },
        { npc: 'I am sorry about that. When did you buy them?', tr: '很抱歉。您什么时候买的？' },
        { ask: '说清购买时间与具体情况。', me: [
          { t: 'Last Friday. The right one is completely silent.', tr: '上个星期五。右边那只完全没有声音。', best: true },
          { t: 'Some days ago.', tr: '几天前。' },
          { t: 'I do not know. It is old.', tr: '我不知道。它很旧了。' }
        ] },
        { npc: 'We can replace them if they are within seven days. Do you have the box?', tr: '七天之内可以给您更换。您带包装盒了吗？' },
        { say: 'Yes, I have the box, but I lost the manual. Is that a problem?', tr: '我带了盒子，但说明书丢了。有问题吗？', hint: '说明自己带有什么、缺什么' },
        { npc: 'No, the box is enough. Would you like the same model or a different one?', tr: '没关系，有盒子就够了。您想换同款还是别的型号？' },
        { ask: '提出换同款或加钱换更好的。', me: [
          { t: 'I would like the same model, or I can pay more for a better one.', tr: '我想换同款，或者加钱换更好的。', best: true },
          { t: 'New one. Same.', tr: '新的。一样的。' },
          { t: 'Whatever you have.', tr: '你们有什么就什么。' }
        ] },
        { npc: 'Let me check. We have both. Which do you prefer?', tr: '我查一下。两种都有。您更喜欢哪种？' },
        { say: 'The better one, please. How much extra should I pay?', tr: '要更好的那个。我需要多付多少钱？', hint: '确认选择并问差价' },
        { npc: 'Twenty dollars extra. I will process it for you now.', tr: '多付二十美元。我现在为您办理。' }
      ]
    }
  ]
});
