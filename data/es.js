LP.registerCourse({
  id: 'es', name: '西班牙语', native: 'Español', flag: '🇪🇸', tts: 'es-ES', typing: true, order: true,
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
        { w: 'eso', t: '那个', e: 'Eso es mi casa.', et: '那是我的家。' },
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
    ] }
  ]
});
