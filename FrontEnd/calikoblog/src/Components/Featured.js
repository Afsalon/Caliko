import './css/featured.css';
import './css/loader.css';
import { useEffect, useContext, useCallback } from 'react';
import { getFeatured } from '../Services/getFeatured';
import { ContextApi } from '../App';
import { actions } from '../Store/actions';
import Feature from './Feature';

const Featured = () =>
{
    const { state, dispatch } = useContext(ContextApi);
    const get_featured = useCallback(() =>
    {
        getFeatured().then(response =>
        {
            if (response.status === 200)
                dispatch({ type: actions.get_featured, payload: response.data })
        });
    }, [dispatch])
    useEffect(() =>
    {
        get_featured()
    }, [get_featured])

    return (
        <div className="featured">
            <div className='featured-top'>
                <h1 className='top-text'>Featured Titles</h1>
                <div className='underline'></div>
            </div>
            <div className='featured-bottom'>
                {state.loading_featured ?
                    <section className='loadingspinner'></section> :
                    state.featured.map((obj) =>
                    {
                        return <Feature key={obj.id} id={obj.id} category={obj.category.name} title={obj.title} image={obj.image} />
                    })
                }
            </div>

        </div>
    );
}
export default Featured;
