import { getHomeCasual, getHomeNav, getHomeShopList } from '../api/index'
import { HOME_CASUAL, HOME_NAV, HOME_LIST } from './mutation_types'


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
    }
}