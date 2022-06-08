import axios from './axios';

export const getAll = () => axios.get('/assets').then(res => res.data);
export const upload = image => axios.post('/assets/upload/', {image}).then(res => res.data);
export const destroy = id => axios.delete(`/assets/delete/${id}`).then(res => res.data);