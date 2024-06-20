import { Routes, Route, Navigate } from "react-router-dom"
import AllToDoPage from "../../pages/AllToDoPage";
import SingleToDoPage from "../../pages/SingleToDoPage";

const AppRoutes = () => {   

return <Routes>

<Route path="/todos" element={<AllToDoPage />} />
      
      <Route path="/todos/:todoTitle" element={<SingleToDoPage />} />
</Routes>


};



export default AppRoutes;