import { useState } from "react";
import "./App.css";
import Counter from "./MobX/components/Counter";
import Todo from "./MobX/components/Todo";
import { HookContext } from "./useHooks/useContext/HookContext";


function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      {/* <Counter />
      <Todo />
      <>
        <h1>{count}</h1>
        <button
          style={{ marginRight: "10px" }}
          onClick={() => setCount(count + 1)}
        >
          Увеличить
        </button>
        <button onClick={() => setCount(prev => prev-1)}>Уменьшить</button>
      </> */}
      <HookContext />
    </>
  );
}

export default App;
