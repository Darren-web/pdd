<template>
    <div class="hot-nav">
        <div class="hot-nav-content"  v-if="homenav.length > 0">
            <div class="nav-content-inner">
                <a href="#" class="inner-item" v-for="(item,index) in homenav" :key="index">
                    <img :src="item.iconurl" alt="">
                    <span>{{item.icontitle}}</span>
                </a>
            </div>
        </div>
        <div class="hot-nav-bottom">
            <div class="hot-nav-bottom-inner" :style="innerBarStyle"></div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name:"HotNav",
        data() {
            return {
                //屏幕宽度
                screenW: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                //滚动内容宽度
                scrollContentW: 720,
                //滚动条背景长度
                bgBarW: 100,
                //滚动条长度
                barXWidth: 0,
                //移动距离
                barMoveWidth: 0,
                //起点
                startX: 0,
                //结束点
                endFlag: 0
            }
        },
        computed:{
            ...mapState(["homenav"]),
            innerBarStyle() {
                return {
                    width: `${this.barXWidth}px`,
                    left: `${this.barMoveWidth}px`
                }
            }
        },
        mounted() {
            this.getBottomBarWidth();
            this.bindEven();
        },
        methods: {
            //获取滚动条长度
            getBottomBarWidth() {
                this.barXWidth = this.bgBarW * (this.screenW / this.scrollContentW)
            },
            //移动事件监听
            bindEven() {
                this.$el.addEventListener('touchstart',this.handleTouchStart,false);
                this.$el.addEventListener('touchmove',this.handleTouchMove,false);
                this.$el.addEventListener('touchend',this.handleTouchEnd,false);
            },
            handleTouchStart(event) {
                let touch = event.touches[0];
                this.startX = Number(touch.pageX);
            },
            handleTouchMove() {
                let touch = event.touches[0];
                let moveWidth = Number(touch.pageX) - this.startX;
                this.barMoveWidth = -((this.bgBarW / this.scrollContentW) * moveWidth - this.endFlag);
                if(this.barMoveWidth <= 0){ // 左边
                    this.barMoveWidth = 0;
                }else if(this.barMoveWidth >= this.bgBarW - this.barXWidth){ // 右边
                    this.barMoveWidth = this.bgBarW - this.barXWidth;
                }
            },
            handleTouchEnd() {
                this.endFlag = this.barMoveWidth
            }
        }
        
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
            width 0
</style>