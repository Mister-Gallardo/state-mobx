import { observer } from "mobx-react";
import counter from "../store/Counter";

const Counter = observer(() => {

  return (
    <>
      <h1>{counter.total}</h1>
      <button
        style={{ marginRight: "10px" }}
        onClick={() => counter.increment()}
      >
        Увеличить
      </button>
      <button onClick={() => counter.decrement()}>Уменьшить</button>
    </>
  );
});

export default Counter;
