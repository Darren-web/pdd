<template>
    <div class="hot">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="./../../imgs/rowing/s1.png" alt="" /></div>
                <div class="swiper-slide"><img src="./../../imgs/rowing/s2.png" alt="" /></div>
                <div class="swiper-slide"><img src="./../../imgs/rowing/s3.png" alt="" /></div>
                <div class="swiper-slide"><img src="./../../imgs/rowing/s4.png" alt="" /></div>
                <div class="swiper-slide"><img src="./../../imgs/rowing/s5.png" alt="" /></div>
                <div class="swiper-slide"><img src="./../../imgs/rowing/s6.png" alt="" /></div>
                <div class="swiper-slide"><img src="./../../imgs/rowing/s7.png" alt="" /></div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
        <HotNav/>
        <div class="hot-ad">
            <img src="./../../imgs/hot_ad/home_ad.gif" alt="" width="100%">
        </div>
        <HotShopList/>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    import 'swiper/css/swiper.min.css'
    import HotNav from './HotNav'
    import HotShopList from './HotShopList'
    export default {
        name:"Hot",
        components: {
            HotNav,
            HotShopList
        },
        mounted() {
            new Swiper ('.swiper-container', {
                autoplay:true,
                loop: true, // 循环模式选项
                
                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                }
            }) 
        }
    }
</script>

<style lang="stylus" scoped>
    .hot
        width 100%
        height 100%
        background f5f5f5
        padding-top 45px
        // display flex
        // justify-content center
        // align-items center
        .swiper-slide
            img 
                width 100%
        .hot-ad
            padding 5px
            background-color #fff
        
</style>