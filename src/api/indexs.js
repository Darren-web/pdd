import ajax from './ajax'

const base_url = 'http://127.0.0.1:3000'

//首页轮播图
export const getHomeCasual = () => {
    return ajax(base_url + "/api/homecasual")
}
// 2.2 请求首页的导航
export const getHomeNav = () => ajax(BASE_URL + '/api/homenav');