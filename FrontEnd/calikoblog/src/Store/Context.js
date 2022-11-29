import { useReducer } from "react";
import { reducer } from './reducer';

const initialState = {
    featured: [],
    articles: [],
    search_articles: [],
    creator: {},
    loading_creator: true,
    loading_featured: true,
    loading_articles: true,
    loading_article: true,
    loading_blog: true,
    count: 1,
    last_page: 0,
    search_count: 1,
    search_last_page: 0,
    blogs: [],
    article: [],
}
const Context = () =>
{
    const [state, dispatch] = useReducer(reducer, initialState);
    return [state, dispatch];
}

export default Context;