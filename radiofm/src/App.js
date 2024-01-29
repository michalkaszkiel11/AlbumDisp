import { AlbumDisplayer } from "./AlbumDisplayer";
import { ContextAlbum } from "./Context";
import { Starter } from "./Starter";

function App() {
    return (
        <ContextAlbum>
            <div className="App">
                <Starter />
                <AlbumDisplayer />
            </div>
        </ContextAlbum>
    );
}

export default App;
