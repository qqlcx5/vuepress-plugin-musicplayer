import axios from 'axios'
//获取歌词
let baseUrl = BASEURL || 'https://netease-cloud-music-api-9uegqsos0-qqlcx5.vercel.app/'
export const getWords=(id)=>{
    return axios.get(`${baseUrl}lyric?id=${id}`);
}
//获取歌曲详情
export const getMusicInfo=(id)=>{
    return axios.get(`${baseUrl}song/detail?ids=${id}`);
}
//获取歌曲url
export const getMusicUrl=(id)=>{
    return axios.get(`${baseUrl}song/url?id=${id}`);
}
//获取搜索建议
export const getSearchSuggest=(key)=>{
    return axios.get(`${baseUrl}search/suggest?keywords=${key}`)
}
//获取歌曲热门评论
export const getHotTalk=(id)=>{
    return axios.get(`${baseUrl}comment/music?id=${id}&limit=20`)
}

// 所有榜单
export const getAllList=()=>{
  return axios.get(`${baseUrl}toplist`);
}

//获取歌单详情
// 原因：返回的trackIds是完整的，tracks 则是不完整的，可拿全部 trackIds 请求一次 song/detail 接口获取所有歌曲的详情
export const getPlaylistDetail=(id)=>{
  return axios.get(`${baseUrl}playlist/detail?id=${id}`);
}

// 获取歌曲详情
export const getSongDetail=(id)=>{
  return axios.get(`${baseUrl}song/detail?ids=${id}`);
}

