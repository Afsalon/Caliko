import { domain } from '../Store/constants';
import axios from 'axios';

let cancelToken;

export const getFilteredArticles = async (query, count) =>
{
    if (typeof cancelToken != typeof undefined)
    {
        cancelToken.cancel("Cancel")
    }
    cancelToken = axios.CancelToken.source()

    const url = `${domain}/articles/search/${query}/${count}/`;
    return axios.get(url, { cancelToken: cancelToken.token }).then((response) =>
    {
        return {
            data: response.data, status: response.status
        }
    })
}