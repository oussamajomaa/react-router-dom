
import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Article from './pages/Article'
import ArticleDetails from './pages/ArticleDetails'
import Page404 from './pages/Page404'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'

const url = "public/articles.json"
function App() {
	// const [posts, setPosts] = useState([])
	// async function getPost() {
	// 	const response = await fetch(url)
	// 	const data = await response.json()
	// 	setPosts(data)
	// }

	// useEffect(() => {
	// 	getPost()
	// }, [])
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='' element={<Article />} />
				<Route path='article/:id' element={<ArticleDetails />} />
				<Route path='about' element={<About />} />
				<Route path='contact' element={<Contact />} />
				<Route path='*' element={<Page404 />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
