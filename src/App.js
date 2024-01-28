import { Fragment } from 'react';
import './App.css'
import { useAddTodosMutation, useTodoQuery, useTodosQuery } from './store/todoApi';

function App() {

  // eslint-disable-next-line
  const { data, isLoading, isFetching, isSuccess, isError } = useTodosQuery()
  console.log(data);

  return (
    <div className="App">
      <h1>Todos</h1>
      {isLoading && <h5>...loading</h5>}
      {isFetching && <h5>...fetching</h5>}
      {isError && <h5>...error ocurred</h5>}
      {isSuccess && (
        <div>
          {data.map(todo => (
            [<span key={todo.id}>{todo.title}</span>,
            <span key={todo.userId}><TodoDetails id={todo.id}/></span>]
          ))}
        </div>
      )}
      <div>
        <AddTodos/>
      </div>
    </div>
  );
}

export const TodoDetails = ({id}) => {
  const { data } = useTodoQuery(id)

  return (
    <pre>
      { JSON.stringify(data, undefined, 2) }
    </pre>
  )
}

export const AddTodos = () => {
  const { refetch } = useTodosQuery()
  const [addTodos] = useAddTodosMutation()
  const todo = {
    "userId": 1,
    "title": "Fuck nigga !",
    "completed": true,
    "id": "202"
  }

  const onAdd = async() => {
    await addTodos(todo)
    refetch()
  }

  return (
    <Fragment>
      <button onClick={onAdd}> add todo </button>
    </Fragment>
  )
}


export default App;
