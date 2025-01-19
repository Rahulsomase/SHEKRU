import logo from './logo.svg';
import './App.css';


const ComponentA = ({ doTaskA }) => <button onClick={doTaskA}>Run Task A</button>;
const ComponentB = ({ doTaskB }) => <button onClick={doTaskB}>Run Task B</button>;
 
 
  const app = () => {
    const handleTaskA = () => console.log("Task A executed!");
    const handleTaskB = () => console.log("Task B executed!");
  
    const handleAllTasks = () => {
      handleTaskA();
      handleTaskB();
      console.log("All tasks executed from parent!");
    };
  
    return (
      <div>
        <h1>Combined Multi-Component Example</h1>
        <ComponentA doTaskA={handleTaskA} />
        <ComponentB doTaskB={handleTaskB} />
        <button onClick={handleAllTasks}>Run All Tasks</button>
      </div>
    );
  };


export default app;


  // ------------------------------------------------------------------------------------------------------------
