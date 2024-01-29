import { Album } from "./Album";
import { useContextAlbum } from "./Context";
import { Suspense } from "react";
export const AlbumDisplayer = ({ shouldRenderFunction }) => {
    const { data, error, selectedAlbum } = useContextAlbum();
    function Loading() {
        return <div className="loading-spinner"></div>;
    }
    return (
        <div className="radio_box">
            <header>
                <i className="fa-solid fa-chevron-left"></i>
                <h2>Albums</h2>
                <i
                    className="fa-solid fa-power-off"
                    onClick={shouldRenderFunction}
                ></i>
            </header>
            {error ? (
                <div className="error_msg">
                    {error.toString()} Public API has failed😥
                </div>
            ) : (
                <Suspense fallback={<Loading />}>
                    <Album data={data} />
                </Suspense>
            )}
            <div className="channel_current">
                <strong>Currently playing</strong>
                {selectedAlbum && (
                    <div className="current_song">
                        {selectedAlbum.full_title}
                    </div>
                )}
            </div>
        </div>
    );
};
