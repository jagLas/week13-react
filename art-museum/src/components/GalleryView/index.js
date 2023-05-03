import { useParams, Route } from "react-router-dom/cjs/react-router-dom.min";
import ArtImageTile from "../ArtImageTile";

function GalleryView ({galleries}) {
    const {galleryId} = useParams();
    const gallery = galleries.find(gallery => gallery.id === parseInt(galleryId));

    return (
        <>
            <h2>{gallery.name}</h2>
            <Route exact path={`/galleries/${galleryId}`}>
                {gallery.objects.map(art => {
                    return <ArtImageTile key={art.id} art={art}/>
                })}
            </Route>
        </>
    )
}

export default GalleryView;