import { useEffect, useState } from 'react';
import StudentsModule from '../components/StudentsModule';
import Modal from '../components/Modal';
import StudentForm from '../components/StudentForm';
import { getStudents, createStudent, updateStudent, deleteStudent } from '../services/studentService';

export default function Students() {
  const [searchTerm, setSearchTerm] = useState('');
  const [estudiantes, setEstudiantes] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [error, setError] = useState(null);

  const loadStudents = async () => {
    try {
      setEstudiantes(await getStudents());
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    loadStudents();
  }, []);

  const estudiantesFiltrados = estudiantes.filter((e) =>
    `${e.first_name} ${e.last_name} ${e.email}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAdd = () => {
    setEditingStudent(null);
    setModalOpen(true);
  };

  const handleEdit = (est) => {
    setEditingStudent(est);
    setModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteStudent(id);
      await loadStudents();
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSubmit = async (values) => {
    try {
      if (editingStudent) {
        await updateStudent(editingStudent.id, values);
      } else {
        await createStudent(values);
      }
      setModalOpen(false);
      await loadStudents();
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
      <StudentsModule
        searchTerm={searchTerm}
        onSearchChange={(e) => setSearchTerm(e.target.value)}
        estudiantes={estudiantesFiltrados}
        onDeleteStudent={handleDelete}
        onAddStudent={handleAdd}
        onEditStudent={handleEdit}
      />
      <Modal
        isOpen={modalOpen}
        title={editingStudent ? 'Editar Estudiante' : 'Nuevo Estudiante'}
        onClose={() => setModalOpen(false)}
      >
        <StudentForm initialValues={editingStudent} onSubmit={handleSubmit} onCancel={() => setModalOpen(false)} />
      </Modal>
    </>
  );
}
