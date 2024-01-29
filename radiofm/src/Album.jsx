import { useContextAlbum } from "./Context";
export const Album = ({ data }) => {
    const { selectedAlbum, getAlbumDetails } = useContextAlbum();
    return (
        <div className="channels_list">
            <div className="albums">
                {data &&
                    data.map((item) => (
                        <div key={item.id} className="album-item">
                            <p onClick={() => getAlbumDetails(item.id)}>
                                {item.name}
                            </p>
                            {selectedAlbum && selectedAlbum.id === item.id && (
                                <div className="album_single">
                                    <div className="visual_details">
                                        <i className="fa-regular fa-thumbs-down"></i>
                                        {selectedAlbum.artist.image_url && (
                                            <img
                                                src={
                                                    selectedAlbum.artist
                                                        .image_url
                                                }
                                                alt="artist"
                                            />
                                        )}
                                        <i className="fa-regular fa-thumbs-up"></i>
                                    </div>
                                    <p className="visual_name">
                                        {selectedAlbum.full_title}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
            </div>
        </div>
    );
};
