import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ArticleDetails() {
   const [post,setPost] = useState({})
    const { id } = useParams()
    async function getPost() {
        const response = await fetch('/articles.json')
        const data = await response.json()
        console.log(data)
        const article = data.find(item => item.id == id)
        console.log((article))
        setPost(article)

    }

    useEffect(() => {
        getPost()
    }, [])
    return (
        <div className="flex justify-between p-5">
            <div>
                <h2 className="text-3xl">{post.titre}</h2>
                <p>{post.contenu}</p>
                <h3> Auteur: {post.auteur.nom} {post.auteur.prenom}</h3>
                {post.tags && post.tags.map(tag => <span className="badge badge-accent m-2">{tag}</span>)}

            </div>
            <img src={post.auteur && post.auteur.avatar} width={300} alt="" />
            <Link to={'/'} className="btn btn-primary p-5">Retour</Link>
            
        </div>
    )
}
