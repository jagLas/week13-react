import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";
import './ArtImageTile.css'

function ArtImageTile({art}) {
    const {url} = useRouteMatch();

    if(art.images.length === 0) {
        return
    }

    return (
        <Link to={`${url}/art/${art.id}`}>
            <img src={art.images[0].baseimageurl}></img>
        </Link>
    )
}

export default ArtImageTile;