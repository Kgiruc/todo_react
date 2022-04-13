import React from 'react';
import Taskitem from "./Taskitem";

function Tasklist({tasks,status,changeStatus,removeTask}) {
    return (
        <ul>
            {tasks
                .filter((task)=> status === 'all'? true : task.status === status)
                .map((task) => <Taskitem key={task.id} task={task} changeStatus={changeStatus} removeTask={removeTask}/>)}
        </ul>
    );
}

export default Tasklist;