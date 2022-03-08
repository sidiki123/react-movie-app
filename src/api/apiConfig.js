const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'dd822e283c5aa1b36b0515142f9c5b34',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;