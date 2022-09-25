// 各个页面页尾的内容
const footer = [
  {label: '小组成员', text: '张连博、刘敬超、袁晓楠、闫启慧、张瑞雪'},
  {label: '指导教师', text: '白云飞老师'},
  {label: '技术栈', text: 'html、css、javascript、vue'},
  {label: '组件库', text: 'element-ui、艾恩小灰灰'},
];

// 分支页面上的侧边导航栏
const aside = [
  {href: './典故.html', label: '典故'},
  {href: './动画.html', label: '动画'},
  {href: './乐曲.html', label: '乐曲'},
  {href: './插画.html', label: '插画'},
  {href: './美食.html', label: '美食'},
  {href: './诗歌.html', label: '诗歌'},
  {href: './文章.html', label: '文章'},
  {href: './vlog.html', label: 'vlog'},
];

// 首页的数据
const card = [
  {href: './views/典故.html', url: 'https://ts1.cn.mm.bing.net/th/id/R-C.84af093d6fd5bb8477c5277924b8a813?rik=%2bfK%2ffQHLLH7%2bug&riu=http%3a%2f%2fimg95.699pic.com%2fphoto%2f40169%2f2290.jpg_wh860.jpg&ehk=gbI5CyImTUXGcW3fPipPXoc%2b2TOnrBTX3ces%2ftkAVyA%3d&risl=&pid=ImgRaw&r=0', h: '典故', p: ''},
  {href: './views/动画.html', url: 'https://ts1.cn.mm.bing.net/th/id/R-C.97e559a0dd8aa358b47cbba2fd13b17c?rik=OiimVkYh%2fDRRZg&riu=http%3a%2f%2fimg95.699pic.com%2fphoto%2f40012%2f0327.jpg_wh860.jpg&ehk=my9cJbZqbRfhtjwEgETNwub8r8wFYYOoNb%2feFiolFFg%3d&risl=&pid=ImgRaw&r=0', h: '动画', p: ''},
  {href: './views/乐曲.html', url: 'https://ts1.cn.mm.bing.net/th/id/R-C.137d6bc389bb55698139b76047631f4b?rik=uUhejex7OEHpJQ&riu=http%3a%2f%2fimg95.699pic.com%2fphoto%2f40104%2f3700.jpg_wh860.jpg&ehk=TepZAF6Agah%2b4r8Q2XVdW3QyWSwbYWISxMk%2bR2WzXnQ%3d&risl=&pid=ImgRaw&r=0', h: '乐曲', p: ''},
  {href: './views/插画.html', url: 'https://ts1.cn.mm.bing.net/th/id/R-C.88eef4c857e08f63d28cca8acba0d8af?rik=bRJhbJKKFsW%2bfQ&riu=http%3a%2f%2fimg95.699pic.com%2fphoto%2f40011%2f2819.jpg_wh860.jpg&ehk=xvQy5VVXz2TD%2fYLScgauLZzRdTcZipkDFvsrel%2bHFx0%3d&risl=&pid=ImgRaw&r=0', h: '插画', p: ''},
  {href: './views/美食.html', url: 'https://img95.699pic.com/photo/50118/1594.jpg_wh860.jpg', h: '美食', p: ''},
  {href: './views/诗歌.html', url: 'https://img95.699pic.com/photo/40011/9161.jpg_wh860.jpg', h: '诗歌', p: ''},
  {href: './views/文章.html', url: 'https://ts1.cn.mm.bing.net/th/id/R-C.99f3c513384d0eca2ecfdf91196270c7?rik=n1CMiYB4aDBJ2w&riu=http%3a%2f%2fimg95.699pic.com%2fdesgin_photo%2f40104%2f6568_detail.jpg!detail860%2ffw%2f820%2fcrop%2f0x1309a0a0%2fquality%2f90&ehk=0SaNQohmyr6YyJboto2%2fVdk22%2bjUqqlRxlUFrytkXLM%3d&risl=&pid=ImgRaw&r=0', h: '文章', p: ''},
  {href: './views/vlog.html', url: 'https://img95.699pic.com/photo/50139/0741.jpg_wh860.jpg', h: 'vlog', p: ''},
];

