import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import CourseDetail from "../components/courses/CourseDetail";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
      </Routes>
      
    </>
  );
};

export default AppRoutes; // Exportiert die Komponente
