import http from '@/utils/http'
export let newApi = function(url,data){
    return http.post(url,data)
}