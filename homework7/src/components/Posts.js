import React, { useEffect, useState } from "react";
import { fetchPosts } from "../api";
import Post from "./Post";

function Posts() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetchPosts().then((data) => {
            setPosts(data);
        }).catch((err) => {
            setError(err.message);
        }).finally(() => {
            setIsLoading(false);
        })
    }, [])

    function deletePost(postId) {
        setPosts(posts.filter(post => post.id !== postId))
    }

    if (error) {
        return (
            <h1>Error</h1>
        )
    }

    if (isLoading) {
        return (
            <h1>Loading...</h1>
        )
    }

    return (
        <div>
            {posts.map((post) =>
                <Post key={post.id} data={post} deletePost={deletePost} />
            )}
        </div>
    )
}

export default Posts;
