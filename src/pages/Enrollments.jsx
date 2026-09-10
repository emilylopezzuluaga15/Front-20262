import { useEffect, useState } from 'react';
import EnrollmentsModule from '../components/EnrollmentsModule';
import Modal from '../components/Modal';
import EnrollmentForm from '../components/EnrollmentForm';
import { getEnrollments, createEnrollment, updateEnrollment, deleteEnrollment } from '../services/enrollmentService';
import { getStudents } from '../services/studentService';
import { getCourses } from '../services/courseService';

export default function Enrollments() {
  const [searchTerm, setSearchTerm] = useState('');
  const [inscripciones, setInscripciones] = useState([]);
  const [cursos, setCursos] = useState([]);
  const [estudiantes, setEstudiantes] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingEnrollment, setEditingEnrollment] = useState(null);
  const [error, setError] = useState(null);

  const loadAll = async () => {
    try {
      const [inscripcionesData, cursosData, estudiantesData] = await Promise.all([
        getEnrollments(),
        getCourses(),
        getStudents(),
      ]);
      setInscripciones(inscripcionesData);
      setCursos(cursosData);
      setEstudiantes(estudiantesData);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    loadAll();
  }, []);

  const canAdd = estudiantes.length > 0 && cursos.length > 0;

  const inscripcionesEnriquecidas = inscripciones.map((insc) => {
    const estudiante = estudiantes.find((e) => e.id === insc.student_id);
    const curso = cursos.find((c) => c.id === insc.course_id);
    return {
      ...insc,
      estudianteNombre: estudiante ? `${estudiante.first_name} ${estudiante.last_name}` : 'N/D',
      cursoNombre: curso ? curso.name : 'N/D',
    };
  });

  const inscripcionesFiltradas = inscripcionesEnriquecidas.filter((i) =>
    `${i.estudianteNombre} ${i.cursoNombre}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAdd = () => {
    setEditingEnrollment(null);
    setModalOpen(true);
  };

  const handleEdit = (insc) => {
    setEditingEnrollment(insc);
    setModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteEnrollment(id);
      await loadAll();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSubmit = async (values) => {
    try {
      if (editingEnrollment) {
        await updateEnrollment(editingEnrollment.id, values);
      } else {
        await createEnrollment(values);
      }
      setModalOpen(false);
      await loadAll();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      {error && (
        <p className="mx-8 mt-4 text-xs text-red-600 bg-red-50 border border-red-200 rounded-md px-4 py-2">
          {error}
        </p>
      )}
      <EnrollmentsModule
        searchTerm={searchTerm}
        onSearchChange={(e) => setSearchTerm(e.target.value)}
        inscripciones={inscripcionesFiltradas}
        onDeleteEnrollment={handleDelete}
        onAddEnrollment={handleAdd}
        onEditEnrollment={handleEdit}
        canAdd={canAdd}
      />
      {canAdd && (
        <Modal
          isOpen={modalOpen}
          title={editingEnrollment ? 'Editar Inscripcion' : 'Nueva Inscripcion'}
          onClose={() => setModalOpen(false)}
        >
          <EnrollmentForm
            initialValues={editingEnrollment}
            estudiantes={estudiantes}
            cursos={cursos}
            onSubmit={handleSubmit}
            onCancel={() => setModalOpen(false)}
          />
        </Modal>
      )}
    </>
  );
}
