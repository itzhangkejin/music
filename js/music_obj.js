
/*  封装音乐对象 */

let music_obj = [
    {
        music_text: '周杰伦-晴天',
        music_url: './audioes/music_1.mp3'
    },
    {
        music_text: '周杰伦-告白气球',
        music_url: './audioes/music_2.mp3'
    },
    {
        music_text: '周杰伦-稻香',
        music_url: './audioes/music_3.mp3'
    },
    {
        music_text: '薛之谦 - 无数',
        music_url: './audioes/music_4.mp3'
    },
    {
        music_text: '轩姨（相信光）-缺氧',
        music_url: './audioes/music_5.mp3',
    },
    {
        music_text: '演员 - 薛之谦',
        music_url: './audioes/music_6.mp3',
    },
    {
        music_text: '纸船 - 薛之谦,郁可唯',
        music_url: './audioes/music_7.mp3',
    },
    {
        music_text: '你过得好吗 - 薛之谦',
        music_url: './audioes/music_8.mp3',
    },
    {
        music_text: '有没有 - 薛之谦',
        music_url: './audioes/music_9.mp3',
    },
    {
        music_text: '野心 - 薛之谦',
        music_url: './audioes/music_10.mp3',
    },
    {
        music_text: '笑场 - 薛之谦',
        music_url: './audioes/music_11.mp3',
    },
    {
        music_text: '深深爱过你(今生) - 薛之谦',
        music_url: './audioes/music_12.mp3',
    },
    {
        music_text: '深深爱过你(前世) - 薛之谦',
        music_url: './audioes/music_13.mp3',
    },
    {
        music_text: '为什么 - 薛之谦',
        music_url: './audioes/music_14.mp3',
    },
    {
        music_text: '我好像在哪见过你 - 薛之谦',
        music_url: './audioes/music_15.mp3',
    },
    {
        music_text: '七里香 - 周杰伦',
        music_url: './audioes/music_16.mp3',
    },
    {
        music_text: '周杰伦 - 暗号',
        music_url: './audioes/music_17.mp3',
    },
    {
        music_text: '演员 - 薛之谦',
        music_url: './audioes/music_18.mp3',
    },
    {
        music_text: '我想起你了 - 薛之谦',
        music_url: './audioes/music_19.mp3',
    },
    {
        music_text: '倾城 - 薛之谦',
        music_url: './audioes/music_20.mp3',
    },
    {
        music_text: '其实 - 薛之谦',
        music_url: './audioes/music_21.mp3',
    },
    {
        music_text: '来日方长 - 黄龄,薛之谦',
        music_url: './audioes/music_22.mp3',
    },
    {
        music_text: '狐狸 - 薛之谦',
        music_url: './audioes/music_23.mp3',
    },
    {
        music_text: '耗尽 - 薛之谦,郭聪明',
        music_url: './audioes/music_24.mp3',
    },
    {
        music_text: '刚刚好 - 薛之谦',
        music_url: './audioes/music_25.mp3',
    },
    {
        music_text: '伏笔 - 薛之谦',
        music_url: './audioes/music_26.mp3',
    },
    {
        music_text: '渡 - 薛之谦',
        music_url: './audioes/music_27.mp3',
    },
    {
        music_text: '动物世界 - 薛之谦',
        music_url: './audioes/music_28.mp3',
    },
    {
        music_text: '等我回家 - 薛之谦',
        music_url: './audioes/music_29.mp3',
    },
    {
        music_text: '丑八怪 - 薛之谦',
        music_url: './audioes/music_30.mp3',
    },
    {
        music_text: '迟迟 - 薛之谦',
        music_url: './audioes/music_31.mp3',
    },
    {
        music_text: '尘 - 薛之谦',
        music_url: './audioes/music_32.mp3',
    },
    {
        music_text: '别 - 薛之谦',
        music_url: './audioes/music_33.mp3',
    },
    {
        music_text: '暧昧 - 薛之谦',
        music_url: './audioes/music_34.mp3',
    },
    {
        music_text: '爱情宣判 - 薛之谦',
        music_url: './audioes/music_35.mp3',
    },
    {
        music_text: '爱的期限 - 薛之谦',
        music_url: './audioes/music_36.mp3',
    },
    {
        music_text: '邓紫棋 - 新的心跳 ',
        music_url: './audioes/music_37.mp3',
    },
    {
        music_text: '邓紫棋 - 后会无期',
        music_url: './audioes/music_38.mp3',
    },
    {
        music_text: '邓紫棋 - 光年之外',
        music_url: './audioes/music_40.mp3',
    },
    {
        music_text: '邓紫棋 - 多远都要在一起',
        music_url: './audioes/music_41.mp3',
    },
    {
        music_text: '邓紫棋 - 喜欢你',
        music_url: './audioes/music_42.mp3',
    },
    {
        music_text: '邓紫棋 - 我要我们在一起',
        music_url: './audioes/music_43.mp3',
    },
    {
        music_text: '邓紫棋 - 你把我灌醉',
        music_url: './audioes/music_44.mp3',
    },
    {
        music_text: '邓紫棋 - 偶尔',
        music_url: './audioes/music_45.mp3',
    },
    {
        music_text: '蔡健雅 - 红色高跟鞋',
        music_url: './audioes/music_46.mp3',
    },
    {
        music_text: '泡沫 - 邓紫棋',
        music_url: './audioes/music_47.mp3',
    },
    {
        music_text: '修炼爱情 - 林俊杰',
        music_url: './audioes/music_48.mp3'
    },
    {
        music_text: 'Zyboy忠宇 - 妈妈的话',
        music_url:'./audioes/music_49.mp3'
    },
    {
        music_text: '周杰伦-我落泪情绪零碎',
        music_url:'./audioes/music_39.mp3'
    },
    {
        music_text: '邓紫棋 - 你把我灌醉',
        music_url:'./audioes/music_50.mp3'
    },
    {
        music_text: '周杰伦 - 说好不哭',
        music_url: './audioes/music_51.mp3'
    },
    {
        music_text: 'PRC 巴Y汗  - 八0000 !',
        music_url:'./audioes/music_52.mp3'
    },
    {
        music_text: '周杰伦 - 还在流浪',
        music_url:'./audioes/music_53.mp3'
    },
    {
        music_text: '周杰伦 - 倒影',
        music_url:'./audioes/music_54.mp3'
    },{
        music_text:'周杰伦 - 错过的烟火',
        music_url:'./audioes/music_55.mp3'
    }
    // 周杰伦 - 错过的烟火
]