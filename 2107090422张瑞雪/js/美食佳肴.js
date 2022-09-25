// 获取需要操作的元素
const urls = [
    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp2.itc.cn%2Fq_70%2Fimages03%2F20210127%2Fb052e2e6759447b1ade70e4272454590.jpeg&refer=http%3A%2F%2Fp2.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665904136&t=e3bbdf1fdb66e930e2a532fe09b2d846',
    'https://resources.isheji.com/isheji-copyright/20220826/thumb/300/ISJ010405695618.jpg',
    'https://resources.isheji.com/isheji-copyright/20220825/thumb/300/ISJ016570536826.jpg',
    'https://resources.isheji.com/isheji-copyright/20220817/thumb/300/ISJ019834346212.jpg',
    'https://resources.isheji.com/isheji-copyright/20220823/thumb/300/ISJ016048781904.jpg'
  ]
  const texts = [
    {title: '油角', content: '油角是广州家常小吃的一种，各个地方口味不同，所用原料也不尽相同，有的是甜的，再有就是菜的，方法基本相同，就是所用陷料不同，甜的包糖，咸的换成蔬菜即可。在广东过年，油角少不了。以前，离春节还有十天廿日，家家户户就要开油镬，炸煎堆油角了。开开油镬炸些煎堆油角，是为求来年的日子也像那只油镬似的一油油润润、富富足足。'},
    {title: '春卷', content: '春卷也叫春饼，立春吃春饼是中国一种古老风俗。晋代已有“五芋盘”即“春盘”，是将春饼与饺子等菜同置一盘之内。唐宋时立春吃春饼之风渐盛，皇帝并以之赐近臣百官，当时的春盘极为讲究:“翠缕红丝，金鸡玉燕，备极精巧，每盘直万钱”。民间也用以互相馈赠。'},
    {title: '汤圆', content: '南方的元宵节庆食品叫做“汤圆”，在江苏，上海等地，大年初一早晨都有吃汤圆的习俗。元宵节，道教称之为“上元节”。元宵节吃元宵，是取“团团如月”的吉祥之意。清代康熙年间朝野盛行“八宝元宵”、马思远元宵。'},
    {title: '年糕', content: '年糕属于农历新年的应时食品，有红、黄、白三色，象征金银。一种用黏性大的糯米或米粉蒸成的糕，在南方有过年吃年糕的习惯，甜甜的粘粘的年糕，象征新一年生活甜蜜蜜，步步高。春节吃年糕，“义取年胜年，籍以祈岁稔。”寓意万事如意年年高。'},
    {title: '鱼',   content: '过年有鱼喻意年年有余。所以人们还特意不把鱼吃完，留到次日即新年，年年有余，去年的收获多，吃用不完，余到今年都还有，在物质贫乏的古代，这是人们对物质的渴望向往。成了现在的习俗。'}
  ]
  const h1 = document.querySelector('#text h1');
  const p = document.querySelector('#text p');
  // 左边大图
  let big_box=document.querySelector(".big-box img");
  // 图片集合
  let imgs=document.getElementsByClassName("img");
  // 定时器
  let timer=null;
  // 当前图片下标
  let index=0;

  // 重置函数
  function reset(){
      for(let i=0;i<imgs.length;i++){
          imgs[i].className="img";
      }
  }
  // 选中函数
  function selected(){
      reset();
      imgs[index].className="img active";
  }
  // 轮播函数
  function play(){
      timer=setInterval(function(){
          selected();
          index++;
          big_box.src=urls[index-1];
          h1.innerHTML = texts[index-1].title;
          p.innerHTML = texts[index-1].content;
          if(index==5){
              index=0;
          }
      },5000);
  }
  // 循环绑定每个小图片的鼠标移动事件
  for(let i=0;i<imgs.length;i++){
      // 鼠标移动到小图片上时触发
      imgs[i].onmousemove=function(){
          // 左边大图变成当前的小图片
          big_box.src=urls[i];
          h1.innerHTML = texts[i].title;
          p.innerHTML = texts[i].content;
          // 执行重置函数并关闭定时器
          reset();
          clearInterval(timer);
          // 更新当前图片下标并执行轮播
          index=i+1;
          if(index==5){
              index=0;
          }
          play();
      }
  }
  // 执行轮播
  play();