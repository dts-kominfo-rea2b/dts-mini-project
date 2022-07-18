const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3',
    apiKey: 'af715024a63a4ad95f21dff49888056e',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
}

export default apiConfig;