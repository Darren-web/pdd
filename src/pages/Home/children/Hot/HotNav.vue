<template>
    <div class="hot-nav">
        <div class="hot-nav-content">
            <div class="nav-content-inner">
                <a href="#" class="inner-item">
                    <img src="./../../imgs/nav/nav_icon01.png" alt="">
                    <span>限时秒杀</span>
                </a>
                <a href="#" class="inner-item">
                    <img src="./../../imgs/nav/nav_icon02.png" alt="">
                    <span>限时秒杀</span>
                </a>
                <a href="#" class="inner-item">
                    <img src="./../../imgs/nav/nav_icon03.png" alt="">
                    <span>限时秒杀</span>
                </a>
                <a href="#" class="inner-item">
                    <img src="./../../imgs/nav/nav_icon04.png" alt="">
                    <span>限时秒杀</span>
                </a>
                <a href="#" class="inner-item">
                    <img src="./../../imgs/nav/nav_icon05.png" alt="">
                    <span>限时秒杀</span>
                </a>
                <a href="#" class="inner-item">
                    <img src="./../../imgs/nav/nav_icon06.gif" alt="">
                    <span>限时秒杀</span>
                </a>
                <a href="#" class="inner-item">
                    <img src="./../../imgs/nav/nav_icon07.png" alt="">
                    <span>限时秒杀</span>
                </a>
                <a href="#" class="inner-item">
                    <img src="./../../imgs/nav/nav_icon08.png" alt="">
                    <span>限时秒杀</span>
                </a>
                <a href="#" class="inner-item">
                    <img src="./../../imgs/nav/nav_icon09.png" alt="">
                    <span>限时秒杀</span>
                </a>
                <a href="#" class="inner-item">
                    <img src="./../../imgs/nav/nav_icon10.png" alt="">
                    <span>限时秒杀</span>
                </a>
                <a href="#" class="inner-item">
                    <img src="./../../imgs/nav/nav_icon11.png" alt="">
                    <span>限时秒杀</span>
                </a>
                <a href="#" class="inner-item">
                    <img src="./../../imgs/nav/nav_icon12.png" alt="">
                    <span>限时秒杀</span>
                </a>
                <a href="#" class="inner-item">
                    <img src="./../../imgs/nav/nav_icon13.png" alt="">
                    <span>限时秒杀</span>
                </a>
                <a href="#" class="inner-item">
                    <img src="./../../imgs/nav/nav_icon14.png" alt="">
                    <span>限时秒杀</span>
                </a>
                <a href="#" class="inner-item">
                    <img src="./../../imgs/nav/nav_icon15.png" alt="">
                    <span>限时秒杀</span>
                </a>
                <a href="#" class="inner-item">
                    <img src="./../../imgs/nav/nav_icon16.png" alt="">
                    <span>限时秒杀</span>
                </a>
            </div>
        </div>
        <div class="hot-nav-bottom">
            <div class="hot-nav-bottom-inner"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"HotNav"
    }
</script>

<style lang="stylus" scoped>
.hot-nav
    width 100%
    height 180px
    position relative
    background #ffffff
    padding-bottom 10px
    .hot-nav-content
        width 100%
        overflow-x scroll
        .nav-content-inner
            width 720px
            height 180px
            display flex
            flex-wrap wrap
            a
                text-decoration none
            .inner-item
                width 90px
                height 90px
                display flex
                flex-direction column
                justify-content center
                align-items center
                font-size 14px
                color #666
                img 
                    width 50%
                    margin-bottom 5px
    .hot-nav-content::-webkit-scrollbar
        display none
    .hot-nav-bottom
        width 100px
        height 2px
        background-color #ccc
        position absolute
        left 50%
        margin-left -50px
        bottom 8px
        .hot-nav-bottom-inner
            position absolute
            left 0
            height 100%
            background-color  orangered
            width 50px
</style>