LP.registerCourse({
  id: 'fr', name: '法语', native: 'Français', flag: '🇫🇷', tts: 'fr-FR', typing: true, order: true,
  levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
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
        { w: 'ami', t: '朋友', e: 'C\'est mon ami.', et: '他是我的朋友。' },
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
      ] },
    ] },
    { id: 'fr-u3', level: 'A1', title: '第三单元 · 天气与季节', desc: '聊聊天气，说说春夏秋冬', color: '#58cc02', lessons: [
      { id: 'fr-u3-l1', title: '天气怎么样', items: [
        { w: 'temps', t: '天气', e: 'Quel temps fait-il aujourd\'hui ?', et: '今天天气怎么样？' },
        { w: 'soleil', t: '太阳；晴天', e: 'Il y a du soleil ce matin.', et: '今天早上出太阳。' },
        { w: 'chaud', t: '热的', e: 'Il fait chaud en été.', et: '夏天很热。' },
        { w: 'froid', t: '冷的', e: 'Il fait froid en hiver.', et: '冬天很冷。' },
        { w: 'pluie', t: '雨', e: 'J\'aime le bruit de la pluie.', et: '我喜欢雨声。' },
        { w: 'pleuvoir', t: '下雨', e: 'Il pleut souvent en automne.', et: '秋天经常下雨。' },
        { w: 'vent', t: '风', e: 'Il y a du vent aujourd\'hui.', et: '今天有风。' },
        { w: 'neige', t: '雪', e: 'La neige couvre la rue.', et: '雪覆盖了街道。' }
      ] },
      { id: 'fr-u3-l2', title: '四季', items: [
        { w: 'printemps', t: '春天', e: 'Au printemps, les arbres deviennent verts.', et: '春天，树木变绿。' },
        { w: 'été', t: '夏天', e: 'En été, nous allons à la mer.', et: '夏天我们去海边。' },
        { w: 'automne', t: '秋天', e: 'En automne, les feuilles tombent.', et: '秋天，树叶落下。' },
        { w: 'hiver', t: '冬天', e: 'En hiver, il neige souvent ici.', et: '这里冬天经常下雪。' },
        { w: 'saison', t: '季节', e: 'Le printemps est ma saison préférée.', et: '春天是我最喜欢的季节。' },
        { w: 'degré', t: '度', e: 'Il fait vingt degrés aujourd\'hui.', et: '今天二十度。' },
        { w: 'nuage', t: '云', e: 'Le ciel est couvert de nuages.', et: '天空布满了云。' },
        { w: 'beau', t: '晴朗的；好的', e: 'Quel beau temps !', et: '多好的天气啊！' }
      ] },
      { id: 'fr-u3-l3', title: '出门看天', items: [
        { w: 'météo', t: '天气预报', e: 'La météo annonce de la pluie pour demain.', et: '天气预报说明天有雨。' },
        { w: 'gris', t: '灰色的；阴沉的', e: 'Le ciel est gris ce matin.', et: '今天早上天色灰蒙蒙的。' },
        { w: 'parapluie', t: '雨伞', e: 'Prends ton parapluie, il va pleuvoir.', et: '带上雨伞，要下雨了。' },
        { w: 'manteau', t: '大衣', e: 'Il fait froid, mets ton manteau.', et: '天冷了，穿上大衣。' },
        { w: 'doux', t: '温暖的', e: 'Il fait doux au printemps.', et: '春天很温暖。' },
        { w: 'ski', t: '滑雪', e: 'Nous faisons du ski en hiver.', et: '我们冬天去滑雪。' },
        { w: 'pique-nique', t: '野餐', e: 'Nous faisons un pique-nique quand il fait beau.', et: '天气好的时候我们去野餐。' },
        { w: 'dehors', t: '外面', e: 'Il fait beau dehors, sortons !', et: '外面天气很好，我们出去吧！' },
        { w: 'vraiment', t: '真的', e: 'Il fait vraiment chaud aujourd\'hui.', et: '今天真的很热。' }
      ] }
    ] },
    { id: 'fr-u8', level: 'A1', title: '第八单元 · 外出吃饭', desc: '点餐、加菜、买单，一顿饭说得下来', color: '#1cb0f6', lessons: [
      { id: 'fr-u8-l1', title: '进店与点餐', items: [
        { w: 'restaurant', t: '餐馆', e: 'Nous cherchons un restaurant pas trop cher.', et: '我们在找一家不太贵的餐馆。' },
        { w: 'table', t: '桌子', e: 'Une table pour deux, s\'il vous plaît.', et: '请给我们一张两人桌。' },
        { w: 'carte', t: '菜单', e: 'Le serveur nous apporte la carte.', et: '服务员给我们拿来菜单。' },
        { w: 'serveur', t: '服务员', e: 'Le serveur est très aimable.', et: '这位服务员很和气。' },
        { w: 'commander', t: '点菜', e: 'Nous sommes prêts à commander.', et: '我们准备好点菜了。' },
        { w: 'plat', t: '菜；一道菜', e: 'Quel est le plat du jour ?', et: '今天的每日特餐是什么？' },
        { w: 'boisson', t: '饮料', e: 'Quelle boisson voulez-vous ?', et: '您想喝什么饮料？' },
        { w: 'entrée', t: '前菜', e: 'Comme entrée, je prends la soupe.', et: '前菜我要汤。' },
        { w: 'dessert', t: '甜点', e: 'Je garde une petite place pour le dessert.', et: '我留一点肚子吃甜点。' }
      ] },
      { id: 'fr-u8-l2', title: '菜品与口味', items: [
        { w: 'poulet', t: '鸡肉', e: 'Le poulet rôti est vraiment bon.', et: '烤鸡真的很好吃。' },
        { w: 'poisson', t: '鱼', e: 'Je préfère le poisson à la viande.', et: '比起肉我更喜欢鱼。' },
        { w: 'viande', t: '肉', e: 'Elle ne mange pas de viande.', et: '她不吃肉。' },
        { w: 'légume', t: '蔬菜', e: 'Les légumes sont frais dans ce restaurant.', et: '这家餐馆的蔬菜很新鲜。' },
        { w: 'soupe', t: '汤', e: 'La soupe est un peu salée.', et: '汤有点咸。' },
        { w: 'salade', t: '沙拉', e: 'Une salade verte, s\'il vous plaît.', et: '请来一份绿叶沙拉。' },
        { w: 'sel', t: '盐', e: 'Passez-moi le sel, s\'il vous plaît.', et: '请把盐递给我。' },
        { w: 'sucré', t: '甜的', e: 'Ce dessert est trop sucré pour moi.', et: '这个甜点对我来说太甜了。' },
        { w: 'épicé', t: '辣的', e: 'Ce plat est très épicé.', et: '这道菜很辣。' }
      ] },
      { id: 'fr-u8-l3', title: '用餐与买单', items: [
        { w: 'addition', t: '账单', e: 'L\'addition, s\'il vous plaît.', et: '请买单。' },
        { w: 'payer', t: '付款', e: 'Je voudrais payer par carte.', et: '我想刷卡付款。' },
        { w: 'pourboire', t: '小费', e: 'Le service est compris, mais on laisse un pourboire.', et: '服务费已经包含在内，但我们还是留点小费。' },
        { w: 'carafe', t: '（玻璃）水壶', e: 'Une carafe d\'eau, s\'il vous plaît.', et: '请来一壶水。' },
        { w: 'réservation', t: '预订', e: 'Nous avons une réservation au nom de Li.', et: '我们以李的名字订了位。' },
        { w: 'complet', t: '客满的', e: 'Le restaurant est complet ce soir.', et: '今晚餐馆客满。' },
        { w: 'terrasse', t: '露天座位', e: 'On peut s\'asseoir en terrasse ?', et: '我们可以坐在外面吗？' },
        { w: 'apporter', t: '端来；拿来', e: 'On nous apporte le pain tout de suite.', et: '面包马上就给我们端来。' },
        { w: 'goût', t: '味道', e: 'Ce vin a un goût fruité.', et: '这酒有果香。' }
      ] }
    ] },
    { id: 'fr-u9', level: 'A1', title: '第九单元 · 商店购物', desc: '问价、选码、试穿，买得明明白白', color: '#58cc02', lessons: [
      { id: 'fr-u9-l1', title: '询价与挑选', items: [
        { w: 'magasin', t: '商店', e: 'Ce magasin ferme à vingt heures.', et: '这家商店二十点关门。' },
        { w: 'acheter', t: '买', e: 'Je voudrais acheter une chemise blanche.', et: '我想买一件白衬衫。' },
        { w: 'prix', t: '价格', e: 'Quel est le prix de ce sac ?', et: '这个包多少钱？' },
        { w: 'cher', t: '贵的', e: 'C\'est trop cher pour moi.', et: '这对我来说太贵了。' },
        { w: 'soldes', t: '打折季', e: 'Les soldes commencent demain.', et: '打折季明天开始。' },
        { w: 'rayon', t: '货区', e: 'Le rayon des chaussures est au premier étage.', et: '鞋类区在二楼。' },
        { w: 'taille', t: '尺码', e: 'Avez-vous cette robe en taille quarante ?', et: '这条连衣裙有四十码吗？' },
        { w: 'couleur', t: '颜色', e: 'Vous l\'avez en quelle couleur ?', et: '这个有哪种颜色？' },
        { w: 'essayer', t: '试穿；尝试', e: 'Je peux essayer cette veste ?', et: '我可以试穿这件外套吗？' }
      ] },
      { id: 'fr-u9-l2', title: '衣服与尺码', items: [
        { w: 'chemise', t: '衬衫', e: 'Cette chemise est en coton.', et: '这件衬衫是棉的。' },
        { w: 'pantalon', t: '裤子', e: 'Ce pantalon est un peu long.', et: '这条裤子有点长。' },
        { w: 'chaussure', t: '鞋', e: 'Ces chaussures sont trop petites.', et: '这双鞋太小了。' },
        { w: 'robe', t: '连衣裙', e: 'Elle porte une robe bleue.', et: '她穿着一条蓝色的连衣裙。' },
        { w: 'veste', t: '外套', e: 'Prends une veste, il fait frais.', et: '带件外套，天有点凉。' },
        { w: 'pull', t: '毛衣', e: 'Ce pull me plaît beaucoup.', et: '我很喜欢这件毛衣。' },
        { w: 'sac', t: '包', e: 'Ce sac est en cuir.', et: '这个包是皮的。' },
        { w: 'pointure', t: '鞋码', e: 'Quelle est votre pointure ?', et: '您穿几码鞋？' },
        { w: 'miroir', t: '镜子', e: 'Il y a un miroir dans la cabine.', et: '试衣间里有一面镜子。' }
      ] },
      { id: 'fr-u9-l3', title: '付款与退换', items: [
        { w: 'caisse', t: '收银台', e: 'La caisse est près de l\'entrée.', et: '收银台在入口附近。' },
        { w: 'espèces', t: '现金', e: 'Vous payez en espèces ou par carte ?', et: '您付现金还是刷卡？' },
        { w: 'ticket', t: '小票', e: 'Gardez le ticket pour un échange.', et: '保留小票以便换货。' },
        { w: 'échanger', t: '换货', e: 'Je voudrais échanger ce pull.', et: '我想换这件毛衣。' },
        { w: 'rembourser', t: '退款', e: 'Est-ce que vous pouvez me rembourser ?', et: '您能给我退款吗？' },
        { w: 'réduction', t: '折扣', e: 'Il y a une réduction de vingt pour cent.', et: '打八折。' },
        { w: 'cabine', t: '试衣间', e: 'La cabine est libre, entrez.', et: '试衣间空着，请进。' },
        { w: 'défaut', t: '瑕疵', e: 'Il y a un défaut sur la manche.', et: '袖子上有个瑕疵。' },
        { w: 'emballage', t: '包装', e: 'Un emballage cadeau, s\'il vous plaît.', et: '请帮我做成礼物包装。' }
      ] }
    ] },
    { id: 'fr-u4', level: 'A2', title: '第四单元 · 租房与搬家', desc: '看房、谈房租，搬家安顿不慌', color: '#1cb0f6', lessons: [
      { id: 'fr-u4-l1', title: '找房子', items: [
        { w: 'appartement', t: '公寓', e: 'Je cherche un appartement près du métro.', et: '我在找地铁站附近的公寓。' },
        { w: 'louer', t: '租', e: 'Nous voulons louer une maison avec jardin.', et: '我们想租一栋带花园的房子。' },
        { w: 'loyer', t: '房租', e: 'Le loyer est de huit cents euros par mois.', et: '房租每月八百欧元。' },
        { w: 'propriétaire', t: '房东', e: 'Le propriétaire vient demain.', et: '房东明天过来。' },
        { w: 'studio', t: '单间公寓', e: 'Un studio coûte moins cher.', et: '单间公寓便宜一些。' },
        { w: 'pièce', t: '房间', e: 'Cet appartement a trois pièces.', et: '这套公寓有三个房间。' },
        { w: 'cuisine', t: '厨房', e: 'La cuisine est petite mais très claire.', et: '厨房小但很明亮。' },
        { w: 'chambre', t: '卧室', e: 'La chambre donne sur la cour.', et: '卧室朝向院子。' }
      ] },
      { id: 'fr-u4-l2', title: '看房', items: [
        { w: 'visite', t: '看房；参观', e: 'La visite est prévue à dix heures.', et: '看房约在十点。' },
        { w: 'meublé', t: '带家具的', e: 'Ce studio est meublé, on peut emménager tout de suite.', et: '这个单间带家具，可以马上入住。' },
        { w: 'ascenseur', t: '电梯', e: 'L\'immeuble a un ascenseur.', et: '这栋楼有电梯。' },
        { w: 'étage', t: '楼层', e: 'J\'habite au cinquième étage.', et: '我住五楼。' },
        { w: 'quartier', t: '街区', e: 'J\'aime bien ce quartier.', et: '我很喜欢这个街区。' },
        { w: 'bruyant', t: '吵闹的', e: 'Cette rue est trop bruyante la nuit.', et: '这条街晚上太吵了。' },
        { w: 'chauffage', t: '暖气', e: 'Le chauffage marche bien en hiver.', et: '冬天暖气很管用。' },
        { w: 'charges', t: '杂费', e: 'Les charges comprennent l\'eau et le chauffage.', et: '杂费包含水费和暖气费。' }
      ] },
      { id: 'fr-u4-l3', title: '搬家与安顿', items: [
        { w: 'déménager', t: '搬家', e: 'Nous déménageons le mois prochain.', et: '我们下个月搬家。' },
        { w: 'carton', t: '纸箱', e: 'Il me faut encore dix cartons.', et: '我还需要十个纸箱。' },
        { w: 'contrat', t: '合同', e: 'Lisez bien le contrat avant de signer.', et: '签字前请仔细读合同。' },
        { w: 'caution', t: '押金', e: 'La caution est d\'un mois de loyer.', et: '押金是一个月的房租。' },
        { w: 'clé', t: '钥匙', e: 'Voici vos clés, il y en a trois.', et: '这是您的钥匙，一共三把。' },
        { w: 'électricité', t: '电；供电', e: 'Il faut mettre le compteur d\'électricité à votre nom.', et: '需要把电表过户到您的名下。' },
        { w: 'meuble', t: '家具', e: 'Nous avons acheté quelques meubles d\'occasion.', et: '我们买了几件二手家具。' },
        { w: 'voisin', t: '邻居', e: 'Les voisins sont très gentils ici.', et: '这里的邻居们非常友好。' }
      ] }
    ] },
    { id: 'fr-u5', level: 'A2', title: '第五单元 · 银行办手续', desc: '开户、取钱、办卡，遇到问题会说', color: '#58cc02', lessons: [
      { id: 'fr-u5-l1', title: '开户', items: [
        { w: 'banque', t: '银行', e: 'La banque ferme à dix-sept heures.', et: '银行十七点关门。' },
        { w: 'compte', t: '账户', e: 'J\'ai ouvert un compte courant.', et: '我开了一个活期账户。' },
        { w: 'carte bancaire', t: '银行卡', e: 'On paie tout par carte bancaire ici.', et: '这里什么都用银行卡支付。' },
        { w: 'formulaire', t: '表格', e: 'Remplissez ce formulaire en majuscules.', et: '请用大写字母填写这张表格。' },
        { w: 'signature', t: '签名', e: 'Mettez votre signature en bas de la page.', et: '请把名字签在页面下方。' },
        { w: 'conseiller', t: '顾问', e: 'Mon conseiller m\'a proposé une meilleure offre.', et: '我的顾问给我推荐了更划算的方案。' },
        { w: 'pièce d\'identité', t: '身份证件', e: 'Une pièce d\'identité est obligatoire.', et: '必须带身份证件。' },
        { w: 'dossier', t: '材料；档案', e: 'Votre dossier est complet, merci.', et: '您的材料齐全，谢谢。' }
      ] },
      { id: 'fr-u5-l2', title: '存取与转账', items: [
        { w: 'retirer', t: '取（钱）', e: 'Je voudrais retirer deux cents euros.', et: '我想取两百欧元。' },
        { w: 'déposer', t: '存入', e: 'J\'ai déposé mon chèque ce matin.', et: '我今天早上存了支票。' },
        { w: 'virement', t: '转账', e: 'Le loyer se paie par virement.', et: '房租通过转账支付。' },
        { w: 'distributeur', t: '取款机', e: 'Ce distributeur ne marche plus.', et: '这台取款机坏了。' },
        { w: 'code', t: '密码', e: 'Tapez votre code à quatre chiffres.', et: '请输入您的四位密码。' },
        { w: 'solde', t: '余额', e: 'Je vérifie mon solde sur l\'application.', et: '我在应用上查余额。' },
        { w: 'frais', t: '手续费', e: 'Ces frais sont trop élevés.', et: '这些手续费太高了。' },
        { w: 'euro', t: '欧元', e: 'Ça fait quinze euros en tout.', et: '一共十五欧元。' }
      ] },
      { id: 'fr-u5-l3', title: '卡出问题了', items: [
        { w: 'bloquer', t: '锁定；冻结', e: 'Mon code est bloqué depuis ce matin.', et: '我的密码从今天早上起就被锁了。' },
        { w: 'problème', t: '问题', e: 'Il y a un problème avec ma carte.', et: '我的卡出了问题。' },
        { w: 'perdre', t: '丢失', e: 'J\'ai perdu ma carte bancaire.', et: '我把银行卡弄丢了。' },
        { w: 'annuler', t: '取消', e: 'Je voudrais annuler ce virement.', et: '我想取消这笔转账。' },
        { w: 'paiement', t: '支付；付款', e: 'Ce paiement a été refusé deux fois.', et: '这笔支付被拒绝了两次。' },
        { w: 'guichet', t: '柜台', e: 'Veuillez passer au guichet numéro trois.', et: '请到三号柜台办理。' },
        { w: 'attendre', t: '等待', e: 'Il faut attendre votre tour.', et: '需要等叫到您的号。' },
        { w: 'résoudre', t: '解决', e: 'Le problème est résolu, merci beaucoup.', et: '问题解决了，非常感谢。' }
      ] }
    ] },
    { id: 'fr-u10', level: 'A2', title: '第十单元 · 看病就医', desc: '说清症状、看诊拿药，心里不慌', color: '#1cb0f6', lessons: [
      { id: 'fr-u10-l1', title: '哪里不舒服', items: [
        { w: 'médecin', t: '医生', e: 'Je voudrais voir un médecin aujourd\'hui.', et: '我今天想去看医生。' },
        { w: 'mal', t: '疼；痛', e: 'J\'ai mal à la tête depuis hier.', et: '我从昨天开始头疼。' },
        { w: 'fièvre', t: '发烧', e: 'Elle a de la fièvre depuis deux jours.', et: '她发烧两天了。' },
        { w: 'toux', t: '咳嗽', e: 'J\'ai une toux sèche la nuit.', et: '我夜里干咳。' },
        { w: 'rhume', t: '感冒', e: 'J\'ai attrapé un rhume en sortant.', et: '我出门时感冒了。' },
        { w: 'gorge', t: '喉咙', e: 'J\'ai mal à la gorge.', et: '我喉咙疼。' },
        { w: 'fatigue', t: '疲劳', e: 'Je ressens une grande fatigue.', et: '我感到非常疲惫。' },
        { w: 'vertige', t: '头晕', e: 'J\'ai des vertiges le matin.', et: '我早上会头晕。' },
        { w: 'allergie', t: '过敏', e: 'J\'ai une allergie aux arachides.', et: '我对花生过敏。' }
      ] },
      { id: 'fr-u10-l2', title: '看诊', items: [
        { w: 'rendez-vous', t: '预约', e: 'J\'ai un rendez-vous à neuf heures.', et: '我九点有预约。' },
        { w: 'consulter', t: '就诊；看诊', e: 'Le médecin peut vous consulter cet après-midi.', et: '医生今天下午可以给您看诊。' },
        { w: 'ordonnance', t: '处方', e: 'Voici votre ordonnance, à présenter en pharmacie.', et: '这是您的处方，请拿去药店。' },
        { w: 'prise de sang', t: '抽血', e: 'Il faut faire une prise de sang.', et: '需要抽血化验。' },
        { w: 'symptôme', t: '症状', e: 'Quels sont vos symptômes ?', et: '您有哪些症状？' },
        { w: 'tension', t: '血压', e: 'Je vais prendre votre tension.', et: '我来给您量血压。' },
        { w: 'respirer', t: '呼吸', e: 'Respirez profondément, s\'il vous plaît.', et: '请深吸一口气。' },
        { w: 'salle d\'attente', t: '候诊室', e: 'Veuillez patienter dans la salle d\'attente.', et: '请在候诊室等候。' },
        { w: 'grave', t: '严重的', e: 'Ce n\'est pas grave, rassurez-vous.', et: '不严重，请放心。' }
      ] },
      { id: 'fr-u10-l3', title: '药店与医嘱', items: [
        { w: 'pharmacie', t: '药店', e: 'La pharmacie est ouverte jusqu\'à vingt heures.', et: '药店营业到二十点。' },
        { w: 'médicament', t: '药', e: 'Ce médicament se prend après le repas.', et: '这药饭后服用。' },
        { w: 'comprimé', t: '药片', e: 'Un comprimé matin et soir.', et: '早晚各一片。' },
        { w: 'posologie', t: '用法用量', e: 'La posologie est indiquée sur la boîte.', et: '用法用量写在盒子上。' },
        { w: 'guérir', t: '痊愈', e: 'Il a guéri en une semaine.', et: '他一周就痊愈了。' },
        { w: 'repos', t: '休息', e: 'Il faut du repos pendant deux jours.', et: '需要休息两天。' },
        { w: 'soigner', t: '治疗；照料', e: 'On soigne bien cette maladie aujourd\'hui.', et: '现在这种病治得很好。' },
        { w: 'infection', t: '感染', e: 'C\'est une petite infection, rien de grave.', et: '是轻微感染，不严重。' },
        { w: 'fois', t: '次', e: 'Prenez ce médicament trois fois par jour.', et: '这药每天吃三次。' }
      ] }
    ] },
    { id: 'fr-u11', level: 'A2', title: '第十一单元 · 问路与交通', desc: '问路、换乘、打车，出行不迷路', color: '#58cc02', lessons: [
      { id: 'fr-u11-l1', title: '问路', items: [
        { w: 'tourner', t: '转弯', e: 'Tournez à droite après la banque.', et: '过了银行后向右转。' },
        { w: 'chemin', t: '路；路线', e: 'Je ne connais pas le chemin.', et: '我不认识这条路。' },
        { w: 'perdu', t: '迷路的', e: 'Je suis perdu, pouvez-vous m\'aider ?', et: '我迷路了，您能帮我吗？' },
        { w: 'loin', t: '远的', e: 'C\'est loin d\'ici ?', et: '离这里远吗？' },
        { w: 'traverser', t: '穿过', e: 'Traversez la place et continuez tout droit.', et: '穿过广场，然后一直往前走。' },
        { w: 'feu', t: '红绿灯', e: 'Au feu, tournez à gauche.', et: '在红绿灯处向左转。' },
        { w: 'plan', t: '地图', e: 'Je regarde le plan sur mon téléphone.', et: '我在手机上看地图。' },
        { w: 'coin', t: '角落；街角', e: 'La boulangerie est au coin de la rue.', et: '面包店在街角。' },
        { w: 'indiquer', t: '指路；指出', e: 'Pouvez-vous m\'indiquer la gare ?', et: '您能告诉我去车站怎么走吗？' }
      ] },
      { id: 'fr-u11-l2', title: '公交与地铁', items: [
        { w: 'métro', t: '地铁', e: 'Je prends le métro pour aller au travail.', et: '我坐地铁去上班。' },
        { w: 'billet', t: '车票', e: 'Un billet pour Lyon, s\'il vous plaît.', et: '请给我一张去里昂的票。' },
        { w: 'ligne', t: '线路', e: 'La ligne quatre est fermée aujourd\'hui.', et: '四号线今天停运。' },
        { w: 'station', t: '车站', e: 'Descendez à la station République.', et: '请在共和站下车。' },
        { w: 'correspondance', t: '换乘', e: 'Il y a une correspondance à Châtelet.', et: '在夏特莱要换乘。' },
        { w: 'quai', t: '站台', e: 'Le train part du quai numéro six.', et: '火车从六号站台出发。' },
        { w: 'horaire', t: '时刻表', e: 'Regardez les horaires sur l\'écran.', et: '请看屏幕上的时刻表。' },
        { w: 'valider', t: '刷卡验票', e: 'Validez votre billet avant de monter.', et: '上车前请刷卡验票。' },
        { w: 'grève', t: '罢工', e: 'Il y a une grève des transports demain.', et: '明天公共交通罢工。' }
      ] },
      { id: 'fr-u11-l3', title: '打车与买票', items: [
        { w: 'taxi', t: '出租车', e: 'On prend un taxi, il est tard.', et: '我们打车吧，太晚了。' },
        { w: 'chauffeur', t: '司机', e: 'Le chauffeur nous attend devant la gare.', et: '司机在车站前等我们。' },
        { w: 'adresse', t: '地址', e: 'Voici l\'adresse : rue Victor Hugo.', et: '这是地址：雨果街。' },
        { w: 'compteur', t: '计价器', e: 'Le compteur affiche douze euros.', et: '计价器显示十二欧元。' },
        { w: 'aller-retour', t: '往返票', e: 'Un aller-retour pour Paris, s\'il vous plaît.', et: '请给我一张去巴黎的往返票。' },
        { w: 'borne', t: '自动售票机', e: 'Vous pouvez acheter votre billet à la borne.', et: '您可以在自动售票机上买票。' },
        { w: 'retard', t: '晚点；迟到', e: 'Le train a vingt minutes de retard.', et: '火车晚点二十分钟。' },
        { w: 'embouteillage', t: '堵车', e: 'Il y a des embouteillages à cette heure-ci.', et: '这个点正堵车。' },
        { w: 'destination', t: '目的地', e: 'Quelle est votre destination ?', et: '您要去哪里？' }
      ] }
    ] },
    { id: 'fr-u12', level: 'A2', title: '第十二单元 · 打电话与预约', desc: '打电话、留言、改期，事情约得明白', color: '#1cb0f6', lessons: [
      { id: 'fr-u12-l1', title: '打通电话', items: [
        { w: 'appeler', t: '打电话', e: 'Je vous appelle demain matin.', et: '我明天早上给您打电话。' },
        { w: 'allô', t: '喂（电话用语）', e: 'Allô, bonjour, je voudrais parler à monsieur Dupont.', et: '喂，您好，我想找杜邦先生。' },
        { w: 'joindre', t: '联系上', e: 'Je n\'arrive pas à le joindre.', et: '我联系不上他。' },
        { w: 'répondeur', t: '答录机', e: 'Laissez un message sur le répondeur.', et: '请在答录机上留言。' },
        { w: 'occupé', t: '占线的；忙的', e: 'La ligne est occupée, rappelez plus tard.', et: '线路占线，请稍后再打。' },
        { w: 'sonner', t: '响铃', e: 'Le téléphone sonne, tu peux répondre ?', et: '电话响了，你能接一下吗？' },
        { w: 'raccrocher', t: '挂断', e: 'Ne raccrochez pas, je vous passe le service concerné.', et: '请别挂断，我给您转接相关部门。' },
        { w: 'patienter', t: '稍等', e: 'Veuillez patienter un instant.', et: '请稍等片刻。' },
        { w: 'service', t: '部门；服务', e: 'Je vous passe le service commercial.', et: '我给您转接商务部门。' }
      ] },
      { id: 'fr-u12-l2', title: '留言与转达', items: [
        { w: 'rappeler', t: '回电话', e: 'Pouvez-vous me rappeler ce soir ?', et: '您今晚能给我回个电话吗？' },
        { w: 'numéro', t: '号码', e: 'Laissez votre numéro, s\'il vous plaît.', et: '请留下您的号码。' },
        { w: 'transmettre', t: '转达', e: 'Je vais lui transmettre votre message.', et: '我会把您的留言转达给他。' },
        { w: 'répondre', t: '接听；回答', e: 'Personne ne répond depuis ce matin.', et: '从今天早上起没人接电话。' },
        { w: 'vocal', t: '语音消息', e: 'Je t\'ai envoyé un vocal.', et: '我给你发了一条语音。' },
        { w: 'portable', t: '手机', e: 'Mon portable est sur silencieux.', et: '我的手机调成静音了。' },
        { w: 'sonnerie', t: '铃声', e: 'La sonnerie est trop forte.', et: '铃声太响了。' },
        { w: 'urgent', t: '紧急的', e: 'C\'est urgent, il faut le prévenir tout de suite.', et: '这事很急，得马上通知他。' },
        { w: 'prévenir', t: '通知；提醒', e: 'Je vais prévenir l\'équipe.', et: '我去通知团队。' }
      ] },
      { id: 'fr-u12-l3', title: '预约与改期', items: [
        { w: 'fixer', t: '确定（时间）', e: 'On peut fixer un rendez-vous jeudi ?', et: '我们可以把预约定在周四吗？' },
        { w: 'reporter', t: '推迟', e: 'Je voudrais reporter la réunion à vendredi.', et: '我想把会议推迟到周五。' },
        { w: 'confirmer', t: '确认', e: 'Merci de confirmer votre venue.', et: '请确认您能来。' },
        { w: 'disponible', t: '有空的', e: 'Je suis disponible mardi après-midi.', et: '我周二下午有空。' },
        { w: 'agenda', t: '日程本', e: 'Je regarde mon agenda et je vous rappelle.', et: '我看看日程，再给您回电话。' },
        { w: 'créneau', t: '时间段', e: 'Il reste un créneau à quinze heures.', et: '十五点还有一个时段。' },
        { w: 'malheureusement', t: '很遗憾', e: 'Malheureusement, je ne peux pas venir.', et: '很遗憾，我来不了。' },
        { w: 'décaler', t: '挪动（时间）', e: 'On peut décaler le rendez-vous d\'une heure ?', et: '能把预约挪后一小时吗？' },
        { w: 'présence', t: '出席', e: 'Sa présence à la réunion est indispensable.', et: '他出席这次会议是必不可少的。' }
      ] }
    ] },
    { id: 'fr-u6', level: 'B1', title: '第六单元 · 科技与网络', desc: '聊手机、网络与我们的数字生活', color: '#1cb0f6', lessons: [
      { id: 'fr-u6-l1', title: '设备与应用', items: [
        { w: 'ordinateur', t: '电脑', e: 'Mon ordinateur portable est lent.', et: '我的笔记本电脑很慢。' },
        { w: 'téléphone portable', t: '手机', e: 'Mon téléphone portable n\'a plus de batterie.', et: '我的手机没电了。' },
        { w: 'application', t: '应用程序', e: 'Cette application m\'aide à apprendre le français.', et: '这个应用帮我学法语。' },
        { w: 'écran', t: '屏幕', e: 'L\'écran de mon téléphone est cassé.', et: '我的手机屏幕碎了。' },
        { w: 'télécharger', t: '下载', e: 'Le fichier est trop lourd à télécharger.', et: '这个文件太大，下载很费劲。' },
        { w: 'mot de passe', t: '密码', e: 'J\'ai oublié mon mot de passe.', et: '我忘了我的密码。' },
        { w: 'fichier', t: '文件', e: 'J\'ai envoyé le fichier par e-mail.', et: '我已经用电子邮件把文件发出去了。' },
        { w: 'clavier', t: '键盘', e: 'Le clavier de mon ordinateur ne marche plus.', et: '我的电脑键盘坏了。' }
      ] },
      { id: 'fr-u6-l2', title: '上网与社交', items: [
        { w: 'internet', t: '互联网', e: 'Sans internet, je me sens perdu.', et: '没有网络，我就觉得无所适从。' },
        { w: 'réseau', t: '网络；信号', e: 'Le réseau est mauvais dans le métro.', et: '地铁里信号很差。' },
        { w: 'réseaux sociaux', t: '社交媒体', e: 'Elle passe deux heures par jour sur les réseaux sociaux.', et: '她每天花两个小时刷社交媒体。' },
        { w: 'message', t: '消息', e: 'Je t\'ai envoyé un message, tu l\'as vu ?', et: '我给你发了条消息，你看到了吗？' },
        { w: 'se connecter', t: '登录；连接', e: 'Je n\'arrive pas à me connecter au wifi.', et: '我连不上无线网。' },
        { w: 'recherche', t: '搜索', e: 'Fais une recherche avant d\'acheter.', et: '买之前先搜一搜。' },
        { w: 'information', t: '信息', e: 'On trouve beaucoup d\'informations en ligne.', et: '在网上能找到很多信息。' },
        { w: 'virus', t: '病毒', e: 'Mon ordinateur a attrapé un virus.', et: '我的电脑中病毒了。' }
      ] },
      { id: 'fr-u6-l3', title: '数字生活', items: [
        { w: 'télétravail', t: '远程办公', e: 'Grâce au télétravail, je gagne deux heures par jour.', et: '多亏远程办公，我每天省下两个小时。' },
        { w: 'notification', t: '通知', e: 'Je coupe toutes les notifications le soir.', et: '我晚上会关掉所有通知。' },
        { w: 'dépendance', t: '依赖；上瘾', e: 'La dépendance au téléphone est un vrai problème.', et: '对手机的依赖是个实实在在的问题。' },
        { w: 'données', t: '数据', e: 'Ces applications collectent nos données personnelles.', et: '这些应用收集我们的个人数据。' },
        { w: 'intelligence artificielle', t: '人工智能', e: 'L\'intelligence artificielle change notre façon de travailler.', et: '人工智能正在改变我们的工作方式。' },
        { w: 'pratique', t: '方便的；实用的', e: 'C\'est pratique, mais on y passe trop de temps.', et: '这很方便，但我们在上面花的时间太多了。' },
        { w: 'par contre', t: '另一方面；相反', e: 'C\'est utile, par contre c\'est fatigant.', et: '这有用，但另一方面也很累人。' },
        { w: 'abonnement', t: '订阅；套餐', e: 'J\'ai résilié mon abonnement, c\'était trop cher.', et: '我取消了订阅，太贵了。' }
      ] }
    ] },
    { id: 'fr-u7', level: 'B1', title: '第七单元 · 环境与生活', desc: '谈环保、气候，说说自己能做什么', color: '#58cc02', lessons: [
      { id: 'fr-u7-l1', title: '环境问题', items: [
        { w: 'environnement', t: '环境', e: 'Nous devons protéger l\'environnement.', et: '我们必须保护环境。' },
        { w: 'pollution', t: '污染', e: 'La pollution de l\'air inquiète les habitants.', et: '空气污染让居民担忧。' },
        { w: 'climat', t: '气候', e: 'Le climat change plus vite qu\'avant.', et: '气候变化比以前更快了。' },
        { w: 'réchauffement', t: '变暖', e: 'Le réchauffement climatique fond les glaciers.', et: '全球变暖正在融化冰川。' },
        { w: 'déchets', t: '垃圾', e: 'Triez vos déchets, s\'il vous plaît.', et: '请给垃圾分类。' },
        { w: 'plastique', t: '塑料', e: 'Ici, les sacs en plastique sont payants.', et: '在这里，塑料袋是要收费的。' },
        { w: 'sécheresse', t: '干旱', e: 'La sécheresse a duré tout l\'été.', et: '干旱持续了整个夏天。' },
        { w: 'inquiétant', t: '令人担忧的', e: 'La situation devient de plus en plus inquiétante.', et: '形势越来越令人担忧。' }
      ] },
      { id: 'fr-u7-l2', title: '环保行动', items: [
        { w: 'recycler', t: '回收利用', e: 'Nous recyclons le verre et le papier.', et: '我们回收玻璃和纸张。' },
        { w: 'tri', t: '分类', e: 'Le tri des déchets est obligatoire dans cet immeuble.', et: '这栋楼里垃圾分类是强制性的。' },
        { w: 'économiser', t: '节约；节省', e: 'On peut économiser l\'eau facilement.', et: '节约用水很容易。' },
        { w: 'transport en commun', t: '公共交通', e: 'Les transports en commun sont moins polluants.', et: '公共交通污染更小。' },
        { w: 'vélo', t: '自行车', e: 'Je vais au bureau à vélo quand il ne pleut pas.', et: '不下雨的时候我骑车上班。' },
        { w: 'énergies renouvelables', t: '可再生能源', e: 'Les énergies renouvelables coûtent de moins en moins cher.', et: '可再生能源越来越便宜。' },
        { w: 'gaspiller', t: '浪费', e: 'Il ne faut pas gaspiller la nourriture.', et: '不应该浪费食物。' },
        { w: 'habitude', t: '习惯', e: 'J\'ai pris l\'habitude d\'apporter mon sac.', et: '我养成了自己带袋子的习惯。' }
      ] },
      { id: 'fr-u7-l3', title: '谈谈看法', items: [
        { w: 'à mon avis', t: '在我看来', e: 'À mon avis, chacun peut faire quelque chose.', et: '在我看来，每个人都能做点什么。' },
        { w: 'agir', t: '行动', e: 'Il est encore temps d\'agir.', et: '现在行动还来得及。' },
        { w: 'effort', t: '努力', e: 'Ces petits efforts comptent beaucoup.', et: '这些小小的努力非常重要。' },
        { w: 'surtout', t: '尤其', e: 'Surtout les jeunes s\'intéressent à ces questions.', et: '尤其是年轻人关心这些问题。' },
        { w: 'néanmoins', t: '然而；尽管如此', e: 'C\'est long, néanmoins c\'est la seule solution.', et: '这很漫长，然而这是唯一的办法。' },
        { w: 'mesure', t: '措施', e: 'Le gouvernement a pris des mesures concrètes.', et: '政府已经采取了具体措施。' },
        { w: 'avenir', t: '未来', e: 'Nous préparons l\'avenir de la planète.', et: '我们在为地球的未来做准备。' },
        { w: 'responsable', t: '负责任的', e: 'Chacun doit être plus responsable.', et: '每个人都应该更有责任感。' }
      ] }
    ] },
    { id: 'fr-u13', level: 'B1', title: '第十三单元 · 职场沟通', desc: '开会汇报、写邮件、谈分歧，说清立场', color: '#58cc02', lessons: [
      { id: 'fr-u13-l1', title: '会议与汇报', items: [
        { w: 'réunion', t: '会议', e: 'La réunion commence à neuf heures.', et: '会议九点开始。' },
        { w: 'ordre du jour', t: '议程', e: 'L\'ordre du jour compte trois points.', et: '议程上有三项内容。' },
        { w: 'présenter', t: '介绍；汇报', e: 'Je vais présenter les résultats du trimestre.', et: '我来汇报本季度的业绩。' },
        { w: 'rapport', t: '报告', e: 'Le rapport sera envoyé vendredi.', et: '报告周五发出。' },
        { w: 'objectif', t: '目标', e: 'Nous avons atteint notre objectif.', et: '我们达成了目标。' },
        { w: 'échéance', t: '截止期限', e: 'L\'échéance est fixée au trente juin.', et: '截止日期定在六月三十日。' },
        { w: 'conclure', t: '总结；得出结论', e: 'Pour conclure, je dirais que le projet avance bien.', et: '总结来说，我认为项目进展顺利。' },
        { w: 'chiffre', t: '数字；数据', e: 'Les chiffres du mois dernier sont bons.', et: '上个月的数据不错。' },
        { w: 'décision', t: '决定', e: 'Nous attendons une décision de la direction.', et: '我们在等管理层的决定。' }
      ] },
      { id: 'fr-u13-l2', title: '邮件与协作', items: [
        { w: 'courriel', t: '电子邮件', e: 'Je vous envoie le courriel tout de suite.', et: '我马上把邮件发给您。' },
        { w: 'pièce jointe', t: '附件', e: 'Veuillez trouver la pièce jointe.', et: '请查收附件。' },
        { w: 'relancer', t: '催问；再次联系', e: 'Je vais relancer le fournisseur cet après-midi.', et: '我今天下午去催一下供应商。' },
        { w: 'collègue', t: '同事', e: 'Mes collègues sont très serviables.', et: '我的同事们很乐于助人。' },
        { w: 'équipe', t: '团队', e: 'Notre équipe travaille à distance deux jours par semaine.', et: '我们团队每周远程办公两天。' },
        { w: 'prioritaire', t: '优先的', e: 'Cette tâche est prioritaire pour nous.', et: '这项任务对我们来说是优先的。' },
        { w: 'rédiger', t: '撰写', e: 'Il faut rédiger un compte rendu.', et: '需要写一份会议纪要。' },
        { w: 'compte rendu', t: '会议纪要', e: 'Le compte rendu sera diffusé demain.', et: '会议纪要明天发出去。' },
        { w: 'efficace', t: '有效的；高效的', e: 'Cette méthode est plus efficace.', et: '这个方法更有效。' }
      ] },
      { id: 'fr-u13-l3', title: '协商与分歧', items: [
        { w: 'négocier', t: '谈判；协商', e: 'Nous avons négocié un nouveau délai.', et: '我们谈成了一个新的期限。' },
        { w: 'proposition', t: '提议', e: 'Votre proposition me paraît raisonnable.', et: '您的提议在我看来是合理的。' },
        { w: 'accord', t: '一致；协议', e: 'Nous sommes tombés d\'accord sur le principe.', et: '我们在原则上达成了一致。' },
        { w: 'désaccord', t: '分歧', e: 'Il y a un désaccord sur le budget.', et: '在预算上存在分歧。' },
        { w: 'compromis', t: '折中方案', e: 'Nous avons trouvé un compromis.', et: '我们找到了一个折中方案。' },
        { w: 'à votre place', t: '如果我是您', e: 'À votre place, j\'en parlerais au directeur.', et: '如果我是您，我会跟经理谈这件事。' },
        { w: 'malentendu', t: '误会', e: 'Il y a eu un malentendu, je vais clarifier la situation.', et: '刚才有个误会，我来把情况说清楚。' },
        { w: 'clarifier', t: '澄清', e: 'Permettez-moi de clarifier ce point.', et: '请允许我澄清这一点。' },
        { w: 'franc', t: '坦率的', e: 'Pour être franc, je ne suis pas convaincu.', et: '坦率地说，我并没有被说服。' }
      ] }
    ] },
    { id: 'fr-u14', level: 'B1', title: '第十四单元 · 文化差异', desc: '习俗、节日与误解，聊得得体', color: '#1cb0f6', lessons: [
      { id: 'fr-u14-l1', title: '习俗与礼仪', items: [
        { w: 'coutume', t: '习俗', e: 'C\'est une coutume très ancienne.', et: '这是一个很古老的习俗。' },
        { w: 'politesse', t: '礼貌', e: 'La politesse compte beaucoup ici.', et: '在这里礼貌很重要。' },
        { w: 'se serrer la main', t: '握手', e: 'On se serre la main au travail.', et: '工作中我们握手问好。' },
        { w: 'bise', t: '贴面礼', e: 'Elle m\'a fait la bise en arrivant.', et: '她来的时候跟我行了贴面礼。' },
        { w: 'vouvoiement', t: '用「您」称呼', e: 'Le vouvoiement est de rigueur avec un supérieur.', et: '对上级要用「您」来称呼。' },
        { w: 'tutoyer', t: '用「你」称呼', e: 'On peut se tutoyer ?', et: '我们可以用「你」相称吗？' },
        { w: 'tabou', t: '禁忌', e: 'Parler d\'argent reste un peu tabou.', et: '谈钱还是有点忌讳。' },
        { w: 'ponctualité', t: '守时', e: 'La ponctualité est très appréciée.', et: '守时很受人看重。' },
        { w: 'inviter', t: '邀请', e: 'Ils nous ont invités à dîner samedi.', et: '他们邀请我们周六吃晚饭。' }
      ] },
      { id: 'fr-u14-l2', title: '节日与庆典', items: [
        { w: 'fête', t: '节日', e: 'La fête de la musique a lieu en juin.', et: '音乐节在六月举行。' },
        { w: 'Noël', t: '圣诞节', e: 'Nous rentrons à la maison pour Noël.', et: '我们回家过圣诞节。' },
        { w: 'Nouvel An', t: '新年', e: 'On fête le Nouvel An entre amis.', et: '我们和朋友一起过新年。' },
        { w: 'anniversaire', t: '生日', e: 'Son anniversaire tombe un dimanche.', et: '他的生日正好是星期天。' },
        { w: 'tradition', t: '传统', e: 'Cette tradition remonte au Moyen Âge.', et: '这个传统可以追溯到中世纪。' },
        { w: 'célébrer', t: '庆祝', e: 'Comment célèbre-t-on le printemps chez vous ?', et: '你们那里怎么庆祝春天？' },
        { w: 'cadeau', t: '礼物', e: 'Il est d\'usage d\'apporter un cadeau.', et: '按惯例要带一份礼物。' },
        { w: 'repas', t: '一餐；饭局', e: 'Le repas de Noël dure plusieurs heures.', et: '圣诞大餐要吃好几个小时。' },
        { w: 'trinquer', t: '碰杯', e: 'On trinque avant de commencer.', et: '开动前我们先碰杯。' }
      ] },
      { id: 'fr-u14-l3', title: '跨文化误解', items: [
        { w: 'mal comprendre', t: '误解', e: 'Il m\'a mal compris, je voulais dire autre chose.', et: '他误解我了，我本来想说的是另一件事。' },
        { w: 's\'adapter', t: '适应', e: 'Il m\'a fallu du temps pour m\'adapter.', et: '我花了一些时间才适应。' },
        { w: 'choc culturel', t: '文化冲击', e: 'J\'ai vécu un vrai choc culturel la première année.', et: '第一年我经历了真正的文化冲击。' },
        { w: 'différemment', t: '不同地', e: 'On fait les choses différemment ici.', et: '这里做事的方式不一样。' },
        { w: 'usage', t: '习惯做法', e: 'C\'est l\'usage ici de déjeuner à midi et demi.', et: '这里的习惯是十二点半吃午饭。' },
        { w: 'choquer', t: '冒犯；使不快', e: 'Je ne voulais pas vous choquer.', et: '我不是有意冒犯您。' },
        { w: 's\'habituer', t: '习惯于', e: 'Je m\'habitue peu à peu au rythme local.', et: '我逐渐习惯当地的节奏。' },
        { w: 'maladroit', t: '不得体的；笨拙的', e: 'Ma question était peut-être maladroite.', et: '我的问题可能问得不太得体。' },
        { w: 'respecter', t: '尊重', e: 'Il faut respecter les règles de la maison.', et: '要尊重主人家的规矩。' }
      ] }
    ] },
    { id: 'fr-u15', level: 'B1', title: '第十五单元 · 学习与教育', desc: '课堂、考试与进修，谈学习经历', color: '#58cc02', lessons: [
      { id: 'fr-u15-l1', title: '课堂内外', items: [
        { w: 'cours', t: '课程', e: 'Le cours de français dure deux heures.', et: '法语课持续两个小时。' },
        { w: 'salle de classe', t: '教室', e: 'La salle de classe est au premier étage.', et: '教室在二楼。' },
        { w: 'enseignant', t: '教师', e: 'L\'enseignant explique la grammaire avec patience.', et: '老师耐心地讲语法。' },
        { w: 'élève', t: '学生', e: 'Les élèves posent beaucoup de questions.', et: '学生们提了很多问题。' },
        { w: 'exercice', t: '练习', e: 'Faites l\'exercice trois à la maison.', et: '回家做第三题。' },
        { w: 'leçon', t: '课；课文', e: 'La leçon du jour porte sur les temps du passé.', et: '今天的课讲过去时态。' },
        { w: 'note', t: '分数', e: 'J\'ai eu une bonne note à l\'oral.', et: '我口语得了一个好分数。' },
        { w: 'participer', t: '参与；发言', e: 'Il faut participer en classe.', et: '课堂上要积极发言。' },
        { w: 'prononciation', t: '发音', e: 'Ta prononciation s\'améliore.', et: '你的发音在进步。' }
      ] },
      { id: 'fr-u15-l2', title: '考试与成绩', items: [
        { w: 'épreuve', t: '考试；测验', e: 'L\'épreuve écrite dure trois heures.', et: '笔试持续三个小时。' },
        { w: 'réviser', t: '复习', e: 'Je révise mes notes chaque soir.', et: '我每天晚上复习笔记。' },
        { w: 'réussir', t: '通过；成功', e: 'Elle a réussi son examen haut la main.', et: '她轻松通过了考试。' },
        { w: 'échouer', t: '失败', e: 'Il a échoué une fois, puis il a recommencé.', et: '他失败过一次，后来又重新开始。' },
        { w: 'diplôme', t: '文凭', e: 'Ce diplôme est reconnu en Europe.', et: '这个文凭在欧洲被承认。' },
        { w: 'bourse', t: '奖学金', e: 'Elle a obtenu une bourse pour étudier à Lyon.', et: '她拿到了去里昂学习的奖学金。' },
        { w: 'stress', t: '压力', e: 'Le stress des examens se voit sur son visage.', et: '考试的压力写在他脸上。' },
        { w: 'tricher', t: '作弊', e: 'Il est interdit de tricher.', et: '禁止作弊。' },
        { w: 'résultat', t: '结果；成绩', e: 'Les résultats seront publiés lundi.', et: '成绩周一公布。' }
      ] },
      { id: 'fr-u15-l3', title: '在线学习与进修', items: [
        { w: 'formation', t: '培训', e: 'Je suis une formation en ligne le soir.', et: '我晚上上一个线上培训课。' },
        { w: 'plateforme', t: '平台', e: 'Cette plateforme propose des cours gratuits.', et: '这个平台提供免费课程。' },
        { w: 'progresser', t: '进步', e: 'Je progresse surtout à l\'oral.', et: '我主要在口语上有进步。' },
        { w: 'autonomie', t: '自主性', e: 'L\'apprentissage en ligne demande de l\'autonomie.', et: '在线学习需要自主性。' },
        { w: 'se former', t: '进修；接受培训', e: 'Elle se forme au marketing digital.', et: '她在接受数字营销培训。' },
        { w: 'inscrire', t: '报名；注册', e: 'Je me suis inscrit à un cours du soir.', et: '我报了一个晚间课程。' },
        { w: 'motivation', t: '动力', e: 'Sans motivation, on abandonne vite.', et: '没有动力，很快就放弃了。' },
        { w: 'certificat', t: '证书', e: 'Un certificat est délivré à la fin de la formation.', et: '培训结束后会发证书。' },
        { w: 'niveau', t: '水平', e: 'Mon niveau de français reste moyen.', et: '我的法语水平还是一般。' }
      ] }
    ] },
    { id: 'fr-u16', level: 'B2', title: '第十六单元 · 媒体与舆论', desc: '看新闻、辨真假，谈舆论有理有据', color: '#1cb0f6', lessons: [
      { id: 'fr-u16-l1', title: '新闻与信息来源', items: [
        { w: 'actualité', t: '时事；新闻', e: 'Les journalistes informent le public sur l\'actualité.', et: '记者向公众通报时事。' },
        { w: 'presse', t: '新闻界；报刊', e: 'La presse a révélé cette affaire la semaine dernière.', et: '新闻界上周揭露了这起事件。' },
        { w: 'journaliste', t: '记者', e: 'La journaliste a affirmé que le ministre avait démissionné.', et: '这位记者声称部长已经辞职。' },
        { w: 'titre', t: '标题', e: 'Ce titre exagère un peu le contenu de l\'article.', et: '这个标题有点夸大文章的内容。' },
        { w: 'la une', t: '头版', e: 'Cette affaire a fait la une de tous les journaux.', et: '这起事件成了所有报纸的头版。' },
        { w: 'chaîne', t: '电视台；频道', e: 'Cette chaîne présente les faits ; en revanche, l\'autre commente tout.', et: '这家电视台陈述事实；而另一家对什么都加以评论。' },
        { w: 'émission', t: '节目', e: 'L\'émission d\'hier soir abordait le thème du numérique.', et: '昨晚的节目讨论了数字技术这一话题。' },
        { w: 'article', t: '文章；报道', e: 'J\'avais déjà lu l\'article avant qu\'il ne soit partagé partout.', et: '在这篇文章被到处转发之前，我就已经读过了。' },
        { w: 'rédaction', t: '编辑部', e: 'La rédaction vérifie les faits avant de publier.', et: '编辑部在发布之前核实事实。' },
        { w: 'source', t: '消息来源', e: 'Ce reportage cite plusieurs sources fiables.', et: '这篇报道引用了多个可靠的消息来源。' }
      ] },
      { id: 'fr-u16-l2', title: '舆论与民调', items: [
        { w: 'opinion publique', t: '舆论', e: 'L\'opinion publique a changé depuis cette affaire.', et: '自从这起事件以来，舆论已经发生了变化。' },
        { w: 'sondage', t: '民意调查', e: 'Le dernier sondage annonçait un résultat serré.', et: '最新的民调预示结果会很接近。' },
        { w: 'dialogue', t: '对话；讨论', e: 'Le dialogue a été vif, mais courtois.', et: '讨论很激烈，但有礼有节。' },
        { w: 'manifester', t: '游行；示威', e: 'Des centaines de personnes ont manifesté contre ce projet.', et: '数百人游行反对这个项目。' },
        { w: 'controverse', t: '争议', e: 'Une controverse a éclaté après la diffusion du reportage.', et: '报道播出后引发了一场争议。' },
        { w: 'sujet', t: '话题；主题', e: 'L\'immigration reste un sujet très discuté.', et: '移民仍然是一个讨论很多的话题。' },
        { w: 'point de vue', t: '观点', e: 'J\'aurais formulé mon point de vue autrement.', et: '我会换一种方式表达我的观点。' },
        { w: 'persuader', t: '说服；劝说', e: 'Son argument clair m\'a persuadé.', et: '他那清晰的论点说服了我。' },
        { w: 'quoique', t: '尽管（接虚拟式）', e: 'Quoique ce candidat ait perdu, il reste respecté.', et: '尽管这位候选人落选了，他仍然受人尊重。' },
        { w: 'par conséquent', t: '因此', e: 'L\'abstention a augmenté ; par conséquent, les résultats restent fragiles.', et: '弃权率上升了；因此，结果依然不稳。' }
      ] },
      { id: 'fr-u16-l3', title: '假消息与思辨', items: [
        { w: 'infox', t: '假新闻', e: 'Les infox se propagent plus vite que les vraies informations.', et: '假新闻比真实信息传播得更快。' },
        { w: 'désinformation', t: '虚假信息', e: 'La désinformation est devenue un enjeu majeur.', et: '虚假信息已成为一个重大问题。' },
        { w: 'rumeur', t: '谣言', e: 'La rumeur circulait depuis des jours avant d\'être démentie.', et: '谣言流传了好几天才被否认。' },
        { w: 'vérifier', t: '核实', e: 'Il faut vérifier l\'information avant de la partager.', et: '分享信息之前应当先核实。' },
        { w: 'relayer', t: '转发；传播', e: 'Des milliers d\'internautes ont relayé la photo sans la vérifier.', et: '数千网民没有核实就把照片转发了。' },
        { w: 'esprit critique', t: '批判性思维', e: 'L\'école doit former l\'esprit critique des élèves.', et: '学校应当培养学生的批判性思维。' },
        { w: 'douter', t: '怀疑', e: 'Je doute qu\'il ait lu l\'article avant de le commenter.', et: '我怀疑他评论之前是否读过那篇文章。' },
        { w: 'démentir', t: '否认；辟谣', e: 'Le ministère a démenti ces informations.', et: '部委否认了这些消息。' },
        { w: 'en revanche', t: '然而；相反', e: 'Ce média cite ses sources ; en revanche, celui-là n\'en cite jamais.', et: '这家媒体注明消息来源；而那一家从不注明。' },
        { w: 'sceptique', t: '持怀疑态度的', e: 'Les lecteurs sont devenus sceptiques face aux titres choc.', et: '面对耸动的标题，读者变得多疑起来。' }
      ] }
    ] },
    { id: 'fr-u17', level: 'B2', title: '第十七单元 · 旅行见闻与文化比较', desc: '出发、见闻与归来，比较文化有话说', color: '#58cc02', lessons: [
      { id: 'fr-u17-l1', title: '出发与在路上', items: [
        { w: 'voyage', t: '旅行', e: 'Notre voyage s\'est déroulé sans aucun incident.', et: '我们的旅行进行得很顺利，没有出任何意外。' },
        { w: 'valise', t: '行李箱', e: 'J\'avais déjà préparé ma valise la veille du départ.', et: '出发前一天，我就已经收拾好了行李箱。' },
        { w: 'frontière', t: '边境；国界', e: 'Nous avons traversé la frontière à l\'aube.', et: '我们黎明时分越过了边境。' },
        { w: 'vol', t: '航班', e: 'Notre vol a été annulé à cause de l\'orage.', et: '因为暴风雨，我们的航班被取消了。' },
        { w: 'auberge', t: '客栈；小旅馆', e: 'Nous avons dormi dans une auberge très conviviale.', et: '我们住进了一家气氛很融洽的客栈。' },
        { w: 'découverte', t: '发现；新见闻', e: 'Chaque marché local est une petite découverte.', et: '每个当地市场都是一次小小的发现。' },
        { w: 'habitant', t: '居民；当地人', e: 'Les habitants nous ont raconté l\'histoire du village.', et: '当地居民给我们讲了这座村庄的来历。' },
        { w: 'itinéraire', t: '路线', e: 'Notre itinéraire prévoyait trois étapes en montagne.', et: '我们的路线原计划在山里经过三站。' },
        { w: 'imprévu', t: '意外情况', e: 'Il y a toujours un imprévu quand on voyage.', et: '旅行时总会有意外情况。' },
        { w: 'souvenir', t: '回忆；纪念品', e: 'Je garderai un excellent souvenir de ce périple.', et: '我会带着对这段旅程的美好回忆。' }
      ] },
      { id: 'fr-u17-l2', title: '住在当地', items: [
        { w: 'accueillir', t: '接待；迎接', e: 'La famille qui nous a accueillis parlait un peu chinois.', et: '接待我们的那家人会说一点中文。' },
        { w: 'rythme de vie', t: '生活节奏', e: 'Là-bas, le rythme de vie est bien plus lent.', et: '在那边，生活节奏要慢得多。' },
        { w: 'spécialité', t: '特色菜；特产', e: 'Nous avons goûté toutes les spécialités de la région.', et: '我们尝遍了当地的特色菜。' },
        { w: 'douane', t: '海关', e: 'À la douane, on m\'a demandé d\'ouvrir ma valise.', et: '在海关，有人要求我打开行李箱。' },
        { w: 'échange', t: '交流', e: 'Ce séjour a été un vrai échange culturel.', et: '这段经历是一次真正的文化交流。' },
        { w: 'barrière de la langue', t: '语言障碍', e: 'La barrière de la langue compliquait nos échanges au début.', et: '起初，语言障碍让我们的交流变得困难。' },
        { w: 'geste', t: '手势；举动', e: 'Un simple geste suffisait pour se faire comprendre.', et: '一个简单的手势就足以让人明白。' },
        { w: 'hébergement', t: '住宿', e: 'L\'hébergement chez l\'habitant coûte moins cher.', et: '寄宿在当地人家中更便宜。' },
        { w: 'patience', t: '耐心', e: 'Avec un peu de patience, on finit par se comprendre.', et: '只要有耐心，最终总能互相听懂。' },
        { w: 'excursion', t: '短途游览', e: 'Nous avons fait une excursion autour du lac.', et: '我们进行了一次环湖短途游览。' }
      ] },
      { id: 'fr-u17-l3', title: '归来与比较', items: [
        { w: 'à la différence de', t: '与…不同', e: 'À la différence de chez nous, on dîne très tard ici.', et: '与我们那里不同，这里晚餐吃得非常晚。' },
        { w: 'décalage horaire', t: '时差', e: 'Le décalage horaire m\'a fatigué les premiers jours.', et: '最初几天，时差让我很疲惫。' },
        { w: 'mœurs', t: '风俗；习惯', e: 'Il a expliqué que les mœurs locales avaient beaucoup changé.', et: '他解释说，当地的风俗已经发生了很大变化。' },
        { w: 'comparer', t: '比较', e: 'Comparer les cultures aide à mieux comprendre la sienne.', et: '比较不同的文化有助于更好地理解自己的文化。' },
        { w: 'stéréotype', t: '刻板印象', e: 'Ce film entretient des stéréotypes sur l\'étranger.', et: '这部电影延续了对外国人的刻板印象。' },
        { w: 'tolérance', t: '宽容', e: 'Voyager développe la tolérance envers les autres.', et: '旅行能培养对他人的宽容。' },
        { w: 'regard', t: '眼光；视角', e: 'Ce séjour a changé mon regard sur l\'étranger.', et: '这段旅居经历改变了我看待外国的眼光。' },
        { w: 'regretter', t: '遗憾；惋惜', e: 'J\'aurais regretté de partir sans visiter le musée.', et: '如果没参观博物馆就离开，我会感到遗憾。' },
        { w: 'avant que', t: '在…之前（接虚拟式）', e: 'Nous étions repartis avant que la saison ne commence.', et: '旅游季开始之前，我们就已经离开了。' },
        { w: 'raconter', t: '讲述；转述', e: 'Elle nous a raconté qu\'elle s\'était perdue dans la vieille ville.', et: '她跟我们讲，自己在老城里迷了路。' }
      ] },
    ] },
    { id: 'fr-u18', level: 'C1', title: '第十八单元 · 艺术与批评', desc: '流派、作品与解读，批评视角谈艺术', color: '#1cb0f6', lessons: [
      { id: 'fr-u18-l1', title: '艺术作品与流派', items: [
        { w: 'mimésis', t: '摹仿', e: 'La mimésis ne se limite pas à reproduire le visible : elle interroge les conventions qui organisent notre perception de la réalité artistique.', et: '摹仿并不止于再现可见之物：它还追问那些组织我们艺术现实感知的惯例。' },
        { w: 'palimpseste', t: '覆写本', e: 'Le roman fonctionne comme un palimpseste où les voix du passé affleurent sous chaque réécriture, sans jamais disparaître entièrement de la lecture contemporaine.', et: '这部小说如同一部覆写本，过去的声音在每次重写下浮现，又从未在当代阅读中完全消失。' },
        { w: 'clair-obscur', t: '明暗对照', e: 'Le clair-obscur sculpte les visages et introduit dans la toile une tension morale qui dépasse le seul effet décoratif et visuel.', et: '明暗对照塑造人物面容，并在画中引入一种超越纯粹装饰与视觉效果的道德张力。' },
        { w: 'existentialisme', t: '存在主义', e: 'L\'existentialisme irrigue ce drame où les personnages affrontent la liberté, la responsabilité et l\'absurde sans recours à aucune certitude transcendante.', et: '存在主义贯穿这部剧，人物在没有任何超验确信可依凭的情况下面对自由、责任与荒诞。' },
        { w: 'phénoménologie', t: '现象学', e: 'La phénoménologie permet de décrire comment l\'œuvre se donne au spectateur avant toute explication conceptuelle ou toute classification dans l\'histoire de l\'art.', et: '现象学能够描述作品在任何概念解释或被归入艺术史类别之前，如何呈现给观者。' },
        { w: 'juxtaposition', t: '并置', e: 'La juxtaposition de matériaux nobles et de rebuts industriels produit une tension sémantique que le commentaire critique doit interroger plutôt que la neutraliser.', et: '高贵材料与工业废料的并置产生语义张力，批评评论应加以探究，而不是将其消解。' },
        { w: 'allégorie', t: '讽喻', e: 'L\'allégorie transforme la crise politique en procession de figures énigmatiques, dont la signification se déplace selon le regard du spectateur.', et: '讽喻把政治危机转化为一列神秘人物，其意义随观者的目光而转移。' },
        { w: 'intertextualité', t: '互文性', e: 'L\'intertextualité du film convoque le cinéma muet et le feuilleton populaire, mais cette mémoire critique dépasse le simple jeu de citations.', et: '这部影片的互文性唤起默片与通俗连载剧，但这种批判性记忆超越了简单的引用游戏。' }
      ] },
      { id: 'fr-u18-l2', title: '批评与解读', items: [
        { w: 'herméneutique', t: '诠释学', e: 'L\'herméneutique contemporaine considère que comprendre une œuvre suppose d\'expliciter les préjugés historiques qui orientent notre propre lecture initiale du texte.', et: '当代诠释学认为，理解作品的前提是阐明那些引导我们最初文本阅读的历史成见。' },
        { w: 'déconstruction', t: '解构', e: 'La déconstruction du récit révèle que son apparente neutralité repose sur des oppositions hiérarchisées que le narrateur ne peut maîtriser.', et: '对叙事的解构揭示，其表面的中立建立在叙述者无法掌控的等级化对立之上。' },
        { w: 'mise en abyme', t: '嵌套结构', e: 'La mise en abyme du tableau dans le tableau trouble la frontière entre représentation et réalité, tout en exposant le dispositif du regard.', et: '画中画的嵌套结构模糊了再现与现实的边界，同时揭示了观看的装置。' },
        { w: 'polyphonie', t: '复调', e: 'La polyphonie romanesque empêche toute voix d\'imposer sa vérité, puisque chaque discours est contredit, déplacé ou relancé par un autre.', et: '小说的复调使任何声音都无法强加自身真理，因为每种话语都会被另一种话语反驳、转移或重新推进。' },
        { w: 'analyse du discours', t: '话语分析', e: 'L\'analyse du discours critique montre comment les choix lexicaux, les silences et les enchaînements argumentatifs construisent une autorité apparemment naturelle.', et: '批判性话语分析展示词汇选择、沉默与论证衔接如何构建一种看似自然的权威。' },
        { w: 'élucider', t: '阐明', e: 'Pour élucider ce passage hermétique, la critique confronte les manuscrits, la correspondance de l\'auteur et les débats intellectuels de son époque.', et: '为阐明这段晦涩文字，批评家对照手稿、作者书信及其时代的思想争论。' },
        { w: 'problématiser', t: '问题化', e: 'Problématiser la notion de génie oblige à examiner les institutions, les rapports de classe et les mécanismes de consécration qui la rendent crédible.', et: '将天才观念问题化，就必须审视使这一观念可信的制度、阶级关系与认可机制。' },
        { w: 'vraisemblance', t: '逼真性', e: 'La vraisemblance du récit ne dépend pas seulement des détails réalistes, mais aussi de la cohérence interne du monde fictionnel proposé.', et: '叙事的逼真性不仅取决于现实主义细节，也取决于所建构虚构世界的内在连贯性。' }
      ] },
      { id: 'fr-u18-l3', title: '艺术与当代社会', items: [
        { w: 'praxis', t: '实践', e: 'La praxis artistique de ce collectif associe recherche théorique et intervention urbaine, de sorte que l\'exposition devient un véritable espace d\'action.', et: '这个团体的艺术实践将理论研究与城市介入结合，使展览成为真正的行动空间。' },
        { w: 'iconoclaste', t: '反传统的', e: 'Cette installation iconoclaste défie les conventions esthétiques établies en subvertissant les codes de représentation du musée.', et: '这件反传统装置作品通过颠覆博物馆的再现规则，挑战既定美学惯例。' },
        { w: 'hégémonie', t: '霸权', e: 'L\'exposition interroge l\'hégémonie du regard occidental en confrontant les récits officiels aux mémoires artistiques longtemps reléguées aux marges de l\'institution.', et: '展览将官方叙事与长期被体制边缘化的艺术记忆相对照，从而质疑西方观看方式的霸权。' },
        { w: 'réification', t: '物化', e: 'La réification du corps féminin dans cette publicité devient évidente lorsque le regard du spectateur est réduit à une simple logique de consommation.', et: '当观者的目光被简化为消费逻辑时，这则广告对女性身体的物化便显而易见。' },
        { w: 'chosification', t: '物化', e: 'Le dispositif scénographique dénonce la chosification des migrants en refusant de transformer leurs témoignages en simples objets exposés au public.', et: '这一舞台装置拒绝把移民的证词变成向公众陈列的物品，以此谴责对移民的物化。' },
        { w: 'altérité', t: '他者性', e: 'La rencontre avec l\'altérité ne consiste pas à assimiler l\'autre, mais à accepter que sa différence déplace nos propres catégories esthétiques.', et: '与他者性相遇并非同化他者，而是接受其差异能够改变我们自身的审美范畴。' },
        { w: 'subjectivité', t: '主体性', e: 'La subjectivité de l\'artiste se manifeste moins dans l\'autoportrait que dans les choix de cadrage, de montage et de temporalité.', et: '艺术家的主体性与其说体现在自画像中，不如说体现在取景、剪辑与时间性的选择上。' },
        { w: 'liminalité', t: '阈限性', e: 'La liminalité de cette installation, suspendue entre architecture et performance, oblige le visiteur à habiter un espace aux repères provisoirement abolis.', et: '这一装置悬置在建筑与行为表演之间，其阈限性迫使参观者置身于参照标志暂时消失的空间。' }
      ] }
    ] },
    { id: 'fr-u19', level: 'C1', title: '第十九单元 · 公共辩论与社论', desc: '论证、立场与社论，公共议题有条理地谈', color: '#ff9600', lessons: [
      { id: 'fr-u19-l1', title: '辩论与论证', items: [
        { w: 'dialectique', t: '辩证法', e: 'La dialectique de l\'essai ne juxtapose pas deux opinions contraires : elle fait naître une compréhension nouvelle de leur confrontation argumentée.', et: '这篇评论文章的辩证法并非并置两种相反意见，而是从二者有论据的交锋中产生新的理解。' },
        { w: 'syllogisme', t: '三段论', e: 'Le syllogisme paraît convaincant, mais sa conclusion s\'effondre dès que l\'on examine la prémisse implicite sur laquelle repose tout le raisonnement.', et: '这个三段论看似有说服力，但只要审视整个推理所依赖的隐含前提，其结论便会瓦解。' },
        { w: 'paradigme', t: '范式', e: 'Le paradigme dominant de la communication politique privilégie la visibilité immédiate au détriment d\'une réflexion approfondie sur les transformations sociales.', et: '政治传播的主导范式偏重即时可见度，却牺牲了对社会转型的深入思考。' },
        { w: 'épistémologie', t: '认识论', e: 'L\'épistémologie des sciences sociales oblige l\'éditorialiste à distinguer les faits établis, les interprétations concurrentes et les présupposés de son propre camp.', et: '社会科学认识论要求社论作者区分既定事实、相互竞争的解释以及自身阵营的预设。' },
        { w: 'saillant', t: '显著的', e: 'Le trait saillant de cet éditorial est sa capacité à révéler les contradictions internes d\'une réforme présentée comme parfaitement consensuelle.', et: '这篇社论的显著特点，是能够揭示一项被描述为完全具有共识的改革所包含的内在矛盾。' },
        { w: 'rhétorique', t: '修辞术', e: 'La rhétorique du tribun repose sur des anaphores efficaces, mais l\'abondance des effets oratoires ne garantit ni la validité ni la cohérence.', et: '这位演说家的修辞术依赖有效的首句重复，但演说效果的丰富并不能保证论证的有效性与连贯性。' },
        { w: 'paralogisme', t: '谬误推理', e: 'Le paralogisme consiste ici à conclure qu\'une politique est injuste parce que son défenseur a formulé son argumentation avec une arrogance manifeste.', et: '这里的谬误推理，是因为政策支持者以明显傲慢的态度表述论证，就断定该政策不公正。' },
        { w: 'sophisme', t: '诡辩', e: 'Ce sophisme transforme l\'absence de données définitives en preuve absolue, afin de disqualifier toute critique avant même l\'examen des faits.', et: '这一诡辩把缺乏最终数据变成绝对证据，以便在审视事实之前就使一切批评失去效力。' }
      ] },
      { id: 'fr-u19-l2', title: '社论与评论', items: [
        { w: 'cadrage', t: '框架建构', e: 'Le cadrage médiatique de la manifestation privilégie les incidents violents et relègue au second plan les revendications sociales exprimées par les manifestants.', et: '媒体对示威的框架建构突出暴力事件，却把示威者表达的社会诉求降到次要位置。' },
        { w: 'métanarratif', t: '元叙事的', e: 'Le commentaire métanarratif de l\'éditorialiste dévoile les procédés de construction du récit au lieu de simplement en prolonger les effets persuasifs.', et: '社论作者的元叙事评论揭示叙事的建构手法，而不是简单延续其说服效果。' },
        { w: 'discursivité', t: '话语性', e: 'La discursivité de l\'essai réside dans sa capacité à produire du sens par les procédures mêmes de son énonciation.', et: '这篇文章的话语性在于其通过陈述过程本身产生意义的能力。' },
        { w: 'prégnant', t: '深入人心的', e: 'Le biais prégnant dans les commentaires en ligne finit par éroder la confiance nécessaire à toute discussion publique véritablement argumentée.', et: '网络评论中深入人心的偏向，最终会侵蚀任何真正有论据的公共讨论所必需的信任。' },
        { w: 'insidieux', t: '隐蔽的', e: 'Le biais insidieux de l\'article réside moins dans ses affirmations explicites que dans ce qu\'il choisit systématiquement de passer sous silence.', et: '这篇文章隐蔽的偏向与其说在明确论断中，不如说在它系统性避而不谈的内容里。' },
        { w: 'occulter', t: '掩盖', e: 'Multiplier les références prestigieuses peut occulter un raisonnement fragile, surtout lorsque ces autorités sont invoquées sans lien démontré avec la question.', et: '堆砌权威文献可能掩盖脆弱的推理，尤其当这些权威与所论问题的联系未经证明时。' },
        { w: 'dissensus', t: '异议', e: 'Le dissensus politique ne constitue pas une menace pour la démocratie, mais la condition même de son exercice effectif.', et: '政治异议并非民主的威胁，而是民主有效运作的条件本身。' },
        { w: 'pernicieux', t: '有害的', e: 'L\'effet pernicieux de cette formule choc tient à sa simplicité même : elle transforme un problème structurel en recherche d\'un coupable individuel.', et: '这句惊悚措辞的有害影响恰在于其简单性：它把结构性问题变成寻找个人罪责。' }
      ] },
      { id: 'fr-u19-l3', title: '公共议题', items: [
        { w: 'zeitgeist', t: '时代精神', e: 'Le zeitgeist contemporain valorise l\'immédiateté et la performance, ce qui rend toute réflexion lente sur le bien commun presque subversive.', et: '当代时代精神推崇即时性与绩效，使任何关于公共利益的缓慢思考几乎都带有颠覆性。' },
        { w: 'narratologie', t: '叙事学', e: 'La narratologie du reportage transforme une série d\'événements dispersés en causalité dramatique, au risque de simplifier les responsabilités politiques.', et: '报道的叙事学把一系列分散事件转化为戏剧性的因果链，却可能因此简化政治责任。' },
        { w: 'métadiscours', t: '元话语', e: 'Le métadiscours du chroniqueur commente ses propres stratégies d\'adresse et invite ainsi le lecteur à examiner les conditions de production de cet argumentaire.', et: '专栏作者的元话语评论自身的受众引导策略，进而邀请读者审视这套论证话语的产生条件。' },
        { w: 'métonymie', t: '转喻', e: 'La métonymie « les palais décident » réduit des institutions complexes à des lieux, tout en suggérant une opposition entre pouvoir et rue.', et: '“宫殿作出决定”这一转喻把复杂机构简化为地点，同时暗示权力与街头的对立。' },
        { w: 'synecdoque', t: '提喻', e: 'Parler de « toits » par synecdoque pour évoquer les logements sociaux condense l\'argument, mais risque d\'effacer les situations humaines qu\'il recouvre.', et: '用“屋顶”提喻社会住房虽使论证凝练，却可能抹去其中所涵盖的具体人生处境。' },
        { w: 'doxa', t: '俗见', e: 'La doxa médiatique présente la croissance comme une évidence indiscutable, si bien que les alternatives sont écartées avant même d\'être sérieusement examinées.', et: '媒体俗见把增长说成无可争辩的常识，以至于替代方案在得到认真审视之前就被排除。' },
        { w: 'aporétique', t: '悖论的', e: 'Un éditorial aporétique reconnaît les limites de sa propre position sans pour autant renoncer à toute affirmation.', et: '悖论性社论承认自身立场的局限，却不因此放弃一切主张。' },
        { w: 'équivoque', t: '歧义的', e: 'Une formule équivoque peut rassembler des publics opposés, mais elle fragilise la responsabilité démocratique lorsque chacun l\'interprète selon ses propres attentes.', et: '有歧义的表述或许能团结立场相反的公众，但当每个人按自身期待解读时，它会削弱民主责任。' }
      ] }
    ] },
    { id: 'fr-u20', level: 'C2', title: '第二十单元 · 地道语域与礼貌切换', desc: '习语、口语词与 tu / vous，按关系和场合说得得体', color: '#1cb0f6', lessons: [
      { id: 'fr-u20-l1', title: '惯用语与画面感', items: [
        { w: 'avoir du pain sur la planche', t: '有一大堆事要做', e: 'On a encore trois dossiers à finir : on a du pain sur la planche.', et: '我们还有三份材料要完成，有一大堆事等着做。' },
        { w: 'coûter les yeux de la tête', t: '贵得离谱（口语）', e: 'Cet appartement est minuscule, mais il coûte les yeux de la tête.', et: '这套公寓很小，却贵得离谱。' },
        { w: 'avoir un poil dans la main', t: '懒得出奇；不愿动手（口语）', e: 'Il ne va pas t\'aider à porter les cartons : il a un poil dans la main.', et: '他不会帮你搬箱子的，他懒得很。' },
        { w: 'se mettre en quatre', t: '竭尽全力帮忙', e: 'Elle s\'est mise en quatre pour que tout le monde se sente à l\'aise.', et: '她竭尽全力让每个人都感到自在。' },
        { w: 'prendre la mouche', t: '突然生气；被惹恼（口语）', e: 'Elle a pris la mouche quand on a plaisanté sur son retard.', et: '大家拿她迟到开玩笑，她一下子就恼了。' },
        { w: 'se prendre la tête', t: '烦心；纠结（口语）', e: 'Ne te prends pas la tête pour une petite erreur, on peut la corriger.', et: '别为一个小错误烦心，我们可以改掉。' },
        { w: 'faire la tête', t: '板着脸；生闷气（口语）', e: 'Depuis cette remarque, il me fait la tête.', et: '自打那句话以后，他就一直给我脸色看。' },
        { w: 'être sur son trente et un', t: '盛装打扮；穿戴非常讲究', e: 'Tout le monde était sur son trente et un pour le mariage.', et: '参加婚礼时，人人都盛装打扮。' }
      ] },
      { id: 'fr-u20-l2', title: '口语词的语域', items: [
        { w: 'boulot', t: '工作；活儿（口语，对应 travail）', e: 'J\'aime bien mon nouveau boulot, mais les horaires sont longs.', et: '我挺喜欢这份新工作，不过工时很长。' },
        { w: 'bagnole', t: '汽车（口语，对应 voiture）', e: 'Sa vieille bagnole consomme beaucoup, mais elle roule encore.', et: '他那辆旧车很耗油，不过还能开。' },
        { w: 'fric', t: '钱（口语，对应 argent）', e: 'Je n\'ai pas assez de fric pour partir ce week-end.', et: '我这个周末没足够的钱出去玩。' },
        { w: 'pote', t: '朋友；哥们儿（口语，对应 ami）', e: 'C\'est un vieux pote, je peux lui parler franchement.', et: '这是个老朋友，我可以跟他说实话。' },
        { w: 'bouquin', t: '书（口语，对应 livre）', e: 'Tu as fini le bouquin que je t\'ai prêté ?', et: '我借你的那本书，你看完了吗？' },
        { w: 'bouffer', t: '吃（口语，对应 manger）', e: 'On bouffe chez mes parents dimanche, tu veux venir ?', et: '我们周日在我爸妈家吃饭，你想来吗？' },
        { w: 'flipper', t: '害怕；紧张（口语）', e: 'Je flippais avant l\'entretien, mais tout s\'est bien passé.', et: '面试前我很紧张，不过一切都很顺利。' },
        { w: 'bosser', t: '工作；学习；干活（口语）', e: 'On a bossé toute la nuit pour rendre le projet à temps.', et: '我们干了一整夜，好按时交出项目。' }
      ] },
      { id: 'fr-u20-l3', title: 'tu / vous 与请求分寸', items: [
        { w: 'vouvoyer', t: '用 vous 称呼对方', e: 'Au début, il vaut mieux vouvoyer la directrice.', et: '一开始最好用 vous 称呼那位女经理。' },
        { w: 'on peut se tutoyer ?', t: '我们可以用 tu 相称吗？', e: 'On travaille ensemble depuis un mois ; on peut se tutoyer ?', et: '我们一起工作一个月了，可以用 tu 相称吗？' },
        { w: 'je vous en prie', t: '请；不客气（礼貌用语）', e: 'Je vous en prie, asseyez-vous.', et: '您请坐。' },
        { w: 'je t\'en prie', t: '请；不客气（对熟人说）', e: '— Merci pour ton aide. — Je t\'en prie.', et: '——谢谢你的帮助。——不客气。' },
        { w: 'serait-il possible de', t: '是否可以……（正式委婉请求）', e: 'Serait-il possible de reporter notre rendez-vous à demain ?', et: '是否可以把我们的约会推迟到明天？' },
        { w: 'ça vous dérangerait de', t: '您介意……吗（委婉请求）', e: 'Ça vous dérangerait de répéter la dernière phrase ?', et: '您介意重复一下最后一句吗？' },
        { w: 'tu pourrais', t: '你能不能……（熟人间的委婉请求）', e: 'Tu pourrais m\'envoyer le document quand tu auras un moment ?', et: '你有空时能不能把文件发给我？' },
        { w: 'je me permets de', t: '冒昧……（礼貌引出言行）', e: 'Je me permets de vous écrire au sujet de votre annonce.', et: '我就您的启事冒昧给您写信。' }
      ] }
    ] },
    { id: 'fr-u21', level: 'C2', title: '第二十一单元 · 反讽、暗示与保留', desc: '听懂 second degré、委婉拒绝和没有把话说满的分寸', color: '#ff9600', lessons: [
      { id: 'fr-u21-l1', title: 'second degré 与反讽', items: [
        { w: 'au second degré', t: '以第二层含义；带着反讽理解', e: 'Il faut prendre cette remarque au second degré : c\'est de l\'autodérision.', et: '这句话要从言外之意理解：这是一种自嘲。' },
        { w: 'c\'est ça', t: '可不是嘛（也可反讽，表不相信）', e: '— Je rangerai tout demain. — C\'est ça, comme la semaine dernière ?', et: '——我明天会全部收好的。——可不是嘛，就像上周一样？' },
        { w: 'tu m\'étonnes', t: '可不是嘛；难怪如此（语境中也可带反讽）', e: '— Il est épuisé. — Tu m\'étonnes, il a travaillé toute la nuit.', et: '——他累坏了。——可不是嘛，他工作了一整夜。' },
        { w: 'mon œil', t: '我才不信（口语）', e: 'Tu vas vraiment arrêter de fumer ? Mon œil !', et: '你真的要戒烟？我才不信！' },
        { w: 'la belle affaire', t: '有什么了不起（常带反讽）', e: 'Il a enfin rendu le dossier avec une semaine de retard. La belle affaire !', et: '他迟了一个星期，总算交了材料。可真了不起！' },
        { w: 'c\'est du propre', t: '真不像话；可真“干净”（常作反讽）', e: 'Tu as renversé du café sur le rapport, c\'est du propre !', et: '你把咖啡洒在报告上了，可真“干净”！' },
        { w: 'chapeau', t: '佩服；干得漂亮（可真诚或反讽）', e: 'Chapeau, tu as réussi à rater le train alors que tu étais déjà sur le quai !', et: '真有你的，人都已经在站台上了，居然还能误了火车！' },
        { w: 'on ne peut pas dire que', t: '不能说……；实在算不上……（委婉否定）', e: 'On ne peut pas dire que ce soit très clair.', et: '这实在算不上清楚。' }
      ] },
      { id: 'fr-u21-l2', title: '委婉拒绝与弦外之音', items: [
        { w: 'je veux bien', t: '我可以；我愿意（常引出限制条件）', e: 'Je veux bien t\'aider, mais je n\'ai que dix minutes.', et: '我可以帮你，不过我只有十分钟。' },
        { w: 'ça va être compliqué', t: '恐怕有点难办（常作委婉拒绝）', e: 'Finir ce soir ? Ça va être compliqué, il manque encore deux validations.', et: '今晚完成？恐怕有点难，还差两项审核。' },
        { w: 'ce n\'est pas que... mais...', t: '不是……，只是/而是……（先排除一种解释，再引出真正的理由；可用于委婉拒绝）', e: 'Ce n\'est pas que ton idée soit mauvaise, mais elle coûte trop cher.', et: '不是你的主意不好，只是成本太高。' },
        { w: 'je vais voir', t: '我看看再说（可认真考虑，也可暂不答应）', e: 'Je vais voir si je peux libérer mon après-midi.', et: '我看看下午能不能腾出时间。' },
        { w: 'on va se pencher sur la question', t: '我们会研究这个问题（可认真处理，也可正式拖延）', e: 'On a bien noté votre demande et on va se pencher sur la question.', et: '我们已经记下您的要求，会研究这个问题。' },
        { w: 'on en reparle', t: '我们以后再谈（暂缓决定）', e: 'On en reparle quand tu auras discuté avec tes parents.', et: '等你和你父母谈过以后，我们再说。' },
        { w: 'je ne dis pas non', t: '我不是不同意（有所保留的接受）', e: 'Je ne dis pas non, mais j\'ai besoin d\'un peu de temps.', et: '我不是不同意，不过我需要一点时间。' },
        { w: 'si tu veux', t: '随你；你要是愿意也行（可带勉强）', e: '— On regarde encore ce film ? — Si tu veux, mais je risque de m\'endormir.', et: '——还接着看这部电影吗？——你要看也行，不过我可能会睡着。' }
      ] },
      { id: 'fr-u21-l3', title: '缓和、限定与保留', items: [
        { w: 'disons que', t: '这么说吧（缓和评价）', e: 'Disons que ta présentation manque encore un peu de clarté.', et: '这么说吧，你的陈述还不够清楚。' },
        { w: 'on va dire', t: '就先当作；权且算是（口语保留说法）', e: 'On va dire que c\'était un essai, et on recommencera demain.', et: '这次就先当它是一次尝试，我们明天重来。' },
        { w: 'en principe', t: '原则上；按说（常留例外余地）', e: 'En principe, la réunion finit à dix-sept heures, mais elle peut déborder.', et: '会议原则上五点结束，不过可能延长。' },
        { w: 'a priori', t: '初步看来；按理说（尚待确认）', e: 'A priori, tout est en règle, mais je vérifierai les pièces une dernière fois.', et: '初步看一切都符合规定，不过我会最后再核对一遍材料。' },
        { w: 'dans l\'ensemble', t: '总体上；大体来说', e: 'Dans l\'ensemble, je suis d\'accord, sauf sur le dernier point.', et: '总体上我同意，只是最后一点除外。' },
        { w: 'pas forcément', t: '不一定；未必', e: 'Un service plus cher n\'est pas forcément meilleur.', et: '更贵的服务不一定更好。' },
        { w: 'à la rigueur', t: '实在不行也可以；勉强说（让步或保留）', e: 'À la rigueur, je peux venir samedi, mais dimanche m\'arrangerait davantage.', et: '实在不行我周六可以来，不过周日对我更方便。' },
        { w: 'pour autant que je sache', t: '据我所知', e: 'Pour autant que je sache, personne n\'a encore validé cette dépense.', et: '据我所知，还没有人批准这笔开支。' }
      ] }
    ] },
    { id: 'fr-u22', level: 'C2', title: '第二十二单元 · Argumentation et preuves', desc: 'Construire une thèse, concéder avec nuance et citer ses sources', color: '#2563eb', lessons: [
      { id: 'fr-u22-l1', title: 'Thèse et preuves', items: [
        { w: 'étayer une thèse', t: '支撑论点（书面，学术论证）', e: 'Il ne suffit pas d\'affirmer ; encore faut-il étayer sa thèse par des faits vérifiables.', et: '光下断语不够，还得用可核实的事实来支撑论点。' },
        { w: 'à l\'appui de', t: '作为……的佐证（书面）', e: 'Le chercheur cite trois enquêtes à l\'appui de sa démonstration.', et: '研究者引用了三项调查来佐证自己的论证。' },
        { w: 'force est de constater que', t: '不得不承认（书面，常引出不利事实）', e: 'Force est de constater que les chiffres contredisent la version officielle.', et: '不得不承认，数字与官方说法相矛盾。' },
        { w: 'preuve empirique', t: '实证证据', e: 'À ce jour, aucune preuve empirique ne vient confirmer cette hypothèse.', et: '迄今为止，没有任何实证证据能证实这一假设。' },
        { w: 'corrélation n\'est pas causalité', t: '相关不等于因果（论辩套语）', e: 'Les deux courbes se suivent, mais corrélation n\'est pas causalité.', et: '两条曲线走势一致，但相关并不等于因果。' },
        { w: 'faire la part belle à', t: '把最好的部分留给；大幅偏重（中性，常描述取材或论证的倾斜）', e: 'Cet essai fait la part belle aux témoignages et néglige les statistiques.', et: '这篇文章大幅倚重证词，却忽略了统计数据。' },
        { w: 'un argument massue', t: '杀手锏式的论据（一击定胜负）', e: 'Son argument massue, c\'est le coût : personne ne peut le contester.', et: '他的杀手锏是成本：这一点谁也无法反驳。' },
        { w: 'réfuter point par point', t: '逐点驳斥', e: 'Elle a réfuté point par point les objections soulevées dans la salle.', et: '她逐点驳斥了会场上提出的反对意见。' }
      ] },
      { id: 'fr-u22-l2', title: 'Concession et nuance', items: [
        { w: 'il n\'en demeure pas moins que', t: '尽管如此，仍然……（书面让步）', e: 'Les résultats sont encourageants ; il n\'en demeure pas moins que l\'échantillon reste limité.', et: '结果令人鼓舞；尽管如此，样本仍然有限。' },
        { w: 'certes... mais...', t: '诚然……不过……（先承认再转折）', e: 'Certes, la mesure est impopulaire, mais elle est indispensable.', et: '诚然，这项措施不受欢迎，但它是必不可少的。' },
        { w: 'à y regarder de plus près', t: '仔细一看；再往细里看', e: 'À y regarder de plus près, les deux rapports disent presque la même chose.', et: '仔细一看，两份报告说的几乎是同一件事。' },
        { w: 'sous réserve de', t: '以……为条件；有待……确认（正式）', e: 'Nous acceptons le principe, sous réserve de l\'accord du trésorier.', et: '我们原则上接受，但还需财务主管同意。' },
        { w: 'nuancer son propos', t: '把话说得更有分寸；补充细微差别', e: 'Permettez-moi de nuancer mon propos : je visais certains cas, pas tous.', et: '请允许我把话说得更准确些：我指的是某些情况，并非全部。' },
        { w: 'tomber dans le sophisme', t: '陷入诡辩', e: 'À vouloir tout prouver, on finit par tomber dans le sophisme.', et: '一味想证明一切，最后反而会陷入诡辩。' },
        { w: 'tout bien considéré', t: '通盘考虑之后（书面总结）', e: 'Tout bien considéré, la solution la moins spectaculaire est sans doute la plus solide.', et: '通盘考虑之后，最不惹眼的方案恐怕才是最稳妥的。' },
        { w: 'à supposer que', t: '假定……（接虚拟式，书面）', e: 'À supposer que les chiffres soient exacts, la baisse reste marginale.', et: '就算这些数字准确，降幅也仍然微不足道。' }
      ] },
      { id: 'fr-u22-l3', title: 'Citation et sources', items: [
        { w: 'citer ses sources', t: '注明出处（学术规范）', e: 'Un travail sérieux se reconnaît à la manière dont il cite ses sources.', et: '一项研究是否严谨，看它如何注明出处便知。' },
        { w: 'd\'après les travaux de', t: '根据……的研究', e: 'D\'après les travaux de Mme Arnaud, cette pratique remonte au XIXe siècle.', et: '根据阿尔诺女士的研究，这种做法可追溯到十九世纪。' },
        { w: 'entre guillemets', t: '放在引号里（表示引用原话）', e: 'Le mot « crise » est mis entre guillemets, car l\'auteur le juge excessif.', et: '“危机”一词加了引号，因为作者认为这个说法过头了。' },
        { w: 'paraphraser', t: '转述；改写（不逐字引用）', e: 'Il vaut mieux paraphraser ce passage que le recopier tel quel.', et: '这一段与其原样照抄，不如转述。' },
        { w: 'source primaire', t: '一手资料；原始来源', e: 'L\'historien remonte toujours aux sources primaires avant de conclure.', et: '这位历史学家总是先追溯一手资料再下结论。' },
        { w: 'référence bibliographique', t: '参考文献条目', e: 'Chaque référence bibliographique doit indiquer l\'auteur, l\'année et l\'éditeur.', et: '每条参考文献都要写明作者、年份和出版社。' },
        { w: 'attribuer une citation à', t: '把一句引语归于（某人）', e: 'On attribue souvent cette phrase à Voltaire, à tort.', et: '人们常把这句话归到伏尔泰名下，其实是错的。' },
        { w: 'une citation tronquée', t: '被截断的引文；断章取义', e: 'Une citation tronquée peut faire dire à un auteur le contraire de sa pensée.', et: '断章取义的引文，能让作者说出与其本意相反的话。' }
      ] }
    ] },
    { id: 'fr-u23', level: 'C2', title: '第二十三单元 · Négociation et conflit', desc: 'Poser ses conditions, lire les réticences et sceller l’accord', color: '#7c3aed', lessons: [
      { id: 'fr-u23-l1', title: 'Poser ses conditions', items: [
        { w: 'poser ses conditions', t: '提出条件（谈判）', e: 'Avant de signer, elle a posé ses conditions clairement.', et: '签字之前，她把自己的条件说得很清楚。' },
        { w: 'à condition que', t: '只要……；条件是……（接虚拟式）', e: 'J\'accepte, à condition que le délai soit respecté.', et: '我接受，条件是期限必须遵守。' },
        { w: 'faute de quoi', t: '否则；不然的话（正式）', e: 'Le document doit être signé avant vendredi, faute de quoi le dossier sera classé.', et: '文件必须在周五前签字，否则这份材料就会被归档了结。' },
        { w: 'en contrepartie', t: '作为交换；相应地', e: 'Nous acceptons une baisse de prix, mais nous demandons, en contrepartie, un délai plus long.', et: '我们接受降价，但作为交换，要求把期限放宽。' },
        { w: 'marge de manœuvre', t: '回旋余地；可操作空间', e: 'Je n\'ai guère de marge de manœuvre sur ce point.', et: '在这一点上，我几乎没有回旋余地。' },
        { w: 'prendre acte de', t: '注意到并予以确认（正式）', e: 'Nous prenons acte de votre refus et en tirerons les conséquences.', et: '我们已注意到您的拒绝，并将据此处理。' },
        { w: 'dans la limite de', t: '在……范围内（不超出）', e: 'Nous pouvons intervenir dans la limite de nos compétences.', et: '我们可以在自身职权范围内介入。' },
        { w: 'accorder un délai', t: '给予（宽限）期限', e: 'Le fournisseur nous a accordé un délai de deux semaines.', et: '供应商给了我们两周的期限。' }
      ] },
      { id: 'fr-u23-l2', title: 'Réagir aux réticences', items: [
        { w: 'une réticence', t: '迟疑；不情愿（未必明说）', e: 'Sa réticence se lisait moins dans ses mots que dans ses silences.', et: '他的迟疑与其说写在话里，不如说藏在沉默里。' },
        { w: 'faire part de ses réserves', t: '表示保留意见（正式）', e: 'Le comité a fait part de ses réserves quant au calendrier.', et: '委员会对时间表表示了保留意见。' },
        { w: 'entendre les craintes', t: '听取并重视顾虑', e: 'Avant de répondre, il faut entendre les craintes de l\'équipe.', et: '回应之前，先要听取团队的顾虑。' },
        { w: 'lever les objections', t: '消除异议', e: 'Une démonstration chiffrée lèverait bien des objections.', et: '一份带数字的说明能消除不少异议。' },
        { w: 'renvoyer la balle', t: '把问题推回给对方（口语）', e: 'Il m\'a renvoyé la balle en me demandant ce que j\'en pensais.', et: '他把球又踢回给我，问我是怎么想的。' },
        { w: 'noyer le poisson', t: '含糊其辞；故意把水搅浑（口语）', e: 'Quand on lui parle d\'argent, il noie le poisson.', et: '一谈到钱，他就含糊其辞。' },
        { w: 'prendre la mesure de', t: '认识到……的分量；估量到', e: 'Elle a mis du temps à prendre la mesure de la colère de ses collègues.', et: '她过了很久才意识到同事们有多愤怒。' },
        { w: 'ménager la susceptibilité de', t: '照顾……的面子或敏感情绪', e: 'Il faut ménager la susceptibilité du client sans céder sur le fond.', et: '既要照顾客户的面子，又不能在实质问题上让步。' }
      ] },
      { id: 'fr-u23-l3', title: 'Sceller l’accord', items: [
        { w: 'sceller un accord', t: '敲定协议（正式，带仪式感）', e: 'Les deux parties ont scellé un accord après trois nuits de négociations.', et: '经过三夜谈判，双方敲定了协议。' },
        { w: 'tomber d\'accord', t: '达成一致', e: 'Nous sommes tombés d\'accord sur le principe, pas encore sur le montant.', et: '我们在原则上达成了一致，金额还没谈拢。' },
        { w: 'une formule de compromis', t: '折中方案；折中措辞', e: 'La formule de compromis satisfait tout le monde sans rien régler.', et: '这个折中方案让大家都满意，却什么问题都没解决。' },
        { w: 'une clause', t: '条款（合同、协议中的）', e: 'La clause de confidentialité court sur cinq ans.', et: '保密条款的有效期是五年。' },
        { w: 'entériner', t: '正式批准；予以认可', e: 'Le conseil a entériné la décision sans débat.', et: '理事会未经辩论就正式批准了这项决定。' },
        { w: 'rester lettre morte', t: '形同虚设；无人执行（指条款、承诺）', e: 'Sans sanction, la règle risque de rester lettre morte.', et: '没有惩罚措施，这条规定很可能形同虚设。' },
        { w: 'respecter ses engagements', t: '履行承诺', e: 'Nous respecterons nos engagements, même si le contexte a changé.', et: '即使情况有变，我们也会履行承诺。' },
        { w: 'conclure un marché', t: '达成交易；谈成一笔买卖', e: 'Ils ont conclu un marché équitable, chacun y trouvant son compte.', et: '他们达成了一笔公平的交易，双方都各得其所。' }
      ] }
    ] },
    { id: 'fr-u24', level: 'C2', title: '第二十四单元 · Sommet : nuances, cohésion et posture', desc: 'Distinguer intensité et registre, enchaîner le discours et lire la posture implicite', color: '#0f766e', lessons: [
      { id: 'fr-u24-l1', title: 'Nuances lexicales', items: [
        { w: 'à peine', t: '几乎不；才刚刚（弱化程度，书面偏多）', e: 'Il a à peine ouvert la bouche que la salle s\'est tue.', et: '他刚一开口，全场就安静了。' },
        { w: 'non sans', t: '并非没有；不无（双重否定，书面，暗示有代价）', e: 'Elle a accepté, non sans avoir longuement hésité.', et: '她接受了，不过此前犹豫了很久。' },
        { w: 'tout au plus', t: '至多；充其量（把上限压到最低）', e: 'Cette correction prendra tout au plus dix minutes.', et: '这个修改最多花十分钟。' },
        { w: 'à bien des égards', t: '在许多方面（正式，用于总体评价）', e: 'À bien des égards, ce rapport dit la même chose que le précédent.', et: '在许多方面，这份报告和上一份说的是同一件事。' },
        { w: 'pour peu que', t: '只要稍微……就（接虚拟式，书面，强调条件之轻）', e: 'Pour peu que l\'on y prête attention, le procédé saute aux yeux.', et: '只要稍加留意，这个手法就一目了然。' },
        { w: 'si tant est que', t: '假如真的……的话（对前提本身存疑，正式）', e: 'Si tant est que cette distinction existe, elle reste fragile.', et: '就算这种区分真的存在，它也很脆弱。' },
        { w: 'bel et bien', t: '确实；真的（强调与预期相反的事实）', e: 'La rumeur était bel et bien fondée.', et: '那个传言确实有根据。' },
        { w: 'à proprement parler', t: '严格说来；就本义而言（纠正用词过宽）', e: 'Ce n\'est pas, à proprement parler, une erreur.', et: '严格说来，这不算一个错误。' }
      ] },
      { id: 'fr-u24-l2', title: 'Cohésion et rhétorique', items: [
        { w: 'un fil conducteur', t: '贯穿线索（把分散论述串起来的主线）', e: 'Un même fil conducteur relie les cinq chapitres.', et: '一条贯穿线索把五章连在一起。' },
        { w: 'à cet égard', t: '在这方面；就此而言（正式衔接，回指上文）', e: 'À cet égard, votre remarque est plus qu\'utile.', et: '在这方面，您的意见非常有用。' },
        { w: 'ce faisant', t: '这样做时、在这一过程中（书面，引出伴随后果）', e: 'Ce faisant, il a fermé la porte à toute négociation.', et: '这样一来，他就把谈判的大门关上了。' },
        { w: 'cela étant', t: '话虽如此；既然如此（先承认再转折，正式）', e: 'Cela étant, nous pouvons encore revenir sur le calendrier.', et: '话虽如此，时间表我们还可以再谈。' },
        { w: 'il reste que', t: '然而仍然……（承认对方后守住核心分歧）', e: 'Il reste que personne n\'a répondu à la question de fond.', et: '然而，实质问题仍然没有人回答。' },
        { w: 'un raisonnement circulaire', t: '循环论证（把结论当前提，逻辑谬误）', e: 'Son argument tourne en rond : c\'est un raisonnement circulaire.', et: '他的论证在原地打转：这是循环论证。' },
        { w: 'un faux dilemme', t: '假两难（只给两个选项，掩盖其他可能）', e: 'Poser la question ainsi, c\'est construire un faux dilemme.', et: '这样提问，就是在制造一个虚假的两难。' },
        { w: 'la charge de la preuve', t: '举证责任（谁主张，谁举证）', e: 'La charge de la preuve incombe à celui qui affirme, non à celui qui doute.', et: '举证责任在主张者一方，而不在怀疑者一方。' }
      ] },
      { id: 'fr-u24-l3', title: 'Posture, face et ironie', items: [
        { w: 'sauver la face', t: '保全面子（让对方体面退场，言外之意是不揭穿）', e: 'Il a accepté de reculer pour sauver la face.', et: '他同意退一步，好保全面子。' },
        { w: 'un faux-semblant', t: '假象；伪装（表面的样子并非实情）', e: 'Cette neutralité n\'était qu\'un faux-semblant.', et: '那种中立只是一层假象。' },
        { w: 'une pointe d\'ironie', t: '一丝讽刺（强度轻，藏在语气里）', e: 'Il a répondu avec une pointe d\'ironie à peine dissimulée.', et: '他回答时带着一丝几乎不加掩饰的讽刺。' },
        { w: 'une litote', t: '曲言法（用否定弱化表达，实际语气更重）', e: 'Dire « ce n\'est pas brillant » est une litote pour « c\'est catastrophique ».', et: '说“这不算出色”，其实是“糟透了”的曲言说法。' },
        { w: 'le persiflage', t: '挖苦；讥讽（书面，笑意里带轻视）', e: 'Son persiflage agace plus qu\'il ne blesse.', et: '他的挖苦让人恼火，却算不上伤人。' },
        { w: 'désamorcer une tension', t: '化解紧张（抢在冲突爆发前处理）', e: 'Une phrase d\'humour a suffi à désamorcer la tension.', et: '一句玩笑就足以化解紧张。' },
        { w: 'une pirouette', t: '巧妙的闪避；转身脱身（回避问题而不失体面）', e: 'Il a esquivé la question par une pirouette.', et: '他一个转身，把问题绕开了。' },
        { w: 'un air pincé', t: '板着脸；不悦的神情（无声的否定）', e: 'Elle a répondu d\'un air pincé que tout allait très bien.', et: '她板着脸回答说一切都很好。' }
      ] }
    ] },
    { id: 'fr-u25', level: 'C2', title: '第二十五单元 · Sommet : quantité, attribution et clôture', desc: 'Quantités floues, attribution des causes et des responsabilités, refus qui ferment proprement', color: '#0f766e', lessons: [
      { id: 'fr-u25-l1', title: 'Quantité et degré', items: [
        { w: 'une poignée de', t: '一小撮；寥寥几个（强调数量之少，常带轻蔑或惋惜）', e: 'Une poignée de lecteurs a répondu à l\'enquête, trop peu pour conclure.', et: '只有寥寥几位读者回复了调查，少到无法下结论。' },
        { w: 'à foison', t: '大量地、丰富地（书面，中性偏描述）', e: 'Le rapport offre des exemples à foison, au point qu\'on s\'y perd.', et: '报告里的例子多得是，多到让人迷失。' },
        { w: 'un tant soit peu', t: '哪怕一点点（书面，强调程度之微，多用于条件句）', e: 'Si vous êtes un tant soit peu attentif, la contradiction saute aux yeux.', et: '您只要稍微留心一点，矛盾就一目了然。' },
        { w: 'à l\'excès', t: '过度地；到了过分的程度（书面，带批评意味）', e: 'Il a insisté à l\'excès, jusqu\'à rendre sa position suspecte.', et: '他过分地坚持，反倒让自己的立场显得可疑。' },
        { w: 'par-dessus tout', t: '尤其；首要的是（把某一项排在所有之上）', e: 'Ce qu\'elle redoute par-dessus tout, c\'est de devoir se justifier.', et: '她最怕的，是不得不为自己辩解。' },
        { w: 'à mesure que', t: '随着（两件事同步推进，书面，后接直陈式）', e: 'À mesure que les données s\'accumulaient, la confiance du comité diminuait.', et: '随着数据不断积累，委员会的信任却在下降。' },
        { w: 'jusqu\'à un certain point', t: '在一定程度上；到某个限度为止（肯定之后暗含保留）', e: 'Votre analyse est juste jusqu\'à un certain point, mais elle ignore les coûts.', et: '您的分析在某种程度上是对的，但它忽略了成本。' },
        { w: 'pour ainsi dire', t: '可以说；姑且这么说（弱化或反讽地用词，书面）', e: 'Il a, pour ainsi dire, réécrit l\'histoire de la réunion.', et: '他可以说是把会议的历史重写了一遍。' }
      ] },
      { id: 'fr-u25-l2', title: 'Cause et attribution', items: [
        { w: 'imputer qch à qn', t: '把……归因于、算在……头上（正式，中性到略带追责）', e: 'On a imputé l\'échec du lancement au calendrier, alors que le produit était mal défini.', et: '人们把发布失败归咎于时间安排，其实是产品定位不清。' },
        { w: 'être à l\'origine de', t: '是……的起因（中性陈述，用于事实链条）', e: 'Une erreur de saisie est à l\'origine de tout le malentendu.', et: '一切误会的起因是一个录入错误。' },
        { w: 'découler de', t: '由……而来；从……推演得出（书面，强调逻辑上必然）', e: 'Cette conclusion découle de deux hypothèses jamais discutées.', et: '这个结论由两个从未被讨论的假设推演而来。' },
        { w: 's\'expliquer par', t: '可以用……来解释（给出原因，不必然等于辩解）', e: 'Le retard s\'explique en partie par la grève des transports.', et: '延误有一部分可以用交通罢工来解释。' },
        { w: 'sous l\'effet de', t: '在……的作用下（强调外部因素引发变化）', e: 'Sous l\'effet de la rumeur, les commandes ont chuté en trois jours.', et: '在传言的作用下，订单三天内就大幅下滑。' },
        { w: 'en dernière analyse', t: '归根结底；最终分析下来（正式，收束因果链）', e: 'En dernière analyse, c\'est un problème de gouvernance, non de budget.', et: '归根结底，这是治理问题，而不是预算问题。' },
        { w: 'faire la part des choses', t: '客观区分、把事实和情绪分开（不把两件事混为一谈）', e: 'Il faut faire la part des choses entre ce qui a été dit et ce qui a été fait.', et: '要分清说过的和做过的，别混为一谈。' },
        { w: 'prêter des intentions à qn', t: '臆测某人的动机（暗指这种归因缺乏证据）', e: 'Lui prêter des intentions qu\'il n\'a jamais exprimées, c\'est déjà l\'accuser.', et: '把从不曾说过的动机安到他头上，本身就已经是在指控他。' }
      ] },
      { id: 'fr-u25-l3', title: 'Refuser et conclure', items: [
        { w: 'décliner une offre', t: '婉拒（正式，比 refuser 客气，留有余地）', e: 'Elle a décliné l\'offre avec une formule si polie qu\'on n\'a pas insisté.', et: '她婉拒了这个邀请，措辞客气得让人不好再劝。' },
        { w: 'se récuser', t: '声明自己不便、无权参与（正式，回避而不失礼）', e: 'Le juge s\'est récusé, ayant travaillé avec l\'une des parties.', et: '法官声明回避，因为他曾与其中一方共事。' },
        { w: 'opposer un refus net', t: '明确拒绝（语气硬，不给回旋余地）', e: 'Le ministère a opposé un refus net à la demande de dérogation.', et: '部里对这项豁免申请明确拒绝。' },
        { w: 'sans ambiguïté', t: '毫不含糊地（强调表态清楚，杜绝误读）', e: 'Il a précisé sans ambiguïté qu\'il ne reviendrait pas sur sa décision.', et: '他明确表示，不会改变自己的决定。' },
        { w: 'à mon grand regret', t: '十分遗憾（客套式拒绝的缓冲语，正式书信常见）', e: 'À mon grand regret, je ne pourrai pas assister à la séance de vendredi.', et: '十分遗憾，我无法出席周五的会议。' },
        { w: 'pour autant', t: '但即便如此；但并不能据此（多与否定连用，拒绝顺势推论）', e: 'La méthode est discutable ; elle n\'est pas, pour autant, sans valeur.', et: '这套方法值得商榷，但也不能因此说它没有价值。' },
        { w: 'en définitive', t: '最终；说到底（正式，作最后判断）', e: 'En définitive, nous refusons l\'accord, mais nous restons ouverts au dialogue.', et: '说到底，我们拒绝这份协议，但仍愿意对话。' },
        { w: 'clore le débat', t: '结束讨论；把争论收口（有时暗示不愿再听）', e: 'Une seule phrase du président a suffi à clore le débat.', et: '主席一句话就把讨论收了口。' }
      ] }
    ] }
  ],
  dialogues: [
    {
      id: 'fr-d1', level: 'A1', title: '楼下聊天气', scene: '小区花园',
      setup: '你下楼时遇到邻居马丁太太，她正在遛狗，你们聊起今天的好天气和周末安排。',
      lines: [
        { npc: 'Bonjour ! Quel temps magnifique aujourd\'hui, n\'est-ce pas ?', tr: '你好！今天天气真好，不是吗？' },
        { ask: '同意对方，并说今天早上很温暖。', me: [
          { t: 'Oui, il fait très doux ce matin.', tr: '是的，今天早上很温暖。', best: true },
          { t: 'Oui. Temps. Bon.', tr: '是的。天气。好。' },
          { t: 'Non, j\'aime la pluie.', tr: '不，我喜欢下雨。' }
        ] },
        { npc: 'La météo annonce du soleil pour le week-end.', tr: '天气预报说周末是晴天。' },
        { ask: '提议周六一起去公园野餐。', me: [
          { t: 'Super ! On fait un pique-nique au parc samedi ?', tr: '太好了！周六我们去公园野餐怎么样？', best: true },
          { t: 'Parc. Samedi. Bien.', tr: '公园。周六。好。' },
          { t: 'Je n\'aime pas le parc.', tr: '我不喜欢公园。' }
        ] },
        { npc: 'Bonne idée ! Mais s\'il pleut, on reste à la maison.', tr: '好主意！不过要是下雨，我们就待在家里。' },
        { say: 'D\'accord. J\'apporte les boissons et vous apportez les sandwichs.', tr: '好的。我带饮料，您带三明治。', hint: '分工：说自己带什么、请对方带什么' },
        { npc: 'Parfait ! Ah, le vent se lève, je rentre avec mon chien.', tr: '太好了！啊，起风了，我带狗回家了。' },
        { ask: '礼貌地道别。', me: [
          { t: 'Au revoir, madame Martin. Bonne journée !', tr: '再见，马丁太太。祝您一天愉快！', best: true },
          { t: 'Bye bye. Salut.', tr: '拜拜。嗨。' },
          { t: 'Je rentre aussi, vite.', tr: '我也回家，快点。' }
        ] }
      ]
    },
    {
      id: 'fr-d2', level: 'A2', title: '中介带看公寓', scene: '出租公寓内',
      setup: '你通过中介看一套两居室，想了解户型、房租和入住时间。',
      lines: [
        { npc: 'Bonjour, entrez. Voilà le salon et la cuisine ouverte.', tr: '您好，请进。这是客厅和开放式厨房。' },
        { ask: '问这套公寓有几个房间、在几楼。', me: [
          { t: 'Il y a combien de pièces, et à quel étage ?', tr: '有几个房间？在几楼？', best: true },
          { t: 'Combien. Étage.', tr: '多少。楼层。' },
          { t: 'C\'est grand, ici ?', tr: '这里很大吗？' }
        ] },
        { npc: 'Deux chambres, un salon et une salle de bains, au quatrième étage avec ascenseur.', tr: '两间卧室、一个客厅和一个卫生间，在四楼，有电梯。' },
        { npc: 'Le quartier est calme et le marché est tout près.', tr: '街区很安静，市场就在附近。' },
        { ask: '问房租多少、含不含杂费。', me: [
          { t: 'Quel est le loyer, charges comprises ?', tr: '房租多少？含杂费吗？', best: true },
          { t: 'Loyer cher ?', tr: '房租贵吗？' },
          { t: 'Je peux payer moins ?', tr: '我能少付点吗？' }
        ] },
        { npc: 'Huit cent cinquante euros par mois, avec cent euros de charges.', tr: '每月八百五十欧元，另加一百欧元杂费。' },
        { say: 'C\'est un peu cher, mais l\'appartement est clair et bien situé.', tr: '有点贵，不过公寓采光好，位置也不错。', hint: '先说价格感受，再肯定房子的优点' },
        { npc: 'La caution est d\'un mois. Vous pouvez emménager le premier du mois prochain.', tr: '押金一个月。您下个月一号就可以搬进来。' },
        { ask: '说想再考虑一天，明天给答复。', me: [
          { t: 'Je voudrais réfléchir encore un jour, je vous réponds demain.', tr: '我想再考虑一天，明天给您答复。', best: true },
          { t: 'Oui, je prends tout de suite.', tr: '好，我马上就租。' },
          { t: 'L\'appartement est petit.', tr: '公寓太小了。' }
        ] }
      ]
    },
    {
      id: 'fr-d3', level: 'B1', title: '屏幕与我们的生活', scene: '公司食堂，午餐时间',
      setup: '你和同事卢卡吃午饭，聊到孩子玩手机、远程办公，以及一家人怎么和屏幕相处。',
      lines: [
        { npc: 'Tu as vu le reportage d\'hier soir sur les écrans et les enfants ?', tr: '你昨晚看了那个关于屏幕与孩子的报道吗？' },
        { ask: '说看了一部分，并给出自己的评价。', me: [
          { t: 'J\'en ai vu une partie, et je l\'ai trouvé assez inquiétant.', tr: '我看了一部分，觉得挺让人担忧的。', best: true },
          { t: 'J\'ai vu la télé hier.', tr: '我昨天看了电视。' },
          { t: 'Tous les écrans sont dangereux.', tr: '所有屏幕都危险。' }
        ] },
        { npc: 'Moi aussi. Avant, on jouait dehors jusqu\'au soir. Aujourd\'hui, tout se passe sur un écran.', tr: '我也是。以前我们在外面玩到天黑，如今一切都发生在屏幕上。' },
        { ask: '表示认同，并给对方提个建议。', me: [
          { t: 'C\'est vrai. À ta place, j\'instaurerais des règles claires à la maison.', tr: '确实。我要是你，就会在家里立下明确的规矩。', best: true },
          { t: 'Les enfants doivent dormir.', tr: '孩子们必须睡觉。' },
          { t: 'C\'est la faute des téléphones.', tr: '这都怪手机。' }
        ] },
        { npc: 'On essaie, mais si nous leur retirions tout d\'un coup, ils se révolteraient.', tr: '我们在尝试，可要是突然全没收，他们会反抗的。' },
        { say: 'Je comprends. Quand j\'étais adolescent, mes parents m\'ont surpris une fois devant l\'ordinateur à minuit.', tr: '我理解。我十几岁的时候，父母也曾在半夜抓到我在电脑前。', hint: '用自己过去的经历表示理解' },
        { npc: 'Exactement ! Et le télétravail n\'arrange rien : nous aussi, nous passons la journée devant un écran.', tr: '就是说啊！远程办公也没帮上忙：我们自己也是整天对着屏幕。' },
        { ask: '提一个一家人都能做到的办法。', me: [
          { t: 'Et si vous fixiez une heure sans écran, par exemple pendant le dîner ?', tr: '你们要不要定一个无屏幕时段，比如吃晚饭的时候？', best: true },
          { t: 'Vous devez acheter plus d\'écrans.', tr: '你们应该多买几块屏幕。' },
          { t: 'Je n\'ai pas d\'enfants, alors...', tr: '我没有孩子，所以……' }
        ] },
        { npc: 'Pas bête ! On dînerait ensemble, on parlerait vraiment, et les téléphones resteraient dans l\'autre pièce.', tr: '这主意不赖！大家一起吃饭、真正地聊聊天，手机放在另一个房间。' },
        { say: 'Voilà l\'idée. On ne changera pas la technologie, mais on peut changer nos habitudes.', tr: '就是这个意思。我们改变不了技术，但可以改变自己的习惯。', hint: '总结观点，给对话收尾' }
      ]
    },
    {
      id: 'fr-d4', level: 'A1', title: '在餐厅点餐', scene: '街边小餐馆',
      setup: '你和朋友走进一家小餐馆，服务员带你们入座，你们点菜、要水，最后买单。',
      lines: [
        { npc: 'Bonsoir, vous êtes deux ? Une table près de la fenêtre ?', tr: '晚上好，两位吗？要靠窗的桌子吗？' },
        { ask: '接受靠窗的位子，并要两份菜单。', me: [
          { t: 'Oui, très bien. Deux cartes, s\'il vous plaît.', tr: '好的，很不错。请给我们两份菜单。', best: true },
          { t: 'Fenêtre. Deux. Merci.', tr: '窗。两个。谢谢。' },
          { t: 'Non, je ne mange pas ici.', tr: '不，我不在这里吃饭。' }
        ] },
        { npc: 'Voilà. Vous avez choisi ?', tr: '给您。您选好了吗？' },
        { ask: '点一份烤鸡和一份沙拉，再要一壶水。', me: [
          { t: 'Oui, un poulet rôti, une salade et une carafe d\'eau.', tr: '好了，一份烤鸡、一份沙拉，还要一壶水。', best: true },
          { t: 'Je voudrais l\'addition tout de suite.', tr: '我想马上买单。' },
          { t: 'Quel est le prix du train ?', tr: '火车票多少钱？' }
        ] },
        { npc: 'Très bien. Et comme boisson ?', tr: '很好。那饮料呢？' },
        { say: 'De l\'eau, ça ira. Et le plat est très épicé ?', tr: '水就可以了。这道菜很辣吗？', hint: '说自己只要水，再问菜辣不辣' },
        { npc: 'Non, pas du tout. Je vous apporte le pain tout de suite. Bon appétit ! Vous voulez un dessert ?', tr: '不，一点也不辣。我马上给您上面包。请慢用！要甜点吗？' },
        { ask: '说甜点今晚就不吃了，现在请结账。', me: [
          { t: 'Pas ce soir, merci. L\'addition, s\'il vous plaît.', tr: '今晚不了，谢谢。请买单。', best: true },
          { t: 'Oui, je veux dormir ici.', tr: '好，我想在这里睡觉。' },
          { t: 'Dessert. Addition. Vite.', tr: '甜点。账单。快。' }
        ] },
        { npc: 'Trente-deux euros. Vous payez par carte ?', tr: '三十二欧元。您刷卡吗？' },
        { say: 'Oui, par carte. Le repas était très bon, merci.', tr: '是的，刷卡。这顿饭很好吃，谢谢。', hint: '确认付款方式，再夸一句菜好吃' }
      ]
    },
    {
      id: 'fr-d5', level: 'A1', title: '在商店买东西', scene: '服装店',
      setup: '你想买一件毛衣，店员过来招呼你，你问尺码和颜色，试穿之后决定买下。',
      lines: [
        { npc: 'Bonjour, je peux vous aider ?', tr: '您好，需要帮忙吗？' },
        { ask: '说自己在找一件毛衣。', me: [
          { t: 'Oui, je cherche un pull.', tr: '是的，我在找一件毛衣。', best: true },
          { t: 'Non, je cherche un médecin.', tr: '不，我在找医生。' },
          { t: 'Pull. Cherchez.', tr: '毛衣。找。' }
        ] },
        { npc: 'Nous avons ce modèle en gris, en bleu et en noir.', tr: '这款我们有灰色、蓝色和黑色。' },
        { ask: '问有没有四十码，并说想试灰色的那件。', me: [
          { t: 'Vous l\'avez en taille quarante ? Je peux essayer le gris ?', tr: '有四十码吗？我可以试一下灰色的吗？', best: true },
          { t: 'Combien de pièces dans la maison ?', tr: '房子里有几个房间？' },
          { t: 'Gris. Quarante. Essayer.', tr: '灰色。四十。试。' }
        ] },
        { npc: 'Bien sûr, la cabine est là-bas. Ça va ?', tr: '当然，试衣间在那边。合适吗？' },
        { say: 'C\'est un peu grand. Vous avez une taille plus petite ?', tr: '有点大。有小一号的吗？', hint: '说尺码偏大，问有没有更小的' },
        { npc: 'Tenez, trente-huit. C\'est parfait pour vous.', tr: '给您，三十八码。这个正适合您。' },
        { ask: '决定买这件，问价格并确认能不能刷卡。', me: [
          { t: 'Je le prends. Il coûte combien ? Je peux payer par carte ?', tr: '我买了。多少钱？可以刷卡吗？', best: true },
          { t: 'Je voudrais réserver une table.', tr: '我想订一张桌子。' },
          { t: 'Prends. Combien. Carte.', tr: '买。多少。卡。' }
        ] },
        { npc: 'Quarante-cinq euros, et bien sûr que oui. Voici votre ticket.', tr: '四十五欧元，当然可以。这是您的小票。' },
        { say: 'Merci. Si ça ne va pas, je peux l\'échanger ?', tr: '谢谢。如果不合适，我可以来换吗？', hint: '问清楚退换的条件' }
      ]
    },
    {
      id: 'fr-d6', level: 'A2', title: '在诊所看医生', scene: '社区诊所',
      setup: '你咳嗽发烧两天了，预约后到诊所，向医生说明症状和过敏史，并记下医嘱。',
      lines: [
        { npc: 'Bonjour, asseyez-vous. Qu\'est-ce qui vous amène ?', tr: '您好，请坐。您哪里不舒服？' },
        { ask: '说发烧咳嗽两天，喉咙也疼。', me: [
          { t: 'J\'ai de la fièvre et une toux depuis deux jours, et j\'ai mal à la gorge.', tr: '我发烧咳嗽两天了，喉咙也疼。', best: true },
          { t: 'Je voudrais louer un appartement près du métro.', tr: '我想租一套地铁附近的公寓。' },
          { t: 'Fièvre. Toux. Deux jours.', tr: '发烧。咳嗽。两天。' }
        ] },
        { npc: 'Vous avez pris quelque chose ?', tr: '您吃过什么药吗？' },
        { ask: '说只吃了退烧药、没有效果，并说明自己对青霉素过敏。', me: [
          { t: 'Juste un médicament contre la fièvre, sans effet. Et je suis allergique à la pénicilline.', tr: '只吃了退烧药，没有效果。另外我对青霉素过敏。', best: true },
          { t: 'Oui, j\'ai mangé au restaurant hier soir.', tr: '是的，我昨晚在餐馆吃了饭。' },
          { t: 'Médicament. Pas bon.', tr: '药。不好。' }
        ] },
        { npc: 'Je vais vous examiner... Respirez profondément. C\'est une infection, rien de grave.', tr: '我给您检查一下……请深呼吸。是感染，不严重。' },
        { say: 'C\'est rassurant. Je dois prendre des médicaments ?', tr: '那就放心了。我需要吃药吗？', hint: '表示安心，再问是否要吃药' },
        { npc: 'Oui, voici une ordonnance. Un comprimé trois fois par jour, après les repas.', tr: '需要，这是处方。每天三次，每次一片，饭后服用。' },
        { ask: '重复一遍用法，并问能不能去上班。', me: [
          { t: 'Trois fois par jour après les repas, c\'est bien ça ? Est-ce que je peux aller travailler ?', tr: '每天三次、饭后服用，对吗？我可以去上班吗？', best: true },
          { t: 'Merci beaucoup, au revoir.', tr: '非常感谢，再见。' },
          { t: 'Je n\'ai pas compris la question.', tr: '我没听懂这个问题。' }
        ] },
        { npc: 'Reposez-vous deux jours, buvez beaucoup d\'eau et revenez si la fièvre continue.', tr: '休息两天，多喝水，如果还发烧就再来。' },
        { say: 'D\'accord, merci, docteur. Je prends rendez-vous pour vendredi si besoin.', tr: '好的，谢谢医生。需要的话我预约周五。', hint: '表示明白，必要时再约复诊' }
      ]
    },
    {
      id: 'fr-d7', level: 'B1', title: '例会上汇报进度', scene: '公司小会议室',
      setup: '周例会上你要汇报项目进度：目前稍有延迟，你提出调整方案，并回应同事的疑问。',
      lines: [
        { npc: 'On commence. Où en est le projet, de votre côté ?', tr: '我们开始吧。你那边项目进展如何？' },
        { say: 'Nous avons terminé la première phase, mais nous sommes un peu en retard sur la seconde.', tr: '我们完成了第一阶段，但第二阶段稍微有点延迟。', hint: '先说成绩，再坦白延迟' },
        { npc: 'De combien de retard parle-t-on ?', tr: '延迟多久？' },
        { ask: '说大约十天，原因是供应商交货晚了。', me: [
          { t: 'Environ dix jours : le fournisseur a livré la commande en retard.', tr: '大约十天：供应商交货晚了。', best: true },
          { t: 'Je ne sais pas, je n\'ai pas regardé.', tr: '我不知道，我没看。' },
          { t: 'Retard. Dix. Fournisseur.', tr: '延迟。十。供应商。' }
        ] },
        { npc: 'Et qu\'est-ce que vous proposez ? On ne peut pas dépasser l\'échéance du trente.', tr: '那你有什么建议？我们不能超过三十号的期限。' },
        { ask: '提议让另一个小组并行做测试，这样就能赶上期限。', me: [
          { t: 'Si l\'autre équipe faisait les tests en parallèle, on pourrait tenir l\'échéance.', tr: '如果另一个小组并行做测试，我们就能赶上期限。', best: true },
          { t: 'Je pense qu\'il faut annuler le projet.', tr: '我认为应该取消这个项目。' },
          { t: 'On pourrait travailler plus vite, voilà.', tr: '我们可以干得更快，就这样。' }
        ] },
        { npc: 'L\'idée me plaît, mais cela demande une validation de la direction.', tr: '这个想法我赞成，不过需要管理层批准。' },
        { say: 'Je peux rédiger une note d\'une page et l\'envoyer ce soir, avec le compte rendu de la réunion.', tr: '我可以写一页说明今晚发出去，连同会议纪要。', hint: '主动承担，并给出交付时间' },
        { npc: 'Parfait. Autre chose à signaler ?', tr: '很好。还有其他要提的吗？' },
        { ask: '补充说预算没问题，但希望周五前得到答复。', me: [
          { t: 'Le budget est maîtrisé ; en revanche, j\'aurais besoin d\'une réponse avant vendredi.', tr: '预算没问题；不过我希望周五前得到答复。', best: true },
          { t: 'Non, tout va bien, merci.', tr: '没有，一切都好，谢谢。' },
          { t: 'Le budget, c\'est cher.', tr: '预算，很贵。' }
        ] }
      ]
    },
    {
      id: 'fr-d8', level: 'B2', title: '求职面试', scene: '公司会议室',
      setup: '你应聘市场专员岗位，进入第二轮面试：招聘官请你介绍经历，追问简历上的空档期，并谈到薪资与到岗时间。',
      lines: [
        { npc: 'Bonjour, asseyez-vous. Dites-moi d\'abord ce qui vous a conduit à postuler ici.', tr: '您好，请坐。先跟我说说，是什么让您来应聘这个职位。' },
        { say: 'J\'ai dirigé des campagnes de communication pendant cinq ans ; votre entreprise m\'attire parce qu\'elle valorise l\'audace créative.', tr: '我主持传播推广活动已有五年；贵公司重视创意上的大胆尝试，这一点很吸引我。', hint: '概括经历，再说明为什么选择这家公司' },
        { npc: 'Votre CV mentionne une pause de six mois. Que s\'est-il passé à ce moment-là ?', tr: '您的简历上有六个月的空档，那段时间发生了什么？' },
        { ask: '解释当时在照顾生病的母亲，期间坚持上网课保持状态。', me: [
          { t: 'Je m\'occupais de ma mère, qui était tombée malade ; par conséquent, j\'avais mis mes projets entre parenthèses tout en suivant des cours en ligne.', tr: '当时我在照顾生病的母亲；因此，我暂时搁置了自己的计划，同时坚持上网课。', best: true },
          { t: 'Pause. Famille. Voilà. Terminé.', tr: '空档。家人。就这样。完了。' },
          { t: 'Je ne voulais plus jamais travailler à ce moment-là.', tr: '那段时间我再也不想工作了。' }
        ] },
        { npc: 'Très bien. Si un client rejetait votre stratégie, que feriez-vous ?', tr: '很好。如果客户否决了您的方案，您会怎么办？' },
        { ask: '说明会先弄清对方的顾虑，再用数据提出折中方案。', me: [
          { t: 'Je chercherais d\'abord à comprendre ses objections, puis je proposerais un compromis appuyé sur des chiffres.', tr: '我会先弄清他的顾虑，然后提出一个有数据支撑的折中方案。', best: true },
          { t: 'Je changerais de client tout de suite, c\'est plus simple.', tr: '我会马上换一个客户，这样更省事。' },
          { t: 'Client. Non. Moi. Fin de l\'histoire.', tr: '客户。不。我。故事结束。' }
        ] },
        { npc: 'Dernière question : quittez-vous vraiment votre poste actuel si nous vous faisons une offre ?', tr: '最后一个问题：如果我们向您发出录用通知，您真的会辞掉现在的工作吗？' },
        { ask: '肯定回答，并说明虽然现公司氛围不错，但已没有发展空间。', me: [
          { t: 'Bien sûr ; quoique l\'ambiance de mon entreprise actuelle soit agréable, il n\'y a plus de perspectives pour moi.', tr: '当然；虽然我现在公司的氛围很不错，但对我来说已经没有发展空间了。', best: true },
          { t: 'Oui, non, peut-être, je verrai bien.', tr: '会，不会，也许吧，到时候再说。' },
          { t: 'Je démissionnerai le jour même, sans réfléchir.', tr: '我当天就辞职，想都不想。' }
        ] },
        { npc: 'Parfait. Et côté salaire, où vous situez-vous ?', tr: '很好。薪资方面，您的期望是多少？' },
        { ask: '给出期望区间，并表示入职时间上完全可以配合。', me: [
          { t: 'Je vise une fourchette de quarante à quarante-cinq mille ; en revanche, pour la date d\'entrée, je suis très flexible.', tr: '我的期望区间是四万到四万五；不过入职时间方面，我完全可以灵活配合。', best: true },
          { t: 'Je veux le salaire maximum, un point c\'est tout.', tr: '我要最高薪资，就这样。' },
          { t: 'Salaire. Peu importe. Beaucoup.', tr: '薪资。无所谓。很多。' }
        ] }
      ]
    },
    {
      id: 'fr-d9', level: 'A1', title: '去朋友家做客', scene: '朋友家的客厅',
      setup: '你第一次去法国朋友莉莉家吃晚饭，她开门迎接你，你们聊到带的小礼物、晚饭和周末安排。',
      lines: [
        { npc: 'Bonjour ! Entre, entre, fais comme chez toi !', tr: '你好！快进来，别拘束！' },
        { ask: '递上带来的花，说这是一点小心意。', me: [
          { t: 'Voici des fleurs pour toi, c\'est un petit cadeau.', tr: '这是给你的花，一点小心意。', best: true },
          { t: 'Fleurs. Tiens. Bon. Voilà.', tr: '花。给。好。就这样。' },
          { t: 'Je vends des fleurs, tu veux en acheter ?', tr: '我是卖花的，你要买一点吗？' }
        ] },
        { npc: 'Oh, merci ! Elles sont magnifiques ! Installe-toi dans le salon.', tr: '哦，谢谢！太漂亮了！你在客厅里坐吧。' },
        { ask: '问晚饭吃什么，并问需不需要帮忙。', me: [
          { t: 'Qu\'est-ce qu\'on mange ce soir ? Je peux t\'aider ?', tr: '今晚吃什么？我能帮忙吗？', best: true },
          { t: 'Manger. Quoi. Aider. Oui.', tr: '吃。什么。帮忙。是。' },
          { t: 'Je vais tout préparer moi-même, toi, assieds-toi.', tr: '所有菜都由我来做，你坐着就好。' }
        ] },
        { npc: 'Un gratin maison ! Tu aimes la musique ? On met un disque ?', tr: '自制焗菜！你喜欢音乐吗？我们放张唱片？' },
        { say: 'Avec plaisir, j\'adore ça. Je m\'assieds près de la fenêtre.', tr: '太好了，我很喜欢。我坐到窗户旁边去。', hint: '先表示乐意，再说自己打算坐哪儿' },
        { npc: 'Le dîner est prêt ! Assieds-toi, je sers les assiettes.', tr: '晚饭好了！坐下吧，我来盛菜。' },
        { ask: '尝了一口，称赞晚饭很好吃。', me: [
          { t: 'C\'est délicieux, vraiment très bon !', tr: '太好吃了，真的非常棒！', best: true },
          { t: 'C\'est de la nourriture, c\'est tout.', tr: '这是食物，仅此而已。' },
          { t: 'Je préfère les repas de ma grand-mère.', tr: '我更喜欢吃我奶奶做的饭。' }
        ] },
        { npc: 'Contente que ça te plaise ! Ce week-end, on va au marché ensemble ?', tr: '你喜欢就好！这周末我们一起去市场吗？' },
        { ask: '愉快地答应周六上午一起去。', me: [
          { t: 'Oui, avec plaisir, samedi matin !', tr: '好呀，很乐意，周六上午见！', best: true },
          { t: 'Samedi. Marché. Ok. Peut-être.', tr: '周六。市场。好。也许。' },
          { t: 'Je déteste le marché et tous les légumes.', tr: '我讨厌市场，也讨厌所有蔬菜。' }
        ] }
      ]
    },
    {
      id: 'fr-d10', level: 'A2', title: '火车站买票', scene: '火车站售票大厅',
      setup: '你要去里昂看望朋友，在售票窗口询问班次、票价、座位和站台。',
      lines: [
        { npc: 'Bonjour, c\'est pour un billet ?', tr: '您好，是来买票的吗？' },
        { ask: '说想买明天上午去里昂的往返票。', me: [
          { t: 'Bonjour, je voudrais un aller-retour pour Lyon demain matin.', tr: '您好，我想买一张明天上午去里昂的往返票。', best: true },
          { t: 'Lyon. Billet. Deux. Peut-être.', tr: '里昂。票。两。也许。' },
          { t: 'Je cherche la sortie et les toilettes de la gare.', tr: '我在找车站的出口和洗手间。' }
        ] },
        { npc: 'Il y a un train à sept heures dix et un autre à huit heures quarante.', tr: '七点十分有一班，八点四十还有一班。' },
        { ask: '问这两个班次分别多少钱。', me: [
          { t: 'Combien coûte le train de sept heures dix, et l\'autre ?', tr: '七点十分那班多少钱？另一班呢？', best: true },
          { t: 'L\'argent du train, c\'est combien, ça ?', tr: '火车的钱，这个，是多少？' },
          { t: 'Le train de sept heures, je le prends, c\'est tout.', tr: '七点的火车，我坐了，就这样。' }
        ] },
        { npc: 'Le premier coûte soixante-quinze euros, le second quatre-vingt-dix.', tr: '第一班七十五欧元，第二班九十欧元。' },
        { say: 'Alors je préfère le premier : il est moins cher et il part plus tôt.', tr: '那我选第一班：更便宜，出发也更早。', hint: '做出选择，并简单说明理由' },
        { npc: 'Très bien. Vous voulez une place côté fenêtre ?', tr: '好的。您要靠窗的座位吗？' },
        { ask: '说要靠窗的座位，并问从几号站台出发。', me: [
          { t: 'Oui, côté fenêtre, s\'il vous plaît. Il part de quel quai ?', tr: '要，靠窗，麻烦您。从几号站台出发？', best: true },
          { t: 'Fenêtre. Quai. Où ça ?', tr: '窗户。站台。哪里？' },
          { t: 'Non, merci, je préfère rester debout tout le voyage.', tr: '不用了，谢谢，我整个旅程都想站着。' }
        ] },
        { npc: 'Quai numéro six, voie B. Le train arrive à sept heures cinq.', tr: '六号站台，B 道。火车七点五分进站。' },
        { ask: '表示感谢，并确认中间不用换乘。', me: [
          { t: 'Merci beaucoup ! Je n\'ai pas de changement, n\'est-ce pas ?', tr: '非常感谢！中间不用换乘，对吧？', best: true },
          { t: 'Merci. Changement. Non ? Peut-être.', tr: '谢谢。换乘。不？也许。' },
          { t: 'Je voudrais changer de train trois fois, c\'est plus amusant.', tr: '我想换乘三次火车，这样更好玩。' }
        ] }
      ]
    },
    {
      id: 'fr-d11', level: 'B1', title: '社区志愿活动', scene: '社区活动中心门口',
      setup: '社区正在招募周末志愿者整理图书馆，你上前咨询工作内容、时间安排和报名方式。',
      lines: [
        { npc: 'Bonjour ! Vous êtes venu pour l\'appel aux volontaires ?', tr: '您好！您是为招募志愿者的事来的吗？' },
        { say: 'Oui, j\'ai vu l\'annonce sur le panneau ; j\'aimerais savoir en quoi consiste le travail.', tr: '是的，我在公告栏上看到了启事；我想了解一下具体要做些什么。', hint: '先确认来意，再问工作内容' },
        { npc: 'On trie des livres et on réorganise la bibliothèque du quartier, samedi de dix heures à seize heures.', tr: '我们分拣图书、整理社区图书馆，时间是周六上午十点到下午四点。' },
        { ask: '问是否需要有经验，以及会不会有人带着做。', me: [
          { t: 'Faut-il avoir de l\'expérience ? Est-ce que quelqu\'un nous montrera comment faire ?', tr: '需要有经验吗？会有人教我们怎么做吗？', best: true },
          { t: 'Expérience. Oui ? Non ? Peut-être ?', tr: '经验。要？不要？也许？' },
          { t: 'Je connais déjà tout, personne ne devra m\'expliquer quoi que ce soit.', tr: '我什么都会，谁都不用给我解释。' }
        ] },
        { npc: 'Aucune expérience n\'est requise, et un bénévole expérimenté encadre chaque groupe.', tr: '不要求有任何经验，每组都由一位有经验的志愿者负责带组。' },
        { ask: '说明下午有课，问能不能只参加上午。', me: [
          { t: 'Je pourrais venir seulement le matin, puisque j\'ai un cours l\'après-midi.', tr: '我只能参加上午，因为我下午有课。', best: true },
          { t: 'Matin seulement. Après-midi occupé. Ça va ?', tr: '只上午。下午忙。行吗？' },
          { t: 'Je viendrai toute la journée et j\'annulerai mon cours sans problème.', tr: '我会来一整天，把课取消掉也没问题。' }
        ] },
        { npc: 'Pas de souci, la demi-journée est possible, et nous offrons même un déjeuner.', tr: '没问题，只来半天也可以，我们还提供午餐。' },
        { say: 'C\'est sympa ! Je précise que je parle un peu français et un peu anglais, cela pourrait être utile ?', tr: '真不错！补充一下，我会一点法语和一点英语，能派上用场吗？', hint: '顺势介绍自己能帮上忙的地方' },
        { npc: 'Très utile, certains livres sont en anglais ! Vous vous appelez comment ?', tr: '太有用了，有些书是英文的！您怎么称呼？' },
        { ask: '报名留下名字和电话，并说周六见。', me: [
          { t: 'Je m\'appelle Wang Hao ; voici mon numéro, à samedi alors !', tr: '我叫王浩；这是我的电话，那周六见！', best: true },
          { t: 'Wang. Numéro. Samedi. D\'accord. Voilà.', tr: '王。号码。周六。好的。就这样。' },
          { t: 'Je préfère ne donner ni mon nom ni mon numéro, je resterai anonyme.', tr: '名字和电话我都不想留，我想保持匿名。' }
        ] }
      ]
    },
    {
      id: 'fr-d12', level: 'C1', title: 'Séminaire universitaire', scene: '大学研讨课教室',
      setup: '你在教授和同学们面前展示关于当代小说的研究，需要应对一个同学的追问和教授关于局限性的提问，全程用正式敬语。',
      lines: [
        { npc: 'Bonjour à tous. Nous accueillons aujourd\'hui Wang Hao, qui nous présentera ses recherches sur le roman contemporain.', tr: '大家好。今天我们欢迎王浩来给我们展示他关于当代小说的研究。' },
        { say: 'Merci, professeur. Je voudrais commencer par évoquer la démarche méthodologique qui a guidé mon analyse.', tr: '谢谢，教授。我想先谈谈指导我分析工作的方法论。', hint: '正式开场，说明自己的汇报框架' },
        { npc: 'Pourriez-vous préciser dans quelle mesure votre lecture s\'inscrit dans le courant de la nouvelle critique ?', tr: '您能否说明一下，您的解读在多大程度上是属于新批评这一流派的？' },
        { ask: '回应同学的问题，说明自己的方法与新批评有共鸣但也有所超越。', me: [
          { t: 'Ma démarche s\'inspire de la lecture rapprochée chère à la nouvelle critique, tout en intégrant des outils sociologiques que ce courant délaissait généralement.', tr: '我的方法受到新批评所珍视的文本细读法的启发，同时也融入了这一流派通常忽视的社会学工具。', best: true },
          { t: 'Je ne sais pas trop ce que vous voulez dire par là, désolé.', tr: '我不太明白您想说什么，抱歉。' },
          { t: 'La nouvelle critique, c\'est dépassé. Tout le monde le sait.', tr: '新批评已经过时了，大家都知道。' }
        ] },
        { npc: 'C\'est fort intéressant. Mais quelles sont, selon vous, les limites d\'une telle approche ?', tr: '这非常有意思。但在您看来，这样一种方法的局限在哪里？' },
        { ask: '坦诚承认局限：对文本内部的关注有时会遮蔽历史语境。', me: [
          { t: 'À trop privilégier le texte lui-même, on risque effectivement d\'occulter le contexte historique dans lequel il a été produit.', tr: '过度关注文本本身，确实有可能遮蔽其产生的历史语境。', best: true },
          { t: 'Je n\'en vois aucune, franchement.', tr: '坦率说，我看不到任何局限。' },
          { t: 'La limite, c\'est que c\'est trop difficile pour les étudiants.', tr: '局限就是它对学生来说太难了。' }
        ] },
        { say: 'Enfin, j\'aimerais vous remercier pour vos questions, et je reste disponible pour poursuivre la discussion après la séance.', tr: '最后，感谢各位的提问，课后我很乐意继续与大家讨论。', hint: '正式收尾，表示愿意进一步交流' }
      ]
    },
    {
      id: 'fr-d13', level: 'B2', title: 'Réclamation client', scene: '服装店柜台',
      setup: '你昨天买了一件毛衣，今天发现袖子上有瑕疵，回来要求退款。店员提出换货但库存没有同款，想给你一张代金券。',
      lines: [
        { npc: 'Bonjour, madame. Je peux vous aider ?', tr: '您好，女士。需要帮忙吗？' },
        { say: 'Bonjour. Je reviens sur un pull que j\'ai acheté hier : il y a un défaut sur la manche. Je voudrais être remboursée.', tr: '您好。我回来是因为昨天买的这件毛衣：袖子上有个瑕疵。我想退款。', hint: '先说明来意和问题，再提出要求' },
        { npc: 'Je suis désolée. Avez-vous votre ticket de caisse ?', tr: '非常抱歉。您带小票了吗？' },
        { ask: '说带了小票，但店里没有同款可以换的话就不要代金券，只想退现金。', me: [
          { t: 'Oui, voici le ticket. Si vous n\'avez pas le même modèle en stock, je préfère être remboursée en espèces, pas un avoir.', tr: '带了，给您小票。如果同款没货的话，我想要现金退款，不要代金券。', best: true },
          { t: 'J\'ai perdu le ticket, désolée.', tr: '我把小票弄丢了，抱歉。' },
          { t: 'Un avoir, oui, je prends ça tout de suite.', tr: '代金券好啊，我马上就要。' }
        ] },
        { npc: 'Nous n\'avons plus ce modèle en stock. En revanche, je peux vous proposer un avoir de quinze euros valable trois mois.', tr: '同款我们没货了。不过我可以给您一张十五欧元的代金券，三个月内有效。' },
        { ask: '接受代金券，但表示以后可能不会再来这家店了。', me: [
          { t: 'Bon, je prends l\'avoir, mais franchement je ne reviendrai probablement plus ici.', tr: '好吧，代金券我收下，但坦白说我以后可能不会再来了。', best: true },
          { t: 'Non, merci, je préfère partir comme ça.', tr: '不用了谢谢，我就这样走好了。' },
          { t: 'Super, merci beaucoup pour le cadeau !', tr: '太好了，多谢您的礼物！' }
        ] },
        { npc: 'Voilà l\'avoir. J\'espère que vous reviendrez ici malgré tout.', tr: '给您代金券。希望您还是能再光顾我们。', hint: '保持礼貌，表达一丝遗憾' },
        { npc: 'Je comprends. Bonne journée, madame.', tr: '我理解。祝您愉快，女士。' }
      ]
    },
    {
      id: 'fr-d14', level: 'A1', title: 'Envoyer une lettre au bureau de poste', scene: '邮局柜台',
      setup: '你要寄一封普通信件回中国，邮局职员向你确认信封类型和重量。',
      lines: [
        { npc: 'Bonjour. C\'est pour envoyer un courrier ?', tr: '您好。是寄邮件吗？' },
        { ask: '确认是寄一封普通信件到中国。', me: [
          { t: 'Oui, une lettre simple pour la Chine.', tr: '是的，一封寄往中国的普通信。', best: true },
          { t: 'Oui, je veux acheter des timbres, c\'est tout.', tr: '是的，我想买邮票，就这样。' },
          { t: 'Non, je voudrais ouvrir un compte bancaire.', tr: '不，我想开一个银行账户。' }
        ] },
        { npc: 'De quel poids ? Lettre simple ou recommandée ?', tr: '多重？普通信还是挂号信？' },
        { ask: '说信封很轻，寄普通信就好。', me: [
          { t: 'Elle est très légère, juste une lettre simple.', tr: '信封很轻，就寄普通信。', best: true },
          { t: 'Elle est très lourde, je pense.', tr: '我觉得信封很重。' },
          { t: 'Recommandée, c\'est mieux pour tout le monde.', tr: '挂号信，对大家都好。' }
        ] },
        { say: 'Voici l\'enveloppe et l\'adresse. C\'est combien ?', tr: '这是信封和地址。多少钱？', hint: '递上信封并问价' },
        { npc: 'Quarante-cinq centimes, s\'il vous plaît.', tr: '四十五分，麻烦您。' },
        { ask: '付钱并表示感谢。', me: [
          { t: 'Voici cinquante centimes. Merci beaucoup !', tr: '给您五十分。多谢！', best: true },
          { t: 'Quarante-cinq, plus vingt, ça fait soixante-cinq.', tr: '四十五，再加二十，一共六十五。' },
          { t: 'Je ne paye pas, c\'est gratuit ici.', tr: '我不付钱，这里免费。' }
        ] }
      ]
    },
    {
      id: 'fr-d15', level: 'A2', title: 'Emmener le chat chez le vétérinaire', scene: '兽医诊所',
      setup: '你发现家猫从昨天开始没精神、不吃东西，带它来看兽医。兽医检查后说是轻微感染，给它开了药。',
      lines: [
        { npc: 'Bonjour, asseyez-vous avec votre chat. Qu\'est-ce qui lui arrive ?', tr: '您好，请抱着猫坐下。它怎么了？' },
        { ask: '说猫从昨天开始没精神、不吃东西。', me: [
          { t: 'Mon chat n\'a pas mangé depuis hier et il est très fatigué.', tr: '我的猫从昨天开始没吃东西，而且很没精神。', best: true },
          { t: 'Mon chat a mangé trop de poisson, je pense.', tr: '我觉得我的猫鱼吃太多了。' },
          { t: 'Mon chat veut partir en voyage en Chine.', tr: '我的猫想去中国旅行。' }
        ] },
        { npc: 'Hmm, il a un peu de fièvre. Je vais l\'examiner rapidement...', tr: '嗯，它有点发烧。我快速给它检查一下……' },
        { say: 'Docteur, ce n\'est pas grave, j\'espère ?', tr: '医生，希望不是很严重吧？', hint: '表达担忧，希望得到安心' },
        { npc: 'Ne vous inquiétez pas. C\'est une petite infection. Je vous donne des médicaments.', tr: '别担心。是轻微感染。我给您开药。' },
        { ask: '问每天吃几次药、什么时候需要再来复诊。', me: [
          { t: 'Combien de fois par jour, et je reviens quand si ça ne va pas mieux ?', tr: '每天吃几次？如果不见好我什么时候再来？', best: true },
          { t: 'Les médicaments sont-ils au chocolat ?', tr: '药是巧克力味的吗？' },
          { t: 'Merci, au revoir, je m\'en vais tout de suite.', tr: '谢谢再见，我马上就走。' }
        ] },
        { npc: 'Deux fois par jour après manger, et revenez dans trois jours si ça ne va pas mieux.', tr: '每天两次，饭后吃。如果不见好，三天后再来。' },
        { say: 'D\'accord, merci beaucoup, docteur. Je suivrai les consignes.', tr: '好的，非常感谢医生。我会按您的嘱咐做。', hint: '确认医嘱并表示感谢' }
      ]
    },
    {
      id: 'fr-d16', level: 'C2', title: '听懂朋友的反讽与推辞', scene: '朋友家的聚餐前',
      setup: '你到朋友 Léa 家参加聚餐，又迟到了十分钟。她先拿你的迟到开玩笑，随后请你买甜点，最后试探要不要改天再聚。注意接住反讽，也听懂委婉推辞。',
      lines: [
        { npc: 'Ah, te voilà ! Dix minutes de retard : on ne peut pas dire que tu sois en avance.', tr: '啊，你可算到了！迟到十分钟：实在不能说你来早了。' },
        { ask: '用自嘲接住反讽，并为迟到道歉。', me: [
          { t: 'Je sais, je suis un modèle de ponctualité. Désolé, le métro s\'est arrêté.', tr: '我知道，我可是守时的模范。抱歉，地铁停了。', best: true },
          { t: 'Non, je ne suis pas en avance : je suis précisément en retard de dix minutes.', tr: '不，我没有早到：我正好迟到了十分钟。' },
          { t: 'Si tu voulais quelqu\'un à l\'heure, il ne fallait pas m\'inviter.', tr: '如果你想找个准时的人，当初就不该邀请我。' }
        ] },
        { npc: 'Ne t\'inquiète pas, je plaisantais. Tu peux encore t\'occuper du dessert ? Les magasins ferment dans vingt minutes.', tr: '别担心，我开玩笑的。你还能负责甜点吗？商店二十分钟后就关门了。' },
        { ask: '委婉说明来不及买甜点，并改提在家做沙拉。', me: [
          { t: 'Ça va être compliqué pour le dessert : je n\'aurai pas le temps d\'aller au magasin. Par contre, je peux préparer une salade ici.', tr: '甜点恐怕有点难办：我来不及去商店了。不过我可以在这里做沙拉。', best: true },
          { t: 'D\'accord, je vais acheter un dessert maintenant et je serai de retour pour le petit-déjeuner.', tr: '好的，我现在去买甜点，早饭时回来。' },
          { t: 'Le dessert, c\'est ton problème, pas le mien.', tr: '甜点是你的问题，不是我的问题。' }
        ] },
        { npc: 'Pas de souci. Et si on repoussait le dîner à la semaine prochaine ? Tout le monde a l\'air un peu fatigué ce soir.', tr: '没关系。要不要把晚餐推迟到下周？今晚大家好像都有点累。' },
        { ask: '不勉强对方，同意改期，并提议明天再确定日期。', me: [
          { t: 'Si tu veux, on peut reporter. On en reparle demain pour choisir une date qui arrange tout le monde.', tr: '你愿意的话，我们就改期。明天再商量，挑一个大家都方便的日期。', best: true },
          { t: 'Non, il ne faut pas repousser la table contre le mur.', tr: '不，不要把桌子推到墙边。' },
          { t: 'Si tu ne voulais pas nous voir, tu pouvais le dire plus tôt.', tr: '如果你不想见我们，你早点说就行了。' }
        ] },
        { say: 'Désolé encore pour le retard. Je vais vous aider à ranger, et on choisira une nouvelle date demain.', tr: '再次抱歉我迟到了。我来帮你们收拾，新日期明天再定。', hint: '顺势收尾，主动帮忙收拾并确认后续安排' },
        { npc: 'Marché conclu. La prochaine fois, je te donnerai rendez-vous dix minutes plus tôt !', tr: '就这么说定了。下次我会把约你的时间提前十分钟！' }
      ]
    },
    {
      id: 'fr-d17', level: 'C1', title: 'Le chauffage est en panne', scene: '公寓内，电话报修',
      setup: '你租住的公寓暖气坏了三天，室温只有十五度。你打电话给中介，要求尽快维修，并提出在修好之前临时减租。',
      lines: [
        { npc: 'Agence Delcourt, bonjour. Que puis-je faire pour vous ?', tr: '德尔库尔中介，您好。有什么可以帮您？' },
        { say: 'Bonjour, je vous appelle au sujet du chauffage : il est en panne depuis trois jours et il fait à peine quinze degrés chez moi.', tr: '您好，我打电话是说暖气的事：已经坏了三天，我家里现在才十五度。', hint: '先说明问题、持续时间和严重程度' },
        { npc: 'Je suis navré. Avez-vous vérifié que la chaudière était bien sous tension ?', tr: '很抱歉。您确认过锅炉通电了吗？' },
        { ask: '说已经查过，技术人员判断是零件坏了，问最快何时能修。', me: [
          { t: 'Oui, j\'ai tout vérifié : le technicien a diagnostiqué une pièce défectueuse. Quand pourrez-vous intervenir au plus vite ?', tr: '查过了：技术员判断是零件坏了。你们最快什么时候能上门？', best: true },
          { t: 'Sous tension ? Vous voulez donc que je branche la chaudière sur une prise ?', tr: '通电？您是说要我把锅炉插到插座上吗？' },
          { t: 'Ce n\'est pas mon problème, c\'est le vôtre.', tr: '这不是我的问题，是你们的问题。' }
        ] },
        { npc: 'Nous pouvons envoyer quelqu\'un jeudi matin, mais la pièce ne sera peut-être pas disponible avant la semaine suivante.', tr: '我们可以周四上午派人过去，不过零件也许要等到下周才有。' },
        { ask: '指出房租含杂费，要求在暖气修好前按天减租。', me: [
          { t: 'Le loyer comprend les charges : je demande donc une réduction proportionnelle jusqu\'au retour du chauffage.', tr: '房租是含杂费的，所以我要求在暖气恢复之前按比例减租。', best: true },
          { t: 'Vous parlez de réduction : je dois donc baisser le thermostat, c\'est bien ça ?', tr: '您说减少：所以我该把恒温器调低，是这个意思吧？' },
          { t: 'Vous me devez un mois entier, et je ne paierai rien tant que ce n\'est pas réparé.', tr: '你们欠我一整个月，修好之前我一分钱都不付。' }
        ] },
        { npc: 'Je comprends. Nous pouvons appliquer un avoir de trente euros sur le prochain loyer, une fois l\'intervention faite.', tr: '我理解。维修完成之后，我们可以在下个月的房租里抵三十欧元。' },
        { npc: 'Je vous confirme tout cela par courriel cet après-midi, avec la date du passage. Encore toutes nos excuses pour la gêne.', tr: '今天下午我会用邮件把这一切确认下来，包括上门日期。给您添麻烦了，再次致歉。' }
      ]
    },
    {
      id: 'fr-d18', level: 'C1', title: 'Demander un délai au professeur', scene: '大学办公室',
      setup: '期末论文截止前一周，你发现两本关键文献在图书馆借不到，于是去找教授说明进度，争取短期延期，并确认需要提交的材料。',
      lines: [
        { npc: 'Bonjour, entrez. Vous vouliez me parler du mémoire ?', tr: '您好，请进。您是想谈论文的事？' },
        { say: 'Oui, professeur. J\'ai terminé la première partie et la bibliographie, mais je bloque sur le corpus : deux textes essentiels sont introuvables à la bibliothèque.', tr: '是的，教授。我完成了第一部分和参考书目，但卡在语料上：有两篇关键文献在图书馆借不到。', hint: '先说明已完成的部分，再说具体困难' },
        { npc: 'Je vois. Où en êtes-vous exactement, et de combien de temps auriez-vous besoin ?', tr: '我明白了。您具体进行到哪一步了？需要多少时间？' },
        { ask: '说明还需一周，问能否延到下周一同一时间交。', me: [
          { t: 'Il me faudrait une semaine de plus : pourrais-je vous rendre le travail le lundi suivant, à la même heure que prévu ?', tr: '我还需要一周：能否在下周一、原来约定的同一时间交给您？', best: true },
          { t: 'Je suis à la page dix ; combien de pages voulez-vous que je lise ?', tr: '我在第十页；您希望我读多少页？' },
          { t: 'Ça dépend : vous corrigez vite, au moins ?', tr: '这得看情况：您批改得至少够快吧？' }
        ] },
        { npc: 'Une semaine, c\'est acceptable. En revanche, la date de la soutenance ne bouge pas.', tr: '一周可以接受。不过答辩日期不能改。' },
        { ask: '确认延期后要交哪些材料、以什么形式提交。', me: [
          { t: 'Merci. Dois-je vous remettre aussi la fiche de suivi et la version imprimée, ou le fichier suffit-il ?', tr: '谢谢。我还需要交跟踪表和打印稿吗，还是交电子文件就够了？', best: true },
          { t: 'La soutenance ne bouge pas : je peux donc la déplacer moi-même ?', tr: '答辩日期不能改：那我可以自己改吗？' },
          { t: 'Peu importe les documents, du moment que j\'ai une bonne note.', tr: '交什么材料无所谓，只要给我个好分数就行。' }
        ] },
        { npc: 'Envoyez-moi le fichier par courriel, et déposez la fiche signée au secrétariat avant vendredi.', tr: '把文件用邮件发给我，并在周五之前把签好字的表格交到秘书处。' },
        { npc: 'Parfait. Bon courage, et ne vous laissez pas arrêter par la bibliothèque.', tr: '很好。加油，别让图书馆拖住您。' }
      ]
    },
    {
      id: 'fr-d19', level: 'C2', title: 'L\'évaluation ambiguë du manager', scene: '公司会议室，年度绩效面谈',
      setup: '年度绩效面谈。经理用「intéressant」「ambitieux」评价你，语气却不全是称赞。你需要听出其中的保留，追问具体反馈，并把结论落到下一步。',
      lines: [
        { npc: 'Merci d\'être venu. Dans l\'ensemble, votre année est... intéressante.', tr: '谢谢你来。总体来说，你这一年……挺有意思。' },
        { ask: '听出“intéressant”里的保留，礼貌请对方讲具体。', me: [
          { t: 'Je vous remercie. Quand vous dites « intéressante », j\'ai le sentiment que ce n\'est pas tout à fait un compliment : pourriez-vous préciser ce qui vous fait hésiter ?', tr: '谢谢您。您说“有意思”，我感觉这并不完全是称赞：能否请您说明一下您的犹豫在哪里？', best: true },
          { t: 'Intéressante ? Merci beaucoup, je suis donc le meilleur de l\'équipe.', tr: '有意思？太感谢了，那我就是团队里最好的了。' },
          { t: 'Si vous n\'êtes pas content, dites-le franchement au lieu de tourner autour du pot.', tr: '您要是不满意就直说，别绕圈子。' }
        ] },
        { npc: 'Disons que vos idées sont ambitieuses, parfois trop pour le calendrier du service.', tr: '这么说吧，你的想法很有野心，有时对部门的时间安排来说太有野心了。' },
        { ask: '问是哪项提议超出节奏，以及希望自己怎么调整。', me: [
          { t: 'S\'agit-il du projet de refonte ? J\'aimerais savoir ce que vous attendriez de moi pour le rendre plus réaliste.', tr: '您说的是改版项目吗？我想知道，您希望我怎么做才能让它更现实一些。', best: true },
          { t: 'Ambitieux, c\'est bien, non ? On peut donc tout garder tel quel.', tr: '有野心是好事，对吧？那就一切照旧好了。' },
          { t: 'Le calendrier, c\'est votre problème ; moi, je propose des idées.', tr: '时间安排是您的问题；我负责出主意。' }
        ] },
        { npc: 'Oui, la refonte. J\'aurais préféré un calendrier par étapes, avec des points de validation.', tr: '对，就是改版。我更希望看到分阶段的安排，中间有验收节点。' },
        { say: 'Je comprends : l\'ambition ne pose problème que lorsqu\'elle reste floue sur le calendrier. Je peux découper le projet en trois étapes, avec un bilan à la fin de chaque trimestre.', tr: '我明白：野心本身不是问题，问题在于排期一直不清楚。我可以把项目分成三个阶段，每季度末做一次复盘。', hint: '把模糊的评语落到具体做法上' },
        { npc: 'Voilà. Et il faudra aussi prévenir les équipes plus tôt : certaines ont vécu la dernière réorganisation comme un coup de force.', tr: '就是这个意思。另外也要更早通知各团队：上次重组，有些人觉得是被强加的。' },
        { ask: '问第一阶段的评估标准和下次沟通时间。', me: [
          { t: 'Dans ce cas, comment évaluerons-nous la réussite à la fin du premier trimestre, et quand pourrons-nous faire un point ?', tr: '那么，第一季度末我们怎么评估是否成功？什么时候能再碰一次？', best: true },
          { t: 'Un coup de force ? Vous voulez dire que je devrais imposer les changements par la force ?', tr: '强加？您是说我要靠武力推行改革吗？' },
          { t: 'Les équipes exagèrent ; je n\'ai pas à me justifier auprès d\'elles.', tr: '团队太夸张了；我没必要向他们解释。' }
        ] },
        { npc: 'Nous fixerons trois indicateurs ensemble, et nous ferons un point en janvier. Et pour être clair : « intéressant » était sincère, mais ce n\'était pas un blanc-seing.', tr: '我们一起定三个指标，一月再碰一次。也说清楚：“有意思”是真心话，但并不等于全权放行。' }
      ]
    },
    {
      id: 'fr-d20', level: 'C2', title: 'Un prêt entre amis', scene: '街角咖啡馆',
      setup: '老朋友约你见面，说自己看中一套房子，却凑不齐押金。你先问清他的处境，再给出有边界的帮助，并把金额和还款日说定。',
      lines: [
        { npc: 'Il faut que je te parle de quelque chose... Tu sais que je cherche un appartement depuis des mois.', tr: '有件事我得跟你说……你知道我找房子找了好几个月了。' },
        { ask: '先关心对方的状态，不急着谈钱。', me: [
          { t: 'Oui, je sais. Comment tu vas, en ce moment ? Ce n\'est pas seulement une question de logement, j\'imagine.', tr: '嗯，我知道。你最近怎么样？我想这不只是房子的问题吧。', best: true },
          { t: 'Un appartement ? Tu veux que je te prête un appartement ?', tr: '房子？你是想让我借你一套房子？' },
          { t: 'Si c\'est pour de l\'argent, dis-le tout de suite, on gagnera du temps.', tr: '要是为了钱，你就直说，大家都省时间。' }
        ] },
        { npc: 'Franchement, pas très bien. Il me manque deux mille euros pour la caution, et la banque refuse de m\'avancer quoi que ce soit.', tr: '说实话，不太好。押金还差两千欧，银行一分钱都不肯先借给我。' },
        { ask: '问清实际缺口、还款来源，以及有没有别的办法。', me: [
          { t: 'Deux mille, c\'est la totalité de la caution ? Et si je ne te prête qu\'une partie, tu as une autre solution pour le reste ?', tr: '两千是全部押金吗？如果我只借你一部分，剩下的你有别的办法吗？', best: true },
          { t: 'La banque refuse : tu veux que j\'aille parler à ta banque ?', tr: '银行拒绝了：你想让我去跟你银行谈？' },
          { t: 'Deux mille euros, quand même. Tu n\'as qu\'à vendre ta voiture.', tr: '两千欧，可不是小数目。你把车卖了不就行了。' }
        ] },
        { npc: 'Il me manque en fait mille euros si je renonce à l\'agence. Je pourrais te rendre ça en trois mois, ou dès que j\'aurai mon treizième mois.', tr: '其实不走中介的话，我只差一千欧。我可以在三个月内还你，或者等拿到第十三个月工资就还。' },
        { ask: '说明自己能借的额度，要求对方给出具体还款日。', me: [
          { t: 'Je peux te prêter huit cents euros sans me mettre en difficulté. Peux-tu t\'engager sur une date précise, pas seulement « dans trois mois » ?', tr: '我可以借你八百欧，不会让自己为难。你能不能给我一个确切日期，而不只是“三个月内”？', best: true },
          { t: 'Huit cents euros : tu veux dire huit mille euros ?', tr: '八百欧：你是想说八千欧吗？' },
          { t: 'Je te prête tout, et surtout ne me rembourse pas, ça m\'est égal.', tr: '我全借给你，而且千万别还，我不在乎。' }
        ] },
        { say: 'Soyons clairs : je te prête huit cents euros, remboursables au plus tard le 15 mars. Si tu ne peux pas, tu m\'en parles avant, pas après. Je t\'aide parce que c\'est toi, pas parce que j\'ai les moyens de perdre cet argent.', tr: '我们把话说清楚：我借你八百欧，最晚三月十五号还。如果还不上，你要提前告诉我，而不是拖到最后。我帮你是因为你是你，不是因为我亏得起这笔钱。', hint: '把金额、期限和底线一次说清，同时表明是看在朋友情分上' },
        { npc: 'C\'est plus que je n\'espérais. Je te ferai un virement le 15 mars au plus tard, et je te tiendrai au courant si ça se complique. Merci, sincèrement.', tr: '这比我期望的还多。我最晚三月十五号给你转账；要是情况变复杂，我会告诉你。真的谢谢你。' }
      ]
    },
    {
      id: 'fr-d21', level: 'C2', title: 'La soutenance sous pression', scene: '答辩室 · 评审席前',
      setup: '论文答辩现场，评审质疑你的样本量与方法。你要承认局限、守住方法的合理性，并说明下一步如何验证，而不是一味辩解或过度承诺。',
      lines: [
        { npc: 'Votre échantillon ne compte que quarante-deux participants. Sur quelle base prétendez-vous tirer des conclusions générales ?', tr: '您的样本只有四十二名参与者。您凭什么认为自己能得出普遍性结论？' },
        { ask: '承认样本规模有限，同时说明抽样依据，不回避问题。', me: [
          { t: 'Quarante-deux participants, c\'est peu pour généraliser, je vous l\'accorde. Mais l\'échantillon a été construit par stratification et non par commodité : je peux défendre sa représentativité sur les variables qui m\'importent.', tr: '四十二人确实不足以推广，这一点我承认。但样本是按分层抽样、而非图方便选取的：在关键变量上，我可以为它的代表性辩护。', best: true },
          { t: 'Vous voulez dire que je devrais recruter quarante-deux personnes de plus ?', tr: '您是说我还应该再招四十二个人？' },
          { t: 'Quarante-deux, c\'est déjà beaucoup. Vous exagérez un peu, non ?', tr: '四十二个已经很多了。您有点夸张了吧？' }
        ] },
        { npc: 'Soit. Mais comment être sûr que vos entretiens ne disent pas simplement ce que vous vouliez entendre ?', tr: '好。不过您又如何确定，您的访谈说的不是您自己想听到的东西？' },
        { ask: '守住方法合理性：说明编码与交叉验证，不夸口，也不让步。', me: [
          { t: 'Deux chercheurs ont codé les entretiens séparément, et nous avons mesuré l\'accord entre eux. Le guide comportait aussi des questions ouvertes, qui ont fait émerger des objections que je n\'attendais pas.', tr: '两名研究者独立编码，我们测量了编码者之间的一致性。访谈提纲也包含开放问题，确实浮现出我未曾预料的反对意见。', best: true },
          { t: 'Vous pensez que j\'ai mal enregistré les entretiens ?', tr: '您认为我的访谈录音做得不好？' },
          { t: 'Je peux tout refaire avec deux cents personnes si vous voulez, ce n\'est pas un problème.', tr: '如果您愿意，我可以找两百个人全部重做，这不是问题。' }
        ] },
        { npc: 'Imaginez que vos résultats ne se reproduisent pas. Que faites-vous ?', tr: '假设您的结果无法重现。您怎么办？' },
        { ask: '给出可执行的下一步验证：公开方案、独立复制、扩大样本；不承诺必然成功。', me: [
          { t: 'Je publierai le protocole et les données, puis je lancerai une réplication indépendante sur un autre terrain. Si les résultats ne tiennent pas, je le dirai : ce sera une information, pas un échec à cacher.', tr: '我会公开研究方案和数据，然后在另一个现场做一次独立复制。如果结果站不住，我会说出来：那是一条信息，不是需要掩盖的失败。', best: true },
          { t: 'Vous voulez que je retire mes résultats de la thèse ?', tr: '您想让我把结果从论文里撤掉？' },
          { t: 'Je vous garantis que les résultats seront identiques. J\'en suis absolument certain.', tr: '我向您保证结果会完全一致。我绝对确信。' }
        ] },
        { say: 'Je résume : l\'échantillon limite la portée des conclusions, pas la validité du dispositif. Je m\'engage à publier le protocole, à documenter les cas divergents et à ouvrir une réplication avant toute généralisation.', tr: '我总结一下：样本限制的是结论的适用范围，而不是这套设计的有效性。我承诺公开研究方案、记录不一致的案例，并在任何推广之前启动一次复制研究。', hint: '一句话收束：承认边界、肯定方法、给出可核查的下一步' },
        { npc: 'C\'est une réponse honnête. La réserve est notée ; la méthode, elle, tient. Nous en reparlerons après la réplication.', tr: '这是一个诚实的回答。保留意见我们记下了；方法本身站得住。复制研究之后我们再谈。' }
      ],
      keys: [
        { w: 'je vous l\'accorde', t: '这一点我承认（让步而不失守，答辩场合的体面退一步）', e: 'Quarante-deux participants, c\'est peu pour généraliser, je vous l\'accorde.', et: '四十二人确实不足以推广，这一点我承认。' },
        { w: 'par stratification et non par commodité', t: '按分层抽样，而非图方便（强调抽样有方法依据，不是凑数）', e: 'Mais l\'échantillon a été construit par stratification et non par commodité : je peux défendre sa représentativité sur les variables qui m\'importent.', et: '但样本是按分层抽样、而非图方便选取的：在关键变量上，我可以为它的代表性辩护。' },
        { w: 'une réplication indépendante sur un autre terrain', t: '在另一现场做独立复制（把验证交给别人、别处，而非自我担保）', e: 'Je publierai le protocole et les données, puis je lancerai une réplication indépendante sur un autre terrain.', et: '我会公开研究方案和数据，然后在另一个现场做一次独立复制。' },
        { w: 'ce sera une information, pas un échec à cacher', t: '那是一条信息，而不是需要掩盖的失败（改写结果的性质）', e: 'Si les résultats ne tiennent pas, je le dirai : ce sera une information, pas un échec à cacher.', et: '如果结果站不住，我会说出来：那是一条信息，不是需要掩盖的失败。' }
      ]
    },
    {
      id: 'fr-d22', level: 'C2', title: 'Médiation entre associés', scene: '会议室 · 两位合伙人之间',
      setup: '两位合伙人因分工和对外署名争执不下。你作为第三方先降温，再让双方只讲具体事实，最后把分工、署名与沟通落成可执行的规则。',
      lines: [
        { npc: 'Je ne veux pas envenimer les choses, mais depuis six mois je porte le projet seul. Et quand vient le moment de parler aux clients, ce n\'est jamais moi.', tr: '我不想把事情闹大，但半年来这个项目几乎是我一个人在扛。可一到见客户的时候，站在前面的从来不是我。' },
        { ask: '先降温：不评判谁对谁错，确认共同目标，请双方先只讲事实。', me: [
          { t: 'Je vous entends tous les deux, et je ne suis pas là pour désigner un coupable. Nous voulons la même chose : que le projet tienne. Accepteriez-vous de commencer par les faits, chacun son tour ?', tr: '你们两位的话我都听到了，我不是来判定谁有罪的。我们要的是同一件事：让项目撑住。二位是否愿意先只讲事实，一个一个来？', best: true },
          { t: 'Donc pour vous, le problème, c\'est uniquement le budget client ?', tr: '所以对您来说，问题只在于客户预算？' },
          { t: 'Franchement, à vous entendre, on dirait deux enfants qui se disputent un jouet.', tr: '说实话，听你们这么说，就像两个孩子在抢玩具。' }
        ] },
        { npc: 'Des faits ? Très bien. En mars, c\'est moi qui ai repris le dossier de Lyon après son abandon. Personne ne l\'a mentionné, et la prime a été partagée comme si de rien n\'était.', tr: '事实？好。三月里，里昂那个案子被搁下之后，是我接手收拾的。没有人提过这件事，奖金却照旧平分，像什么都没发生一样。' },
        { ask: '让双方各自给出具体时间、交付物和决策记录，把「功劳」拆成可核对的事实。', me: [
          { t: 'Merci. Pouvez-vous, chacun, citer deux livrables précis et la date à laquelle ils ont été remis ? Nous verrons ensuite ce qui relève de la perception et ce qui relève du dossier.', tr: '谢谢。二位能否各自举出两项具体的交付物，以及交付的日期？然后我们再看哪些属于感受，哪些属于案卷里的事实。', best: true },
          { t: 'Vous parlez de la prime : quel montant exact avez-vous touché ?', tr: '您提到奖金：您到底拿了多少钱？' },
          { t: 'Je peux vous garantir que désormais tout sera partagé à parts parfaitement égales.', tr: '我可以向你们保证，从今以后一切都绝对平均分配。' }
        ] },
        { npc: 'En février, j\'ai rédigé la note de cadrage et je l\'ai envoyée le 12. En avril, j\'ai présenté seul devant le comité, parce que vous étiez en déplacement.', tr: '二月里，我写了框架说明，十二号发出去的。四月，我独自向委员会做了陈述，因为当时您出差在外。' },
        { ask: '把分工、署名与对外沟通落成规则，并约定复核节点。', me: [
          { t: 'Proposition : nous écrivons noir sur blanc qui porte quoi, avec un nom par livrable. Toute prise de parole externe est annoncée à l\'autre quarante-huit heures à l\'avance. Et nous faisons un point tous les mois, avec le même tableau.', tr: '我提一个方案：白纸黑字写明谁负责什么，每项交付物对应一个名字。任何对外发言都提前四十八小时告知对方。每月按同一张表碰一次。', best: true },
          { t: 'Faut-il demander à un avocat de rédiger un nouveau contrat ?', tr: '是不是该请律师起草一份新合同？' },
          { t: 'Je vous assure que plus jamais il n\'y aura de malentendu entre vous.', tr: '我向你们保证，你们之间再也不会出现误会。' }
        ] },
        { say: 'Si nous sommes d\'accord : un tableau de répartition par livrable, un nom associé à chaque prise de parole, un préavis de quarante-huit heures et un point mensuel. En cas de désaccord, on revient au tableau avant d\'en parler à l\'extérieur.', tr: '如果我们意见一致：一张按交付物划分的分工表，每次对外发言对应一个署名，四十八小时预告，每月一次碰头。出现分歧时，先回到这张表，再对外沟通。', hint: '把口头共识写成可执行的规则：谁、做什么、何时、有争议怎么办' },
        { npc: 'Ça me va. J\'aurais préféré qu\'on en parle plus tôt, mais au moins, cette fois, c\'est écrit.', tr: '我没意见。我本希望我们早点谈这件事，但至少这一次，它是写下来的。' }
      ],
      keys: [
        { w: 'je ne suis pas là pour désigner un coupable', t: '我不是来判定谁有罪的（先降温，把人和问题分开）', e: 'Je vous entends tous les deux, et je ne suis pas là pour désigner un coupable.', et: '你们两位的话我都听到了，我不是来判定谁有罪的。' },
        { w: 'chacun son tour', t: '一个一个来；轮流发言（把争抢变成顺序，暗示都有机会）', e: 'Accepteriez-vous de commencer par les faits, chacun son tour ?', et: '二位是否愿意先只讲事实，一个一个来？' },
        { w: 'écrire noir sur blanc', t: '白纸黑字写下来（把口头共识变成可查的文字）', e: 'Proposition : nous écrivons noir sur blanc qui porte quoi, avec un nom par livrable.', et: '我提一个方案：白纸黑字写明谁负责什么，每项交付物对应一个名字。' },
        { w: 'comme si de rien n\'était', t: '像什么都没发生一样（暗指对既成事实的抹平，带不满）', e: 'Personne ne l\'a mentionné, et la prime a été partagée comme si de rien n\'était.', et: '没有人提过这件事，奖金却照旧平分，像什么都没发生一样。' }
      ]
    }
  ],
  readings: [
    {
      id: 'fr-r1', level: 'C1', title: 'Le coût discret du confort', src: 'Chronique · environ 220 mots',
      text: 'Nous avons pris l\'habitude de compter le prix des choses plutôt que leur coût. Un lave-vaisselle s\'achète en promotion ; ce qu\'il réclame ensuite — eau, électricité, entretien, place perdue dans la cuisine — disparaît de la facture. Le confort, chez nous, se paie rarement au moment où l\'on en profite. Ce report ne relève pas de la mauvaise foi : il tient à la manière dont nous mesurons.\n\nPrenez le chauffage. Personne ne songe à louer un appartement sans radiateurs, mais peu de locataires savent ce que représente une panne : les nuits fraîches, le linge qui ne sèche pas, l\'humeur qui s\'effrite à mesure que la température baisse. Le confort ne se remarque que lorsqu\'il s\'absente.\n\nIl en va de même pour le temps. Les applications qui promettent de nous en faire gagner finissent souvent par en prendre : notifications, mises à jour, réglages. On croit gagner un quart d\'heure ; on en perd trois quarts d\'heure par semaine, sans jamais inscrire cette dépense nulle part. Et le temps, contrairement à l\'électricité, ne se rembourse jamais.\n\nRien là de scandaleux. Mais il serait sage, de temps à autre, de faire les comptes autrement : non pas ce que coûte notre confort, mais ce qu\'il exige de nous en silence. C\'est souvent là que se cache ce que nous n\'avons pas choisi.',
      tr: '我们习惯计算东西的价钱，却不算它真正的代价。洗碗机可以趁促销买下；此后它索要的一切——水、电、保养、占去的厨房空间——却从账单上消失了。在我们这里，舒适很少是在享受它的那一刻付账的。这种延后并非出于恶意，而是源于我们衡量事物的方式。\n\n就说供暖。没有人会租一间没有暖气的公寓，可很少有租客清楚一次故障意味着什么：夜里发冷，衣服晾不干，随着室温下降，脾气也一点点磨没了。舒适只有在缺席时才被察觉。\n\n时间也一样。那些承诺替我们省时的应用，到头来往往更耗时：通知、更新、设置。你以为省下一刻钟，实际上每周搭进去三刻钟，而且这笔开销从不记在任何地方。而时间与电不同，从来不会退还。\n\n这些都不至于让人愤慨。但偶尔换个算法是明智的：不算我们的舒适要花多少钱，而算它在沉默中向我们索取了什么。我们并未选择的东西，往往就藏在那里。',
      qs: [
        { q: 'Quelle idée l\'auteur défend-il dans cette chronique ?', opts: [
          { t: 'Le confort a un coût qui échappe aux prix affichés.', best: true },
          { t: 'Les appareils ménagers coûtent trop cher à l\'achat.' },
          { t: 'Les locataires français paient des loyers excessifs.' }
        ] },
        { q: 'Que reproche l\'auteur aux applications censées faire gagner du temps ?', opts: [
          { t: 'Elles finissent par en faire perdre davantage.', best: true },
          { t: 'Elles sont réservées aux personnes âgées.' },
          { t: 'Elles coûtent plus cher que les appareils ménagers.' }
        ] },
        { q: 'Quel est le ton du dernier paragraphe ?', opts: [
          { t: 'Une invitation mesurée à changer de regard.', best: true },
          { t: 'Une condamnation indignée du progrès technique.' },
          { t: 'Une plaisanterie légère, sans portée réelle.' }
        ] }
      ],
      keys: [
        { w: 'se payer au moment où l\'on en profite', t: '在享受它的时候才付账（此处指代价被推迟）', e: 'Le confort, chez nous, se paie rarement au moment où l\'on en profite.', et: '在我们这里，舒适很少是在享受它的那一刻付账的。' },
        { w: 'tenir à la manière dont nous mesurons', t: '源于我们衡量事物的方式', e: 'Ce report ne relève pas de la mauvaise foi : il tient à la manière dont nous mesurons.', et: '这种延后并非出于恶意，而是源于我们衡量事物的方式。' },
        { w: 's\'effriter', t: '渐渐消磨、磨损（此处指情绪）', e: 'l\'humeur qui s\'effrite à mesure que la température baisse.', et: '随着室温下降，脾气也一点点磨没了。' },
        { w: 'faire les comptes autrement', t: '换一种算法；重新算账（引申为换个角度看代价）', e: 'Mais il serait sage, de temps à autre, de faire les comptes autrement : non pas ce que coûte notre confort, mais ce qu\'il exige de nous en silence.', et: '但偶尔换个算法是明智的：不算我们的舒适要花多少钱，而算它在沉默中向我们索取了什么。' }
      ]
    },
    {
      id: 'fr-r2', level: 'C2', title: 'L\'art perdu de la contradiction', src: 'Essai · environ 300 mots',
      text: 'Il y a une satisfaction immédiate, et trompeuse, à avoir raison. Elle tient moins à la solidité de nos arguments qu\'à l\'absence de toute objection. Or une opinion que personne ne contredit n\'est pas une opinion éprouvée : c\'est une opinion protégée. Et ce qui protège une idée finit souvent par l\'immobiliser. Nous confondons volontiers le silence de l\'assentiment avec la preuve de la vérité.\n\nLa contradiction, au sens exigeant du terme, n\'est pas la dispute. La dispute cherche à clore ; la contradiction cherche à ouvrir. Elle suppose que l\'autre puisse avoir partiellement raison, et que je puisse avoir partiellement tort — hypothèse humiliante, donc rarement formulée à voix haute, même quand elle nous traverse l\'esprit. Contredire, ce n\'est donc pas nier : c\'est exiger de l\'autre qu\'il précise ce qu\'il avance, et accepter qu\'il nous le demande en retour.\n\nNos échanges en ligne ont inversé les proportions. On y confond volontiers la critique d\'une idée avec l\'attaque d\'une personne, et l\'on préfère désigner un coupable plutôt que discuter une preuve. Le résultat est curieux : jamais on n\'a tant parlé de débat, et jamais les positions n\'ont si peu bougé. Chacun repart avec ses convictions intactes, et le sentiment d\'avoir été entendu. Cette impression est commode : elle permet de disqualifier un interlocuteur sans jamais discuter ce qu\'il dit.\n\nRéapprendre à contredire, ce serait d\'abord réapprendre à écouter jusqu\'au point où l\'on pourrait changer d\'avis. Peu de gens acceptent ce risque, et c\'est compréhensible : renoncer à une conviction ancienne coûte plus cher que de la défendre. Mais une société qui ne sait plus se contredire ne devient pas plus unie pour autant ; elle devient seulement plus silencieuse. Or le silence n\'a jamais valu accord. Ce n\'est pas une mince affaire, car il faut renoncer au plaisir de la dernière phrase.',
      tr: '占了理，会带来一种即刻的、却是虚假的满足。这种满足与其说来自论据的扎实，不如说来自无人反驳。可是，一种没人反驳的意见并不是经过检验的意见：它只是被保护起来的意见。而保护一种观念的东西，往往也正是让它僵住的东西。我们很容易把赞同的沉默当作真理的证明。\n\n严格意义上的“反驳”，并不是争吵。争吵想的是收场；反驳想的是打开。它假定对方可能部分有理，而我也可能部分有错——这是个令人难堪的假定，所以即便偶尔掠过心头，也很少有人说出口。所以，反驳不是否定：它要求对方把话讲清楚，也接受对方反过来这样要求自己。\n\n网络上的交流把比例颠倒了过来。人们常常把批评一个观点和攻击一个人混为一谈，宁愿指认一个罪人，也不愿讨论一份证据。结果颇为古怪：关于辩论的讨论从未如此之多，立场却从未挪动得如此之少。每个人都带着毫发无损的信念离开，还觉得自己被听见了。这个说法很省事：它让人可以取消一个对话者的资格，却从不讨论他到底说了什么。\n\n重新学会反驳，首先意味着重新学会倾听，一直听到自己有可能改变看法的那一刻。很少人愿意冒这个险，这也可以理解：放弃一个旧有的信念，比捍卫它更费代价。可是，一个不再懂得自我反驳的社会，并不会因此变得更团结；它只会变得更安静。而安静从来不等同于共识。这并非小事，因为那意味着放弃说出最后一句漂亮话的快感。',
      qs: [
        { q: 'Quelle thèse l\'auteur défend-il ?', opts: [
          { t: 'La contradiction est une pratique exigeante dont nous perdons l\'usage.', best: true },
          { t: 'Les débats en ligne sont plus rigoureux que les discussions de salon.' },
          { t: 'Il vaut mieux éviter toute discussion politique en société.' }
        ] },
        { q: 'Pourquoi l\'auteur oppose-t-il la dispute à la contradiction ?', opts: [
          { t: 'Parce que la dispute veut clore le désaccord, tandis que la contradiction veut l\'ouvrir.', best: true },
          { t: 'Parce que la dispute est toujours plus violente que la contradiction.' },
          { t: 'Parce que la contradiction n\'existe qu\'entre spécialistes.' }
        ] },
        { q: 'Comment décrire l\'attitude de l\'auteur dans la dernière phrase ?', opts: [
          { t: 'Lucide et inquiète, sans dramatisation.', best: true },
          { t: 'Triomphante et polémique.' },
          { t: 'Indifférente au sort de la société.' }
        ] }
      ],
      keys: [
        { w: 'une opinion protégée', t: '被保护起来的意见（未经反驳，因而不算被检验）', e: 'une opinion que personne ne contredit n\'est pas une opinion éprouvée : c\'est une opinion protégée.', et: '一种没人反驳的意见并不是经过检验的意见：它只是被保护起来的意见。' },
        { w: 'confondre le silence de l\'assentiment avec la preuve de la vérité', t: '把赞同的沉默当作真理的证明', e: 'Nous confondons volontiers le silence de l\'assentiment avec la preuve de la vérité.', et: '我们很容易把赞同的沉默当作真理的证明。' },
        { w: 'désigner un coupable plutôt que discuter une preuve', t: '宁肯指认一个罪人，也不愿讨论证据（转移焦点）', e: 'et l\'on préfère désigner un coupable plutôt que discuter une preuve.', et: '人们宁愿指认一个罪人，也不愿讨论一份证据。' },
        { w: 'disqualifier un interlocuteur', t: '取消对话者的资格（攻击其人而非其论）', e: 'elle permet de disqualifier un interlocuteur sans jamais discuter ce qu\'il dit.', et: '它让人可以取消一个对话者的资格，却从不讨论他到底说了什么。' }
      ]
    },
    {
      id: 'fr-r3', level: 'C2', title: 'Reformuler l’adversaire sans le trahir', src: 'Essai long · environ 380 mots',
      text: 'Quand la désapprobation est forte, une tentation guette : reformuler la thèse de l\'autre dans sa version la plus faible, puis triompher d\'une position que personne ne défend. Le procédé est si courant qu\'il passe pour de la vigueur intellectuelle. Il n\'est pourtant qu\'une économie : on s\'épargne l\'effort de comprendre ce qui, chez l\'adversaire, pourrait tenir. Or cet effort distingue le désaccord de la simple hostilité.\n\nReformuler fidèlement suppose de restituer la thèse dans sa meilleure version, avec les raisons qui la rendent plausible et les cas où elle s\'applique. Cela ne signifie pas la partager, ni même la trouver solide : cela signifie la rendre reconnaissable à celui qui la défend. Une reformulation réussie est celle que l\'intéressé valide, quitte à corriger une nuance. Si l\'on doit se battre contre un argument, autant choisir le bon.\n\nLa difficulté est que toute reformulation sélectionne. En voulant être généreux, on risque de prêter à l\'autre une cohérence qu\'il n\'a pas, de lisser ses hésitations, bref de parler à sa place. La générosité peut devenir une appropriation : on prête à l\'adversaire un porte-parole plus convaincant. D\'où un geste simple et souvent oublié : demander confirmation. « Est-ce bien cela que vous soutenez ? » Cette question n\'est pas une politesse ; elle déplace le rapport de force.\n\nL\'enjeu n\'est pas moral mais épistémique. On ne réfute pas une proposition qu\'on n\'a pas correctement identifiée ; on ne fait que repousser une silhouette. Et la reformulation produit un effet secondaire précieux : en obligeant chacun à préciser ce qu\'il avance, elle transforme souvent le désaccord. Ce qui semblait un fossé se révèle un malentendu sur les faits, ou un différend plus étroit, donc plus discutable. Le désaccord y gagne en précision, ce qui n\'est pas un mince avantage.\n\nIl ne s\'agit donc pas d\'une exigence de neutralité, encore moins d\'une invitation à s\'attendrir. On peut rester fermement opposé, et même le dire sans détour, à condition d\'avoir d\'abord accordé à l\'autre la version de sa pensée qu\'il reconnaîtrait comme sienne. Cette obligation est réciproque et provisoire : elle ne suspend pas le jugement, elle en pose la condition. Reformuler n\'est pas céder ; c\'est s\'assurer qu\'on ne se bat pas contre un homme de paille. Le prix de cette honnêteté est modeste ; son rendement, dans une discussion qui compte, est considérable.',
      tr: '当反对的力度很大时，一种诱惑就在旁边：把对方的论点改写成它最弱的版本，然后击败一个其实没人主张的立场。这个手法太常见，以至于被当成了思想有力的表现。可它只是一种省力：我们省掉了理解对方哪一部分可能站得住的那份功夫。而正是这份功夫，把“分歧”与单纯的“敌意”区分开来。\n\n忠实地复述，意味着把论点还原到它最好的版本，连同使它显得可信的理由、以及它适用的情形。这并不等于赞同它，甚至不等于觉得它扎实：它意味着让为它辩护的人能够认出自己的话。一次成功的复述，是当事人点头认可的那一次——哪怕他要修正一处细微差别。既然要和一个论点交手，不如挑对的那一个。\n\n难处在于，任何复述都在做筛选。出于善意，我们可能把对方本没有的一贯性强加给他，抹平他的犹疑，说白了，就是替他发言。善意也可能变成一种挪用：我们给对手配了一位更有说服力的代言人。于是需要一个简单却常被遗忘的动作：先问一句确认。“您主张的确实是这个意思吗？”这个问题不是客套；它改变了力量对比。\n\n说到底，关键不在道德，而在认识。一个没有被准确辨认的命题，是驳不倒的；我们只是在推开一个人影。而复述会带来一个珍贵的副作用：它迫使每个人把话讲清楚，于是往往改变了分歧本身。原来看似一道鸿沟的，暴露出来只是对事实的误解，或是一处更窄、因而更可争论的分歧。分歧因此变得更硬，也更精确——这并非微不足道的好处。\n\n所以，这并不是要求中立，更不是劝人变得心软。人可以坚定地反对，甚至把话说得不留余地，前提是先让对方得到那个他自己会认作本意的版本。这项义务是相互的，也是暂时的：它不悬置判断，而是为判断设定条件。复述不是退让；它是确保自己不是在和一个稻草人作战。这份诚实代价不高；而在一场要紧的讨论里，它的收益相当可观。',
      qs: [
        { q: 'Quelle est la thèse centrale de cet essai ?', opts: [
          { t: 'Avant de réfuter une position, il faut la reformuler dans la version que son défenseur reconnaîtrait comme sienne.', best: true },
          { t: 'Il faut éviter les désaccords trop forts pour préserver la qualité des relations.' },
          { t: 'La neutralité est la seule attitude honnête dans un débat intellectuel.' }
        ] },
        { q: 'Pourquoi l\'auteur juge-t-il nécessaire de demander « Est-ce bien cela que vous soutenez ? »', opts: [
          { t: 'Parce que la reformulation risque de parler à la place de l\'autre et doit être validée par lui.', best: true },
          { t: 'Parce que cette formule permet de clore la discussion plus rapidement.' },
          { t: 'Parce qu\'elle oblige l\'adversaire à reconnaître qu\'il a tort.' }
        ] },
        { q: 'Que signifie « on ne fait que repousser une silhouette » au quatrième paragraphe ?', opts: [
          { t: 'On combat une version vague et mal identifiée de la thèse, plutôt que la position réelle.', best: true },
          { t: 'On écarte physiquement un adversaire lors d\'un débat public.' },
          { t: 'On se contente d\'une image rhétorique à la place d\'un argument.' }
        ] },
        { q: 'Comment décrire le ton de l\'essai ?', opts: [
          { t: 'Ferme et scrupuleux, sans prétendre à la neutralité.', best: true },
          { t: 'Ironique et désabusé à l\'égard de tout débat.' },
          { t: 'Conciliant jusqu\'à effacer son propre jugement.' }
        ] }
      ],
      keys: [
        { w: 'passer pour de la vigueur intellectuelle', t: '被当成思想有力的表现（实际只是省力）', e: 'Le procédé est si courant qu\'il passe pour de la vigueur intellectuelle.', et: '这个手法太常见，以至于被当成了思想有力的表现。' },
        { w: 'prêter à l\'autre une cohérence qu\'il n\'a pas', t: '把对方本没有的一贯性强加给他', e: 'En voulant être généreux, on risque de prêter à l\'autre une cohérence qu\'il n\'a pas, de lisser ses hésitations, bref de parler à sa place.', et: '出于善意，我们可能把对方本没有的一贯性强加给他，抹平他的犹疑，说白了，就是替他发言。' },
        { w: 'déplacer le rapport de force', t: '改变力量对比（一句确认就把攻守关系挪动）', e: 'Cette question n\'est pas une politesse ; elle déplace le rapport de force.', et: '这个问题不是客套；它改变了力量对比。' },
        { w: 'un homme de paille', t: '稻草人（被歪曲后加以攻击的假论点）', e: 'Reformuler n\'est pas céder ; c\'est s\'assurer qu\'on ne se bat pas contre un homme de paille.', et: '复述不是退让；它是确保自己不是在和一个稻草人作战。' }
      ]
    },
    {
      id: 'fr-r4', level: 'C2', title: 'Recommander n’est pas décider', src: 'Reportage · environ 400 mots',
      text: 'À l\'entrée de la médiathèque de Saint-Herblain, un écran vertical propose quatre livres « choisis pour vous ». Pour l\'utiliser, il faut badger : la machine a déjà consulté les emprunts des trois dernières années. Nadia, bibliothécaire depuis douze ans, hausse les épaules. « Au début, on trouvait ça ludique. Aujourd\'hui, des lecteurs me demandent pourquoi je ne leur propose pas ce que l\'écran leur propose. » Le rayon qu\'elle avait constitué autour du roman policier mexicain, lui, n\'apparaît nulle part : la machine ne l\'a jamais vu.\n\nLe constat n\'est pas propre aux bibliothèques. Une plateforme de musique, interrogée pour ce reportage, reconnaît que « 80 % des écoutes se concentrent sur 5 % du catalogue ». La raison n\'est pas mystérieuse : un système qui apprend de nos clics recommande ce qui ressemble à ce que nous avons déjà cliqué. Chaque recommandation heureuse réduit un peu le périmètre de la suivante. Rien ne disparaît du catalogue, mais tout ce qui n\'est pas remonté devient, en pratique, invisible.\n\n« Le moteur ne choisit pas à votre place, il classe », insiste Thomas, ingénieur chez un opérateur de streaming. « Sauf que personne ne descend jusqu\'à la dixième page. » Il décrit les arbitrages : taux de clic, durée de visionnage, rétention à sept jours. « On optimise ce qu\'on peut mesurer. Le plaisir de découvrir un disque qu\'on n\'attendait pas, ça ne se mesure pas. Donc ça n\'entre pas dans l\'équation. » La nuance est technique ; sa conséquence ne l\'est pas.\n\nDans une salle de terminale, à Rennes, une professeure de lettres a tenté l\'expérience : choisir un roman sans regarder ni les notes, ni les « recommandations pour vous ». « Ils ont été désemparés. Certains m\'ont demandé un critère. » L\'un d\'eux a fini par répondre : « Je prends ce que mon application m\'aurait donné. » Elle n\'y voit pas de la paresse, plutôt l\'effet d\'un entraînement : on ne choisit plus, on valide une présélection. La différence est ténue à l\'échelle d\'un livre ; elle ne l\'est plus à l\'échelle d\'une vie de lecteur.\n\nNadia a repris une habitude ancienne : trois livres posés sur le comptoir, sans étiquette, sans algorithme, avec une phrase manuscrite expliquant pourquoi ils sont là. « Le lecteur peut dire non. C\'est tout ce que je demande : qu\'il ait quelque chose à refuser. » La recommandation n\'est pas le problème ; sa transparence l\'est. Un système qui nous connaît mieux que nous-mêmes ne décide pas à notre place : il nous installe dans l\'idée que choisir est un effort inutile. C\'est peut-être dans cette fatigue, plus que dans l\'algorithme, que le choix se perd.',
      tr: '在圣埃尔布兰的媒体图书馆入口，一块竖屏推荐四本“为您挑选”的书。要用它，得先刷借书卡：机器早已查过你过去三年的借阅记录。做了十二年图书管理员的娜迪亚耸耸肩。“一开始我们觉得挺好玩。现在却有读者问我，为什么不给他推荐屏幕上那本。”她自己搭起来的那个墨西哥侦探小说专架，在屏幕上哪儿也找不到：机器从没见过它。\n\n这种情况并不只出现在图书馆。一家接受本次采访的音乐平台承认，“80% 的播放集中在 5% 的曲库上”。原因并不神秘：一个从我们的点击中学习的系统，推荐的正是与我们已点击内容相似的东西。每一次令人满意的推荐，都会把下一次的范围缩小一点。曲库里什么都没消失，但凡是没被重新推上来的，实际上就等于看不见。\n\n“推荐引擎并不替您选择，它只是排序。”某流媒体平台的工程师托马强调，“可问题在于，没人会翻到第十页。”他讲起其中的取舍：点击率、观看时长、七日留存。“我们优化的是能测量的东西。发现一张意料之外的唱片那种快乐，是测量不出来的。所以它进不了这个公式。”这一区别是技术性的，后果却不是。\n\n在雷恩的一间高三教室里，一位文学老师做了这样一个尝试：选一本小说，但不许看评分，也不许看“为您推荐”。“他们一下子不知所措。有人反过来问我要一个标准。”其中一个最后说：“我就选我的应用会给我的那本。”在她看来，这不是懒，而更像一种训练的结果：人不再挑选，只是对一份预选名单表示认可。这个差别，就一本书而言很细微；放到一个人的阅读生涯里，就不细微了。\n\n娜迪亚重新拾起一个老习惯：柜台上放三本书，不贴任何标签，不经过算法，只附一张手写纸条，说明它们为什么在这里。“读者可以说不要。我要的就是这一点：他面前得有东西可以拒绝。”推荐本身不是问题，它是否透明才是。一个比我们更了解我们的系统，并不替我们做决定：它只是让我们习惯于相信，选择是一场多余的努力。选择也许正是在这种疲惫里、而不只是在这个算法里丢失的。',
      qs: [
        { q: 'Quelle idée ce reportage défend-il ?', opts: [
          { t: 'La recommandation automatique rétrécit le choix et décharge l\'usager de son jugement.', best: true },
          { t: 'Les bibliothèques devraient retirer tous les écrans de leurs entrées.' },
          { t: 'Les algorithmes conseillent mieux les lecteurs que les bibliothécaires.' }
        ] },
        { q: 'Pourquoi le rayon de roman policier mexicain de Nadia est-il absent de l\'écran ?', opts: [
          { t: 'Parce que le système ne remonte que ce qui ressemble aux usages déjà enregistrés.', best: true },
          { t: 'Parce que ces livres ont été retirés du catalogue de la médiathèque.' },
          { t: 'Parce que la direction a demandé de ne plus afficher ce rayon.' }
        ] },
        { q: 'Que signifie « désemparés » au quatrième paragraphe ?', opts: [
          { t: 'Déroutés, privés de leurs repères habituels.', best: true },
          { t: 'Enthousiastes à l\'idée de choisir enfin librement.' },
          { t: 'Indifférents à l\'exercice proposé par la professeure.' }
        ] },
        { q: 'Comment décrire l\'attitude du reportage envers la recommandation ?', opts: [
          { t: 'Critique sur ses effets, sans en réclamer la suppression.', best: true },
          { t: 'Hostile au point de condamner tout usage des algorithmes.' },
          { t: 'Neutre, puisqu\'il se borne à rapporter des propos.' }
        ] }
      ],
      keys: [
        { w: 'réduire un peu le périmètre de la suivante', t: '让下一次的范围缩小一点（每次推荐都在收窄后续可能）', e: 'Chaque recommandation heureuse réduit un peu le périmètre de la suivante.', et: '每一次令人满意的推荐，都会把下一次的范围缩小一点。' },
        { w: 'devenir, en pratique, invisible', t: '实际上等于看不见（未被推荐即等于不存在，并非真被删除）', e: 'Rien ne disparaît du catalogue, mais tout ce qui n\'est pas remonté devient, en pratique, invisible.', et: '曲库里什么都没消失，但凡是没被重新推上来的，实际上就等于看不见。' },
        { w: 'valider une présélection', t: '对一份预选名单表示认可（看似在选，实则在确认）', e: 'Elle n\'y voit pas de la paresse, plutôt l\'effet d\'un entraînement : on ne choisit plus, on valide une présélection.', et: '在她看来，这不是懒，而更像一种训练的结果：人不再挑选，只是对一份预选名单表示认可。' },
        { w: 'installer dans l\'idée que choisir est un effort inutile', t: '让人习惯于相信选择是多余的努力（悄悄取消判断的意愿）', e: 'Un système qui nous connaît mieux que nous-mêmes ne décide pas à notre place : il nous installe dans l\'idée que choisir est un effort inutile.', et: '一个比我们更了解我们的系统，并不替我们做决定：它只是让我们习惯于相信，选择是一场多余的努力。' }
      ],
      patterns: [
        { frame: "X n'est pas le problème ; Y l'est", t: '对比否定：先排除 X，再把问题落到 Y 上（不是 X，而是 Y）', e: "La recommandation n'est pas le problème ; sa transparence l'est.", et: '推荐本身不是问题，它是否透明才是。', tip: "原文用分号加 l'est 复指，省去重复 problème；同一功能也可说 Ce n'est pas tant X que Y，更书面。" },
        { frame: 'X, encore que Y（口语常作 X, sauf que Y）', t: '让步-转折：先让一步承认 X，再用 Y 把话锋转回来', e: 'Le moteur ne choisit pas à votre place, il classe, sauf que personne ne descend jusqu\'à la dixième page.', et: '推荐引擎并不替您选择，它只是排序——可问题在于，没人会翻到第十页。', tip: 'sauf que 后面才是真正的落点，前面只是让一步；encore que 更书面且多接虚拟式，sans pour autant 则用来挡住一个过度推论。' },
        { frame: 'C\'est dans X, plus que dans Y, que Z se joue', t: '归因与责任：用 c\'est… que 把 Z 归到 X，同时压低 Y 的比重', e: "C'est peut-être dans cette fatigue, plus que dans l'algorithme, que le choix se perd.", et: '选择也许正是在这种疲惫里、而不只是在这个算法里丢失的。', tip: 'plus que 不是完全否定 Y，只是把比重压到 X 上，peut-être 又留了余地；正式改写可用 imputer Z à X（带追责）或 attribuer Z à X（较中性）。' }
      ]
    }
  ],
  drills: [
    {
      id: 'fr-l1', level: 'C2', title: 'Écoute avancée · réunion, podcast et négociation', desc: 'Des phrases entières au débit réel : saisir l’attitude et le non-dit',
      items: [
        { w: 'je nuancerais quand même', t: '不过我还是得补一句、打个折扣（先认同再收紧的软性异议）', e: "Écoutez, sur le principe je vous suis, mais je nuancerais quand même : le calendrier me paraît trop serré pour qu'on livre quelque chose de propre.", et: '听我说，原则上我同意您，不过我还是得补一句：时间表在我看来太紧了，很难交出像样的东西。', p: 'ʒə nɥɑ̃sʁɛ kɑ̃ mɛm' },
        { w: 'si vous me permettez', t: '如果允许我插一句（被抢话后礼貌地把话轮拿回来）', e: "Pardon, si vous me permettez, je reprends là où j'en étais : la question que vous venez de poser, honnêtement, je n'avais pas fini d'y répondre.", et: '抱歉，容我插一句，我接着刚才说的讲：您刚问的这个问题，说实话，我还没答完。', p: 'si vu mə pɛʁmɛte' },
        { w: 'en échange de quoi', t: '那拿什么来换（追问对等条件，直接但不失礼）', e: 'Je peux tenir le délai, mais en échange de quoi ? Parce que si je dois livrer plus tôt, il me faut au moins une personne de plus.', et: '期限我可以守住，可拿什么来换呢？因为如果要我提前交付，至少得再给我一个人。', p: 'ɑ̃ eʃɑ̃ʒ də kwa' },
        { w: "ce n'est pas mon rayon", t: '这不在我的职责或专长范围内（先划界，避免硬答）', e: "Là, franchement, ce n'est pas mon rayon : je peux vous dire comment on mesure, mais sur la cause exacte, je ne m'avancerais pas.", et: '这一点说实话不在我的范围里：我能告诉您我们怎么测量，但具体原因，我不敢下断言。', p: 'sə nɛ pa mɔ̃ ʁɛjɔ̃' },
        { w: "c'est toujours un régal", t: '总是“一大享受”（此处反讽，实为抱怨）', e: "Le poisson était encore un peu cru, mais bon, c'est toujours un régal de passer trois heures à attendre le dessert.", et: '鱼还是有点生，不过算了，花三个小时等甜点，也真是“享受”。', p: 'sɛ tuʒuʁ œ̃ ʁeɡal' },
        { w: 'je ne peux rien vous garantir', t: '我什么都不能向您保证（先把预期压低，给自己留退路）', e: "Disons que je fais remonter le dossier aujourd'hui, mais je ne peux rien vous garantir avant la fin de la semaine, et encore, sans certitude.", et: '这么说吧，我今天把材料往上反映，但周末之前我什么都不能保证，而且就算到那时也说不准。', p: 'ʒə nə pø ʁjɛ̃ vu ɡaʁɑ̃tiʁ' }
      ]
    }
  ]
});
