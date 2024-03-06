import React, { useEffect, useState } from 'react';
import './App.css';
import SendIcon from '@mui/icons-material/Send';
import Eachtask from './Eachtask';

function App() {
  const [task, setTask] = useState('')
  const [taskList, setTaskList] = useState([]);

  const handleInput = (e) => {
    setTask(e.target.value)
  };

  const handleSend = () => {
    setTaskList([...taskList, task]);
  };

  useEffect(() => {
    // console.log(taskList); 
  }, [taskList])

  return (
    <div className='container'>
      <div className='inputs'>
        <input type="text" name="task" id="task" onChange={handleInput} />
        <SendIcon onClick={handleSend} />
      </div>
      <div>
        {/* Pass the taskList to the Eachtask component */}
        {taskList.map((item) => {
          return <Eachtask taskList={taskList} />
        })}
      </div>
    </div>
  );
}

export default App;
