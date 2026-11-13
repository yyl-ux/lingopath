LP.registerCourse({
  id: 'en', name: '英语', native: 'English', flag: '🇺🇸', tts: 'en-US', typing: true, order: true,
  levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
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
        { w: 'slim', t: '苗条的', e: 'She is slim and healthy.', et: '她又苗条又健康。' },
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
    { id: 'en-u18', level: 'A1', title: '第十八单元 · 天气与季节', desc: '说天气、认四季，出门前先看天', color: '#ce82ff', lessons: [
      { id: 'en-u18-l1', title: '天气怎么样', items: [
        { w: 'weather', t: '天气', e: 'What is the weather like today?', et: '今天天气怎么样？' },
        { w: 'sunny', t: '晴朗的', e: 'It is sunny and warm today.', et: '今天晴天，很暖和。' },
        { w: 'cloudy', t: '多云的', e: 'It is cloudy, so it is not too hot.', et: '今天多云，所以不太热。' },
        { w: 'rainy', t: '下雨的', e: 'It is a rainy day today.', et: '今天是个雨天。' },
        { w: 'windy', t: '有风的', e: 'It is too windy to ride a bike.', et: '风太大，不能骑车。' },
        { w: 'hot', t: '热的', e: 'It gets very hot in August.', et: '八月天气很热。' },
        { w: 'foggy', t: '有雾的', e: 'It is foggy near the river in the morning.', et: '早上河边雾蒙蒙的。' },
        { w: 'warm', t: '温暖的', e: 'The weather is warm in May.', et: '五月天气温暖。' },
        { w: 'cool', t: '凉爽的', e: 'The mornings are cool in autumn.', et: '秋天的早晨很凉爽。' },
        { w: 'outside', t: '外面', e: 'The children are playing outside.', et: '孩子们在外面玩。' }
      ] },
      { id: 'en-u18-l2', title: '一年四季', items: [
        { w: 'spring', t: '春天', e: 'Flowers come out in spring.', et: '春天花儿开放。' },
        { w: 'summer', t: '夏天', e: 'We often go to the beach in summer.', et: '夏天我们常去海边。' },
        { w: 'autumn', t: '秋天', e: 'Autumn is the best season for hiking.', et: '秋天是最适合远足的季节。' },
        { w: 'winter', t: '冬天', e: 'It snows a lot in my hometown in winter.', et: '我的家乡冬天下很多雪。' },
        { w: 'season', t: '季节', e: 'Autumn is my favorite season.', et: '秋天是我最喜欢的季节。' },
        { w: 'sun', t: '太阳', e: 'Sit in the sun, and you will feel warm.', et: '坐在太阳下，你会觉得暖和。' },
        { w: 'rain', t: '雨/下雨', e: 'Heavy rain stopped the football game.', et: '大雨让足球赛停了。' },
        { w: 'snow', t: '雪/下雪', e: 'The first snow came early this year.', et: '今年的第一场雪来得早。' },
        { w: 'wind', t: '风', e: 'The wind blew my hat away.', et: '风把我的帽子吹走了。' },
        { w: 'sky', t: '天空', e: 'The sky is clear tonight.', et: '今晚天空很晴朗。' }
      ] },
      { id: 'en-u18-l3', title: '出门看天', items: [
        { w: 'umbrella', t: '伞', e: 'Take an umbrella. It may rain this afternoon.', et: '带把伞，今天下午可能下雨。' },
        { w: 'raincoat', t: '雨衣', e: 'He always keeps a raincoat in his bag.', et: '他包里总放着一件雨衣。' },
        { w: 'forecast', t: '天气预报', e: 'The forecast says it will be sunny this weekend.', et: '天气预报说这个周末是晴天。' },
        { w: 'degree', t: '度', e: 'It is thirty-five degrees today. So hot!', et: '今天三十五度，太热了！' },
        { w: 'storm', t: '暴风雨', e: 'The storm knocked down many trees.', et: '暴风雨刮倒了很多树。' },
        { w: 'ice', t: '冰', e: 'There is ice on the lake in winter.', et: '冬天湖面上结冰。' },
        { w: 'fog', t: '雾', e: 'Heavy fog covered the city this morning.', et: '今早大雾笼罩了城市。' },
        { w: 'dry', t: '干燥的', e: 'The air is very dry in winter.', et: '冬天空气非常干燥。' },
        { w: 'wet', t: '湿的', e: 'My hair is still wet.', et: '我的头发还是湿的。' }
      ] }
    ] },
    { id: 'en-u23', level: 'A1', title: '第二十三单元 · 外出吃饭', desc: '进店、点菜、买单，一顿饭说得清楚', color: '#58cc02', lessons: [
      { id: 'en-u23-l1', title: '进门与点菜', items: [
        { w: 'waiter', t: '服务员', e: 'The waiter brought us two menus.', et: '服务员给我们拿来了两份菜单。' },
        { w: 'table', t: '桌子', e: 'We asked for a table near the window.', et: '我们要了一张靠窗的桌子。' },
        { w: 'dish', t: '一道菜', e: 'This dish is very popular in this restaurant.', et: '这道菜在这家餐馆很受欢迎。' },
        { w: 'special', t: '今日特餐', e: 'Today the special is fish soup.', et: '今天的特餐是鱼汤。' },
        { w: 'spicy', t: '辣的', e: 'I like spicy food, but not too spicy.', et: '我喜欢辣的食物，但不要太辣。' },
        { w: 'dessert', t: '甜点', e: 'Do you want dessert after the meal?', et: '饭后要甜点吗？' },
        { w: 'starter', t: '前菜', e: 'We shared a starter before the main dish.', et: '主菜之前我们分享了一份前菜。' },
        { w: 'napkin', t: '餐巾', e: 'Could I have another napkin, please?', et: '能再给我一张餐巾吗？' },
        { w: 'fork', t: '叉子', e: 'He eats salad with a fork.', et: '他用叉子吃色拉。' }
      ] },
      { id: 'en-u23-l2', title: '餐具与味道', items: [
        { w: 'knife', t: '刀', e: 'The knife is not sharp enough.', et: '这把刀不够锋利。' },
        { w: 'spoon', t: '勺子', e: 'She eats soup with a spoon.', et: '她用勺子喝汤。' },
        { w: 'chopsticks', t: '筷子', e: 'Can you use chopsticks?', et: '你会用筷子吗？' },
        { w: 'plate', t: '盘子', e: 'There is a little rice left on the plate.', et: '盘子里还剩一点米饭。' },
        { w: 'bowl', t: '碗', e: 'A bowl of noodles, please.', et: '请来一碗面。' },
        { w: 'glass', t: '玻璃杯', e: 'He drank a glass of water before dinner.', et: '他晚饭前喝了一杯水。' },
        { w: 'sweet', t: '甜的', e: 'This cake is too sweet for me.', et: '这蛋糕对我来说太甜了。' },
        { w: 'salty', t: '咸的', e: 'The soup tastes a little salty.', et: '这汤尝起来有点咸。' },
        { w: 'delicious', t: '好吃的', e: 'The fish was delicious.', et: '那条鱼很好吃。' }
      ] },
      { id: 'en-u23-l3', title: '买单结账', items: [
        { w: 'bill', t: '账单', e: 'Could we have the bill, please?', et: '请给我们账单好吗？' },
        { w: 'tip', t: '小费', e: 'We left a small tip on the table.', et: '我们在桌上留了一点小费。' },
        { w: 'total', t: '总额', e: 'The total is forty dollars.', et: '总共四十美元。' },
        { w: 'split', t: '分摊', e: 'Let us split the bill.', et: '我们分摊账单吧。' },
        { w: 'cashier', t: '收银员', e: 'The cashier handed me the change.', et: '收银员把零钱递给了我。' },
        { w: 'pay', t: '付款', e: 'I will pay by card.', et: '我用卡付款。' },
        { w: 'takeaway', t: '外卖', e: 'We ordered takeaway because we were tired.', et: '我们累了，就叫了外卖。' },
        { w: 'leftovers', t: '剩菜', e: 'Please put the leftovers in a box.', et: '请把剩菜装进盒子里。' },
        { w: 'purse', t: '钱包', e: 'She took her purse out of her bag.', et: '她从包里拿出了钱包。' }
      ] }
    ] },
    { id: 'en-u24', level: 'A1', title: '第二十四单元 · 商店购物', desc: '问价、选尺码、试穿、付款退换', color: '#ff9600', lessons: [
      { id: 'en-u24-l1', title: '问价看货', items: [
        { w: 'item', t: '商品', e: 'Every item in this shop is on sale.', et: '这家店里每件商品都在打折。' },
        { w: 'product', t: '产品', e: 'This product is made in China.', et: '这个产品是中国制造的。' },
        { w: 'tag', t: '价签', e: 'The price tag says thirty yuan.', et: '价签上写着三十元。' },
        { w: 'label', t: '标签', e: 'Read the label before you buy it.', et: '买之前看一下标签。' },
        { w: 'dollar', t: '美元', e: 'It costs ten dollars.', et: '这个十美元。' },
        { w: 'yuan', t: '元', e: 'I paid eighty yuan for this shirt.', et: '这件衬衫我花了八十元。' },
        { w: 'worth', t: '值……的', e: 'This coat is worth the money.', et: '这件外套值这个价。' },
        { w: 'offer', t: '特惠', e: 'The shop has a special offer this week.', et: '这家店本周有特惠。' },
        { w: 'half price', t: '半价', e: 'These shoes are half price today.', et: '这些鞋今天半价。' }
      ] },
      { id: 'en-u24-l2', title: '尺码与颜色', items: [
        { w: 'loose', t: '宽松的', e: 'This shirt is a little loose for me.', et: '这件衬衫对我有点宽松。' },
        { w: 'sleeve', t: '袖子', e: 'The sleeves are too long.', et: '袖子太长了。' },
        { w: 'waist', t: '腰围', e: 'The waist of these pants is too tight.', et: '这条裤子的腰太紧了。' },
        { w: 'length', t: '长度', e: 'The length is fine, but the color is dark.', et: '长度可以，但颜色太深。' },
        { w: 'match', t: '搭配', e: 'This bag matches your dress well.', et: '这个包和你的裙子很搭。' },
        { w: 'style', t: '款式', e: 'I like the style of this jacket.', et: '我喜欢这件夹克的款式。' },
        { w: 'cotton', t: '棉', e: 'I prefer cotton shirts in summer.', et: '夏天我更喜欢棉质衬衫。' },
        { w: 'striped', t: '条纹的', e: 'She bought a striped skirt.', et: '她买了一条条纹裙。' },
        { w: 'extra large', t: '加大号', e: 'Do you have this in extra large?', et: '这件有加大号的吗？' }
      ] },
      { id: 'en-u24-l3', title: '付款与退换', items: [
        { w: 'checkout', t: '收银台', e: 'There is a long line at the checkout.', et: '收银台前排了长队。' },
        { w: 'basket', t: '购物篮', e: 'He put two bottles into the basket.', et: '他往篮子里放了两瓶。' },
        { w: 'trolley', t: '手推车', e: 'We need a trolley for the water.', et: '我们需要一辆手推车装水。' },
        { w: 'coupon', t: '优惠券', e: 'I used a coupon and saved five dollars.', et: '我用了一张优惠券，省了五美元。' },
        { w: 'faulty', t: '有毛病的', e: 'The radio was faulty, so I brought it back.', et: '收音机有毛病，所以我把它拿回来了。' },
        { w: 'proof', t: '凭证', e: 'Keep the receipt as proof of purchase.', et: '保留小票作为购买凭证。' },
        { w: 'guarantee', t: '保修', e: 'The watch comes with a two-year guarantee.', et: '这块表有两年的保修。' },
        { w: 'refundable', t: '可退款的', e: 'The ticket is not refundable.', et: '这张票不能退款。' },
        { w: 'apology', t: '道歉', e: 'The manager gave us a sincere apology.', et: '经理向我们真诚道歉。' }
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
    { id: 'en-u19', level: 'A2', title: '第十九单元 · 银行办手续', desc: '开户、存取、兑换，银行业务自己办', color: '#ffc800', lessons: [
      { id: 'en-u19-l1', title: '开户与存钱', items: [
        { w: 'bank', t: '银行', e: 'I go to the bank every Friday.', et: '我每周五去银行。' },
        { w: 'account', t: '账户', e: 'She opened a new account yesterday.', et: '她昨天开了一个新账户。' },
        { w: 'open', t: '开立', e: 'I want to open a savings account.', et: '我想开一个储蓄账户。' },
        { w: 'form', t: '表格', e: 'The form is two pages long.', et: '这张表格有两页。' },
        { w: 'sign', t: '签名', e: 'Sign your name at the bottom.', et: '请在最下面签名。' },
        { w: 'ID card', t: '身份证', e: 'You need an ID card to open an account.', et: '开户需要身份证。' },
        { w: 'deposit', t: '存入', e: 'I want to deposit two thousand yuan.', et: '我想存两千元。' },
        { w: 'withdraw', t: '取出', e: 'You can withdraw money at any branch.', et: '你可以在任何网点取钱。' },
        { w: 'interest', t: '利息', e: 'Savings earn a little interest.', et: '存款能赚一点利息。' },
        { w: 'branch', t: '网点/分行', e: 'This bank has many branches in the city.', et: '这家银行在市里有很多网点。' }
      ] },
      { id: 'en-u19-l2', title: '取钱与转账', items: [
        { w: 'ATM', t: '取款机', e: 'There is an ATM next to the bank.', et: '银行旁边有一台取款机。' },
        { w: 'password', t: '密码', e: 'Never tell anyone your password.', et: '永远不要把密码告诉任何人。' },
        { w: 'fee', t: '手续费', e: 'The bank charges a fee for this service.', et: '银行对这项服务收费。' },
        { w: 'currency', t: '货币', e: 'The shop only takes the local currency.', et: '这家店只收当地货币。' },
        { w: 'online banking', t: '网上银行', e: 'I use online banking to pay my bills.', et: '我用网上银行付账单。' },
        { w: 'statement', t: '对账单', e: 'I check my statement every month.', et: '我每个月查看对账单。' },
        { w: 'mobile payment', t: '手机支付', e: 'Mobile payment is popular here.', et: '手机支付在这里很流行。' },
        { w: 'loan', t: '贷款', e: 'They got a loan from the bank to buy a house.', et: '他们从银行贷款买房。' }
      ] },
      { id: 'en-u19-l3', title: '柜台办事', items: [
        { w: 'queue', t: '排队/队伍', e: 'The queue at the bank is short in the morning.', et: '早上银行排队的人少。' },
        { w: 'take a number', t: '取号', e: 'Take a number first, then wait for your turn.', et: '先取个号，然后等叫号。' },
        { w: 'counter', t: '柜台', e: 'Please go to counter three.', et: '请去三号柜台。' },
        { w: 'clerk', t: '柜员', e: 'The clerk was very patient with my questions.', et: '柜员对我的问题很有耐心。' },
        { w: 'fill in', t: '填写', e: 'Fill in your name and phone number here.', et: '在这里填写您的姓名和电话。' },
        { w: 'expire', t: '到期', e: 'My card will expire next month.', et: '我的卡下个月到期。' },
        { w: 'renew', t: '续办/续期', e: 'I came here to renew my card.', et: '我来这里续办我的卡。' },
        { w: 'convert', t: '兑换/转换', e: 'I want to convert some dollars into yuan.', et: '我想把一些美元换成人民币。' },
        { w: 'card', t: '银行卡', e: 'Insert your card and enter your password.', et: '插入银行卡并输入密码。' },
        { w: 'passbook', t: '存折', e: 'Grandpa checks his passbook every month.', et: '爷爷每个月都要看存折。' }
      ] }
    ] },
    { id: 'en-u20', level: 'A2', title: '第二十单元 · 紧急求助', desc: '报警呼救、报案挂失，紧急时刻说清情况', color: '#ff4b4b', lessons: [
      { id: 'en-u20-l1', title: '呼救与报警', items: [
        { w: 'emergency', t: '紧急情况', e: 'In an emergency, call this number.', et: '遇到紧急情况，打这个电话。' },
        { w: 'danger', t: '危险', e: 'The sign says Danger. Keep out.', et: '牌子上写着危险，请勿靠近。' },
        { w: 'call the police', t: '报警', e: 'Someone called the police at once.', et: '有人立刻报了警。' },
        { w: 'fire', t: '火灾', e: 'The fire started in the kitchen.', et: '火是从厨房烧起来的。' },
        { w: 'smoke', t: '烟', e: 'Smoke filled the hallway quickly.', et: '走廊里很快充满了烟。' },
        { w: 'alarm', t: '警报', e: 'The fire alarm woke everyone up.', et: '火警警报把大家都叫醒了。' },
        { w: 'escape', t: '逃生/逃脱', e: 'We escaped from the building through the back door.', et: '我们从后门逃出了大楼。' },
        { w: 'shout', t: '大声呼喊', e: 'He shouted for help, but nobody heard him.', et: '他大声呼救，但没人听到。' },
        { w: 'accident', t: '事故', e: 'There was a small accident on the highway.', et: '高速路上出了一场小事故。' },
        { w: 'firefighter', t: '消防员', e: 'The firefighter carried the child out of the smoke.', et: '消防员把孩子从烟里抱了出来。' }
      ] },
      { id: 'en-u20-l2', title: '丢失与报案', items: [
        { w: 'missing', t: '不见了/失踪的', e: 'I cannot find my keys. They are missing.', et: '我找不到钥匙了，钥匙不见了。' },
        { w: 'stolen', t: '被偷的', e: 'My phone was stolen on the bus.', et: '我的手机在公交上被偷了。' },
        { w: 'wallet', t: '钱包', e: 'I keep my ID card in my wallet.', et: '我把身份证放在钱包里。' },
        { w: 'thief', t: '小偷', e: 'The thief took her bag and ran away.', et: '小偷抢了她的包跑掉了。' },
        { w: 'police officer', t: '警察', e: 'I told the police officer everything.', et: '我把一切都告诉了警察。' },
        { w: 'describe', t: '描述', e: 'Can you describe what the man looked like?', et: '你能描述一下那个男的长什么样吗？' },
        { w: 'notice', t: '注意到', e: 'She noticed her phone was missing.', et: '她发现手机不见了。' },
        { w: 'stranger', t: '陌生人', e: 'The child should not follow strangers.', et: '孩子不应该跟陌生人走。' },
        { w: 'witness', t: '目击者', e: 'The police are looking for a witness.', et: '警察正在寻找目击者。' },
        { w: 'cancel the card', t: '挂失银行卡', e: 'Please cancel the card. I cannot find it.', et: '请挂失这张卡，我找不到它了。' }
      ] },
      { id: 'en-u20-l3', title: '受伤与被困', items: [
        { w: 'ambulance', t: '救护车', e: 'Someone called an ambulance.', et: '有人叫了救护车。' },
        { w: 'injured', t: '受伤的', e: 'One player was injured in the game.', et: '一名球员在比赛中受伤了。' },
        { w: 'bleed', t: '流血', e: 'My finger is bleeding.', et: '我的手指在流血。' },
        { w: 'burn', t: '烫伤/烧伤', e: 'The hot water burned my hand.', et: '热水烫了我的手。' },
        { w: 'first aid', t: '急救', e: 'She learned first aid at school.', et: '她在学校学过急救。' },
        { w: 'lift', t: '电梯', e: 'Take the lift to the third floor.', et: '乘电梯到三楼。' },
        { w: 'stuck', t: '被困的', e: 'We were stuck in the lift for an hour.', et: '我们在电梯里被困了一个小时。' },
        { w: 'exit', t: '出口', e: 'Follow the green signs to the exit.', et: '跟着绿色标志走到出口。' },
        { w: 'rescue', t: '营救', e: 'They rescued the boy from the river.', et: '他们把男孩从河里救了上来。' }
      ] }
    ] },
    { id: 'en-u25', level: 'A2', title: '第二十五单元 · 看病就医', desc: '说清症状、挂号看诊、药店拿药、听懂医嘱', color: '#1cb0f6', lessons: [
      { id: 'en-u25-l1', title: '说清症状', items: [
        { w: 'rash', t: '皮疹', e: 'A red rash appeared on my arms.', et: '我胳膊上起了红疹。' },
        { w: 'temperature', t: '体温', e: 'The nurse took my temperature first.', et: '护士先给我量了体温。' },
        { w: 'stomachache', t: '肚子疼', e: 'I have had a stomachache since last night.', et: '我从昨晚开始肚子疼。' },
        { w: 'toothache', t: '牙疼', e: 'A bad toothache kept me awake.', et: '严重的牙疼让我睡不着。' },
        { w: 'backache', t: '背疼', e: 'Sitting all day gives me a backache.', et: '坐一整天让我背疼。' },
        { w: 'infection', t: '感染', e: 'The cut led to an infection.', et: '伤口引起了感染。' },
        { w: 'virus', t: '病毒', e: 'It is a virus, so antibiotics will not help.', et: '这是病毒，抗生素没有用。' },
        { w: 'blood pressure', t: '血压', e: 'My blood pressure is a little high.', et: '我的血压有点高。' },
        { w: 'swell', t: '肿胀', e: 'My ankle began to swell after the fall.', et: '摔倒后我的脚踝开始肿起来。' }
      ] },
      { id: 'en-u25-l2', title: '挂号与看诊', items: [
        { w: 'register', t: '登记', e: 'Please register at the desk on the first floor.', et: '请在一楼的服务台登记。' },
        { w: 'receptionist', t: '接待员', e: 'The receptionist asked for my ID card.', et: '接待员要了我的身份证。' },
        { w: 'specialist', t: '专科医生', e: 'My doctor sent me to a heart specialist.', et: '医生让我去看心脏专科医生。' },
        { w: 'refer', t: '转诊', e: 'She was referred to a larger hospital.', et: '她被转到了更大的医院。' },
        { w: 'diagnose', t: '诊断', e: 'The doctor diagnosed it as a mild flu.', et: '医生诊断为轻度流感。' },
        { w: 'X-ray', t: 'X光片', e: 'The X-ray shows nothing broken.', et: 'X光片显示没有骨折。' },
        { w: 'blood test', t: '验血', e: 'I need a blood test before the treatment.', et: '治疗前我需要验血。' },
        { w: 'consult', t: '咨询（医生）', e: 'He consulted a doctor about his cough.', et: '他就咳嗽的事咨询了医生。' },
        { w: 'ward', t: '病房', e: 'She stayed in the ward for three days.', et: '她在病房住了三天。' }
      ] },
      { id: 'en-u25-l3', title: '药店与医嘱', items: [
        { w: 'pharmacy', t: '药店', e: 'The pharmacy is open until ten.', et: '药店营业到十点。' },
        { w: 'dose', t: '剂量', e: 'Do not take more than the stated dose.', et: '不要超过标明的剂量。' },
        { w: 'tablet', t: '药片', e: 'Take one tablet with water.', et: '用水送服一片药。' },
        { w: 'syrup', t: '糖浆', e: 'The cough syrup tastes sweet.', et: '止咳糖浆味道很甜。' },
        { w: 'ointment', t: '药膏', e: 'Put a little ointment on the burn.', et: '在烫伤处涂一点药膏。' },
        { w: 'side effect', t: '副作用', e: 'This medicine may cause sleepiness as a side effect.', et: '这种药可能引起嗜睡的副作用。' },
        { w: 'prescribe', t: '开药', e: 'The doctor prescribed some pills for my back.', et: '医生给我的背开了些药片。' },
        { w: 'instruction', t: '说明', e: 'Follow the instructions on the box.', et: '按照盒子上的说明使用。' },
        { w: 'twice a day', t: '一天两次', e: 'Take the medicine twice a day after meals.', et: '每天饭后吃两次药。' }
      ] }
    ] },
    { id: 'en-u26', level: 'A2', title: '第二十六单元 · 问路与交通', desc: '问路、坐公交地铁、打车买票，路上不慌', color: '#ce82ff', lessons: [
      { id: 'en-u26-l1', title: '问路方向', items: [
        { w: 'corner', t: '拐角', e: 'The bank is on the corner of this street.', et: '银行在这条街的拐角。' },
        { w: 'block', t: '街区', e: 'Walk two blocks and you will see the park.', et: '走两个街区就能看到公园。' },
        { w: 'crossroads', t: '十字路口', e: 'Turn right at the next crossroads.', et: '在下一个十字路口右转。' },
        { w: 'traffic light', t: '红绿灯', e: 'Wait for the green traffic light.', et: '等绿灯亮。' },
        { w: 'bridge', t: '桥', e: 'Cross the bridge and keep going.', et: '过桥后继续走。' },
        { w: 'square', t: '广场', e: 'The museum is near the main square.', et: '博物馆在中心广场附近。' },
        { w: 'opposite', t: '在对面', e: 'The hotel is opposite the post office.', et: '酒店在邮局对面。' },
        { w: 'straight', t: '直走', e: 'Go straight for about ten minutes.', et: '直走大约十分钟。' },
        { w: 'turn', t: '转弯', e: 'Turn left after the school.', et: '过了学校左转。' }
      ] },
      { id: 'en-u26-l2', title: '公交与地铁', items: [
        { w: 'stop', t: '车站', e: 'The bus stop is right in front of us.', et: '公交站就在我们前面。' },
        { w: 'line', t: '线路', e: 'Line Two goes to the airport.', et: '二号线开往机场。' },
        { w: 'top up', t: '充值', e: 'I need to top up my travel card.', et: '我得给交通卡充值。' },
        { w: 'monthly pass', t: '月票', e: 'A monthly pass is cheaper than single tickets.', et: '月票比单程票便宜。' },
        { w: 'driver', t: '司机', e: 'The driver told us to move back.', et: '司机让我们往后走。' },
        { w: 'express', t: '快车', e: 'Take the express train to save time.', et: '坐快车能省时间。' },
        { w: 'connect', t: '换乘衔接', e: 'This line connects with the airport bus.', et: '这条线接机场巴士。' },
        { w: 'squeeze', t: '挤', e: 'We had to squeeze into the last train.', et: '我们只好挤上末班车。' },
        { w: 'button', t: '按钮', e: 'Press the button to open the door.', et: '按按钮开门。' }
      ] },
      { id: 'en-u26-l3', title: '打车与买票', items: [
        { w: 'meter', t: '计价器', e: 'The taxi meter started at eight dollars.', et: '出租车起步价八美元。' },
        { w: 'drop off', t: '送到', e: 'Please drop me off at the hotel gate.', et: '请让我在酒店门口下车。' },
        { w: 'pick up', t: '接上', e: 'The bus picks up passengers every ten minutes.', et: '这趟公交每十分钟接一次乘客。' },
        { w: 'one way', t: '单程', e: 'A one way ticket to the city, please.', et: '请给我一张去市区的单程票。' },
        { w: 'round trip', t: '往返', e: 'A round trip is ten dollars cheaper.', et: '往返票便宜十美元。' },
        { w: 'seat belt', t: '安全带', e: 'Please fasten your seat belt.', et: '请系好安全带。' },
        { w: 'traffic jam', t: '堵车', e: 'We were late because of a traffic jam.', et: '因为堵车我们迟到了。' },
        { w: 'shortcut', t: '近路', e: 'The driver took a shortcut through the small streets.', et: '司机抄小路走近道。' },
        { w: 'detour', t: '绕行', e: 'The road is closed, so we have to take a detour.', et: '路封了，我们得绕行。' }
      ] }
    ] },
    { id: 'en-u27', level: 'A2', title: '第二十七单元 · 打电话与预约', desc: '打电话、留言、预约时间、取消改期', color: '#ff4b4b', lessons: [
      { id: 'en-u27-l1', title: '打电话', items: [
        { w: 'call', t: '打电话', e: 'I will call you after lunch.', et: '我午饭后给你打电话。' },
        { w: 'dial', t: '拨号', e: 'Dial the number and wait for an answer.', et: '拨号，然后等对方接听。' },
        { w: 'ring', t: '响铃', e: 'The phone rang three times.', et: '电话响了三声。' },
        { w: 'voicemail', t: '语音留言', e: 'Nobody answered, so I left a voicemail.', et: '没人接，所以我留了语音留言。' },
        { w: 'message', t: '信息', e: 'I got your message this morning.', et: '我今天早上收到你的信息。' },
        { w: 'hold on', t: '稍等', e: 'Hold on a moment, please.', et: '请稍等一下。' },
        { w: 'hang up', t: '挂电话', e: 'Do not hang up before I finish.', et: '我话没说完别挂电话。' },
        { w: 'wrong number', t: '打错的号码', e: 'Sorry, I think you have the wrong number.', et: '抱歉，我想你打错号码了。' },
        { w: 'operator', t: '接线员', e: 'The operator put me through to the manager.', et: '接线员帮我接通了经理。' }
      ] },
      { id: 'en-u27-l2', title: '留言与转接', items: [
        { w: 'leave a message', t: '留言', e: 'May I leave a message for Anna?', et: '我能给安娜留个口信吗？' },
        { w: 'call back', t: '回电话', e: 'I will call back in twenty minutes.', et: '我二十分钟后再打过来。' },
        { w: 'speak to', t: '和……通话', e: 'I would like to speak to Mr. Li.', et: '我想和李先生通话。' },
        { w: 'extension', t: '分机号', e: 'His extension is two zero four.', et: '他的分机号是204。' },
        { w: 'available', t: '有空的', e: 'She is not available right now.', et: '她现在不方便接电话。' },
        { w: 'take a message', t: '记下留言', e: 'Could you take a message, please?', et: '你能帮我记一下留言吗？' },
        { w: 'urgent', t: '紧急的', e: 'This is urgent, so please tell him now.', et: '这事很急，请现在告诉他。' },
        { w: 'get back to', t: '回复（某人）', e: 'I will get back to you before noon.', et: '我中午前回复你。' },
        { w: 'engaged', t: '占线', e: 'The line is engaged. Please try later.', et: '线路占线，请稍后再试。' }
      ] },
      { id: 'en-u27-l3', title: '预约与改期', items: [
        { w: 'confirm', t: '确认', e: 'I am calling to confirm my appointment.', et: '我打电话来确认我的预约。' },
        { w: 'reschedule', t: '改期', e: 'Can we reschedule the meeting to Friday?', et: '我们能把会议改到周五吗？' },
        { w: 'slot', t: '时段', e: 'The morning slot is already full.', et: '上午的时段已经满了。' },
        { w: 'postpone', t: '推迟', e: 'They postponed the check-up until next week.', et: '他们把体检推迟到下周。' },
        { w: 'remind', t: '提醒', e: 'Please remind me the day before.', et: '请提前一天提醒我。' },
        { w: 'arrange', t: '安排', e: 'I can arrange a visit for you.', et: '我可以为你安排一次探访。' },
        { w: 'fit in', t: '插入安排', e: 'The doctor can fit you in at four.', et: '医生四点能给你安排上。' },
        { w: 'in advance', t: '提前', e: 'Please book your seat in advance.', et: '请提前订座。' },
        { w: 'earliest', t: '最早的', e: 'The earliest time is nine tomorrow.', et: '最早是明天九点。' }
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
        { w: 'cancel', t: '取消', e: 'They canceled the flight.', et: '他们取消了航班。' },
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
        { w: 'responsibility', t: '职责', e: 'Safety is the responsibility of everyone.', et: '安全是每个人的责任。' },
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
        { w: 'sneeze', t: '打喷嚏', e: 'I sneezed all morning.', et: '我一早上都在打喷嚏。' },
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
    ] },
    { id: 'en-u21', level: 'B1', title: '第二十一单元 · 新闻与社会', desc: '读懂新闻、讨论社会话题，看法有理有据', color: '#ce82ff', lessons: [
      { id: 'en-u21-l1', title: '读新闻', items: [
        { w: 'news', t: '新闻', e: 'I listen to the news while making breakfast.', et: '我做早餐时听新闻。' },
        { w: 'headline', t: '标题', e: 'The headline says the city will build a new hospital.', et: '标题说市里要建一座新医院。' },
        { w: 'article', t: '文章', e: 'She wrote a long article about food safety.', et: '她写了一篇关于食品安全的文章。' },
        { w: 'journalist', t: '记者', e: 'The journalist asked the mayor several questions.', et: '记者问了市长几个问题。' },
        { w: 'media', t: '媒体', e: 'Traditional media and online media tell the story differently.', et: '传统媒体和网上媒体讲这个故事的方式不一样。' },
        { w: 'local', t: '当地的', e: 'The local news says the road will close next month.', et: '本地新闻说那条路下个月要封闭。' },
        { w: 'national', t: '全国的', e: 'It started as local news, then became national news.', et: '它起初是本地新闻，后来成了全国新闻。' },
        { w: 'recent', t: '最近的', e: 'In recent years, more people get news on their phones.', et: '近年来更多人在手机上看新闻。' },
        { w: 'event', t: '事件/活动', e: 'The festival was the biggest event of the year.', et: '这个节日是全年最大的活动。' },
        { w: 'cover', t: '报道', e: 'A local TV station covered the story last night.', et: '一家本地电视台昨晚报道了这件事。' }
      ] },
      { id: 'en-u21-l2', title: '社会话题', items: [
        { w: 'society', t: '社会', e: 'Housing is a big topic in our society.', et: '住房是我们社会的一个大话题。' },
        { w: 'topic', t: '话题', e: 'Education is a hot topic these days.', et: '教育是如今的热门话题。' },
        { w: 'government', t: '政府', e: 'The government plans to build more schools.', et: '政府计划建更多学校。' },
        { w: 'policy', t: '政策', e: 'The new policy will start next year.', et: '新政策明年开始实施。' },
        { w: 'law', t: '法律', e: 'It is important to know the basic law.', et: '了解基本法律很重要。' },
        { w: 'citizen', t: '公民', e: 'Every citizen has the right to speak.', et: '每个公民都有发言的权利。' },
        { w: 'tax', t: '税', e: 'People pay tax on what they earn.', et: '人们为收入纳税。' },
        { w: 'welfare', t: '福利', e: 'The city spends more money on welfare this year.', et: '这座城市今年在福利上花了更多钱。' },
        { w: 'education', t: '教育', e: 'Good education changes lives.', et: '好的教育能改变人生。' },
        { w: 'unemployment', t: '失业', e: 'Unemployment went down in this area.', et: '这个地区的失业率下降了。' }
      ] },
      { id: 'en-u21-l3', title: '讨论与看法', items: [
        { w: 'debate', t: '辩论', e: 'The debate lasted two hours.', et: '辩论持续了两个小时。' },
        { w: 'viewpoint', t: '观点/看法', e: 'Try to see the problem from her viewpoint.', et: '试着从她的角度看这个问题。' },
        { w: 'in favor', t: '赞成的', e: 'Most people were in favor of the new park.', et: '大多数人赞成建新公园。' },
        { w: 'oppose', t: '反对', e: 'Many local people oppose the plan.', et: '很多当地人反对这个计划。' },
        { w: 'impact', t: '影响', e: 'The new law will have a big impact on farmers.', et: '新法律将对农民产生很大影响。' },
        { w: 'survey', t: '调查', e: 'The survey interviewed one thousand people.', et: '这项调查访问了一千人。' },
        { w: 'vote', t: '投票', e: 'Citizens over eighteen can vote.', et: '十八岁以上的公民可以投票。' },
        { w: 'rights', t: '权利', e: 'Everyone should know their rights.', et: '每个人都应该知道自己的权利。' },
        { w: 'solve', t: '解决', e: 'We must solve the traffic problem together.', et: '我们必须一起解决交通问题。' },
        { w: 'attention', t: '关注', e: 'This news drew a lot of attention.', et: '这条新闻引起了很多关注。' }
      ] }
    ] },
    { id: 'en-u22', level: 'B1', title: '第二十二单元 · 科技与网络', desc: '聊设备与网络生活，讨论科技带来的变化', color: '#58cc02', lessons: [
      { id: 'en-u22-l1', title: '设备与应用', items: [
        { w: 'device', t: '设备', e: 'This small device can check my heart rate.', et: '这个小设备能测我的心率。' },
        { w: 'screen', t: '屏幕', e: 'The screen is broken, but it still works.', et: '屏幕裂了，但还能用。' },
        { w: 'keyboard', t: '键盘', e: 'My keyboard is too noisy at night.', et: '我的键盘晚上太吵了。' },
        { w: 'download', t: '下载', e: 'You can download the app for free.', et: '你可以免费下载这个应用。' },
        { w: 'upload', t: '上传', e: 'It takes a long time to upload this video.', et: '上传这个视频要很长时间。' },
        { w: 'update', t: '更新', e: 'The phone asks me to update the system.', et: '手机提醒我更新系统。' },
        { w: 'install', t: '安装', e: 'Can you help me install this program?', et: '你能帮我安装这个程序吗？' },
        { w: 'battery', t: '电池', e: 'The battery is almost empty.', et: '电池快没电了。' },
        { w: 'charge', t: '充电', e: 'I charge my phone every night.', et: '我每晚给手机充电。' },
        { w: 'wireless', t: '无线的', e: 'I bought wireless earphones last month.', et: '我上个月买了无线耳机。' }
      ] },
      { id: 'en-u22-l2', title: '网上社交', items: [
        { w: 'social media', t: '社交媒体', e: 'Many old people use social media now.', et: '现在很多老年人也用社交媒体。' },
        { w: 'website', t: '网站', e: 'You can find the information on their website.', et: '你可以在他们的网站上找到这个信息。' },
        { w: 'post', t: '发帖/帖子', e: 'She posts photos of her dog every day.', et: '她每天发她狗的照片。' },
        { w: 'share', t: '分享', e: 'Can I share this article with you?', et: '我能把这篇文章分享给你吗？' },
        { w: 'comment', t: '评论', e: 'Leave a comment below the video.', et: '在视频下面留言吧。' },
        { w: 'follower', t: '粉丝', e: 'He has ten thousand followers online.', et: '他在网上有一万个粉丝。' },
        { w: 'search', t: '搜索', e: 'I searched for the word on my phone.', et: '我在手机上查了这个词。' },
        { w: 'link', t: '链接', e: 'She sent me a link to the report.', et: '她给我发了一份报告的链接。' },
        { w: 'log in', t: '登录', e: 'Please log in with your new password.', et: '请用新密码登录。' },
        { w: 'privacy', t: '隐私', e: 'People care more about privacy now.', et: '人们现在更在意隐私了。' }
      ] },
      { id: 'en-u22-l3', title: '数字生活', items: [
        { w: 'internet', t: '互联网', e: 'The internet changed how we work and shop.', et: '互联网改变了我们工作和购物的方式。' },
        { w: 'digital', t: '数字的', e: 'Almost all my books are digital now.', et: '我的书现在几乎都是电子版的。' },
        { w: 'technology', t: '技术', e: 'Technology makes life faster, but not always better.', et: '技术让生活更快，但不一定更好。' },
        { w: 'artificial intelligence', t: '人工智能', e: 'Artificial intelligence can translate languages in seconds.', et: '人工智能几秒内就能翻译语言。' },
        { w: 'data', t: '数据', e: 'The app collects a lot of user data.', et: '这个应用收集很多用户数据。' },
        { w: 'cybersecurity', t: '网络安全', e: 'Companies spend a lot on cybersecurity.', et: '公司在网络安全上花了很多钱。' },
        { w: 'scam', t: '诈骗', e: 'That email offering free money is a scam.', et: '那封说送钱的邮件是诈骗。' },
        { w: 'fake', t: '假的', e: 'Do not believe everything online. Some news is fake.', et: '不要轻信网上的东西，有些新闻是假的。' },
        { w: 'information', t: '信息', e: 'The website gives useful travel information.', et: '这个网站提供有用的旅行信息。' },
        { w: 'smart', t: '智能的', e: 'More and more homes have smart speakers.', et: '越来越多家庭有了智能音箱。' }
      ] }
    ] },
    { id: 'en-u28', level: 'B1', title: '第二十八单元 · 职场沟通', desc: '开会发言、汇报写邮件、和同事协作', color: '#ffc800', lessons: [
      { id: 'en-u28-l1', title: '会议发言', items: [
        { w: 'agenda', t: '议程', e: 'The agenda has five items for today.', et: '今天的议程有五项。' },
        { w: 'chair', t: '主持', e: 'She will chair the meeting this afternoon.', et: '她将主持今天下午的会议。' },
        { w: 'attend', t: '参加', e: 'All team members must attend the training.', et: '所有团队成员必须参加培训。' },
        { w: 'raise', t: '提出', e: 'I want to raise a question about the budget.', et: '我想就预算提一个问题。' },
        { w: 'clarify', t: '澄清', e: 'Could you clarify what you mean by that?', et: '你能说明一下你的意思吗？' },
        { w: 'summary', t: '总结', e: 'He gave a short summary at the end.', et: '他在最后做了简短的总结。' },
        { w: 'action item', t: '行动项', e: 'Each action item needs a name and a date.', et: '每个行动项都需要负责人和日期。' },
        { w: 'brainstorm', t: '头脑风暴', e: 'Let us brainstorm a few ideas first.', et: '我们先头脑风暴几个想法。' },
        { w: 'follow up', t: '跟进', e: 'I will follow up with the client tomorrow.', et: '我明天会跟进客户。' }
      ] },
      { id: 'en-u28-l2', title: '汇报与邮件', items: [
        { w: 'attach', t: '附上', e: 'I attached the report to the email.', et: '我把报告附在邮件里了。' },
        { w: 'forward', t: '转发', e: 'Please forward this message to the whole team.', et: '请把这封邮件转发给整个团队。' },
        { w: 'reply', t: '回复', e: 'She replied to my email within an hour.', et: '她在一小时内回复了我的邮件。' },
        { w: 'draft', t: '初稿', e: 'I sent him the first draft of the plan.', et: '我把计划的初稿发给他了。' },
        { w: 'feedback', t: '反馈', e: 'Thank you for your honest feedback.', et: '谢谢你坦诚的反馈。' },
        { w: 'propose', t: '提议', e: 'I propose that we move the deadline to Friday.', et: '我提议把截止日期改到周五。' },
        { w: 'milestone', t: '里程碑', e: 'We reached an important milestone last month.', et: '我们上个月达成了一个重要的里程碑。' },
        { w: 'workload', t: '工作量', e: 'Her workload has doubled this quarter.', et: '这个季度她的工作量翻倍了。' },
        { w: 'brief', t: '简要介绍', e: 'The manager briefed us on the new project.', et: '经理向我们简要介绍了新项目。' }
      ] },
      { id: 'en-u28-l3', title: '同事协作', items: [
        { w: 'delegate', t: '分派工作', e: 'A good manager knows how to delegate.', et: '好的管理者懂得如何分派工作。' },
        { w: 'coordinate', t: '协调', e: 'I will coordinate with the design team.', et: '我会和设计团队协调。' },
        { w: 'handover', t: '交接', e: 'The handover meeting is at five.', et: '交接会议在五点。' },
        { w: 'backup', t: '备份', e: 'Send me a backup copy of the file.', et: '把文件的备份发给我。' },
        { w: 'rely on', t: '依靠', e: 'You can rely on her to finish on time.', et: '你可以指望她按时完成。' },
        { w: 'pitch in', t: '搭把手', e: 'Everyone pitched in when the deadline moved up.', et: '截止日期提前时大家都来帮忙。' },
        { w: 'catch up', t: '碰头聊进展', e: 'Let us catch up on the details after lunch.', et: '午饭后我们聊聊细节。' },
        { w: 'touch base', t: '短聊一下', e: 'I will touch base with you on Monday.', et: '我周一和你碰一下。' },
        { w: 'loop in', t: '拉人进沟通', e: 'Please loop in the finance team.', et: '请把财务团队拉进来。' }
      ] }
    ] },
    { id: 'en-u29', level: 'B1', title: '第二十九单元 · 文化差异', desc: '聊习俗、过节日、化解跨文化误解', color: '#8ee000', lessons: [
      { id: 'en-u29-l1', title: '习俗与礼仪', items: [
        { w: 'culture', t: '文化', e: 'Food is a big part of every culture.', et: '饮食是每种文化的重要部分。' },
        { w: 'tradition', t: '传统', e: 'It is a tradition to visit family at New Year.', et: '过年走亲戚是一种传统。' },
        { w: 'custom', t: '习俗', e: 'It is the custom to take off your shoes indoors.', et: '进屋脱鞋是一种习俗。' },
        { w: 'etiquette', t: '礼仪', e: 'Business etiquette differs from country to country.', et: '商务礼仪各国不同。' },
        { w: 'greeting', t: '问候', e: 'A warm greeting can open many doors.', et: '热情的问候能打开很多门。' },
        { w: 'handshake', t: '握手', e: 'A firm handshake shows confidence.', et: '有力的握手显得自信。' },
        { w: 'bow', t: '鞠躬', e: 'In some countries people bow when they meet.', et: '在一些国家人们见面时鞠躬。' },
        { w: 'respect', t: '尊重', e: 'Show respect for local beliefs.', et: '要尊重当地的信仰。' },
        { w: 'offend', t: '冒犯', e: 'He did not mean to offend anyone.', et: '他并不想冒犯任何人。' }
      ] },
      { id: 'en-u29-l2', title: '节日与庆祝', items: [
        { w: 'festival', t: '节日', e: 'The Lantern Festival is next week.', et: '元宵节在下周。' },
        { w: 'celebrate', t: '庆祝', e: 'Families celebrate the harvest together.', et: '家人一起庆祝丰收。' },
        { w: 'ceremony', t: '仪式', e: 'The opening ceremony lasted two hours.', et: '开幕式持续了两个小时。' },
        { w: 'parade', t: '游行', e: 'A long parade moved through the old town.', et: '长长的游行队伍穿过老城。' },
        { w: 'decoration', t: '装饰', e: 'Red is a lucky color for decoration.', et: '红色是装饰中的吉利色。' },
        { w: 'ancestor', t: '祖先', e: 'People remember their ancestors in spring.', et: '人们在春天祭祖。' },
        { w: 'reunion', t: '团聚', e: 'The reunion dinner is the most important meal.', et: '团圆饭是最重要的一餐。' },
        { w: 'fireworks', t: '烟花', e: 'We watched the fireworks over the river.', et: '我们在河边看烟花。' },
        { w: 'feast', t: '盛宴', e: 'They prepared a feast for the guests.', et: '他们为客人准备了一桌盛宴。' }
      ] },
      { id: 'en-u29-l3', title: '跨文化误解', items: [
        { w: 'misunderstand', t: '误解', e: 'People often misunderstand each other without a shared language.', et: '没有共同语言时，人们常常互相误解。' },
        { w: 'taboo', t: '禁忌', e: 'Money can be a taboo subject at dinner.', et: '餐桌上谈钱可能是禁忌话题。' },
        { w: 'stereotype', t: '刻板印象', e: 'The film repeats an old stereotype.', et: '这部电影重复了一个老套的刻板印象。' },
        { w: 'adapt', t: '适应', e: 'It takes time to adapt to a new culture.', et: '适应新文化需要时间。' },
        { w: 'awkward', t: '尴尬的', e: 'The silence made everyone feel awkward.', et: '沉默让大家都觉得尴尬。' },
        { w: 'indirect', t: '间接的', e: 'Indirect answers are polite in some cultures.', et: '在某些文化里，委婉的回答才礼貌。' },
        { w: 'direct', t: '直接的', e: 'Being too direct may sound rude here.', et: '在这里太直接可能显得无礼。' },
        { w: 'sensitive', t: '敏感的', e: 'Religion is a sensitive topic in many places.', et: '宗教在很多地方是敏感话题。' },
        { w: 'awareness', t: '意识', e: 'Travel books help build cultural awareness.', et: '旅行书有助于培养文化意识。' }
      ] }
    ] },
    { id: 'en-u30', level: 'B1', title: '第三十单元 · 学习与教育', desc: '课堂、考试、在线学习与进修提升', color: '#1cb0f6', lessons: [
      { id: 'en-u30-l1', title: '课堂与作业', items: [
        { w: 'lecture', t: '讲座', e: 'The lecture on economics lasted two hours.', et: '经济学讲座持续了两个小时。' },
        { w: 'seminar', t: '研讨课', e: 'We have a small seminar every Thursday.', et: '我们每周四有一个小型研讨课。' },
        { w: 'tutor', t: '导师', e: 'My tutor helped me plan the essay.', et: '导师帮我规划了论文。' },
        { w: 'textbook', t: '教材', e: 'The textbook costs sixty dollars.', et: '这本教材六十美元。' },
        { w: 'assignment', t: '作业任务', e: 'The assignment is due on Monday.', et: '这项作业周一要交。' },
        { w: 'essay', t: '短文/论文', e: 'I wrote a short essay about city life.', et: '我写了一篇关于城市生活的短文。' },
        { w: 'discuss', t: '讨论', e: 'We discussed the results in groups.', et: '我们分组讨论了结果。' },
        { w: 'note', t: '笔记', e: 'She took careful notes during class.', et: '她上课时认真做笔记。' },
        { w: 'semester', t: '学期', e: 'The new semester starts in September.', et: '新学期九月开始。' }
      ] },
      { id: 'en-u30-l2', title: '考试与成绩', items: [
        { w: 'revise', t: '复习', e: 'I need two days to revise for the test.', et: '我需要两天时间复习备考。' },
        { w: 'grade', t: '成绩等级', e: 'She got the highest grade in the class.', et: '她在班上得了最高等级。' },
        { w: 'pass', t: '通过', e: 'He passed the driving test on the first try.', et: '他一次就通过了驾照考试。' },
        { w: 'fail', t: '不及格', e: 'Do not be afraid to fail the first time.', et: '不要害怕第一次失败。' },
        { w: 'score', t: '分数', e: 'My score improved by ten points.', et: '我的分数提高了十分。' },
        { w: 'cheat', t: '作弊', e: 'Students who cheat lose trust.', et: '作弊的学生会失去信任。' },
        { w: 'retake', t: '重考', e: 'She decided to retake the exam in June.', et: '她决定六月重考。' },
        { w: 'academic', t: '学业的', e: 'His academic record is strong.', et: '他的学业成绩很好。' },
        { w: 'transcript', t: '成绩单', e: 'The school sent my transcript by email.', et: '学校通过邮件把成绩单发给了我。' }
      ] },
      { id: 'en-u30-l3', title: '在线学习与进修', items: [
        { w: 'online course', t: '在线课程', e: 'I finished an online course on design.', et: '我完成了一门设计在线课程。' },
        { w: 'enroll', t: '报名', e: 'She enrolled in a night class.', et: '她报了一个夜校班。' },
        { w: 'scholarship', t: '奖学金', e: 'He won a scholarship to study abroad.', et: '他获得了出国留学的奖学金。' },
        { w: 'graduate', t: '毕业', e: 'My sister will graduate next summer.', et: '我姐姐明年夏天毕业。' },
        { w: 'certificate', t: '证书', e: 'You get a certificate after the training.', et: '培训结束后会得到证书。' },
        { w: 'webinar', t: '网络研讨会', e: 'The free webinar starts at eight.', et: '免费网络研讨会在八点开始。' },
        { w: 'self-study', t: '自学', e: 'Self-study requires strong discipline.', et: '自学需要很强的自律。' },
        { w: 'lifelong', t: '终身的', e: 'Lifelong learning keeps the mind sharp.', et: '终身学习让头脑保持敏锐。' },
        { w: 'qualification', t: '资格证书', e: 'This job requires a teaching qualification.', et: '这份工作需要教学资格。' }
      ] }
    ] },
    { id: 'en-u31', level: 'B2', title: '第三十一单元 · 情感与人际关系', desc: '谈友谊信任、复杂情绪，也能把矛盾与和解说清楚', color: '#ff9600', lessons: [
      { id: 'en-u31-l1', title: '友谊与信任', items: [
        { w: 'get along', t: '相处融洽', e: 'We get along well even though we come from very different backgrounds.', et: '我们相处得很好，尽管我们来自非常不同的背景。' },
        { w: 'confide', t: '倾诉', e: 'She is the only person I confide in when something is really worrying me.', et: '她是唯一一个在我真正烦心时可以倾诉的人。' },
        { w: 'trust', t: '信任', e: 'Once trust has been broken, it can take years to rebuild.', et: '信任一旦被打破，可能需要多年才能重建。' },
        { w: 'loyal', t: '忠诚的', e: 'A loyal friend stands by you even when everything goes wrong.', et: '忠诚的朋友即使一切都出了问题，也会站在你身边。' },
        { w: 'fall out', t: '闹翻', e: 'They fell out over money and have not spoken to each other since.', et: '他们因为钱闹翻了，从那以后就没再说过话。' },
        { w: 'forgive', t: '原谅', e: 'Although he apologized sincerely, she found it hard to forgive him.', et: '尽管他真诚地道了歉，她还是很难原谅他。' },
        { w: 'keep in touch', t: '保持联系', e: 'Even though we live in different countries, we have kept in touch for years.', et: '尽管我们住在不同的国家，多年来我们一直保持联系。' },
        { w: 'count on', t: '依靠/指望', e: 'You can always count on her when you are really in trouble.', et: '当你真正遇到麻烦时，总能依靠她。' },
        { w: 'drift apart', t: '渐渐疏远', e: 'After we graduated and moved to different cities, we slowly drifted apart.', et: '毕业后我们搬去了不同的城市，渐渐疏远了。' }
      ] },
      { id: 'en-u31-l2', title: '复杂情绪', items: [
        { w: 'grateful', t: '感激的', e: 'I am deeply grateful for everything you have done for my family.', et: '我非常感激你为我的家人所做的一切。' },
        { w: 'anxious', t: '焦虑的', e: 'She has been anxious about the exam results since Monday.', et: '从周一起，她就一直为考试结果感到焦虑。' },
        { w: 'overwhelmed', t: '不堪重负的', e: 'With two jobs and night classes, he felt completely overwhelmed.', et: '既要打两份工又要上夜校，他感到完全不堪重负。' },
        { w: 'relieved', t: '松了口气的', e: 'I was relieved to hear that everyone had arrived home safely.', et: '听说大家都平安到家，我松了一口气。' },
        { w: 'frustrated', t: '懊恼的/沮丧的', e: 'He felt frustrated because nobody had listened to his suggestion.', et: '他感到沮丧，因为没有人听他的建议。' },
        { w: 'embarrassed', t: '尴尬的', e: 'She was so embarrassed that she could not say a single word.', et: '她尴尬得一个字也说不出来。' },
        { w: 'jealous', t: '嫉妒的', e: 'He finally admitted that he had been jealous of his older brother.', et: '他终于承认自己曾经嫉妒过哥哥。' },
        { w: 'resent', t: '反感/怨恨', e: 'She resents being treated like a child by her own team.', et: '她反感被自己的团队当成孩子对待。' },
        { w: 'mixed feelings', t: '复杂的心情', e: 'I had mixed feelings when I left, because I was excited about the future but sad to say goodbye.', et: '离开时我心情复杂，因为对未来充满期待，又为道别而难过。' }
      ] },
      { id: 'en-u31-l3', title: '冲突与和解', items: [
        { w: 'apologize', t: '道歉', e: 'If I had realized how late I was, I would have apologized immediately.', et: '如果我意识到自己迟到了多久，我早就立刻道歉了。' },
        { w: 'misunderstanding', t: '误会', e: 'The whole argument was caused by a small misunderstanding.', et: '整场争吵是由一个小误会引起的。' },
        { w: 'compromise', t: '折中/妥协', e: 'Neither side won, but in the end the compromise satisfied both of us.', et: '双方都没赢，但最终这个折中方案让我们都满意。' },
        { w: 'make up', t: '和好', e: 'They argued for hours, but they made up before dinner was over.', et: '他们吵了好几个小时，但晚饭结束前就和好了。' },
        { w: 'set boundaries', t: '设定界限', e: 'Learning to set boundaries is important in any healthy relationship.', et: '学会设定界限在任何健康的关系中都很重要。' },
        { w: 'patience', t: '耐心', e: 'Dealing with family conflicts requires a great deal of patience.', et: '处理家庭矛盾需要极大的耐心。' },
        { w: 'honest', t: '坦诚的', e: 'If you had been honest with me earlier, we could have avoided this fight.', et: '如果你早些对我坦诚，我们本可以避免这场争吵。' },
        { w: 'hard feelings', t: '芥蒂/怨气', e: 'I said sorry because I did not want any hard feelings between us.', et: '我道了歉，因为我不想我们之间心存芥蒂。' },
        { w: 'empathy', t: '同理心', e: 'Reading novels helps you develop empathy for people whose lives are different from yours.', et: '读小说有助于你对生活与你不同的人产生同理心。' },
        { w: 'resolve', t: '化解/解决', e: 'Most disagreements can be resolved if both sides stay calm.', et: '只要双方保持冷静，大多数分歧都能化解。' }
      ] }
    ] },
    { id: 'en-u32', level: 'B2', title: '第三十二单元 · 旅行见闻与文化比较', desc: '讲旅途见闻、比较不同的文化生活，聊出有深度的感受', color: '#ce82ff', lessons: [
      { id: 'en-u32-l1', title: '旅途见闻', items: [
        { w: 'scenery', t: '风景', e: 'The scenery along the coast was so beautiful that we stopped the car several times.', et: '沿海的风景太美了，我们停了好几次车。' },
        { w: 'breathtaking', t: '美得惊人的', e: 'Having climbed for three hours, we were rewarded with a breathtaking view from the top.', et: '爬了三个小时之后，我们收获了山顶美得惊人的景色作为回报。' },
        { w: 'broaden horizons', t: '开阔眼界', e: 'Living abroad for a year has broadened my horizons more than any book could.', et: '在国外生活一年，比任何书都更能开阔我的眼界。' },
        { w: 'take for granted', t: '视为理所当然', e: 'Having seen how hard some people work to get water, I no longer take clean water for granted.', et: '见过有些人取水多么辛苦之后，我不再把干净的水视为理所当然。' },
        { w: 'hospitality', t: '热情好客', e: 'We were deeply touched by the hospitality of the family who hosted us.', et: '招待我们的那家人的热情好客让我们深受感动。' },
        { w: 'cuisine', t: '菜系/地方美食', e: 'I did not realize how rich the regional cuisine was until I traveled south.', et: '直到去了南方，我才意识到当地的菜系如此丰富。' },
        { w: 'landscape', t: '地貌/景观', e: 'The landscape changed from green hills to dry desert within two hours.', et: '短短两个小时里，地貌就从绿色的山丘变成了干旱的沙漠。' },
        { w: 'heritage', t: '遗产', e: 'The old town has been listed as a world heritage site because of its unique buildings.', et: '这座老城因其独特的建筑被列入了世界遗产名录。' },
        { w: 'off the beaten path', t: '冷门的/少人问津的', e: 'We preferred villages off the beaten path, where tourism has not yet changed daily life.', et: '我们更喜欢冷门的小村庄，那里的日常生活还没有被旅游业改变。' }
      ] },
      { id: 'en-u32-l2', title: '文化比较', items: [
        { w: 'contrast', t: '反差/对比', e: 'The contrast between the busy capital and the quiet villages surprised us most.', et: '繁忙的首都与安静的村庄之间的反差让我们最为惊讶。' },
        { w: 'diverse', t: '多元的', e: 'It is one of the most diverse cities I have ever visited.', et: '这是我去过的最多元的城市之一。' },
        { w: 'way of life', t: '生活方式', e: 'Staying with a local family allowed us to observe their way of life at close range.', et: '住在当地人家，让我们得以近距离观察他们的生活方式。' },
        { w: 'pace of life', t: '生活节奏', e: 'After returning home, I missed the slower pace of life I had enjoyed there.', et: '回国之后，我开始想念在那里享受过的更慢的生活节奏。' },
        { w: 'norm', t: '常态/惯例', e: 'Tipping is the norm in that country, whereas it is unusual in mine.', et: '在那个国家给小费是常态，而在我的国家却不常见。' },
        { w: 'assumption', t: '想当然的看法', e: 'Travel taught me to question my assumptions about other countries.', et: '旅行教会我质疑自己对其他国家想当然的看法。' },
        { w: 'comparison', t: '比较', e: 'A comparison of the two festivals shows how differently people celebrate the harvest.', et: '对比这两个节日可以看出，人们庆祝丰收的方式有多么不同。' },
        { w: 'differ', t: '有差异/不同', e: 'Even neighboring regions differ greatly in what they eat for breakfast.', et: '即使是相邻的地区，早餐吃什么也大不相同。' },
        { w: 'adjust', t: '适应/调整', e: 'It took me a whole month to adjust to eating dinner at ten at night.', et: '我花了整整一个月，才适应晚上十点吃晚饭。' }
      ] },
      { id: 'en-u32-l3', title: '反思与感悟', items: [
        { w: 'impression', t: '印象', e: 'My first impression of the city turned out to be completely wrong.', et: '我对这座城市的第一印象，后来证明完全错了。' },
        { w: 'appreciate', t: '欣赏/更加体会', e: 'Having lived abroad, I appreciate my own culture far more than before.', et: '在国外生活过之后，我比从前更加欣赏自己的文化。' },
        { w: 'reflect', t: '回想/反思', e: 'I still reflect on that trip whenever city life feels too fast.', et: '每当城市生活节奏太快时，我仍会回想那次旅行。' },
        { w: 'mindset', t: '思维模式', e: 'Meeting people who lived so differently changed my mindset completely.', et: '见到生活方式如此不同的人之后，我的思维模式完全改变了。' },
        { w: 'unforgettable', t: '难忘的', e: 'The night we spent in the desert remains the most unforgettable part of the whole trip.', et: '我们在沙漠里度过的那一夜，是整个旅行中最难忘的部分。' },
        { w: 'open-minded', t: '思想开放的', e: 'Living abroad taught me to be more open-minded about the choices other people make.', et: '在国外生活教会我对别人的选择更加包容开放。' },
        { w: 'wander', t: '漫步/闲逛', e: 'We wandered through the old streets for hours, letting the city show itself to us slowly.', et: '我们在老街上漫步了好几个小时，让城市慢慢展现它自己。' },
        { w: 'humble', t: '谦卑的', e: 'Visiting cities far older than mine made me feel humble about how little I know.', et: '造访比我的家乡古老得多的城市，让我对自身见识之少感到谦卑。' },
        { w: 'insight', t: '感悟/洞见', e: 'My biggest insight from the trip is how much people differ from one another.', et: '这次旅行我最大的感悟是，人与人之间的差异有多大。' }
      ] }
    ] },
    { id: 'en-u33', level: 'C1', title: '第三十三单元 · 学术研究与写作', desc: '读论文、写报告、参与学术讨论，表达严谨有层次', color: '#ff9600', lessons: [
      { id: 'en-u33-l1', title: '研究术语', items: [
        { w: 'epistemology', t: '认识论', e: 'The study\'s epistemology determines what counts as evidence, which questions become intelligible, and whose testimony receives scholarly authority.', et: '这项研究的认识论决定了什么算证据、哪些问题可以被理解，以及谁的证言能获得学术权威。' },
        { w: 'methodology', t: '研究方法论', e: 'The methodology section describes exactly how the study was designed and executed.', et: '方法论部分准确描述了这项研究是如何设计和执行的。' },
        { w: 'empirical', t: '经验的/实证的', e: 'Unlike speculative writing, an empirical study relies entirely on observable evidence.', et: '与推测性文字不同，实证研究完全基于可观察的证据。' },
        { w: 'ontology', t: '本体论', e: 'By questioning the ontology of digital identity, the article asks whether online personas constitute entities independent of their users.', et: '通过质疑数字身份的本体论，这篇文章探讨网络人格是否构成独立于其使用者的实体。' },
        { w: 'falsifiability', t: '可证伪性', e: 'Popper\'s criterion of falsifiability distinguishes scientific conjectures from claims that no conceivable observation could ever disprove.', et: '波普尔的可证伪性标准将科学猜想与任何可想象的观察都无法驳倒的主张区分开来。' },
        { w: 'coherent', t: '连贯的/条理清晰的', e: 'A coherent paper guides the reader from one point to the next without confusing jumps.', et: '一篇条理清晰的论文引导读者从一个观点走到下一个观点，中间没有令人困惑的跳跃。' },
        { w: 'intertextuality', t: '互文性', e: 'Intertextuality becomes visible when a paper situates its claims within earlier debates rather than presenting them as isolated discoveries.', et: '当一篇论文将自身论点置于早期争论之中，而不是将其呈现为孤立发现时，互文性便显现出来。' },
        { w: 'tenable', t: '站得住脚的', e: 'Although his theory is tenable on methodological grounds, no independent study has yet confirmed its central hypothesis.', et: '尽管他的理论在方法论上站得住脚，但还没有独立研究能证实其核心假设。' }
      ] },
      { id: 'en-u33-l2', title: '写作与表达', items: [
        { w: 'rhetoric', t: '修辞', e: 'The essay\'s rhetoric privileges technical precision while quietly excluding moral questions from its definition of social progress.', et: '这篇文章的修辞偏重技术精确性，同时悄然将道德问题排除在其社会进步定义之外。' },
        { w: 'discourse', t: '话语', e: 'Feminist discourse reveals how apparently neutral academic categories can reproduce assumptions about gender, labor, and authority.', et: '女性主义话语揭示了看似中立的学术范畴如何再生产有关性别、劳动与权威的假设。' },
        { w: 'preliminary', t: '初步的/预备的', e: 'These are only preliminary findings; a full report will be published next year.', et: '这些只是初步发现，完整报告将在明年发表。' },
        { w: 'problematize', t: '问题化', e: 'Rather than simply rejecting the model, the essay problematizes its assumption that technological progress is politically neutral.', et: '这篇文章并未简单地否定该模型，而是将其“技术进步在政治上中立”的假设问题化。' },
        { w: 'salient', t: '突出的', e: 'The most salient feature of the corpus is not its size but the systematic absence of working-class voices.', et: '该语料库最突出的特征并非其规模，而是工人阶级声音的系统性缺席。' },
        { w: 'contentious', t: '有争议的', e: 'The review treats the canon as a contentious construction rather than a timeless hierarchy of inherently superior works.', et: '这篇综述将经典视为一种有争议的建构，而非由天然更优秀作品组成的永恒等级。' },
        { w: 'hegemonic', t: '霸权的', e: 'The critique exposes hegemonic assumptions embedded in curricula that present Western intellectual traditions as universally authoritative.', et: '该批判揭示了课程中嵌入的霸权假设，这些课程把西方知识传统呈现为普遍权威。' },
        { w: 'elucidate', t: '阐明', e: 'The final chapter does not merely summarize earlier findings; it seeks to elucidate their implications for postcolonial theory.', et: '最后一章不只是总结先前的发现，还试图阐明这些发现对后殖民理论的启示。' }
      ] },
      { id: 'en-u33-l3', title: '讨论与辩论', items: [
        { w: 'nuance', t: '精微之处', e: 'A close reading of the essay reveals nuance in its treatment of class that the abstract alone cannot capture.', et: '细读这篇文章会发现它在阶级处理上的精微之处，仅凭摘要无法捕捉。' },
        { w: 'implication', t: '含义/暗示', e: 'The implication of this study goes far beyond the narrow field in which it was conducted.', et: '这项研究的含义远远超出了它进行的那个狭窄领域。' },
        { w: 'counterpart', t: '对应物/对应者', e: 'Compared with its counterpart in the European critical tradition, the North American model foregrounds empirical validation over hermeneutic depth.', et: '与欧洲批判传统中的对应物相比，北美模型更强调经验验证而非诠释深度。' },
        { w: 'consensus', t: '共识', e: 'There is no consensus among researchers about the long-term effects of this practice.', et: '研究者之间对这种做法的长期影响并没有共识。' },
        { w: 'dissect', t: '剖析/详细分析', e: 'In the seminar we will dissect the paper paragraph by paragraph to uncover its hidden assumptions.', et: '在研讨会上我们会逐段剖析这篇论文，把它隐藏的假设挖出来。' },
        { w: 'qualify', t: '加以限定/使带保留', e: 'I would qualify that position by saying it works well in theory but fails in practice.', et: '我要给那个立场加上保留：它在理论上站得住，但在实践里行不通。' },
        { w: 'refute', t: '反驳', e: 'You can refute an argument by showing that at least one of its premises is false.', et: '只要你能证明它至少一个前提是错的，你就能反驳一个论点。' },
        { w: 'polemic', t: '论战', e: 'Instead of engaging with the archival evidence, the reviewer resorts to polemic and caricatures the author\'s central argument.', et: '这位评论者没有探讨档案证据，反而诉诸论战，并歪曲了作者的核心论点。' }
      ] }
    ] },
    { id: 'en-u34', level: 'C1', title: '第三十四单元 · 科技伦理', desc: '人工智能、隐私、假新闻——讲清利弊和边界在哪里', color: '#1cb0f6', lessons: [
      { id: 'en-u34-l1', title: '人工智能与偏见', items: [
        { w: 'hegemony', t: '霸权', e: 'The critique examines how automated systems reinforce cultural hegemony by presenting historically contingent classifications as neutral and universal.', et: '该批判考察自动化系统如何将历史偶然形成的分类包装成中立且普遍的标准，从而强化文化霸权。' },
        { w: 'alterity', t: '他者性', e: 'The platform\'s categories construct alterity by marking non-Western identities as deviations from an implicit cultural norm.', et: '该平台的范畴通过将非西方身份标记为对隐含文化规范的偏离，建构了他者性。' },
        { w: 'culpability', t: '罪责', e: 'The inquiry assigns culpability not to an abstraction but to the institutions that designed, funded, and deployed the system.', et: '这项调查将罪责归于设计、资助和部署该系统的机构，而非某种抽象概念。' },
        { w: 'transparency', t: '透明度', e: 'Many people argue that algorithmic systems should be more transparent so we can understand why they make certain decisions.', et: '很多人认为算法系统应该更透明，这样我们才能理解它们为什么做出某些决定。' },
        { w: 'obfuscate', t: '使模糊', e: 'Vendors often obfuscate the limitations of automated moderation behind technical jargon and selective performance metrics.', et: '供应商常常用技术术语和精心挑选的性能指标，掩盖自动化审核的局限。' },
        { w: 'simulacrum', t: '拟像', e: 'The deepfake functions as a simulacrum that erodes the evidentiary status of documentary footage in public discourse.', et: '深度伪造作为一种拟像，侵蚀了纪实影像在公共话语中的证据地位。' },
        { w: 'normative', t: '规范的', e: 'A normative account of artificial intelligence must justify its underlying values rather than merely describe technical capabilities.', et: '对人工智能的规范性论述必须为其内在价值提供正当化依据，而不能仅仅描述技术能力。' },
        { w: 'pernicious', t: '有害的', e: 'The most pernicious systems disguise discriminatory outcomes as objective judgments, making structural inequality difficult to contest.', et: '最有害的系统将歧视性结果伪装成客观判断，使结构性不平等难以受到质疑。' }
      ] },
      { id: 'en-u34-l2', title: '隐私与数据', items: [
        { w: 'surveillance', t: '监视', e: 'The normalization of surveillance in urban space reconfigures the relationship between visibility, power, and citizenship.', et: '城市空间中监视的常态化重构了可见性、权力与公民身份之间的关系。' },
        { w: 'infringe', t: '侵犯', e: 'Many people believe that collecting facial data without consent infringes their basic rights.', et: '很多人认为未经同意收集人脸数据侵犯了他们的基本权利。' },
        { w: 'amass', t: '积累（权力/资本）', e: 'Platforms amass asymmetrical informational power by aggregating behavioral traces that users cannot meaningfully contest.', et: '平台通过聚合用户无法有效质疑的行为痕迹，积累不对称的信息权力。' },
        { w: 'autonomy', t: '自主性', e: 'When platforms obscure how profiles are constructed, they erode the autonomy that genuinely meaningful choice presupposes.', et: '当平台掩盖用户画像的建构方式时，它们便侵蚀了真正有意义的选择所预设的自主性。' },
        { w: 'determinism', t: '决定论', e: 'Such determinism treats mass data extraction as a natural law rather than a political arrangement open to collective challenge.', et: '这种决定论把大规模数据攫取视为自然法则，而非可以受到集体质疑的政治安排。' },
        { w: 'contestable', t: '可争议的', e: 'The claim that behavioral tracking necessarily serves users remains deeply contestable when platforms conceal their commercial incentives.', et: '当平台隐瞒其商业动机时，“行为追踪必然服务于用户”这一主张仍极具争议。' },
        { w: 'commodification', t: '商品化', e: 'The commodification of privacy converts intimate behavior into assets that platforms can exchange without meaningful public scrutiny.', et: '隐私的商品化把私密行为转化为资产，使平台得以在缺乏有效公众审视的情况下进行交易。' },
        { w: 'reification', t: '物化', e: 'The reification of users into behavioral profiles strips away social context and makes resistance appear irrational.', et: '将用户物化为行为画像会剥离其社会语境，并使抵抗显得不理性。' }
      ] },
      { id: 'en-u34-l3', title: '虚假信息与责任', items: [
        { w: 'disinformation', t: '虚假信息（有意制造）', e: 'Disinformation operates not merely as false content but as a strategic weaponization of epistemic uncertainty within polarized publics.', et: '虚假信息不仅是虚假内容，更是在两极化公众中对认识不确定性的战略性武器化。' },
        { w: 'weaponize', t: '武器化', e: 'Partisan networks weaponize fabricated narratives to discredit institutions and turn uncertainty into blind political loyalty.', et: '党派网络将捏造的叙事武器化，以诋毁公共机构，并把不确定性转化为盲目的政治忠诚。' },
        { w: 'legitimacy', t: '合法性/正当性', e: 'The legitimacy of an institution suffers when people can no longer agree on what is true.', et: '当人们不再能对什么是真的达成一致时，一个机构的合法性就会受损。' },
        { w: 'polarize', t: '使两极分化', e: 'Algorithmic curation tends to polarize publics by amplifying affective resonance at the expense of deliberative complexity.', et: '算法推荐通过放大情感共鸣而牺牲审议复杂性，往往使公众两极分化。' },
        { w: 'accountability', t: '问责/责任', e: 'Without accountability, platforms will continue to profit from content that harms people.', et: '没有问责，平台就会继续从伤害他人的内容中获利。' },
        { w: 'authenticate', t: '验证/鉴别真伪', e: 'The crisis of authentication in digital media demands new epistemic protocols for establishing provenance and credibility.', et: '数字媒体中的验证危机要求建立新的认识论协议，以确立来源与可信度。' },
        { w: 'astroturfing', t: '伪草根运动', e: 'Astroturfing manufactures the appearance of grassroots consensus, concealing coordinated influence behind apparently spontaneous citizen advocacy.', et: '伪草根运动制造出民间共识的假象，将协同操纵隐藏在看似自发的公民倡议背后。' },
        { w: 'governance', t: '治理', e: 'Platform governance must reconcile expressive freedom with democratic accountability without delegating fundamental rights to private corporations.', et: '平台治理必须协调表达自由与民主问责，同时不能将基本权利交由私营企业处置。' }
      ] }
    ] },
    { id: 'en-u35', level: 'C2', title: '第三十五单元 · 地道语域', desc: '把高频习语、正式与口语切换、得体表达用在对的场合', color: '#ce82ff', lessons: [
      { id: 'en-u35-l1', title: '高频习语与固定搭配', items: [
        { w: 'bite the bullet', t: '硬着头皮做（难事）', e: 'I hate awkward conversations, but I bit the bullet and told the client we had missed the deadline.', et: '我讨厌尴尬的谈话，但还是硬着头皮告诉客户我们错过了截止期限。' },
        { w: 'read the room', t: '察言观色', e: 'Everyone went quiet after the announcement, so read the room before making another joke.', et: '通知之后大家都沉默了，所以再开玩笑之前先看看气氛。' },
        { w: 'go the extra mile', t: '付出额外努力', e: 'Maya went the extra mile by checking every figure twice before she sent the proposal.', et: '玛雅格外用心，在发出提案前把每个数字都核对了两遍。' },
        { w: 'on the back burner', t: '暂时搁置', e: 'The redesign is on the back burner until we fix the login problem.', et: '在我们解决登录问题之前，重新设计一事暂时搁置。' },
        { w: 'in the same boat', t: '处境相同', e: 'We are all in the same boat, so blaming one another will not get the project finished.', et: '我们大家处境相同，互相指责并不能让项目完成。' },
        { w: 'call it a day', t: '收工/到此为止', e: 'We have been editing for six hours; let us call it a day and look at it fresh tomorrow.', et: '我们已经编辑了六个小时；今天先收工，明天再用新鲜的眼光看一遍吧。' },
        { w: 'get the hang of', t: '逐渐掌握…的诀窍', e: 'It took me a week to get the hang of the new editing software.', et: '我花了一周才逐渐掌握这款新剪辑软件的诀窍。' },
        { w: 'a blessing in disguise', t: '因祸得福的事', e: 'Losing that contract was a blessing in disguise; it pushed us to find better clients.', et: '丢掉那份合同反倒是因祸得福；它促使我们找到了更好的客户。' }
      ] },
      { id: 'en-u35-l2', title: '正式与口语切换', items: [
        { w: 'I would appreciate it if...', t: '（正式）如果…我将不胜感激', e: 'I would appreciate it if you could send the revised figures before noon.', et: '如果您能在中午前发来修改后的数字，我将不胜感激。' },
        { w: 'Would it be possible to...', t: '（正式礼貌）是否可以…', e: 'Would it be possible to move our meeting to Thursday afternoon?', et: '是否可以把我们的会议改到周四下午？' },
        { w: 'just a heads-up', t: '（口语）提前跟你说一声', e: 'Just a heads-up: the client may call a few minutes early.', et: '提前跟你说一声：客户可能会提前几分钟打来。' },
        { w: 'keep me posted', t: '（口语）随时告诉我最新进展', e: 'Keep me posted on the client\'s feedback so I can adjust the draft.', et: '随时告诉我客户的最新反馈，我好修改草稿。' },
        { w: 'no worries', t: '（口语）没关系/不用担心', e: 'No worries about the delay; these things happen.', et: '别担心耽搁的事；这种情况难免。' },
        { w: 'my bad', t: '（口语）是我的错', e: 'I sent you the old version—my bad. Here is the correct one.', et: '我把旧版发给你了——是我的错。这才是正确的版本。' },
        { w: 'sounds good', t: '（口语）听起来不错/行', e: 'Thursday at three? Sounds good to me.', et: '周四三点？我觉得可以。' },
        { w: 'I will look into it', t: '我会查一下/了解一下', e: 'I am not sure why the invoice includes this charge, but I will look into it today.', et: '我不确定发票上为什么会有这笔费用，但我今天会查一下。' }
      ] },
      { id: 'en-u35-l3', title: '关系、礼貌与得体', items: [
        { w: 'I see where you are coming from', t: '我理解你的出发点', e: 'I see where you are coming from, but I am worried about the extra cost.', et: '我理解你的出发点，但我担心额外的成本。' },
        { w: 'That is a fair point', t: '这点说得有道理', e: 'That is a fair point; we should test the idea before ruling it out.', et: '这点说得有道理；我们应该先检验这个想法，再排除它。' },
        { w: 'I might be wrong, but...', t: '也许是我错了，不过…', e: 'I might be wrong, but I thought the deadline was Friday, not Thursday.', et: '也许是我记错了，不过我以为截止期限是周五，不是周四。' },
        { w: 'with all due respect', t: '（正式）恕我直言', e: 'With all due respect, I do not think the data supports that conclusion.', et: '恕我直言，我认为这些数据并不支持那个结论。' },
        { w: 'I will take your word for it', t: '我就相信你所说的', e: 'I have not checked the figures myself, so I will take your word for it.', et: '我自己还没有核对这些数字，所以就相信你说的。' },
        { w: 'Do not take this the wrong way', t: '请别误会我的意思', e: 'Do not take this the wrong way, but the introduction could be a little shorter.', et: '请别误会我的意思，不过引言还可以再短一点。' },
        { w: 'I did not mean to put you on the spot', t: '我不是故意让你当场难堪', e: 'Sorry, I did not mean to put you on the spot; we can discuss it later.', et: '抱歉，我不是故意让你当场难堪；我们可以以后再谈。' },
        { w: 'Thanks for pointing that out', t: '谢谢你指出这一点', e: 'Thanks for pointing that out; I would have missed the error otherwise.', et: '谢谢你指出这一点；不然我就会漏掉那个错误了。' }
      ] }
    ] },
    { id: 'en-u36', level: 'C2', title: '第三十六单元 · 潜台词', desc: '听懂反讽、委婉拒绝和话里保留，也学会拿捏自己的语气', color: '#ff9600', lessons: [
      { id: 'en-u36-l1', title: '反讽、克制与冷面幽默', items: [
        { w: 'not exactly', t: '并不完全是/算不上', e: 'Was the presentation a success? Not exactly—the projector failed twice.', et: '演示算成功吗？算不上——投影仪坏了两次。' },
        { w: 'That is one way of putting it', t: '说得倒挺含蓄（含蓄保留或反讽）', e: 'You think the meeting was chaotic? That is one way of putting it.', et: '你觉得会议很混乱？说得倒挺含蓄。' },
        { w: 'not my finest hour', t: '我可真够差劲的（自嘲）', e: 'I sent the email to the wrong client—not my finest hour.', et: '我把邮件发错了客户——我可真够差劲的。' },
        { w: 'You do not say', t: '还用你说（反讽）/真的吗（需看语调）', e: 'The traffic is terrible. You do not say—we have been stuck here for an hour.', et: '路况糟透了。还用你说——我们已经堵在这儿一个小时了。' },
        { w: 'Well, that went well', t: '这下可真顺利（反讽）', e: 'The server crashed during our live demo. Well, that went well.', et: '现场演示时服务器崩溃了。这下可真“顺利”。' },
        { w: 'What could possibly go wrong?', t: '还能出什么事呢（反讽）', e: 'We are launching without testing the payment system. What could possibly go wrong?', et: '我们没测试支付系统就要上线。还能出什么事呢？' },
        { w: 'deadpan', t: '冷面幽默的/面无表情地', e: 'She delivered the absurd reply in such a deadpan voice that nobody laughed at first.', et: '她面无表情地说出那句荒唐的回答，起初谁都没笑。' },
        { w: 'famous last words', t: '这话怕是要说早了/怕要被打脸', e: 'He said the update would take five minutes—famous last words.', et: '他说更新只要五分钟——这话说得怕是要被打脸。' }
      ] },
      { id: 'en-u36-l2', title: '暗示与委婉拒绝', items: [
        { w: 'I will think about it', t: '我考虑一下（有时用于委婉拒绝）', e: 'Thanks for the invitation; I will think about it and let you know.', et: '谢谢你的邀请；我考虑一下，再告诉你。' },
        { w: 'I will see what I can do', t: '我看看能怎么办（不作承诺）', e: 'I cannot promise a refund, but I will see what I can do.', et: '我不能保证退款，但我会看看能怎么办。' },
        { w: 'That might be tricky', t: '这可能有点难办（委婉表示为难）', e: 'Moving the deadline to tomorrow? That might be tricky with only two reviewers available.', et: '把截止期限提前到明天？只有两位审稿人有空，这可能有点难办。' },
        { w: 'Perhaps another time', t: '还是改天吧（委婉拒绝）', e: 'I am afraid I already have plans tonight. Perhaps another time.', et: '恐怕我今晚已经有安排了。还是改天吧。' },
        { w: 'I am not sure that is for me', t: '我想这不适合我（委婉拒绝）', e: 'Thanks for offering me the role, but I am not sure that is for me.', et: '谢谢你给我这个职位，不过我想这不适合我。' },
        { w: 'I will take a rain check', t: '这次先不去了，改天再约（美式口语）', e: 'I am too tired for dinner tonight, but I will take a rain check.', et: '我今晚太累了，就不去吃晚饭了，改天再约吧。' },
        { w: 'I would not count on it', t: '我看未必/别抱太大希望', e: 'Will the shop be open on a public holiday? I would not count on it.', et: '这家商店法定节假日会开门吗？我看别抱太大希望。' },
        { w: 'I will bear that in mind', t: '我会记住并考虑（不表示同意）', e: 'You think we should hire another designer? I will bear that in mind when we review the budget.', et: '你觉得我们应该再雇一位设计师？我们审核预算时我会记住并考虑这一点。' }
      ] },
      { id: 'en-u36-l3', title: '缓和、保留与强调', items: [
        { w: 'more or less', t: '大体上/差不多', e: 'The report is more or less finished; I just need to check the references.', et: '报告大体上完成了；我只需要核对参考文献。' },
        { w: 'to some extent', t: '在某种程度上', e: 'I agree with you to some extent, but the cost still worries me.', et: '我在某种程度上同意你，但成本仍然让我担心。' },
        { w: 'as far as I can tell', t: '据我所能判断', e: 'As far as I can tell, nobody has complained about the new schedule.', et: '据我所能判断，还没有人抱怨新的时间安排。' },
        { w: 'for what it is worth', t: '不知是否有用/仅供参考', e: 'For what it is worth, I thought your answer was clearer than mine.', et: '不知道这话有没有用，不过我觉得你的回答比我的更清楚。' },
        { w: 'if anything', t: '要说有什么不同的话（反而）', e: 'The second draft is not shorter; if anything, it is slightly longer.', et: '第二稿并没有更短；要说有什么不同，反而还长了一点。' },
        { w: 'to put it mildly', t: '说得客气一点（实际程度更重）', e: 'The launch was disorganized, to put it mildly.', et: '这次上线，说得客气一点，组织得很混乱。' },
        { w: 'strictly speaking', t: '严格来说', e: 'Strictly speaking, the shop should be closed, but the owner let us in.', et: '严格来说，这家店本该关门了，但店主让我们进去了。' },
        { w: 'not necessarily', t: '未必', e: 'A higher price does not necessarily mean better quality.', et: '价格更高未必意味着质量更好。' }
      ] }
    ] },
    { id: 'en-u37', level: 'C2', title: '第三十七单元 · 论证的强度与边界', desc: '看清一个论证站不站得住：漏洞、让步、限定与说服语气', color: '#2563eb', lessons: [
      { id: 'en-u37-l1', title: '论点与漏洞', items: [
        { w: 'hold water', t: '站得住脚（经得起检验）', e: 'His explanation sounds plausible, but it does not hold water once you check the dates.', et: '他的解释听起来合理，但一核对日期就站不住脚了。' },
        { w: 'a case in point', t: '恰当的例子', e: 'Many startups fail by growing too fast; the company\'s collapse is a case in point.', et: '许多创业公司因扩张过快而失败；这家公司的倒闭就是一个恰当的例子。' },
        { w: 'straw man', t: '稻草人（曲解对方论点再攻击）', e: 'He spent the whole article attacking a straw man rather than the actual proposal.', et: '他整篇文章都在攻击一个被曲解的论点，而不是真正的提案。' },
        { w: 'false dilemma', t: '假两难（非此即彼的谬误）', e: 'The memo presents a false dilemma: either we cut salaries or we close the office.', et: '这份备忘录制造了一个假两难：要么降薪，要么关门。' },
        { w: 'burden of proof', t: '举证责任', e: 'The burden of proof lies with the person making the claim, not with the sceptic.', et: '举证责任在提出主张的人身上，而不在怀疑者身上。' },
        { w: 'beg the question', t: '把待证结论当前提（循环论证）', e: 'Saying the policy works because it is effective begs the question.', et: '说这项政策有效是因为它效果好，这是把待证的结论当成了前提。' },
        { w: 'circular argument', t: '循环论证', e: 'Their defence is a circular argument: the plan is sound because sound planners approved it.', et: '他们的辩护是循环论证：计划可靠，因为可靠的规划者批准了它。' },
        { w: 'non sequitur', t: '不合逻辑的推论', e: 'His conclusion is a non sequitur; nothing in the data supports such a leap.', et: '他的结论是不合逻辑的推论；数据里没有任何东西支持这种跳跃式结论。' }
      ] },
      { id: 'en-u37-l2', title: '让步、限定与保留', items: [
        { w: 'concede', t: '承认（对方有理之处）', e: 'I concede that the first draft was too long, but the argument still holds.', et: '我承认初稿太长了，但论证依然成立。' },
        { w: 'granted', t: '姑且承认（用于让步）', e: 'Granted, the sample is small; that does not make the finding meaningless.', et: '就算样本很小，这也不等于发现没有意义。' },
        { w: 'on the face of it', t: '表面上看', e: 'On the face of it, the deal looks generous, yet the small print tells another story.', et: '表面上看，这笔交易很慷慨，但细则讲的却是另一回事。' },
        { w: 'caveat', t: '附加说明/提醒', e: 'One caveat: the figures exclude overtime pay.', et: '有一点需要提醒：这些数字不含加班费。' },
        { w: 'all things considered', t: '通盘考虑之后', e: 'All things considered, the slower option is the safer one.', et: '通盘考虑之后，较慢的那个方案更稳妥。' },
        { w: 'with the benefit of hindsight', t: '事后聪明地看', e: 'With the benefit of hindsight, we should have tested the app on older phones.', et: '事后聪明地看，我们本应在旧款手机上测试这个应用。' },
        { w: 'the jury is still out', t: '尚无定论', e: 'The jury is still out on whether the new schedule actually reduces stress.', et: '新时间表是否真的减轻了压力，目前尚无定论。' },
        { w: 'take something with a pinch of salt', t: '有所保留地看待', e: 'Take the survey results with a pinch of salt; only forty people replied.', et: '对调查结果要有所保留；只有四十个人回复。' }
      ] },
      { id: 'en-u37-l3', title: '语气、措辞与说服', items: [
        { w: 'understate', t: '轻描淡写', e: 'To say the launch was rocky would be to understate the problem.', et: '说这次上线“有点颠簸”，那是轻描淡写了问题。' },
        { w: 'overstate', t: '夸大', e: 'It is hard to overstate how much the team relied on her.', et: '团队对她的依赖程度怎么夸大都不为过。' },
        { w: 'spin', t: '有倾向性的解读', e: 'The press release puts a positive spin on what was essentially a recall.', et: '新闻稿给一场本质上的召回做了正面包装。' },
        { w: 'euphemism', t: '委婉语', e: '\'Letting people go\' is a euphemism for firing them.', et: '“让员工离开”是解雇的委婉说法。' },
        { w: 'loaded language', t: '带倾向性的措辞', e: 'The report\'s loaded language makes a neutral reading almost impossible.', et: '报告里带倾向性的措辞让人几乎无法中立地阅读。' },
        { w: 'play devil\'s advocate', t: '故意唱反调（帮助检验观点）', e: 'Let me play devil\'s advocate: what if the critics are right?', et: '我来故意唱个反调：万一批评者是对的呢？' },
        { w: 'make a compelling case', t: '提出有说服力的论证', e: 'She made a compelling case for delaying the decision.', et: '她为推迟决定提出了有说服力的论证。' },
        { w: 'undercut', t: '削弱（论点、立场）', e: 'The new evidence undercuts the central claim of the paper.', et: '新证据削弱了这篇论文的核心主张。' }
      ] }
    ] },
    { id: 'en-u38', level: 'C2', title: '第三十八单元 · 职场与社交的言外之意', desc: '听出评价里的分寸、会议里的保留，以及关系中的试探与修复', color: '#7c3aed', lessons: [
      { id: 'en-u38-l1', title: '委婉评价与人际分寸', items: [
        { w: 'faint praise', t: '明褒实贬', e: 'Calling the proposal \'ambitious\' was faint praise at best.', et: '说这个提案“很有雄心”，往好里说也只是明褒实贬。' },
        { w: 'backhanded compliment', t: '反讽式恭维', e: 'Saying I looked tired but still professional was a backhanded compliment.', et: '说我看着累但还算专业，这是一句反讽式恭维。' },
        { w: 'test the waters', t: '试探口风、先探路', e: 'Before proposing the merger, she tested the waters with two board members.', et: '在提出合并之前，她先向两位董事探了口风。' },
        { w: 'step on someone\'s toes', t: '越界、冒犯到别人', e: 'I did not mean to step on your toes by emailing the client directly.', et: '我直接给客户发邮件，不是想越界冒犯你。' },
        { w: 'cover one\'s back', t: '留证据自保', e: 'He copied his manager on every email to cover his back.', et: '他每封邮件都抄送经理，好留个凭证自保。' },
        { w: 'pass the buck', t: '推卸责任', e: 'The delay was nobody\'s fault, apparently; everyone passed the buck.', et: '看来这次延误谁都没责任；人人都把责任推了出去。' },
        { w: 'take the fall', t: '替人担责', e: 'She took the fall for a mistake that was not hers.', et: '她为一个不是自己犯的错担了责任。' },
        { w: 'own up to', t: '坦然承认', e: 'It takes courage to own up to a mistake in front of the whole team.', et: '在全团队面前坦然承认错误需要勇气。' }
      ] },
      { id: 'en-u38-l2', title: '会议与谈判', items: [
        { w: 'circle back', t: '稍后再回来谈', e: 'Let us circle back to the timeline after lunch.', et: '我们午饭后再回到时间表这个问题。' },
        { w: 'bottom line', t: '最终结论、最关键的一点（财会义为盈亏底线）', e: 'The bottom line is that we cannot ship before Friday.', et: '关键结论是，我们周五之前发不了货。' },
        { w: 'move the goalposts', t: '中途改变标准', e: 'Every time we meet the target, they move the goalposts.', et: '每次我们达到目标，他们就改标准。' },
        { w: 'on the same page', t: '达成共识', e: 'Let us make sure we are on the same page before the client calls.', et: '客户来电之前，我们得确认彼此理解一致。' },
        { w: 'table a proposal', t: '搁置提案（英式）/提交讨论（美式）', e: 'The committee tabled the proposal, which in British usage means it was postponed.', et: '委员会搁置了提案——按英式用法，意思是延后处理。' },
        { w: 'in principle', t: '原则上（未必落实）', e: 'We agreed in principle, but the budget still has to be approved.', et: '我们原则上同意了，但预算还得批。' },
        { w: 'with reservations', t: '有保留地', e: 'The board approved the plan with reservations about the timeline.', et: '董事会批准了计划，但对时间安排有保留。' },
        { w: 'a sticking point', t: '症结、卡住的地方', e: 'The sticking point is who pays for the extra testing.', et: '症结在于额外测试由谁付费。' }
      ] },
      { id: 'en-u38-l3', title: '关系、冲突与修复', items: [
        { w: 'clear the air', t: '消除隔阂、把话说开', e: 'A short honest conversation cleared the air between them.', et: '一次简短的坦诚交谈消除了两人之间的隔阂。' },
        { w: 'give someone the cold shoulder', t: '冷淡对待', e: 'After the argument, she gave him the cold shoulder for a week.', et: '争吵之后，她冷落了他一个星期。' },
        { w: 'olive branch', t: '橄榄枝（示好）', e: 'He offered an olive branch by covering her weekend shift.', et: '他替她上了周末的班，以此示好。' },
        { w: 'take something personally', t: '认为是在针对自己', e: 'Try not to take the feedback personally; it is about the work.', et: '别把反馈当成针对你个人；它是关于工作的。' },
        { w: 'draw a line', t: '划定界限', e: 'I am happy to help, but I draw the line at working weekends.', et: '我很乐意帮忙，但周末加班这条线我不能越。' },
        { w: 'fall out with', t: '与…闹翻', e: 'They fell out over how the credit was shared.', et: '他们因为功劳怎么分而闹翻了。' },
        { w: 'make amends', t: '弥补、赔罪', e: 'He tried to make amends by apologising publicly.', et: '他试图通过公开道歉来弥补。' },
        { w: 'mend fences', t: '修复关系', e: 'The two departments are trying to mend fences after the reorganisation.', et: '重组之后，两个部门正试图修复关系。' }
      ] }
    ] },
    { id: 'en-u39', level: 'C2', title: '第三十九单元 · 顶阶：辨析、衔接与立场', desc: '把近义差别、语篇衔接和言外立场练到接近母语者的分寸', color: '#0f766e', lessons: [
      { id: 'en-u39-l1', title: '近义辨析：强度与语域', items: [
        { w: 'allege', t: '（未经证实）指称、声称（法律/新闻语域，比 claim 更正式且暗示证据不足）', e: 'The article alleges that the firm knew about the defect for months, though it publishes no document to prove it.', et: '文章指称该公司数月前就知晓缺陷，却没有公布任何文件证明。' },
        { w: 'contend', t: '（正式）主张、力辩（书面论证，比 argue 更硬）', e: 'The authors contend that the policy failed not because it was too bold, but because it was never funded.', et: '作者主张，这项政策失败不是因为太大胆，而是因为从未获得资金。' },
        { w: 'reckon', t: '（英式口语）估计、觉得（非正式，写进论文会显得随意）', e: 'In the pub he said he reckoned the deal would collapse; in the memo he wrote that he anticipated difficulties.', et: '在酒吧里他说他估计这桩交易要黄；在备忘录里，他写的是他预计会有困难。' },
        { w: 'deem', t: '（正式/法律）认定、视为（后接形容词，带官方裁断意味）', e: 'The committee deemed the evidence insufficient — a word it would not have used for a mere lack of enthusiasm.', et: '委员会认定证据不足——“认定”这个词，他们不会用来形容仅仅缺乏热情。' },
        { w: 'dub', t: '（媒体语域）把…称为、戏称（常带标签化，未必公允）', e: 'The press dubbed the experiment "the last chance", a label the scientists themselves were careful to avoid.', et: '媒体把这项实验称为“最后的机会”，而科学家自己一直小心避开这个标签。' },
        { w: 'decry', t: '（正式）公开谴责（带道德立场，比 criticize 重得多）', e: 'Critics decried the decision as a betrayal; the board, in its statement, called it a correction.', et: '批评者谴责这一决定是背叛；董事会在声明里则称其为一次纠正。' },
        { w: 'chide', t: '（温和、长辈式）嗔怪、责备（强度低于 scold，常含关切）', e: 'She chided him for missing the meeting, then poured him a coffee and asked how he was.', et: '她嗔怪他错过了会议，随后给他倒了杯咖啡，问他最近怎么样。' },
        { w: 'berate', t: '严厉斥责、痛骂（长时间、当众，强度最高）', e: 'The coach berated the squad for ten minutes; one calm sentence would have taught them more.', et: '教练把队员痛骂了十分钟；一句平静的话本可以让他们学到更多。' }
      ] },
      { id: 'en-u39-l2', title: '语篇衔接与修辞', items: [
        { w: 'admittedly', t: '诚然、不可否认（让步副词：先认下对己不利的事实）', e: 'Admittedly, the sample is small; that does not make the effect imaginary.', et: '诚然，样本很小；但这并不使效应变成凭空想象。' },
        { w: 'notwithstanding', t: '尽管、虽然（正式，可置于名词后，比 although 更书面）', e: 'Notwithstanding the delays, the report was submitted on time; the delays notwithstanding, the data held.', et: '尽管有延误，报告仍按时提交；尽管有延误，数据依然站得住。' },
        { w: 'by the same token', t: '同理、出于同样的道理（用于对称推进论证）', e: 'If we excuse his silence as modesty, by the same token we should not read hers as coldness.', et: '如果我们把他的沉默理解为谦逊，那么同理，我们也不该把她的沉默理解为冷漠。' },
        { w: 'let alone', t: '更不用说（用于否定之后，后接更极端的项目）', e: 'He could not explain the method to a colleague, let alone defend it before a review panel.', et: '他连向同事解释这个方法都做不到，更不用说在评审小组面前为它辩护。' },
        { w: 'thereby', t: '从而、由此（正式结果连接，后接动名词）', e: 'The authors narrowed the claim, thereby making it harder to attack but also less interesting.', et: '作者缩小了主张的范围，从而让它更难被攻击，却也没那么有意思了。' },
        { w: 'anaphora', t: '首语重复（修辞上的回指重复，制造节奏与压迫感）', e: 'The speech built to anaphora: "We failed the data, we failed the deadline, we failed the people who trusted us."', et: '演讲推向首语重复：“我们辜负了数据，我们辜负了期限，我们辜负了信任我们的人。”' },
        { w: 'litotes', t: '曲言法、以否定表肯定（克制的修辞，英式书面语常见）', e: 'Calling the result "not unhelpful" was litotes at its most diplomatic.', et: '把结果说成“并非没有帮助”，是最圆滑的曲言法。' },
        { w: 'tricolon', t: '三叠式（三项并列的节奏修辞，常用于演讲与评论收尾）', e: 'The closing line rose in a tricolon: cheaper, faster, and quietly worse.', et: '结尾一句以三叠式推进：更便宜、更快速，也更悄悄地变糟。' }
      ] },
      { id: 'en-u39-l3', title: '立场、面子与反讽', items: [
        { w: 'hedge', t: '（用模糊语）留余地、不把话说满（hedging 的核心动作）', e: 'He hedged — "it may well work" rather than "it will work" — leaving himself room to retreat.', et: '他把话说得很活——“这很可能行得通”，而不是“这一定行得通”——给自己留了退路。' },
        { w: 'plausible deniability', t: '合理的推诿空间（可否认自己知情或授意）', e: 'The order was given verbally, which preserved plausible deniability for everyone in the room.', et: '命令是口头下达的，这为屋里每个人保留了合理的推诿空间。' },
        { w: 'for the record', t: '郑重声明、正式留档地说（表明立场、划清责任）', e: 'For the record, I opposed the sale; I want the minutes to show that.', et: '郑重说明，我反对这笔出售；我希望会议记录能体现这一点。' },
        { w: 'tongue in cheek', t: '半开玩笑地、话里有话（表面认真，实则反讽）', e: 'His congratulations were tongue in cheek; everyone in the room heard the edge in them.', et: '他的祝贺是半开玩笑的；屋里每个人都听出了里面的刺。' },
        { w: 'thinly veiled', t: '几乎不加掩饰的（讽刺或敌意明显可辨）', e: 'Her thinly veiled criticism of "the previous management" was aimed at the man sitting beside her.', et: '她对“前任管理层”几乎不加掩饰的批评，针对的是坐在她身边的那个男人。' },
        { w: 'save face', t: '保全面子（给对方留台阶，避免公开难堪）', e: 'He was allowed to resign "for personal reasons" to save face, though everyone knew he had been pushed.', et: '他被允许以“个人原因”辞职以保全面子，尽管所有人都知道他是被推走的。' },
        { w: 'deflect', t: '转移（指责、注意力或话题），不正面回应', e: 'Asked about the delay, the director deflected with a long story about budget cuts.', et: '被问到延误时，主管用一段关于预算削减的长故事把话题岔开了。' },
        { w: 'scapegoat', t: '替罪羊；把责任推给某人（责任转移）', e: 'The junior analyst was made the scapegoat for a decision taken three levels above her.', et: '那位初级分析师成了替罪羊，为一个比她高三级做出的决定背锅。' }
      ] }
    ] },
    { id: 'en-u40', level: 'C2', title: '第四十单元 · 顶阶：数量、归因与收束', desc: '把模糊数量、因果归因和礼貌收束说到母语者的分寸', color: '#0f766e', lessons: [
      { id: 'en-u40-l1', title: '数量与程度', items: [
        { w: 'a modicum of', t: '一点点、最低限度的（正式；常指尚算合理的品质或耐心，如 a modicum of respect）', e: 'He answered with a modicum of patience, which was more than the question deserved.', et: '他带着一点点耐心回答，而这个问题其实不配得到这么多。' },
        { w: 'scant', t: '（正式）微薄的、不足的（比 little 多一层评判：少得不够用）', e: 'The case rests on scant evidence: two interviews and a graph with no axis labels.', et: '这个论断建立在微薄的证据上：两次访谈，一张没有坐标轴标签的图。' },
        { w: 'a dearth of', t: '（正式）严重缺乏（比 lack 更强调稀缺到成问题；no dearth of 则是“多得很”）', e: 'There is no dearth of opinions in the room; what is missing is a decision.', et: '房间里不缺意见；缺的是一个决定。' },
        { w: 'inordinate', t: '过度的、超出合理限度的（带批评，指时间或数量多得不成比例）', e: 'The team spent an inordinate amount of time defending a slide nobody would read.', et: '团队花了过多的时间去为一页没人会看的幻灯片辩护。' },
        { w: 'commensurate', t: '（正式）相称的、成比例的（常与 with 连用：回报与付出/风险相称）', e: 'The risk was real, but the pay was not commensurate with it.', et: '风险是真实的，但报酬与它并不相称。' },
        { w: 'marginal', t: '微小的、边缘的（统计与商业语境中常指小到接近可忽略）', e: 'The gain was marginal — within the margin of error, the analysts admitted.', et: '收益很微小——分析人员承认，它落在误差范围之内。' },
        { w: 'appreciable', t: '（正式）可察觉的、相当可观的（与 marginal 相对，强调大到能被感知）', e: 'Only after six months was there an appreciable change in behaviour.', et: '直到六个月后，行为才出现了可察觉的变化。' },
        { w: 'a glut of', t: '（常含贬义）过剩的一大批、供过于求（与 a dearth of 相对）', e: 'A glut of cheap courses made the expensive ones look like a statement.', et: '一大批廉价课程让昂贵的那些看起来像一种立场宣示。' }
      ] },
      { id: 'en-u40-l2', title: '因果与归因', items: [
        { w: 'stem from', t: '源于、由…造成（比 come from 正式，指向根源而非表面原因）', e: 'The distrust stems from a decision taken years before any of them joined.', et: '这种不信任源于他们任何人入职之前很久做出的一项决定。' },
        { w: 'give rise to', t: '（正式）引起、导致（多指引发某种现象或争议，而非直接动作）', e: 'The policy gave rise to a debate it was never designed to answer.', et: '这项政策引发了一场它从未打算回应的辩论。' },
        { w: 'attributable to', t: '可归因于（正式/统计语域，暗示仍有其他因素未被排除）', e: 'Two thirds of the decline is attributable to one change in the onboarding flow.', et: '这次下降有三分之二可归因于引导流程中的一处改动。' },
        { w: 'precipitate', t: '（正式）促成、使…骤然发生（比 cause 更强调加速与触发）', e: 'A single misquoted sentence precipitated the collapse of the talks.', et: '一句被引错的话促成了谈判的崩盘。' },
        { w: 'catalyst', t: '催化剂、促发因素（本身不是原因，却让变化发生得更快）', e: 'The report was not the cause of the reform; it was the catalyst.', et: '这份报告不是改革的起因，而是催化剂。' },
        { w: 'spurious', t: '（正式）虚假的、貌似相关实则无关的（常指统计上的伪相关）', e: 'The correlation looked impressive until someone controlled for income and found it spurious.', et: '这个相关性看起来很有说服力，直到有人控制了收入变量，才发现它是伪相关。' },
        { w: 'hinge on', t: '取决于、系于（点出关键变量所在，比 depend on 更有画面感）', e: 'The whole argument hinges on a definition the author never gives.', et: '整个论证都取决于一个作者从未给出的定义。' },
        { w: 'ascribe', t: '（正式）把…归因于（ascribe X to Y，常暗示这一归因未必公允）', e: 'She ascribes her success to luck, which is either modesty or a way of avoiding the question.', et: '她把成功归因于运气，这要么是谦虚，要么是在回避问题。' }
      ] },
      { id: 'en-u40-l3', title: '礼貌收束与拒绝', items: [
        { w: 'I am afraid', t: '（委婉开场）恐怕…（用于坏消息或拒绝之前先软化，并不表示真的害怕）', e: 'I am afraid the answer is no, and I would rather say it now than in an email.', et: '恐怕答案是不行，我宁愿现在说，也不愿写进邮件里。' },
        { w: 'I would rather not', t: '我更希望不…（礼貌而明确地拒绝，不给理由，也不留争辩口）', e: 'I would rather not discuss the details until the review is finished.', et: '在评审结束前，我更希望不谈细节。' },
        { w: 'regretfully', t: '（正式/书面）遗憾地（拒绝或坏消息的体面开场，比 sadly 更公事化）', e: 'Regretfully, we cannot extend the deadline without moving the launch.', et: '遗憾地说，不推迟上线，我们就无法延长截止日期。' },
        { w: 'I will have to pass', t: '（口语、礼貌）这次我就不参加了（拒绝邀请，比直接说 no 温和）', e: 'It sounds like a good evening, but I will have to pass this time.', et: '听起来是个不错的晚上，不过这次我就不去了。' },
        { w: 'that is very kind of you', t: '你太客气了（先认下对方的好意，再拒绝或接受都不失礼）', e: 'That is very kind of you, but I have already promised the slot to someone else.', et: '你太客气了，不过那个时段我已经答应给别人了。' },
        { w: 'I am not in a position to', t: '（正式）我无权、不便（把拒绝归于身份限制而非意愿，给对方留面子）', e: 'I am not in a position to promise that, though I can raise it on your behalf.', et: '我无权做这个承诺，不过我可以替你提出来。' },
        { w: 'I would be glad to', t: '我很乐意…（后面接 but 时是英式礼貌的典型转折：先给足善意再拒绝）', e: 'I would be glad to take it on, but not while the audit is still open.', et: '我很乐意接手，但审计还没结束的时候不行。' },
        { w: 'let us leave it there', t: '（收束）我们就谈到这里（礼貌结束话题，暗示不再深入）', e: 'We have covered what we can today, so let us leave it there.', et: '今天能谈的我们都谈了，就到这里吧。' }
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
        { npc: 'It is three kilograms over. You can pay a fee or move some things to your handbag.', tr: '超了三公斤。您可以付费，或者把一些东西放到随身包里。' },
        { say: 'I will move some clothes to my handbag, thanks for the advice.', tr: '我把一些衣服放到随身包里，谢谢你的建议。', hint: '说出解决办法并致谢' },
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
        { npc: 'That works. How do you deal with a long line of customers?', tr: '可以。客人排长队的时候你怎么应对？' },
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
    },
    {
      id: 'en-d13', level: 'A1', title: '公交站聊天气', scene: '公交站',
      setup: '你在公交站等车，旁边的人主动跟你聊起天气。',
      lines: [
        { npc: 'What a sunny morning!', tr: '多么晴朗的早晨啊！' },
        { ask: '回应对方，说说今天的天气。', me: [
          { t: 'Yes, it is really nice. Much better than yesterday.', tr: '是啊，天气真好，比昨天好多了。', best: true },
          { t: 'Yes. Today weather is very nice day.', tr: '是。今天天气是很好日子。' },
          { t: 'Sorry, I do not like mornings.', tr: '抱歉，我不喜欢早晨。' }
        ] },
        { npc: 'True. It rained all day yesterday. I got wet on my way home.', tr: '可不是嘛，昨天下了一整天雨，我回家路上淋湿了。' },
        { say: 'Same here. I left my umbrella at the office, so my shoes were wet.', tr: '我也是。我把伞落在办公室了，鞋都湿了。', hint: '说自己也遇到了下雨，描述淋湿的情况' },
        { npc: 'Summer is coming. It will be hot soon. Which season do you like?', tr: '夏天要来了，很快就热了。你喜欢哪个季节？' },
        { ask: '说说你最喜欢的季节和原因。', me: [
          { t: 'I like autumn best. It is cool, and the leaves are beautiful.', tr: '我最喜欢秋天，天气凉爽，树叶也漂亮。', best: true },
          { t: 'Autumn is good season. Cool. Leaves nice.', tr: '秋天是好季节。凉爽。树叶好看。' },
          { t: 'Autumn is in September, I think.', tr: '秋天在九月，我觉得。' }
        ] },
        { npc: 'Good choice. Oh, here comes my bus. Enjoy the sunshine!', tr: '好选择。哦，我的车来了，好好享受阳光吧！' },
        { say: 'Thanks! Have a nice day, and I hope it stays sunny.', tr: '谢谢！祝你今天愉快，希望一直是晴天。', hint: '道谢并祝对方愉快' }
      ]
    },
    {
      id: 'en-d14', level: 'A2', title: '在银行开户', scene: '银行营业厅',
      setup: '你刚搬到新城市，想开一个银行账户，取号后到了柜台前。',
      lines: [
        { npc: 'Good morning. How can I help you today?', tr: '早上好，今天有什么可以帮您？' },
        { ask: '说明想开储蓄账户并递上身份证。', me: [
          { t: 'Good morning. I would like to open a savings account. Here is my ID card.', tr: '早上好，我想开一个储蓄账户。这是我的身份证。', best: true },
          { t: 'I want open account. Savings money. Card.', tr: '我要开账户。存钱。卡。' },
          { t: 'I want to save my money in your bank machine.', tr: '我想把我的钱存在你们的银行机器里。' }
        ] },
        { npc: 'Thank you. Please fill in this form with your name, address, and phone number.', tr: '谢谢。请在这张表格上填写您的姓名、地址和电话。' },
        { say: 'Sure. By the way, is there a monthly fee for the card?', tr: '好的。顺便问一下，这张卡有月费吗？', hint: '应承填表，并询问卡是否收费' },
        { npc: 'The card is free, but taking money out at other banks costs two dollars each time. Anything else?', tr: '卡本身免费，但在其他银行取钱每次收两美元。还有别的问题吗？' },
        { ask: '询问能否在手机上使用网上银行。', me: [
          { t: 'Yes, can I use online banking on my phone as well?', tr: '有，我还能在手机上用网上银行吗？', best: true },
          { t: 'Phone bank? I use phone bank? OK?', tr: '手机银行？我用手机银行？行吗？' },
          { t: 'Yes, I want to buy a new phone here.', tr: '有，我想在这里买一部新手机。' }
        ] },
        { npc: 'Of course. Download our app and log in with the temporary password in this envelope.', tr: '当然可以。下载我们的应用，用这个信封里的临时密码登录。' },
        { say: 'Got it. So when can I get the card?', tr: '知道了。那我什么时候能拿到卡？', hint: '确认领卡时间' },
        { npc: 'In about five working days. We will call you when it is ready.', tr: '大约五个工作日。办好我们会打电话给您。' },
        { say: 'Great, thank you for your help. Have a nice day!', tr: '太好了，谢谢您的帮助。祝您今天愉快！', hint: '感谢柜员并道别' }
      ]
    },
    {
      id: 'en-d15', level: 'B1', title: '讨论禁车新政策', scene: '办公室茶水间',
      setup: '你和同事看到本地新闻：市政府计划把两条市中心街道改成禁车区，你们聊起各自的看法。',
      lines: [
        { npc: 'Did you catch the news this morning? The city wants to turn two streets downtown into car-free zones.', tr: '你今早看新闻了吗？市里想把市中心两条街改成禁车区。' },
        { ask: '表示看过新闻并给出你的初步判断。', me: [
          { t: 'Yes, I read the whole article. I think it could really cut down traffic and noise in the center.', tr: '看了，我把整篇文章都读了。我觉得这真能减少市中心的车流和噪音。', best: true },
          { t: 'Yes, I read. Car no, street good, I think so.', tr: '看了。车不行，街道好，我这么觉得。' },
          { t: 'Yes, I want to buy a car-free street.', tr: '看了，我想买一条禁车街。' }
        ] },
        { npc: 'Shop owners are pushing back, though. They worry that fewer cars means fewer customers, and honestly, they have a point.', tr: '不过店主们在反对。他们担心车少了顾客就少，说实话，这话有道理。' },
        { ask: '承认对方的顾虑，同时给出支持的理由。', me: [
          { t: 'That is a fair concern, but studies from other cities show that walkable streets often bring more visitors, not fewer.', tr: '这个顾虑很合理，但其他城市的研究表明，适合步行的街道往往带来更多客流，而不是更少。', best: true },
          { t: 'Maybe right. Walking street is good for shops, I guess, kind of.', tr: '也许对吧。步行街对商店好，我猜，算是吧。' },
          { t: 'I never walk on that street, so it is fine with me.', tr: '我从来不在那条街上走，所以对我来说无所谓。' }
        ] },
        { npc: 'Interesting. The local paper ran a survey yesterday — about sixty percent of readers were in favor of the plan.', tr: '有意思。本地报纸昨天做了个调查，大约百分之六十的读者赞成这个计划。' },
        { say: 'That does not surprise me. When I take the bus at rush hour, it is usually faster than driving, so many people would welcome the change.', tr: '这不出我所料。我高峰期坐公交通常比开车快，所以很多人会欢迎这个变化。', hint: '结合自己高峰期坐公交的经历，解释为什么多数人赞成' },
        { npc: 'True, as long as they improve the bus service at the same time. Otherwise people will simply drive through the side streets.', tr: '没错，前提是他们同时改善公交服务，不然大家只会绕行小街。' },
        { ask: '提出一个前提条件，并说明你整体上支持。', me: [
          { t: 'Exactly my concern. I would support the plan on one condition: more frequent buses and a proper bike lane network first.', tr: '我担心的正是这一点。我支持这个计划有一个前提：先增加公交班次、建好自行车道网络。', best: true },
          { t: 'Bus more, then OK. I support maybe.', tr: '公交多一些，然后行。我也许支持。' },
          { t: 'I would support building more parking lots there.', tr: '我支持在那里多建停车场。' }
        ] },
        { npc: 'The council is collecting public opinion until Friday. A well-argued email might actually make a difference.', tr: '市议会周五前都在收集公众意见。一封论证充分的邮件说不定真能起作用。' },
        { say: 'I will write one tonight and share the survey with my neighbors as well. It is rare that city planning asks for our opinions.', tr: '我今晚就写一封，也把调查分享给邻居们。城市规划征求我们的意见，这样的机会可不多。', hint: '表示今晚就写邮件提意见，并把调查转发给邻居' }
      ]
    },
    {
      id: 'en-d16', level: 'A1', title: '在餐馆吃晚饭', scene: '街边小餐馆',
      setup: '晚上你和朋友走进一家小餐馆，服务员在门口招呼你们。',
      lines: [
        { npc: 'Good evening. A table for two?', tr: '晚上好。两位吗？' },
        { ask: '确认两位，并想要靠窗的桌子。', me: [
          { t: 'Yes, a table for two by the window, please.', tr: '是的，请给我们一张靠窗的两人桌。', best: true },
          { t: 'Two. Window. Now.', tr: '两位。窗。现在。' },
          { t: 'We are two tables, thank you.', tr: '我们是两张桌子，谢谢。' }
        ] },
        { npc: 'Of course. Here are the menus. Would you like something to drink first?', tr: '当然可以。这是菜单。要先喝点什么吗？' },
        { say: 'Two glasses of water, please. We will order food in a minute.', tr: '请给我们两杯水。我们过一会儿再点菜。', hint: '点两杯水，并说稍后点菜' },
        { npc: 'Sure. Are you ready to order now?', tr: '好的。现在可以点菜了吗？' },
        { ask: '询问今天的特餐是什么。', me: [
          { t: 'Yes. Could you tell me what the special is today?', tr: '可以。能告诉我今天的特餐是什么吗？', best: true },
          { t: 'Special? What? Tell.', tr: '特餐？什么？说。' },
          { t: 'I do not want the special, so give me the most expensive dish.', tr: '我不要特餐，给我最贵的那道菜。' }
        ] },
        { npc: 'Today the special is grilled fish. It is a little spicy.', tr: '今天的特餐是烤鱼，有点辣。' },
        { ask: '点一份烤鱼和一份蔬菜。', me: [
          { t: 'We will take the fish, and one vegetable dish, please.', tr: '我们要那份鱼，再要一份蔬菜。', best: true },
          { t: 'Fish one. Vegetable one. Quick.', tr: '鱼一份。蔬菜一份。快。' },
          { t: 'We will take the special twice, but we do not eat fish.', tr: '我们要两份特餐，不过我们不吃鱼。' }
        ] },
        { npc: 'Good choice. Anything else?', tr: '选得好。还要别的吗？' },
        { say: 'No, that is all for now. Could we have the bill, please?', tr: '不用了，暂时就这些。可以给我们账单吗？', hint: '表示就这些，并请服务员结账' }
      ]
    },
    {
      id: 'en-d17', level: 'A1', title: '在服装店买衬衫', scene: '商场服装店',
      setup: '你想买一件蓝色衬衫，店员走过来招呼你。',
      lines: [
        { npc: 'Hello! Can I help you find anything?', tr: '你好！需要我帮你找什么吗？' },
        { say: 'Yes, I am looking for a blue shirt.', tr: '是的，我在找一件蓝色衬衫。', hint: '说想找一件蓝色衬衫' },
        { npc: 'What size do you wear?', tr: '你穿什么尺码？' },
        { ask: '报出尺码，并问能不能试穿。', me: [
          { t: 'Medium, I think. May I try it on?', tr: '我想是中号。我可以试穿吗？', best: true },
          { t: 'Medium. Try.', tr: '中号。试。' },
          { t: 'I wear a blue shirt, and I want to try the size.', tr: '我穿蓝色衬衫，我想试试尺码。' }
        ] },
        { npc: 'Sure. The changing room is over there.', tr: '当然可以。试衣间在那边。' },
        { npc: 'How does it fit?', tr: '穿着合身吗？' },
        { say: 'It fits well, but the sleeves are a little long.', tr: '挺合身的，就是袖子有点长。', hint: '说合身，但袖子有点长' },
        { npc: 'We have a smaller size, and it is forty dollars.', tr: '我们有小一号的，价格是四十美元。' },
        { ask: '决定要小一号，并问能否刷卡。', me: [
          { t: 'I will take the smaller one then. Can I pay by card?', tr: '那我要小一号的。可以刷卡吗？', best: true },
          { t: 'Smaller. Card. Yes.', tr: '小一号。卡。好。' },
          { t: 'I will take both sizes, but I only have ten dollars.', tr: '两个尺码我都要，但我只有十美元。' }
        ] },
        { npc: 'Of course. The cashier is at the door.', tr: '当然可以。收银台在门口。' }
      ]
    },
    {
      id: 'en-d18', level: 'A2', title: '在诊所看医生', scene: '社区诊所',
      setup: '你已经咳嗽发烧三天了，今天到诊所看医生。',
      lines: [
        { npc: 'Good morning. What seems to be the problem?', tr: '早上好。哪里不舒服？' },
        { say: 'I have had a cough and a fever for three days.', tr: '我咳嗽发烧已经三天了。', hint: '说明咳嗽发烧持续三天' },
        { npc: 'Any other symptoms? A sore throat or a headache?', tr: '还有别的症状吗？喉咙痛或者头痛？' },
        { ask: '补充症状：喉咙痛，而且很累。', me: [
          { t: 'Yes, my throat hurts and I feel very tired.', tr: '有，我喉咙痛，而且觉得很累。', best: true },
          { t: 'Throat hurt, tired, yes yes.', tr: '喉咙疼，累，是是。' },
          { t: 'No, I only have a broken leg.', tr: '没有，我只是腿骨折了。' }
        ] },
        { npc: 'Let me take your temperature. It is thirty-eight point five.', tr: '我给你量一下体温。三十八点五度。' },
        { say: 'Is it serious? Do I need any medicine?', tr: '严重吗？我需要吃药吗？', hint: '问病情是否严重、要不要吃药' },
        { npc: 'It is a virus, so antibiotics will not help. Rest and drink plenty of water.', tr: '这是病毒，抗生素没有用。多休息，多喝水。' },
        { ask: '问多久能好，以及能不能去上班。', me: [
          { t: 'How long will it take to get better? Can I go to work?', tr: '要多久才能好？我能去上班吗？', best: true },
          { t: 'When good? Work? I go?', tr: '什么时候好？上班？我去？' },
          { t: 'I want to work today, so please give me a strong pill.', tr: '我今天想去上班，请给我一片强效药。' }
        ] },
        { npc: 'Stay home for two days at least. I will write a note for your office.', tr: '至少在家待两天。我会给你的公司写一张病假条。' },
        { say: 'Thank you, doctor. I will follow your advice.', tr: '谢谢医生，我会照您说的做。', hint: '向医生道谢，并表示会照做' }
      ]
    },
    {
      id: 'en-d19', level: 'B1', title: '在周会上汇报进度', scene: '公司会议室',
      setup: '周会上讨论应用上线延期的问题，你需要向团队说明进展，并提出补救建议。',
      lines: [
        { npc: 'Thanks everyone for coming. Let us start with the timeline. Where are we on the app release?', tr: '谢谢大家到场。我们先看时间表。应用上线现在到哪一步了？' },
        { say: 'We have finished the design and two of the three testing rounds, but the payment module is behind schedule.', tr: '设计已经完成，三轮测试做完两轮，但支付模块进度落后。', hint: '说明已完成部分和落后的模块' },
        { npc: 'How far behind are we, and what is causing the delay?', tr: '落后多少？是什么造成延期的？' },
        { ask: '说明落后两周，并解释原因是支付接口变更。', me: [
          { t: 'About two weeks. The payment provider changed its interface, so we had to rebuild part of the code.', tr: '大约两周。支付服务商改了接口，所以我们不得不重写一部分代码。', best: true },
          { t: 'Two weeks late. Provider changed, code rebuild, that is it.', tr: '晚两周。服务商改了，代码重写，就这样。' },
          { t: 'We are not behind at all. Everything is fine, just a little slow.', tr: '我们根本没落后。一切正常，只是有点慢。' }
        ] },
        { npc: 'That is a real risk for the launch date. What do you suggest?', tr: '这对上线日期是实实在在的风险。你有什么建议？' },
        { ask: '建议先上线主要功能，支付放到下个版本。', me: [
          { t: 'I suggest we release the main features first and add payment in the next update.', tr: '我建议先上线主要功能，把支付放到下一次更新里。', best: true },
          { t: 'Maybe do fewer things and hope it works out, I am not sure.', tr: '也许少做点事，希望它能成，我也不确定。' },
          { t: 'We should ask the client to pay us later.', tr: '我们应该让客户晚点付钱给我们。' }
        ] },
        { npc: 'The client may not accept a release without payment. Can we bring in extra help?', tr: '客户可能不接受没有支付功能的上线。我们能调人手支援吗？' },
        { say: 'We could borrow two engineers from the platform team for a week, but we need your approval by Friday.', tr: '我们可以从平台团队借两名工程师用一周，但需要在周五前得到你的批准。', hint: '提出借调两名工程师一周，并说明需要周五前批准' },
        { npc: 'Fair enough. Send me a short plan with the new dates and the extra cost.', tr: '有道理。给我发一份简短的计划，写清新的时间节点和额外成本。' },
        { say: 'I will send the draft this afternoon and copy the finance team. Thank you for the support.', tr: '我今天下午把初稿发出来，并抄送财务团队。谢谢支持。', hint: '说下午发初稿、抄送财务，并表示感谢' }
      ]
    },
    {
      id: 'en-d20', level: 'B2', title: '讨论网络谣言', scene: '大学公共休息室',
      setup: '你和社团同学看到一条被大量转发的消息，后来证实是编造的，你们讨论该如何应对网络谣言。',
      lines: [
        { npc: 'Have you seen that story about the river being polluted? It has been shared thousands of times since yesterday morning.', tr: '你看到那条说河流被污染的消息了吗？从昨天早上起已经被转发了几千次。' },
        { ask: '说明你查证过官方报告，那条消息是编造的。', me: [
          { t: 'Yes, but I checked the official report first. The figure was made up, and no such test was ever carried out.', tr: '看到了，但我先查了官方报告。那个数字是编造的，根本没人做过这样的检测。', best: true },
          { t: 'I saw it. So many shares. It must be real news.', tr: '我看到了。转发这么多，肯定是真的新闻。' },
          { t: 'If it is on the internet, questioning it must be illegal.', tr: '既然它在网上，质疑它一定是违法的。' }
        ] },
        { npc: 'That is exactly what worries me. By the time a correction is published, the false version has already reached far more people.', tr: '这正是我担心的。等更正发布出来，假版本早就传给了多得多的人。' },
        { say: 'Exactly. If the platform had checked the source before it went viral, the damage could have been greatly reduced.', tr: '没错。如果平台在它疯传之前核查过来源，损失本可以大大减少。', hint: '用虚拟语气说：平台如果提前核查来源，损失本可以小得多' },
        { npc: 'True, but platforms cannot check everything. Readers also share first and think later.', tr: '话是没错，可平台不可能什么都核查。读者也是先转发、后思考。' },
        { ask: '建议学校开设信息素养课，让人学会先查来源再转发。', me: [
          { t: 'I believe schools should teach media literacy, so that young people learn to ask where a story came from before they pass it on.', tr: '我认为学校应该教信息素养，让年轻人在转发之前先学会追问消息来自哪里。', best: true },
          { t: 'Schools should take all phones away, and then nobody will see the news.', tr: '学校应该把手机全部收走，这样就没人能看到新闻了。' },
          { t: 'Young people share too much, old people never share, that is the whole problem.', tr: '年轻人转发太多，老人从不转发，问题全在这。' }
        ] },
        { npc: 'That would take years to show results, though. What can be done right now?', tr: '可那要多年才能见效。眼下能做什么呢？' },
        { say: 'For a start, we could report the post and publish the official data ourselves, so that at least our group is spreading the corrected version.', tr: '首先，我们可以举报那条帖子，并且自己把官方数据发出来，这样至少我们这个圈子传播的是更正后的版本。', hint: '建议举报那条帖子，并主动把官方数据发出去' },
        { npc: 'Good idea. If more people did that instead of just complaining, rumors would lose their power much faster.', tr: '好主意。如果更多人这么做，而不是光抱怨，谣言就会更快失去影响力。' }
      ]
    },
    {
      id: 'en-d21', level: 'A1', title: '去朋友家做客', scene: '朋友家客厅',
      setup: '你第一次去朋友小雨家玩，她开门欢迎你。',
      lines: [
        { npc: 'Hi! Come in, please. Make yourself at home.', tr: '你好！快请进。别客气，像在自己家一样。' },
        { ask: '打招呼并夸赞她的家。', me: [
          { t: 'Thank you! Your home is so nice and warm.', tr: '谢谢！你家又漂亮又温馨。', best: true },
          { t: 'House. Door. Good.', tr: '房子。门。好。' },
          { t: 'I came here for free food.', tr: '我来这儿是为了白吃饭。' }
        ] },
        { npc: 'Would you like some tea or juice?', tr: '你想喝茶还是果汁？' },
        { ask: '要一杯果汁，并说茶也可以。', me: [
          { t: 'Juice, please. Tea is fine too.', tr: '请给我果汁。茶也可以。', best: true },
          { t: 'Juice now. Tea never.', tr: '现在要果汁。永远不要茶。' },
          { t: 'I do not drink anything in any home.', tr: '我在任何人的家里什么都不喝。' }
        ] },
        { npc: 'Here you are. Do you want to watch a film after this?', tr: '给你。喝完想不想看一部电影？' },
        { say: 'Yes, a funny film, please. I like films with animals.', tr: '好呀，看部搞笑的吧。我喜欢有动物的电影。', hint: '答应看电影，说想看搞笑的、有动物的' },
        { npc: 'Great, I have a new one about a little dog.', tr: '太好了，我有一部新的，是关于一只小狗的。' },
        { ask: '说时间不早了要回家，并感谢她的招待。', me: [
          { t: 'Thank you for today. I need to go home now. Bye!', tr: '今天谢谢你。我现在得回家了。再见！', best: true },
          { t: 'I go now. Open the door.', tr: '我现在走。把门打开。' },
          { t: 'I will sleep here tonight, okay?', tr: '我今晚睡在你家，行吗？' }
        ] }
      ]
    },
    {
      id: 'en-d22', level: 'A2', title: '在药店买止咳药', scene: '社区药店',
      setup: '你咳嗽好几天了，走进社区药店想买点药。',
      lines: [
        { npc: 'Good morning. How can I help you today?', tr: '早上好。有什么能帮您的？' },
        { ask: '说咳嗽三天了，想买止咳药。', me: [
          { t: 'I have had a cough for three days. Do you have any cough medicine?', tr: '我咳嗽三天了。你们有止咳药吗？', best: true },
          { t: 'Cough. Medicine. Box.', tr: '咳嗽。药。盒子。' },
          { t: 'I want to buy a doctor here.', tr: '我想在这儿买一个医生。' }
        ] },
        { npc: 'I see. Is it a dry cough, or are you bringing anything up?', tr: '明白了。是干咳，还是有痰？' },
        { ask: '说是干咳，晚上更严重。', me: [
          { t: 'It is a dry cough, and it gets worse at night.', tr: '是干咳，晚上更严重。', best: true },
          { t: 'Dry. Night. Bad.', tr: '干。晚上。坏。' },
          { t: 'My cough is wet like rain every morning.', tr: '我的咳每天早上都像雨一样湿。' }
        ] },
        { npc: 'This syrup should help. Take one spoonful after each meal, and do not take more than the label says.', tr: '这种糖浆应该有效。每顿饭后喝一勺，不要超过标签上写的量。' },
        { say: 'Okay, I see. Should I avoid cold drinks while I am taking it?', tr: '好的，明白了。喝药期间我要不要避免冷饮？', hint: '表示记下了，并问服药期间要不要避免冷饮' },
        { npc: 'Yes, warm water is better. If you do not feel better in five days, please see a doctor.', tr: '是的，喝温水更好。如果五天后没有好转，请去看医生。' },
        { ask: '问价格并决定买下。', me: [
          { t: 'How much is it? Okay, I will take it.', tr: '多少钱？好，我买了。', best: true },
          { t: 'Price? Money now, medicine later.', tr: '价格？钱现在给，药以后给。' },
          { t: 'I will take ten boxes for my whole family.', tr: '我要买十盒，全家一起用。' }
        ] },
        { npc: 'That is eighty yuan. Get well soon!', tr: '一共八十元。祝您早日康复！' }
      ]
    },
    {
      id: 'en-d23', level: 'B1', title: '报名社区志愿活动', scene: '社区服务中心',
      setup: '你来到社区服务中心，想报名周末的志愿活动，工作人员向你介绍情况。',
      lines: [
        { npc: 'Welcome! Are you here to sign up for our weekend volunteer program?', tr: '欢迎！你是来报名我们的周末志愿活动的吗？' },
        { ask: '确认想参加，并问有哪些活动。', me: [
          { t: 'Yes, I would like to join. What kind of activities do you offer?', tr: '是的，我想参加。你们有哪些活动？', best: true },
          { t: 'Volunteer. List. Quick.', tr: '志愿。清单。快点。' },
          { t: 'I want to be paid for volunteering.', tr: '我做志愿者还想拿钱。' }
        ] },
        { npc: 'We have two main projects: serving meals at the senior center on Saturdays, and cleaning the riverside park on Sundays.', tr: '我们有两个主要项目：周六在老人中心帮忙送餐，周日清理河边公园。' },
        { say: 'The riverside park sounds great. I have wanted to do something for the environment for a long time.', tr: '河边公园听起来很棒。很久以来我一直想为环境做点事。', hint: '选择河边公园，并说自己一直想为环境做事' },
        { npc: 'Wonderful. It runs from nine to twelve, and gloves and bags are provided.', tr: '太好了。活动从九点到十二点，会提供手套和垃圾袋。' },
        { ask: '问是否需要提前培训、要不要自己带东西。', me: [
          { t: 'Do I need any training beforehand, or should I bring anything myself?', tr: '需要提前培训吗？还是我要自己带什么东西？', best: true },
          { t: 'Training? I already know how to pick up rubbish, no need to teach me.', tr: '培训？我早就会捡垃圾了，不用教我。' },
          { t: 'I will bring my dog to help us clean.', tr: '我会带我的狗来帮忙打扫。' }
        ] },
        { npc: 'No training is needed. Just wear comfortable shoes and bring a water bottle.', tr: '不需要培训。穿双舒服的鞋，带瓶水就行。' },
        { say: 'Got it. Could I bring my roommate along this Sunday? She has been looking for a chance like this.', tr: '明白了。这周日我能带室友一起来吗？她一直在找这样的机会。', hint: '问能否带室友一起来，并说她一直在找这样的机会' },
        { npc: 'Of course, the more the better. Just add her name to this form, and we will see you both on Sunday.', tr: '当然可以，人越多越好。把她的名字填到这张表上，周日见。' }
      ]
    },
    {
      id: 'en-d24', level: 'C1', title: '研讨课评论同学论文', scene: '大学研讨室',
      setup: '你正在研究生研讨课上，教授点名请你对一位同学刚做的论文报告发表看法。',
      lines: [
        { npc: 'Could you walk us through your criticism of the methodology she outlined in section three?', tr: '你能给我们讲一下你对她在第三节里阐述的研究方法有什么批评吗？' },
        { ask: '你不会直接否定，而是先加个保留，说这项研究还是初步的。', me: [
          { t: 'I would qualify my criticism by noting that the study is still preliminary and lacks a control group.', tr: '我想先给我的批评加上保留，说这项研究还是初步的，而且没有对照组。', best: true },
          { t: 'The methodology she used is completely wrong and should be thrown out.', tr: '她用的方法论完全错了，应该直接扔掉。' },
          { t: 'I do not like this study and I think she should try again.', tr: '我不喜欢这项研究，我觉得她应该重新做。' }
        ] },
        { npc: 'That is a fair point. The absence of a control group does weaken her causal claims.', tr: '这是个合理的观点。没有对照组确实削弱了她的因果性论断。' },
        { say: 'Absolutely. Nevertheless, I want to emphasize that her exploratory findings are still valuable for generating new hypotheses.', tr: '确实。不过我要强调的是，她的探索性发现对于提出新假设来说仍然是有价值的。', hint: '认同上面的评论，然后用 nevertheless 转折，说她的发现还是有价值的' },
        { npc: 'Interesting. So you would frame this more as a promising starting point than a definitive conclusion.', tr: '有意思。所以你会把它定位成一个很有潜力的起点，而不是一个定论。' },
        { ask: '准确地解释一下你的立场，说需要更多后续研究才能确认。', me: [
          { t: 'Precisely. It is a useful pilot study, but any definitive claim about the treatment effect would be premature without follow-up research.', tr: '正是。这是一项有用的试点研究，但没有后续研究的话，任何关于治疗效果的定论都为时过早。', best: true },
          { t: 'Yes. I want her to start over from scratch.', tr: '对。我想让她从零开始重新做。' },
          { t: 'The study is good enough as it is. I have nothing more to say.', tr: '这项研究本身已经够好了。我没什么好说的。' }
        ] },
        { npc: 'Well stated. Let us move on to discuss her theoretical framework in more depth.', tr: '说得好。我们继续更深入地讨论她的理论框架吧。' }
      ]
    },
    {
      id: 'en-d25', level: 'B2', title: '商务电话处理客户投诉', scene: '公司客户服务部',
      setup: '你是客户服务经理，一位重要客户打来电话，说上周订购的一批产品有一半是损坏的。',
      lines: [
        { npc: 'This is unacceptable. I placed a twenty-thousand-dollar order and half of the units arrived broken.', tr: '这太不像话了。我下了两万美元的订单，一半货物收到时是坏的。' },
        { ask: '先诚恳道歉，然后表达你会跟进调查，并立即给出初步方案。', me: [
          { t: 'I sincerely apologize for this, and I want to assure you that we take your complaint extremely seriously. I will personally investigate the cause and get back to you within two hours with a solution.', tr: '我对此深表歉意，我想向您保证我们非常重视您的投诉。我会亲自调查原因，两个小时内给您一个解决方案。', best: true },
          { t: 'Maybe it was the shipping company. It is not entirely our fault.', tr: '可能是运输公司的问题，不全是我们的错。' },
          { t: 'You probably broke the units yourself, so we cannot help you.', tr: '这些货物多半是您自己弄坏的，所以我们帮不了您。' }
        ] },
        { npc: 'I hope you understand that this is costing me time and money. My own clients are waiting for these products.', tr: '希望你理解这正在让我损失时间和钱。我自己的客户还在等这些产品。' },
        { say: 'I completely understand the urgency. To minimize your inconvenience, we can ship a replacement batch by express delivery tomorrow morning at our expense.', tr: '我完全理解这件事的紧迫性。为了尽量减少您的不便，我们可以明天上午用快递补发一批替换货，费用由我们承担。', hint: '表示理解对方的紧迫性，然后提议明天用快递补发，费用我方承担' },
        { npc: 'That sounds reasonable. And what about the broken units? Do you want me to ship them back?', tr: '听起来合理。那损坏的货物怎么办？需要我寄回吗？' },
        { ask: '简单处理，让对方销毁即可，然后请对方把损坏数量列出来以便我们做内部调查。', me: [
          { t: 'Please dispose of the broken units locally and send me a brief list of exactly how many were damaged. That will help our quality team identify the problem.', tr: '损坏的货物您直接销毁即可，然后给我发一份简短的清单说明有多少件损坏了。这会帮我们的质量团队找出问题。', best: true },
          { t: 'Yes, please send them back. We need every single piece.', tr: '是的，请全部寄回。每一件我们都要。' },
          { t: 'Do not worry about it, just throw everything away and forget the whole thing.', tr: '别担心了，都扔了吧，这事就这么过去了。' }
        ] },
        { npc: 'I appreciate you handling this promptly. I will email you the list right away.', tr: '感谢你这么迅速地处理这个问题。我马上给你发清单。' }
      ]
    },
    {
      id: 'en-d26', level: 'A1', title: '邮局寄明信片', scene: '邮局柜台',
      setup: '你在美国旅游，想给国内的家人寄几张明信片，来到邮局柜台。',
      lines: [
        { npc: 'Hi! What can I help you with today?', tr: '你好！今天有什么可以帮你的吗？' },
        { ask: '说你想寄几张明信片到中国。', me: [
          { t: 'I want to send these postcards to China. How much is it?', tr: '我想把这些明信片寄到中国。要多少钱？', best: true },
          { t: 'Postcards. China. Price.', tr: '明信片。中国。价格。' },
          { t: 'Send me these postcards quickly.', tr: '快点把这些明信片寄出去。' }
        ] },
        { npc: 'Each international postcard is one dollar and twenty cents. How many do you have?', tr: '每张国际明信片一美元二十美分。你有几张？' },
        { say: 'I have four postcards. Here is the money, thank you.', tr: '我有四张。给你钱，谢谢。', hint: '说清楚有四张，然后付钱' },
        { npc: 'Sure thing. Do you need airmail or surface mail?', tr: '好的。你要航空邮件还是水陆路邮件？' },
        { ask: '选航空邮件，并问需要多长时间。', me: [
          { t: 'Airmail, please. How long does it take?', tr: '航空邮件。要多长时间？', best: true },
          { t: 'Fastest one.', tr: '最快的那个。' },
          { t: 'Surface mail is cheaper, right?', tr: '水陆路邮件更便宜，对吧？' }
        ] },
        { npc: 'About seven to ten days by air. Here are your stamps. Just stick them on and drop them in the mailbox outside.', tr: '航空邮件大概七到十天。这是你的邮票，贴上后扔到外面的邮筒就行。' }
      ]
    },
    {
      id: 'en-d27', level: 'A2', title: '带猫去宠物医院', scene: '宠物医院诊室',
      setup: '你的猫最近不吃东西，你带它去宠物医院，兽医正在问诊。',
      lines: [
        { npc: 'Good afternoon. What brings you and your cat in today?', tr: '下午好。你和你的猫今天过来是怎么回事？' },
        { ask: '说猫从两天前开始不吃东西，偶尔呕吐。', me: [
          { t: 'She has not eaten anything for two days, and she vomited a couple of times this morning.', tr: '她从两天前开始什么都不吃，今天早上吐了好几次。', best: true },
          { t: 'My cat is sick. Help.', tr: '我的猫生病了。救救。' },
          { t: 'I think my cat is dying. Do something now.', tr: '我觉得我的猫快要死了。快做点什么。' }
        ] },
        { npc: 'I see. Let me take a quick look. Has anything changed in her diet or environment recently?', tr: '明白了。让我快速看一下。她最近的饮食或环境有什么变化吗？' },
        { say: 'We switched her food brand about a week ago, and we also moved to a new apartment.', tr: '我们大概一周前给她换了猫粮品牌，而且我们刚搬了新家。', hint: '说清楚换了猫粮品牌和搬家这两个变化' },
        { npc: 'Both of those could be stress-related. Let me run a blood test to rule out anything more serious.', tr: '这两个变化都可能跟压力有关。我给她验个血，排除一下更严重的问题。' },
        { ask: '问验血要多久、大概多少钱。', me: [
          { t: 'How long will the test take and how much do you think it will cost?', tr: '验血要多久？大概要多少钱？', best: true },
          { t: 'Test. Money. Fast.', tr: '检查。钱。快点。' },
          { t: 'Just fix her, I do not care about the price.', tr: '治好她就行，我不在乎钱。' }
        ] },
        { npc: 'Results will be ready in about thirty minutes. The blood test itself is about eighty dollars. I will come and get you as soon as I know something.', tr: '结果大概三十分钟出来。验血本身大概八十美元。一有结果我就来找你。' }
      ]
    },
    {
      id: 'en-d28', level: 'C2', title: '听懂婉拒与反讽', scene: '朋友兼同事的临时换班请求',
      setup: '你和朋友兼同事关系很熟，常用冷面幽默互相打趣。对方临时请你替班，但你今晚已经有安排。',
      lines: [
        { npc: 'You could not cover my shift tonight, could you? I know it is really short notice.', tr: '你今晚没法替我上班，对吧？我知道这通知得很临时。' },
        { ask: '礼貌地说明自己已有安排，不能替班。', me: [
          { t: 'I wish I could, but I have already made plans for tonight.', tr: '我要是能帮就好了，但我今晚已经有安排了。', best: true },
          { t: 'Cover it with what? A blanket?', tr: '用什么盖住它？毯子吗？' },
          { t: 'No. Your bad planning is not my problem.', tr: '不行。你计划得糟，跟我没关系。' }
        ] },
        { npc: 'No worries. I thought I would ask anyway. I will see if Maya can help.', tr: '没关系。我只是想着问一问。我看看玛雅能不能帮忙。' },
        { say: 'Thanks for understanding. I hope she can help you out.', tr: '谢谢你的理解。希望她能帮你解围。', hint: '感谢对方理解，并表达支持，但不替玛雅作保证' },
        { npc: 'She said she would think about it, which probably means no. So that is my evening sorted, then.', tr: '她说她会考虑一下，这大概就是拒绝了。那我今晚的事可就“安排妥了”。' },
        { ask: '接住朋友的反讽，并提出实际可行的下一步。', me: [
          { t: 'Yeah, beautifully sorted—apart from the tiny detail that nobody is covering it. Shall we try Tom?', tr: '是啊，安排得真妥——除了还没人替班这个小细节。我们要不要问问汤姆？', best: true },
          { t: 'Great. If it is sorted, there is nothing more we need to do.', tr: '太好了。既然安排妥了，我们就没什么可做的了。' },
          { t: 'This is a disaster, and it is entirely your fault.', tr: '这真是场灾难，而且全是你的错。' }
        ] },
        { npc: 'Fair enough. Not my finest hour, is it?', tr: '说得也是。我这回可真不怎么样，是吧？' },
        { ask: '用含蓄幽默缓和气氛，并表示愿意一起想办法。', me: [
          { t: 'Perhaps not, but we have survived worse. I will message Tom with you.', tr: '也许算不上，但更难的局面我们也熬过来了。我跟你一起给汤姆发消息。', best: true },
          { t: 'It is only six o\'clock, so it has not been an hour yet.', tr: '现在才六点，所以还没到一小时呢。' },
          { t: 'Yes, this is definitely your worst performance ever.', tr: '对，这绝对是你有史以来最差劲的表现。' }
        ] },
        { npc: 'Thanks. Next time I will ask before I tell everyone the evening is sorted.', tr: '谢谢。下次我会先问人，再跟大家说今晚的事已经安排妥了。' }
      ]
    },
    {
      id: 'en-d29', level: 'C1', title: '报修暖气并谈减租', scene: '租房客服电话',
      setup: '你租的公寓暖气从周五起就不工作，屋里很冷。你打电话给物业客服，希望尽快安排维修。',
      lines: [
        { npc: 'Good morning, Valley Property. How can I help?', tr: '早上好，山谷物业。有什么可以帮您？' },
        { ask: '说明暖气坏了，并讲清具体状况。', me: [
          { t: 'Hi, I am calling about the heating in Flat 4. It has not worked since Friday.', tr: '你好，我打电话是说四号公寓的暖气。从周五起就不工作了。', best: true },
          { t: 'Heating. Broken. Fix it.', tr: '暖气。坏了。修。' },
          { t: 'I would like to discuss the philosophy of warmth.', tr: '我想讨论一下温暖的哲学。' }
        ] },
        { npc: 'I am sorry to hear that. Has anyone looked at it yet?', tr: '很抱歉听到这个。有人来看过了吗？' },
        { say: 'No, nobody has been round. I have been using two blankets all weekend.', tr: '没有，没人来过。我整个周末都盖着两条毯子。', hint: '说明没人来过，并讲出你的实际处境' },
        { npc: 'I will send an engineer tomorrow between nine and twelve. Would that work?', tr: '我明天九点到十二点之间派一位工程师过去。可以吗？' },
        { ask: '同意时间，并请工程师上门前先打电话。', me: [
          { t: 'Tomorrow morning works. Could the engineer call before he arrives?', tr: '明天上午可以。工程师到之前能先打个电话吗？', best: true },
          { t: 'Nine to twelve is a whole morning; I will cancel my life.', tr: '九点到十二点是一整个上午；我得把生活全取消。' },
          { t: 'Maybe. I do not know. Whatever.', tr: '也许吧。我不知道。随便。' }
        ] },
        { npc: 'Of course. I will add that to the job sheet. Is the boiler making any noise?', tr: '当然。我会加在工单上。锅炉有发出什么声音吗？' },
        { ask: '描述症状，并询问维修期间能否临时减租。', me: [
          { t: 'It clicks a few times, then goes silent. While it is broken, can we discuss a small rent reduction?', tr: '它会咔哒响几声，然后就没声了。既然它坏了，我们能谈谈少量减租吗？', best: true },
          { t: 'It is a boiler, so it boils.', tr: '它是锅炉，所以当然会“锅炉”。' },
          { t: 'I want three months free rent and a new flat.', tr: '我要三个月免租，还要一套新公寓。' }
        ] },
        { npc: 'I cannot promise anything today, but I will pass it to the manager and come back to you by Thursday.', tr: '我今天不能承诺什么，但会转给经理，周四前回复您。' },
        { say: 'Thank you. I will keep the phone close tomorrow morning.', tr: '谢谢。明天上午我会把手机放在身边。', hint: '礼貌收尾，确认你会等电话' }
      ]
    },
    {
      id: 'en-d30', level: 'C1', title: '向教授申请延期', scene: '办公室答疑时间',
      setup: '论文周五截止，但你因为家里突发状况耽误了几天。你来到教授的答疑时间，希望争取一个短期延期。',
      lines: [
        { npc: 'You wanted to see me about the essay?', tr: '你想跟我谈论文的事？' },
        { ask: '说明来意，并给出明确请求。', me: [
          { t: 'Yes, I am worried I cannot finish by Friday. Could I have a short extension?', tr: '是的，我担心周五前完不成。能给我一个短期延期吗？', best: true },
          { t: 'I have not started. Can I hand it in next month?', tr: '我还没开始。能下个月交吗？' },
          { t: 'Your deadline is unreasonable.', tr: '你的截止日期不合理。' }
        ] },
        { npc: 'That depends. What has happened, and what have you done so far?', tr: '那要看情况。发生了什么，你目前做到哪一步了？' },
        { say: 'I have written about half. My sister was in hospital last week, and I lost three days travelling to see her.', tr: '我写了大概一半。我姐姐上周住院，我花了三天时间往返去看她。', hint: '说明进度与具体原因，不夸大也不含糊' },
        { npc: 'I see. I can give you until Tuesday, but there will be a late penalty unless you submit a medical note.', tr: '我明白了。我可以给你到周二，但除非提交医疗证明，否则会有迟交扣分。' },
        { ask: '接受条件，并确认需要提交什么。', me: [
          { t: 'Tuesday is a great help. Could you confirm what the note needs to say?', tr: '周二已经是很大的帮助了。您能确认一下证明需要写什么吗？', best: true },
          { t: 'I do not need a note; trust me.', tr: '我不需要证明；相信我。' },
          { t: 'So there is no penalty at all, right?', tr: '所以完全没有扣分，对吧？' }
        ] },
        { npc: 'A short letter from the hospital with the dates will be enough. Email it to me when you have it.', tr: '医院开一张写明日期的简短证明就够了。拿到后邮件发我。' },
        { say: 'Thank you. I will send it tonight and have the essay in by Tuesday.', tr: '谢谢。我今晚就发证明，周二前交论文。', hint: '明确承诺两步行动' },
        { npc: 'Good. And do let me know earlier next time; it is much easier to help before the deadline.', tr: '好。下次早点告诉我；截止日期前帮忙会容易得多。' }
      ]
    },
    {
      id: 'en-d31', level: 'C2', title: '绩效面谈里的明褒实贬', scene: '季度一对一',
      setup: '经理说话一向含蓄。这次面谈里，他用了几个听起来不错、实际保留很重的词。你需要听懂并争取具体反馈。',
      lines: [
        { npc: 'Thanks for coming in. Overall, your work this quarter has been... interesting.', tr: '谢谢你过来。总的来说，你这季度的工作……挺“有意思”的。' },
        { ask: '听出评价含糊，礼貌请求具体反馈。', me: [
          { t: 'I am glad to hear it, though "interesting" could mean a few things. Could you tell me what worked and what did not?', tr: '很高兴听您这么说，不过“有意思”可能有几种意思。您能说说哪些做得好、哪些不好吗？', best: true },
          { t: 'Interesting is good, right? So we are done?', tr: '“有意思”是好事，对吧？那我们谈完了？' },
          { t: 'You clearly dislike me. Just say it.', tr: '你显然不喜欢我。直说吧。' }
        ] },
        { npc: 'Well, the client loved your first presentation. The second one, from what I heard, was ambitious.', tr: '嗯，客户很喜欢你的第一次汇报。第二次，据我所知，很有“雄心”。' },
        { ask: '识别“ambitious”的保留意味，追问具体问题。', me: [
          { t: 'I would rather hear the hard part. Did the second one miss the client\'s priorities?', tr: '我更想听难听的部分。第二次是不是没抓住客户的重点？', best: true },
          { t: 'Ambitious is a compliment, so I will do more of the same.', tr: '“有雄心”是夸奖，那我会继续这么做。' },
          { t: 'If the client hated it, that is their problem.', tr: '如果客户不喜欢，那是他们的问题。' }
        ] },
        { npc: 'Not exactly. It was thorough, but it answered a question they had not asked. They wanted costs, and you gave them vision.', tr: '不完全是。它很周全，但回答的是他们没问的问题。他们想要成本，你给的是愿景。' },
        { say: 'That is useful. So the fix is to lead with the numbers and keep the vision to one slide.', tr: '这很有用。所以改进办法是先讲数字，把愿景压缩到一页。', hint: '复述你听到的改进点，确认理解' },
        { npc: 'Precisely. I should have said that more clearly at the time.', tr: '正是。我当时就该说得更清楚。' },
        { ask: '回应对方的自我修正，并把反馈落成下一步。', me: [
          { t: 'I appreciate you saying that. Can we agree on one metric for next quarter so I know I am on track?', tr: '谢谢您这么说。我们能不能为下季度定一个指标，让我知道自己在正轨上？', best: true },
          { t: 'So the problem was your communication, not mine.', tr: '所以问题在于你的沟通，而不在我。' },
          { t: 'I will simply avoid the client from now on.', tr: '我以后干脆避开这个客户。' }
        ] },
        { npc: 'Let us use proposal-to-decision time. If we can cut it by a week, that is a clear win.', tr: '我们就用“从提案到决定的时间”。如果能缩短一周，就是明确的成果。' }
      ]
    },
    {
      id: 'en-d32', level: 'C2', title: '朋友开口借钱', scene: '咖啡馆里的尴尬请求',
      setup: '朋友突然说这个月房租周转不开。你想帮忙，但也不想让金钱把关系弄僵。',
      lines: [
        { npc: 'Hey, can I ask you something? It is a bit awkward. I am short on rent this month.', tr: '嘿，能问你件事吗？有点尴尬。我这个月房租差点钱。' },
        { ask: '先表示关心，但不在信息不足时承诺。', me: [
          { t: 'I am sorry you are in that position. How much are we talking about, and what happened?', tr: '很抱歉你遇到这种情况。大概差多少，发生什么了？', best: true },
          { t: 'How much do you need? I will send it now.', tr: '你要多少？我现在就转。' },
          { t: 'Rent? Just do not pay it.', tr: '房租？不交不就完了。' }
        ] },
        { npc: 'About eight hundred. My contract ended earlier than I expected, and the new one starts in three weeks.', tr: '大概八百。我的合同比预期早结束，新合同三周后才开始。' },
        { ask: '说明自己的实际能力，给出有边界的帮助。', me: [
          { t: 'I can lend you three hundred, and I can wait until you are paid. Would that take the pressure off?', tr: '我可以借你三百，也可以等你发工资再还。这样能减轻压力吗？', best: true },
          { t: 'I can lend you eight hundred, no questions, no date.', tr: '我可以借你八百，不问原因，也不定还期。' },
          { t: 'Money and friendship do not mix. Ask the bank.', tr: '金钱和友谊不能混。去找银行吧。' }
        ] },
        { npc: 'That would help a lot, honestly. Are you sure? I do not want this to make things weird.', tr: '说实话，那会帮大忙。你确定吗？我不想因为这事让关系变怪。' },
        { say: 'I am sure. Let us write down the amount and a date, so neither of us has to remember it awkwardly.', tr: '我确定。我们把金额和日期写下来，这样谁都不用尴尬地记着。', hint: '用写清金额与日期的方式保护友谊' },
        { npc: 'That is fair. I will pay you back on the fifteenth, when the first pay cheque comes in.', tr: '这样公平。我十五号还你，那天第一笔工资到账。' },
        { ask: '接受还款安排，并留出缓冲。', me: [
          { t: 'The fifteenth works. If it slips, just tell me before the date rather than after.', tr: '十五号可以。如果真赶不上，就在到期前告诉我，别拖到之后。', best: true },
          { t: 'Fine, but if you are late, we are no longer friends.', tr: '行，但你要是晚一天，我们就不是朋友了。' },
          { t: 'Do not worry about paying me back at all.', tr: '完全不用还。' }
        ] },
        { npc: 'Understood. And thank you for not making me explain it three times.', tr: '明白。也谢谢你没让我把这事解释三遍。' }
      ]
    },
    {
      id: 'en-d33', level: 'C2', title: '论文答辩的追问', scene: '论文答辩现场',
      setup: '你的论文基于三十二名学生的实验数据。评审认为样本太小、方法可疑，你要在承认局限的同时守住方法的合理性，并说明下一步如何验证。',
      lines: [
        { npc: 'Your sample is thirty-two students. Why should anyone trust a conclusion drawn from so few?', tr: '你的样本只有三十二名学生。别人凭什么相信从这么少的人里得出的结论？' },
        { ask: '承认样本规模的局限，但说明设计上的补偿。', me: [
          { t: 'Thirty-two is small, and I will not pretend otherwise. But the design is within-subjects, so each participant acts as their own control, which removes some of the noise a between-group design would add.', tr: '三十二确实小，我不会假装不是。但这是被试内设计，每位参与者都是自己的对照，这去掉了一部分组间设计会带来的噪声。', best: true },
          { t: 'Thirty-two is actually a large class in my department; most have fewer students.', tr: '在我们系，三十二人的班其实算大的；大多数班人更少。' },
          { t: 'Sample size is a formality. Anyone who has taught can see the effect immediately.', tr: '样本量只是形式。任何教过书的人都能立刻看出这个效应。' }
        ] },
        { say: 'What I can defend is the direction of the effect, not its precise size. The confidence intervals are wide, and the limitations section says so.', tr: '我能守住的是效应的方向，不是它的精确大小。置信区间很宽，局限性一节也写明了这一点。', hint: '把可辩护的范围说清楚，不夸大结论' },
        { npc: 'Wide intervals are precisely my worry. If the effect could be near zero, what remains of your claim?', tr: '宽区间正是我担心的。如果效应可能接近零，你的主张还剩下什么？' },
        { ask: '收缩主张的适用范围，同时说明方法本身仍然合理。', me: [
          { t: 'Then I should narrow the claim: for this group, on this task, the effect was consistent. What the data cannot support is generalising to all learners.', tr: '那我应该缩小主张：对这一组人、这个任务，效应是一致的。数据无法支撑的，是推广到所有学习者。', best: true },
          { t: 'Near zero is still not zero, so the original claim still stands.', tr: '接近零毕竟不是零，所以原来的主张仍然成立。' },
          { t: 'With respect, that is a statistics objection rather than a research objection; I would rather discuss teaching implications.', tr: '恕我直言，这是统计学上的反对，而不是研究本身的反对；我更想谈教学启示。' }
        ] },
        { npc: 'That is more careful. But why not simply run a larger study before publishing at all?', tr: '这样说谨慎多了。但为什么不干脆先做一个更大的研究再发表？' },
        { ask: '给出具体的下一步验证方案，并说明这篇论文的定位。', me: [
          { t: 'That is exactly the next step: a pre-registered replication with two hundred participants across three sites, using the same task. I would rather publish this as a pilot and let the replication decide.', tr: '这正是下一步：在三个地点、两百名参与者中做一次预注册的重复研究，使用同一任务。我更愿意把这篇作为先导研究发表，让重复研究来裁决。', best: true },
          { t: 'A larger study would take another two years, so publishing now is simply more efficient.', tr: '更大的研究还要两年，所以现在发表只是更有效率。' },
          { t: 'I can guarantee the replication will confirm the effect within a year.', tr: '我可以保证一年内的重复研究能确认这个效应。' }
        ] },
        { say: 'If the replication comes back weaker, I will report that too. The point is to find out, not to be right.', tr: '如果重复研究的结果更弱，我也会如实报告。重点是弄清楚，而不是证明我对。', hint: '表明对验证结果持开放态度' },
        { npc: 'Good. Send me the pre-registration when it is ready.', tr: '好。预注册文件准备好后发我。' }
      ],
      keys: [
        { w: 'I will not pretend otherwise', t: '我不会假装不是这样（承认事实、不辩解的姿态）', e: 'Thirty-two is small, and I will not pretend otherwise.', et: '三十二确实小，我不会假装不是。' },
        { w: 'narrow the claim', t: '收缩主张、把结论的适用范围改小（答辩与写作中的关键动作）', e: 'Then I should narrow the claim: for this group, on this task, the effect was consistent.', et: '那我应该缩小主张：对这一组人、这个任务，效应是一致的。' },
        { w: 'let the replication decide', t: '让重复研究来裁决（把判断交给后续证据，而不是交给立场）', e: 'I would rather publish this as a pilot and let the replication decide.', et: '我更愿意把这篇作为先导研究发表，让重复研究来裁决。' },
        { w: 'The point is to find out, not to be right', t: '重点是弄清楚，而不是证明自己对（研究者的开放姿态）', e: 'The point is to find out, not to be right.', et: '重点是弄清楚，而不是证明我对。' }
      ]
    },
    {
      id: 'en-d34', level: 'C2', title: '合伙人冲突调解', scene: '会议室里的三方谈话',
      setup: '两位合伙人因为分工与功劳分配起了冲突。你作为第三方，需要先降温，再让双方只讲具体事实，最后把争执落成可执行的规则。',
      lines: [
        { npc: 'I built the client list over eight months. Now I hear my strategy described as "our shared vision". I want that corrected today.', tr: '我花了八个月建立客户名单。现在我的策略被说成“我们共同的愿景”。我要今天就把这件事纠正过来。' },
        { ask: '先接住情绪、不站队，把话题拉回具体事实。', me: [
          { t: 'I believe you, and I am not asking you to pretend otherwise. Before we correct anything, I want to hear what each of you actually did, in specific terms, so we are arguing about facts rather than motives.', tr: '我相信你，也不是要你假装没事。但在纠正任何事之前，我想听你们各自具体做了什么，这样我们争的是事实，而不是动机。', best: true },
          { t: 'So you want me to tell him to stop taking credit for your work?', tr: '所以你是要我去告诉他，别再抢你的功劳？' },
          { t: 'He is clearly in the wrong. I will make him apologise to the whole team.', tr: '他显然错了。我会让他向整个团队道歉。' }
        ] },
        { say: 'Let us keep this to what happened, not what it says about either of you. Names, dates, decisions.', tr: '我们把范围限定在发生了什么，而不是这说明你们各自是什么人。人名、日期、决定。', hint: '设定规则：只谈事实，不评人品' },
        { npc: 'Fine. I introduced the pricing model in March and ran the two biggest pitches. I never claimed the client list was mine.', tr: '行。我三月引入了定价模型，也负责了两场最大的提案。我从没说过客户名单是我的。' },
        { ask: '让双方把贡献拆成具体事实，找出分歧真正开始的位置。', me: [
          { t: 'Thank you. So we have two different contributions: the client relationships and the pricing model. Which decisions were made jointly, and who was in the room when each was presented?', tr: '谢谢。那么我们有两种不同的贡献：客户关系和定价模型。哪些决定是共同做的？每项成果展示时，谁在场？', best: true },
          { t: 'So you admit the client list belongs to him?', tr: '所以你承认客户名单是他的了？' },
          { t: 'I will decide who contributed more, and both of you will accept it.', tr: '我会判定谁贡献更多，你们两人都得接受。' }
        ] },
        { npc: 'The pricing model was presented together, but the deck did not say who wrote it. That is where it started.', tr: '定价模型是一起展示的，但幻灯片没写是谁做的。事情就是从那里开始的。' },
        { ask: '把争执落成双方都适用的可执行规则。', me: [
          { t: 'Then let us write a rule: every deck names its author and contributors, and client ownership is recorded in the CRM rather than remembered. If we agree today, it applies to both of you, including past work.', tr: '那我们定一条规则：每份幻灯片都写明作者和贡献者，客户归属记进 CRM，而不是靠记忆。如果今天达成一致，它对你们两人都适用，包括以往的工作。', best: true },
          { t: 'So the whole problem is one missing slide.', tr: '所以整个问题就是少写了一页幻灯片。' },
          { t: 'I will personally review every deck from now on, for as long as the firm exists.', tr: '从今以后，只要公司还在，每一份幻灯片都由我亲自审。' }
        ] },
        { npc: 'That rule would have prevented this. I can live with it if it is written down.', tr: '这条规则本可以避免这件事。如果写下来，我可以接受。' },
        { say: 'Then we draft it now, and both of you sign the same page. The rule protects the next argument, not just this one.', tr: '那我们现在就起草，你们两人在同一页上签字。这条规则保护的是下一次争执，不只是这一次。', hint: '把共识转成书面、双方同受约束的规则' }
      ],
      keys: [
        { w: 'I am not asking you to pretend otherwise', t: '我不是要你假装没事（先接住情绪，不要求对方压抑）', e: 'I believe you, and I am not asking you to pretend otherwise.', et: '我相信你，也不是要你假装没事。' },
        { w: 'argue about facts rather than motives', t: '争的是事实，而不是猜动机（把冲突拉回可核对的层面）', e: 'Before we correct anything, I want to hear what each of you actually did, in specific terms, so we are arguing about facts rather than motives.', et: '但在纠正任何事之前，我想听你们各自具体做了什么，这样我们争的是事实，而不是动机。' },
        { w: 'I can live with it', t: '我可以接受、能忍（有条件地让步，不等于满意）', e: 'That rule would have prevented this. I can live with it if it is written down.', et: '这条规则本可以避免这件事。如果写下来，我可以接受。' },
        { w: 'The rule protects the next argument, not just this one', t: '规则保护的是下一次争执，不只是这一次（把共识制度化）', e: 'The rule protects the next argument, not just this one.', et: '这条规则保护的是下一次争执，不只是这一次。' }
      ]
    }
  ],
  readings: [
    {
      id: 'en-r1', level: 'C1', title: 'The Quiet Cost of Convenience', src: '专栏评论 · 约 210 词',
      text: 'Every few months, a new app promises to remove another small effort from my day. Groceries arrive at the door. Meetings schedule themselves. Even the gym can now remind me to stand up. None of these services is a problem on its own. Together, though, they raise a question I keep postponing: what am I actually doing with the time I save?\n\nLast week I decided to find out. I deleted two delivery apps and wrote down what I did instead. The result was not impressive. I did not read more books or call my parents. I watched videos about people cooking meals I could have cooked myself. The convenience had not created time; it had created a habit of looking for the next convenient thing.\n\nThere is a practical side to this, of course. For a parent working two jobs, a grocery delivery is not laziness; it is the difference between a hot dinner and no dinner. The problem begins when convenience stops being a tool and becomes a default. We stop asking whether we want the shortcut because the shortcut is already waiting.\n\nI am not suggesting we all become monks. I still order groceries, and I still let the calendar do its quiet work. But I now ask one question before I press the button: is this saving time for something, or just saving me from deciding?',
      tr: '每隔几个月，就会有一个新应用承诺替我省掉一天中的又一件小事。杂货送到门口，会议自己排好时间，连健身房都能提醒我站起来。这些服务单独看都不是问题。可合在一起，它们提出了一个我一直往后拖的问题：我省下来的时间，到底拿去做什么了？\n\n上周我决定弄清楚。我删掉了两个外卖应用，记下自己改做了什么。结果并不怎么样。我没有多读书，也没有给父母打电话。我看了一些视频，内容是别人做我本来也能做的饭。便利并没有创造时间；它创造的是寻找下一个便利的习惯。\n\n当然，这事也有实际的一面。对一个打两份工的家长来说，杂货配送不是懒惰，而是热饭和没饭之间的差别。问题始于便利不再是工具，而成了默认选项。我们不再问自己想不想要这条捷径，因为捷径已经在那儿等着了。\n\n我不是建议大家都去当苦行僧。我仍然订杂货，也仍然让日历安静地替我安排。但现在按下按钮之前，我会先问一句：这是在为某件事省时间，还是只是替我免去决定？',
      qs: [
        { q: 'What is the writer\'s main point?', opts: [
          { t: 'Delivery apps should be banned because they waste time.' },
          { t: 'Convenience is useful, but it becomes a problem when it replaces intention.', best: true },
          { t: 'People should cook more meals at home instead of ordering groceries.' }
        ] },
        { q: 'What did the writer actually do after deleting the apps?', opts: [
          { t: 'Read more books and called family more often.' },
          { t: 'Watched videos instead of doing something he had chosen.', best: true },
          { t: 'Saved money and cancelled his gym membership.' }
        ] },
        { q: 'The tone of the piece is best described as…', opts: [
          { t: 'mocking and aggressive.' },
          { t: 'reflective and self-critical.', best: true },
          { t: 'technical and completely neutral.' }
        ] }
      ],
      keys: [
        { w: 'on its own', t: '单独来看、本身（常与否定连用，强调合起来才成问题）', e: 'None of these services is a problem on its own.', et: '这些服务单独看都不是问题。' },
        { w: 'postponing', t: '一再推迟、往后拖（把问题留给自己不去面对）', e: 'Together, though, they raise a question I keep postponing: what am I actually doing with the time I save?', et: '可合在一起，它们提出了一个我一直往后拖的问题：我省下来的时间，到底拿去做什么了？' },
        { w: 'default', t: '默认选项（不经思考就自动采用的路径）', e: 'The problem begins when convenience stops being a tool and becomes a default.', et: '问题始于便利不再是工具，而成了默认选项。' },
        { w: 'shortcut', t: '捷径（省去过程的替代做法）', e: 'We stop asking whether we want the shortcut because the shortcut is already waiting.', et: '我们不再问自己想不想要这条捷径，因为捷径已经在那儿等着了。' }
      ]
    },
    {
      id: 'en-r2', level: 'C2', title: 'The Lost Art of Disagreement', src: '随笔 · 约 260 词',
      text: 'A friend once told me that she had stopped arguing online because it never changed anyone\'s mind. I understood the feeling, but I thought she had drawn the wrong conclusion. The problem is not that disagreement is useless. It is that we have forgotten how to do it without turning every difference into a verdict on the other person\'s character.\n\nReal disagreement is a form of attention. To disagree well, you have to understand what someone means before you explain why you think it is wrong. That takes patience, and it also takes a certain humility: the willingness to let another person\'s view become more complicated than the version you first disliked.\n\nWhat we often practise instead is something closer to performance. We choose the weakest version of the opposing argument, defeat it neatly, and collect the approval of people who already agree. It feels like thinking, but it is closer to rehearsal. The other side does the same, and both sides leave with the same opinions and a little more contempt.\n\nI am not arguing that every view deserves equal time. Some claims are false, and some are harmful. But even then, the way we reject them matters. A society that cannot disagree without accusing is not a society that has won the argument; it is one that has given up on persuasion.\n\nThe alternative is unglamorous. Ask one more question. Separate the claim from the person. Admit the part that is right before explaining the part that is wrong. None of this guarantees agreement, but it keeps the door open, and that is not nothing.',
      tr: '一位朋友曾告诉我，她不再在网上争论了，因为争论从来改变不了任何人的想法。我理解这种感受，但我认为她得出了错误的结论。问题不在于分歧没有用，而在于我们忘了如何在不把每一次差异都变成对他人品格判决的情况下表达分歧。\n\n真正的分歧是一种关注。要好好表达分歧，你得先理解对方的意思，再解释你为什么认为它错了。这需要耐心，也需要某种谦逊：愿意让对方的观点变得比你最初讨厌的那个版本更复杂。\n\n而我们经常练习的，其实更接近表演。我们挑出对方论证里最弱的版本，干净利落地击败它，然后收获本就同意我们的人的赞许。这感觉像是在思考，其实更接近排练。另一边也这么做，双方带着同样的观点离开，只多了一点轻蔑。\n\n我不是说所有观点都值得同等时间。有些主张是假的，有些是有害的。但即便如此，我们拒绝它们的方式仍然重要。一个不能在不指责的情况下表达分歧的社会，并不是赢得了争论的社会；它是放弃了说服的社会。\n\n另一种做法并不光鲜。多问一个问题。把主张和人分开。先承认对的部分，再解释错的部分。这些都不能保证达成一致，但它让门保持敞开，而这不是小事。',
      qs: [
        { q: 'Which sentence best states the writer\'s central argument?', opts: [
          { t: 'Online argument is pointless because nobody ever changes their mind.' },
          { t: 'Disagreeing well requires understanding and humility rather than performance.', best: true },
          { t: 'Every opinion deserves the same amount of time and respect.' }
        ] },
        { q: 'What does the writer mean by saying that our habit is "closer to rehearsal"?', opts: [
          { t: 'We repeat comfortable arguments to an audience that already agrees.', best: true },
          { t: 'We practise our arguments before speaking to opponents in public.' },
          { t: 'We treat disagreement as a performance that can be scored like a play.' }
        ] },
        { q: 'The writer\'s attitude toward better disagreement can best be described as…', opts: [
          { t: 'dismissive: the problem is too deep to fix.' },
          { t: 'critical of current habits but hopeful about a modest alternative.', best: true },
          { t: 'amused and detached, as if watching strangers argue.' }
        ] }
      ],
      keys: [
        { w: 'humility', t: '谦逊（愿意修正自己最初判断的态度）', e: 'That takes patience, and it also takes a certain humility: the willingness to let another person\'s view become more complicated than the version you first disliked.', et: '这需要耐心，也需要某种谦逊：愿意让对方的观点变得比你最初讨厌的那个版本更复杂。' },
        { w: 'rehearsal', t: '排练（自我重复，而非真正思考）', e: 'It feels like thinking, but it is closer to rehearsal.', et: '这感觉像是在思考，其实更接近排练。' },
        { w: 'unglamorous', t: '不光鲜的、不起眼的', e: 'The alternative is unglamorous.', et: '另一种做法并不光鲜。' },
        { w: 'keeps the door open', t: '留有余地、保持对话的可能', e: 'None of this guarantees agreement, but it keeps the door open, and that is not nothing.', et: '这些都不能保证达成一致，但它让门保持敞开，而这不是小事。' }
      ]
    },
    {
      id: 'en-r3', level: 'C2', title: 'What We Owe to the Version We Disagree With', src: '长篇随笔 · 约 380 词',
      text: 'I have a friend who can summarise my position better than I can, and then explain, in the next breath, why it is wrong. It is an unnerving experience, and a useful one. Most of us, when we disagree, begin by building a version of the other view that is easier to knock down. He does the opposite, and it costs him something: he spends the first half of every argument agreeing. He listens past the parts he already knows he will reject, and repeats them back with more care than I used myself.\n\nThis is not politeness. Politeness would let him nod and change the subject. What he does is closer to an obligation, though the word sounds grand for a conversation. If I am going to tell you that you are wrong, I owe you a description of what you actually think. Otherwise I am not disagreeing with you; I am disagreeing with a person I invented and then defeated.\n\nThe temptation is easy to explain. A weak version of an opponent\'s view is easier to attack, and attacking feels like progress. But the feeling is misleading. When we win against a position no one holds, we learn nothing, and the other person learns only that we were not listening. The argument ends, and the disagreement remains exactly where it was. The exchange produces heat, and no light.\n\nNone of this requires neutrality, and it certainly does not require concession. The most effective critics are often the most exact: they state the opposing case in its strongest form because they want to defeat the strongest form. Accuracy is not a concession; it is a condition of being taken seriously. A caricature may win the room, but it will not survive the reply. That is why the strongest critics are worth reading twice.\n\nThe obligation has limits, of course. Some views are stated badly, and some are not worth the effort of reconstruction. But before I decide which is which, I have to try. The test is simple enough: could the person I disagree with read my summary and say, \'Yes, that is what I meant\'? If not, I am not arguing with them yet. I am still arguing with myself.',
      tr: '我有个朋友，能把我的立场复述得比我本人还清楚，然后在下一口气里解释它为什么错了。这种体验让人不安，也很有用。我们大多数人在意见相左时，会先给对方观点搭一个更容易击倒的版本。他正好相反，而这也让他付出代价：每场争论的前半段，他都用来表示同意。他会越过那些自己早已知道要反对的部分去听，然后用比我本人更认真的态度把它们复述回来。\n\n这不是礼貌。礼貌会让他点点头，然后换个话题。他所做的更接近一种义务，尽管用在一场谈话里，这个词听起来太大。如果我准备告诉你你错了，我就欠你一个关于你究竟怎么想的准确描述。否则我并不是在反驳你；我是在反驳一个我自己编造出来、又自己打败的人。\n\n这种诱惑很容易解释。把对方的观点做弱一点，更好攻击，而攻击又像是进展。但这种感觉会骗人。当我们赢了一个没人真正持有的立场，我们什么也没学到，对方只学到我们没在听。争论结束了，分歧却还停在原处。这样的交锋产生热度，却不产生光。\n\n这一切并不要求中立，更不要求让步。最有效的批评者往往最精确：他们把对方最有力的版本讲出来，因为他们想击败的是最强的版本。准确不是让步，而是被认真对待的前提。一幅漫画也许能赢得房间，但它撑不过回应。这就是为什么最强的批评者值得读两遍。\n\n当然，这种义务有边界。有些观点表达得很糟，有些也不值得费力重建。但在判断哪个是哪个之前，我得先试一次。检验方法很简单：我不同意的那个人，读到我的概括，会不会说“对，我就是这个意思”？如果不会，我其实还没在跟他争论。我还在跟自己争论。',
      qs: [
        { q: 'Which sentence best states the writer\'s central claim?', opts: [
          { t: 'Disagreement should be avoided online because it changes no one\'s mind.' },
          { t: 'Before rejecting a view, we owe it an accurate restatement of what it actually claims.', best: true },
          { t: 'Winning the argument matters more than understanding the other side.' }
        ] },
        { q: 'According to the writer, what is misleading about attacking a weak version of an opponent\'s view?', opts: [
          { t: 'It makes the opponent defensive rather than open to persuasion.' },
          { t: 'It feels like progress but leaves the disagreement where it was.', best: true },
          { t: 'It takes longer than engaging with the strongest version of the view.' }
        ] },
        { q: 'In paragraph 4, "A caricature may win the room" most nearly means…', opts: [
          { t: 'A mocking distortion can win an audience but cannot survive a serious reply.', best: true },
          { t: 'A humorous drawing persuades people more effectively than an argument.' },
          { t: 'An exaggerated version of a view is the only version an audience can follow.' }
        ] },
        { q: 'The writer\'s attitude toward the obligation described can best be described as…', opts: [
          { t: 'admiring of a demanding practice while acknowledging its limits.', best: true },
          { t: 'impatient with anyone who disagrees and unwilling to compromise.' },
          { t: 'detached and ironic, treating argument as a game.' }
        ] }
      ],
      keys: [
        { w: 'knock down', t: '轻易驳倒、推翻（论点）', e: 'Most of us, when we disagree, begin by building a version of the other view that is easier to knock down.', et: '我们大多数人在意见相左时，会先给对方观点搭一个更容易击倒的版本。' },
        { w: 'concession', t: '让步（承认对方某点成立）', e: 'Accuracy is not a concession; it is a condition of being taken seriously.', et: '准确不是让步，而是被认真对待的前提。' },
        { w: 'caricature', t: '漫画式扭曲、夸张简化', e: 'A caricature may win the room, but it will not survive the reply.', et: '一幅漫画也许能赢得房间，但它撑不过回应。' },
        { w: 'reconstruction', t: '重构、重新组织表述', e: 'Some views are stated badly, and some are not worth the effort of reconstruction.', et: '有些观点表达得很糟，有些也不值得费力重建。' }
      ]
    },
    {
      id: 'en-r4', level: 'C2', title: 'The Recommendation Is Not a Decision', src: '特写报道 · 约 400 词',
      text: 'On a Tuesday morning in a converted warehouse in Rotterdam, eight people sit around a table looking at one screen. The screen shows the home page of a food-delivery app used by forty million people. A designer proposes removing one option from the top row. A data analyst says the test showed no significant drop in orders. The room agrees within four minutes. Nobody asks what the removed option was for, or who had been choosing it.\n\nThe company calls this "curation", and the word does a lot of quiet work. "We are not telling people what to want," Marta Visser, the product lead, tells me afterwards. "We are making the good choice easier." She pauses, then adds: "Though easier for whom is a question we do not ask often enough." In the next room, a wall screen tracks how long each user hesitates before tapping. The number is falling, and the fall is reported as success.\n\nThe internal numbers are more interesting than the marketing. When the team added a third option to the checkout page, eleven per cent of users browsed longer and almost all of them chose what they had chosen before. When the team moved the default from "standard" to "express", thirty-eight per cent switched, and most did not notice. "The nudge is invisible to the person being nudged," a former engineer says. "We measured clicks. We never measured regret."\n\nThe effects are easiest to see away from the dashboard. Anika Roos, a nurse who orders twice a week, told me she has stopped comparing. "It used to take twenty minutes to decide. Now I take whatever the app puts first." She says this without complaint; the twenty minutes were not fun, and she does not miss them. That is the part the debate usually skips. What is being outsourced is not the choice itself but the moment in which the choice is made, and the moment is where judgement lives.\n\nNone of this makes the engineers villains, and most of them describe their work in the language of service. But a recommendation is not a decision. It is a decision-shaped object, handed to someone in a hurry, and it arrives with the authority of a default. The meeting in Rotterdam lasted fifty minutes. The change was approved. Tomorrow, somewhere, a person will open the app and find one fewer thing to consider, and will feel, as intended, relieved.',
      tr: '鹿特丹一间由仓库改造的办公室里，一个周二上午，八个人围着一张桌子盯着一块屏幕。屏幕上是一个有四千万用户的外卖应用首页。一位设计师提议把首行的一个选项去掉。一位数据分析师说测试显示订单量没有明显下降。四分钟后，房间达成一致。没有人问，被去掉的那个选项是干什么用的，也没有人问，原本是谁在选它。\n\n公司把这叫作“策展”，这个词悄悄地干了很多活。“我们不是在告诉人们该想要什么，”产品负责人玛尔塔·维瑟事后对我说，“我们只是让好的选择更容易。”她停了一下，又补了一句：“不过，对谁更容易，这个问题我们问得不够多。”隔壁房间里，一块墙上的屏幕在追踪每个用户在点下去之前犹豫多久。这个数字在下降，而下降被当作成绩汇报。\n\n内部数字比市场宣传有意思得多。团队在结账页加上第三个选项时，11% 的用户浏览时间变长，而他们几乎全都选择了原先就选的那个。团队把默认项从“标准配送”改成“加急”时，38% 的人换了选项，大多数人没有察觉。“这种推动对被推动的人是看不见的，”一位前工程师说，“我们衡量点击，从不衡量后悔。”\n\n离开仪表盘，效果更容易看清。护士安妮卡·罗斯每周下单两次，她告诉我她已经不再比较了。“以前要花二十分钟决定。现在我拿应用放在第一个的。”她说这话时没有抱怨；那二十分钟并不好玩，她也不想念。这正是争论通常跳过的地方。被外包出去的并不是选择本身，而是做出选择的那一刻，而判断恰恰活在这一刻里。\n\n这一切并不让工程师变成反派，他们大多数人用服务的语言描述自己的工作。但推荐不是决定。它是一个决定形状的东西，被递给一个赶时间的人，而且带着默认选项的权威抵达。鹿特丹那场会开了五十分钟。改动通过了。明天，在某个地方，一个人会打开这个应用，发现要考虑的事情少了一件，并且如设计所愿，感到轻松。',
      qs: [
        { q: 'Which sentence best states the writer\'s central point?', opts: [
          { t: 'Recommendation systems are technically flawed and should be replaced by plain search.' },
          { t: 'Recommendation quietly narrows options and absorbs the moment of judgement, and the shift is reported as success.', best: true },
          { t: 'Consumers deliberately prefer fewer choices and want apps to decide on their behalf.' }
        ] },
        { q: 'What does the internal data in paragraph 3 suggest?', opts: [
          { t: 'Adding extra options changed behaviour far more than moving the default did.' },
          { t: 'Changing the default shifted behaviour far more than adding an option did.', best: true },
          { t: 'Users noticed the new default and resented being steered.' }
        ] },
        { q: 'In paragraph 2, "curation" most nearly means…', opts: [
          { t: 'the selective arrangement of options, presented as a helpful service.', best: true },
          { t: 'the removal of low-quality products from a catalogue.' },
          { t: 'a marketing label for a paid advertising slot.' }
        ] },
        { q: 'The writer\'s attitude toward the industry is best described as…', opts: [
          { t: 'neutral and technical, deliberately avoiding any judgement about the practice.' },
          { t: 'critical through concrete observation, without turning the engineers into villains.', best: true },
          { t: 'hostile and sarcastic, treating the product team as dishonest.' }
        ] }
      ],
      keys: [
        { w: 'curation', t: '（行业语）策展式筛选（把替人挑选包装成服务；此处带反讽）', e: 'The company calls this "curation", and the word does a lot of quiet work.', et: '公司把这叫作“策展”，这个词悄悄地干了很多活。' },
        { w: 'nudge', t: '助推（不改选项、只改呈现以影响选择，被推动者往往无感）', e: '"The nudge is invisible to the person being nudged," a former engineer says.', et: '“这种推动对被推动的人是看不见的，”一位前工程师说。' },
        { w: 'outsource', t: '外包、把…交出去（此处指把判断的那一刻让渡给系统）', e: 'What is being outsourced is not the choice itself but the moment in which the choice is made, and the moment is where judgement lives.', et: '被外包出去的并不是选择本身，而是做出选择的那一刻，而判断恰恰活在这一刻里。' },
        { w: 'decision-shaped object', t: '“决定形状的东西”（看着像决定、实为系统预制选项，含讽刺）', e: 'It is a decision-shaped object, handed to someone in a hurry, and it arrives with the authority of a default.', et: '它是一个决定形状的东西，被递给一个赶时间的人，而且带着默认选项的权威抵达。' }
      ],
      patterns: [
        {
          frame: 'What is being X-ed is not A but B.',
          t: '对比否定：把注意力从表层对象（A）挪到真正被改变的东西（B），常用于揭穿话术。',
          e: 'What is being outsourced is not the choice itself but the moment in which the choice is made, and the moment is where judgement lives.',
          et: '被外包出去的并不是选择本身，而是做出选择的那一刻，而判断恰恰活在这一刻里。',
          tip: '先立 not A 再立 but B，B 才是重音落点；别把 but 换成 and，否则两个对象变成并列，揭穿的力量就没了。'
        },
        {
          frame: 'None of this makes X the villain — but Y is still not Z.',
          t: '让步-转折：先替对方卸掉道德指控，显得公允，再把判断强行拉回来。',
          e: 'None of this makes the engineers villains, and most of them describe their work in the language of service. But a recommendation is not a decision.',
          et: '这一切并不让工程师变成反派，他们大多数人用服务的语言描述自己的工作。但推荐不是决定。',
          tip: '让步句只让掉“动机”，不让掉“结论”；转折必须落在原来的判断上，若停在让步句就成了替对方辩护，论点会散。'
        },
        {
          frame: 'It is an X-shaped object, handed to someone in a hurry, and it arrives with the authority of Y.',
          t: '归因转移：用“物”作主语加无施动者的被动分词，让做出这一行为的人从句子里消失。',
          e: 'It is a decision-shaped object, handed to someone in a hurry, and it arrives with the authority of a default.',
          et: '它是一个决定形状的东西，被递给一个赶时间的人，而且带着默认选项的权威抵达。',
          tip: '骨架是“物 + 分词短语 + 动词 arrive”，全句不出现 who handed it；想追责时把施动者补回来（by the team），句子立刻变得尖锐。'
        }
      ]
    }
  ],
  drills: [
    {
      id: 'en-l1', level: 'C2', title: '顶阶听力 · 会议、播客与谈判',
      desc: '真实语速的整句：先听懂态度和言外之意，再抓细节',
      items: [
        { w: 'push back on the premise', t: '反驳前提（先质疑论证的出发点，而不是直接否定结论；董事会场合用显得克制）', e: "I'd push back on the premise, gently, because the numbers we're celebrating are the ones the pilot was designed to produce.", et: '我想温和地反驳一下这个前提，因为我们庆祝的这些数字，恰恰是试点设计出来就会产生的数字。', p: '/pʊʃ bæk ɒn ðə ˈpremɪs/' },
        { w: 'if I could just finish', t: '让我把话说完（被抢话时礼貌但坚决地夺回话轮，后面常紧跟 because）', e: "Sorry — if I could just finish the thought, because the part you're cutting off is where the actual disagreement sits.", et: '抱歉——请让我把这个想法说完，因为你打断的那部分正是真正有分歧的地方。', p: '/ɪf aɪ kʊd dʒʌst ˈfɪnɪʃ/' },
        { w: 'if you can meet me on', t: '如果你能在某一点上让步（谈判里的条件交换句式，先给弹性再要回报）', e: "Look, I can be flexible on the start date if you can meet me on the sign-on, and then we're basically there.", et: '听我说，入职时间我可以灵活，如果你能在签字奖金上让一步，那我们基本就成了。', p: '/ɪf juː kən miːt miː ɒn/' },
        { w: 'the limits of what this can show', t: '这项研究能说明的东西的边界（学术问答里主动认局限，比直接说 but 更老练）', e: "To be fair, I'd be the first to admit the limits of what this can show — we're talking about one site, one season.", et: '公平地说，我第一个会承认这项研究能说明的东西有限——我们说的只是一个地点、一个季节。', p: '/ðə ˈlɪmɪts əv wɒt ðɪs kən ʃəʊ/' },
        { w: "don't get me started", t: '别跟我提这个（饭桌反讽开场，暗示一肚子槽要吐，重音落在 started）', e: "Don't get me started on his so-called spontaneous trip — he booked it eight months out and colour-coded the itinerary.", et: '别跟我提他那趟“说走就走”的旅行——他提前八个月就订好了，还给行程做了颜色分类。', p: '/dəʊnt ɡet miː ˈstɑːtɪd/' },
        { w: 'what I can do is', t: '我能做的是（客服补救时先把承诺范围收窄，再给出降级方案）', e: "Here's what I can do: I can't refund the full amount, but I can waive the fee and credit you for the delay.", et: '我能做的是这样：全额退款我做不到，但我可以免掉手续费，并因为延误给你补偿额度。', p: '/wɒt aɪ kæn duː ɪz/' }
      ]
    }
  ]
});
