import { HOME_CASUAL, HOME_NAV, HOME_LIST } from './mutation_types'
export default {
    [HOME_CASUAL](state,{homecasual}) {
        state.homecasual = homecasual
    },
    [HOME_NAV](state,{homenav}) {
        state.homenav = homenav
    },
    [HOME_LIST](state,{homelist}) {
        state.homelist = homelist
    }
}