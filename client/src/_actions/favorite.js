import { GET_FAVORITE } from '../config/constants';
import axios from 'axios';

export const getFavorite = () => {
	let token = localStorage.getItem('token');
	token = 'Bearer ' + token;
	return {
		type: GET_FAVORITE,
		payload: axios({
			method: 'GET',
			url: 'http://localhost:7000/api/v1/user/favorite',
			headers: {
				Authorization: token
			}
		})
	};
};
