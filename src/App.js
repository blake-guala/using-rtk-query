import { Fragment } from 'react';
import './App.css'
import { useAddTodosMutation, 
  useDeleteTodoMutation, 
  useTodoQuery, 
  useTodosQuery, 
  useUpdateTodosMutation } from './store/todoApi';

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
            // [<span key={todo.id}>{todo.title}</span>,
            <span><TodoDetails key={todo.userId} id={todo.id}/></span>
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
  // const { refetch } = useTodosQuery()
  const [addTodos] = useAddTodosMutation()
  const [ upDateTodos ] = useUpdateTodosMutation()
  const [deleteTodo ] = useDeleteTodoMutation()
  const todo = {
    "userId": 5665,
    "title": "Fuck nigga !",
    "completed": true,
    "id": "202"
  }
  const todoUpdate = {
    "userId": 5665,
    "title": "hell yeah !",
    "completed": false,
    "id": "202"
  }

  const onAdd = async() => {
    await addTodos(todo)
    // refetch()
  }
  const onPut = async() => {
    // refetch()
    await upDateTodos(todoUpdate)
  }
  const onDelete = async() => {
    // refetch()
    await deleteTodo(todo.id)
  }

  return (
    <Fragment>
      <button onClick={onAdd}> add todo </button>
      <button onClick={onPut}> update todo </button>
      <button onClick={onDelete}> delete todo </button>
    </Fragment>
  )
}


export default App;
