import "./styles.css";

import { Todo, Todolist } from "./classes";
import { crearTodoHtml } from "./js/componentes";

export const todoList = new Todolist();

const tarea = new Todo("Aprender Js!!!");

todoList.nuevoTodo(tarea);

console.log(todoList);

crearTodoHtml(tarea);
