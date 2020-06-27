<template>
    <div class="search" v-if="searchgoods.length > 0">
        <SearchNav/>
        <div class="shop">
            <div class="menu-wrapper">
                <ul>
                    <li
                      v-for="(item,index) 
                      in searchgoods" :key="index" 
                      :class="{current: currentIndex == index }"
                      @click="clickLeftItem(index)"
                      ref="menulist"
                    >
                      <span class="menu-item">{{item.name}}</span>
                    </li>
                </ul>
            </div>
            <div class="shop-wrapper">
                <ul ref="shopsParents">
                    <li class="shops-li" v-for="(item,index1) in searchgoods" :key="index1">
                        <div class="shops-title">
                            <h4>{{item.name}}</h4>
                            <a href="#">查看更多</a>
                        </div>
                        <ul class="phone-type" v-if="item.tag === 'phone'">
                          <li v-for="(phone,index3) in item.category" :key="index3">
                            <img :src="phone.icon" alt="">
                          </li>
                        </ul>
                        <ul class="shops-items">
                          <li v-for="(items,index2) in item.items" :key="index2">
                            <img :src="items.icon" alt="">
                            <span>{{items.title}}</span>
                          </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import SearchNav from './children/SearchNav'
import{ mapState } from 'vuex'
import BScroll from 'better-scroll'
  export default {
    name:"Search",
    data(){
      return{
        scrollY: 0,
        rightLiTop: []
      }
    },
    components:{
        SearchNav
		},
		computed:{
      ...mapState(["searchgoods"]),
      currentIndex(){
        let {scrollY,rightLiTop} = this
        return rightLiTop.findIndex((liTop,index)=>{
          this._leftScroll(index)
          return scrollY >= liTop && scrollY < rightLiTop[index + 1]
        })
      }
    },
    watch:{
      searchgoods(){
        this.$nextTick(() => {
          this.initScroll()
          this.initRightLiTops()
        })
      }
    },
    methods:{
      initScroll(){
        this.leftScroll = new BScroll(".menu-wrapper",{
          scrollY: true,
          click: true
        })
        this.rightScroll = new BScroll(".shop-wrapper",{
          scrollY: true,
          click: true,
          probeType: 3
        })
        this.rightScroll.on('scroll', (pos) => {
          this.scrollY = Math.abs(Math.round(pos.y));
        });
      },
      initRightLiTops(){
        const tempArr = []
        let top = 0
        tempArr.push(top)
        let allLis = this.$refs.shopsParents.getElementsByClassName("shops-li")
        Array.prototype.slice.call(allLis).forEach(li => {
          top += li.clientHeight
          tempArr.push(top)
        });
        this.rightLiTop = tempArr
      },
      clickLeftItem(index){
        this.scrollY = this.rightLiTop[index]
        this.rightScroll.scrollTo(0,-this.scrollY,300)
      },
      _leftScroll(index){
        let menulists = this.$refs.menulist
        let el = menulists[index]
        this.leftScroll.scrollToElement(el,300,0,-100)
      }
    },
		mounted() {
			this.$store.dispatch("reqSearchGoods")
		}
  }
</script>

<style lang="stylus" scoped>
.search
    background #F5F5F5
    width 100%
    height 100%
    overflow hidden
    .shop
      display flex
      position absolute
      top 60px
      bottom 50px
      width 100%
      overflow hidden
      .menu-wrapper
        background-color #e0e0e0
        width 80px
        flex 0 0 80px
        .menu-item
          width 100%
          height 60px
          background-color: #fafafa
          display flex
          justify-content center
          align-items center
          font-weight lighter
          color #666666
          position relative
        .current
          .menu-item
            color #e02e24
          .menu-item::before
            content: ''
            background-color #e02e24
            width 4px
            height 30px
            position absolute
            left 0
            top 15px
      .shop-wrapper
        flex 1
        background-color #fff
        .shops-title
          display flex
          flex-direction row
          padding 0 10px
          height 44px
          align-items center
          justify-content space-between
          color #999
          a
            color #999
            text-decoration none
            font-weight lighter
        .shops-items
          display flex
          flex-wrap wrap
          li
            display flex
            flex-direction column
            width 33.3%
            height 90px
            justify-content center
            align-items center
            color #666
            font-weight lighter
            font-size 14px

            img
              width 60%
              height 60%
              margin-bottom 5px
        .phone-type
          width 100%
          display flex
          flex-direction row
          flex-wrap wrap
          border-bottom-1px(#ccc)
          li
            width 33.3%
            display flex
            justify-content center
            align-items center
            margin 5px 0
            img
              width 70%
</style>