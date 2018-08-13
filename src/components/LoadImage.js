import React from 'react';

function LoadImage({ imageChange }) {

    return (
        <div className="setting">
            <input type="text" id="download-input"/>
            <button className="download-btn" onClick={imageChange}>Загрузить</button>
        </div>
    );
}

export default LoadImage;