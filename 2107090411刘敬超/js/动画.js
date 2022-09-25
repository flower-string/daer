let video = document.querySelector('#my_video');
		//视频可以播放时，初始化控制面板上的数据
		video.oncanplay = function () {
			//默认为等待图标 显示视频内容
			video.style.display = 'inline-block';
			//设置默认音量
			video.volume = 0.5;
			//获取视频总时长
			let total_time = formatTime(video.duration);
			document.querySelector('#total_time').innerHTML = total_time;
		};

		//视频在播放过程中更改播放进度条
		video.ontimeupdate = function () {
			let current_time = video.currentTime;
			let total_time = video.duration;
			document.querySelector('#current_time').innerHTML = formatTime(current_time);
			//进度百分比
			let w = document.querySelector('.total_progress').clientWidth;
			document.querySelector('.current_progress').style.width = (current_time / total_time) * w + 'px';
		}

		//播放完毕的时候，把播放时间回到初始位置
		video.onended = function () {
			video.currentTime = 0;
			document.querySelector('.player_btn i').classList.remove('fa-stop');
			document.querySelector('.player_btn i').classList.add('fa-play');
		}


		//点击进度条进行跳播
		document.querySelector('.bar').onclick = function (e) {
			//获取总长度
			let w = this.clientWidth;
			//获取鼠标偏移量
			let c_w = e.offsetX;

			//根据偏移量获取总时间的百分比
			let now_time = video.duration * (c_w / w);
			video.currentTime = now_time;

		}

		//控制音量组件显示/隐藏
		document.querySelector('.fa-volume-up').onclick = function (e) {
			if (this.classList.contains('active')) {
				this.classList.remove('active');
				document.querySelector('.volume_bar_box').style.display = 'none';
			} else {
				this.classList.add('active');
				document.querySelector('.volume_bar_box').style.display = 'block';
			}

			//阻止冒泡事件
			e.stopPropagation();
			e.preventDefault();
		}

		//收起音量设置控制条
		document.onclick = function () {
			document.querySelector('.fa-volume-up').classList.remove('active');
			document.querySelector('.volume_bar_box').style.display = 'none';
		}

		//设置音量大小
		document.querySelector('.volume_proress_bar').onclick = function (e) {
			let h = this.clientHeight;
			let c_h = h - e.offsetY;
			//设置音量
			video.volume = c_h / h;
			//设置对应的音量高度
			document.querySelector('.volume_proress_now').style.height = c_h + 'px';
			document.querySelector('.volume_proress_now').style.top = -c_h + 'px';
			e.stopPropagation();
			e.preventDefault();
		}

		// 点击播放时
		document.querySelector('.player_btn').onclick = function () {
			if (video.paused) {
				video.play();
				document.querySelector('.player_btn i').classList.remove('fa-play');
				document.querySelector('.player_btn i').classList.add('fa-stop');
			} else {
				video.pause();
				document.querySelector('.player_btn i').classList.remove('fa-stop');
				document.querySelector('.player_btn i').classList.add('fa-play');
			}
		}

		//全屏切换
		document.querySelector('.pull_btn').onclick = function () {
			let player = document.querySelector('.player');
			let flag = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.oFullscreenElement;

			if (flag) {//全屏状态
				//兼容性问题
				if (document.cancelFullScreen) {
					document.cancelFullScreen();
				} else if (document.webkitCancelFullScreen) {//chome
					document.webkitCancelFullScreen();
				} else if (document.mozCancelFullScreen) {//fox
					document.mozCancelFullScreen();
				} else if (document.msCancelFullScreen) {//ie
					document.msCancelFullScreen();
				} else if (document.oCancelFullScreen) {//opera
					document.oCancelFullScreen();
				}

				//窗口大小设置
				document.querySelector('.show').style.height = 370 + 'px';
				document.querySelector('.total_progress').style.width = 127+ 'px';

				//切换图标
				document.querySelector('.pull_btn i').classList.remove('fa-compress');
				document.querySelector('.pull_btn i').classList.add('fa-arrows-alt');
			} else {
				//兼容性问题
				if (player.requestFullScreen) {
					player.requestFullscreen();
				} else if (player.webkitRequestFullScreen) {//chome
					player.webkitRequestFullScreen();
				} else if (player.mozRequestFullScreen) {//fox
					player.mozRequestFullScreen();
				} else if (player.msRequestFullScreen) {//ie
					player.msRequestFullScreen();
				} else if (player.oRequestFullScreen) {//opera
					player.oRequestFullScreen();
				}
				//窗口大小设置
				document.querySelector('.show').style.height = window.outerHeight - 40 + 'px';
				document.querySelector('.total_progress').style.width = window.innerWidth - 270 + 'px';
				//切换图标
				document.querySelector('.pull_btn i').classList.remove('fa-arrows-alt');
				document.querySelector('.pull_btn i').classList.add('fa-compress');
			}
		}

		//解决esc或h5全屏自带的退出无法恢复原大小问题
		window.onresize = function () {
			let flag = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.oFullscreenElement;
			if (!flag) {
				//窗口大小设置
				document.querySelector('.show').style.height = 370 + 'px';
				document.querySelector('.total_progress').style.width = 127 + 'px';

				//切换图标
				document.querySelector('.pull_btn i').classList.remove('fa-compress');
				document.querySelector('.pull_btn i').classList.add('fa-arrows-alt');
			}
		}



	//时间格式化 参数-秒
	function formatTime(time) {
		if (typeof (time) !== "number") {
			return '00:00:00';
		}

		//获取hour
		let hour = parseInt(time / (60 * 60));
		hour = hour < 10 ? '0' + hour : hour;

		//获取分钟
		let minute = parseInt(time % (60 * 60) / 60);
		minute = minute < 10 ? '0' + minute : minute;

		//获取秒钟
		let second = Math.ceil(time % 60);
		second = second < 10 ? '0' + second : second;

		return `${hour}:${minute}:${second}`;
  }