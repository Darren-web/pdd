<template>
    <div class="shop-container">
        <ul class="shop-list" v-if="homelist.length > 0">
            <li class="shop-list-item" v-for="item in homelist" :key="item.goods_id">
                <img :src="item.image_url" alt="item.short_name" width="100%">
                <h4 class="list-item-title">{{item.goods_name}}</h4>
                <div class="list-item-bottom">
                    <span class="item-price">￥{{item.normal_price / 100}}</span>
                    <span class="item-counter">{{item.sales_tip}}</span>
                    <span class="item-user">
                        <img :src="img.avatar" v-for="img in item.bubble" :key="img.group_order_id" alt="">
                    </span>
                    <span class="item-buy">
                        <button>去拼单 ></button>
                    </span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name:"HotShopList",
        computed: {
            ...mapState(["homelist"])
        }
    }
</script>

<style lang="stylus" scoped>
    .shop-container
        margin-bottom 50px
        background-color #f5f5f5
        .shop-list
            .shop-list-item
                margin-bottom 10px
                background-color #fff
                display flex
                flex-direction column
                .list-item-title
                    line-height 22px
                    width 94%
                    margin-left 3%
                    height 44px
                    overflow hidden
                .list-item-bottom
                    margin 10px 0
                    display flex
                    align-items center
                    .item-price
                        flex 1
                        text-align center
                        font-weight bolder
                        font-size 18px
                        color red
                    .item-counter
                        flex 2
                        font-size 12px
                        color #cccccc
                    .item-user
                        display flex
                        flex 1
                        justify-content center
                        align-items center
                        img 
                            width 30px
                            border-radius 50%
                        img:nth-child(2)
                            margin-left -6px
                    .item-buy
                        flex 2
                        button 
                            display flex
                            justify-content center
                            align-items center
                            width 80%
                            border none 
                            height 34px
                            font-size 16px
                            background-color #f00
                            border-radius 10px
                            color #fff
                            margin-left 10px

</style>