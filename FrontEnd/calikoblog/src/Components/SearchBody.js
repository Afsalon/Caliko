import { useState, useEffect, useCallback, useContext } from 'react';
import { getFilteredArticles } from '../Services/getFilteredArticles';
import { ContextApi } from '../App';
import { actions } from '../Store/actions';
import './css/search.css';
import Featured from './Featured';
import Articles from './Articles';
const SearchBody = () =>
{
    const [q, setQ] = useState('main');
    const { state, dispatch } = useContext(ContextApi);
    const [check, setCheck] = useState(true);
    const get_filtered_articles = useCallback(() =>
    {
        if (state.search_count !== state.search_last_page)
        {
            getFilteredArticles(q, state.search_count).then(response =>
            {
                if (response.status === 200)
                {
                    if (response.data.length === 10)
                    {
                        setCheck(false)
                    }

                    dispatch({ type: actions.set_search_articles, payload: response.data })
                }
            })
            dispatch({ type: actions.increment_search_last_page })
        }
    }, [state.search_count, state.search_last_page, dispatch, q])

    const handleSubmit = (e) =>
    {
        e.preventDefault()
        dispatch({ type: actions.reset_page })
    }

    useEffect(() =>
    {
        get_filtered_articles()
    }, [state.search_count, get_filtered_articles, q])

    return (
        <div>
            <form className='search-form' onSubmit={(e) => handleSubmit(e)}>
                <input type="search" className='search-box' onChange={(e) => setQ(e.target.value)} />
                <button className='search-button'>Search</button>
            </form>
            <div className='category-buttons'>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input type='submit' className='category-button' onClick={(e) => setQ(e.target.value)} value="Fiction" />
                    <input type='submit' className='category-button' onClick={(e) => setQ(e.target.value)} value="Psychology" /><br />
                    <input type='submit' className='category-button' onClick={(e) => setQ(e.target.value)} value="Realistic Fiction" />
                    <input type='submit' className='category-button' onClick={(e) => setQ(e.target.value)} value="Relationship" />
                    <input type='submit' className='category-button' onClick={(e) => setQ(e.target.value)} value="Horror" />
                    <input type='submit' className='category-button' onClick={(e) => setQ(e.target.value)} value="Anime" /><br />
                    <input type='submit' className='category-button' onClick={(e) => setQ(e.target.value)} value="Politics" />
                </form>
            </div>
            <div className='article-filter-div'>
                {state.search_articles.map(obj =>
                {
                    return <Articles key={obj.id} id={obj.id} title={obj.title} image={obj.image} user={obj.user.username} opening={obj.opening} category={obj.category.name} created_date={obj.created_date} />
                })}
                {check ? <p></p> : <p className="load-more" onClick={async () =>
                {
                    dispatch({ type: actions.increment_search_count })
                    setCheck(true)
                }
                }>Load More</p>}
            </div>
            <Featured />
        </div>
    );
}
export default SearchBody;
