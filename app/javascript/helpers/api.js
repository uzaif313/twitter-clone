import axios from 'axios';
const api = {
	'tweets':{
			'list':function(){
				return axios.get("/tweets")
			},
			'create':function(params){
				console.log(params)
				return axios.post('/tweets',params)
			}
	},
}

export default api;
