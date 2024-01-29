import { useContextAlbum } from "./Context";
export const Starter = () => {
    const { handleStart } = useContextAlbum();
    return (
        <div className="radio_box_starter">
            <div className="btn_wrapper" onClick={() => handleStart()}>
                <i className="fa-solid fa-power-off"></i>
            </div>
        </div>
    );
};
