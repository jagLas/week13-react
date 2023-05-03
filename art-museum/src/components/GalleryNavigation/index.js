import { NavLink } from "react-router-dom";
import './GalleryNavigation.css';

function GalleryNavigation({galleries}) {

    return(
        <nav>
            <h1>Galleries</h1>
            <div className="nav-links">
                <NavLink className="nav-link" exact to="/">Home</NavLink>
                {galleries.map(gallery => {
                    return (
                        <NavLink className="nav-link" key={gallery.id} to={`/galleries/${gallery.id}`}>{gallery.name}</NavLink>
                    )
                })}
            </div>
        </nav>
    )
}

export default GalleryNavigation;