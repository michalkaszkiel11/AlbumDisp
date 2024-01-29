import { Radio } from "./Albumdisplayer";
import { ContextAlbum } from "./Context";
function App() {
    return (
        <div className="App">
            <ContextAlbum>
                <Radio />
            </ContextAlbum>
        </div>
    );
}

export default App;
