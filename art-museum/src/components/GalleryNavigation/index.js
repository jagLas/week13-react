import { NavLink } from "react-router-dom";
import './GalleryNavigation.css';

function GalleryNavigation({galleries}) {

    return(
        <nav>
            <h1>Galleries</h1>
            <NavLink exact to="/">Home</NavLink>
            {galleries.map(gallery => {
                return (
                    <NavLink key={gallery.id} to={`/galleries/${gallery.id}`}>{gallery.name}</NavLink>
                )
            })}
        </nav>
    )
}

export default GalleryNavigation;