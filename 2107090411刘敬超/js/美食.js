// 获取需要操作的元素
        const { urls , texts } = food
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