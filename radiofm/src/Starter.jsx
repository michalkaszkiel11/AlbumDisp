import { AlbumDisplayer } from "./AlbumDisplayer";
import { useContextAlbum } from "./Context";
import { useState, useEffect } from "react";
export const Starter = () => {
    const { handleStart, start } = useContextAlbum();
    const [shouldRender, setShouldRender] = useState(false);
    const handleStartEvent = () => {
        const delay = 1300;
        const timeoutId = setTimeout(() => {
            setShouldRender(true);
        }, delay);
        console.log(shouldRender);
        return () => clearTimeout(timeoutId);
    };
    const handleShouldRender = () => {
        setShouldRender(!shouldRender);
    };
    return (
        <>
            {!shouldRender && (
                <div className="radio_box_starter">
                    <div
                        className="btn_wrapper"
                        onClick={() => {
                            handleStart();
                            handleStartEvent();
                        }}
                    >
                        <i className="fa-solid fa-power-off"></i>
                    </div>
                    <span className={start ? "dot_on" : "dot_off"}></span>
                </div>
            )}

            {shouldRender && (
                <AlbumDisplayer shouldRenderFunction={handleShouldRender} />
            )}
        </>
    );
};