// vlog页面的数据
const vlogs = [
  {img: '../assets/img/清明vlog-哔哩哔哩_Bilibili_3a387dbf.webp', h: '', p: '',href: 'https://www.bilibili.com/video/BV1cb41137ph?spm_id_from=333.337.search-card.all.click'},
  {img: '../assets/img/清明vlog-哔哩哔哩_Bilibili_41e696af.webp', h: '', p: '-', href: 'https://www.bilibili.com/video/BV14K4y1N7d6?spm_id_from=333.337.search-card.all.click'},
  {img: '../assets/img/清明vlog-哔哩哔哩_Bilibili_9212123b.webp', h: '', p: '',href: 'https://www.bilibili.com/video/BV1Xt4y1y7i7?spm_id_from=333.337.search-card.all.click'},
  {img: '../assets/img/清明vlog-哔哩哔哩_Bilibili_b92f748b.webp', h: '', p: '清明VLOG',href: 'https://www.bilibili.com/video/BV1ki4y1D7Qj?spm_id_from=333.337.search-card.all.click'},
  {img: '../assets/img/清明vlog-哔哩哔哩_Bilibili.webp', h: '', p: '',href: 'https://www.bilibili.com/video/BV1D5411m7J7?spm_id_from=333.337.search-card.all.click'}
];

// 典故页面的数据
const allusion = {
  title: ['割股充饥、割肉奉君','禁火冷食','寒食飞花','祓除修禊、祓除衅浴','临水浮卵、临水浮枣','井井有条'],
  content: [
    '最早见于西汉桓谭《新论·卷十一·离事》：春秋时期，晋国公子重耳为躲避祸乱而流亡他国长达十九年，大臣介子推追随左右、忠贞不二，历尽千难万难甚至"割股啖君"。重耳励精图治，成为一代名君"晋文公"。但介子推不求利禄，与母亲归隐绵山，晋文公为了迫其出山相见而下令三面放火烧山，介子推坚决不出山、最终被火焚而死。晋文公感念忠臣之志，将其葬于绵山，修祠立庙，并下令在介子推死难之日禁火寒食，以寄哀思。这就是"寒食节"的由来。',
    '在古代寒食禁火，只能吃冷食，家家户户在节前就纷纷制作甜干饼、锅摊饼、冷粥以便下咽充饥。',
    '出自唐代韩翃《七绝.寒食》: 春城无处不飞花，寒食东风御柳斜。 日暮汉宫传蜡烛，轻烟散入五侯家。',
    '为上巳节主要活动。“ 祓除”即是“修禊”之意，“修禊”最初是在河边举行招魂的消灾祛病仪式，后来逐步演变成水边嬉游，雅聚吟唱的一种民间聚会。魏晋以后，上巳节固定为三月三，后代沿袭，便成了汉族水边饮宴、郊外游春的节日。如王羲之在《兰亭集序》写道：“暮春之初，会于会稽山阴之兰亭，修禊事也。”女巫职掌每年祓除仪式，为人们衅浴除灾。衅浴，谓以香薰草药沐浴。',
    '在上巳节中还有临水浮卵、水上浮枣和曲水流觞三种活动。其中以临水浮卵最为古老，它是将煮熟的鸡蛋放在河水中，任其浮移，谁拾到谁食之。水上浮枣和曲水流觞则是由临水浮卵演变来的。不过，这是一种比较文明的孕育巫术。曲水流觞和临水饮宴则是这种巫术的演变，成为文人雅士的娱乐活动。',
    '清明节的折柳、戴柳的习俗，后来就演化为把柳条插在井边。“井井有条”的成语即源出于此，这也是清明节植树的起源。'
  ]
};

