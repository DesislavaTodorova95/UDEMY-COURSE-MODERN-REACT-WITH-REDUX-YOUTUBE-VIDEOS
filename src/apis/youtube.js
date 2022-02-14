import axios from 'axios'
const KEY ='AIzaSyAkZZ0p2zhUJv_f-MlinFB750UnR5iWJf4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
      }
});




