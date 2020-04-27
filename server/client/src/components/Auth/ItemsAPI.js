import axios from 'axios';
import {getJwt} from './Helpers'

export default {

    deleteItem: data => {
        // return axios.post('/api/fruit/delete', data)
        console.log("working data Api 1")
        const jwt  = getJwt();
        return  axios.delete("/api/v1/arch", data, { headers : 
            {
                Authorization : `Bearer ${jwt}`}
            },
           
        )

    }
    
	
};