// 插画页面的数据
const pic = [
  'https://img.zcool.cn/community/01ffaa5ca6bba9a801208f8bb99398.png@1280w_1l_2o_100sh.png',
  'https://tse1-mm.cn.bing.net/th/id/OIP-C.PKWomZqM4Rq_VdGzmMMTLgHaJ3?pid=ImgDet&rs=1',
  'https://img.zcool.cn/community/01104b5c9b1c38a80121416817b65e.jpg@1280w_1l_2o_100sh.jpg',
  'https://img.zcool.cn/community/01a0335ca8d41fa801208f8bedefad.jpg@1280w_1l_2o_100sh.jpg',
  'https://img.zcool.cn/community/01747b5ca6a5a0a801214168549e7e.jpg@1280w_1l_2o_100sh.jpg',
  'https://img.zcool.cn/community/01f439606b185511013e87f4e198d0.jpg@1280w_1l_2o_100sh.jpg'
];

// 美食页面的数据
const food = {
  urls: [
    'https://tse1-mm.cn.bing.net/th/id/OIP-C.WPaSoPvB7J5FwG1FD0NeBgHaFj?pid=ImgDet&rs=1',
    'https://img95.699pic.com/photo/50173/3218.jpg_wh860.jpg',
    'https://ts1.cn.mm.bing.net/th/id/R-C.2869e03b9f5d65b3d8882eeeab00e7e4?rik=l7pdkDeVoe8q%2fQ&riu=http%3a%2f%2fcp1.douguo.net%2fupload%2fcaiku%2f2%2ff%2f3%2fyuan_2f6cda7132c5a9f643f9b1cd2b735cf3.jpg&ehk=6kUcp%2bQh8pmvocjV8PqqDrtFOxqL5bgZatHbBPbm8rY%3d&risl=&pid=ImgRaw&r=0',
    'https://pic2.zhimg.com/v2-42c5e57e41c31e3dad31b8f3548bc78d_r.jpg',
    'https://tse1-mm.cn.bing.net/th/id/OIP-C.EmJYvz5fOwX9rvxcmUgnTwHaE8?pid=ImgDet&rs=1'
  ],
  texts: [
    {title: '青团', content: '也称“清明果”、“艾米果”，是南方清明节的主要美食，主要用艾叶的汁液和糯米粉制作成外皮，里面添加豆沙、咸蛋黄、肉松之类的馅料，最后蒸制而成。青团看着碧绿，闻着有艾草的清香，吃起来口感清甜又软糯。艾叶既可食用也能入药，用艾叶做青团，在清明时节吃，可以帮助身体抵抗寒气；不过，现在的青团，有些并不是用艾叶，而是用浆麦草或者绿叶蔬菜汁来代替，青团也更多地被人们用来当作春游踏青的小吃了。'},
    {title: '艾粄（bǎn）', content: '也叫“青粄”，是客家人必备的清明传统小食。因为俗话说“清明前后吃艾粄，一年四季不生病”。和青团的做法类似， 艾粄也是用艾草的汁液与糯米粉一起和成团，再包入芝麻、白糖、眉豆、花生等馅料，捏成圆形、长形，最后蒸熟。'},
    {title: '暖菇包', content: '在福建，清明时用田间地头长满的暖菇（鼠曲草）的汁液拌进糯米粉里，再包裹上豆沙、腊肉、笋丁等馅料，上锅蒸制而成，做好的暖菇包也是青绿诱人，还带有清淡而悠长的青草香气。'},
    {title: '蒿子粑粑', content: '在江南、江淮一带，用蒿子（不同于艾草）和糯米粉、大米粉（或者面粉）为主要原料，或者再加入爱吃的馅料，蒸熟或者煎炸熟。吃起来鲜香味美。'},
    {title: '面燕', content: '“清明燕，端午蛋，正月十五捏豆面”。在江浙、山东等地，清明正是燕子回迁的时节，人们会用以面粉、牛奶、糖、酵母、鸡蛋为主要食材做出燕子形状的馒头，一方面象征着迎接春天的到来，另一方面，也寓意着新的一年风调雨顺，丰收在旺。据说在清明节燕子从南方回来了，落在谁家的粮囤上，就会给哪家带来丰收。'}
  ]
};

// 歌曲页面的数据
const music = {
  albums: ['傲日其愣 - 清明雨','师说含 - 清明上河图 (女声版)','喜儿乐学 - 清明 (古诗)','月梢 - 清明雨上 (cover# 杨茵茵)','周玥 - 丁香花'],
  track_names: ['傲日其愣 - 清明雨','师说含 - 清明上河图 (女声版)','喜儿乐学 - 清明 (古诗)','月梢 - 清明雨上 (cover# 杨茵茵)','周玥 - 丁香花']
};

