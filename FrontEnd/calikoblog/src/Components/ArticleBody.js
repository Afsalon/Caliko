import './css/article.css';
import { useCallback, useContext, useEffect, useState } from 'react';
import { getArticles } from '../Services/getArticles';
import { ContextApi } from '../App';
import { actions } from '../Store/actions';
import Articles from './Articles';
const ArticleBody = () =>
{
    const { state, dispatch } = useContext(ContextApi);
    const [check, setCheck] = useState(true);

    const get_articles = useCallback(() =>
    {
        if (state.count !== state.last_page)
        {
            getArticles(state.count).then(response =>
            {
                if (response.status === 200)
                {
                    if (response.data.length === 10)
                    {
                        setCheck(false)
                    }

                    dispatch({ type: actions.set_articles, payload: response.data })
                }
            })
            dispatch({ type: actions.increment_last_page })
        }
    }, [state.count, state.last_page, dispatch])




    useEffect(() =>
    {
        get_articles()
    }, [state.count, get_articles])
    return (
        <div className='article-bg-in'>
            <main className="article-body">
                {state.loading_articles ?
                    <div className='shift'>
                        <section className='loadingspinner'></section>
                    </div>
                    :
                    state.articles.map((obj) =>
                    {
                        return <Articles key={obj.id} id={obj.id} title={obj.title} image={obj.image} user={obj.user.username} opening={obj.opening} category={obj.category.name} created_date={obj.created_date} />
                    })}
                {check ? <p></p> : <p className="load-more" onClick={async () =>
                {
                    dispatch({ type: actions.increment_count })
                    setCheck(true)
                }
                }>Load More</p>}
            </main>
        </div>
    )
}
export default ArticleBody;
