import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoNewsApiHeaders = {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
    'X-RapidAPI-Key': 'c8156bd397msh6faa567f3446c0dp10009ejsn876ef5b87183'
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

const createRequest = (url) => ({ url, headers: cryptoNewsApiHeaders })

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
});

export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi;

// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://bing-news-search1.p.rapidapi.com/news',
//   params: {textFormat: 'Raw', safeSearch: 'Off'},
//   headers: {
//     'X-BingApis-SDK': 'true',
//     'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
//     'X-RapidAPI-Key': 'c8156bd397msh6faa567f3446c0dp10009ejsn876ef5b87183'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });