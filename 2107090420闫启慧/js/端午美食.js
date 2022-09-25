// 获取需要操作的元素
        const urls = [
          'https://pics4.baidu.com/feed/1c950a7b02087bf4836478ae1265f72410dfcf28.jpeg?token=8fb10091b8153666804670605aea7e0a',
          'https://pics3.baidu.com/feed/4bed2e738bd4b31c7c193ff45e6087779f2ff89c.jpeg?token=19c4bb36b227234387559b04adf1a801',
          'https://pics7.baidu.com/feed/caef76094b36acafad0cd0199c6f2d1803e99ca2.jpeg?token=e53bac2ed282894bb98420008001c668',
          'https://pics3.baidu.com/feed/eac4b74543a98226861d28676a3419094890ebd5.jpeg?token=acd26a0ec6a34b9d94a19d7fb34ab604',
          'https://pics3.baidu.com/feed/4bed2e738bd4b31c683a03aa666087779f2ff8d9.jpeg?token=69fa9b107c14976ab599883def696a48'
        ]
        const texts = [
          {title: '粽子', content: '端午节第一美食当属粽子了。粽子是由棕叶包裹上糯米蒸煮做成的。由于我国南北方饮食的差异，在棕叶和粽子食材的选择上也有些不同。南方人习惯用竹叶，有些地方还会用荷叶来作为棕叶，棕子口味比较多，以咸棕为主，内里包裹火腿，鲜肉，蛋黄，冬菇等馅料。而北方人习惯用苇叶来包，以甜棕为主，内里包裹红枣，豆沙等馅料。除此之外还有咸辣口的小川棕。'},
          {title: '咸鸭蛋', content: '老一辈人讲究端午节吃咸鸭蛋可以避邪祛暑。这话有一定道理，端午前后，天气炎热，温度较高，此时人们往往食欲下降，此时来上一个咸鸭蛋可以增进食欲。加上清明螺，肥如鹅，此时的鸭子吃着大量的营养丰富的肥螺，产出的蛋营养价值更高，味道也更香，所以才有端午咸鸭蛋赛螃蟹之说。端午节吃咸鸭蛋可以清肺火，而且因为咸味入肾，还具有滋阴养肾的功效。'},
          {title: '五毒饼', content: '五毒饼也是端午节一种特色食品。因为一入夏，各种毒物就开始滋生活跃，人们将祈求健康，驱除五毒，强身健体的美好意愿寄托在五毒饼上。五毒饼听起来可怕，饼皮刻有蛤蟆、蝎子、壁虎、蛇、蜈蚣这五种毒物，看起来吓人，其实就是玫瑰饼，里面是用豆沙，枣泥，玫瑰做馅，皮酥馅软，吃起来甜蜜绵软，是种典型的“铁面柔肠”馅饼。在端午吃五毒饼能够解毒清心，软化血管，营养又有特色。'},
          {title: '糖蒜', content: '大家都知道大蒜可以消炎杀菌，但是生吃辛辣烧心，没几人能受得了。不过将大蒜用糖腌制后，就会起奇妙的化学反应，蒜的辛辣味减轻很多，吃起来清脆爽口。端午过后，天气越来越炎热，人容易上火，家里备些糖蒜，吃上些有着清火之效，在端午节，给家中的小孩吃上一个糖蒜，还有着给孩子“败毒”的美好寓意。'},
          {title: '绿豆糕', content: '在南京，西安，武汉等地区人们还有在端午节这天吃绿豆糕的习惯。端午过后暑气日重，人们容易感到疲惫，而绿豆可是清热解暑的天然食材，用绿豆做成的糕点细腻香甜，大人小孩子都可以吃。'}
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