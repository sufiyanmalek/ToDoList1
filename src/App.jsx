// import { uuid } from "uuid";

import ToDoInput from "./component/ToDoInput";
import ToDoList from "./component/ToDoList";

function App() {
  return (
    <>
      <div>
        <div className="row">
          <ToDoInput />
          <ToDoList />
        </div>
      </div>
    </>
  );
}

export default App;
