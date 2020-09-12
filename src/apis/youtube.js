import axios from 'axios';
const KEY = 'AIzaSyAEjvprhLFls2nH8sk3LkX7oYQ5_IKyGRM';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
});

