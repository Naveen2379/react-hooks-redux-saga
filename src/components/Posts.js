import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../actions";


export const Posts = () => {
    const postsInfo = useSelector( state => state.postsInfo);
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(getPosts());
    }, [dispatch])

    console.log(postsInfo);
    const { posts }= postsInfo;
    return (
        <div>
            <h1> Hello Posts Component</h1>
            {posts && posts.map( post => {
                return <p key={post.id}>{post.title}</p>
            })}
        </div>
    )
}