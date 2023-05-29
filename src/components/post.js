import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import "../styles/post.css"
import { MdOutlineArrowBackIosNew } from 'react-icons/md'


export function Post() {

    const id = useParams();

    const [post, setPost] = useState({});

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(
                    `https://twitter-express-server.vercel.app/posts/listone?id=${id.id}&api_key=${process.env.REACT_APP_MINI_TWEETER_API_KEY}`
                );
                const postData = await response.json();
                setPost(postData.post);
                console.log("post", post);
                console.log(postData)
            } catch (error) {
                console.log("Error", error);
            }
        };
        fetchPost();
    }, [id]);

    return (
        <div>
            < MainLayout >
                <div>
                    <div className="one-page-post-div">
                        <div className="one-page-post-tweet">
                            <Link to="/">
                                <MdOutlineArrowBackIosNew className="one-page-post-back" />
                            </Link>
                            <p>Tweet from <Link to={`/user/${post?.owner?._id}`} className="one-page-post-tweet-span">{post?.owner?.username}</Link></p>


                        </div>
                    </div>
                    <div className="one-page-post">
                        {post ? (
                            <div className="one-post">
                                <div className="one-post-user">
                                    <img src={post?.owner?.image} />
                                </div>
                                <div className="one-post-content">
                                    <Link to={`/user/${post?.owner?._id}`} className="one-post-content-title">{post?.owner?.username}</Link>
                                    <p className="one-post-content-text">{post.text}</p>
                                    <p className="one-post-content-date">
                                        Posted on {new Date(post?.date).toLocaleString()}
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <p>Data is loading...</p>
                        )}
                    </div>
                </div>
            </MainLayout >
        </div >
    )
}





