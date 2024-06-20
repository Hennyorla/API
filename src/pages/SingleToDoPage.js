import ToDoCard from "../components/todos/ToDoCard";


const SingleToDoPage = () => {

    
    return (
      <section className="container">
        <div className="row">
          <div className="col-lg-3"></div>
          <ToDoCard />
          <div className="col-lg-3"></div>
        </div>
      </section>
    );
  };

export default SingleToDoPage;
