import axios from 'axios';


const KEY = 'AIzaSyBTJ5JnNUSOvSGHiTh_qZEbRG_lFBiRR2E';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
