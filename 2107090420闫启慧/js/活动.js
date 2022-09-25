// 获取需要操作的元素
        const urls = [
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fa74f4f785c36641aa0f6dfb7bd5aa8892e77ee1939b36-0ublxL_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666171998&t=965bd355539bcdcfa47cce0c8b66eae7',
          'https://pics5.baidu.com/feed/b21bb051f8198618af79f5572ca1f0758ad4e6fe.jpeg?token=62265fcb0fb49d654b8c4c166bf4f51b',
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_bt%2F0%2F14929416585%2F641&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666172213&t=765253e27cfce58da1625343864aa0db',
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fp1.itc.cn%2Fq_70%2Fimages03%2F20210613%2F244963f487d7482ab1ee4cb9b0bffd69.png&refer=http%3A%2F%2Fp1.itc.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666172277&t=4037a125d3c1e9edd057354f95e0dad4',
          'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fm1-1253159997.image.myqcloud.com%2FimageDir%2F710dbe7fe0d30e2c4509d3eeb7bc6c74.jpg&refer=http%3A%2F%2Fm1-1253159997.image.myqcloud.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666172329&t=0f08ed4108b3a64302b0bcd4b6e0727e'
        ]
        const texts = [
          {title: '赛龙舟', content: '赛龙舟是多人集体划桨竞赛，是古代龙图腾祭祀的节仪，乃遗俗也。是端午节的一项重要活动，至今在我国南方沿海一带仍十分流行，传出国外后深受各国人民的喜爱，并形成了国际比赛。端午有龙舟，也有凤舟，凤舟是源于远古的乌舟，有的地方还有龙凤船。赛龙舟是民间信仰中龙崇拜的一种形式，即要借龙之神威祈福辟邪。'},
          {title: '挂艾草', content: '在端午节，人们把挂艾草作为重要内容之一，大家都洒扫庭除以艾草插于门楣挂于堂中。民间认为艾草还有避邪招百福的作用，端午期间挂艾草于门上相沿成习，遂成端午习俗。南北各地均有端午挂艾草习俗，南方视为天地纯阳正气吉日进行驱邪祛病。北方一些地方视为恶月恶日进行避恶避毒。'},
          {title: '祭神拜祖', content: '拜神祭祖是端午节重要习俗之一天，地者生之本也，祖者类之本也，天地是生命的根本，祖先是人类的根本，祭祖是一种传承孝道的习俗，按照民间的观念，自己的祖先和天地神一样，是应该认真顶礼膜拜的。因为列祖列宗的在天之灵时时刻刻的在关心和注视着后代的子孙们，城市的人们要通过祭祀来祈求和报答他们的庇护和保佑。'},
          {title: '佩香囊', content: '佩香囊是端午传统习俗之一，香囊内通常填充一些具有芳香开窍的中草药，有清香，驱虫，避温，防痛的功效，端阳以四色线系臂并佩戴香囊，小巧玲珑精致可观。香囊又叫香袋、香包、荷包，一般是内装香料，用五色丝线缠绕而成，或者采用彩色绸缎或布包上棉花，掺着川芎、白芷、排草、芩草、丁香、山艾、细辛、甘松，白芷，甘草，雄黄粉等中药粉， 再用彩绸扎秀而成，下边还垂上红绿青蓝紫等各种线穗，佩在胸前，香气扑鼻。'},
          {title: '挑“端午担”', content: '挑“端午担”指的是过去每逢过农历端午节，毛脚女婿要用披红挂彩的米箩筐，挑上一份厚重的礼品送到女方家里去，这便是挑“端午担”。'}
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