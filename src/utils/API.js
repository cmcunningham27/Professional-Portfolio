import axios from 'axios';

const API  = {
    getInfo: function() {
        return axios.get('https://api.github.com/users/cmcunningham27/starred')
    }
};

export default API;