import React from 'react';


function Taskinput({value, handleInput, handleAddTask}) {
    return (
        <input
            type="text"
            value={value}
            onChange={handleInput}
            onKeyUp={handleAddTask}

        />
    );
}

export default Taskinput;