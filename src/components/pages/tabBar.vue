<template>
    <div>
        <div class="tab_bar_wrap">
            <router-link to="/snapppa" active-class="active"><span id="showye"></span><span>首页</span></router-link>
            <router-link to="/home" active-class="active"><span id="fenlei"></span><span>分类</span></router-link>
            <router-link to="/shopping" active-class="active"><span id="gouwu"></span><span>购物车</span></router-link>
            <router-link to="/me" active-class="active"><span id="me"></span><span>我</span></router-link>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        showye(){
            
        }
    }
};
</script>

<style scoped>

.tab_bar_wrap {
  /* position: fixed;
  bottom: 0;
  left: 0; */
  width: 100%;
  display: flex;
  text-align: center;
  position: relative;
  background: #fff;
  position: fixed;
  bottom: 0;
}

.tab_bar_wrap a {
  flex: 1;
  height: 1.2rem;
}

.active #showye{
    color: #fb9b00;
    background: url(../../img/tab_home_hig.png) no-repeat;
    background-size: .45rem .4rem;
}

.active #fenlei{
    color: #fb9b00;
    background: url(../../img/tab_menu_hig.png) no-repeat;
    background-size: .45rem .4rem;
}

.active #gouwu{
    color: #fb9b00;
    background: url(../../img/tab_shopping_hig.png) no-repeat;
    background-size: .45rem .4rem;
}

.active #me{
    color: #fb9b00;
    background: url(../../img/tab_me_hig.png) no-repeat;
    background-size: .45rem .45rem;
}

.tab_bar_wrap span{
    position: absolute;
    bottom: .12rem;
    font-size: .24rem;
}   

#showye{
    background: url(../../img/tab_home_nor.png) no-repeat;
    background-size: .45rem .4rem;
    width: .45rem;
    height: 0.4rem;
    position: absolute;
    top: .15rem;
}

#fenlei{
    background: url(../../img/tab_menu_nor.png) no-repeat;
    background-size: .45rem .4rem;
    width: .45rem;
    height: 0.4rem;
    position: absolute;
    top: .15rem;
}

#gouwu{
    background: url(../../img/tab_shopping_nor.png) no-repeat;
    background-size: .45rem .4rem;
    width: .45rem;
    height: 0.4rem;
    position: absolute;
    top: .15rem;
}

#me{
    background: url(../../img/tab_me_nor.png) no-repeat;
    background-size: .45rem .45rem;
    width: .45rem;
    height: 0.4rem;
    position: absolute;
    top: .15rem;
}
</style>