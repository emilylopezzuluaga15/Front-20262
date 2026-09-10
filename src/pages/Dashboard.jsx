import { useEffect, useState } from 'react';
import StatCard from '../components/StatCard';
import Title from '../components/Title';
import { getStudents } from '../services/studentService';
import { getCourses } from '../services/courseService';
import { getEnrollments } from '../services/enrollmentService';

export default function Dashboard() {
  const [estudiantes, setEstudiantes] = useState([]);
  const [cursos, setCursos] = useState([]);
  const [inscripciones, setInscripciones] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([getStudents(), getCourses(), getEnrollments()])
      .then(([estudiantesData, cursosData, inscripcionesData]) => {
        setEstudiantes(estudiantesData);
        setCursos(cursosData);
        setInscripciones(inscripcionesData);
      })
      .catch((err) => setError(err.message));
  }, []);

  return (
    <main className="p-8 max-w-6xl mx-auto w-full">
      <Title text="Dashboard" subtitle="Bienvenido al Sistema de Gestion de Cursos" />

      {error && (
        <p className="text-xs text-red-600 bg-red-50 border border-red-200 rounded-md px-4 py-2 mt-4">
          {error}
        </p>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        <StatCard title="Estudiantes" total={estudiantes.length} />
        <StatCard title="Cursos" total={cursos.length} />
        <StatCard title="Inscripciones" total={inscripciones.length} />
      </div>
    </main>
  );
}
