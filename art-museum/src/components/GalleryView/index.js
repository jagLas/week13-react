import { useParams } from "react-router-dom/cjs/react-router-dom.min";

function GalleryView ({galleries}) {
    const {galleryId} = useParams();
    const gallery = galleries.find(gallery => gallery.id === parseInt(galleryId));

    return (
        <h2>{gallery.name}</h2>
    )
}

export default GalleryView;