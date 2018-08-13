import React from 'react';

function Reset({ defaultSettings }) {
    return (
        <div className="setting">
            <button className="reset-btn" onClick={defaultSettings}>Сбросить фильтры</button>
        </div>
    );
}

export default Reset;