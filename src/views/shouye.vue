<template>
    <div class="shouye">
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
        <div class="guanyuBox">
            <div class="guanyu">
                <img src="../assets/about_us.jpg" />
                <div class="neirongBox">
                    <p class="neirong">
                        正航科技在客户服务实践中完成了技术、产品、管理、市场、人才储备等有形、无形资产的积累，并迅速形成了一套从市场分析、产品设计、开发到推广的完整高效的运作体系。亿新网络公司/亿新科技从2002年开始提供网站建设、网站策划、网站开发、网站设计、SEO网站优化、网络推广、电子商务技术、多媒体光盘等服务，积累了大量的经验，同时也培养了一支成熟的技术开发团队
                    </p>
                    <br />
                    <p class="neirong">
                        为了让每个客户的项目都能精益求精，因此每一个设计项目都有专属的项目负责人以及搭配的网页设计师，动画师和程式设计师来执行项目，不仅能完全掌控项目的进度，面对客户的需求和问题，更能以最快的速度提出完整的解决方案，确保能为客户开发出高质量和满足客户需求的产品。
                    </p>
                    <br />
                    <p class="neirong">
                        历经五年，正航科技在众多客户的支持和肯定下一起成长，每一个客户对亿新科技来说都是崭新的开始，每一个项目都是全新的挑战。成长过程中亿新科技积累了丰富的客户资源和服务经验，其中包括德力西集团、春风控股集团、共信电气科技、上海中科电气集团、华通集团等，在众多客户的高度评价之下，亿新科技继续提供最优质的服务，往前迈进。
                    </p>
                    <br />
                </div>
            </div>
            <img src="../assets/main_banner.jpg" class="tu" />
        </div>
        <div>
            <p class="dibu">2011-2013 © 正航科技股份有限公司 版权所有</p>
            <p class="dibuer">
                ：上海乐清市柳市镇柳市大厦 邮编：200000 电话：021-12345678 传真：021-12345678
                E-mail：admin@zhenghang.com
            </p>
        </div>
    </div>
</template>

<script></script>
<style scoped>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.shouye {
    width: 1004px;
    background-color: white;
    margin: auto;
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

.guanyuBox {
    width: 1004px;
    height: 464px;
    display: flex;
    border-bottom: 2px solid black;
}
.guanyu {
    width: 678px;
    height: 464px;
}
.neirongBox {
    width: 678px;
    height: 345px;
}
.neirong {
    text-indent: 1em;
    font-family: 'Comic Sans MS', cursive;
}
.tu {
    height: 100%;
    width: 100%;
}
.dibu {
    text-align: center;
    padding-top: 15px;
    font-size: 10px;
}
.dibuer {
    font-size: 10px;
    text-align: center;
    padding-top: 10px;
}
</style>
