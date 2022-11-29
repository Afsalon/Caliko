import { domain } from '../Store/constants';
import axios from 'axios';

let cancelToken;

export const getCreator = async () =>
{
    if (typeof cancelToken != typeof undefined)
    {
        cancelToken.cancel("Cancel")
    }
    cancelToken = axios.CancelToken.source()

    const url = `${domain}/main/author/`;
    return axios.get(url, { cancelToken: cancelToken.token }).then((response) =>
    {
        return {
            data: response.data, status: response.status
        }
    })
}