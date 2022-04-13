import React from 'react';

function Taskitem({task,removeTask,changeStatus}) {
    return (
        <li>
            <span className={task.status ? 'status done' : 'status active'} onClick={() => changeStatus(task)}/>
            {task.name}
            <button onClick={() => removeTask(task)}>Delete</button>
        </li>
    );
}

export default Taskitem;