// 诗歌页面的数据
const poetry = [
  {
    color: 'rgba(240, 128, 128, 0.5)',
    h1:'清明',
    h4:'唐·杜牧',
    p:[
      '清明时节雨纷纷，路上行人欲断魂。',
      '借问酒家何处有？牧童遥指杏花村。',
      '',
      '',
      ''
    ]
  },
  {
    color: 'rgba(32, 178, 171, 0.5)',
    h1:'清明日',
    h4:'唐·温庭筠',
    p:[
      '清娥画扇中，春树郁金红。',
      '出犯繁花露，归穿弱柳风。',
      '马骄偏避幰，鸡骇乍开笼。',
      '柘弹何人发，黄鹂隔故宫。'
    ]
  },
  {
    color: 'rgba(255, 160, 122, 0.5)',
    h1:'庆东原·暖日宜乘轿',
    h4:'元 白朴',
    p:[
      '暖日宜乘轿，春风堪信马。',
      '恰寒食有二百处秋千架。',
      '对人娇杏花，扑人飞柳花，迎人笑桃花。',
      '来往画船边，招飐青旗挂。'
    ]
  },
  {
    color: 'rgba(135, 206, 250, 0.5)',
    h1:'清明日对酒',
    h4:'宋朝·高翥',
    p:[
      '南北山头多墓田，清明祭扫各纷然。',
      '纸灰飞作白蝴蝶，泪血染成红杜鹃。',
      '日落狐狸眠冢上，夜归儿女笑灯前。',
      '人生有酒须当醉，一滴何曾到九泉。'
    ]
  },
  {
    color: 'rgba(240, 128, 128, 0.5)',
    h1:'点绛唇·时霎清明',
    h4:'宋朝·吴文英',
    p:[
      '时霎清明，载花不过西园路。',
      '嫩阴绿树。正是春留处。',
      '燕子重来，往事东流去。',
      '征衫贮，旧寒一缕，泪湿风帘絮。。'
    ]
  },
  {
    color: 'rgba(32, 178, 171, 0.5)',
    h1:'清明日独酌',
    h4:'宋朝·王禹偁',
    p:[
      '一郡官闲唯副使，一年冷节是清明。',
      '春来春去何时尽，闲恨闲愁触处生。',
      '漆燕黄鹂夸舌健，柳花榆荚斗身轻。',
      '脱衣换得商山酒，笑把离骚独自倾。'
    ]
  },
  {
    color: 'rgba(255, 160, 122, 0.5)',
    h1:'清明日与友人游玉粒塘庄',
    h4:'唐朝·来鹄',
    p:[
      '几宿春山逐陆郎，清明时节好烟光。',
      '归穿细荇船头滑，醉踏残花屐齿香。',
      '风急岭云飘迥野，雨余田水落方塘。',
      '不堪吟罢东回首，满耳蛙声正夕阳。'
    ]
  },
  {
    color: 'rgba(135, 206, 250, 0.5)',
    h1:'喜迁莺·清明节',
    h4:'唐朝·薛昭蕴',
    p:[
      '清明节，雨晴天，得意正当年。',
      '马骄泥软锦连乾，香袖半笼鞭。',
      '花色融，人竟赏，尽是绣鞍朱鞅。',
      '日斜无计更留连，归路草和烟。'
    ]
  },
];

