import { useEffect } from "react";
import ToDoCard from "./ToDoCard";
import useHttp from "../../hooks/useHttp";



const AllToDoComponent = () => {

  const [sendHttpRequest, todos, errorMessage, isLoading] = useHttp();

  useEffect(() => {
    sendHttpRequest("todos", "GET")
  }, []);
  
  return (
    <>
      {errorMessage && <h1>Something went wrong</h1>}
      {todos?.length > 0 &&
        todos.map((todo) => {
          return (
            <ToDoCard
              todoTitle={todo.title}
              todoContent={todo.content}
              key={todo._id}
            />
          );
        })}
    </>
  );
};




export default AllToDoComponent;