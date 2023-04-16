const axios = require('axios').default;
//import axios from 'axios'

axios.get("https://jsonplaceholder.typicode.com/posts/37")
.then((response) => console.log(response.data))
.catch((error) => console.log(error));
