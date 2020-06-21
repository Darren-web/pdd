<template>
    <div class="home">
        <ly-tab
            v-model="selectedId"
            :items="items"
            :options="options"  
            @change="handleChange"
            class="fix"
        />
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name:"Home",
        data() {
            return{
                selectedId: 0,
                items: [
                    {label:'热门'},
                    {label:'热门2'},
                    {label:'热门3'},
                    {label:'热门4'},
                    {label:'热门4'},
                    {label:'热门4'},
                    {label:'热门4'},
                    {label:'热门4'},
                    {label:'热门4'},
                    {label:'热门4'}
                ],
                options: {
                    activeColor: '#e9232c'
                },
                subRouteUrl: [
                    '/home/hot','/home/dress','/home/box','/home/mbaby','/home/general','/home/food','/home/shirt','/home/man','/home/ele',
                ]
            }
        },
        methods: {
            handleChange(item,index) {
                this.$router.replace(this.subRouteUrl[index])
            }
        }
    }
</script>

<style lang="stylus" scoped>
.home
    width 100%
    height 100%
    .fix
        position fixed
        top 0 
        left 0
        z-index 998
    

</style>