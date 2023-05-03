import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import GalleryView from "./components/GalleryView";

function App() {
  return (
    <>
      <GalleryNavigation galleries={harvardArt.records} />
      <Switch>
        <Route exact path="/">
          <h2>Harvard Art Museum</h2>
          <p>Look, but Don't Touch. Please select a gallery in the navigation bar</p>
        </Route>
        <Route path ="/galleries/:galleryId">
          <GalleryView galleries={harvardArt.records} />
        </Route>
        <Route>
          <h2>Page Not Found</h2>
        </Route>
      </Switch>

    </>
    
  );
}

export default App;
