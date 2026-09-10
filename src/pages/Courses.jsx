import { useEffect, useState } from 'react';
import CoursesModule from '../components/CoursesModule';
import Modal from '../components/Modal';
import CourseForm from '../components/CourseForm';
import { getCourses, createCourse, updateCourse, deleteCourse } from '../services/courseService';

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState('');
  const [cursos, setCursos] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [error, setError] = useState(null);

  const loadCourses = async () => {
    try {
      setCursos(await getCourses());
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    loadCourses();
  }, []);

  const cursosFiltrados = cursos.filter((c) =>
    `${c.name}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAdd = () => {
    setEditingCourse(null);
    setModalOpen(true);
  };

  const handleEdit = (curso) => {
    setEditingCourse(curso);
    setModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteCourse(id);
      await loadCourses();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSubmit = async (values) => {
    try {
      if (editingCourse) {
        await updateCourse(editingCourse.id, values);
      } else {
        await createCourse(values);
      }
      setModalOpen(false);
      await loadCourses();
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
      <CoursesModule
        searchTerm={searchTerm}
        onSearchChange={(e) => setSearchTerm(e.target.value)}
        cursos={cursosFiltrados}
        onDeleteCourse={handleDelete}
        onAddCourse={handleAdd}
        onEditCourse={handleEdit}
      />
      <Modal
        isOpen={modalOpen}
        title={editingCourse ? 'Editar Curso' : 'Nuevo Curso'}
        onClose={() => setModalOpen(false)}
      >
        <CourseForm initialValues={editingCourse} onSubmit={handleSubmit} onCancel={() => setModalOpen(false)} />
      </Modal>
    </>
  );
}
