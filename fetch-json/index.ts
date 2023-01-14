import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  const todo = response.data as Todo;

  const ID = todo.id;
  const Title = todo.title;
  const Completed = todo.completed;

  logTodo(ID, Title, Completed);
})

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(id, title, completed)
}