// 文章页面的数据
const article = [
  {
    title: '经典文章篇【1】',
    p: [
      '清明踏春好，快乐指数高;小脚很可爱，高跟鞋拜拜;天气易突变，雨具随身带;花粉易过敏，远离莫久待;补充水果菜，感冒不袭来。朋友健康，我最关怀!',
      '清明时节，思绪满怀。曾经一起，笑闹江湖。昔日亲朋，天各一方。梦中泪洒，醉酒当歌。祈求苍天，灵魂驰骋。但愿依旧，不忘拥有。',
      '绵绵的春雨淅淅沥沥地下个不停，落在泥土里，落在每个人的心里。又是一年的清明节，伴着春雨，伴着忧伤，来到了这个冷清的世界。',
      '清明时节扫墓忙，传统节日要发扬。丝丝春雨柳丝荡，祭祖路上人断肠。默默怀念祖忧伤，哀哀常使泪两行。孝心纸钱已点上，袅袅飞烟祭苍黄。劝友节哀得健康，列祖福荫永辉煌!',
      '清明时节雨纷纷，路上行人欲断魂。流着泪写下了这篇文，怀念美丽的枫杨，怀念可爱的小松鼠，怀念鸟儿们快乐的歌唱，怀念人与大自然和谐相处的美好时光!',
      '清明时节雨茫茫，郊外行人心惆怅。凭吊英魂反故乡，轻风吹拂短松冈。心头思念泪两行，祭拜先祖跪坟旁。劝君孝顺待亲旁，莫待离别隔阴阳。'
    ]
  },
  {
    title: '经典文章篇【2】',
    p: [
      '近了，渐渐近了。我的眼前是一片朦朦胧胧的绿色，还有那寥远的飞鸟。清明的微风是那样柔软温和，刚下车，它就忍不住给了我一个拥抱，阳光也无声无息地抚慰着我，田间弥漫着一股浓香。',
      '命中，总会有人缺席;以前拥有的，原来轻若尘埃;幸福很脆弱，每个人只是站在中转站;把过去一页轻翻，幸福只跟自己有关。清明节近，祝你一切遂愿!',
      '人间四月芳菲日，清明爽朗一片天，踏青赏花多自在，自在娇莺洽洽啼。飞燕杨柳弄碧柔，快乐从脚笑到头。清明时节不飞雨，幸福健康送给你!',
      '清明的雨，是那么细，像牛毛，像花针，像细丝。有时密密的斜织着，像一块无色的丝布;有时直往下掉，像一个个无色透明的降落伞快速地降落。',
      '清明节，小雨纷飞，无家可归的鸟儿们，满天乱飞，鸣声不断，那如泣如诉的叫唤，怎不叫人肝肠寸断?'
    ]
  },
  {
    title: '经典文章篇【3】',
    p: [
      '清明到，细雨打着祝福的旗号，冲你微笑，小草顶着问候的满意，向你问好，放下昔日的忧伤迷离，向乐观看齐，愿你四季平安，万事顺心，清明节快乐。',
      '清明节，一缕青烟轻盈我们生活的自在，一片绿草呼吸我们幸福的开怀，愿你美丽常在，祝你健康愉快。',
      '阵阵春风吹绿芽，缕缕春光明心扉;丝丝春雨润万物，声声问候暖情怀。清明节了，只言片语伴随你，愿你照顾好自己，关心亲人和好友，平安健康!',
      '清明节，让我们在这样一个特殊的节日里，对生命有一个新的认识。',
      '清明时节雨纷纷，路上行人欲断魂。借问酒家何处有，牧童遥指杏花村。”每当吟诵起这首诗的时候，我就会想起死去的人们，他们带给我无限的怀念。',
      '清明节到了，每每看见一束束鲜花插在坟头，就知道又有一个生命永远离我们远去，而他们且可以远离这充满险恶的人世间，也未常不是一件好事，唉，人死并不可怕，可怕的是有时生死并不能由你自己',
      '清明时节故人忆，绵绵思绪难自已。回首往事情依依，更添悲情人哭泣。鲜花纸钱坟前祭，只愿天堂无别离。保佑生者体康健，快乐幸福直到底!',
      '雨一直下，一丝，两丝，三丝，形成一滴滴冰冷的水滴痛滴在小草上，最终变成地下人那苦苦相思的泪水，那不是小草在流泪!是地下人在流泪啊!这泪水晶莹剔透，这泪水里饱含着相思之苦。',
      '清明雨上的那年，你踏青而至，一股暖风，激起我心海一串涟漪，从此再难平息。遇见你、是缘，亦是劫。',
      '用清淡的语言酿造一杯浊酒，和朋友邀约，用清淡的素音冲泡一杯淡茶，和朋友聊聊天，清明节，放下忙碌的时间，给自己一点放松的空间。',
    ]
  }
];
