import axios from 'axios';

const API_URL = "https://65aed7e21dfbae409a759d74.mockapi.io/Movies";

const Service = {

  getAllMovies: async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || 'Failed to fetch resource');
    }
  },

  createMovie: async (movieData) => {
    try{ 
      const response = await axios.post(API_URL, movieData);
      return response.data;
    }catch (error) {
      throw new Error('Failed to create movie'); 
    }
  }, 
  


  createReview: async (movieId, reviewContent) => {
    try {
      const response = await axios.post(`${API_URL}/${movieId}/reviews`, { content: reviewContent });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || 'Failed to create review');
    }
  },

  deleteMovie: async (id) => {
    try { 
      const response = await axios.delete(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to delete movie');
    }
  },


  updateMovie: async (id, movieData) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, movieData);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message || 'Failed to update movie');
    }
  },

  getReviewsByMovieId: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}/reviews`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch reviews');
    }
  },

  getMovieById: async (id) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch movie details');
    }
  }
};

export default Service;
