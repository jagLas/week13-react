import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import GalleryView from "./components/GalleryView";

function App() {
  return (
    <>
      <GalleryNavigation galleries={harvardArt.records} />
      <Route path ="/galleries/:galleryId">
        <GalleryView galleries={harvardArt.records} />
      </Route>
    </>
    
  );
}

export default App;
