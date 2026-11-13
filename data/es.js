LP.registerCourse({
  id: 'es', name: '西班牙语', native: 'Español', flag: '🇪🇸', tts: 'es-ES', typing: true, order: true,
  levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
  units: [
    { id: 'es-u1', title: '第一单元 · 问候与自我介绍', desc: '西语发音规则很规律，先开口', color: '#58cc02', lessons: [
      { id: 'es-u1-l1', title: '基本问候', items: [
        { w: 'hola', t: '你好', e: 'Hola, ¿cómo estás?', et: '你好，你好吗？' },
        { w: 'buenos días', t: '早上好', e: 'Buenos días, profesor.', et: '老师，早上好。' },
        { w: 'buenas noches', t: '晚上好/晚安', e: 'Buenas noches, hasta mañana.', et: '晚安，明天见。' },
        { w: 'adiós', t: '再见', e: 'Adiós, nos vemos mañana.', et: '再见，明天见。' },
        { w: 'gracias', t: '谢谢', e: 'Gracias por tu ayuda.', et: '谢谢你的帮助。' },
        { w: 'por favor', t: '请', e: 'Un café, por favor.', et: '请来一杯咖啡。' },
        { w: 'perdón', t: '对不起', e: 'Perdón, llego tarde.', et: '对不起，我迟到了。' },
        { w: 'sí', t: '是', e: 'Sí, estoy listo.', et: '是的，我准备好了。' }
      ] },
      { id: 'es-u1-l2', title: '我是谁', items: [
        { w: 'yo', t: '我', e: 'Yo soy estudiante.', et: '我是学生。' },
        { w: 'tú', t: '你', e: 'Tú eres mi amigo.', et: '你是我的朋友。' },
        { w: 'nombre', t: '名字', e: 'Mi nombre es Li Ming.', et: '我的名字是李明。' },
        { w: 'amigo', t: '朋友', e: 'Él es mi amigo.', et: '他是我的朋友。' },
        { w: 'soy', t: '我是', e: 'Soy profesor.', et: '我是老师。' },
        { w: 'eres', t: '你是', e: 'Eres muy amable.', et: '你很友善。' },
        { w: 'estudiante', t: '学生', e: 'Ella es estudiante.', et: '她是学生。' },
        { w: 'profesor', t: '老师', e: 'Él es profesor.', et: '他是老师。' }
      ] },
      { id: 'es-u1-l3', title: '基本句式', items: [
        { w: 'esto', t: '这个', e: 'Esto es un libro.', et: '这是一本书。' },
        { w: 'eso', t: '那个', e: 'Eso es un problema.', et: '那是个问题。' },
        { w: 'qué', t: '什么', e: '¿Qué es esto?', et: '这是什么？' },
        { w: 'quién', t: '谁', e: '¿Quién es él?', et: '他是谁？' },
        { w: 'dónde', t: '哪里', e: '¿Dónde está la estación?', et: '车站在哪里？' },
        { w: 'es', t: '是', e: 'Esto es agua.', et: '这是水。' },
        { w: 'bien', t: '好', e: 'Estoy bien, gracias.', et: '我很好，谢谢。' },
        { w: 'no', t: '不', e: 'No, no soy estudiante.', et: '不，我不是学生。' }
      ] }
    ] },
    { id: 'es-u2', title: '第二单元 · 数字与生活', desc: '数字、吃东西和问路', color: '#1cb0f6', lessons: [
      { id: 'es-u2-l1', title: '一到八', items: [
        { w: 'uno', t: '一', e: 'Uno, dos, tres.', et: '一，二，三。' },
        { w: 'dos', t: '二', e: 'Dos cafés, por favor.', et: '请来两杯咖啡。' },
        { w: 'tres', t: '三', e: 'Hay tres libros.', et: '有三本书。' },
        { w: 'cuatro', t: '四', e: 'Cuatro sillas, por favor.', et: '请来四把椅子。' },
        { w: 'cinco', t: '五', e: 'Tengo cinco euros.', et: '我有五欧元。' },
        { w: 'seis', t: '六', e: 'Hay seis sillas.', et: '有六把椅子。' },
        { w: 'siete', t: '七', e: 'Siete días en una semana.', et: '一周有七天。' },
        { w: 'ocho', t: '八', e: 'Ocho horas de sueño.', et: '八小时睡眠。' }
      ] },
      { id: 'es-u2-l2', title: '食物', items: [
        { w: 'agua', t: '水', e: 'Un vaso de agua, por favor.', et: '请来一杯水。' },
        { w: 'café', t: '咖啡', e: 'Me gusta el café.', et: '我喜欢咖啡。' },
        { w: 'té', t: '茶', e: 'Ella bebe té.', et: '她喝茶。' },
        { w: 'pan', t: '面包', e: 'Como pan por la mañana.', et: '我早上吃面包。' },
        { w: 'comida', t: '食物/饭', e: 'La comida está lista.', et: '饭做好了。' },
        { w: 'comer', t: '吃', e: 'Quiero comer ahora.', et: '我现在想吃东西。' },
        { w: 'beber', t: '喝', e: 'Bebo agua todos los días.', et: '我每天喝水。' },
        { w: 'rico', t: '好吃', e: 'Este pan está rico.', et: '这个面包很好吃。' }
      ] },
      { id: 'es-u2-l3', title: '出行', items: [
        { w: 'aquí', t: '这里', e: 'Aquí está la estación.', et: '车站在这里。' },
        { w: 'allí', t: '那里', e: 'Allí está mi casa.', et: '我的家在那里。' },
        { w: 'calle', t: '街道', e: 'Vivo en esta calle.', et: '我住在这条街上。' },
        { w: 'estación', t: '车站', e: 'La estación está cerca.', et: '车站很近。' },
        { w: 'autobús', t: '公交车', e: 'Tomo el autobús todos los días.', et: '我每天坐公交车。' },
        { w: 'izquierda', t: '左边', e: 'Gira a la izquierda.', et: '向左转。' },
        { w: 'derecha', t: '右边', e: 'La tienda está a la derecha.', et: '商店在右边。' },
        { w: 'cerca', t: '近', e: 'Mi casa está cerca.', et: '我家很近。' }
      ] }
    ] },
    { id: 'es-u3', level: 'A1', title: '第三单元 · 天气与季节', desc: '聊天气、说四季，出门前先看一眼天', color: '#58cc02', lessons: [
      { id: 'es-u3-l1', title: '天气怎么样', items: [
        { w: 'tiempo', t: '天气', e: '¿Qué tiempo hace hoy?', et: '今天天气怎么样？' },
        { w: 'hace sol', t: '出太阳', e: 'Hoy hace sol en toda la ciudad.', et: '今天全城都是晴天。' },
        { w: 'hace calor', t: '热', e: 'En julio hace mucho calor.', et: '七月非常热。' },
        { w: 'hace frío', t: '冷', e: 'En invierno hace frío en Beijing.', et: '北京冬天很冷。' },
        { w: 'llueve', t: '下雨', e: 'Mira, ya llueve.', et: '看，已经开始下雨了。' },
        { w: 'nieva', t: '下雪', e: 'En las montañas nieva en enero.', et: '一月份山里会下雪。' },
        { w: 'viento', t: '风', e: 'Hoy hay mucho viento.', et: '今天风很大。' },
        { w: 'nublado', t: '阴天', e: 'Está nublado, pero no llueve.', et: '天阴着，但没下雨。' }
      ] },
      { id: 'es-u3-l2', title: '一年四季', items: [
        { w: 'primavera', t: '春天', e: 'En primavera se abren las flores.', et: '春天百花盛开。' },
        { w: 'verano', t: '夏天', e: 'En verano vamos a la playa.', et: '夏天我们去海边。' },
        { w: 'otoño', t: '秋天', e: 'El otoño es mi estación favorita.', et: '秋天是我最喜欢的季节。' },
        { w: 'invierno', t: '冬天', e: 'Aquí el invierno es corto.', et: '这里冬天很短。' },
        { w: 'lluvia', t: '雨', e: 'Me encanta el olor de la lluvia.', et: '我喜欢雨的气味。' },
        { w: 'nieve', t: '雪', e: 'Los niños juegan con la nieve.', et: '孩子们在雪地里玩。' },
        { w: 'nube', t: '云', e: 'El cielo está lleno de nubes.', et: '天空布满了云。' },
        { w: 'grado', t: '度', e: 'Hoy hay treinta y cinco grados.', et: '今天三十五度。' }
      ] },
      { id: 'es-u3-l3', title: '出门看天', items: [
        { w: 'paraguas', t: '雨伞', e: 'Lleva el paraguas, puede llover.', et: '带上伞，可能会下雨。' },
        { w: 'abrigo', t: '大衣', e: 'Ponte el abrigo, hace frío.', et: '穿上大衣，天冷。' },
        { w: 'gafas de sol', t: '太阳镜', e: 'Con tanto sol, necesito gafas de sol.', et: '太阳这么大，我需要太阳镜。' },
        { w: 'hace buen tiempo', t: '天气好', e: 'Mañana va a hacer buen tiempo.', et: '明天天气会很好。' },
        { w: 'hace mal tiempo', t: '天气差', e: 'Hoy hace mal tiempo, mejor quedarse en casa.', et: '今天天气不好，最好待在家里。' },
        { w: 'norte', t: '北方', e: 'En el norte llueve mucho.', et: '北方雨水很多。' },
        { w: 'sur', t: '南方', e: 'En el sur hace más calor.', et: '南方更热。' },
        { w: 'temperatura', t: '温度', e: 'La temperatura ha bajado diez grados.', et: '气温下降了十度。' }
      ] }
    ] },
    { id: 'es-u8', level: 'A1', title: '第八单元 · 外出吃饭', desc: '点餐、叫服务员、买单，一顿饭的完整流程', color: '#1cb0f6', lessons: [
      { id: 'es-u8-l1', title: '点餐', items: [
        { w: 'restaurante', t: '餐厅', e: 'Esta noche cenamos en un restaurante del centro.', et: '今晚我们在市中心一家餐厅吃晚饭。' },
        { w: 'camarero', t: '服务员', e: 'El camarero nos trae la carta.', et: '服务员给我们拿来了菜单。' },
        { w: 'mesa', t: '桌子/餐位', e: 'Una mesa para dos, por favor.', et: '请给我们一张两人桌。' },
        { w: 'carta', t: '菜单', e: '¿Nos trae la carta, por favor?', et: '请给我们拿一下菜单好吗？' },
        { w: 'pedir', t: '点（餐）/请求', e: 'Vamos a pedir primero una ensalada.', et: '我们先点一份沙拉。' },
        { w: 'plato', t: '菜/盘子', e: 'Este plato lleva pollo y arroz.', et: '这道菜有鸡肉和米饭。' },
        { w: 'especialidad', t: '招牌菜', e: 'La especialidad de la casa es la paella.', et: '本店的招牌菜是海鲜饭。' },
        { w: 'recomendar', t: '推荐', e: '¿Qué me recomienda para beber?', et: '您推荐我喝点什么？' }
      ] },
      { id: 'es-u8-l2', title: '菜品与饮料', items: [
        { w: 'entrante', t: '开胃菜', e: 'De entrante, tomaré una sopa de verduras.', et: '开胃菜我要一份蔬菜汤。' },
        { w: 'primer plato', t: '第一道菜', e: 'De primer plato, quiero pescado a la plancha.', et: '第一道菜我要烤鱼。' },
        { w: 'segundo plato', t: '第二道菜', e: 'El segundo plato viene con patatas.', et: '第二道菜配土豆。' },
        { w: 'postre', t: '甜点', e: '¿Qué hay de postre hoy?', et: '今天有什么甜点？' },
        { w: 'carne', t: '肉', e: 'La carne está un poco dura.', et: '这肉有点老。' },
        { w: 'pescado', t: '鱼', e: 'El pescado del día está muy fresco.', et: '今天的鱼非常新鲜。' },
        { w: 'verdura', t: '蔬菜', e: 'Como verdura todos los días.', et: '我每天都吃蔬菜。' },
        { w: 'vino', t: '葡萄酒', e: 'Una copa de vino tinto, por favor.', et: '请来一杯红葡萄酒。' }
      ] },
      { id: 'es-u8-l3', title: '买单结账', items: [
        { w: 'pedir la cuenta', t: '买单', e: 'Cuando pueda, ¿podemos pedir la cuenta, por favor?', et: '您方便时，我们可以结账吗？' },
        { w: 'propina', t: '小费', e: 'En España la propina no es obligatoria.', et: '在西班牙小费不是必须给的。' },
        { w: 'efectivo', t: '现金', e: '¿Puedo pagar en efectivo?', et: '我可以付现金吗？' },
        { w: 'pagar', t: '支付', e: 'Pago yo, que hoy invito.', et: '我来付，今天我请客。' },
        { w: 'factura', t: '发票', e: 'Necesito una factura con el número de la empresa.', et: '我需要一张带公司税号的发票。' },
        { w: 'cambio', t: '零钱/找零', e: 'Quédese con el cambio.', et: '零钱不用找了。' },
        { w: 'para llevar', t: '打包/外带', e: 'Lo que sobra, ¿me lo pone para llevar?', et: '剩下的能帮我打包吗？' },
        { w: 'reserva', t: '预订', e: 'Tenemos una reserva a nombre de Li.', et: '我们有一个用李的名字订的位子。' }
      ] }
    ] },
    { id: 'es-u9', level: 'A1', title: '第九单元 · 商店购物', desc: '问价、挑尺码颜色、试穿付款和退换', color: '#58cc02', lessons: [
      { id: 'es-u9-l1', title: '询价挑货', items: [
        { w: 'tienda', t: '商店', e: 'La tienda abre a las diez de la mañana.', et: '这家商店上午十点开门。' },
        { w: 'precio', t: '价格', e: 'El precio está marcado en la etiqueta.', et: '价格标在标签上。' },
        { w: 'cuánto cuesta', t: '多少钱', e: '¿Cuánto cuesta esta camisa?', et: '这件衬衫多少钱？' },
        { w: 'barato', t: '便宜的', e: 'Este modelo es más barato que el otro.', et: '这个款式比另一个便宜。' },
        { w: 'caro', t: '贵的', e: 'Me parece un poco caro para su calidad.', et: '就这个质量，我觉得有点贵。' },
        { w: 'rebajas', t: '打折季', e: 'En enero hay rebajas en toda la calle.', et: '一月整条街都在打折。' },
        { w: 'oferta', t: '特价', e: 'Estos zapatos están de oferta esta semana.', et: '这双鞋这周在做特价。' },
        { w: 'talla', t: '尺码', e: '¿Tiene una talla más?', et: '有大一码的吗？' }
      ] },
      { id: 'es-u9-l2', title: '尺码与颜色', items: [
        { w: 'color', t: '颜色', e: '¿Lo tiene en otro color?', et: '这个有别的颜色吗？' },
        { w: 'probarse', t: '试穿', e: '¿Puedo probármelo, por favor?', et: '我可以试穿一下吗？' },
        { w: 'probador', t: '试衣间', e: 'El probador está al fondo de la tienda.', et: '试衣间在店的最里面。' },
        { w: 'quedar', t: '合身', e: 'Esta chaqueta me queda estrecha de hombros.', et: '这件外套肩部我穿得有点紧。' },
        { w: 'grande', t: '大的', e: 'Me queda un poco grande.', et: '我穿有点大。' },
        { w: 'pequeño', t: '小的', e: '¿Tiene uno más pequeño?', et: '有小一点的吗？' },
        { w: 'algodón', t: '棉', e: 'Prefiero una camiseta de algodón.', et: '我更喜欢棉的T恤。' },
        { w: 'escaparate', t: '橱窗', e: 'Me gustó el vestido del escaparate.', et: '我喜欢橱窗里那条裙子。' }
      ] },
      { id: 'es-u9-l3', title: '付款与退换', items: [
        { w: 'mostrador', t: '柜台', e: 'Pague en el mostrador de la derecha.', et: '请在右边的柜台付款。' },
        { w: 'descuento', t: '折扣', e: '¿Me puede hacer un descuento por pagar al contado?', et: '付现金的话能给我打个折吗？' },
        { w: 'devolver', t: '退货', e: 'Si no le sirve, puede devolverlo en quince días.', et: '如果不合适，十五天内可以退。' },
        { w: 'cambiar', t: '更换', e: 'Quisiera cambiar esta talla por una mayor.', et: '我想把这个尺码换成大一号的。' },
        { w: 'ticket', t: '小票', e: 'Guarde el ticket para cualquier cambio.', et: '小票请留好，方便退换。' },
        { w: 'garantía', t: '保修', e: 'El reloj tiene dos años de garantía.', et: '这块表有两年保修。' },
        { w: 'envolver', t: '包装', e: '¿Me lo puede envolver para regalo?', et: '能帮我包装成礼物吗？' },
        { w: 'gastar', t: '花费', e: 'No quiero gastar más de cincuenta euros.', et: '我不想花超过五十欧元。' }
      ] }
    ] },
    { id: 'es-u4', level: 'A2', title: '第四单元 · 租房搬家', desc: '找房子、看房、签合同搬家，一条龙', color: '#1cb0f6', lessons: [
      { id: 'es-u4-l1', title: '找房子', items: [
        { w: 'alquilar', t: '租', e: 'Quiero alquilar un piso cerca del metro.', et: '我想在地铁附近租一套房。' },
        { w: 'piso', t: '住房/公寓', e: 'El piso tiene dos habitaciones.', et: '这套房有两个房间。' },
        { w: 'alquiler', t: '租金', e: 'El alquiler es de ochocientos euros al mes.', et: '租金每月八百欧元。' },
        { w: 'habitación', t: '房间', e: 'La habitación es grande y luminosa.', et: '房间又大又亮。' },
        { w: 'anuncio', t: '广告', e: 'He visto un anuncio de un piso amueblado.', et: '我看到一条带家具住房的广告。' },
        { w: 'inmobiliaria', t: '房产中介', e: 'Llama a la inmobiliaria para pedir una visita.', et: '给中介打电话约看房。' },
        { w: 'dueño', t: '房东', e: 'El dueño pide un mes de fianza.', et: '房东要求一个月押金。' },
        { w: 'amueblado', t: '带家具的', e: '¿El piso viene amueblado?', et: '这房子带家具吗？' }
      ] },
      { id: 'es-u4-l2', title: '看房', items: [
        { w: 'visita', t: '看房/参观', e: 'La visita al piso es mañana a las cinco.', et: '看房时间是明天五点。' },
        { w: 'cocina', t: '厨房', e: 'La cocina es pequeña pero nueva.', et: '厨房小但是很新。' },
        { w: 'baño', t: '卫生间', e: 'El baño está recién reformado.', et: '卫生间刚翻新过。' },
        { w: 'balcón', t: '阳台', e: 'Desde el balcón se ve el parque.', et: '从阳台能看到公园。' },
        { w: 'luz', t: '光线', e: 'El salón tiene mucha luz.', et: '客厅采光很好。' },
        { w: 'zona', t: '地段', e: 'Es una zona tranquila y bien comunicada.', et: '这一带安静、交通便利。' },
        { w: 'ruido', t: '噪音', e: 'Por la noche no se oye ningún ruido.', et: '晚上一点噪音都没有。' },
        { w: 'supermercado', t: '超市', e: 'Hay un supermercado al lado del portal.', et: '楼门口旁边就有一家超市。' }
      ] },
      { id: 'es-u4-l3', title: '签合同搬家', items: [
        { w: 'contrato', t: '合同', e: 'El contrato dura un año.', et: '合同期为一年。' },
        { w: 'firmar', t: '签字', e: 'Firmo el contrato mañana por la mañana.', et: '我明天上午签合同。' },
        { w: 'fianza', t: '押金', e: 'La fianza se devuelve al irte.', et: '押金在你搬走时退还。' },
        { w: 'mudarse', t: '搬家', e: 'Nos mudamos el próximo fin de semana.', et: '我们下周末搬家。' },
        { w: 'mudanza', t: '搬家（事宜）', e: 'La mudanza me costó doscientos euros.', et: '那次搬家花了我两百欧元。' },
        { w: 'caja', t: '纸箱', e: 'Todavía faltan tres cajas por cerrar.', et: '还有三个箱子没封上。' },
        { w: 'vecino', t: '邻居', e: 'Los vecinos nos ayudaron con las cajas.', et: '邻居们帮我们搬了箱子。' },
        { w: 'dirección', t: '地址', e: 'Te mando mi dirección nueva por mensaje.', et: '我把新地址发消息给你。' }
      ] }
    ] },
    { id: 'es-u5', level: 'A2', title: '第五单元 · 紧急求助', desc: '报警、叫救护车、证件丢了不慌张', color: '#58cc02', lessons: [
      { id: 'es-u5-l1', title: '呼救与报警', items: [
        { w: 'emergencia', t: '紧急情况', e: '¡Es una emergencia! Vengan rápido.', et: '是紧急情况！快点来！' },
        { w: 'socorro', t: '救命', e: '¡Socorro! ¡Que alguien me ayude!', et: '救命！来人帮帮我！' },
        { w: 'policía', t: '警察', e: 'He llamado a la policía, ya viene.', et: '我已经报警了，警察马上到。' },
        { w: 'robo', t: '抢劫/偷盗', e: 'Acaban de cometer un robo en la tienda.', et: '店里刚刚发生了一起抢劫。' },
        { w: 'cartera', t: '钱包', e: 'Me han robado la cartera en el metro.', et: '我的钱包在地铁里被偷了。' },
        { w: 'peligro', t: '危险', e: '¡Cuidado! Hay peligro en la carretera.', et: '小心！那条路上有危险。' },
        { w: 'ayuda', t: '帮助', e: 'Por favor, necesito ayuda.', et: '请帮帮我。' },
        { w: 'gritar', t: '喊叫', e: 'Gritó para pedir auxilio.', et: '他大声呼救。' }
      ] },
      { id: 'es-u5-l2', title: '看病急诊', items: [
        { w: 'hospital', t: '医院', e: '¿Dónde está el hospital más cercano?', et: '最近的医院在哪里？' },
        { w: 'accidente', t: '事故', e: 'Hubo un accidente en esta esquina.', et: '这个街角出过一起事故。' },
        { w: 'ambulancia', t: '救护车', e: 'Llama a una ambulancia, es urgente.', et: '叫辆救护车，很紧急。' },
        { w: 'doler', t: '疼痛', e: 'Me duele el estómago desde anoche.', et: '我从昨晚开始胃疼。' },
        { w: 'sangre', t: '血', e: 'Se cortó y perdió mucha sangre.', et: '他割伤了，流了很多血。' },
        { w: 'mareado', t: '头晕的', e: 'Me levanté rápido y me sentí mareado.', et: '我起得太快，觉得头晕。' },
        { w: 'farmacia', t: '药店', e: 'La farmacia de al lado abre de noche.', et: '旁边的药店夜里营业。' },
        { w: 'seguro médico', t: '医疗保险', e: 'En el hospital me pidieron el seguro médico.', et: '在医院他们要了我的医疗保险单。' }
      ] },
      { id: 'es-u5-l3', title: '东西丢了', items: [
        { w: 'comisaría', t: '警察局', e: 'Tengo que ir a la comisaría a denunciar.', et: '我得去警察局报案。' },
        { w: 'denunciar', t: '报案', e: 'Voy a denunciar la pérdida del pasaporte.', et: '我要报失护照。' },
        { w: 'pasaporte', t: '护照', e: 'He perdido el pasaporte en el tren.', et: '我把护照丢在火车上了。' },
        { w: 'embajada', t: '大使馆', e: 'La embajada me pidió fotos y formularios.', et: '大使馆向我要了照片和表格。' },
        { w: 'tarjeta', t: '卡', e: 'Bloqueé la tarjeta en cuanto me di cuenta del robo.', et: '一发现被盗我就把卡挂失了。' },
        { w: 'bloquear', t: '冻结/锁定', e: 'Puedes bloquear el móvil desde la web.', et: '你可以在网上锁定手机。' },
        { w: 'incendio', t: '火灾', e: 'Llamaron a los bomberos por un incendio.', et: '因为一场火灾他们叫了消防员。' },
        { w: 'bombero', t: '消防员', e: 'Los bomberos llegaron en diez minutos.', et: '消防员十分钟就赶到了。' },
        { w: 'número de emergencia', t: '紧急电话', e: 'Apunta este número de emergencia.', et: '把这个紧急电话记下来。' }
      ] }
    ] },
    { id: 'es-u10', level: 'A2', title: '第十单元 · 看病就医', desc: '说清症状、挂号看诊、药店买药与医嘱', color: '#1cb0f6', lessons: [
      { id: 'es-u10-l1', title: '描述症状', items: [
        { w: 'síntoma', t: '症状', e: 'Los síntomas empezaron hace tres días.', et: '症状是三天前开始的。' },
        { w: 'fiebre', t: '发烧', e: 'Tengo fiebre y me duele todo el cuerpo.', et: '我发烧，全身都疼。' },
        { w: 'tos', t: '咳嗽', e: 'Tengo tos desde el lunes y no me deja dormir.', et: '我从周一开始咳嗽，咳得睡不着。' },
        { w: 'dolor de garganta', t: '喉咙痛', e: 'Me cuesta tragar por el dolor de garganta.', et: '我喉咙痛，咽东西都费劲。' },
        { w: 'resfriado', t: '感冒', e: 'Creo que he cogido un resfriado.', et: '我觉得我感冒了。' },
        { w: 'gripe', t: '流感', e: 'Esta semana hay mucha gripe en la oficina.', et: '这周办公室里很多人得流感。' },
        { w: 'estornudar', t: '打喷嚏', e: 'Estornudo sin parar por la alergia.', et: '我因为过敏不停地打喷嚏。' },
        { w: 'cansancio', t: '疲劳', e: 'Últimamente siento un cansancio enorme.', et: '最近我觉得特别疲惫。' }
      ] },
      { id: 'es-u10-l2', title: '挂号看诊', items: [
        { w: 'consulta', t: '诊室/门诊', e: 'La consulta del doctor Ruiz está en el segundo piso.', et: '鲁伊斯医生的诊室在二楼。' },
        { w: 'cita', t: '预约', e: 'Tengo cita a las diez y media.', et: '我预约的是十点半。' },
        { w: 'médico', t: '医生', e: 'El médico me auscultó y me hizo varias preguntas.', et: '医生给我听了诊，还问了我几个问题。' },
        { w: 'receta', t: '处方', e: 'Necesito la receta para comprar el antibiótico.', et: '我需要处方才能买抗生素。' },
        { w: 'análisis', t: '化验', e: 'Me han mandado un análisis de sangre.', et: '他们让我去做一次血液化验。' },
        { w: 'tensión', t: '血压', e: 'La enfermera me tomó la tensión.', et: '护士给我量了血压。' },
        { w: 'diagnóstico', t: '诊断', e: 'El diagnóstico es una infección leve.', et: '诊断结果是轻度感染。' },
        { w: 'urgencias', t: '急诊', e: 'Si empeora, vaya a urgencias esta misma noche.', et: '如果加重了，今晚就去急诊。' }
      ] },
      { id: 'es-u10-l3', title: '药店与医嘱', items: [
        { w: 'medicamento', t: '药物', e: 'Este medicamento se vende sin receta.', et: '这种药不需要处方就能买。' },
        { w: 'pastilla', t: '药片', e: 'Tome una pastilla cada ocho horas.', et: '每八小时服一片。' },
        { w: 'dosis', t: '剂量', e: 'No aumente la dosis sin consultar al médico.', et: '未经医生同意不要加大剂量。' },
        { w: 'jarabe', t: '糖浆', e: 'El jarabe es para la tos seca.', et: '这种糖浆是治干咳的。' },
        { w: 'efectos secundarios', t: '副作用', e: 'Puede provocar somnolencia como efecto secundario.', et: '它的副作用可能会让人犯困。' },
        { w: 'reposo', t: '静养/休息', e: 'El médico le recomendó dos días de reposo.', et: '医生建议他休息两天。' },
        { w: 'cita previa', t: '预约制', e: 'En este centro hay que pedir cita previa.', et: '这个中心需要提前预约。' },
        { w: 'recuperarse', t: '康复', e: 'Con reposo, se recuperará en una semana.', et: '好好休息的话，一周就能恢复。' }
      ] }
    ] },
    { id: 'es-u11', level: 'A2', title: '第十一单元 · 问路与交通', desc: '问路、坐公交地铁、打车和买票', color: '#58cc02', lessons: [
      { id: 'es-u11-l1', title: '问路', items: [
        { w: 'perdido', t: '迷路的', e: 'Disculpe, creo que estoy perdido.', et: '打扰一下，我好像迷路了。' },
        { w: 'seguir recto', t: '直走', e: 'Siga recto hasta el semáforo.', et: '一直走到红绿灯。' },
        { w: 'cruzar', t: '穿过', e: 'Cruce la plaza y luego gire a la derecha.', et: '穿过广场，然后右转。' },
        { w: 'esquina', t: '街角', e: 'El banco está en la esquina, junto a la farmacia.', et: '银行在街角，药店旁边。' },
        { w: 'semáforo', t: '红绿灯', e: 'Espere a que el semáforo esté en verde.', et: '请等绿灯再走。' },
        { w: 'plaza', t: '广场', e: 'La plaza Mayor está a cinco minutos de aquí.', et: '马约尔广场离这里五分钟。' },
        { w: 'avenida', t: '大道', e: 'Vivo en la avenida del Puerto, número diez.', et: '我住在港口大道十号。' },
        { w: 'cerca de', t: '在……附近', e: 'Hay una estación de metro cerca de aquí.', et: '这附近有一个地铁站。' }
      ] },
      { id: 'es-u11-l2', title: '公交与地铁', items: [
        { w: 'metro', t: '地铁', e: 'Tomo el metro para ir al trabajo.', et: '我坐地铁去上班。' },
        { w: 'billete', t: '车票', e: 'Un billete de ida y vuelta, por favor.', et: '请给我一张往返票。' },
        { w: 'línea', t: '线路', e: 'La línea dos va directamente al centro.', et: '二号线直达市中心。' },
        { w: 'andén', t: '站台', e: 'El tren sale del andén tres.', et: '列车从三号站台发车。' },
        { w: 'transbordo', t: '换乘', e: 'Tiene que hacer transbordo en Goya.', et: '您得在戈雅站换乘。' },
        { w: 'parada', t: '站点', e: 'Bájese en la próxima parada.', et: '请在下一站下车。' },
        { w: 'abono transporte', t: '交通卡', e: 'El abono transporte mensual sale más barato.', et: '月票交通卡更划算。' },
        { w: 'retraso', t: '延误', e: 'El autobús lleva veinte minutos de retraso.', et: '公交车已经晚了二十分钟。' }
      ] },
      { id: 'es-u11-l3', title: '打车与买票', items: [
        { w: 'taxi', t: '出租车', e: '¿Puede llamarme un taxi, por favor?', et: '能帮我叫一辆出租车吗？' },
        { w: 'destino', t: '目的地', e: 'Diga al taxista su destino con claridad.', et: '请把目的地清楚地告诉司机。' },
        { w: 'tarifa', t: '票价/计价', e: 'La tarifa nocturna es más alta.', et: '夜间计价更高。' },
        { w: 'maletero', t: '后备箱', e: '¿Me ayuda a poner la maleta en el maletero?', et: '能帮我把行李放进后备箱吗？' },
        { w: 'ventanilla', t: '售票窗口', e: 'Compre el billete en la ventanilla número cuatro.', et: '请在四号窗口买票。' },
        { w: 'horario', t: '时刻表', e: '¿Me da un horario de trenes, por favor?', et: '请给我一份列车时刻表好吗？' },
        { w: 'coger', t: '乘坐', e: 'Coge el autobús número cinco y baja al final.', et: '坐五路公交，到终点下车。' },
        { w: 'asiento', t: '座位', e: '¿Está libre este asiento?', et: '这个座位有人吗？' }
      ] }
    ] },
    { id: 'es-u12', level: 'A2', title: '第十二单元 · 打电话与预约', desc: '打电话、留言、约时间，还有改期和取消', color: '#1cb0f6', lessons: [
      { id: 'es-u12-l1', title: '打电话', items: [
        { w: 'llamada', t: '通话', e: 'Vi tu llamada, pero estaba en una reunión.', et: '我看到你的来电，不过当时在开会。' },
        { w: 'llamar', t: '打电话', e: 'Te llamo luego desde casa.', et: '我晚点从家里打给你。' },
        { w: 'marcar', t: '拨号', e: 'Marqué mal el número y contestó otra persona.', et: '我拨错了号码，是别人接的。' },
        { w: 'contestar', t: '接听', e: 'Nadie contesta al teléfono fijo.', et: '座机没人接。' },
        { w: 'comunicar', t: '占线', e: 'Está comunicando, inténtelo de nuevo más tarde.', et: '现在占线，请稍后再拨。' },
        { w: 'extensión', t: '分机', e: 'Páseme con la extensión cuarenta, por favor.', et: '请帮我转四十分机。' },
        { w: 'colgar', t: '挂断', e: 'No cuelgues, ahora te paso con el encargado.', et: '别挂，我这就转给负责人。' },
        { w: 'de parte de', t: '代表/由……转达', e: 'Llamo de parte de la señora Gómez.', et: '我是替戈麦斯女士打的电话。' }
      ] },
      { id: 'es-u12-l2', title: '留言', items: [
        { w: 'recado', t: '口信', e: '¿Quiere dejar un recado?', et: '您要留个口信吗？' },
        { w: 'buzón de voz', t: '语音信箱', e: 'Dejé los datos en el buzón de voz.', et: '我把信息留在语音信箱里了。' },
        { w: 'devolver la llamada', t: '回电话', e: 'En cuanto llegue, le devuelvo la llamada.', et: '我一到就给您回电话。' },
        { w: 'disponible', t: '有空的', e: 'El director no está disponible en este momento.', et: '经理现在没空。' },
        { w: 'avisar', t: '通知', e: 'Le avisaré en cuanto vuelva.', et: '他一回来我就通知您。' },
        { w: 'apuntar', t: '记下', e: 'Apunto su nombre y su número de teléfono.', et: '我记下您的名字和电话号码。' },
        { w: 'sonar', t: '响', e: 'El teléfono suena desde hace un minuto.', et: '电话已经响了一分钟了。' },
        { w: 'disculparse', t: '道歉', e: 'Se disculpó por no haber contestado antes.', et: '他为没有及早接电话而道歉。' }
      ] },
      { id: 'es-u12-l3', title: '预约与改期', items: [
        { w: 'reservar', t: '预订', e: 'Quisiera reservar una mesa para el sábado.', et: '我想订一张周六的桌子。' },
        { w: 'cancelar', t: '取消', e: 'Tengo que cancelar la cita de mañana.', et: '我得取消明天的预约。' },
        { w: 'aplazar', t: '推迟', e: '¿Podemos aplazar la reunión al jueves?', et: '我们能把会议推到周四吗？' },
        { w: 'confirmar', t: '确认', e: 'Le llamo para confirmar la hora de la entrevista.', et: '我打电话来确认面试时间。' },
        { w: 'disponibilidad', t: '空闲时间', e: 'Consulte la disponibilidad en nuestra página web.', et: '请在我们网站上查看可预约时间。' },
        { w: 'hueco', t: '空档', e: 'No queda ningún hueco esta semana.', et: '这周已经没有空档了。' },
        { w: 'fijar', t: '确定', e: 'Fijemos una fecha antes de que acabe el mes.', et: '我们在月底前把日期定下来吧。' },
        { w: 'reprogramar', t: '改期', e: 'Si le viene mal, podemos reprogramar la visita.', et: '如果时间不合适，我们可以改期。' }
      ] }
    ] },
    { id: 'es-u6', level: 'B1', title: '第六单元 · 科技与网络', desc: '手机应用、网络生活，聊聊科技的利与弊', color: '#1cb0f6', lessons: [
      { id: 'es-u6-l1', title: '日常科技', items: [
        { w: 'dispositivo', t: '设备', e: 'Este dispositivo me acompaña a todas partes.', et: '这个设备我走到哪儿都带着。' },
        { w: 'pantalla', t: '屏幕', e: 'Se me cayó el móvil y se rompió la pantalla.', et: '手机掉了，屏幕摔碎了。' },
        { w: 'cargar', t: '充电', e: 'Tengo que cargar el móvil antes de salir.', et: '出门前我得给手机充电。' },
        { w: 'aplicación', t: '应用程序', e: 'Esta aplicación me ahorra mucho tiempo.', et: '这个应用帮我省了不少时间。' },
        { w: 'descargar', t: '下载', e: 'Ayer descargué dos películas para el viaje.', et: '昨天我下载了两部电影路上看。' },
        { w: 'actualizar', t: '更新', e: 'El sistema se actualiza solo por la noche.', et: '系统在夜里自动更新。' },
        { w: 'funcionar', t: '运转/起作用', e: 'El wifi no funciona desde ayer.', et: '无线网从昨天起就用不了。' },
        { w: 'averiarse', t: '出故障', e: 'El ordenador se averió en plena reunión.', et: '开会开到一半电脑坏了。' }
      ] },
      { id: 'es-u6-l2', title: '网上生活', items: [
        { w: 'red social', t: '社交网络', e: 'Paso demasiado tiempo en las redes sociales.', et: '我在社交网络上花的时间太多了。' },
        { w: 'cuenta', t: '账户', e: 'Cerré mi cuenta de ese foro la semana pasada.', et: '上周我把那个论坛的账号注销了。' },
        { w: 'contraseña', t: '密码', e: 'Si olvidas la contraseña, puedes restablecerla.', et: '如果忘了密码，你可以重置。' },
        { w: 'mensaje', t: '消息', e: 'Te he mandado un mensaje, ¿lo has visto?', et: '我给你发了条消息，看到了吗？' },
        { w: 'correo electrónico', t: '电子邮件', e: 'Reviso el correo electrónico cada media hora.', et: '我每半小时查一次邮件。' },
        { w: 'privacidad', t: '隐私', e: 'La privacidad en internet me preocupa cada vez más.', et: '网络隐私问题让我越来越担心。' },
        { w: 'dato', t: '数据', e: 'Estas aplicaciones recogen demasiados datos personales.', et: '这些应用收集的个人信息太多了。' },
        { w: 'en línea', t: '在线', e: 'Cada vez se compra más en línea.', et: '网上购物的人越来越多。' }
      ] },
      { id: 'es-u6-l3', title: '科技的利与弊', items: [
        { w: 'avance', t: '进步/进展', e: 'Los avances tecnológicos cambian nuestra forma de vivir.', et: '科技进步正在改变我们的生活方式。' },
        { w: 'inteligencia artificial', t: '人工智能', e: 'La inteligencia artificial ya traduce mejor que antes.', et: '人工智能现在的翻译比以前好了。' },
        { w: 'ventaja', t: '优点', e: 'La gran ventaja es que puedes trabajar desde casa.', et: '最大的优点是你可以在家办公。' },
        { w: 'desventaja', t: '缺点', e: 'La desventaja es que estamos siempre conectados.', et: '缺点是我们永远处于在线状态。' },
        { w: 'depender', t: '依赖', e: 'Dependemos demasiado del móvil para todo.', et: '我们干什么都太依赖手机了。' },
        { w: 'invento', t: '发明', e: 'Es difícil imaginar la vida sin este invento.', et: '很难想象没有这项发明的生活。' },
        { w: 'información', t: '信息', e: 'No todo lo que lees en internet es información fiable.', et: '网上读到的东西不都是可靠的信息。' },
        { w: 'moderación', t: '适度', e: 'Con moderación, la tecnología es una gran aliada.', et: '适度使用的话，技术是好帮手。' }
      ] }
    ] },
    { id: 'es-u7', level: 'B1', title: '第七单元 · 环境与生活', desc: '垃圾分类、绿色出行，讨论环境责任', color: '#58cc02', lessons: [
      { id: 'es-u7-l1', title: '环境问题', items: [
        { w: 'medio ambiente', t: '环境', e: 'Cuidar el medio ambiente es tarea de todos.', et: '保护环境是每个人的责任。' },
        { w: 'contaminación', t: '污染', e: 'La contaminación del aire ha empeorado este año.', et: '今年空气污染更严重了。' },
        { w: 'basura', t: '垃圾', e: 'Sacamos la basura cada mañana.', et: '我们每天早上倒垃圾。' },
        { w: 'plástico', t: '塑料', e: 'El plástico tarda cientos de años en desaparecer.', et: '塑料要几百年才能分解。' },
        { w: 'clima', t: '气候', e: 'El clima está cambiando más rápido de lo esperado.', et: '气候变化得比预期更快。' },
        { w: 'calentamiento global', t: '全球变暖', e: 'En las noticias hablan del calentamiento global.', et: '新闻里在讲全球变暖。' },
        { w: 'reciclar', t: '回收', e: 'En mi comunidad ya se recicla casi todo.', et: '我们小区现在几乎所有垃圾都回收。' },
        { w: 'ahorrar energía', t: '节约能源', e: 'Si apagamos las luces, ahorramos energía.', et: '随手关灯就能节约能源。' }
      ] },
      { id: 'es-u7-l2', title: '绿色生活', items: [
        { w: 'energía solar', t: '太阳能', e: 'Han puesto paneles de energía solar en el tejado.', et: '他们在屋顶装了太阳能板。' },
        { w: 'transporte público', t: '公共交通', e: 'Si usamos el transporte público, contaminamos menos.', et: '坐公共交通的话，污染会少一些。' },
        { w: 'bicicleta', t: '自行车', e: 'Voy al trabajo en bicicleta siempre que puedo.', et: '只要能行，我就骑车上班。' },
        { w: 'bolsa', t: '袋子', e: 'Traigo mi propia bolsa para no usar plástico.', et: '我自己带袋子，就不用塑料的了。' },
        { w: 'botella', t: '瓶子', e: 'Llevo una botella reutilizable al gimnasio.', et: '我去健身房都自带可重复用的水瓶。' },
        { w: 'segunda mano', t: '二手', e: 'Cada vez compro más cosas de segunda mano.', et: '我越来越多地买二手物品。' },
        { w: 'huerto', t: '菜园', e: 'En el balcón hemos plantado un pequeño huerto.', et: '我们在阳台上开辟了一个小菜园。' },
        { w: 'hábito', t: '习惯', e: 'Cambiar de hábitos cuesta, pero se puede.', et: '改变习惯不容易，但做得到。' }
      ] },
      { id: 'es-u7-l3', title: '环境与责任', items: [
        { w: 'proteger', t: '保护', e: 'Es importante que protejamos los bosques.', et: '重要的是我们要保护好森林。' },
        { w: 'gobierno', t: '政府', e: 'El gobierno debería invertir más en transporte limpio.', et: '政府应该在清洁交通上投入更多。' },
        { w: 'ley', t: '法律', e: 'Han aprobado una ley contra el desperdicio de comida.', et: '他们通过了一项反对浪费食物的法律。' },
        { w: 'responsabilidad', t: '责任', e: 'Cada empresa tiene su parte de responsabilidad.', et: '每家企业都有一份责任。' },
        { w: 'mejorar', t: '改善', e: 'Si todos recicláramos, la ciudad mejoraría mucho.', et: '如果大家都回收，这座城市会好很多。' },
        { w: 'planeta', t: '星球', e: 'Solo tenemos un planeta, hay que cuidarlo.', et: '我们只有一个星球，必须爱护它。' },
        { w: 'futuro', t: '未来', e: 'Vale la pena luchar por un futuro más limpio.', et: '为一个更清洁的未来努力是值得的。' },
        { w: 'medida', t: '措施', e: 'Estas medidas solo funcionarán si todos colaboramos.', et: '只有大家配合，这些措施才会见效。' }
      ] }
    ] },
    { id: 'es-u13', level: 'B1', title: '第十三单元 · 职场沟通', desc: '开会发言、写邮件汇报、和同事协作', color: '#58cc02', lessons: [
      { id: 'es-u13-l1', title: '会议', items: [
        { w: 'reunión', t: '会议', e: 'La reunión duró más de dos horas.', et: '会议开了两个多小时。' },
        { w: 'orden del día', t: '议程', e: 'El orden del día incluye tres puntos importantes.', et: '议程包括三个重要议题。' },
        { w: 'acta', t: '会议纪要', e: 'Hay que redactar el acta antes del viernes.', et: '周五之前要把会议纪要写好。' },
        { w: 'intervenir', t: '发言', e: 'Me gustaría intervenir antes de que cerremos el tema.', et: '我希望在这个议题结束前发言。' },
        { w: 'turno de palabra', t: '发言权', e: 'Pido el turno de palabra para aclarar una cosa.', et: '我请求发言，澄清一件事。' },
        { w: 'objetivo', t: '目标', e: 'El objetivo de la reunión es aprobar el presupuesto.', et: '这次会议的目标是批准预算。' },
        { w: 'plazo', t: '期限', e: 'No creo que cumplamos el plazo acordado.', et: '我觉得我们赶不上约定的期限。' },
        { w: 'conclusión', t: '结论', e: 'Llegamos a la conclusión de que hacía falta más personal.', et: '我们得出结论：需要更多人手。' }
      ] },
      { id: 'es-u13-l2', title: '汇报与邮件', items: [
        { w: 'informe', t: '报告', e: 'He enviado el informe trimestral esta mañana.', et: '我今天上午把季度报告发出去了。' },
        { w: 'adjuntar', t: '附上', e: 'Adjunto las cifras actualizadas en este correo.', et: '我在邮件里附上了最新数据。' },
        { w: 'destinatario', t: '收件人', e: 'Comprueba que el destinatario sea el correcto.', et: '确认一下收件人是否写对了。' },
        { w: 'asunto', t: '主题', e: 'Pon un asunto claro para que te contesten antes.', et: '主题写清楚，别人才会尽快回复。' },
        { w: 'borrador', t: '草稿', e: 'El texto todavía está en borrador.', et: '这份文本还是草稿。' },
        { w: 'resumen', t: '摘要', e: 'Añade un resumen de dos líneas al principio.', et: '开头加两行摘要。' },
        { w: 'cifra', t: '数字/数据', e: 'Las cifras del último trimestre son mejores.', et: '上个季度的数据更好看。' },
        { w: 'convocar', t: '召集', e: 'El jefe convocó una reunión urgente a las nueve.', et: '老板九点召集了一次紧急会议。' }
      ] },
      { id: 'es-u13-l3', title: '同事协作', items: [
        { w: 'compañero', t: '同事', e: 'Mis compañeros me ayudaron con el proyecto.', et: '同事们帮我做了这个项目。' },
        { w: 'equipo', t: '团队', e: 'Este equipo funciona bien porque todos aportan ideas.', et: '这个团队运转得好，因为大家都出主意。' },
        { w: 'delegar', t: '分派/授权', e: 'Conviene delegar tareas cuando el volumen crece.', et: '工作量增加时，最好把任务分派出去。' },
        { w: 'coordinar', t: '协调', e: 'Yo coordino el trabajo entre los dos departamentos.', et: '我负责协调两个部门之间的工作。' },
        { w: 'retroalimentación', t: '反馈', e: 'Agradezco que me des una retroalimentación sincera.', et: '谢谢你给我坦诚的反馈。' },
        { w: 'asumir', t: '承担', e: 'Prefiero que asumamos juntos la responsabilidad.', et: '我更希望我们一起承担责任。' },
        { w: 'confianza', t: '信任', e: 'Sin confianza, es difícil que un equipo avance.', et: '没有信任，团队很难前进。' },
        { w: 'jerarquía', t: '层级', e: 'En esta empresa la jerarquía es poco rígida.', et: '这家公司的层级不那么森严。' }
      ] }
    ] },
    { id: 'es-u14', level: 'B1', title: '第十四单元 · 文化差异', desc: '习俗礼貌、节日庆典，以及跨文化的误解', color: '#1cb0f6', lessons: [
      { id: 'es-u14-l1', title: '习俗与礼貌', items: [
        { w: 'costumbre', t: '习俗', e: 'Es costumbre quitarse los zapatos al entrar en casa.', et: '进屋脱鞋是一种习俗。' },
        { w: 'saludo', t: '问候', e: 'El saludo con dos besos es habitual aquí.', et: '这里习惯用两个吻来问候。' },
        { w: 'beso', t: '吻', e: 'Nos dimos dos besos al conocernos.', et: '我们认识时互相贴了两下脸。' },
        { w: 'puntualidad', t: '守时', e: 'La puntualidad se valora mucho en el norte de Europa.', et: '北欧非常看重守时。' },
        { w: 'educado', t: '有礼貌的', e: 'Es muy educado saludar al entrar en una tienda.', et: '进店时打招呼很有礼貌。' },
        { w: 'trato', t: '待人方式', e: 'El trato cercano me sorprendió al principio.', et: '起初这种亲近的待人方式让我很意外。' },
        { w: 'norma', t: '规范', e: 'Cada país tiene sus propias normas sociales.', et: '每个国家都有自己的社会规范。' },
        { w: 'gesto', t: '手势/举动', e: 'Un mismo gesto puede significar cosas distintas.', et: '同样的手势可能意思完全不同。' }
      ] },
      { id: 'es-u14-l2', title: '节日与庆典', items: [
        { w: 'fiesta', t: '节日/聚会', e: 'La fiesta del pueblo dura tres días.', et: '镇上的节庆持续三天。' },
        { w: 'tradición', t: '传统', e: 'Comer doce uvas en Nochevieja es una tradición.', et: '除夕吃十二颗葡萄是一项传统。' },
        { w: 'celebrar', t: '庆祝', e: 'Celebramos el cumpleaños en familia.', et: '我们一家人庆祝生日。' },
        { w: 'procesión', t: '宗教游行', e: 'La procesión pasa por delante de mi casa.', et: '游行队伍从我家门前经过。' },
        { w: 'feriado', t: '假日', e: 'El lunes es feriado nacional.', et: '周一是全国假日。' },
        { w: 'fuegos artificiales', t: '烟花', e: 'Los fuegos artificiales empiezan a medianoche.', et: '烟花在午夜开始燃放。' },
        { w: 'Nochevieja', t: '除夕', e: 'En Nochevieja cenamos todos juntos.', et: '除夕我们一起吃晚饭。' },
        { w: 'invitación', t: '邀请', e: 'Recibí una invitación para la cena de Navidad.', et: '我收到了圣诞晚宴的邀请。' }
      ] },
      { id: 'es-u14-l3', title: '跨文化误解', items: [
        { w: 'malentendido', t: '误会', e: 'Todo fue un malentendido por una palabra mal traducida.', et: '全是因为一个词翻译错了造成的误会。' },
        { w: 'estereotipo', t: '刻板印象', e: 'Los estereotipos nunca cuentan toda la verdad.', et: '刻板印象从来都说不出全部真相。' },
        { w: 'prejuicio', t: '偏见', e: 'Viajar ayuda a vencer los prejuicios.', et: '旅行有助于克服偏见。' },
        { w: 'adaptarse', t: '适应', e: 'Adaptarse a otra cultura lleva tiempo.', et: '适应另一种文化需要时间。' },
        { w: 'choque cultural', t: '文化冲击', e: 'Al principio tuve un choque cultural bastante fuerte.', et: '一开始我经历了相当强烈的文化冲击。' },
        { w: 'tolerancia', t: '宽容', e: 'La tolerancia empieza por escuchar al otro.', et: '宽容始于倾听对方。' },
        { w: 'respeto', t: '尊重', e: 'El respeto a los horarios varía de un país a otro.', et: '对时间的尊重程度因国家而异。' },
        { w: 'interpretar', t: '解读', e: 'No interpretes el silencio como un rechazo.', et: '别把沉默解读成拒绝。' }
      ] }
    ] },
    { id: 'es-u15', level: 'B1', title: '第十五单元 · 学习与教育', desc: '课堂、考试、线上课程和进修规划', color: '#58cc02', lessons: [
      { id: 'es-u15-l1', title: '课堂内外', items: [
        { w: 'asignatura', t: '科目', e: 'La historia es mi asignatura favorita.', et: '历史是我最喜欢的科目。' },
        { w: 'apuntes', t: '笔记', e: 'Tomo apuntes a mano porque me concentro mejor.', et: '我手写笔记，因为这样更能集中注意力。' },
        { w: 'alumno', t: '学生', e: 'Los alumnos preguntaron mucho al final de la clase.', et: '学生们下课前问了很多问题。' },
        { w: 'aula', t: '教室', e: 'El aula está en la primera planta.', et: '教室在二楼。' },
        { w: 'pizarra', t: '黑板', e: 'El profesor escribió la fecha en la pizarra.', et: '老师把日期写在黑板上。' },
        { w: 'seminario', t: '研讨课', e: 'El seminario se celebra todos los miércoles.', et: '研讨课每周三上。' },
        { w: 'plantear', t: '提出', e: 'Planteé una duda que nadie había tenido en cuenta.', et: '我提出了一个谁都没考虑到的疑问。' },
        { w: 'tutoría', t: '答疑辅导', e: 'Las tutorías son los martes por la tarde.', et: '答疑辅导在周二下午。' }
      ] },
      { id: 'es-u15-l2', title: '考试与成绩', items: [
        { w: 'examen', t: '考试', e: 'El examen de español es el jueves.', et: '西语考试在周四。' },
        { w: 'aprobar', t: '通过', e: 'Espero que apruebes sin problemas.', et: '希望你顺利通过。' },
        { w: 'suspender', t: '不及格', e: 'Suspendí la primera parte por los nervios.', et: '我因为紧张，第一部分没及格。' },
        { w: 'nota', t: '分数', e: 'Necesito un ocho para subir la nota media.', et: '我需要八分才能提高平均分。' },
        { w: 'matrícula', t: '注册（费）', e: 'La matrícula se paga en septiembre.', et: '注册费在九月缴纳。' },
        { w: 'convocatoria', t: '考期', e: 'Hay dos convocatorias al año.', et: '一年有两次考试机会。' },
        { w: 'repasar', t: '复习', e: 'Antes de que empiece el examen, repasa las reglas.', et: '考试开始前，把规则再复习一遍。' },
        { w: 'presentarse', t: '参加（考试）', e: 'Me presento al examen libre en junio.', et: '我六月参加自由考试。' }
      ] },
      { id: 'es-u15-l3', title: '在线学习与进修', items: [
        { w: 'curso', t: '课程', e: 'Estoy haciendo un curso en línea de estadística.', et: '我在上一门线上统计学课程。' },
        { w: 'plataforma', t: '平台', e: 'La plataforma guarda todos los materiales del curso.', et: '平台保存了课程的全部资料。' },
        { w: 'matricularse', t: '注册入学', e: 'Quiero matricularme en el programa de verano.', et: '我想注册夏季项目。' },
        { w: 'beca', t: '奖学金', e: 'Solicité una beca para estudiar en el extranjero.', et: '我申请了出国留学的奖学金。' },
        { w: 'título', t: '学位/文凭', e: 'Sin título, algunos puestos son difíciles de conseguir.', et: '没有文凭，有些职位很难拿到。' },
        { w: 'posgrado', t: '研究生课程', e: 'Este posgrado combina clases presenciales y virtuales.', et: '这个研究生项目线上线下结合。' },
        { w: 'autodidacta', t: '自学的', e: 'Aprender idiomas de forma autodidacta exige constancia.', et: '自学语言需要坚持。' },
        { w: 'constancia', t: '坚持', e: 'Al final, la constancia vale más que el talento.', et: '最终，坚持比天赋更可贵。' }
      ] }
    ] },
    { id: 'es-u16', level: 'B2', title: '第十六单元 · 求职面试', desc: '简历投递、面试问答、谈薪资与录用条件', color: '#1cb0f6', lessons: [
      { id: 'es-u16-l1', title: '简历与投递', items: [
        { w: 'currículum', t: '简历', e: 'Envié mi currículum a tres vacantes distintas la semana pasada.', et: '上周我把简历投给了三个不同的职位空缺。' },
        { w: 'vacante', t: '职位空缺', e: 'Si hubiera conocido la vacante antes, habría enviado mi solicitud de inmediato.', et: '要是早点知道这个空缺，我就会立刻提交申请了。' },
        { w: 'puesto', t: '岗位/职位', e: 'No obstante, el puesto exige una experiencia que todavía no tengo.', et: '不过，这个岗位要求的经验我还没有。' },
        { w: 'postularse', t: '应聘/自荐', e: 'Me postulé a este puesto a pesar de que no era exactamente mi perfil.', et: '尽管不完全符合我的背景，我还是应聘了这个岗位。' },
        { w: 'carta de presentación', t: '求职信', e: 'En la carta de presentación expliqué por qué quería cambiar de sector.', et: '我在求职信里解释了为什么想转行。' },
        { w: 'candidatura', t: '候选资格/申请', e: 'Mi candidatura avanzó a la segunda ronda gracias a la recomendación de mi profesora.', et: '多亏老师的推荐，我的申请进入了第二轮。' },
        { w: 'referencia', t: '推荐信/推荐人', e: 'Mi antiguo jefe accedió a dar una referencia sobre mi trabajo.', et: '我的前上司同意为我的工作表现提供推荐。' },
        { w: 'inscribirse', t: '报名/登记申请', e: 'Me inscribí en la bolsa de empleo de la universidad por si surgía algo interesante.', et: '我报名了学校的就业信息库，以防出现有意思的机会。' },
        { w: 'reclutador', t: '招聘人员', e: 'El reclutador me dijo que me contactaría en cuanto tomara la decisión.', et: '招聘人员告诉我，一旦做出决定就会联系我。' }
      ] },
      { id: 'es-u16-l2', title: '面试问答', items: [
        { w: 'entrevista', t: '面试', e: 'Aunque había preparado mil respuestas, en la entrevista me puse nervioso.', et: '尽管准备了一大堆回答，面试时我还是紧张了。' },
        { w: 'entrevistador', t: '面试官', e: 'La entrevistadora me preguntó si habría aceptado un puesto en el extranjero.', et: '面试官问我当时是否会接受去国外工作。' },
        { w: 'punto fuerte', t: '长处', e: 'Mi punto fuerte es que aprendo rápido, como demostré en mi último proyecto.', et: '我的长处是学得快，上个项目里已经证明过。' },
        { w: 'debilidad', t: '短板/弱点', e: 'Reconozco mi debilidad, aunque estoy trabajando para corregirla.', et: '我承认自己的短板，不过正在努力改进。' },
        { w: 'habilidad', t: '技能', e: 'Aprender idiomas es una habilidad que se cultiva todos los días.', et: '学语言是一项要每天打磨的技能。' },
        { w: 'experiencia', t: '经验', e: 'Si hubiera tenido más experiencia, no habría cometido aquel error.', et: '要是当时经验更多，我就不会犯那个错。' },
        { w: 'destacarse', t: '脱颖而出', e: 'Para destacarse en una entrevista, conviene preparar ejemplos concretos.', et: '想在面试中脱颖而出，最好准备具体的例子。' },
        { w: 'actitud', t: '态度', e: 'Una actitud positiva pesa tanto como la formación, por ende no la descuides.', et: '积极的态度和专业背景同样重要，所以千万别忽视。' },
        { w: 'nervios', t: '紧张（情绪）', e: 'A pesar de que los nervios traicionan a cualquiera, respirar hondo ayuda.', et: '尽管谁都会紧张，但深呼吸确实有帮助。' }
      ] },
      { id: 'es-u16-l3', title: '薪资与录用', items: [
        { w: 'sueldo', t: '工资', e: 'Antes de aceptar, pregunté cuál sería el sueldo neto al año.', et: '接受之前，我问了年薪税后会有多少。' },
        { w: 'negociar', t: '谈判/协商', e: 'Negocié las condiciones con calma y gané dos días de teletrabajo.', et: '我从容地谈了条件，争取到了两天远程办公。' },
        { w: 'período de prueba', t: '试用期', e: 'El período de prueba dura tres meses, así que aún no me relajo.', et: '试用期三个月，所以我还不敢松懈。' },
        { w: 'jornada laboral', t: '工时/工作日', e: 'La jornada laboral es intensiva en verano; por la tarde no se trabaja.', et: '夏季实行连续工时，下午不上班。' },
        { w: 'teletrabajo', t: '远程办公', e: 'Gracias al teletrabajo, habría podido quedarme en mi ciudad natal.', et: '多亏远程办公，我本可以留在家乡。' },
        { w: 'incorporación', t: '入职', e: 'Mi incorporación está prevista para el uno de septiembre, si todo va bien.', et: '如果一切顺利，我定于九月一日入职。' },
        { w: 'contratar', t: '聘用', e: 'Me dijeron que me contratarían aunque la decisión aún no era oficial.', et: '他们说要聘用我，尽管决定还没正式下来。' },
        { w: 'beneficios', t: '福利', e: 'Además del sueldo, los beneficios incluyen seguro médico y gimnasio.', et: '除工资外，福利还包括医疗保险和健身房。' },
        { w: 'agradecer', t: '感谢', e: 'Agradecería que me confirmaran la respuesta antes del viernes.', et: '如果能在周五前答复我，我将不胜感激。' }
      ] }
    ] },
    { id: 'es-u17', level: 'B2', title: '第十七单元 · 媒体与舆论', desc: '读新闻、看舆论、辨真假信息', color: '#58cc02', lessons: [
      { id: 'es-u17-l1', title: '新闻与媒体', items: [
        { w: 'noticia', t: '新闻', e: 'La noticia llegó tarde; cuando la leí, ya era historia vieja.', et: '这则新闻来晚了，我看到时已经是旧闻了。' },
        { w: 'titular', t: '标题', e: 'No te quedes en el titular: lee el artículo entero antes de opinar.', et: '别只看标题：发表意见前把文章读完。' },
        { w: 'prensa', t: '新闻界/报刊', e: 'La prensa independiente es difícil de mantener sin lectores que paguen.', et: '没有愿意付费的读者，独立媒体很难维持。' },
        { w: 'periodista', t: '记者', e: 'El periodista aseguró que había verificado la fuente dos veces.', et: '记者声称已两次核实消息来源。' },
        { w: 'reportaje', t: '深度报道', e: 'Ayer publicaron un reportaje sobre la sequía que me dejó pensando.', et: '昨天刊出了一篇关于旱灾的深度报道，让我思索良久。' },
        { w: 'fuente', t: '消息来源', e: 'Cita siempre tu fuente; sin ella, cualquier afirmación pierde valor.', et: '引用务必注明来源；没有来源，任何说法都站不住脚。' },
        { w: 'publicar', t: '发布/刊登', e: 'Si hubiera sabido que lo iban a publicar, habría revisado el texto dos veces.', et: '早知道要刊出，我就把稿子多校对两遍了。' },
        { w: 'medio de comunicación', t: '媒体', e: 'Ningún medio de comunicación es neutral del todo, por ende contrasta.', et: '没有哪家媒体是完全中立的，所以要多方比对。' },
        { w: 'actualidad', t: '时事', e: 'Dedicar diez minutos al día a la actualidad basta para no perder el hilo.', et: '每天花十分钟看时事就足够跟上脉络。' }
      ] },
      { id: 'es-u17-l2', title: '意见与辩论', items: [
        { w: 'opinión pública', t: '舆论/公众意见', e: 'La opinión pública cambió cuando salieron a la luz los datos reales.', et: '真实数据曝光后，舆论发生了转变。' },
        { w: 'encuesta', t: '民调/调查', e: 'Según la encuesta, tres de cada cuatro lectores desconfían de los titulares.', et: '民调显示，四分之三的读者不信任标题。' },
        { w: 'editorial', t: '社论', e: 'El editorial de ayer defendía, no obstante, una posición contraria a la mía.', et: '不过昨天的社论立场与我的观点相反。' },
        { w: 'columnista', t: '专栏作家', e: 'Ese columnista escribiría igual si el gobierno fuera del signo contrario.', et: '如果政府属于相反阵营，那位专栏作家也会写出一样的文章。' },
        { w: 'libertad de expresión', t: '言论自由', e: 'La libertad de expresión protege también las ideas que nos incomodan.', et: '言论自由保护的也包括让我们不舒服的观点。' },
        { w: 'debate', t: '辩论', e: 'Un debate útil exige escuchar al rival, a pesar de que no le dé la razón.', et: '有效的辩论需要倾听对方，哪怕不同意他的观点。' },
        { w: 'argumentar', t: '论证/陈述论点', e: 'Saber argumentar vale más que tener la última palabra.', et: '会论证比争到最后一句更重要。' },
        { w: 'rebatir', t: '反驳', e: 'Rebatí su idea con cifras, no con insultos, y el público lo agradeció.', et: '我用数据而不是辱骂反驳了他的观点，听众对此很买账。' },
        { w: 'punto de vista', t: '观点/视角', e: 'Intenta entender el punto de vista ajeno antes de rebatirlo.', et: '反驳之前，先试着理解别人的视角。' }
      ] },
      { id: 'es-u17-l3', title: '假新闻与思辨', items: [
        { w: 'bulo', t: '谣言/假消息', e: 'El bulo se difundió tanto que, cuando lo desmintieron, ya nadie leía la corrección.', et: '谣言传得太广，辟谣时已经没人看更正了。' },
        { w: 'desinformación', t: '虚假信息', e: 'La desinformación no se combate con rabia, sino con método.', et: '对付虚假信息靠的不是愤怒，而是方法。' },
        { w: 'verificar', t: '核实', e: 'Verifica la fecha: muchos bulos resucitan fotos de hace años.', et: '核实一下日期：很多谣言是拿多年前的照片翻新的。' },
        { w: 'contrastar', t: '比对/交叉验证', e: 'Si hubiera contrastado la noticia en dos medios, no la habría compartido.', et: '要是当初在两家媒体上比对过这条消息，我就不会转发了。' },
        { w: 'manipular', t: '操纵', e: 'Quien manipula las cifras siempre oculta el contexto.', et: '操纵数据的人总会隐去背景。' },
        { w: 'credibilidad', t: '可信度', e: 'Publicar sin comprobar destruye la credibilidad más rápido que un error.', et: '不加核实就发布，比出错更快摧毁可信度。' },
        { w: 'viralizarse', t: '疯传/走红', e: 'El vídeo se viralizó en horas, aunque después resultó ser falso.', et: '视频几小时就疯传开来，虽然后来被证实是假的。' },
        { w: 'sesgo', t: '偏见/倾向性', e: 'Todo medio tiene su sesgo; reconocerlo ya es media batalla.', et: '每家媒体都有倾向性；认识到这一点就成功了一半。' },
        { w: 'escepticismo', t: '怀疑态度', e: 'Un poco de escepticismo sano protege mejor que mil filtros.', et: '一点健康的怀疑态度比一千个过滤器都管用。' }
      ] }
    ] },
    { id: 'es-u18', level: 'C1', title: '第十八单元 · 艺术与批评', desc: '用精准的西语讨论艺术作品、流派与批评话语', color: '#1cb0f6', lessons: [
      { id: 'es-u18-l1', title: '艺术与美学', items: [
        { w: 'mímesis', t: '摹仿', e: 'La mímesis no consiste en copiar la realidad, sino en reconstruirla mediante convenciones estéticas que el espectador reconoce e interpreta críticamente.', et: '摹仿并非复制现实，而是通过观者能够识别并批判性诠释的美学惯例来重构现实。' },
        { w: 'claroscuro', t: '明暗对照', e: 'El claroscuro de la pintura acentúa la tensión moral entre los personajes y subvierte la supuesta neutralidad de la representación visual.', et: '画中的明暗对照强化了人物之间的道德张力，并颠覆了视觉再现所谓的中立性。' },
        { w: 'yuxtaposición', t: '并置', e: 'La yuxtaposición de imágenes cotidianas y símbolos religiosos produce una extrañeza deliberada que obliga a revisar nuestras certezas culturales heredadas.', et: '日常图像与宗教符号的并置刻意制造疏离感，迫使我们重新审视承袭的文化确定性。' },
        { w: 'alegoría', t: '讽喻', e: 'La alegoría transforma la crisis política en un paisaje inhabitado, cuyos elementos desolados remiten a la pérdida de la memoria colectiva.', et: '这则讽喻将政治危机转化为一片荒无人烟的风景，其中苍凉元素指向集体记忆的丧失。' },
        { w: 'palimpsesto', t: '重写本', e: 'La novela funciona como un palimpsesto donde las voces borradas de la historia oficial reaparecen bajo múltiples capas de escritura y silencio.', et: '这部小说如同一部重写本，被官方历史抹除的声音在层层文字与沉默之下重新浮现。' },
        { w: 'metonimia', t: '转喻', e: 'Mediante la metonimia, el pintor convierte una mano encadenada en el emblema de toda una estructura de dominación económica y social.', et: '画家通过转喻，将一只戴着镣铐的手变成整个经济与社会支配结构的象征。' },
        { w: 'sinécdoque', t: '提喻', e: 'La sinécdoque permite que un fragmento arquitectónico represente la ciudad entera, aunque también oculte las desigualdades excluidas del encuadre visual final.', et: '提喻让一个建筑片段代表整座城市，同时也可能掩盖最终视觉画面所排除的不平等。' },
        { w: 'intertextualidad', t: '互文性', e: 'La intertextualidad de la instalación dialoga con el cine clásico y cuestiona la originalidad como criterio supremo del valor artístico contemporáneo.', et: '这件装置艺术的互文性与经典电影展开对话，并质疑将原创性视为当代艺术价值至高标准的观点。' }
      ] },
      { id: 'es-u18-l2', title: '批评与解读', items: [
        { w: 'hermenéutica', t: '诠释学', e: 'La hermenéutica contemporánea examina cómo nuestras expectativas históricas condicionan la interpretación y abren sentidos que el autor nunca llegó a explicitar.', et: '当代诠释学考察我们的历史预期如何制约解读，并开启作者从未明确表达的意义。' },
        { w: 'desconstrucción', t: '解构', e: 'La desconstrucción revela las oposiciones binarias que sostienen el discurso crítico y desestabiliza aquello que el texto presenta como evidente.', et: '解构揭示支撑批评话语的二元对立，并动摇文本呈现为不言而喻的内容。' },
        { w: 'fenomenología', t: '现象学', e: 'Desde la fenomenología, la experiencia estética no depende únicamente del objeto, sino de la conciencia corporal que lo percibe y lo habita.', et: '从现象学看，审美体验不仅取决于对象，也取决于感知并融入它的身体意识。' },
        { w: 'verosimilitud', t: '逼真性', e: 'La verosimilitud de la narración se fractura cuando el narrador contradice sus propios recuerdos y expone los mecanismos de construcción del relato.', et: '当叙述者自相矛盾地推翻自身记忆，并暴露叙事的建构机制时，故事的逼真性便随之破裂。' },
        { w: 'paradigma', t: '范式', e: 'El paradigma formalista resulta insuficiente para explicar una obra cuyo sentido depende de las relaciones de poder presentes en su producción.', et: '形式主义范式不足以解释这样一件作品：其意义取决于生产过程中存在的权力关系。' },
        { w: 'refutación', t: '驳斥', e: 'La refutación de una tesis exige identificar sus presupuestos ocultos y ofrecer contraejemplos pertinentes sin recurrir a descalificaciones personales.', et: '驳斥一个论点需要识别其隐藏预设并提出恰当反例，而非诉诸人身贬损。' },
        { w: 'canon', t: '经典/正典', e: 'El canon literario ha sido cuestionado por su sesgo eurocéntrico y masculino.', et: '文学正典因其欧洲中心和男性偏见而受到质疑。' },
        { w: 'intersubjetividad', t: '主体间性', e: 'La intersubjetividad del encuentro estético desplaza la oposición entre sujeto y objeto hacia una experiencia compartida de sentido.', et: '审美相遇的主体间性将主客对立转向一种共享的意义体验。' },
      ] },
      { id: 'es-u18-l3', title: '艺术语境', items: [
        { w: 'zeitgeist', t: '时代精神', e: 'El zeitgeist de la posguerra atraviesa estas pinturas, cuya melancolía articula una crítica silenciosa del optimismo propio de la reconstrucción europea.', et: '战后时代精神贯穿这些画作，其忧郁情调对欧洲重建时期特有的乐观主义构成了无声批评。' },
        { w: 'existencialismo', t: '存在主义', e: 'El existencialismo impregna estos personajes marginados, cuya libertad radical aparece acompañada por la angustia de elegir sin ninguna garantía trascendente.', et: '存在主义浸透这些边缘人物，他们极端的自由伴随着在没有任何超验保障下作出选择的焦虑。' },
        { w: 'modernidad', t: '现代性', e: 'La modernidad no es una época, sino una actitud crítica hacia el presente.', et: '现代性不是一个时代，而是对当下的批判态度。' },
        { w: 'alteridad', t: '他者性', e: 'La alteridad representada en el cuadro no constituye un exotismo decorativo, sino una interrogación radical sobre los límites de nuestra identidad cultural.', et: '画中呈现的他者性并非装饰性的异国情调，而是对我们文化身份边界的根本追问。' },
        { w: 'reificación', t: '物化', e: 'La reificación del espectador se manifiesta cuando el museo reduce su experiencia a datos cuantificables, ignorando la dimensión contemplativa y crítica del encuentro estético.', et: '当博物馆把观者的体验简化为可量化数据，忽视审美相遇的沉思与批判维度时，观者的物化便显现出来。' },
        { w: 'cosificación', t: '物化', e: 'La cosificación del cuerpo femenino en la publicidad revela una economía visual que transforma deseos y subjetividades en mercancías perfectamente intercambiables.', et: '广告中女性身体的物化揭示了一种视觉经济，它将欲望和主体性转化为完全可交换的商品。' },
        { w: 'metanarrativa', t: '元叙事', e: 'La metanarrativa del progreso nacional se quiebra cuando la exposición incorpora testimonios indígenas que contradicen la versión triunfalista de la historia oficial.', et: '当展览纳入反驳官方历史胜利叙事的原住民证词时，国家进步的元叙事便发生断裂。' },
        { w: 'problematizar', t: '问题化', e: 'Problematizar la mirada colonial del museo implica revisar sus clasificaciones, devolver agencia a las comunidades representadas y cuestionar quién posee autoridad interpretativa.', et: '将博物馆的殖民凝视问题化，意味着审视其分类、恢复所再现社群的主体能动性，并质疑谁拥有诠释权威。' }
      ] }
    ] },
    { id: 'es-u19', level: 'C1', title: '第十九单元 · 公共议题与辩论', desc: '掌握辩论、论证、表态的高级西语表达', color: '#ff9600', lessons: [
      { id: 'es-u19-l1', title: '辩论与论证', items: [
        { w: 'dialéctica', t: '辩证法', e: 'La dialéctica del debate no busca una victoria retórica inmediata, sino transformar las contradicciones iniciales mediante una confrontación rigurosa de tesis y objeciones.', et: '辩论的辩证法并非追求即时的修辞胜利，而是通过严谨地交锋论点与反驳，转化最初的矛盾。' },
        { w: 'retórica', t: '修辞术', e: 'La retórica del orador encubre la debilidad de sus inferencias mediante metáforas grandilocuentes y apelaciones emocionales que dificultan una evaluación racional de sus afirmaciones.', et: '演讲者的修辞以浮夸隐喻和情感诉求掩盖其推理的薄弱，使人们难以理性评估他的论断。' },
        { w: 'epistemología', t: '认识论', e: 'La epistemología permite examinar qué contamos como evidencia válida y bajo qué condiciones una creencia puede considerarse suficientemente justificada en una investigación científica rigurosa.', et: '认识论使我们能够审视什么算作有效证据，以及在严谨的科学研究中，一种信念在何种条件下才算得到充分证成。' },
        { w: 'impugnar', t: '质疑', e: 'Impugnar una conclusión exige identificar sus presupuestos ocultos, evaluar la validez del razonamiento y ofrecer contraejemplos pertinentes sin recurrir a descalificaciones personales.', et: '质疑结论需要识别其隐藏预设、评估推理的有效性，并提出恰当反例，而非诉诸人身贬损。' },
        { w: 'matizado', t: '细致入微', e: 'El ponente ofreció un análisis matizado de la reforma, reconociendo sus beneficios potenciales sin ignorar las desigualdades que podría agravar silenciosamente.', et: '报告人对改革作了细致入微的分析，既承认其潜在益处，也不忽视它可能悄然加剧的不平等。' },
        { w: 'insidioso', t: '阴险的', e: 'El argumento insidioso convierte una correlación estadística en prueba causal y desplaza sutilmente la carga de la demostración hacia quien formula objeciones.', et: '这个阴险的论证把统计相关性当作因果证据，并巧妙地将举证责任转移给提出异议的人。' },
        { w: 'sofisma', t: '诡辩', e: 'El sofisma convierte la ausencia de datos definitivos en prueba absoluta para descalificar toda crítica antes del examen de los hechos.', et: '诡辩把缺乏最终数据变成绝对证据，以便在审视事实之前就使一切批评失去效力。' },
        { w: 'silogismo', t: '三段论', e: 'El silogismo parece convincente, pero su conclusión se derrumba cuando se examina la premisa implícita sobre la que descansa todo el razonamiento.', et: '这个三段论看似有说服力，但只要审视整个推理所依赖的隐含前提，其结论便会瓦解。' },
      ] },
      { id: 'es-u19-l2', title: '公共议题', items: [
        { w: 'hegemonía', t: '霸权', e: 'La hegemonía de ciertos grupos económicos se reproduce cuando sus intereses particulares se presentan como aspiraciones universales y escapan al escrutinio democrático.', et: '当特定经济集团把自身特殊利益包装成普遍诉求并逃避民主审视时，它们的霸权便得以再生产。' },
        { w: 'liminalidad', t: '阈限性', e: 'La liminalidad del migrante revela la fragilidad de las fronteras identitarias, pues habita simultáneamente varios marcos culturales sin pertenecer plenamente a ninguno.', et: '移民的阈限性揭示身份边界的脆弱，因为他们同时处于多个文化框架中，却不完全属于任何一个。' },
        { w: 'antropoceno', t: '人类世', e: 'El antropoceno obliga a repensar la responsabilidad política, porque las decisiones humanas transforman sistemas planetarios cuyos efectos trascienden generaciones y soberanías nacionales.', et: '人类世迫使人们重新思考政治责任，因为人类决策正在改变行星系统，其影响跨越世代和国家主权。' },
        { w: 'praxis', t: '实践', e: 'La praxis ciudadana transforma los principios democráticos en acciones verificables cuando la participación cotidiana desplaza la obediencia pasiva y exige rendición de cuentas.', et: '当日常参与取代消极服从并要求问责时，公民实践便将民主原则转化为可验证的行动。' },
        { w: 'clientelismo', t: '庇护主义', e: 'El clientelismo político convierte los recursos públicos en instrumentos de lealtad personal y erosiona la autonomía institucional mediante redes informales de favores recíprocos.', et: '政治庇护主义将公共资源变成维系个人忠诚的工具，并通过非正式的互惠恩惠网络侵蚀制度自主性。' },
        { w: 'ubicuo', t: '无处不在', e: 'El control ubicuo de las plataformas digitales redefine la intimidad y normaliza una vigilancia cuyos mecanismos permanecen invisibles para la mayoría de usuarios.', et: '数字平台无处不在的控制重新定义了隐私，并使一种多数用户察觉不到其机制的监控正常化。' },
        { w: 'encuadre', t: '框架建构', e: 'El encuadre periodístico selecciona determinados actores y omite causas estructurales, orientando así la interpretación del conflicto sin necesidad de enunciar una consigna explícita.', et: '新闻框架选择特定行为者并省略结构性原因，无需明确喊出口号，便能引导公众解读冲突。' },
        { w: 'cosmopolitismo', t: '世界主义', e: 'El cosmopolitismo plantea obligaciones morales más allá de las fronteras estatales y cuestiona que la proximidad nacional determine nuestra responsabilidad ante el sufrimiento ajeno.', et: '世界主义提出超越国界的道德义务，并质疑国籍亲疏是否应决定我们对他人苦难的责任。' }
      ] },
      { id: 'es-u19-l3', title: '表态与立场', items: [
        { w: 'discurso', t: '话语', e: 'El discurso oficial adopta un tono conciliador, pero sus silencios estratégicos revelan una voluntad de evadir las responsabilidades históricas del gobierno.', et: '官方话语采取和解口吻，但其策略性沉默暴露了政府逃避历史责任的意图。' },
        { w: 'equívoco', t: '模棱两可', e: 'La formulación equívoca de la propuesta permite que cada facción la interprete a su conveniencia y posterga cualquier compromiso político realmente verificable.', et: '提案模棱两可的表述使各派系都能按自身利益加以解读，并推迟作出任何真正可验证的政治承诺。' },
        { w: 'elucidar', t: '阐明', e: 'El moderador intentó elucidar las divergencias entre ambos ponentes, distinguiendo sus desacuerdos conceptuales de aquellos derivados únicamente de una terminología inconsistente.', et: '主持人试图阐明两位报告人的分歧，区分概念上的不同意见与单纯由术语不一致造成的分歧。' },
        { w: 'contencioso', t: '争议性', e: 'El contencioso electoral exige un debate público riguroso, pues la legitimidad institucional depende de cómo se resuelvan las reclamaciones y se repare el daño causado.', et: '选举争议需要严谨的公共辩论，因为制度合法性取决于如何解决申诉并弥补已造成的损害。' },
        { w: 'disenso', t: '分歧', e: 'El disenso informado fortalece la deliberación colectiva porque obliga a explicitar presupuestos, revisar evidencias y abandonar la falsa unanimidad impuesta por la mayoría.', et: '知情的分歧能强化集体审议，因为它迫使人们明示预设、审查证据，并放弃多数强加的虚假一致。' },
        { w: 'ofuscar', t: '混淆', e: 'Ofuscar el debate con cifras descontextualizadas impide evaluar las políticas propuestas y convierte la discrepancia legítima en una competencia por controlar emocionalmente al auditorio.', et: '用脱离语境的数字混淆辩论，会阻碍人们评估拟议政策，并把正当分歧变成争夺听众情绪控制的竞赛。' },
        { w: 'saliente', t: '突出的', e: 'El rasgo saliente de su intervención fue la cautela epistémica: distinguió entre hechos comprobados, inferencias plausibles y afirmaciones carentes de respaldo empírico.', et: '他发言的突出特点是认识论上的谨慎：区分已证实的事实、合理推论与缺乏实证支持的论断。' },
        { w: 'ortodoxia', t: '正统性', e: 'La ortodoxia académica impide analizar cualquier problema social con mente abierta al imponer marcos interpretativos únicos.', et: '学术正统性通过强加单一解释框架，妨碍以开放心态分析任何社会问题。' }
      ] }
    ] },
    { id: 'es-u20', level: 'C2', title: '第二十单元 · 母语语域与分寸', desc: '用高频习语、人称切换和礼貌表达把握真实交流的分寸', color: '#ff9600', lessons: [
      { id: 'es-u20-l1', title: '高频习语与言外之意', items: [
        { w: 'estar en las nubes', t: '心不在焉／走神', e: 'No te he oído: estaba en las nubes pensando en las vacaciones.', et: '我没听见你说什么：我刚才想着假期，走神了。' },
        { w: 'costar un ojo de la cara', t: '贵得离谱／花大价钱（口语）', e: 'Esa cámara me costó un ojo de la cara, así que espero que dure muchos años.', et: '那台相机花了我一大笔钱，所以我希望它能用很多年。' },
        { w: 'dar la vuelta a la tortilla', t: '扭转局势／把说法反过来（西班牙口语，依语境）', e: 'Íbamos perdiendo, pero el último gol dio la vuelta a la tortilla.', et: '我们本来落后，但最后一球扭转了局势。' },
        { w: 'irse por las ramas', t: '绕弯子／说不到重点', e: 'No te vayas por las ramas: dime si puedes terminarlo hoy.', et: '别绕弯子，告诉我你今天能不能完成。' },
        { w: 'no dar pie con bola', t: '屡屡出错／怎么做都不对（口语）', e: 'Estaba tan nervioso que no daba pie con bola en la entrevista.', et: '面试时我太紧张，频频出错，怎么做都不对。' },
        { w: 'tomar el pelo', t: '开某人玩笑／逗弄某人（口语）', e: 'No te enfades; solo te estaba tomando el pelo.', et: '别生气，我只是在逗你。' },
        { w: 'meter la pata', t: '说错话／办砸事（口语）', e: 'Metí la pata al mencionar su despido delante de todos.', et: '我当着大家的面提到他被解雇的事，真是说错话了。' },
        { w: 'quedarse de piedra', t: '惊呆了／目瞪口呆（口语）', e: 'Me quedé de piedra cuando anunció que se mudaba a otro país.', et: '他宣布要搬到另一个国家时，我惊呆了。' }
      ] },
      { id: 'es-u20-l2', title: 'tú、vosotros 与 usted', items: [
        { w: 'Puedes llamarme Ana', t: '你可以叫我安娜（用 tú 拉近距离）', e: 'No hace falta que me hable de usted; puedes llamarme Ana.', et: '不必用 usted 称呼我，你可以叫我安娜。' },
        { w: 'Nos tuteamos', t: '我们用 tú 相称／别那么拘束', e: 'Llevamos años trabajando juntos; nos tuteamos, ¿vale?', et: '我们一起工作这么多年了，用 tú 相称吧，好吗？' },
        { w: 'Dígame', t: '您说／请讲（正式）', e: 'Dígame qué necesita y veré cómo ayudarle.', et: '请告诉我您需要什么，我看看怎么帮您。' },
        { w: 'Le agradezco su paciencia', t: '感谢您的耐心（正式）', e: 'Le agradezco su paciencia; el técnico llegará en unos minutos.', et: '感谢您的耐心，技术人员几分钟后就到。' },
        { w: 'Contadme', t: '跟我说说吧（vosotros，西班牙口语）', e: 'Contadme qué pasó anoche, que todavía no sé nada.', et: '跟我说说昨晚发生了什么，我还什么都不知道。' },
        { w: 'Os agradezco la espera', t: '感谢各位久等（vosotros，西班牙）', e: 'Os agradezco la espera y os pido disculpas por el retraso.', et: '感谢各位久等，也为这次延误向大家道歉。' },
        { w: '¿Te importa si...?', t: '你介意……吗？（tú，日常）', e: '¿Te importa si abro la ventana? Hace un poco de calor.', et: '你介意我开窗吗？有点热。' },
        { w: '¿Le importaría...?', t: '您是否介意……／能否请您……（usted，更委婉）', e: '¿Le importaría revisar este informe antes de la reunión?', et: '您能否在会前审阅这份报告？' }
      ] },
      { id: 'es-u20-l3', title: '礼貌请求与留有余地', items: [
        { w: 'Me temo que', t: '恐怕……（委婉传达坏消息或不同意见）', e: 'Me temo que no podremos entregar el pedido antes del viernes.', et: '恐怕我们无法在周五前交付订单。' },
        { w: 'Le agradecería que', t: '如蒙您……将不胜感激（正式）', e: 'Le agradecería que revisara el documento antes del viernes.', et: '如您能在周五前审阅文件，我将不胜感激。' },
        { w: 'Si no te importa', t: '如果你不介意／方便的话（tú）', e: 'Si no te importa, prefiero hablarlo mañana con más calma.', et: '如果你不介意，我想明天再从容地谈这件事。' },
        { w: 'Si no es molestia', t: '如不麻烦您／如果不打扰的话（礼貌）', e: 'Si no es molestia, ¿podría enviarme una copia del contrato?', et: '如果不麻烦您，能否发我一份合同副本？' },
        { w: 'Te lo agradezco', t: '谢谢你这么做／我很感激（tú）', e: 'Te lo agradezco de verdad; no era tu obligación ayudarme.', et: '我真的很感激你这么做；你本来没有义务帮我。' },
        { w: 'No es mi intención molestarte', t: '我不想打扰你／并非有意给你添麻烦（tú）', e: 'No es mi intención molestarte, pero necesito una respuesta antes de las cinco.', et: '我不是想给你添麻烦，但我需要在五点前得到答复。' },
        { w: 'Perdona que insista', t: '恕我再坚持一下／抱歉我再问一次（tú）', e: 'Perdona que insista, pero ese plazo no nos deja margen para revisar.', et: '恕我再坚持一下，但那个期限没给我们留下审阅的余地。' },
        { w: 'Comprendo tu postura', t: '我理解你的立场（可先认同再转折）', e: 'Comprendo tu postura, aunque no comparto esa conclusión.', et: '我理解你的立场，尽管我不同意那个结论。' }
      ] }
    ] },
    { id: 'es-u21', level: 'C2', title: '第二十一单元 · 潜台词与细腻语气', desc: '听懂反讽、暗示和委婉拒绝，用保留与缓和表达真实态度', color: '#1cb0f6', lessons: [
      { id: 'es-u21-l1', title: '反讽、幽默与克制评价', items: [
        { w: '¡Qué sorpresa!', t: '真意外！／可真“惊喜”（依语境可反讽）', e: '¿Otra reunión a las ocho? ¡Qué sorpresa!', et: '又八点开会？可真“惊喜”！' },
        { w: '¡Vaya, vaya!', t: '哎呀，瞧瞧／原来如此（依语境可带揶揄或提醒）', e: '¡Vaya, vaya! Hoy llegas tarde otra vez.', et: '瞧瞧，你今天又迟到了。' },
        { w: '¡Qué genio!', t: '可真是个“天才”（常作反讽，也可真诚夸赞）', e: 'Se le ha olvidado guardar el archivo otra vez. ¡Qué genio!', et: '他又忘了保存文件，可真是个“天才”！' },
        { w: '¡Qué arte tienes!', t: '你真有一套／真逗、真有你的（西班牙口语，可真诚，也可打趣或反讽）', e: 'Has convencido al abuelo para que pruebe el móvil nuevo. ¡Qué arte tienes!', et: '你居然说服爷爷试用新手机，真有你的！' },
        { w: 'No está mal', t: '还不错（克制评价；语气可改变含义）', e: 'No está mal, aunque yo cambiaría el último párrafo.', et: '还不错，不过我会改一下最后一段。' },
        { w: 'No es para tanto', t: '没那么严重／不至于这样（安慰或淡化）', e: 'Solo fue un pequeño error; no es para tanto.', et: '只是个小错误，没那么严重。' },
        { w: 'Es de película', t: '像电影一样／离奇得难以置信（口语）', e: 'Lo que nos pasó ayer es de película: perdimos el tren y conocimos a un actor famoso.', et: '我们昨天的经历像电影一样：错过了火车，还遇到了一位著名演员。' },
        { w: 'Humor negro', t: '黑色幽默（拿沉重话题开玩笑，须看场合）', e: 'El humor negro puede funcionar entre amigos, pero aquí podría resultar hiriente.', et: '黑色幽默在朋友之间可能行得通，但在这里可能会伤人。' }
      ] },
      { id: 'es-u21-l2', title: '暗示与委婉拒绝', items: [
        { w: 'Ya veremos', t: '到时候再说吧／以后再看（常推迟决定）', e: '—¿Te apuntas al viaje? —Ya veremos; todavía no sé cómo estaré de trabajo.', et: '—你会参加这次旅行吗？—到时候再说吧，我还不知道工作会不会忙。' },
        { w: 'Me pillas mal', t: '你这会儿找我不太方便／我现在不是时候（西班牙口语）', e: 'Me pillas mal: estoy entrando en una reunión. ¿Te llamo luego?', et: '你这会儿找我不太方便：我正好要去开会。我稍后给你打电话好吗？' },
        { w: 'Lo tengo complicado', t: '我这边不太好安排／我恐怕腾不出时间（西班牙口语）', e: 'El jueves lo tengo complicado, pero el viernes podría quedar.', et: '周四我可能不太好安排，不过周五可以见面。' },
        { w: 'En otra ocasión', t: '下次吧／改次再说（委婉谢绝）', e: 'Gracias por la invitación, pero esta vez no podré; será en otra ocasión.', et: '谢谢你的邀请，但这次我去不了，下次吧。' },
        { w: 'Lo voy a pensar', t: '我会考虑一下（不一定承诺）', e: 'La oferta me interesa, pero lo voy a pensar con calma.', et: '我对这个提议有兴趣，但我会从容考虑一下。' },
        { w: 'Lo estudiaremos', t: '我们会研究一下（正式；可表示尚未承诺）', e: 'Por ahora no puedo confirmarlo; lo estudiaremos con el equipo.', et: '目前我还不能确认；我们会和团队研究一下。' },
        { w: 'No voy a poder', t: '我来不了／我没办法做到（直接但自然的拒绝）', e: 'Lo siento, pero mañana no voy a poder acompañarte.', et: '很抱歉，明天我没办法陪你了。' },
        { w: 'Ahora mismo no', t: '现在不行／暂时不行（限定时间，留有余地）', e: 'Ahora mismo no puedo revisarlo; dame media hora y lo miro.', et: '我现在没法审阅；给我半小时，我再看。' }
      ] },
      { id: 'es-u21-l3', title: '缓和、保留与委婉建议', items: [
        { w: 'no necesariamente', t: '不一定／未必如此', e: 'No necesariamente; un precio alto no siempre significa mejor calidad.', et: '不一定；价格高并不总意味着质量更好。' },
        { w: 'hasta cierto punto', t: '在某种程度上／到一定程度为止', e: 'Estoy de acuerdo hasta cierto punto, pero veo un riesgo en ese plazo.', et: '我在某种程度上同意，但我认为那个期限有风险。' },
        { w: 'tiene sentido', t: '有道理／说得通（可表示有限认同）', e: 'Lo que propones tiene sentido, aunque habría que ajustar el presupuesto.', et: '你的提议有道理，不过需要调整预算。' },
        { w: 'podría ser', t: '有可能／也许可以（保留判断）', e: 'Podría ser, pero necesitamos más datos antes de decidir.', et: '有可能，但我们需要更多数据才能决定。' },
        { w: 'más bien', t: '更确切地说／有点儿／相当（依语境）', e: 'No es que esté en desacuerdo; más bien diría que tengo dudas.', et: '不是我不同意，更确切地说，我是有些疑虑。' },
        { w: 'en cierto modo', t: '从某种意义上说／在某种意义上', e: 'En cierto modo, la espera nos ha ayudado a mejorar la propuesta.', et: '从某种意义上说，这段等待帮助我们改进了提案。' },
        { w: 'a decir verdad', t: '说实话／老实说', e: 'A decir verdad, no creo que esa sea la mejor solución.', et: '说实话，我不认为那是最好的解决办法。' },
        { w: 'yo que tú', t: '如果我是你／要是我处在你这个位置（口语建议）', e: 'Yo que tú, hablaría con ella antes de enviar ese mensaje.', et: '如果我是你，我会在发那条消息前先跟她谈谈。' }
      ] }
    ] },
    { id: 'es-u22', level: 'C2', title: '第二十二单元 · Argumentación y evidencia', desc: 'Construir tesis, conceder matices y citar fuentes con precisión', color: '#2563eb', lessons: [
      { id: 'es-u22-l1', title: 'Tesis y pruebas', items: [
        { w: 'aducir pruebas', t: '提出证据（正式；法律、学术论证常用）', e: 'Para sostener esa tesis, tendría que aducir pruebas algo más sólidas que una simple anécdota.', et: '要支撑那个论点，他得拿出比一则轶事更扎实的证据。' },
        { w: 'sostener una tesis', t: '坚持并论证某一观点（书面、学术语域）', e: 'Sostener una tesis exige anticipar las objeciones más razonables, no solo las más fáciles.', et: '坚持一个论点，必须预先想到最合理的反对意见，而不只是最容易反驳的那些。' },
        { w: 'aportar datos', t: '提供数据（中性偏正式，强调为论证补充材料）', e: 'Aportar datos concretos refuerza el argumento, siempre que no se confundan las cifras con la explicación.', et: '提供具体数据能加强论证，前提是别把数字和解释混为一谈。' },
        { w: 'en rigor', t: '严格说来（书面；用来限定或修正判断）', e: 'En rigor, no disponemos de pruebas suficientes para afirmar tal cosa.', et: '严格说来，我们并没有足够的证据来断言这一点。' },
        { w: 'a todas luces', t: '显然、明摆着（书面强调，略带评判）', e: 'La conclusión es, a todas luces, prematura.', et: '这个结论显然为时过早。' },
        { w: 'cabía esperar', t: '本就在预料之中（书面评价，常带无奈）', e: 'Cabía esperar una reacción así, dado el tono del informe.', et: '考虑到那份报告的语气，这样的反应本就在预料之中。' },
        { w: 'el grueso de', t: '……的大部分、主体（书面，指数量或构成）', e: 'El grueso de la evidencia procede de estudios financiados por la propia empresa.', et: '大部分证据来自该企业自己资助的研究。' },
        { w: 'sesgo de confirmación', t: '确认偏误（学术与评论用语；只找支持自己的信息）', e: 'El sesgo de confirmación nos lleva a leer únicamente lo que confirma nuestra postura.', et: '确认偏误让我们只去读那些印证自己立场的东西。' }
      ] },
      { id: 'es-u22-l2', title: 'Concesión y matices', items: [
        { w: 'dicho esto', t: '话虽如此（先让步再转折；书面与正式口语皆可）', e: 'Dicho esto, reconozco que su objeción tiene fundamento.', et: '话虽如此，我承认您的反对意见是有依据的。' },
        { w: 'ahora bien', t: '不过、然而（正式转折，常用于论证中限定前文）', e: 'Ahora bien, una cosa es reconocer el problema y otra muy distinta aceptar esa solución.', et: '不过，承认问题是一回事，接受那个解决方案完全是另一回事。' },
        { w: 'si cabe', t: '甚至可以说、更有甚者（书面，用于加强比较）', e: 'La segunda propuesta es más arriesgada, si cabe, que la primera.', et: '第二份提案甚至可以说比第一份更冒险。' },
        { w: 'no obstante lo cual', t: '尽管如此（非常正式，书面转折）', e: 'La medida redujo el gasto; no obstante lo cual, aumentó la desigualdad.', et: '这项措施减少了开支；尽管如此，它加剧了不平等。' },
        { w: 'en la medida en que', t: '在……的范围内、就……而言（限定条件，书面）', e: 'La crítica es válida en la medida en que se apoye en hechos verificables.', et: '这项批评只要建立在可核实的事实上，就是成立的。' },
        { w: 'matizar', t: '补充细微差别、修正措辞（书面；避免把话说绝对）', e: 'Conviene matizar esa afirmación: no todos los casos responden igual.', et: '那句话最好加些限定：并非所有情况都同样适用。' },
        { w: 'conceder', t: '承认（对方有理）、作出让步（辩论与谈判）', e: 'Puedo conceder que el coste inicial es alto, pero el ahorro a medio plazo lo compensa.', et: '我可以承认初期成本很高，但中期节省的费用足以抵消。' },
        { w: 'pecar de', t: '有……之嫌、过于……（评价性，常指缺点）', e: 'El informe peca de optimista y apenas menciona los riesgos.', et: '这份报告过于乐观，几乎没提到风险。' }
      ] },
      { id: 'es-u22-l3', title: 'Citas y fuentes', items: [
        { w: 'citar a', t: '引用（某作者、某人的话；学术与新闻）', e: 'Citar a un autor sin haberlo leído es una forma elegante de no decir nada.', et: '引用一个没读过的作者，是一种优雅的空话。' },
        { w: 'parafrasear', t: '转述、改写（学术写作；须忠实原意）', e: 'Parafrasear correctamente exige entender el original, no limitarse a cambiar palabras.', et: '正确转述要求理解原文，而不是只换几个词。' },
        { w: 'atribuir', t: '把（言论、观点）归于某人；归因（书面）', e: 'Atribuir esa idea a Freud es un error bastante común.', et: '把那个观点归到弗洛伊德名下，是个相当常见的错误。' },
        { w: 'sacar de contexto', t: '断章取义、脱离语境（批评引用方式）', e: 'La cita que usó el periódico sacaba de contexto una frase irónica.', et: '报纸所用的引文把一句反讽的话断章取义了。' },
        { w: 'fuente primaria', t: '一手来源（史学、新闻与学术）', e: 'Siempre que sea posible, conviene acudir a la fuente primaria.', et: '只要有可能，就应当查阅一手来源。' },
        { w: 'nota al pie', t: '脚注（书面；也可指被藏在细节里的关键信息）', e: 'La objeción más seria aparece en una nota al pie, casi escondida.', et: '最严重的异议出现在一个几乎被藏起来的脚注里。' },
        { w: 'dar por sentado', t: '想当然地认为（书面与口语通用）', e: 'No des por sentado que el lector comparte tus premisas.', et: '别想当然地以为读者认同你的前提。' },
        { w: 'de primera mano', t: '第一手的、直接获得的（消息、经验）', e: 'Su testimonio procede de primera mano, no de un resumen de segunda mano.', et: '他的证词是第一手的，不是转手的概述。' }
      ] }
    ] },
    { id: 'es-u23', level: 'C2', title: '第二十三单元 · Negociación y conflicto', desc: 'Plantear condiciones, leer las reservas y cerrar acuerdos', color: '#7c3aed', lessons: [
      { id: 'es-u23-l1', title: 'Plantear condiciones', items: [
        { w: 'poner sobre la mesa', t: '摆到桌面上、正式提出（谈判；也指摊开谈）', e: 'Prefiero poner sobre la mesa nuestras condiciones antes de hablar de cifras.', et: '我希望在谈数字之前先把我们的条件摆到桌面上。' },
        { w: 'a condición de que', t: '条件是……（后接虚拟式；正式谈判用语）', e: 'Aceptaríamos el retraso a condición de que se compensara con una reducción del precio.', et: '我们可以接受延期，条件是价格要相应下调作为补偿。' },
        { w: 'sin margen de maniobra', t: '没有回旋余地（商务与政治语境）', e: 'Con un plazo tan ajustado, no nos queda margen de maniobra.', et: '期限这么紧，我们已经没有回旋余地了。' },
        { w: 'dejar claro', t: '明确表明（立场；比“说清楚”更强硬）', e: 'Quiero dejar claro que nuestra oferta no incluye el mantenimiento.', et: '我要明确一点：我们的报价不包括维护。' },
        { w: 'punto de partida', t: '起点、初始方案（谈判中表示还可再谈）', e: 'Consideremos esta cifra como un punto de partida, no como una oferta final.', et: '我们把这个数字当作起点，而不是最终报价。' },
        { w: 'contraoferta', t: '还价、反提议（谈判）', e: 'Su contraoferta mejora el precio, pero alarga los plazos.', et: '他们的还价改善了价格，却把期限拉长了。' },
        { w: 'innegociable', t: '不可谈判的、没有商量余地（商务）', e: 'La fecha de entrega es innegociable; el resto admite ajustes.', et: '交付日期没有商量余地，其余部分可以调整。' },
        { w: 'margen de error', t: '误差范围；比喻容错空间', e: 'Hemos calculado el presupuesto con un margen del diez por ciento.', et: '我们做预算时留了百分之十的余地。' }
      ] },
      { id: 'es-u23-l2', title: 'Responder a las reservas', items: [
        { w: 'reparo', t: '顾虑、异议（正式；常用复数，语气比“反对”温和）', e: 'Su propuesta es interesante, aunque tengo un par de reparos de fondo.', et: '他的提案很有意思，不过我有几点实质性的顾虑。' },
        { w: 'suscitar dudas', t: '引起疑问、令人存疑（书面）', e: 'El informe suscita dudas sobre la viabilidad del proyecto.', et: '这份报告让人对项目的可行性产生疑问。' },
        { w: 'visto bueno', t: '批准、认可（商务与行政；常与 dar 连用）', e: 'Sin el visto bueno de la dirección, no podemos firmar nada.', et: '没有管理层的批准，我们什么都不能签。' },
        { w: 'echarse atrás', t: '反悔、退缩（口语；指改变已作出的承诺）', e: 'No quiero que se echen atrás a última hora.', et: '我不希望他们到最后关头反悔。' },
        { w: 'dar marcha atrás', t: '收回、撤销（决定）；反悔（与 echarse atrás 都偏口语，后者更常用于决定）', e: 'Si el banco da marcha atrás, tendremos que replantear la operación.', et: '如果银行撤回决定，我们就得重新考虑这笔交易。' },
        { w: 'salvaguarda', t: '保障条款、保障措施（正式；防止最坏情况）', e: 'Exigimos una salvaguarda por escrito antes de compartir los datos.', et: '在共享数据之前，我们要求有书面的保障条款。' },
        { w: 'letra pequeña', t: '合同细则、小字条款（比喻隐藏的附加条件）', e: 'El ahorro que anuncian desaparece en la letra pequeña.', et: '他们宣传的节省，在细则里就消失了。' },
        { w: 'dejar en el aire', t: '悬而未决、没有落实（谈判与计划）', e: 'No dejemos en el aire la cuestión de la garantía.', et: '我们别把质保的问题悬着不解决。' }
      ] },
      { id: 'es-u23-l3', title: 'Cerrar el acuerdo', items: [
        { w: 'llegar a un acuerdo', t: '达成协议（中性；比“签约”更宽泛）', e: 'Finalmente llegamos a un acuerdo que ambas partes consideran razonable.', et: '我们最终达成了一个双方都认为合理的协议。' },
        { w: 'plasmar por escrito', t: '落实到书面（正式；强调可追溯）', e: 'Todo lo acordado debe plasmarse por escrito antes del viernes.', et: '所有商定的内容都要在周五前落到书面上。' },
        { w: 'comprometerse a', t: '承诺做某事（正式；含义务感）', e: 'Nos comprometemos a entregar la primera fase en marzo.', et: '我们承诺在三月份交付第一阶段。' },
        { w: 'cumplir lo pactado', t: '履行约定（商务；强调守信）', e: 'Si no cumplen lo pactado, aplicaremos la cláusula de penalización.', et: '如果他们不履行约定，我们就启用违约条款。' },
        { w: 'trato hecho', t: '成交、说定了（口语商务；一拍即合）', e: 'Trato hecho: revisamos el precio y mantenemos el plazo.', et: '成交：我们调整价格，期限保持不变。' },
        { w: 'cláusula', t: '条款（合同、法律文本）', e: 'La cláusula de confidencialidad se extiende cinco años.', et: '保密条款的有效期为五年。' },
        { w: 'punto muerto', t: '僵局（谈判；双方都不肯让步）', e: 'Tras dos horas de conversación, la negociación llegó a un punto muerto.', et: '谈了两个小时后，谈判陷入了僵局。' },
        { w: 'desbloquear', t: '打破僵局、使（谈判）重新推进；解锁', e: 'Para desbloquear la situación, propusimos pagar en dos tramos.', et: '为了打破僵局，我们提议分两期付款。' }
      ] }
    ] },
    { id: 'es-u24', level: 'C2', title: '第二十四单元 · Cima: matices, cohesión y postura', desc: 'Distinguir intensidad y registro, enlazar el discurso y leer la postura implícita', color: '#0f766e', lessons: [
      { id: 'es-u24-l1', title: 'Matices léxicos', items: [
        { w: 'soslayar', t: '回避、绕开（问题、责任；书面，语气克制）', e: 'El informe soslaya la cuestión de quién autorizó el pago.', et: '这份报告回避了是谁批准这笔付款的问题。' },
        { w: 'escamotear', t: '暗中抽掉、隐瞒（细节、事实；书面，含贬义）', e: 'La nota escamotea la cifra que más habría molestado al público.', et: '那则报道隐去了最会让公众不安的那个数字。' },
        { w: 'deslindar', t: '划清、界定（概念、责任；正式）', e: 'Conviene deslindar la crítica a la persona de la crítica a su método.', et: '应当把对人的批评与对其方法的批评区分清楚。' },
        { w: 'atenuar', t: '减轻、缓和（程度、语气；中性偏正式）', e: 'Eligió un tono neutro para atenuar la dureza del reproche.', et: '他选了中性的语气，以缓和责备的尖锐。' },
        { w: 'desmesurado', t: '过度的、不成比例的（书面，评价性强）', e: 'La reacción fue desmesurada para un error tan leve.', et: '为这么小的一个错误，反应过度了。' },
        { w: 'tajante', t: '斩钉截铁的、不容分说的（常含缺少余地之意）', e: 'Su respuesta fue tajante: no habría ninguna excepción.', et: '他的回答斩钉截铁：不会有任何例外。' },
        { w: 'de soslayo', t: '斜着眼、不动声色地（看）；间接地', e: 'Lo miró de soslayo, sin girar la cabeza.', et: '他没转头，斜着眼看了他一下。' },
        { w: 'a duras penas', t: '勉强、好不容易（书面与口语通用，强调吃力）', e: 'A duras penas consiguió terminar el informe antes del plazo.', et: '他好不容易才在截止前写完报告。' }
      ] },
      { id: 'es-u24-l2', title: 'Cohesión y retórica', items: [
        { w: 'antes bien', t: '反而、倒不如说（书面转折，用于修正前句）', e: 'No se trata de una excepción; antes bien, confirma la regla.', et: '这不是例外；恰恰相反，它印证了规律。' },
        { w: 'por añadidura', t: '此外、而且（书面，补充递进）', e: 'La medida reduce costes y, por añadidura, simplifica el trámite.', et: '这项措施降低成本，此外还简化了手续。' },
        { w: 'en aras de', t: '为了……起见、以……为名义（正式，常带审视意味）', e: 'En aras de la transparencia, publicaron todos los correos internos.', et: '为了透明起见，他们公开了所有内部邮件。' },
        { w: 'a tenor de', t: '根据、依照（书面；多用于依据材料作判断）', e: 'A tenor de los datos disponibles, el descenso es real pero leve.', et: '根据现有数据，下降确实存在，但幅度不大。' },
        { w: 'so capa de', t: '以……为幌子、打着……的旗号（书面，含揭穿意味）', e: 'So capa de neutralidad, el informe defendía los intereses de una sola parte.', et: '那份报告打着中立的幌子，维护的却是单方面的利益。' },
        { w: 'no en vano', t: '并非无缘无故、难怪（书面强调因果）', e: 'No en vano el autor dedica tres páginas a esa objeción.', et: '作者用了三页谈那个异议，并非无缘无故。' },
        { w: 'a fuer de', t: '由于、凭借（书面，多指因某种做法而招致后果）', e: 'A fuer de matizar tanto, acabó sin decir nada reconocible.', et: '他因为处处限定，最后什么明确的话也没说出来。' },
        { w: 'valga la expresión', t: '请允许我这么说（插入语，为用词致歉或自嘲）', e: 'El proyecto es, valga la expresión, un barco sin timón.', et: '这个项目，请允许我这么说，是条没舵的船。' }
      ] },
      { id: 'es-u24-l3', title: 'Postura, imagen e ironía', items: [
        { w: 'entre líneas', t: '字里行间、言外之意（读法）', e: 'Leyendo entre líneas, su dimisión era un aviso, no una despedida.', et: '从字里行间看，他的辞职是个警告，而不是告别。' },
        { w: 'sin ambages', t: '直截了当、毫不含糊（正式）', e: 'Dijo sin ambages que el proyecto no estaba listo.', et: '他直截了当地说项目还没准备好。' },
        { w: 'con sorna', t: '带着嘲讽、阴阳怪气地（口语与书面）', e: 'Comentó con sorna que el comité siempre acierta cuando ya pasó todo.', et: '他挖苦地说，委员会总是在事情过去之后才判断正确。' },
        { w: 'una pulla', t: '一句带刺的话、暗讽（口语，常披着玩笑的外衣）', e: 'Soltó una pulla sobre el presupuesto y cambió de tema.', et: '他关于预算刺了一句，就换了话题。' },
        { w: 'salirse por la tangente', t: '转移话题、避而不答（口语）', e: 'Cuando le preguntaron por el retraso, se salió por la tangente.', et: '被问到延期时，他绕开了问题。' },
        { w: 'guardar las formas', t: '顾及体面、维持表面的礼数（中性偏批评）', e: 'Guardaron las formas, aunque ninguno creía ya en el acuerdo.', et: '他们维持了表面的礼数，尽管谁都不再相信这个协议。' },
        { w: 'de doble filo', t: '双刃的、两面都伤人的（评价言辞或好处）', e: 'El elogio era de doble filo: reconocía el esfuerzo y la falta de criterio.', et: '那句称赞双刃：既肯定了努力，也点出缺乏判断。' },
        { w: 'sentar cátedra', t: '以权威口吻下断语、说教（含不以为然）', e: 'No hace falta sentar cátedra en cada reunión; a veces basta con preguntar.', et: '不必每次开会都以权威口吻定论；有时问一句就够了。' }
      ] }
    ] },
    { id: 'es-u25', level: 'C2', title: '第二十五单元 · Cima: cantidad, atribución y cierre', desc: 'Cantidades difusas, atribución de causas y responsabilidades, y negativas que cierran bien', color: '#0f766e', lessons: [
      { id: 'es-u25-l1', title: 'Cantidad y grado', items: [
        { w: 'grosso modo', t: '大致上、粗略地说（书面与半正式；承认数字不精确）', e: 'Grosso modo, una de cada tres familias consultadas dijo haber cambiado de proveedor en el último año.', et: '大致上说，受访家庭中每三户就有一户表示过去一年换过供应商。' },
        { w: 'a ojo de buen cubero', t: '凭感觉估、大约（口语，带调侃；强调没有依据）', e: 'A ojo de buen cubero, en la sala cabían doscientas personas; el informe habla de trescientas.', et: '凭估计，厅里能站两百人；报告里却写三百人。' },
        { w: 'sendos', t: '各自的、各一个的（书面；两项各配一份，误用常被诟病）', e: 'Los dos ayuntamientos publicaron sendos informes el mismo día, sin coordinarse.', et: '两个市政府在同一天各自发布了一份报告，彼此并无协调。' },
        { w: 'un sinfín de', t: '数不清的、无数的（强调繁多，略带夸张）', e: 'La propuesta acumuló un sinfín de enmiendas que nadie llegó a leer enteras.', et: '这项提案堆起了无数修正案，没人从头到尾读完。' },
        { w: 'cuatro gatos', t: '寥寥几个人（口语，含轻视或自嘲）', e: 'Esperaban un debate masivo, pero al final solo acudieron cuatro gatos.', et: '他们原以为会有大规模辩论，结果只来了寥寥几个人。' },
        { w: 'de sobra', t: '绰绰有余；（与 saber 连用）明明、完全（口语）', e: 'De sobra sabes que la cifra no cuadra; no hace falta que insistas.', et: '你明明知道这个数字对不上；不用再强调了。' },
        { w: 'por doquier', t: '到处、四处（书面，带文学色彩）', e: 'Los carteles de la campaña aparecieron por doquier, incluso en los pueblos más pequeños.', et: '竞选海报到处都是，连最小的村镇也有。' },
        { w: 'a rebosar', t: '满得快要溢出来（描述容量到达极限）', e: 'La sala estaba a rebosar y muchos siguieron la sesión de pie en el pasillo.', et: '会场满得快要溢出来，许多人站在走廊里听完。' }
      ] },
      { id: 'es-u25-l2', title: 'Causa y atribución', items: [
        { w: 'de ahí que', t: '因此、所以（书面；后接虚拟式，表推断出的结果）', e: 'El plazo se fijó sin consultar a los equipos; de ahí que casi nadie lo cumpliera.', et: '期限没跟团队商量就定了，所以几乎没人按时完成。' },
        { w: 'por mor de', t: '由于、为了（书面而近古雅，常带做作或戏谑色彩）', e: 'Por mor de una cláusula que nadie leyó, el contrato se prorrogó otro año.', et: '因为一条谁也没读的条款，合同又续了一年。' },
        { w: 'achacar', t: '把……归咎于（+a；书面，常暗示归因未必公允）', e: 'El director achacó el retraso a la falta de personal, aunque el equipo llevaba meses avisando de otro problema.', et: '主管把延期归咎于人手不足，尽管团队几个月前就在提醒另一个问题。' },
        { w: 'imputar', t: '归责于、指控（法律与正式语域；指向具体人或机构）', e: 'La auditoría imputa la pérdida a dos directivos y no al mercado, como sostenía la empresa.', et: '审计把损失归责于两名高管，而不是公司所主张的市场因素。' },
        { w: 'obedecer a', t: '出于、源于（书面；解释动机或深层原因）', e: 'Su silencio obedecía más al cálculo que a la ignorancia.', et: '他的沉默更多出自算计，而不是不知情。' },
        { w: 'el detonante', t: '导火索（新闻语域；指触发事件的近因，而非根本原因）', e: 'El detonante no fue el despido, sino el correo que lo anunció un viernes por la tarde.', et: '导火索不是解雇本身，而是那个周五下午宣布解雇的邮件。' },
        { w: 'no es casual que', t: '……并非偶然（后接虚拟式；暗示背后有结构性原因）', e: 'No es casual que las quejas coincidan con el cambio de proveedor.', et: '投诉与更换供应商的时间重合，并非偶然。' },
        { w: 'correr a cargo de', t: '由……承担、由……负责（费用或责任归属）', e: 'Los gastos de la mudanza corren a cargo de la empresa, según el contrato.', et: '按合同，搬家费用由公司承担。' }
      ] },
      { id: 'es-u25-l3', title: 'Negar y cerrar', items: [
        { w: 'en absoluto', t: '完全不、一点也不（强否定；可单独作答，比「no」硬）', e: '—¿Te molesta que lo comentemos ahora? —En absoluto; prefiero resolverlo hoy.', et: '「你介意我们现在谈这件事吗？」「完全不介意；我宁愿今天就解决。」' },
        { w: 'ni de lejos', t: '远远不、差得远（口语，带比较意味的强调否定）', e: 'El nuevo sistema no es ni de lejos tan rápido como prometía el folleto.', et: '新系统远没有宣传册上承诺的那么快。' },
        { w: 'no es el caso', t: '情况并非如此（礼貌纠正对方预设，随后关门）', e: 'Se ha dicho que ocultamos datos; no es el caso: lo que faltó fue tiempo para publicarlos.', et: '有人说我们隐瞒数据；情况并非如此：缺的是公布的时间。' },
        { w: 'de ningún modo', t: '无论如何不、绝不（正式，近乎声明）', e: 'De ningún modo aceptaremos una cláusula que nos obligue a renunciar al control editorial.', et: '我们绝不会接受迫使我们放弃编辑控制权的条款。' },
        { w: 'ni hablar', t: '免谈、不行（口语，干脆关闭商谈）', e: '—¿Podemos publicar el borrador sin revisar? —Ni hablar.', et: '「我们能不能不审就发布草稿？」「免谈。」' },
        { w: 'zanjar', t: '了结、打住（把争议或话题关上，不再讨论）', e: 'Zanjó la discusión con una frase seca y pasó al siguiente punto del orden del día.', et: '他用一句干硬的话打住了讨论，转到议程下一项。' },
        { w: 'sin paliativos', t: '不加缓和地、彻底地（多修饰否定判断或批评）', e: 'El informe describe el estado del edificio sin paliativos: no es seguro.', et: '报告毫不掩饰地描述了大楼的状况：不安全。' },
        { w: 'no vaya a ser que', t: '免得、以免（后接虚拟式；提醒中带警告）', e: 'Firmemos hoy mismo, no vaya a ser que cambien de opinión.', et: '我们今天就把字签了，免得他们改主意。' }
      ] }
    ] }
  ],
  dialogues: [
    {
      id: 'es-d1', level: 'A1', title: '公园里聊天气', scene: '公园长椅旁',
      setup: '你坐在公园里休息，旁边的老先生收起报纸，笑着跟你搭话。',
      lines: [
        { npc: '¡Buenas tardes! Qué día tan bonito, ¿verdad?', tr: '下午好！今天天气真好，对吧？' },
        { ask: '回应他，说今天天气确实很好。', me: [
          { t: 'Sí, hoy hace muy buen tiempo.', tr: '是啊，今天天气很好。', best: true },
          { t: 'Sí, hoy es muy buen tiempo.', tr: '是，今天是个很好的天气。' },
          { t: 'Sí, tengo muy buen tiempo hoy.', tr: '是，我今天有一个好天气。' }
        ] },
        { npc: '¿Y en tu ciudad hace calor en verano?', tr: '那你的城市夏天热吗？' },
        { ask: '说说你城市的夏天天气。', me: [
          { t: 'Sí, en verano hace mucho calor.', tr: '热，夏天非常热。', best: true },
          { t: 'Sí, mi ciudad hace calor verano.', tr: '热，我的城市热夏天。' },
          { t: 'Sí, mi ciudad está calor en verano.', tr: '热，我的城市在夏天处于热。' }
        ] },
        { npc: 'Aquí el verano es largo, pero la primavera es preciosa.', tr: '这里夏天很长，不过春天美极了。' },
        { say: 'A mí me gusta más el otoño, porque no hace ni calor ni frío.', tr: '我更喜欢秋天，因为不冷不热。', hint: '说出你更喜欢的季节，并说明原因' },
        { npc: '¡Buena elección! Pues que disfrutes la tarde.', tr: '好选择！那你好好享受这个下午吧。' }
      ]
    },
    {
      id: 'es-d2', level: 'A2', title: '看一套出租的房子', scene: '出租公寓客厅',
      setup: '中介胡安带你看一套市中心的一室一厅，这是你第一次实地看房。',
      lines: [
        { npc: 'Buenas, ¿usted es la persona que llamó por el piso?', tr: '您好，您是打电话咨询那套房子的吗？' },
        { ask: '确认身份并说明来看房。', me: [
          { t: 'Sí, soy yo. Vengo a ver el piso que está en alquiler.', tr: '是我，我来看那套出租的房子。', best: true },
          { t: 'Sí, yo llamar por teléfono para ver piso.', tr: '是，我打电话看房子。' },
          { t: 'Sí, quiero comprar el piso barato.', tr: '是，我想便宜买下这房子。' }
        ] },
        { npc: 'Pase, pase. Tiene un salón, una habitación y un balcón muy agradable.', tr: '请进请进。有一个客厅、一间卧室，还有个很不错的阳台。' },
        { ask: '问房租、押金各是多少。', me: [
          { t: '¿Cuánto es el alquiler y cuánto piden de fianza?', tr: '房租多少，押金要多少？', best: true },
          { t: '¿El alquiler cuánto dinero pagar necesito y fianza?', tr: '房租多少钱付需要和押金？' },
          { t: '¿Puedo pagar el piso con tarjeta cada día?', tr: '我可以每天刷卡付房款吗？' }
        ] },
        { npc: 'Seiscientos cincuenta al mes, con una fianza de un mes por adelantado.', tr: '每月六百五十，押金预付一个月。' },
        { ask: '问是否带家具、什么时候能搬进来。', me: [
          { t: '¿Está amueblado? ¿Para cuándo podría ser la mudanza?', tr: '带家具吗？我最早什么时候能搬进来？', best: true },
          { t: '¿El piso tiene muebles y yo mudo cuando quiero?', tr: '房子有家具和我什么时候想搬就搬？' },
          { t: '¿Los muebles del dueño son gratis para mí?', tr: '房东的家具是免费送我的吗？' }
        ] },
        { say: 'La verdad, el piso me convence mucho. ¿Podemos firmar el contrato esta semana?', tr: '说实话，我对这套房很满意。我们这周能签合同吗？', hint: '表达对房子的满意，并提议本周签合同' },
        { npc: 'Claro, el jueves por la mañana traigo el contrato y lo leemos juntos.', tr: '当然，周四上午我把合同带来，咱们一起过一遍。' }
      ]
    },
    {
      id: 'es-d3', level: 'B1', title: '社交网络与个人隐私', scene: '办公室茶水间',
      setup: '午休时，同事玛尔塔抱怨手机又给她推广告，你们聊起了社交网络怎么处理我们的个人数据。',
      lines: [
        { npc: 'No me lo explico: ayer hablé con una amiga de unos zapatos y hoy ya me salen anuncios de zapatos.', tr: '我真想不通：昨天我跟朋友聊了几句鞋子，今天就满屏都是鞋类广告。' },
        { ask: '表示理解她的担心，并说出手机在"偷听"的说法。', me: [
          { t: 'Es normal que te preocupe, hay quien dice que las aplicaciones escuchan nuestras conversaciones.', tr: '你会担心很正常，有人说这些应用会监听我们的谈话。', best: true },
          { t: 'Es normal que te preocupas, las aplicaciones escuchan tus conversaciones de ayer.', tr: '你担心是正常，应用在听你昨天说的话。' },
          { t: 'Tu preocupación es normal porque los anuncios tienen zapatos muy nuevos.', tr: '你担心很正常，因为广告里的鞋都很新。' }
        ] },
        { npc: 'Yo no creo que escuchen, pero sí que recogen muchísimos datos nuestros.', tr: '我觉得它们倒不一定偷听，但确实收集了我们大量的数据。' },
        { ask: '说自己因此决定少用社交网络，并解释原因。', me: [
          { t: 'Por eso he decidido usar menos las redes: no quiero que sepan tanto de mí.', tr: '所以我决定少用社交网络：我不想让他们掌握我那么多信息。', best: true },
          { t: 'Por eso decidí usar menos redes, no quiero que saben mucho sobre mí.', tr: '所以我决定了少用社交网络，我不想他们知道很多关于我。' },
          { t: 'Por eso decido menos redes sociales porque muchos datos sobre yo.', tr: '所以我决定更少社交网络因为很多数据关于我。' }
        ] },
        { npc: 'Buena idea. Yo intenté cerrar una cuenta antigua y me pidieron mil permisos.', tr: '好主意。我试着注销过一个旧账号，结果他们要了一大堆权限。' },
        { ask: '问她如果平台不给注销选项，她会不会向数据保护机构投诉。', me: [
          { t: '¿Y si no te dejaran cerrarla, escribirías a la agencia de protección de datos?', tr: '如果他们不让你注销，你会写信给数据保护机构吗？', best: true },
          { t: '¿Si no cierras la cuenta, escribiste a protección de datos mañana?', tr: '如果不关闭账户，你明天写了数据保护吗？' },
          { t: '¿Por qué no compras otra cuenta nueva y más bonita?', tr: '为什么不另外买个更新更好看的账号？' }
        ] },
        { say: 'Ojalá las leyes fueran más claras y nos protegieran mejor.', tr: '要是法律能更明确、更周全地保护我们就好了。', hint: '用虚拟式过去式表达愿望：法律更清晰、保护更到位' },
        { npc: 'Amén. Bueno, me vuelvo al trabajo antes de que se nos eche la hora encima.', tr: '阿门。好了，赶在点之前我得回去干活了。' }
      ]
    },
    {
      id: 'es-d4', level: 'A1', title: '在小餐馆点餐', scene: '街角小餐馆',
      setup: '晚上你和朋友走进一家家庭小餐馆，服务员迎上来招呼你们。',
      lines: [
        { npc: '¡Buenas noches! ¿Mesa para dos?', tr: '晚上好！两位吗？' },
        { ask: '确认是两个人，并问能不能坐在窗边。', me: [
          { t: 'Sí, para dos. ¿Podemos sentarnos junto a la ventana?', tr: '是，两位。我们可以坐在窗边吗？', best: true },
          { t: 'Sí, somos dos personas y querer ventana sentar.', tr: '是，我们是两个人，想要窗户坐。' },
          { t: 'Sí, dos mesas para una persona, por favor.', tr: '是，请给两张单人桌。' }
        ] },
        { npc: 'Claro, síganme. Aquí tienen la carta.', tr: '当然，跟我来。这是菜单。' },
        { ask: '问服务员今天推荐什么菜。', me: [
          { t: '¿Qué nos recomienda hoy?', tr: '您今天推荐我们吃什么？', best: true },
          { t: '¿Qué recomienda nos hoy la carta?', tr: '什么推荐我们今天菜单？' },
          { t: '¿La carta tiene recomendación gratis para mí?', tr: '菜单里有免费给我的推荐吗？' }
        ] },
        { npc: 'Hoy la paella está muy buena; la hacemos con marisco fresco.', tr: '今天的海鲜饭很不错，我们用的是新鲜海鲜。' },
        { say: 'Entonces una paella para dos y una botella de agua, por favor.', tr: '那就要一份两人份海鲜饭和一瓶水，谢谢。', hint: '点一份两人份的海鲜饭和一瓶水' },
        { npc: 'Perfecto. ¿Quieren algo de postre?', tr: '好的。要来点甜点吗？' },
        { ask: '说暂时不要甜点，并问剩下的能不能打包。', me: [
          { t: 'De momento no, gracias. Si sobra algo, ¿podría ponérnoslo para llevar?', tr: '暂时不用，谢谢。如果剩下一些，能帮我们打包吗？', best: true },
          { t: 'De momento no, pero sobrar algo para llevar en una caja.', tr: '暂时不，但是剩下一些打包在盒子里。' },
          { t: 'No postre, y quiero comer lo que sobra aquí mañana.', tr: '不甜点，我想明天在这里吃剩下的。' }
        ] },
        { npc: 'Por supuesto. Les traigo la cuenta cuando quieran.', tr: '当然可以。你们需要时我就把账单拿来。' },
        { say: 'Muchas gracias, todo está buenísimo.', tr: '非常感谢，一切都很好吃。', hint: '道谢并夸赞菜很好吃' }
      ]
    },
    {
      id: 'es-d5', level: 'A1', title: '在服装店买东西', scene: '商场服装店',
      setup: '你想买一件白色衬衫参加朋友的聚会，店员走过来询问。',
      lines: [
        { npc: 'Buenas tardes, ¿le ayudo en algo?', tr: '下午好，需要我帮忙吗？' },
        { ask: '说想找一件白色衬衫，M码。', me: [
          { t: 'Sí, busco una camisa blanca en talla M.', tr: '是的，我想找一件M码的白衬衫。', best: true },
          { t: 'Sí, yo buscar camisa blanca de la talla grande M porque blanco.', tr: '是，我找白衬衫大码M因为白色。' },
          { t: 'Sí, quiero vender una camisa blanca talla M.', tr: '是，我想卖一件M码白衬衫。' }
        ] },
        { npc: 'Tenemos esta y también una de algodón, más fresca.', tr: '我们有这件，还有一件棉的，更透气。' },
        { ask: '问能不能试穿。', me: [
          { t: '¿Puedo probármela?', tr: '我可以试穿一下吗？', best: true },
          { t: '¿Puedo probar me la camisa?', tr: '我可以试我它衬衫？' },
          { t: '¿Puedo llevar la camisa a casa y volver mañana?', tr: '我能把衬衫带回家明天再回来吗？' }
        ] },
        { npc: 'Claro, el probador está al fondo, a la derecha.', tr: '当然，试衣间在最里面，右手边。' },
        { ask: '试完说有点大，问有没有小一号。', me: [
          { t: 'Me queda un poco grande. ¿Tiene una talla menos?', tr: '我穿有点大。有小一号的吗？', best: true },
          { t: 'Me queda grande un poco, ¿tiene talla pequeño?', tr: '我穿大一点，有小码吗？' },
          { t: 'Es grande, quiero la misma talla otra vez.', tr: '大了，我还想要同一个尺码。' }
        ] },
        { npc: 'Aquí tiene la S. Es la última que queda.', tr: '这是S码，最后一件了。' },
        { say: 'Me la llevo. ¿Puedo pagar con tarjeta?', tr: '这件我要了。可以刷卡吗？', hint: '决定买下，并问能否刷卡' },
        { npc: 'Sí, claro. Pague en el mostrador del fondo.', tr: '当然可以。请到里面的柜台付款。' }
      ]
    },
    {
      id: 'es-d6', level: 'A2', title: '在诊所看医生', scene: '社区诊所诊室',
      setup: '你发烧咳嗽三天不见好，来到社区诊所，医生请你坐下。',
      lines: [
        { npc: 'Buenos días. Cuénteme, ¿qué le pasa?', tr: '早上好。跟我说说，您哪里不舒服？' },
        { ask: '说已经发烧三天，还咳嗽、喉咙疼。', me: [
          { t: 'Llevo tres días con fiebre, tos y dolor de garganta.', tr: '我发烧、咳嗽、喉咙痛已经三天了。', best: true },
          { t: 'Llevo tres días con fiebre y tos y garganta duele mucho porque.', tr: '我三天发烧和咳嗽和喉咙很疼因为。' },
          { t: 'Tengo tres días de fiebre y mi garganta está rota.', tr: '我发烧三天，我的喉咙坏了。' }
        ] },
        { npc: '¿Ha tomado algo para la fiebre?', tr: '您吃过退烧药吗？' },
        { ask: '说吃了退烧药，但没什么好转。', me: [
          { t: 'Sí, he tomado un antitérmico, pero no he mejorado.', tr: '吃了，我服了退烧药，但没见好转。', best: true },
          { t: 'Sí, tomo antitérmico pero no mejorar nada de nada.', tr: '是，我吃退烧药但一点不好转。' },
          { t: 'No, nunca tomo nada porque me gusta tener fiebre.', tr: '不，我从不吃药，因为我喜欢发烧。' }
        ] },
        { npc: 'Vamos a tomarle la temperatura. Abra la boca, por favor.', tr: '我们量一下体温。请张开嘴。' },
        { npc: 'Tiene una infección de garganta. Le voy a recetar un antibiótico.', tr: '您喉咙有感染，我给您开点抗生素。' },
        { ask: '问药怎么吃，以及是否需要休息。', me: [
          { t: '¿Cómo tengo que tomar el antibiótico? ¿Debo guardar reposo?', tr: '抗生素要怎么吃？我需要休息吗？', best: true },
          { t: '¿Cómo el antibiótico tomar y reposo cuántos días?', tr: '怎么抗生素吃和休息多少天？' },
          { t: '¿Puedo tomar el antibiótico con café y trabajar toda la noche?', tr: '我能用咖啡送抗生素、然后通宵工作吗？' }
        ] },
        { npc: 'Una pastilla cada ocho horas durante una semana. Y descanse dos días.', tr: '每八小时一片，吃一周。再休息两天。' },
        { say: 'Entendido. ¿Tengo que volver para que me revise?', tr: '明白了。我需要回来复查吗？', hint: '确认是否需要复诊' },
        { npc: 'Si en tres días no mejora, pida otra cita. Que se mejore.', tr: '如果三天后还不见好，就再约一次。祝您早日康复。' }
      ]
    },
    {
      id: 'es-d7', level: 'B1', title: '在会议上提出预算问题', scene: '公司会议室',
      setup: '部门会议快结束时，你发现预算数据可能已经过时，想提出自己的看法。',
      lines: [
        { npc: 'Antes de cerrar el orden del día, ¿alguien quiere añadir algo?', tr: '在结束议程之前，有人想补充什么吗？' },
        { ask: '请求发言，说想就预算补充一点。', me: [
          { t: 'Sí, si me permiten, me gustaría añadir un punto sobre el presupuesto.', tr: '是的，如果允许的话，我想就预算补充一点。', best: true },
          { t: 'Sí, yo querer hablar presupuesto ahora mismo sin permiso.', tr: '是，我想说预算现在马上不许。' },
          { t: 'Sí, quiero añadir que el presupuesto es un documento muy largo.', tr: '是，我想补充预算是一份很长的文件。' }
        ] },
        { npc: 'Adelante, tiene la palabra.', tr: '请讲，您请发言。' },
        { say: 'Creo que conviene revisar las cifras antes de aprobar el presupuesto.', tr: '我认为在批准预算之前，最好先核对一下数据。', hint: '用 conviene 表达“最好先核对数据”' },
        { npc: '¿Por qué lo dice? Los números los revisó el equipo de María.', tr: '为什么这么说？数据是玛丽亚的团队核对过的。' },
        { ask: '说明担心数据已有一个月，建议推迟一周决定。', me: [
          { t: 'Me preocupa que los datos tengan ya un mes; preferiría que aplazáramos la decisión una semana.', tr: '我担心这些数据已经一个月了；我更希望我们把决定推迟一周。', best: true },
          { t: 'Me preocupa que los datos tienen un mes, y prefiero aplazar sin hablar con nadie.', tr: '我担心数据有一个月，而且我更喜欢不跟任何人说就推迟。' },
          { t: 'Los datos son viejos y por eso no me gusta el presupuesto de María.', tr: '数据旧了，所以我不喜欢玛丽亚的预算。' }
        ] },
        { npc: 'Es un argumento razonable. ¿Propone que hagamos una revisión rápida?', tr: '这个理由合理。您建议我们快速复核一遍吗？' },
        { ask: '同意，并说会后发一份对比表。', me: [
          { t: 'Exacto. Si les parece bien, esta tarde les envío una tabla comparativa.', tr: '正是。如果大家觉得可以，我今天下午发一份对比表。', best: true },
          { t: 'Sí, yo enviar tabla esta tarde porque revisión rápido es buena.', tr: '是，我发表格今天下午因为快速复核是好的。' },
          { t: 'No hace falta revisar nada, solo quería hablar un poco.', tr: '不用复核什么，我只是想随便说两句。' }
        ] },
        { npc: 'Perfecto, así lo decidimos con más información.', tr: '很好，这样我们就能掌握更多信息再决定。' },
        { say: 'Gracias. Intentaré tener la tabla lista antes de las cinco.', tr: '谢谢。我会争取在五点前把表做好。', hint: '承诺五点前完成对比表' }
      ]
    },
    {
      id: 'es-d8', level: 'B2', title: '一场最终轮面试', scene: '公司面试会议室',
      setup: '你到一家跨国公司参加最后一场面试，人事主管埃莱娜已仔细看过你的简历，正等你落座。',
      lines: [
        { npc: 'Buenas tardes. Pase y siéntese. He revisado su currículum con mucho detenimiento.', tr: '下午好。请进请坐。我仔细看过您的简历了。' },
        { ask: '道谢，并说自己很高兴能获得当面交流的机会。', me: [
          { t: 'Muchas gracias. Me alegro de que me hayan concedido esta entrevista.', tr: '非常感谢。我很高兴你们给了我这次面试机会。', best: true },
          { t: 'Muchas gracias, me alegro que me dan esta entrevista hoy.', tr: '非常感谢，我高兴你们今天给我这面试。' },
          { t: 'Gracias, yo estoy feliz para venir su empresa bonita.', tr: '谢谢，我来你们漂亮的公司很幸福。' }
        ] },
        { npc: 'En la primera ronda le preguntaron si tenía experiencia internacional. Ahora quisiera saber por qué dejó su último trabajo.', tr: '第一轮他们问过您是否有国际经验。现在我想了解您为什么离开上一份工作。' },
        { ask: '转述上司当时的话：公司将重组，所以你想找个更稳定的环境。', me: [
          { t: 'Mi jefe me comunicó que la empresa se reestructuraría, por ende preferí buscar un entorno más estable.', tr: '上司通知我公司将进行重组，因此我更想找一个更稳定的环境。', best: true },
          { t: 'Mi jefe comunicó que la empresa se reestructurará, por ende yo buscar otro trabajo estable.', tr: '我上司说公司将重组，因此我找别的稳定工作。' },
          { t: 'Mi jefe dice la empresa cambia y yo quiero ambiente más bueno rápido.', tr: '我上司说公司变了，我想要更好更快的环境。' }
        ] },
        { npc: 'Comprendo. ¿Y qué habría hecho si le hubieran ofrecido un ascenso en su empresa anterior?', tr: '我理解。那如果之前的公司当时给您升职，您会怎么做？' },
        { ask: '回答：如果当时升了职，也许就不会转换职业方向了。', me: [
          { t: 'Si me hubieran ascendido, quizá no habría cambiado de rumbo profesional.', tr: '如果当时他们给我升职，我也许就不会转换职业方向了。', best: true },
          { t: 'Si me habrían ascendido, quizá no habría cambiado de rumbo profesional.', tr: '如果他们升了我职，我也许就不会改变职业方向。' },
          { t: 'Si me ascendieran, quizá no cambio de rumbo profesional ayer.', tr: '如果他们升我的职，我昨天也许不改变职业方向。' }
        ] },
        { npc: 'Respuestas sólidas. No obstante, este puesto exige viajar al extranjero unas semanas al mes.', tr: '回答很扎实。不过，这个岗位需要每月有几周出差国外。' },
        { ask: '表示尽管要经常出差，家人也全力支持。', me: [
          { t: 'A pesar de que implicaría viajar con frecuencia, mi familia apoya por completo mi candidatura.', tr: '尽管这意味着要经常出差，我的家人也完全支持我的应聘。', best: true },
          { t: 'A pesar de que implica viajar mucho, mi familia apoyan mi candidatura todos.', tr: '尽管要常出差，我的家人都支持我的应聘。' },
          { t: 'A pesar de viajar mucho, mi familia también le gusta viajar mucho.', tr: '尽管出差多，我的家人也很喜欢出差。' }
        ] },
        { say: 'De quedar seleccionado, me incorporaría de inmediato y me esforzaría al máximo.', tr: '如果入选，我会立即入职并全力以赴。', hint: '用条件式总结表态：若被录用，会立即入职并全力以赴' },
        { npc: 'Muy bien. Antes del viernes le llamaremos para comunicarle la decisión. Mucha suerte.', tr: '很好。周五之前我们会致电告知结果。祝您好运。' }
      ]
    },
    {
      id: 'es-d9', level: 'A1', title: '在朋友家做客', scene: '朋友卢卡斯的家里',
      setup: '你带了一盒点心去朋友卢卡斯家做客，他刚打开门迎接你。',
      lines: [
        { npc: '¡Hola! ¡Qué alegría verte! Pasa, pasa.', tr: '你好！见到你太高兴了！快进来。' },
        { ask: '打招呼，并把带来的点心递给他。', me: [
          { t: '¡Hola, Lucas! Te traigo unos dulces para tomar con el café.', tr: '你好，卢卡斯！我带了些点心，配咖啡吃。', best: true },
          { t: '¡Hola, Lucas! Yo traer dulces para comer el café ahora.', tr: '你好，卢卡斯！我带来点心吃咖啡现在。' },
          { t: '¡Hola, Lucas! Estos dulces son para vender en tu casa.', tr: '你好，卢卡斯！这些点心是在你家卖的。' }
        ] },
        { npc: '¡Qué detallista! ¿Quieres beber algo? Tengo agua y zumo de naranja.', tr: '你太贴心了！想喝点什么吗？我有水和橙汁。' },
        { ask: '要一杯橙汁并道谢。', me: [
          { t: 'Un zumo de naranja, por favor. Gracias.', tr: '请给我一杯橙汁，谢谢。', best: true },
          { t: 'Yo bebe zumo naranja ahora, gracias tú.', tr: '我喝橙汁现在，谢谢你。' },
          { t: 'El zumo es mío, no quiero agua fría hoy.', tr: '橙汁是我的，我今天不要冷水。' }
        ] },
        { npc: '¿Y qué tal tu familia? ¿Todos bien?', tr: '你家里人怎么样？都好吗？' },
        { ask: '说家里人都好，父母身体很健康。', me: [
          { t: 'Están muy bien. Mis padres están muy sanos y contentos.', tr: '都很好。我父母身体很健康，也很开心。', best: true },
          { t: 'Mi familia está bien. Mis padres son sanos y muy contentos feliz.', tr: '我家很好。我父母是健康和很开心幸福。' },
          { t: 'Mis padres tienen bien y contento mucho días.', tr: '我父母有很好和开心很多天。' }
        ] },
        { say: '¡Tu casa es muy bonita! Me gusta mucho.', tr: '你家真漂亮！我非常喜欢。', hint: '夸一夸朋友的家里漂亮又温馨' },
        { npc: 'Gracias. Siéntete como en casa, la cena está casi lista.', tr: '谢谢。别拘束，晚饭快好了。' }
      ]
    },
    {
      id: 'es-d10', level: 'A2', title: '在火车站买票', scene: '火车站售票大厅',
      setup: '你要去塞维利亚看朋友，正在售票窗口排队买票，轮到你和售票员说话了。',
      lines: [
        { npc: 'Buenas tardes, ¿qué billete necesita usted?', tr: '下午好，您需要什么票？' },
        { ask: '说要一张明天去塞维利亚的票。', me: [
          { t: 'Quiero un billete para Sevilla para mañana, por favor.', tr: '我想买一张明天去塞维利亚的票。', best: true },
          { t: 'Yo querer billete ir Sevilla mañana comprar ahora.', tr: '我想票去塞维利亚明天现在买。' },
          { t: 'Un billete de mí para Sevilla hoy, no mañana es.', tr: '一张我的票去塞维利亚今天，不是明天。' }
        ] },
        { npc: '¿De ida y vuelta o solo ida? Mañana hay un tren a las 8:30 y otro a las 14:00.', tr: '要往返票还是单程票？明天8:30有一班，14:00还有一班。' },
        { ask: '问8:30那班车的往返票多少钱。', me: [
          { t: '¿Cuánto cuesta el de ida y vuelta para el tren de las 8:30?', tr: '8:30那班车的往返票多少钱？', best: true },
          { t: '¿Cuánto dinero es ida vuelta tren 8:30 comprar yo?', tr: '多少钱是往返火车8:30买我？' },
          { t: '¿El billete de las 8:30 es gratis si yo vuelvo solo?', tr: '如果我一个人回来，8:30的票是免费的吗？' }
        ] },
        { npc: 'Cincuenta y dos euros en clase turista. ¿Prefiere asiento de ventana o de pasillo?', tr: '普通舱52欧元。您想要靠窗还是靠过道的座位？' },
        { ask: '选靠窗，并问旅途要多久。', me: [
          { t: 'De ventana, por favor. ¿Cuánto dura el viaje?', tr: '靠窗的，谢谢。旅途要多长时间？', best: true },
          { t: 'Yo ventana sentar, ¿el viaje cuánto hora dura es?', tr: '我窗户坐，旅途多少小时长是？' },
          { t: 'Ventana gratis. ¿El viaje es largo tiempo o corto tiempo?', tr: '窗户免费。旅途是长时间还是短时间？' }
        ] },
        { npc: 'Unas dos horas y media. El tren sale del andén cuatro.', tr: '大约两个半小时。列车从四号站台发车。' },
        { ask: '问列车是直达还是需要换乘。', me: [
          { t: '¿El tren va directo o tengo que hacer transbordo?', tr: '列车是直达还是需要换乘？', best: true },
          { t: '¿El tren directo va o yo cambiar tren en medio calle?', tr: '火车直达去还是我换火车在半路街？' },
          { t: '¿El tren es directo y también necesito comprar dos billetes más?', tr: '火车是直达并且我还需要再买两张票吗？' }
        ] },
        { say: 'Perfecto, me lo llevo. ¿Puedo pagar con tarjeta?', tr: '好的，就要这张。可以刷卡吗？', hint: '确认买下这张票，并询问能否刷卡付款' },
        { npc: 'Sí, claro. Aquí tiene: salida a las 8:30, andén cuatro. Buen viaje.', tr: '当然可以。给您：8:30发车，四号站台。祝旅途愉快。' }
      ]
    },
    {
      id: 'es-d11', level: 'B1', title: '报名社区志愿活动', scene: '社区中心活动室',
      setup: '社区中心招募周末志愿者，负责人卡门正在向你介绍项目情况，你考虑报名参加。',
      lines: [
        { npc: '¡Gracias por venir! El proyecto consiste en repartir comida a familias del barrio los sábados.', tr: '感谢你来！这个项目是每周六给街区的家庭分发食物。' },
        { ask: '表示很感兴趣，问志愿者的工作具体包括什么。', me: [
          { t: 'Me interesa mucho. ¿En qué consistiría exactamente el trabajo de los voluntarios?', tr: '我很感兴趣。志愿者的工作具体包括哪些？', best: true },
          { t: 'Estoy interesado. ¿El voluntario hace qué exactamente consistir?', tr: '我有兴趣。志愿者做的是什么具体包括？' },
          { t: 'Me interesa mucho. ¿El trabajo consiste en pagar a las familias?', tr: '我很感兴趣。这项工作是给各家付钱吗？' }
        ] },
        { npc: 'Clasificamos los alimentos, preparamos las cajas y las entregamos de puerta en puerta.', tr: '我们给食物分类、装箱，然后挨家挨户送上门。' },
        { ask: '问是否需要有经验，还是会提前组织培训。', me: [
          { t: '¿Hace falta tener experiencia, o nos darían una formación previa?', tr: '需要有经验吗，还是会提前给我们培训？', best: true },
          { t: '¿Necesito experiencia o formación dan nosotros antes mañana?', tr: '我需要经验还是培训给我们之前明天？' },
          { t: '¿Es obligatorio comprar la formación antes de trabajar gratis?', tr: '免费干活之前必须买培训吗？' }
        ] },
        { npc: 'No hace falta experiencia. El sábado a las nueve haremos una sesión introductoria de una hora.', tr: '不需要经验。周六九点我们做一小时的入职介绍。' },
        { ask: '答应一定到场，并问朋友能否一起来当志愿者。', me: [
          { t: 'Ahí estaré sin falta. ¿Podría venir también un amigo mío como voluntario?', tr: '我一定到场。我的朋友也能一起来做志愿者吗？', best: true },
          { t: 'Yo estar aquí sábado seguro, ¿mi amigo puede venir también gratis?', tr: '我周六肯定在这里，我朋友也能免费来吗？' },
          { t: 'Sí, voy a venir quizá, y mi amigo viene si quiere libre.', tr: '是，我也许来，我朋友想来就来吧。' }
        ] },
        { npc: 'Por supuesto, cuanta más ayuda, mejor. Ahora bien, pedimos un compromiso de al menos un mes.', tr: '当然可以，帮忙的人越多越好。不过我们要求至少坚持一个月。' },
        { say: 'Entiendo. A pesar de que entre semana estoy muy ocupado, los sábados estoy libre.', tr: '我明白。虽然工作日很忙，但我周六有空。', hint: '用 a pesar de que 的句式表达：虽然工作日忙，但周六有空' },
        { npc: 'Perfecto, entonces os apunto a los dos. Nos vemos el sábado a las nueve en punto.', tr: '太好了，那我把你们俩都记上。周六九点整见。' }
      ]
    },
    {
      id: 'es-d12', level: 'C1', title: '大学研讨课辩论', scene: '大学研讨教室，教授主持关于"艺术与商业化"的辩论',
      setup: '你是研讨课上的学生，正在参与一场关于"艺术是否应该被商业化"的课堂辩论。',
      lines: [
        { npc: 'Profesora: Señores, hoy debatiremos si la comercialización del arte lo degrada o lo democratiza. Usted empiece.', tr: '教授：诸位，今天我们辩论艺术商业化是在贬低它还是在普及它。请你先讲。' },
        { ask: '你先表态，说商业化有积极面但也有隐忧。', me: [
          { t: 'Creo que la comercialización es inevitable, aunque conlleva riesgos: por un lado hace accesible el arte a públicos más amplios; por otro, puede distorsionar su función social.', tr: '我认为商业化不可避免，但也有风险：一方面它让艺术面向更广泛的公众；另一方面可能扭曲它的社会功能。', best: true },
          { t: 'La comercialización es buena o mala, no sé. Me gusta el arte, pero también me gusta el dinero.', tr: '商业化好不好我不知道。我喜欢艺术，也喜欢钱。' },
          { t: 'Yo digo que el arte no debe costar nada, todos deben pintar gratis todos los días.', tr: '我说艺术不该花钱，所有人每天都该免费画画。' }
        ] },
        { npc: 'Profesora: Interesante punto de partida. Oponente, ¿qué argumentos tiene en contra?', tr: '教授：有意思的出发点。反方，你有什么反对论点？' },
        { ask: '对方（另一个学生）说商业化毁掉了真正有价值的作品，你要反驳并让步说他有道理但也并非绝对。', me: [
          { t: 'Discrepo parcialmente: es cierto que el mercado puede premiar lo superficial, pero hay artistas que mantienen su integridad incluso dentro del sistema comercial.', tr: '我部分不同意：市场确实可能追捧肤浅之作，但也有艺术家在商业体系内保持了完整性。', best: true },
          { t: 'No, tú estás equivocado totalmente, yo tengo razón siempre.', tr: '不，你完全错了，我永远对。' },
          { t: '¿Integridad? ¿Qué es eso de integridad? ¿Se come?', tr: '完整性？那是什么玩意儿？能吃吗？' }
        ] },
        { npc: 'Profesora: Bien, matices, precisamente lo que buscamos. ¿Alguna evidencia concreta?', tr: '教授：好，正是我们要找的细微差别。有没有具体的证据？' },
        { ask: '举一个例子，说某个画廊既卖商业画也扶持年轻无名艺术家。', me: [
          { t: 'Puedo citar el caso de la galería X: su espacio comercial financia las exposiciones de jóvenes artistas sin nombre. Es un modelo híbrido que funciona.', tr: '我可以举 X 画廊的例子：它的商业空间资助了年轻无名艺术家的展览。这是一种行之有效的混合模式。', best: true },
          { t: 'Las galerías son todas malas y caras, nada más.', tr: '画廊都又坏又贵，没别的。' },
          { t: 'Mi amigo vende cuadros en la calle, eso es mejor que cualquier galería.', tr: '我朋友在街上卖画，那比任何画廊都好。' }
        ] },
        { say: 'En resumen, no es cuestión de elegir entre arte puro y arte vendible, sino de diseñar marcos que protejan la experimentación.', tr: '总之，问题不在于在纯粹艺术和可售卖艺术之间二选一，而在于设计能保护实验性的框架。', hint: '用 en resumen 总结，再用 no es cuestión de... sino de... 的高级句式收束观点' },
        { npc: 'Profesora: Excelente cierre. Han demostrado que el debate no es ganar o perder, sino refinar el propio pensamiento.', tr: '教授：精彩的收尾。你们已经证明，辩论不是要分出输赢，而是要完善自己的思考。' }
      ]
    },
    {
      id: 'es-d13', level: 'B2', title: '商务投诉', scene: '你在一家在线商店的客服部打电话',
      setup: '两周前你在这家网店订了一台咖啡机，收到后发现有故障，而且卖家迟迟不回复你的邮件。你决定打电话投诉。',
      lines: [
        { npc: 'Buenas, le atiende Ana del servicio al cliente. ¿En qué puedo ayudarle?', tr: '您好，我是客服部的安娜。请问有什么可以帮您？' },
        { ask: '你投诉说两周前订的咖啡机送来了但有故障，而且发了三封邮件都没人回。', me: [
          { t: 'Llamo para presentar una reclamación: recibí la cafetera que pedí hace dos semanas, pero llegó con fallos, y además he enviado tres correos sin obtener respuesta alguna.', tr: '我打电话来投诉：我两周前订的咖啡机到了，但有故障，而且我发了三封邮件都没得到任何回复。', best: true },
          { t: 'Hola, yo quiero que mi dinero. La máquina es mala. Gracias.', tr: '你好，我要钱。机器不好。谢谢。' },
          { t: 'Oye, vuestra tienda es una basura, nadie me contesta nunca.', tr: '喂，你们店太烂了，永远没人回我。' }
        ] },
        { npc: 'Siento mucho las molestias. Dígame su número de pedido por favor.', tr: '非常抱歉给您带来不便。请告诉我您的订单号。' },
        { ask: '报出订单号，然后说你希望尽快退款，因为已经等了两周以上。', me: [
          { t: 'Claro, es el 789452. Lo que pido es un reembolso inmediato, ya que llevo más de quince días esperando una solución.', tr: '好的，是 789452。我要求立即退款，因为我已经等了超过十五天的解决办法。', best: true },
          { t: 'El número es 789452. Yo quiero mi dinero ya, ahora mismo, ¡corred!', tr: '号是 789452。我现在就要钱，快去！' },
          { t: 'No me acuerdo del número, pero quiero que vengáis a mi casa a recoger la cafetera rota.', tr: '我不记得号了，但要你们上门来取坏咖啡机。' }
        ] },
        { npc: 'Entiendo. Verá, el reembolso tarda entre tres y cinco días hábiles. ¿Le parece bien esa cantidad de tiempo?', tr: '我理解。您看，退款需要三到五个工作日。这个时间您觉得可以吗？' },
        { ask: '说可以，但强调你希望他们改进回复邮件的速度，不然下次不会再买。', me: [
          { t: 'Me parece aceptable, pero insisto en que deberían mejorar la velocidad de respuesta a los correos; si no, dudo que vuelva a comprar con ustedes.', tr: '可以接受，但我要强调你们应该提高邮件回复速度，否则我怀疑不会再在你们这里买了。', best: true },
          { t: 'Vale, pero ¡apresuraos que yo necesito el dinero para mañana!', tr: '行，但快点啊，我明天就要用钱！' },
          { t: 'Bueno, da igual, total siempre pasa lo mismo.', tr: '算了，反正每次都这样。' }
        ] },
        { say: 'Gracias por su gestión. Quedaré a la espera.', tr: '谢谢您的处理。我等消息。', hint: '用感谢收尾，保持礼貌同时表明你将等待进展' },
        { npc: 'Muchas gracias por su paciencia. Recibirá el correo de confirmación en unos minutos. Que tenga un buen día.', tr: '非常感谢您的耐心。您几分钟后会收到确认邮件。祝您愉快。' }
      ]
    },
    {
      id: 'es-d14', level: 'A1', title: '在邮局寄信', scene: '马德里市中心的邮局柜台',
      setup: '你在西班牙旅行，想把一封明信片寄回中国。你正在邮局柜台前跟工作人员说话。',
      lines: [
        { npc: 'Buenas, ¿qué desea?', tr: '您好，请问要什么？' },
        { ask: '你说想寄这张明信片到中国。', me: [
          { t: 'Quiero enviar esta postal a China, por favor.', tr: '我想把这张明信片寄到中国。', best: true },
          { t: 'Tengo una postal aquí. China.', tr: '我这里有张明信片。中国。' },
          { t: 'Hola, yo soy de China, quiero volver a casa.', tr: '你好，我来自中国，我想回家。' }
        ] },
        { npc: 'Muy bien. Ponga un sello de dos euros cincuenta, por favor.', tr: '好的。请贴一张两欧元五十分的邮票。' },
        { ask: '说好的，然后把钱递给工作人员，并问应该把明信片投到哪个邮筒。', me: [
          { t: 'Está bien. Aquí tiene el dinero. ¿En qué buzón debo poner la postal?', tr: '好的。钱给您。我该把明信片投到哪个邮筒？', best: true },
          { t: 'Sí. ¿Ahora qué hago?', tr: '好的。现在我做什么？' },
          { t: 'No tengo dinero, ¿gratis?', tr: '我没钱，免费吗？' }
        ] },
        { npc: 'Ponga este sello en la postal y échela en el buzón amarillo de la entrada. Llegará en unos diez días aproximadamente.', tr: '请把这张邮票贴在明信片上，再投进门口的黄色邮筒。大约十天能到。' },
        { say: 'Muchas gracias, adiós.', tr: '非常感谢，再见。', hint: '礼貌道别' },
        { npc: 'De nada, ¡buen viaje!', tr: '不客气，旅途愉快！' }
      ]
    },
    {
      id: 'es-d15', level: 'A2', title: '带猫去兽医', scene: '兽医诊所候诊室',
      setup: '你家的猫今天不想吃东西，你担心它生病了，带它去看兽医。现在你正在跟预约台的护士说话。',
      lines: [
        { npc: 'Hola, ¿tiene cita?', tr: '你好，有预约吗？' },
        { ask: '你说没有预约，但猫今天不吃东西，很担心。', me: [
          { t: 'No tengo cita, pero mi gato no quiere comer hoy y estoy muy preocupado.', tr: '我没预约，但我的猫今天不吃东西，我很担心。', best: true },
          { t: 'Mi gato come. No hay cita.', tr: '我的猫吃。没有预约。' },
          { t: 'Hola, quiero un café, por favor.', tr: '你好，请来一杯咖啡。' }
        ] },
        { npc: 'Claro, pase por aquí y póngase cómodo. El veterinario le atenderá en cinco minutos.', tr: '好的，请过来坐，兽医五分钟后接待您。' },
        { ask: '说谢谢，然后问进去之前要不要填什么表格。', me: [
          { t: 'Muchas gracias. ¿Tengo que rellenar algún formulario antes de entrar?', tr: '非常感谢。进去之前要填什么表吗？', best: true },
          { t: 'Sí, gracias. ¿Mi gato puede hablar con el doctor?', tr: '好的，谢谢。我的猫能跟医生说话吗？' },
          { t: '¿Formulario? ¿Qué es eso?', tr: '表格？那是什么？' }
        ] },
        { npc: 'Sí, este formulario, por favor. Ponga el nombre del gato y sus síntomas.', tr: '是的，请填这张表。写上猫的名字和症状。' },
        { ask: '填完表交回去，然后说猫的名字叫 Pelusa，大概两岁。', me: [
          { t: 'Aquí lo tiene. Mi gato se llama Pelusa y tiene unos dos años.', tr: '给您。我的猫叫 Pelusa，大概两岁。', best: true },
          { t: 'Mi gato es pequeño. Sí.', tr: '我的猫小。对。' },
          { t: 'No sé la edad, no lo recuerdo.', tr: '我不知道年龄，记不清了。' }
        ] },
        { say: 'Creo que está un poco triste, pero espero que no sea nada grave.', tr: '我觉得它有点没精神，不过希望不是什么严重的事。', hint: '表达担忧但又不想太悲观' },
        { npc: 'No se preocupe, el veterinario lo revisará bien. Seguro que no es nada serio.', tr: '别担心，兽医会好好检查的。肯定不是什么大问题。' }
      ]
    },
    {
      id: 'es-d16', level: 'C2', title: '听懂客户的委婉与玩笑', scene: '设计项目的线上复盘会',
      setup: '你是设计项目负责人。西班牙客户喜欢新方案，但预算有所收紧，正在试探能否缩小执行范围。注意对方的保留和幽默。',
      lines: [
        { npc: 'La propuesta nos gusta, pero con el presupuesto actual lo tenemos complicado.', tr: '我们很喜欢这份提案，不过按目前的预算，我们这边有点难办。' },
        { ask: '委婉承认预算限制，并提出先缩小执行范围。', me: [
          { t: 'Comprendo vuestra postura. Podríamos empezar con una versión más reducida y ampliarla más adelante.', tr: '我理解你们的顾虑。我们可以先做一个精简版，之后再扩大范围。', best: true },
          { t: 'Sí, la propuesta es demasiado complicada; la escribiré con frases más cortas.', tr: '是的，提案太复杂了，我会把句子写短一点。' },
          { t: 'Entonces avisadme cuando tengáis dinero de verdad.', tr: '那等你们真有钱了再告诉我吧。' }
        ] },
        { npc: 'Me parece razonable. Vuestra última propuesta sí que era de película: ¡hasta incluía un desfile!', tr: '我觉得很合理。你们上次的提案可真像拍电影：居然还安排了游行！' },
        { ask: '顺着玩笑回应，同时确认这次会控制成本。', me: [
          { t: 'Esta vez dejaremos el desfile para la secuela y cuidaremos el presupuesto.', tr: '这次我们把游行留给“续集”，并会管好预算。', best: true },
          { t: 'No fue una película; solo fue una presentación de veinte diapositivas.', tr: '那不是电影，只是一份二十页的演示文稿。' },
          { t: 'Si queríais algo barato, no deberíais habernos contratado.', tr: '如果你们想要便宜方案，当初就不该找我们。' }
        ] },
        { npc: 'Trato hecho. Enviadnos el nuevo alcance y lo estudiaremos con dirección.', tr: '就这么说定了。把新的执行范围发给我们，我们会和管理层研究。' },
        { say: 'Perfecto. Os lo enviaré hoy; si no es molestia, confirmadme el plazo cuando lo tengáis claro.', tr: '好的，我今天发给你们。等你们确定时间安排后，如不麻烦，请告诉我一声。', hint: '答应今天发送，并用 vosotros 礼貌确认后续时间' },
        { npc: 'Perfecto, así da gusto trabajar. Quedamos a la espera, entonces.', tr: '太好了，这样合作真愉快。那我们就等你的文件。' }
      ]
    },
    {
      id: 'es-d17', level: 'C1', title: 'La calefacción no funciona', scene: '你在家里，用手机给物业公司打电话',
      setup: '供暖已经停了三天，你昨天留过言却没人回复。今天你再次打给物业，接电话的是管理处的工作人员。',
      lines: [
        { npc: 'Viviendas Ruiz, buenos días. ¿En qué puedo ayudarle?', tr: '鲁伊斯房产，早上好。请问有什么可以帮您？' },
        { ask: '说明暖气已停三天、昨天留言没人回，并说明温控器开着但暖气片是凉的。', me: [
          { t: 'Buenos días. Llamo porque la calefacción lleva tres días sin funcionar y ayer ya dejé un aviso sin que nadie me devolviera la llamada. El termostato está en marcha, pero los radiadores siguen fríos.', tr: '早上好。我打电话是因为暖气已经三天不工作了，昨天我留了言，却没人给我回电话。温控器是开着的，但暖气片一直是凉的。', best: true },
          { t: 'Buenos días. La calefacción lleva tres días sin funcionar porque el termostato está en marcha y los radiadores están fríos.', tr: '早上好。暖气三天不工作，因为温控器开着、暖气片是凉的。' },
          { t: 'Buenos días. Esto es una vergüenza: pagamos todos los meses y aquí no trabaja nadie.', tr: '早上好。这太不像话了：我们月月交钱，这里却没人干活。' }
        ] },
        { npc: 'Disculpe la demora. ¿Sabe si en el resto del edificio ocurre lo mismo? Si el termostato funciona y los radiadores están fríos, puede ser la bomba de la comunidad. Podríamos enviarle a alguien el jueves, aunque hasta entonces seguirá sin calefacción.', tr: '抱歉让您久等了。您知道整栋楼都是这样吗？如果温控器正常而暖气片是凉的，可能是楼里的循环泵出了问题。我们可以周四派人过去，不过在那之前暖气仍然不会恢复。' },
        { ask: '说邻居家也不热，周四太晚（家里有婴儿），问能否明天上门，并提出临时减租。', me: [
          { t: 'En el nuestro no funciona; en casa de la vecina del cuarto, tampoco. El jueves es demasiado tarde porque hay un bebé: ¿podría venir alguien mañana? Y, mientras tanto, ¿sería posible una reducción temporal del alquiler?', tr: '我们家不热，四楼邻居家也一样。周四太晚了，家里有个婴儿：能不能明天派人来？另外，这段时间能不能临时减一点房租？', best: true },
          { t: 'En el edificio no funciona la calefacción, pero el jueves sí funciona porque ese día hará más frío.', tr: '楼里的暖气不工作，但周四会工作，因为那天更冷。' },
          { t: 'El jueves me da igual; si no vienen mañana, dejo de pagar el alquiler y ya se verá.', tr: '周四我无所谓；你们明天要是不来，我就不交房租了，看着办吧。' }
        ] },
        { npc: 'Mañana a primera hora puedo enviarle a un técnico. La reducción tendría que consultarla con la propiedad, pero no se lo prometo.', tr: '明天一早我可以派一位技术员过去。减租的事我得跟业主商量，但不能向您保证。' },
        { npc: '¿Le viene bien que llegue entre las ocho y las nueve? Así evitamos que se desplace dos veces.', tr: '技术员八点到九点之间到，您方便吗？这样免得他白跑两趟。' },
        { say: 'Sí, estaré en casa entre las ocho y las nueve. Y le agradecería que me confirmara por escrito los días sin servicio y el ajuste del alquiler, aunque sea parcial.', tr: '方便，我八点到九点会在家。另外，希望您能书面确认停暖的天数和房租调整，哪怕只是部分减免。', hint: '答应上午在家，并礼貌但明确地要求书面确认停暖天数与租金调整' },
        { npc: 'De acuerdo. Le enviaré un correo con las fechas y lo que se acuerde sobre el alquiler.', tr: '好的。我会发邮件写明日期，以及关于房租商定的结果。' },
        { npc: 'Le advierto de que, si hay que cambiar una pieza, la reparación podría prolongarse hasta el viernes.', tr: '我先提醒您，如果要换零件，维修可能拖到周五。' },
        { npc: 'Y perdone las molestias. En cuanto tenga la confirmación, le llamo.', tr: '也请您谅解这次的不便。一有确认消息，我就给您打电话。' }
      ]
    },
    {
      id: 'es-d18', level: 'C1', title: 'Pedir una prórroga al profesor', scene: '大学办公室，导师的办公时间',
      setup: '期末论文的截止日期快到了。你约了导师的办公时间，准备说明自己的进度，并为家中突发的状况申请短期延期。',
      lines: [
        { npc: 'Buenos días. Pase, siéntese. Me ha pedido una tutoría por el trabajo final, ¿verdad?', tr: '早上好。请进，请坐。您是为了期末论文来找我谈话的，对吗？' },
        { npc: 'El plazo termina el viernes. ¿Cómo va el trabajo?', tr: '截止日期是周五。论文进展怎么样？' },
        { ask: '说明进度与具体原因，请求十天延期，并问能否先交前两章。', me: [
          { t: 'Ya tengo el marco teórico y el índice, pero voy retrasado en el análisis de los datos. Mi padre estuvo hospitalizado tres semanas y he tenido que compaginar los cuidados con el trabajo. Quisiera pedirle diez días más y, si fuera posible, entregar antes los dos primeros capítulos.', tr: '理论框架和目录已经做好了，但数据分析落后了。我父亲住了三周院，我得一边照顾他一边工作。我想申请十天延期，如果可能的话，先交前两章。', best: true },
          { t: 'Sí, profesor. El trabajo final es el que se entrega al final del curso, ¿verdad?', tr: '是的，老师。期末论文就是课程结束时交的那篇，对吧？' },
          { t: 'Necesito más tiempo porque su asignatura es la más difícil y no es mi culpa.', tr: '我需要更多时间，因为您这门课最难，这不能怪我。' }
        ] },
        { npc: 'Lamento lo de su padre. Diez días es factible. Ahora bien, la entrega parcial no sustituye la entrega final. ¿Qué documentos tendría que presentar?', tr: '您父亲的事我很遗憾。十天是可以的。不过，部分提交不能代替最终提交。您需要提交哪些材料？' },
        { ask: '确认材料：延期申请、进度说明，必要时附医院证明。', me: [
          { t: '¿Bastaría con una solicitud de prórroga firmada y una nota con el estado del trabajo? Si hace falta, puedo aportar el justificante del hospital.', tr: '一份签字的延期申请和一份进度说明就够了吗？如果需要，我可以提供医院的证明。', best: true },
          { t: '¿Tengo que presentar el trabajo completo otra vez para pedir la prórroga?', tr: '申请延期是不是要把整篇论文再交一遍？' },
          { t: '¿Para qué quiere tantos papeles? Con mi palabra debería ser suficiente.', tr: '您要那么多纸干什么？有我一句话就该够了。' }
        ] },
        { npc: 'Con la solicitud y la nota es suficiente. El justificante no es obligatorio, pero ayuda a que la comisión lo apruebe.', tr: '申请和说明就够了。医院证明不是必须的，但有助于委员会批准。' },
        { say: 'Muchas gracias, profesor. Le enviaré la solicitud esta tarde y le mantendré informado del avance.', tr: '非常感谢，老师。我今天下午就把申请发给您，并随时向您汇报进度。', hint: '感谢并承诺当天提交申请、定期汇报进度' },
        { npc: 'Perfecto. Y no deje la redacción para el final; corregir cuesta más que escribir.', tr: '很好。别把文字打磨留到最后，修改比写更费时间。' }
      ]
    },
    {
      id: 'es-d19', level: 'C2', title: 'La evaluación ambigua del jefe', scene: '公司小会议室，年度绩效面谈',
      setup: '年度绩效面谈开始了。你的主管用「interesante」「ambicioso」这样听起来不错的词评价你，但语气里似乎留着保留。你需要听懂言外之意。',
      lines: [
        { npc: 'Gracias por venir. He revisado su desempeño del último año y, en general, es un trabajo… interesante.', tr: '谢谢您过来。我看了您过去一年的表现，总的来说，是一份……很有意思的工作。' },
        { ask: '不满足于「interesante」，礼貌追问具体所指，并请对方指出需要加强之处。', me: [
          { t: 'Le agradezco el comentario, pero me gustaría entender qué significa exactamente «interesante» en este contexto. ¿Hay algún aspecto concreto que debería reforzar?', tr: '谢谢您的评价，但我想弄清楚在这个语境里「有意思」究竟指什么。有没有哪个具体方面是我应该加强的？', best: true },
          { t: 'Gracias. A mí también me parece interesante el trabajo, sobre todo la parte de los informes.', tr: '谢谢。我也觉得这份工作很有意思，尤其是报告那部分。' },
          { t: '¿Interesante? Eso no dice nada. Dígame de una vez si estoy bien o mal.', tr: '有意思？这什么也没说。您就直说我到底行不行。' }
        ] },
        { npc: 'Verá, su perfil es ambicioso. A veces propone más de lo que el equipo puede asumir.', tr: '这么说吧，您的风格很有野心。有时您提出的东西超出了团队能承担的范围。' },
        { ask: '听懂「ambicioso」的保留，请对方举例，并问这对团队造成了什么影响。', me: [
          { t: 'Entiendo. ¿Podría ponerme un ejemplo de alguna propuesta que resultara excesiva para el equipo? Quiero ver dónde está el límite.', tr: '我明白了。您能不能举一个对团队来说过于庞大的提议作例子？我想看看界限在哪里。', best: true },
          { t: 'Sí, soy muy ambicioso: siempre quiero ascender y ganar más.', tr: '对，我很有野心：总想升职、多赚钱。' },
          { t: 'Si el equipo no puede con mis propuestas, el problema es del equipo, no mío.', tr: '如果团队扛不住我的提议，那是团队的问题，不是我的。' }
        ] },
        { npc: 'Por ejemplo, el proyecto de ampliar el servicio en marzo. Nadie dudó de su valor, pero el calendario era irreal.', tr: '比如三月份扩大服务范围那个项目。没有人怀疑它的价值，但时间表不切实际。' },
        { ask: '问下一季度具体期望，提议设定两个可衡量目标并在四月复盘。', me: [
          { t: 'Lo veo. Para el próximo trimestre, ¿qué esperaría concretamente de mí? ¿Le parecería bien fijar dos objetivos medibles y revisarlos en abril?', tr: '我明白了。下一季度您具体希望我做到什么？我们定两个可衡量的目标、四月再一起复盘，您觉得可以吗？', best: true },
          { t: '¿El próximo trimestre es enero, febrero y marzo?', tr: '下一季度是一月、二月和三月吗？' },
          { t: 'Bueno, si el calendario era irreal, ustedes podrían haber contratado a más gente.', tr: '既然时间表不切实际，那你们本可以多招几个人。' }
        ] },
        { say: 'Le agradezco la franqueza. Prefiero saberlo ahora que descubrirlo en la próxima evaluación.', tr: '谢谢您直言。我宁愿现在就知道，也不想等到下次评估才发现。', hint: '感谢对方的坦率，表明更愿意现在听到问题' },
        { npc: 'Me alegra que lo tome así. Le enviaré por escrito los dos objetivos y una fecha de seguimiento.', tr: '很高兴您这么看待。我会把两个目标和跟进日期书面发给您。' }
      ]
    },
    {
      id: 'es-d20', level: 'C2', title: 'Un préstamo entre amigos', scene: '咖啡馆角落，朋友约你单独见面',
      setup: '多年的朋友约你出来，话说到一半才吞吞吐吐地开口借钱。你想帮他，但也不想让钱毁掉这段友谊。',
      lines: [
        { npc: 'Oye, ¿tienes un momento? Te tengo que pedir algo y me da un poco de vergüenza.', tr: '哎，你有空吗？我得求你件事，有点不好意思开口。' },
        { ask: '先关心对方，问是不是遇上难事，不急着答应。', me: [
          { t: 'Claro. Antes de nada, ¿estás bien? Si hay un problema serio, quiero entender qué te pasa.', tr: '当然。先说说，你还好吗？如果是遇到什么严重的事，我想先弄明白你到底怎么了。', best: true },
          { t: 'Sí, tengo un momento. ¿De qué tienes vergüenza? A mí no me da vergüenza nada.', tr: '有空。你害什么臊？我从来没什么好害臊的。' },
          { t: 'Depende de lo que me pidas. Si es dinero, ya te aviso de que no.', tr: '那得看你要什么。要是借钱，我先跟你说不行。' }
        ] },
        { npc: 'Se me ha juntado el alquiler con una factura del taller. Necesitaría unos mil euros hasta fin de mes.', tr: '房租和修车行的账单撞到一块儿了。我需要一千欧左右，撑到月底。' },
        { ask: '问清总额与还款日期，并说明你想了解清楚才能判断自己能帮到什么程度。', me: [
          { t: '¿Mil euros en total? ¿Cuándo exactamente podrías devolverlos? Te lo pregunto para saber si puedo ayudarte sin quedarme yo sin margen.', tr: '一共一千欧？你具体什么时候能还？我问这个，是想知道自己能不能帮上忙，同时不把自己逼到没余地。', best: true },
          { t: '¿Mil euros? ¿Y el taller no te puede prestar el alquiler?', tr: '一千欧？那修车行不能借你房租吗？' },
          { t: 'Mil euros es mucho para pedírmelos así, de repente. ¿No tienes otros amigos?', tr: '一千欧可不是小数目，你就这么突然开口。你没别的朋友了吗？' }
        ] },
        { npc: 'Cobro el día cinco. Podría devolvértelos el seis, como muy tarde.', tr: '我五号发工资。最晚六号就能还你。' },
        { ask: '给出有边界的帮助：只借七百，写明还款日，并提议用留言写清、转账备注。', me: [
          { t: 'Puedo prestarte setecientos, no mil. Los necesito de vuelta el seis como máximo. ¿Te parece si lo dejamos por escrito en un mensaje y hago la transferencia con el concepto «préstamo»?', tr: '我可以借你七百，不是一千。最晚六号我得拿回来。我们把金额和日期在消息里写清楚，我转账时备注「借款」，你看行吗？', best: true },
          { t: 'Puedo prestarte setecientos, pero el seis trabajo, así que devuélvemelos antes de que empiece.', tr: '我可以借你七百，但六号我上班，所以你在我上班前还我。' },
          { t: 'Mira, yo no presto dinero a amigos; al final se acaba la amistad. Búscate un banco.', tr: '听着，我不借钱给朋友，最后友谊都完了。你去找银行吧。' }
        ] },
        { say: 'No es que no quiera ayudarte, pero prefiero que las cuentas queden claras entre nosotros.', tr: '不是我不想帮你，只是我希望咱们之间把钱的事说清楚。', hint: '说明不是不愿帮，而是希望把钱的事讲明白，护住友谊' },
        { npc: 'Lo entiendo, y te lo agradezco. Me viene bien que lo pongamos por escrito; así ninguno de los dos se siente en deuda.', tr: '我明白，也谢谢你。写清楚反而好，这样我们谁都不会觉得欠着对方。' }
      ]
    },
    {
      id: 'es-d21', level: 'C2', title: 'La defensa ante el comité', scene: '答辩会议室，评审委员坐在长桌另一侧',
      setup: '你刚讲完十五分钟的汇报。评审委员开始提问，第一句就盯上了你的样本量。你要承认局限，又不能把自己的方法说成不可靠。',
      lines: [
        { npc: 'Antes de nada, enhorabuena por la exposición. Pero permítame una objeción de fondo: con veintiocho casos, ¿no resulta aventurado extraer conclusiones generales?', tr: '首先，祝贺您的汇报。但请允许我提一个根本性的异议：只有二十八个案例，就从中得出普遍性结论，是不是太冒险了？' },
        { ask: '承认样本量的局限，但区分「统计代表性」与「机制解释」，说明研究目的。', me: [
          { t: 'Tiene razón en que veintiocho casos no permiten generalizar. Mi objetivo no era estimar prevalencias, sino describir un mecanismo; por eso prioricé la profundidad sobre la representatividad, y lo asumo como un límite explícito.', tr: '您说得对，二十八个案例无法推广。我的目标不是估计发生率，而是描述一种机制；因此我把深度放在代表性之前，并把它作为明确的局限承担下来。', best: true },
          { t: '¿Se refiere a veintiocho casos por grupo? Porque entonces serían cincuenta y seis, y no veintiocho.', tr: '您是指每组二十八个案例吗？那样的话就是五十六个，而不是二十八个。' },
          { t: 'Con todo el respeto, esa objeción sugiere que no ha leído el capítulo metodológico.', tr: '恕我直言，这个异议说明您没读方法论那一章。' }
        ] },
        { npc: 'De acuerdo. Pero entonces, ¿cómo descarta que haya elegido precisamente los casos que confirman su hipótesis?', tr: '好。那么，您如何排除自己恰恰挑中了能印证假设的那些案例？' },
        { ask: '说明抽样依据与反例的处理，承认残余风险，并提出下一步验证。', me: [
          { t: 'Los casos se eligieron por criterios fijados antes del trabajo de campo, no por su resultado, e incluí dos que contradicen en parte la hipótesis. Aun así, el riesgo de selección no desaparece: el siguiente paso es replicar con una muestra definida de antemano y con una evaluadora externa.', tr: '案例是按田野工作之前就定好的标准选的，不是按结果选的，我还纳入了两个部分反驳假设的案例。即便如此，选择偏差的风险并不会消失：下一步是用事先界定的样本做复制研究，并请一位外部评估者。', best: true },
          { t: '¿Descarta los casos? Si los descarto, me quedo sin datos y no puedo responderle.', tr: '排除案例？如果我把案例排除掉，就没有数据，也就没法回答您了。' },
          { t: 'Puedo garantizarle que en seis meses tendré una muestra representativa a escala nacional.', tr: '我可以向您保证，六个月内我会拿到一份全国范围有代表性的样本。' }
        ] },
        { npc: 'Y si esa réplica no confirma el mecanismo, ¿qué queda de su tesis?', tr: '如果那次复制研究不能证实这个机制，您的论点还剩下什么？' },
        { ask: '明确可证伪的条件，说明否定结果同样有价值，不作防御性辩解。', me: [
          { t: 'Si la réplica no lo confirma, la tesis queda debilitada y lo diré así. Lo que sostengo es el mecanismo propuesto, no su confirmación obligada: un resultado negativo también acota el fenómeno.', tr: '如果复制研究不能证实，这个论点就被削弱了，我会照实说。我坚持的是所提出的机制，而不是它必须得到确认：否定性的结果同样能界定现象的边界。', best: true },
          { t: '¿Qué queda? El texto completo, que ya está escrito y publicado.', tr: '还剩什么？整篇文章还在，已经写完并发表了。' },
          { t: 'Le aseguro que la réplica confirmará el mecanismo; no tengo ninguna duda.', tr: '我向您保证复制研究一定会证实这个机制，我毫不怀疑。' }
        ] },
        { say: 'Acepto la limitación y no la escondo: lo que defiendo es el diseño, no la certeza del resultado. El siguiente paso es la réplica, con criterios fijados de antemano.', tr: '我接受这个局限，也不掩饰它：我捍卫的是研究设计，而不是结果的确定性。下一步是复制研究，标准事先定好。', hint: '承认局限、守住方法，并明确下一步验证' },
        { npc: 'Eso es exactamente lo que quería oír: un límite reconocido y un plan verificable. Gracias.', tr: '这正是我想听到的：承认局限，并给出可验证的计划。谢谢。' }
      ],
      keys: [
        { w: 'aventurado', t: '冒险的、欠稳妥的（评价判断；书面，语气克制）', e: 'Pero permítame una objeción de fondo: con veintiocho casos, ¿no resulta aventurado extraer conclusiones generales?', et: '但请允许我提一个根本性的异议：只有二十八个案例，就从中得出普遍性结论，是不是太冒险了？' },
        { w: 'criterios fijados antes del trabajo de campo', t: '田野工作之前就定好的标准（答辩中说明抽样并非事后挑选）', e: 'Los casos se eligieron por criterios fijados antes del trabajo de campo, no por su resultado, e incluí dos que contradicen en parte la hipótesis.', et: '案例是按田野工作之前就定好的标准选的，不是按结果选的，我还纳入了两个部分反驳假设的案例。' },
        { w: 'el riesgo de selección no desaparece', t: '选择偏差的风险不会因此消失（承认残余风险而不辩解）', e: 'Aun así, el riesgo de selección no desaparece: el siguiente paso es replicar con una muestra definida de antemano y con una evaluadora externa.', et: '即便如此，选择偏差的风险并不会消失：下一步是用事先界定的样本做复制研究，并请一位外部评估者。' },
        { w: 'un resultado negativo también acota el fenómeno', t: '否定性结果同样能界定现象的边界（为可证伪性辩护）', e: 'Lo que sostengo es el mecanismo propuesto, no su confirmación obligada: un resultado negativo también acota el fenómeno.', et: '我坚持的是所提出的机制，而不是它必须得到确认：否定性的结果同样能界定现象的边界。' }
      ]
    },
    {
      id: 'es-d22', level: 'C2', title: 'Mediar entre socios', scene: '共享办公室的小会议室，气氛僵住',
      setup: '两个合伙人 Marta 和 Diego 因为分工和功劳在你面前争了起来。你既不是投资人，也不是裁判，但两人都愿意听你把话说完。',
      lines: [
        { npc: 'Marta, yo no he dicho que no hayas trabajado. Lo que digo es que la parte comercial la he abierto yo solo, y en la reunión hablaste como si el crecimiento fuera mérito de los dos.', tr: 'Marta，我没说你没干活。我是说，商务这块是我一个人跑开的，而你在会上说得好像增长是两个人的功劳。' },
        { ask: '先给争执降温，立一条只谈具体事实的规则，不评判谁对。', me: [
          { t: 'Antes de seguir, propongo una regla: nada de «siempre» ni «nunca». Cada uno cuenta hechos concretos del último trimestre y yo tomo nota. ¿Os parece?', tr: '在继续之前，我提议一条规则：不说「总是」「从来不」。每人只讲上个季度的具体事实，我来记录。你们看行吗？', best: true },
          { t: 'Si os entiendo bien, el problema es que hablasteis los dos en la reunión. Entonces basta con que hable uno la próxima vez.', tr: '如果我理解得对，问题是你们俩都在会上发言了。那下次只让一个人发言就行了。' },
          { t: 'Yo he visto muchas peleas así: os garantizo que en una hora lo arreglo y que ninguno saldrá perjudicado.', tr: '这种争吵我见多了：我保证一小时内解决，而且谁都不会吃亏。' }
        ] },
        { npc: 'Vale. Hechos: en el último trimestre cerré yo las tres cuentas más grandes y rehíce el producto para que se pudiera vender. Diego estuvo en dos ferias, es verdad, pero no trajo ningún contrato.', tr: '行。事实是：上个季度最大的三个客户是我谈下的，我还重做了产品，让它能卖出去。Diego 确实去了两次展会，但一个合同也没带回来。' },
        { ask: '接住双方的事实，请另一方只补具体事实、不作评价。', me: [
          { t: 'Marta, lo anoto. Diego, ¿qué hechos concretos añadirías del último trimestre, sin valorar lo que ha hecho Marta?', tr: 'Marta，我记下了。Diego，就上个季度，你还能补充哪些具体事实？先不评价 Marta 做的事。', best: true },
          { t: '¿Dos ferias? Entonces el problema es el número de ferias: podemos organizar tres.', tr: '两次展会？那问题就是展会数量：我们可以办三次。' },
          { t: 'Marta, con ese tono no vamos a ningún lado; deberías disculparte antes de hablar de cuentas.', tr: 'Marta，你这个语气没法谈；谈账目之前你该先道歉。' }
        ] },
        { npc: 'Hechos: las dos ferias las organicé yo, gasté menos de la mitad de lo previsto y de la segunda salieron cuatro contactos que siguen abiertos. Y sí, Marta cerró las cuentas, pero con el material que preparé yo.', tr: '事实：两次展会都是我组织的，花费不到预算的一半，第二次还带来四个仍在接触的客户。没错，客户是 Marta 谈下的，但用的是我准备的材料。' },
        { ask: '落到可执行的规则：书面划分决策权、对外如何表述功劳、固定复盘节奏。', me: [
          { t: 'Propongo tres reglas: dejar por escrito quién decide en cada área y cómo se reparte el mérito, y fijar una revisión mensual con datos. Si os parece, las redacto y las firmamos.', tr: '我提三条规则：书面写明每个领域由谁决定、对外汇报中功劳怎么分，并每月用数据复盘一次。你们同意的话，我起草，我们签字。', best: true },
          { t: '¿Cuatro contactos? Si todavía están abiertos, el problema es que no los cerráis; bastará con cerrarlos.', tr: '四个客户？如果还在接触中，问题就是你们没把他们签下来；签下来就行了。' },
          { t: 'Os prometo que si me dejáis llevar la empresa, esto no volverá a pasar.', tr: '我保证，如果你们让我来管公司，这种事不会再发生。' }
        ] },
        { say: 'Lo que oigo no es que uno trabaje menos, sino que cada uno no sabe lo que el otro carga. Dejemos por escrito quién decide qué y cómo se atribuye el mérito; lo revisamos el primer lunes de cada mes.', tr: '我听到的不是谁干得少，而是彼此不清楚对方在扛什么。我们把谁决定什么、功劳怎么归属写下来；每月第一个周一复盘。', hint: '点出争端的真正结构，并给出可执行的书面规则与复盘节奏' },
        { npc: 'Me parece justo. Si lo ponemos por escrito, prefiero eso a seguir recordando quién hizo qué.', tr: '我觉得公平。写下来，总比继续翻旧账强。' }
      ],
      keys: [
        { w: 'nada de «siempre» ni «nunca»', t: '不可以说「总是」「从来不」（调解时把绝对化表述列为禁区）', e: 'Antes de seguir, propongo una regla: nada de «siempre» ni «nunca».', et: '在继续之前，我提议一条规则：不说「总是」「从来不」。' },
        { w: 'sin valorar lo que ha hecho', t: '不评价对方做过的事（只补事实的限定语）', e: 'Marta, lo anoto. Diego, ¿qué hechos concretos añadirías del último trimestre, sin valorar lo que ha hecho Marta?', et: 'Marta，我记下了。Diego，就上个季度，你还能补充哪些具体事实？先不评价 Marta 做的事。' },
        { w: 'lo que oigo no es que…, sino que…', t: '我听到的不是……，而是……（调解时重述争端结构的框架句）', e: 'Lo que oigo no es que uno trabaje menos, sino que cada uno no sabe lo que el otro sostiene.', et: '我听到的不是谁干得少，而是彼此不清楚对方在支撑什么。' },
        { w: 'seguir recordando quién hizo qué', t: '继续翻旧账、追究谁做了什么（带厌烦语气）', e: 'Si lo ponemos por escrito, prefiero eso a seguir recordando quién hizo qué.', et: '写下来，总比继续翻旧账强。' }
      ]
    }
  ],
  readings: [
    {
      id: 'es-r1', level: 'C1', title: 'El precio silencioso de la comodidad', src: 'Columna · unas 220 palabras',
      text: 'Hay un cansancio que no se nota hasta que alguien lo nombra: el de no tener que decidir. Pedimos la compra desde el móvil, aceptamos la ruta que sugiere el mapa, dejamos que la plataforma elija la serie de esta noche. Cada una de esas renuncias es minúscula. Sumadas, sin embargo, dibujan una vida en la que casi nada nos pide estar del todo presentes.\n\nLa comodidad, cuando funciona bien, se vuelve invisible. Esa es su virtud y también su trampa. Hace veinte años, comprar un billete exigía una conversación, una espera y, a veces, una equivocación que había que resolver. Hoy basta un gesto. No añoro las colas, pero me pregunto qué hacemos con la atención que antes ocupaban esos pequeños trámites.\n\nConviene distinguir entre alivio y atrofia. Para quien cuida a un familiar enfermo, que le lleven la cena a casa no es comodidad: es tiempo robado al agotamiento. El problema aparece cuando la excepción se convierte en costumbre y dejamos de elegir porque ya no recordamos que había otra opción.\n\nNo propongo una vida de esfuerzo decorativo. Propongo algo más modesto: recuperar una decisión al día. Cocinar sin receta, caminar sin indicaciones, sostener una conversación sin mirar el móvil. La comodidad debería liberar tiempo, no administrarlo. La diferencia entre ambas cosas es pequeña en apariencia y decisiva en la práctica.',
      tr: '有一种疲惫，直到有人点破才被察觉：那是不必做决定的疲惫。我们在手机上买菜，接受地图推荐的路线，让平台替我们选今晚看哪部剧。每一次这样的让渡都微不足道。可加在一起，它们勾勒出一种生活：几乎没有什么要求我们全然在场。\n\n便利运转良好时，会变得看不见。这既是它的长处，也是它的陷阱。二十年前，买一张票需要一次交谈、一段等待，有时还需要解决一个弄错的环节。如今一个动作就够了。我并不怀念排队，但我忍不住问：从前被这些小事占据的注意力，如今我们拿来做了什么？\n\n应当区分舒缓与萎缩。对一个照顾病中家人的人来说，晚饭送到家门口不是便利，而是从精疲力竭里抢回来的时间。问题出现在例外变成习惯、我们不再选择，因为已经忘了还有别的可能。\n\n我并非提倡一种装点门面的辛苦生活。我提的愿望更小：每天找回一个决定。不看菜谱做顿饭，不看导航走一段路，不看手机把一场对话听完。便利应当释放时间，而不是替我们支配时间。两者的差别看似很小，落到实处却至关重要。',
      qs: [
        { q: '¿Cuál es la tesis central de la columna?', opts: [
          { t: 'La comodidad debería rechazarse por completo, porque nos vuelve pasivos.' },
          { t: 'La comodidad es valiosa, pero se vuelve problemática cuando sustituye nuestra capacidad de decidir.', best: true },
          { t: 'Las aplicaciones digitales han empeorado irreversiblemente la vida cotidiana.' }
        ] },
        { q: 'Según el texto, ¿en qué momento deja de ser positiva la comodidad?', opts: [
          { t: 'Cuando la usan personas que no pueden valerse por sí mismas.' },
          { t: 'Cuando la excepción se convierte en costumbre y ya no elegimos.', best: true },
          { t: 'Cuando sustituye las conversaciones telefónicas por mensajes escritos.' }
        ] },
        { q: 'El tono de la columna puede describirse como…', opts: [
          { t: 'nostálgico y claramente contrario a la tecnología.' },
          { t: 'reflexivo y mesurado, con una propuesta deliberadamente modesta.', best: true },
          { t: 'irónico y desdeñoso hacia el lector.' }
        ] }
      ],
      keys: [
        { w: 'atrofia', t: '萎缩、机能退化（此处指做决定的能力）', e: 'Conviene distinguir entre alivio y atrofia.', et: '应当区分舒缓与萎缩。' },
        { w: 'tiempo robado al agotamiento', t: '从精疲力竭里抢回来的时间（比喻，指对照顾者而言的实质帮助）', e: 'Para quien cuida a un familiar enfermo, que le lleven la cena a casa no es comodidad: es tiempo robado al agotamiento.', et: '对一个照顾病中家人的人来说，晚饭送到家门口不是便利，而是从精疲力竭里抢回来的时间。' },
        { w: 'la excepción se convierte en costumbre', t: '例外变成习惯（指例外做法固化为默认状态）', e: 'El problema aparece cuando la excepción se convierte en costumbre y dejamos de elegir porque ya no recordamos que había otra opción.', et: '问题出现在例外变成习惯、我们不再选择，因为已经忘了还有别的可能。' },
        { w: 'esfuerzo decorativo', t: '装饰性的努力、做样子的辛苦（作者自造的搭配，带轻微讽刺）', e: 'No propongo una vida de esfuerzo decorativo.', et: '我并非提倡一种装点门面的辛苦生活。' }
      ]
    },
    {
      id: 'es-r2', level: 'C2', title: 'El arte perdido de discrepar', src: 'Ensayo · unas 300 palabras',
      text: 'Se dice que vivimos en la era del desacuerdo permanente y, sin embargo, cuesta encontrar a alguien que discrepe bien. Lo que abunda es otra cosa: la refutación rápida, el comentario ingenioso, la sentencia que cierra la conversación antes de que haya empezado. Hemos confundido la firmeza con la claridad, y la claridad con tener razón.\n\nDiscrepar exige, en primer lugar, escuchar de un modo incómodo: permitir que el argumento ajeno nos obligue a reformular el propio. Eso no ocurre cuando ya hemos decidido qué va a decir el otro. Buena parte de nuestros debates no son debates, sino monólogos que necesitan un testigo. Elegimos la versión más débil de la posición contraria, la derribamos con elegancia y recogemos el aplauso de quienes pensaban como nosotros desde el principio.\n\nHay una razón para ello, y no es solo intelectual. Discutir bien tiene un coste social: quien concede un punto pierde, a ojos del público, la pose de la victoria. En la sobremesa y en la red, el que matiza parece débil; el que grita, informado. Preferimos ganar una escaramuza antes que entender un problema, porque la primera se celebra de inmediato y el segundo no se ve.\n\nNo obstante, la alternativa no es una tolerancia blanda que trate todas las opiniones como igualmente valiosas. Algunas son falsas y otras son dañinas, y decirlo no es arrogancia. Pero incluso para rechazarlas hace falta algo más que indignación: hace falta argumento, y el argumento exige tiempo. Discrepar con rigor es, quizá, la última forma de respeto que nos queda. También la más difícil, porque obliga a admitir que el otro podría tener razón en algo, aunque solo sea en una parte pequeña.',
      tr: '人们说我们生活在永久分歧的时代，可要找一个善于表达分歧的人却很难。更常见的倒是另一些东西：快速反驳、俏皮点评、在对话还没开始前就把它关上的判决。我们把强硬当成了清晰，又把清晰当成了有理。\n\n表达分歧首先要求一种令人不适的倾听：让对方的论证迫使我们重新表述自己的论证。若我们早已认定对方会说什么，这便不会发生。我们的辩论有相当一部分并非辩论，而是需要一个见证者的独白。我们挑出对方立场中最弱的版本，优雅地将它击倒，然后收获那些从一开始就与我们想法相同的人的掌声。\n\n这背后有原因，而且不只是智识上的。好好争论要付出社会代价：在旁观者眼里，让出一分的人就失去了胜利的姿态。无论在饭后闲谈还是在网络上，补充限定的人显得软弱，高声喊叫的人倒显得消息灵通。我们宁愿赢下一场小遭遇战，也不愿弄懂一个问题，因为前者立刻有人喝彩，后者却看不见。\n\n然而，替代方案并不是一种把一切观点都视为同样有价值的软性宽容。有些观点是错的，有些是有害的，指出这一点并非傲慢。但即便要拒绝它们，也需要比愤怒更多的东西：需要论证，而论证需要时间。严谨地表达分歧，也许是我们仅存的最后一种尊重形式。它也是最难的一种，因为它迫使我们承认对方可能在某一点上是对的，哪怕只是很小的一部分。',
      qs: [
        { q: '¿Qué reproche principal dirige el autor a nuestra forma de discutir?', opts: [
          { t: 'Que la gente ha dejado de tener opiniones firmes sobre casi todo.' },
          { t: 'Que buscamos refutar y ganar en lugar de comprender y argumentar.', best: true },
          { t: 'Que los debates se alargan demasiado y nunca llegan a una conclusión.' }
        ] },
        { q: 'Según el texto, ¿por qué resulta costoso matizar en público?', opts: [
          { t: 'Porque quien concede un punto parece perder la pose de la victoria.', best: true },
          { t: 'Porque exige manejar datos que casi nadie tiene a mano.' },
          { t: 'Porque obliga a hablar ante una audiencia desconocida.' }
        ] },
        { q: 'La postura final del autor ante las opiniones falsas o dañinas es…', opts: [
          { t: 'indiferente: no merece la pena discutir con quienes las sostienen.' },
          { t: 'firme en el rechazo, pero exigiendo argumentos y no solo indignación.', best: true },
          { t: 'conciliadora: todas las opiniones merecen el mismo respeto.' }
        ] }
      ],
      keys: [
        { w: 'escaramuza', t: '小规模遭遇战（比喻为一场短暂争论的胜负）', e: 'Preferimos ganar una escaramuza antes que entender un problema, porque la primera se celebra de inmediato y el segundo no se ve.', et: '我们宁愿赢下一场小遭遇战，也不愿弄懂一个问题，因为前者立刻有人喝彩，后者却看不见。' },
        { w: 'la pose de la victoria', t: '胜利者的姿态、摆出赢家的样子（带讽刺）', e: 'Discutir bien tiene un coste social: quien concede un punto pierde, a ojos del público, la pose de la victoria.', et: '好好争论要付出社会代价：在旁观者眼里，让出一分的人就失去了胜利的姿态。' },
        { w: 'tolerancia blanda', t: '软性宽容（指不加区分地容忍一切观点）', e: 'No obstante, la alternativa no es una tolerancia blanda que trate todas las opiniones como igualmente valiosas.', et: '然而，替代方案并不是一种把一切观点都视为同样有价值的软性宽容。' },
        { w: 'monólogos que necesitan un testigo', t: '需要见证者的独白（讽刺自称辩论的独角戏）', e: 'Buena parte de nuestros debates no son debates, sino monólogos que necesitan un testigo.', et: '我们的辩论有相当一部分并非辩论，而是需要一个见证者的独白。' }
      ]
    },
    {
      id: 'es-r3', level: 'C2', title: 'Reformular al adversario sin traicionarlo', src: 'Ensayo largo · unas 380 palabras',
      text: 'Discutir con alguien a quien no vamos a convencer tiene algo de ejercicio sin recompensa. Por eso abunda la tentación de abreviar: resumimos la posición contraria en una frase que ya suena derrotada y pasamos a la nuestra. El atajo es eficaz, aunque no del todo honesto. Antes de refutar, conviene preguntarse si la versión que vamos a tumbar la suscribiría quien la sostiene.\n\nReformular no es repetir con otras palabras: es reconstruir el argumento ajeno con sus propias razones, incluidas las que no compartimos. Exige distinguir la tesis de los ejemplos que la acompañan, la convicción de la persona y el interés que la mueve. Casi nunca es un trabajo neutro; uno descubre, al intentarlo, que la posición contraria era menos simple de lo que recordaba, y que buena parte de su propia certeza dependía de no haberla entendido del todo. El ejercicio tiene un efecto secundario incómodo: a veces hay que corregir el resumen, y con él la crítica que se traía preparada.\n\nLa objeción más frecuente es que tanta generosidad concede demasiado. No es cierto: describir con precisión una posición no la vuelve verdadera, igual que un mapa exacto del terreno no nos obliga a caminar por él. Lo que se concede es el derecho del otro a ser refutado en su mejor versión, no en la más cómoda. La refutación de un argumento débil no demuestra nada, salvo que sabemos elegir adversarios fáciles. Y una refutación así no convence a nadie que no estuviera ya convencido.\n\nHay además una razón práctica. Quien se siente mal citado deja de escuchar el resto; el debate se convierte en una discusión sobre la discusión. En cambio, cuando alguien reconoce nuestra formulación y aun así discrepa, la discrepancia pesa más, porque ya no puede atribuirse a un malentendido. Reformular bien es, paradójicamente, la forma más eficaz de hacer que nuestra crítica sea difícil de esquivar.\n\nNada de esto obliga a suavizar el desacuerdo. Se puede ser duro en la conclusión y escrupuloso en la premisa. Quizá la prueba consista en esto: si el otro leyera nuestro resumen y dijera «sí, eso es lo que sostengo», entonces estaríamos en condiciones de discutir de verdad. Mientras no lo diga, discutimos con alguien que hemos inventado, y esa clase de victoria no deja nada.',
      tr: '和一个不会被我们说动的人争论，有点像没有奖赏的练习。因此，走捷径的诱惑很常见：把对方立场压缩成一句听起来已经站不住脚的话，然后转到自己这边。这个捷径很有效，却并不完全诚实。反驳之前，值得先问一句：我们准备推倒的那个版本，坚持该立场的人会认可吗？\n\n重新表述不是换几个词重复，而是用对方自己的理由重建其论证，包括我们不认同的那些理由。这要求区分主张与用来支撑它的例子、区分人的信念与其背后的利益。这几乎从不是中性的工作：试着做时会发现，对方的立场并不像自己记忆里那么简单，而自己的确信有相当一部分，建立在没有完全听懂对方之上。这项工作还有一个令人不适的副作用：有时得改掉自己的概述，连同原本准备好的批评一起改。\n\n最常见的反对意见是，这种宽厚等于让得太多。其实不然：准确描述一个立场并不会让它变成真理，就像一份精确的地图不会强迫我们按它行走。我们让出的，是对方「以其最强版本被反驳」的权利，而不是「以其最省事的版本被反驳」。驳倒一个软弱的论证什么也证明不了，只能证明我们善于挑容易的对手。而这样的反驳，也说服不了任何原本没被说服的人。\n\n还有一层实际的理由。被错误引述的人不会再听后面的内容；辩论于是变成关于辩论本身的争执。反过来，当有人准确复述了我们的说法、却仍然不同意，这种不同意就更有分量，因为它不能再归咎于误解。准确复述，反而成了让自己的批评难以被回避的最有效方式。\n\n这一切都不要求把分歧说软。结论可以强硬，前提却必须严谨。也许检验标准就在这里：如果对方读了我们的概述，说「对，这就是我的主张」，那我们才具备真正争论的条件。只要他还不这么说，我们争论的对象就是一个自己虚构出来的人，而这类胜利什么也不会留下。',
      qs: [
        { q: '¿Cuál es la tesis central del ensayo?', opts: [
          { t: 'Para debatir con eficacia conviene exagerar la posición del adversario hasta hacerla ridícula.' },
          { t: 'La crítica seria exige reconstruir primero la posición ajena en su versión más fuerte y reconocible.', best: true },
          { t: 'El desacuerdo honesto consiste en evitar las conclusiones duras y buscar siempre un término medio.' }
        ] },
        { q: 'Según el texto, ¿por qué resulta contraproducente atribuir al otro una posición que no sostiene?', opts: [
          { t: 'Porque el interlocutor deja de escuchar y el debate se desplaza a la propia discusión.', best: true },
          { t: 'Porque la conversación se alarga y nadie recuerda de dónde partía.' },
          { t: 'Porque obliga a citar fuentes que no se han leído con atención.' }
        ] },
        { q: 'En el primer párrafo, «abreviar» se refiere a…', opts: [
          { t: 'acortar la conversación pidiendo un descanso antes de continuar.' },
          { t: 'resumir la posición contraria de un modo que ya la deja por derrotada.', best: true },
          { t: 'escribir las conclusiones antes de exponer los argumentos.' }
        ] },
        { q: 'El tono del ensayo es…', opts: [
          { t: 'polémico y sarcástico hacia quienes sostienen otras posiciones.' },
          { t: 'exigente y reflexivo, con una confianza sobria en el método.', best: true },
          { t: 'nostálgico y pesimista sobre la posibilidad de entenderse.' }
        ] }
      ],
      keys: [
        { w: 'abreviar', t: '简省、草草压缩（此处指把对方立场压缩成一句好驳的话）', e: 'Por eso abunda la tentación de abreviar: resumimos la posición contraria en una frase que ya suena derrotada y pasamos a la nuestra.', et: '因此，走捷径的诱惑很常见：把对方立场压缩成一句听起来已经站不住脚的话，然后转到自己这边。' },
        { w: 'reconstruir el argumento ajeno', t: '重建对方的论证（比「复述」更强调结构与理由）', e: 'Reformular no es repetir con otras palabras: es reconstruir el argumento ajeno con sus propias razones, incluidas las que no compartimos.', et: '重新表述不是换几个词重复，而是用对方自己的理由重建其论证，包括我们不认同的那些理由。' },
        { w: 'en su mejor versión', t: '以其最强、最完整的版本（辩论用语，与「最省事的版本」相对）', e: 'Lo que se concede es el derecho del otro a ser refutado en su mejor versión, no en la más cómoda.', et: '我们让出的，是对方「以其最强版本被反驳」的权利，而不是「以其最省事的版本被反驳」。' },
        { w: 'esquivar', t: '回避、躲开（此处指回避批评）', e: 'Reformular bien es, paradójicamente, la forma más eficaz de hacer que nuestra crítica sea difícil de esquivar.', et: '准确复述，反而成了让自己的批评难以被回避的最有效方式。' }
      ]
    },
    {
      id: 'es-r4', level: 'C2', title: 'Recomendar no es decidir', src: 'Reportaje · unas 400 palabras',
      text: 'En la biblioteca municipal de Valdeprado, la pantalla de recomendaciones ocupa la pared donde antes estaban las novedades. Muestra «lecturas afines a tu perfil» y cambia cada mañana. El martes, entre las diez y las doce, pasaron veinte personas; ninguna se detuvo a mirarla. Todas sabían qué buscaban, o eso creían. La sala huele a papel viejo y a café de máquina, y el único ruido es el escáner del mostrador.\n\nRosa Iglesias, bibliotecaria desde hace dieciocho años, explica el cambio con una mezcla de entusiasmo y fastidio: «Antes la gente llegaba sin nada y se iba con un libro que no esperaba. Ahora llega con una lista de tres títulos y, si no están, se va». El sistema no falla: acierta tanto que ya nadie pide consejo. En dos años, los préstamos crecieron un 12 %, pero el número de títulos distintos que circulan se redujo a un tercio. Las novedades se agotan; el fondo antiguo, dice, «se ha vuelto decorado».\n\nArnau Ferrer, ingeniero que diseñó el motor de recomendación de una plataforma de series, lo describe sin adornos: «El modelo aprende de lo que elegimos, no de lo que habríamos elegido con más tiempo. Optimiza la certeza». De ahí que recomiende con tanta seguridad y se equivoque tan poco: solo enseña lo que ya se parece a nosotros. Un catálogo de dos mil títulos puede producir, en la práctica, cuatro o cinco caminos. El resto sigue disponible, pero deja de ser visible, y lo que no se ve se acaba suponiendo que no existe.\n\nElena Prat, profesora de secundaria en el mismo barrio, cuenta que sus alumnos de diecisiete años le piden «el libro que les va a gustar» antes de abrir ninguno. «No es pereza; es que han aprendido a confiar en el sistema más que en el desconcierto», dice. Ahí está el nudo. La recomendación no obliga a nada: ahorra la parte incómoda de elegir, que es justamente donde uno averigua qué le interesa. Al delegar el gusto, ganamos tiempo y perdemos el roce que lo forma.\n\nEn Valdeprado han recuperado una costumbre modesta. Cada viernes, una estantería sin algoritmo se llena con libros que dejan los vecinos, cada uno con una nota de una línea explicando por qué. La mitad no se presta nunca. La otra mitad encuentra lectores que no figuraban en ninguna lista, y a veces uno de esos libros vuelve con otra nota debajo. No es una cruzada contra las plataformas: es la constatación de que recomendar y decidir no son la misma cosa, y de que la diferencia solo se nota cuando alguien la practica.',
      tr: '在瓦尔德普拉多市立图书馆，推荐屏占着原来放新书的那面墙。屏幕显示「与你的阅读偏好相近的书」，每天早上更新。周二上午十点到十二点，共有二十人经过，没有一个人停下来看。所有人都知道自己要找什么，或者自以为知道。馆里是旧纸和机器咖啡的味道，唯一的声响是借还台上的扫描仪。\n\n罗莎·伊格莱西亚斯在这里做了十八年图书馆员，她讲起这个变化，语气里既有热情也有烦躁：「以前人来的时候两手空空，走的时候带一本自己没想到的书。现在人带着三个书名的清单来，如果都没有，就走了。」系统没有失灵：它准得让人不再开口问建议。两年里借阅量涨了 12%，但流通的不同书目缩减到了三分之一。新书被借空；旧藏，她说，「变成了装饰」。\n\n阿尔瑙·费雷尔是某剧集平台推荐引擎的设计者，他毫不修饰地描述：「模型学的是我们选了什么，而不是我们在有更多时间时会选什么。它优化的是确定性。」所以它推荐得那么有把握，也那么少出错：它只展示已经像我们的东西。一个两千种书目的馆藏，实际能走出四五条路。其余的仍然在架，却不再可见；而看不见的东西，人们渐渐就当它不存在。\n\n同区的中学教师埃莱娜·普拉特说，她十七岁的学生在翻开任何一本书之前，就向她要「那本我会喜欢的书」。「不是懒；是他们学会了更相信系统，而不是那种不知所措。」症结就在这里。推荐并不强迫什么：它省掉了选择中令人不适的那一段，而恰恰是那一段让人弄清自己究竟对什么感兴趣。把品味交出去，我们省下了时间，也失去了塑造品味的那点摩擦。\n\n在瓦尔德普拉多，人们恢复了一个小小的习惯。每周五，一个不带算法的书架会被邻居们留下的书填满，每本都夹着一行字，说明为什么留下它。有一半的书从来没人借。另一半找到了在任何榜单上都不会出现的读者，有时其中一本会带着另一张字条回来。这不是对平台的讨伐：这是一个确认——推荐和决定不是一回事，而两者的差别，只有在有人真的去实践时才看得出来。',
      qs: [
        { q: '¿Cuál es la idea central del reportaje?', opts: [
          { t: 'Las bibliotecas deberían sustituir los algoritmos por catálogos impresos.' },
          { t: 'Los sistemas de recomendación aciertan tanto que acaban estrechando lo que elegimos y sustituyendo nuestro criterio.', best: true },
          { t: 'Los jóvenes leen más que antes gracias a las recomendaciones personalizadas.' }
        ] },
        { q: '¿Qué dato del texto muestra que el sistema funciona pero reduce la variedad?', opts: [
          { t: 'Los préstamos subieron un 12 %, mientras los títulos distintos en circulación cayeron a un tercio.', best: true },
          { t: 'Veinte personas pasaron por la biblioteca en dos horas sin mirar la pantalla.' },
          { t: 'El catálogo de la plataforma de series tiene dos mil títulos disponibles.' }
        ] },
        { q: 'En el tercer párrafo, «lo que no se ve se acaba suponiendo que no existe» equivale a decir que…', opts: [
          { t: 'el catálogo restante desaparece físicamente de la biblioteca.' },
          { t: 'lo que queda fuera de la recomendación deja de tenerse en cuenta aunque siga disponible.', best: true },
          { t: 'los ingenieros ocultan a propósito los títulos menos populares.' }
        ] },
        { q: 'La actitud del reportaje hacia las plataformas de recomendación es…', opts: [
          { t: 'de rechazo frontal: pide que se prohíban en bibliotecas y escuelas.' },
          { t: 'crítica y matizada: describe sus efectos sin convertirlo en una cruzada.', best: true },
          { t: 'entusiasta: presenta el aumento de préstamos como prueba de mejora.' }
        ] }
      ],
      keys: [
        { w: 'lecturas afines a tu perfil', t: '与你的偏好相近的读物（平台用语，暗示已按过往行为筛过）', e: 'Muestra «lecturas afines a tu perfil» y cambia cada mañana.', et: '屏幕显示「与你的阅读偏好相近的书」，每天早上更新。' },
        { w: 'sin adornos', t: '不加修饰、直截了当（口语，形容说话方式）', e: 'Arnau Ferrer, ingeniero que diseñó el motor de recomendación de una plataforma de series, lo describe sin adornos: «El modelo aprende de lo que elegimos, no de lo que habríamos elegido con más tiempo».', et: '阿尔瑙·费雷尔是某剧集平台推荐引擎的设计者，他毫不修饰地描述：「模型学的是我们选了什么，而不是我们在有更多时间时会选什么。」' },
        { w: 'se ha vuelto decorado', t: '变成了摆设（口语化比喻，指只作背景、不再被使用）', e: 'Las novedades se agotan; el fondo antiguo, dice, «se ha vuelto decorado».', et: '新书被借空；旧藏，她说，「变成了装饰」。' },
        { w: 'el roce que lo forma', t: '塑造品味的那种摩擦（比喻，指选择时的不适与磨合）', e: 'Al delegar el gusto, ganamos tiempo y perdemos el roce que lo forma.', et: '把品味交出去，我们省下了时间，也失去了塑造品味的那点摩擦。' }
      ],
      patterns: [
        { frame: 'No es X: es Y', t: '对比否定：不是 X，而是 Y，先挡掉一个容易下的判断，再给出真正的定性', e: 'No es una cruzada contra las plataformas: es la constatación de que recomendar y decidir no son la misma cosa, y de que la diferencia solo se nota cuando alguien la practica.', et: '这不是对平台的讨伐：这是一个确认——推荐和决定不是一回事，而两者的差别，只有在有人真的去实践时才看得出来。', tip: '冒号前先否定外界可能的误读，冒号后用 es 正面落定。更书面的变体是 No es que X, sino que Y，此时 es que 后面接完整从句。' },
        { frame: 'X, pero Y', t: '让步-转折：先承认 X 成立，再用 Y 把结论翻过来（承认成效、点出代价）', e: 'En dos años, los préstamos crecieron un 12 %, pero el número de títulos distintos que circulan se redujo a un tercio.', et: '两年里借阅量涨了 12%，但流通的不同书目缩减到了三分之一。', tip: '前半句用具体数据让步，后半句用 pero 翻转，语气才显得客观。书面语可把 pero 换成 si bien，或在句末另起一句用 aun así。' },
        { frame: 'De ahí que X: Y', t: '归因：由前面的原因推出后面的结果，等于把 Y 归到 X 上', e: 'De ahí que recomiende con tanta seguridad y se equivoque tan poco: solo enseña lo que ya se parece a nosotros.', et: '所以它推荐得那么有把握，也那么少出错：它只展示已经像我们的东西。', tip: 'De ahí que 后面必须用虚拟式（recomiende、se equivoque），冒号后再补一层解释。想明说「把 X 归因于 Y」，可换成 atribuir X a Y。' }
      ]
    }
  ],
  drills: [
    { id: 'es-l1', level: 'C2', title: 'Comprensión avanzada · reunión, pódcast y negociación', desc: 'Frases completas a velocidad real: capta la actitud y lo no dicho', items: [
      { w: 'con todos los respetos', t: '恕我直言（半正式会议里提出异议的礼貌前置语，比直接反驳缓，但立场不变）', e: 'Con todos los respetos, la cifra de cierre no me termina de convencer y preferiría revisarla antes de firmar nada.', et: '恕我直言，收尾那个数字我始终没法完全信服，签字之前我想再核一遍。', p: '/kon ˈto.ðos los resˈpe.tos/' },
      { w: 'si me dejas terminar', t: '你要是让我说完（被打断后夺回话语权的固定说法，常与 perdona que insista 连用）', e: 'Sí, perdona que insista, pero si me dejas terminar lo que iba diciendo, verás que el punto tiene que ver justamente con eso.', et: '是，抱歉我再坚持一下——你要是让我把刚才那段说完，你会看到这一点恰恰就与此有关。', p: '/si me ˈðe.xas teɾ.miˈnaɾ/' },
      { w: 'una cosa por otra', t: '一样换一样、有来有往（谈判中提出对等条件的口语表达，暗含不白让）', e: 'Si accedemos a ampliar el plazo, necesitamos algo a cambio: una cosa por otra, y el anticipo tendría que subir al veinte por ciento.', et: '如果我们同意延长工期，就得有对等的交换：一样换一样，预付款也得提到百分之二十。', p: '/ˈu.na ˈko.sa poɾ ˈo.tɾa/' },
      { w: 'hasta donde alcanzan mis datos', t: '就我所掌握的数据而言（学术问答中为结论划界、主动留余地的限定语）', e: 'Hasta donde alcanzan mis datos, la muestra no permite hablar de causalidad, así que esa parte la dejaría abierta para otra ocasión.', et: '就我掌握的数据而言，这个样本还不足以谈因果关系，所以那一部分我宁愿先留白，等下次再说。', p: '/ˈas.ta ˈðon.de alˈkan.san mis ˈða.tos/' },
      { w: 'lo que faltaba', t: '真是时候（反语：字面是「正缺这个」，实际表示又来一桩麻烦）', e: 'Y ahora nos piden rellenar otro formulario: lo que faltaba, con lo bien que iba todo esta mañana.', et: '现在又让我们再填一张表：真是时候啊，今天早上本来一切还顺利得很。', p: '/lo ke falˈta.βa/' },
      { w: 'haremos lo posible', t: '我们会尽力（把承诺预先降级的客服用语，暗含不保证，后面常接条件句）', e: 'Haremos lo posible por tenerlo listo el viernes, según cómo vaya la tramitación; si no, le avisamos el lunes sin falta.', et: '我们会尽力争取周五弄好，要看流程走得怎么样；不行的话，周一一定通知您。', p: '/aˈɾe.mos lo poˈsi.βle/' }
    ] }
  ]
});
