import axios from 'axios';

const favoritosAPI = axios.create({
    baseURL: 'http://localhost:8000/favoritos'
});

async function getFavoritos() {
    const response = await favoritosAPI.get('/');
    return response.data;
}

async function postFavoritos(id) {
    await favoritosAPI.post('/:id', { id });
}

async function deleteFavoritos(id) {
    await favoritosAPI.delete('/:id', { id });
}

export { 
    getFavoritos,
    postFavoritos,
    deleteFavoritos
 };