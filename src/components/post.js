import { useParams } from "react-router";
import { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import "../styles/post.css"


export function Post() {

    const id = useParams();

    const [post, setPost] = useState({});

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(
                    `https://twitter-express-server.vercel.app/posts/listone?id=${id.id}`
                );
                const postData = await response.json();
                setPost(postData.post);
                console.log(post);
                console.log(postData)
            } catch (error) {
                console.log("Error", error);
            }
        };
        fetchPost();
    }, [id]);

    return (
        <div className="postt">
            <MainLayout>
                <div >
                    <div>
                        {post ? (
                            <>
                                <p className="post-page">{post.text}</p>
                            </>
                        ) : (
                            <p>Data is loading...</p>
                        )}
                    </div>
                </div>
            </MainLayout >
        </div >
    )
}