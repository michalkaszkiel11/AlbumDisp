import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
const AlbumContext = createContext();

export const ContextAlbum = ({ children }) => {
    const [selectedAlbum, setSelectedAlbum] = useState(null);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const options = {
        method: "GET",
        url: "https://genius-song-lyrics1.p.rapidapi.com/artist/albums/",
        params: {
            id: "344497",
            per_page: "20",
            page: "1",
        },
        headers: {
            "X-RapidAPI-Key":
                "f1461d475bmshd6ce159aa99275ap1c40c7jsn1331ecfa2def",
            "X-RapidAPI-Host": "genius-song-lyrics1.p.rapidapi.com",
        },
    };
    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {
        try {
            const response = await axios(options);
            setData(response.data.albums);
            console.log(response.data);
        } catch (error) {
            console.error(error);
            setError(error.message);
        }
    };
    const getAlbumDetails = (id) => {
        const album = data.find((album) => album.id === id);
        setSelectedAlbum(album);
    };

    return (
        <AlbumContext.Provider
            value={{
                data,
                selectedAlbum,
                setSelectedAlbum,
                getAlbumDetails,
                error,
            }}
        >
            {children}
        </AlbumContext.Provider>
    );
};
export const useContextAlbum = () => useContext(AlbumContext);
