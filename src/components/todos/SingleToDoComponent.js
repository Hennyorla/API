import { useEffect } from "react";
import ToDoCard from "./ToDoCard";



const SingleToDoComponent = () => {

  const [getSingleToDo ] =  

useEffect(() => {
    getSingleToDo();
  }, []);

  return (
    <section className="container">
      <div className="row">
        <div className="col-lg-8">
          <ToDoCard />
        </div>
        <div className="col-lg-4"></div>
      </div>
    </section>
  );
};

export default SingleToDoComponent;