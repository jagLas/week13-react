import { Link, useParams, useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";

function ArtDescription({gallery, works}) {
    const {artId, galleryId} = useParams();
    const work = works.find(work => work.id === parseInt(artId))

    return (
        <>
            <Link to={`/galleries/${galleryId}`}>Back to {gallery.name} Gallery</Link>
            <a href={`${work.url}`}>
                <h3>{work.title}</h3>
            </a>
            {work.images.map(image => {
                return (
                    <img key={image.imageid} src={image.baseimageurl}></img>
                )
            })}
            <div>Description:
                <p>{work.description}</p>
            </div>
            
            <div>Credit:
                <p>{work.creditline}</p>
            </div>
            
            <div>Technique:
                <p>{work.technique}</p>
            </div>
            
        </>

    )
}

export default ArtDescription;