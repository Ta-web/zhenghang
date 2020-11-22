<template>
    <div class="qiye">
        <div class="toubu">
            <img src="../assets/logo.jpg" class="img" />
            <span class="miaoshu">
                <router-link to="/shouye" tag="p" class="title">首页</router-link>
                <router-link to="qiye" tag="p" class="title">企业动态</router-link>
                <router-link to="/" tag="p" class="title">行业动态</router-link>
                <router-link to="/" tag="p" class="title">企业理念</router-link>
                <router-link to="/" tag="p" class="title">网站留言</router-link>
            </span>
        </div>
        <img src="../assets/sec_banner.jpg" class="qiyetu" />
        <div class="neirongkuang">
            <div class="cebian">
                <p class="cebianneirong">>企业新闻</p>
                <p class="cebianneirong">>行业动态</p>
                <p class="cebianneirong">>企业理念</p>
                <p class="cebianneirong">>网站留言</p>
            </div>
            <div class="xinwen">
                <img src="../assets/company_news.jpg" class="qiyetu" />
                <div class="xinwenneirong">
                    <p>DS品牌巡展武汉站开幕 移动旗舰</p>
                    <p>2020-4-5</p>
                </div>
                <div class="xinwenneirong">
                    <p>北汽集团考察菲斯科 仅瞄准Atlanti</p>
                    <p>2020-4-5</p>
                </div>
                <div class="xinwenneirong">
                    <p>北汽亮相长春车展 共庆中国汽车六</p>
                    <p>2020-4-5</p>
                </div>
                <div class="xinwenneirong">
                    <p>特斯拉电动车将进入纳斯达克100指数</p>
                    <p>2020-4-5</p>
                </div>
                <div class="xinwenneirong">
                    <p>中国今年将成宝马头号市场 18年来销量增400倍</p>
                    <p>2020-4-5</p>
                </div>
                <div class="xinwenneirong">
                    <p>特斯拉市值飙升超越菲亚特 或将被谷歌收购</p>
                    <p>2020-4-5</p>
                </div>
                <div class="xinwenneirong">
                    <p>广汽丰田6月销量创新高</p>
                    <p>2020-4-5</p>
                </div>
                <div class="xinwenneirong">
                    <p>奥迪研发总监杜翰墨被迫下课 哈肯贝格再度回归</p>
                    <p>2020-4-5</p>
                </div>
                <div class="xinwenneirong">
                    <p>最美双行线 GLK美好中国行精彩演绎京北纯粹之旅</p>
                    <p>2020-4-5</p>
                </div>
                <div class="xinwenneirong">
                    <p>十年成就同行同悦--华晨宝马十周年</p>
                    <p>2020-4-5</p>
                </div>
            </div>
        </div>
        <div>
            <p class="di">2011-2013 © 正航科技股份有限公司 版权所有</p>
            <p class="dier">
                地址：上海乐清市柳市镇柳市大厦 邮编：200000 电话：021-12345678 传真：021-12345678
                E-mail：admin@zhenghang.com
            </p>
        </div>
    </div>
</template>
<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
.qiye {
    margin: auto;
    width: 1004px;
    height: 702px;
    background-color: white;
}
.toubu {
    height: 78px;
    display: flex;
    justify-content: space-between;
    background-image: url('../assets/head_bg.jpg');
}
.img {
    height: 78px;
}
.miaoshu {
    display: flex;
}
.title {
    height: 78px;
    width: 90px;
    line-height: 78px;
    text-align: center;
    background-image: url('../assets/menu_bg.jpg');
}
.qiyetu {
    width: 100%;
}
.neirongkuang {
    width: 1004px;
    height: 411px;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    display: flex;
}
.cebian {
    width: 262px;
    height: 411px;
    text-align: center;
    border-right: 1px solid black;
}
.cebianneirong {
    padding: 20px;
}
.xinwen {
    width: 742px;
    height: 411px;
}
.xinwenneirong {
    padding-left: 60px;
    padding-bottom: 12px;
    display: flex;
    justify-content: space-between;
}
.di {
    text-align: center;
    padding-top: 15px;
    font-size: 10px;
}
.dier {
    font-size: 10px;
    text-align: center;
    padding-top: 10px;
}
</style>
