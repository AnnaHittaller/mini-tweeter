import React, { useState, useEffect } from "react"
import MainLayout from "../layouts/MainLayout";
import '../styles/main.css'
import { Link } from "react-router-dom";

export function Main() {

    const [list, setList] = useState([]);



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://twitter-express-server.vercel.app/posts/list');
                const data = await response.json();
                // console.log(data)
                setList(data.posts);
                console.log("list",list)
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
						<div className="posts">
							{list.map((item, index) => (
								<p className="post" key={index}>
									<Link to={`/user/${item.owner._id}`}>
										<img src={item.owner.image} />
									</Link>
									<div className="post-content">
										<p className="post-content-title">{item.owner.username}</p>
										<p>{item.text}</p>
										<p className="post-content-date">
											Posted on {new Date(item.date).toLocaleString()}
										</p>
									</div>
								</p>
							))}
						</div>
					</div>
				</div>
			</MainLayout>
		);
}