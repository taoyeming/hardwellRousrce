import axios from "axios"

export const getWallpaperList = (type, page) => {
    return axios.get(`https://wx.wanjitech.com/bizhi/imagelist.php?page=${page}&path=${type}`)
}