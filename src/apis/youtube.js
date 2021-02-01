import axios from 'axios';

const KEY='AIzaSyAQ_07qdOSoxBB8ERjPQK6y05_cDQWQbXY'

export default axios.create({
    baseURL:"https://youtube.googleapis.com/youtube/v3",
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }
});

// youtube.get()