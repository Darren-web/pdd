<template>
    <div class="recommend-container" v-if="recommendlist.length > 0">
        <div class="recommend">
            <ShopList 
                tag="li"
                v-for="(item,index) in recommendlist"
                :item="item"
                :key="index"
            />
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import ShopList from '@/components/ShopList'
    export default {
        name:"Recommend",
        components:{
            ShopList
        },
        computed:{
            ...mapState(["recommendlist"])
        },
        mounted() {
            this.$store.dispatch("reqRecommendList")
        }
    }
</script>

<style lang="stylus" scoped>
.recommend-container  
    background #fff
    width 100%
    height 100%
    .recommend
        display flex
        flex-direction row
        flex-wrap wrap
        background #f5f5f5
        margin-bottom 50px
</style>