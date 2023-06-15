window.addEventListener('load', function () {
    /* chrome 禁止了用户与页面没交互之前就自动播放 音乐 */

    /* 音乐歌曲对象个数 */
    let sum_music_obj = music_obj.length
    // 小圆背景
    let img_bg = $('.img').children[0]
    /* 获取audio DOM */
    let music = $('.aud')
    /* 获取音乐信息 DOM */
    let music_h3 = $('.h3')
    /* 定义歌曲对象 */
    let obj
    /* 定义当前对象的索引 */
    let index = ran(sum_music_obj)
    /* 音乐状态 */
    let music_status = false
    /* 定义播放顺序 的 状态 */
    let play_order = 'shun',
        play_order_index = 0
    /* 音乐时间的 DOM */
    let current = $('.current')
    let total = $('.total')
    /* 定义定时器 */
    let timer
    /* 音乐进度点 */
    let during_point = $('.during_point')
    /* 音乐进度条 */
    let during_mask = $('.during_mask')
    /* 音乐进度条总长度 */
    let during = $('.during')
    /* 进度点 初始化 坐标 */
    let x = during.offsetLeft
        + during.offsetParent.offsetLeft
        + during.offsetParent.offsetParent.offsetLeft
    /* 声音控件 DOM*/
    let alume_point = $('.alume')
    /* 定义当前音量 */
    let music_volume = 1
    /* 音量总长度、音量点、音量mask  DOM */
    let alume_control = $('.alume_control'),
        alume_control_point = $('.alume_point'),
        alume_mask = $('.alume_mask')
    /* 音量移动距离 */
    let current_x_yin
    /* 初始音量点的位置 */
    let x_yin = alume_control.offsetLeft
        + alume_control.offsetParent.offsetLeft
        + alume_control.offsetParent.offsetParent.offsetLeft
        + alume_control.offsetParent.offsetParent.offsetParent.offsetLeft
    /* 初始化上下键 控制 音量移动 量 */
    let key_yin_move = 53
    /* 音量按钮点击 */
    alume_point.addEventListener('click', function () {
        if (music.volume != 0) {
            music.volume = 0
            alume_point.style.backgroundPosition = '0px -180px'
        } else {
            music.volume = music_volume
            alume_point.style.backgroundPosition = '0px -142px'

        }
    })
    /* 在音量控制条上点击 */
    alume_control.addEventListener('click', function (e) {
        current_x_yin = e.pageX - x_yin
        if (current_x_yin > 53) {
            current_x_yin = 53
        } else if (current_x_yin < 0) {
            current_x_yin = 0
        }
        alume_control_point.style.left = current_x_yin + 'px'
        key_yin_move = current_x_yin /* 方便上下键点击 的连续性 */
        alume_mask.style.width = current_x_yin + 3 + 'px'
        music.volume = current_x_yin / 53
        // 改变音量图标
        if (music.volume != 0) {
            alume_point.style.backgroundPosition = '0px -142px'
        }
        if (music.volume == 0) {
            alume_point.style.backgroundPosition = '0px -180px'
        }
        music_volume = music.volume /* music_volume 存储当前音量 */


    })
    /* 音量点击拖拽事件 */
    alume_control_point.addEventListener('mousedown', alume_control_point_mousedown)
    /* 在音乐进度条点击 */
    during.addEventListener('click', function (e) {
        let during_x = e.pageX - x
        during_point.style.left = during_x + 'px'
        during_mask.style.width = during_x + 'px'
        music.currentTime = (during_mask.offsetWidth / during.offsetWidth) * music.duration /* 改变音乐播放的当前时间 */
    })
    /* 音乐进度点拖拽的 位移 */
    let move
    /* 音乐进度点拖拽 */
    during_point.addEventListener('mousedown', during_point_mousedown) /* 鼠标按下 */
    /*  play DOM */
    let play_btm = $('.play')
    play_btm.addEventListener('click', function () {
        //判读是否播放 
        if (!music_status) {
            ispaly()
        } else {
            ispuase()
        }
    })
    /* 键盘 空格 打开音乐 */
    this.document.addEventListener('keyup', function (e) {
        if (e.keyCode == 32) {
            play_btm.click()
        }
    })
    // 鼠标上下键加减声音
    this.document.addEventListener('keydown', function (e) {
        // 按下键盘向上的键
        if (e.keyCode == 38) {
            if (key_yin_move >= 53)
                key_yin_move = 53
            else
                key_yin_move += 5
        }
        /*  */
        else if (e.keyCode == 40) {
            if (key_yin_move <=0)
                key_yin_move = 0
            else
                key_yin_move -= 5
        }
        alume_control_point.style.left = key_yin_move + 'px'
        alume_mask.style.width = key_yin_move + 'px'
        music.volume = key_yin_move / 53
        // 改变音量图标
        if (music.volume > 0) {
            alume_point.style.backgroundPosition = '0px -142px'
        }
        if (music.volume == 0) {
            alume_point.style.backgroundPosition = '0px -180px'
        }
        music_volume = music.volume /* music_volume 存储当前音量 */
    })
    /* 播放顺序 DOM play_order */
    let play_order_btm = $('.play_order')
    play_order_btm.addEventListener('click', function () {
        switch (play_order_index) {
            case 0: {
                play_order_index++
                play_order = 'sui'
                play_order_btm.style.backgroundPosition = '0px -72px'
            }
                break;
            case 1: {
                play_order_index++
                play_order = 'only'
                play_order_btm.style.backgroundPosition = '0px -230px'
            }
                break;
            case 2: {
                play_order_index = 0
                play_order = 'shun'
                play_order_btm.style.backgroundPosition = '0px -205px'
            }
        }
    })
    /* 上一首  pre DOM*/
    let pre_btm = $('.pre')
    pre_btm.addEventListener('click', function () {
        switch (play_order) {
            case 'shun':
                {
                    if (index > 0) {
                        index--
                    } else if (index <= 0) {
                        index = sum_music_obj - 1
                    }
                }
                init()
                ispaly()
                break;
            case 'sui':
                {
                    if (ran(sum_music_obj - 1 != index)) {
                        index = ran(sum_music_obj)
                    }
                }
                init()
                ispaly()
                break;
            case 'only': {
                index = index
            }
                init()
                ispaly()
                break;
        }
    })
    /* next 下一首 DOM  */
    let next_btm = $('.next')
    next_btm.addEventListener('click', function () {
        switch (play_order) {
            case 'shun':
                {
                    if (index < sum_music_obj - 1) {
                        index++
                    } else if (index >= sum_music_obj - 1) {
                        index = 0
                    }
                }
                init()
                ispaly()
                break;
            case 'sui':
                {
                    let sui = ran(sum_music_obj)
                    if (sui == index) {
                        sui = ran(sum_music_obj)
                        index = sui
                    } else {
                        index = sui
                    }
                }
                init()
                ispaly()
                break;
            case 'only': {
                index = index
            }
                init()
                ispaly()
                break;
        }
    })
    /* 音量点击回调 */
    function alume_control_point_mousedown(e) {
        e.preventDefault()
        document.addEventListener('mousemove', alume_control_point_mousemove)
        document.addEventListener('mouseup', alume_control_point_mouseup)
    }
    /* 音量点移动事件回调 */
    function alume_control_point_mousemove(e) {
        current_x_yin = e.pageX - x_yin
        if (current_x_yin < 0) {
            current_x_yin = 0
        } else if (current_x_yin > 53) {
            current_x_yin = 53
        }
        alume_control_point.style.left = current_x_yin + 'px'
        key_yin_move = current_x_yin /* 方便上下键点击 的连续性 */
        alume_mask.style.width = current_x_yin + 3 + 'px'
    }
    /* 音量点移动抬起事件回调 */
    function alume_control_point_mouseup(e) {
        document.removeEventListener('mousemove', alume_control_point_mousemove)
        document.removeEventListener('mouseup', alume_control_point_mouseup)
        music.volume = current_x_yin / 53

        if (music.volume != 0) {
            alume_point.style.backgroundPosition = '0px -142px'
        }
        // 假如音量为 0 改变音量图片
        if (music.volume == 0) {
            alume_point.style.backgroundPosition = '0px -180px'
        }
        music_volume = music.volume /* music_volume 存储当前音量 */
    }
    /* 进度点鼠标按下函数 */
    function during_point_mousedown(e) {
        e.preventDefault()
        document.addEventListener('mousemove', during_point_mousemove)
        document.addEventListener('mouseup', during_point_mouseup)
    }
    /* 点击鼠标点抬起事件 */
    function during_point_mouseup(e) {
        document.removeEventListener('mousemove', during_point_mousemove)
        music.currentTime = (during_mask.offsetWidth / during.offsetWidth) * music.duration /* 改变音乐播放的当前时间 */
        document.removeEventListener('mouseup', during_point_mouseup)
    }
    /* 进度点鼠标移动事件 */
    function during_point_mousemove(e) {
        move = e.pageX - x
        let currentX = move
        if (currentX < 0) {
            currentX = 0
        } else if (currentX > 172) {
            currentX = 172
        }
        during_point.style.left = currentX + 'px'
        during_mask.style.width = currentX + 'px'
    }
    /* 定义音乐播放函数 */
    function ispaly() {
        clearInterval(timer) /* 清除定时器 否则可能会定时器叠加*/
        music_status = true
        music.play()
        play_btm.style.backgroundPosition = '-30px 0'
        img_bg.style.animationPlayState = 'running' /* 动画继续 */
        timer = setInterval(() => {
            during_point.style.left = (music.currentTime / music.duration) * during.offsetWidth + 'px'
            current.innerText = durationTrans(music.currentTime)
            during_mask.style.width = (music.currentTime / music.duration) * during.offsetWidth + 'px'
            /* 假如 当前时间 === 音乐总时间 ---- 下一首 */
            if (durationTrans(music.currentTime) == durationTrans(music.duration)) {
                autoNext()
            }
        }, 1000)
    }
    /* 定义自动播放下一首 */
    function autoNext() {
        next_btm.click()
    }
    /* 音乐 暂停函数*/
    function ispuase() {
        clearInterval(timer) /* 清除定时器 */
        music_status = false
        music.pause()
        play_btm.style.backgroundPosition = '0 0'
        img_bg.style.animationPlayState = 'paused' /* 让动画暂停 */
    }
    /* 定义 初始化函数*/
    function init() {
        obj = music_obj[index]
        music_h3.innerText = obj.music_text
        music.src = obj.music_url
        /* 音乐位置初始化 */
        during_point.style.left = 0 + 'px'
        during_mask.style.width = 0 + 'px'
        /* 音量位置初始化 */
        alume_control_point.style.left = music.volume / 1 * 53 + 'px'
        alume_mask.style.width = music.volume / 1 * 53 + 'px'
        img_bg.style.animationPlayState = 'paused' /* 让动画暂停 */
        /* 初始化 音乐时间 */
        setTimeout(() => {
            current.innerText = durationTrans(music.currentTime)
            total.innerText = ' / ' + durationTrans(music.duration)
        }, 450)
    }
    // 时长转换
    function durationTrans(a) {
        var b = ""
        var h = parseInt(a / 3600),
            m = parseInt(a % 3600 / 60),
            s = parseInt(a % 3600 % 60);
        if (h > 0) {
            h = h < 10 ? '0' + h : h
            b += h + ":"
        }
        m = m < 10 ? '0' + m : m
        s = s < 10 ? '0' + s : s
        b += m + ":" + s
        return b;
    }
    /* 封装获取随机数 */
    function ran(num) {
        return parseInt(Math.random() * num)
    }
    /* 封装获取DOM 元素 */
    function $(cla) {
        return document.querySelector(cla)
    }
    /* 初始化 */
    init()

    /* 页面大小改变*/
    window.addEventListener('resize', function () {
        // 更新 坐标
        /* 初始音量点的位置 */

        x_yin = alume_control.offsetLeft
            + alume_control.offsetParent.offsetLeft
            + alume_control.offsetParent.offsetParent.offsetLeft
            + alume_control.offsetParent.offsetParent.offsetParent.offsetLeft

        /* 进度点 初始化 坐标 */

        x = during.offsetLeft
            + during.offsetParent.offsetLeft
            + during.offsetParent.offsetParent.offsetLeft
    })
})