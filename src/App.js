import './App.scss';
import {useState} from "react";

import Header from "./components/Header";
import Taskinput from "./components/Taskinput";
import Tasklist from "./components/Tasklist";



function * gen(){
    let id = 0;
    while (true){
        yield id;
        id++;
    }
}

const g= gen()



function App() {
    const [value,setValue] = useState('');
    const [tasks, setTasks] = useState([]);
    const [status, setStatus] =useState('all')


    const handleInput = (event) => {
        setValue(event.target.value);
    }


    const handleAddTask = (event) => {
        if (event.key === 'Enter' && value.trim() !=='') {
            setTasks([...tasks, {
                id: g.next().value,
                name: value,
                status: false
            }]);
            setValue('');
        }
    }

    const removeTask = (task) => {
        setTasks(tasks.filter((item) => item !== task));
    }

    const changeStatus = (task) => {
        setTasks(tasks.map((item) => {
            if(item === task){
                item.status = !item.status;
            }

            return item;
        }))
    }

    const clearCompleted = () => {
        setTasks(tasks.filter((item) => !item.status));
    }


  return (
    <div className="App">
       <Header />
        <Taskinput value={value} handleInput = {handleInput} handleAddTask = {handleAddTask}/>
        <Tasklist status={status} tasks={tasks} changeStatus={changeStatus} removeTask={removeTask}/>

        {tasks.filter((task) => task.status).length ? <button className='remove' onClick={clearCompleted}>Remove Completed</button>: ''}

        <div>
            <button className='button' onClick={() => setStatus('all')}>All</button>
            <button className='button' onClick={() => setStatus(false)}>Active</button>
            <button className='button' onClick={() => setStatus(true)}>Done</button>
        </div>


    </div>
  );
}

export default App;
