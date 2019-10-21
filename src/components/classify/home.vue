<template>
    <div>
        <div class="top_top">
            <!-- 头部banner -->
            <div class="top_img">
                <input type="text" placeholder="Montagne jeunesse" class="img_input_1">
                <img src="../../img/search.png" alt="" class="top_img_fang">
            </div>

            <!-- 内容 -->
            <div class="content_er">
                <div class="content_er_list">
                    <ul class="content_er_list_ul">
                        <li><router-link to='/home/momdf' active-class="activea">母婴专区</router-link></li>
                        <li><router-link to='/home/mei' active-class="activea">美妆护肤</router-link></li>
                        <li><router-link to='/home/jiaju' active-class="activea">家居生活</router-link></li>
                        <li><router-link to='/home/foodd' active-class="activea">食品营养</router-link></li>
                        <li><router-link to='/home/quanqiu' active-class="activea">全球直邮</router-link></li>
                    </ul>
                </div>
                <div>
                    <router-view></router-view>
                </div>
            </div>
        </div>

        <tabBar></tabBar>
    </div>
</template>

<script>
import tabBar from "../pages/tabBar";

import mom from "./momd";
import mei from "./mei";
import jiaju from "./jiaju";
import food from "./foodd";
import quanqiu from "./quanqiu";

export default {
    components:{
        tabBar,
        mom,
        mei,
        jiaju,
        food,
        quanqiu,
    }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    list-style: none;
}

.top{
    width: 100%;
    background: #fafafa;
}

.top_top{
    width: 7.5rem;
    margin: 0 auto;
}
.top_img{
    width: 7.5rem;
    background: url(../../img/img1.png) no-repeat;
    background-size: 7.5rem;
    height: 1.40rem;
    position: relative;
}
.img_input_1{
    width: 4.25rem;
    height: .6rem;
    position: absolute;
    left: 1.18rem;
    bottom: .2rem;
    background: #ffe1b5;
    border: 1px solid #c9c9c9;
    border: none;
    border-radius: 8px;
    padding: 0 .65rem 0 .25rem;
}

.top_img_fang{
    position: absolute;
    left: 5.73rem;
    bottom: .28rem;
    width: .38rem;
    height: .4rem;
}

.content_er{
    width: 7.5rem;
}

.content_er_list{
    width: 2.3rem;
    height: 11.5rem;
    background: #fafafa;
    float: left;
}


.content_er_list li{
    width: 2.3rem;
    height: 1rem;
    line-height: 1rem;
    text-align: center;
    font-size: .3rem;
}

.content_er_list li .activea{
    position: relative;
    left: 0;
    background: #fff;
    color: #ff9900;
}

.content_er_list li a{
    display: block;
}

.oooooo{
    padding-bottom: 1.4rem;
}
</style>