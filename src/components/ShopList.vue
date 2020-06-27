<template>
    <a class="recommend-item">
        <img :src="item.thumb_url" alt="" v-if="item.thumb_url" width="100%"/>
        <h4 class="item-title">{{item.short_name}}</h4>
        <div class="item-bottom">
            <span class="item-price">￥{{item.price / 100}}</span>
            <span class="item-sales">{{item.sales_tip}}</span>
            <button class="item-button" v-if="true">找相似</button>
            <span v-else class="item-user">
                <img src="http://t20img.yangkeduo.com/a/7bb7677358604fcc75c86f37a2a567cfa1107684-1534773680?imageMogr2/thumbnail/100x" alt="">
                <img src="http://t20img.yangkeduo.com/a/f44b185c296fd8ef9302a2c70f2033c4133c85df-1532393091?imageMogr2/thumbnail/100x" alt="">
            </span>
        </div>
    </a>
</template>

<script>
    export default {
        name:"ShopList",
        props:{
            item: Object
        }
    }
</script>

<style lang="stylus" scoped>
.recommend-item:nth-child(2n-1)
    margin-right 1%
.recommend-item
    // display inline
    width 49.5%
    background #fff
    padding-bottom 15px
    margin-bottom 15px
    .item-title
        line-height 20px
        font-size 13px
        font-weight bolder
        height 20px
        overflow hidden
        margin 5px 0
        padding 0 5px
    .item-bottom
        display flex
        flex-direction row
        align-items center
        padding 0 5px
        .item-price
            flex 1
            color #ff0000
            font-weight bolder
            font-size 12px
        .item-sales
            font-size 8px
            color #666666
            flex 2
        .item-button
            flex 1
            border 1px solid #ff0
            background-color transparent 
            border-radius 5px
            height 26px
            color #f00
            font-size 10px
        .item-user
            img
                width 30px
                border-radius 50%
            img:nth-child(2)
                margin-left -10px
</style>