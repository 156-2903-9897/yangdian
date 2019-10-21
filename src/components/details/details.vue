<template>
    <div id="top_top">
        <div class="top">
            <div class="gai">
                <!-- 头部ban -->
                <details_top></details_top>

                <!-- 信息 -->
                <details_inf></details_inf>

                <!-- 详情，评价 -->
                <details_xin></details_xin>
            </div>
        </div>
    </div>
</template>

<script>
import details_top from "./details_top";
import details_inf from "./details_inf";
import details_xin from "./details_xin";

export default {
    components:{
        details_top,
        details_inf,
        details_xin,
    }
}
</script>

<style scoped>

#top_top{
    width: 7.5rem;
    background: #fff;
}

.top{
    width: 7.5rem;
    margin: 0 auto;
}

/* .gai{
    width: 100%;
    height: 100%;
    background: #7f7f7f;
} */
</style>