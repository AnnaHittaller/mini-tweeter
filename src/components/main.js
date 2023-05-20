import React, { useState, useEffect } from "react"
import MainLayout from "../layouts/MainLayout";
import '../styles/main.css'

export function Main() {

    const [list, setList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://twitter-express-server.vercel.app/posts/list');
                const data = await response.json();
                // console.log(data)
                setList(data.posts);
                // console.log(list)
            } catch (error) {
                console.log('Error', error)
            }
        }
       
        fetchData();
    }, [])

 

    return (
        <MainLayout>
            <div className="main">
                <div>
                    <div className="posts">{list.map((item, index) => (
                        <p key={index}>
                            <img src={item.owner.image} />
                            <div >
                                <p>{item.owner.username}</p>
                                <p>{item.text}</p>
                                <p>{item.date}</p>
                            </div>
                        </p>
                    ))}</div>

                </div>
            </div>
        </MainLayout>
    )
}