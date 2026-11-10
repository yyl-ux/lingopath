LP.registerCourse({
  id: 'fr', name: '法语', native: 'Français', flag: '🇫🇷', tts: 'fr-FR', typing: true, order: true,
  units: [
    { id: 'fr-u1', title: '第一单元 · 问候与自我介绍', desc: '先学会礼貌地开口', color: '#58cc02', lessons: [
      { id: 'fr-u1-l1', title: '基本问候', items: [
        { w: 'bonjour', t: '你好', e: 'Bonjour, comment allez-vous ?', et: '你好，你好吗？' },
        { w: 'bonsoir', t: '晚上好', e: 'Bonsoir, madame.', et: '女士，晚上好。' },
        { w: 'salut', t: '嗨', e: 'Salut, ça va ?', et: '嗨，你好吗？' },
        { w: 'au revoir', t: '再见', e: 'Au revoir, à demain.', et: '再见，明天见。' },
        { w: 'merci', t: '谢谢', e: 'Merci pour votre aide.', et: '谢谢您的帮助。' },
        { w: 's\'il vous plaît', t: '请', e: 'Un café, s\'il vous plaît.', et: '请来一杯咖啡。' },
        { w: 'pardon', t: '对不起', e: 'Pardon, je suis en retard.', et: '对不起，我迟到了。' },
        { w: 'oui', t: '是', e: 'Oui, je suis prêt.', et: '是的，我准备好了。' }
      ] },
      { id: 'fr-u1-l2', title: '我是谁', items: [
        { w: 'je', t: '我', e: 'Je suis étudiant.', et: '我是学生。' },
        { w: 'tu', t: '你', e: 'Tu es mon ami.', et: '你是我的朋友。' },
        { w: 'nom', t: '名字', e: 'Mon nom est Li Ming.', et: '我的名字是李明。' },
        { w: 'ami', t: '朋友', e: 'Il est mon ami.', et: '他是我的朋友。' },
        { w: 'suis', t: '我是', e: 'Je suis professeur.', et: '我是老师。' },
        { w: 'es', t: '你是', e: 'Tu es très gentil.', et: '你很友善。' },
        { w: 'étudiant', t: '学生', e: 'Elle est étudiante.', et: '她是学生。' },
        { w: 'professeur', t: '老师', e: 'Il est professeur.', et: '他是老师。' }
      ] },
      { id: 'fr-u1-l3', title: '基本句式', items: [
        { w: 'ceci', t: '这个', e: 'Ceci est un livre.', et: '这是一本书。' },
        { w: 'cela', t: '那个', e: 'Cela est ma maison.', et: '那是我的家。' },
        { w: 'quoi', t: '什么', e: 'Quoi ? Je ne comprends pas.', et: '什么？我不明白。' },
        { w: 'qui', t: '谁', e: 'Qui est-ce ?', et: '这是谁？' },
        { w: 'où', t: '哪里', e: 'Où est la gare ?', et: '车站在哪里？' },
        { w: 'est', t: '是', e: 'Il est professeur.', et: '他是老师。' },
        { w: 'bien', t: '好', e: 'Je vais bien, merci.', et: '我很好，谢谢。' },
        { w: 'non', t: '不', e: 'Non, je ne suis pas étudiant.', et: '不，我不是学生。' }
      ] }
    ] },
    { id: 'fr-u2', title: '第二单元 · 数字与生活', desc: '数字、吃喝与问路', color: '#1cb0f6', lessons: [
      { id: 'fr-u2-l1', title: '一到八', items: [
        { w: 'un', t: '一', e: 'Un café, s\'il vous plaît.', et: '请来一杯咖啡。' },
        { w: 'deux', t: '二', e: 'Deux livres, s\'il vous plaît.', et: '请来两本书。' },
        { w: 'trois', t: '三', e: 'Il y a trois amis.', et: '有三个朋友。' },
        { w: 'quatre', t: '四', e: 'Quatre chaises, s\'il vous plaît.', et: '请来四把椅子。' },
        { w: 'cinq', t: '五', e: 'J\'ai cinq euros.', et: '我有五欧元。' },
        { w: 'six', t: '六', e: 'Six heures de sommeil.', et: '六小时睡眠。' },
        { w: 'sept', t: '七', e: 'Sept jours dans une semaine.', et: '一周有七天。' },
        { w: 'huit', t: '八', e: 'Huit heures de travail.', et: '八小时工作。' }
      ] },
      { id: 'fr-u2-l2', title: '食物', items: [
        { w: 'eau', t: '水', e: 'Un verre d\'eau, s\'il vous plaît.', et: '请来一杯水。' },
        { w: 'café', t: '咖啡', e: 'J\'aime le café.', et: '我喜欢咖啡。' },
        { w: 'thé', t: '茶', e: 'Elle boit du thé.', et: '她喝茶。' },
        { w: 'pain', t: '面包', e: 'Je mange du pain le matin.', et: '我早上吃面包。' },
        { w: 'nourriture', t: '食物', e: 'La nourriture est prête.', et: '饭做好了。' },
        { w: 'manger', t: '吃', e: 'Je veux manger maintenant.', et: '我现在想吃东西。' },
        { w: 'boire', t: '喝', e: 'Je bois de l\'eau tous les jours.', et: '我每天喝水。' },
        { w: 'délicieux', t: '好吃', e: 'Ce pain est délicieux.', et: '这个面包很好吃。' }
      ] },
      { id: 'fr-u2-l3', title: '出行', items: [
        { w: 'ici', t: '这里', e: 'Ici, c\'est la gare.', et: '车站在这里。' },
        { w: 'là', t: '那里', e: 'Là, c\'est ma maison.', et: '那里是我的家。' },
        { w: 'rue', t: '街道', e: 'J\'habite dans cette rue.', et: '我住在这条街上。' },
        { w: 'gare', t: '车站', e: 'La gare est proche.', et: '车站很近。' },
        { w: 'bus', t: '公交车', e: 'Je prends le bus tous les jours.', et: '我每天坐公交车。' },
        { w: 'gauche', t: '左边', e: 'Tournez à gauche.', et: '向左转。' },
        { w: 'droite', t: '右边', e: 'Le magasin est à droite.', et: '商店在右边。' },
        { w: 'proche', t: '近', e: 'Ma maison est proche.', et: '我家很近。' }
      ] }
    ] }
  ]
});
