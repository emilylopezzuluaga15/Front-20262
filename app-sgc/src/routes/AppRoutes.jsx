import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Courses from '../pages/Courses';
import Enrollments from '../pages/Enrollments';
import Students from '../pages/Students';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/students" element={<Students />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/enrollments" element={<Enrollments />} />
    </Routes>
  );
}

export default AppRoutes;
