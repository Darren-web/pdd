<template>
    <div class="hot">
        <div class="swiper-container" v-if="homecasual.length > 0">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in homecasual" :key="index">
                    <img :src="item.imgurl" alt="" />
                </div>
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
    import{ mapState } from 'vuex'
    export default {
        name:"Hot",
        components: {
            HotNav,
            HotShopList
        },
        computed:{
            ...mapState(["homecasual"])
        },
        watch:{
            homecasual() {
                this.$nextTick(() => {
                    new Swiper ('.swiper-container', {
                        autoplay:true,
                        loop: true, // 循环模式选项
                        // 如果需要分页器
                        pagination: {
                            el: '.swiper-pagination',
                        }
                    })
                })
            }
        },
        mounted() {
            this.$store.dispatch("reqHomeCasual")
            this.$store.dispatch("reqHomeNav")
            this.$store.dispatch("reqHomeShopList")
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