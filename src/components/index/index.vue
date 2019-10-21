<template>
    <div class="top">
        <div class="top_top">
            <!-- 头部banner -->
            <div class="top_img">
                <input type="text" placeholder="Montagne jeunesse" class="img_input_1">
                <img src="../../img/search.png" alt="" class="top_img_fang">
            </div>
            <div class="top_asd">
            </div>

            <!-- 内容 -->
            <!-- <router-view></router-view> -->
            <snapppa></snapppa>
            <mom></mom>
            <beauty></beauty>
            <house></house>
            <food></food>
            <global></global>

            <!-- 底部 -->
            <tabBar></tabBar>
        </div>
    </div>
</template>

<script>

var deviceWidth = document.documentElement.clientWidth;
if (deviceWidth > 750) deviceWidth = 750;
document.documentElement.style.fontSize = deviceWidth / 7.5 + "px";

import  snapppa  from "./snapppa";
import mom from "./momd";
import beauty from "./beauty";
import house from "./house";
import food from "./food";
import global from "./global";

import tabBar from "../pages/tabBar";

export default {
    components:{
        snapppa,
        mom,
        beauty,
        house,
        food,
        global,
        tabBar
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

/* 头部banner */

.top_img{
    width: 7.5rem;
    background: url(../../img/img1.png) no-repeat;
    background-size: 7.5rem;
    height: 1.40rem;
    position: relative;
}

.top_asd{
    width: 7.5rem;
    background: url(../../img/img2.png) no-repeat;
    background-size: 7.5rem;
    height: 3.3rem;
    position: relative;
    top: -0.1rem;
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

/* 内容 */


</style>