import axios from 'axios'

export default function ajax (url="",params={},type="GET") {
    let promise;
    return new Promise ((reslove,reject)=>{
        if("GET" === type){
            let paramsStr = "";
            Object.keys(params).forEach(key=>{
                paramsStr += key + "=" + params[key] + "&"
            })
            if (paramsStr !== "") {
                paramsStr = paramsStr.substr(0,paramsStr.lastIndexOf("&"))
            }
            url += "?" + paramsStr;
            promise = axios.get(url)
        }else if("POST" === type) {
            promise = axios.post(url,params)
        }
        promise.then((response)=>{
            reslove(response.data)
        }).catch(error=>{
            reject(error)
        })
    })
}