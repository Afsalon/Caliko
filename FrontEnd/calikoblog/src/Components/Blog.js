import { useCallback, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getBlogs } from '../Services/getBlogs';
import { ContextApi } from '../App';
import { actions } from "../Store/actions";

const Blog = () =>
{
    const { id } = useParams();
    const { state, dispatch } = useContext(ContextApi);
    const get_blogs = useCallback(() =>
    {
        getBlogs(id).then(resp =>
        {
            if (resp.status === 200)
            {
                dispatch({ type: actions.set_blogs, payload: resp.data })
            }
        })
    }, [id, dispatch])
    useEffect(() =>
    {
        get_blogs()
    }, [get_blogs])
    return (

        state.blogs.map((obj) =>
        {
            return (
                <div key={obj.id}>
                    <div className="blog-header">
                        <h1 className='blog-titile'>{obj.title}</h1>
                        <div className='underline'></div>
                    </div>
                    <p className='blog-opening'>{obj.blog}</p>
                </div>
            )
        })


    )
}
export default Blog;
