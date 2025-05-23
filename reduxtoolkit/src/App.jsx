import { Provider } from 'react-redux'
import './App.css'
import TodoList from './components/Todos'
import { store } from './app/store'

function App() {

  return (
    <Provider store={store}>
      <TodoList></TodoList>
    </Provider>
  )
}

export default App
