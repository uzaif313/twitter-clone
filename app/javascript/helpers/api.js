import axios from 'axios';
const api = {
	'tweets':{
			'list':function(){
				return axios.get("/tweets")
			},
			'create':function(params){
				return axios.post('/tweets',data:params)
			}
	},
}

export default api;
