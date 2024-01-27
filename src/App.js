import './App.css'
import { useTodosQuery } from './store/productApi';

function App() {

  const { data } = useTodosQuery()
  console.log(data);
  return (
    <div className="App">
    </div>
  );
}

export default App;
