import { observer } from "mobx-react";
import todo from "../store/todo";

const Todo = observer(() => {
  return (
    <div style={{marginLeft: 500}}>
        <button onClick={() => todo.fetch()}>Добавить фетч</button>
        {todo.todo.map(elem => (
            <div key={elem.id} style={{display: 'flex', alignItems: 'center', gap: 3}}>
                <input type="checkbox" checked={elem.completed} onChange={() => todo.addToCompleted(elem)}></input>
                <p>{elem.title}</p>
                <button style={{height: 20}} onClick={() => todo.removeTodo(elem.id)}>X</button>
            </div>
        ))}
    </div>
  );
})

export default Todo;
