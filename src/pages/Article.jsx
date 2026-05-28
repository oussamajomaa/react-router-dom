import { useEffect, useState } from "react"
import { Link } from "react-router-dom"



export default function Article() {
    const [posts, setPosts] = useState([])
    console.log(posts)
    async function getPost() {
        const response = await fetch('public/articles.json')
        const data = await response.json()
        setPosts(data)
    }

    useEffect(()=> {
        getPost()
    }, [])
  return (
    <div>
        {posts.map(item => (
            <div key={item.id} className="flex justify-between p-5 m-3 border rounded">
                <h2 className="text-2xl font-bold">{item.titre}</h2>
                <Link to={`/article/${item.id}`} className="btn btn-outline btn-primary text-2xl">Plus...</Link>
            </div>
        ))}
    </div>
  )
}
