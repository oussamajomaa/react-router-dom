import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className='bg-slate-500 text-2xl text-white flex gap-6 p-5'>
            <Link to={'/'}>Accueil</Link>
            <Link to={'/about'}>À propos</Link>
            <Link to={'/contact'}>Contactez-nous</Link>
        </nav>
    )
}
