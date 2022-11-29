import './css/blog.css';
import Blog from './Blog';
import { getArticle } from '../Services/getArticle';
import { useCallback, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ContextApi } from '../App';
import { actions } from '../Store/actions';
import { domain } from '../Store/constants';
const BlogBody = () =>
{
    const { id } = useParams();
    const { state, dispatch } = useContext(ContextApi);
    let date = new Date(state.article.created_date).toDateString();


    const get_article = useCallback(() =>
    {
        getArticle(id).then(resp =>
        {
            if (resp.status === 200)
            {
                dispatch({ type: actions.set_article, payload: resp.data })
            }
        })
    }, [id, dispatch])

    useEffect(() =>
    {
        get_article()
    }, [get_article])
    if (state.loading_article)
    {
        return (
            <div className='loading-div'>
                <div className='loadingspinner'></div>
            </div >
        );
    }
    else
    {
        return (
            <div className="blog-body">
                <section className="blog-left">
                    <h1 className="blog-titile">{state.article.title}</h1>
                    <div className='underline'></div>
                    <p className='letter blog-opening'>{state.article.opening}</p>
                    <img className='blog-picture' src={`${domain}${state.article.image}/`} alt="blog" />
                    <div className='blog-subsections'>
                        <Blog />
                    </div>
                </section>
                <section className="blog-right">
                    <div className='author-details'>
                        <section className='author-details-section'>
                            <div className='block-author'>
                                <p className='blog-author'>Author</p>
                                <p className='blog-author-value'>{state.article.user.username}</p>
                            </div>
                            <div className='block-author'>
                                <p className='blog-social'>Genre</p>
                                <p className='blog-social-value'>{state.article.category.name}</p>
                            </div>
                        </section>
                        <section className='author-details-section'>
                            <div className='block-author'>
                                <p className='blog-social'>Published Date</p>
                                <p className='blog-social-value'>{date}</p>
                            </div>
                            <div className='block-author'>
                                <p className='blog-social'>Image Source</p>
                                <p className='blog-social-value'>{state.article.source}</p>
                            </div>
                        </section>

                    </div>
                </section>
            </div>
        )
    }
}

export default BlogBody;
