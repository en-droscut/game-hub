import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'a83bbc87160e40549bdf10fc1e34f029'
    }
})