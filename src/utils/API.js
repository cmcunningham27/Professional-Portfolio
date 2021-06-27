import axios from 'axios';

//collects all of my starred repos
const API  = {
    getInfo: function() {
        return axios.get('https://api.github.com/users/cmcunningham27/starred')
    }
};

export default API;