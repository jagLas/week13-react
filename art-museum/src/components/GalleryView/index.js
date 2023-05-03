import { useParams, Route, useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";
import ArtImageTile from "../ArtImageTile";
import ArtDescription from "../ArtDescription";

function GalleryView ({galleries}) {
    const {galleryId} = useParams();
    const {path} = useRouteMatch();
    const gallery = galleries.find(gallery => gallery.id === parseInt(galleryId));

    return (
        <>
            <h2>{gallery.name}</h2>
            <Route exact path={`/galleries/${galleryId}`}>
                {gallery.objects.map(art => {
                    return <ArtImageTile key={art.id} art={art}/>
                })}
            </Route>
            <Route path={`${path}/art/:artId`}>
                <ArtDescription gallery={gallery} works={gallery.objects}/>
            </Route>
        </>
    )
}

export default GalleryView;