import { getHomeCasual, getHomeNav, getHomeShopList, getRecommendList } from '../api/index'
import { HOME_CASUAL, HOME_NAV, HOME_LIST, RECOMMEND_LIST } from './mutation_types'


export default {
    async reqHomeCasual({commit}){
        const result = await getHomeCasual()
        commit(HOME_CASUAL,{homecasual:result.message})
    },
    async reqHomeNav({commit}){
        const result = await getHomeNav()
        commit(HOME_NAV,{homenav:result.message.data})
    },
    async reqHomeShopList({commit}){
        const result = await getHomeShopList()
        commit(HOME_LIST,{homelist:result.message.goods_list})
    },
    async reqRecommendList({commit}){
        const result = await getRecommendList()
        commit(RECOMMEND_LIST,{recommendlist:result.message})
    }
}