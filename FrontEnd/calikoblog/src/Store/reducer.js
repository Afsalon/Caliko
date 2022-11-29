import { actions } from './actions';

export const reducer = (state, action) =>
{
    if (action.type === actions.get_featured)
    {
        return {
            ...state,
            featured: action.payload,
            loading_featured: false,
        }
    }
    else if (action.type === actions.set_articles)
    {
        return {
            ...state,
            articles: state.articles.concat(action.payload),
            loading_articles: false,
        }
    }
    else if (action.type === actions.increment_count)
    {
        return {
            ...state,
            count: state.count + 1,
        }
    }
    else if (action.type === actions.increment_last_page)
    {
        return {
            ...state,
            last_page: state.count,
        }
    }
    else if (action.type === actions.set_creator)
    {
        return {
            ...state,
            creator: action.payload,
            loading_creator: false,
        }
    }
    else if (action.type === actions.set_search_articles)
    {
        return {
            ...state,
            search_articles: state.search_articles.concat(action.payload),
        }
    }
    else if (action.type === actions.increment_search_count)
    {
        return {
            ...state,
            search_count: state.search_count + 1,
        }
    }
    else if (action.type === actions.increment_search_last_page)
    {
        return {
            ...state,
            search_last_page: state.search_count,
        }
    }
    else if (action.type === actions.reset_page)
    {
        return {
            ...state,
            search_count: 1,
            search_last_page: 0,
            search_articles: [],
        }
    }
    else if (action.type === actions.set_blogs)
    {
        return {
            ...state,
            blogs: action.payload,
            loading_blog: false,
        }
    }
    else if (action.type === actions.set_article)
    {
        return {
            ...state,
            article: action.payload,
            loading_article: false,
        }
    }

    else
    {
        return {
            ...state,
        }
    }
}

