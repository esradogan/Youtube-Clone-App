import axios from 'axios';

//axios promise tabanlı olarak yayınlanmış, 
//tarayıcı ve node.js tarafında çalışabilir bir HTTP client.

export default axios.create({

    baseURL: 'https://googleapis.com/youtube/v3',
    params:{
        part : 'snippet',
        maxResult: 5,
        key :'AIzaSyDDT_0tasvFUIGqC0kBFKqHnUnbUZmeg7A'
    }
})