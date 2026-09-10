import { useState } from 'react';

const inputClasses =
  'w-full border border-slate-300 rounded-md px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500';

export default function EnrollmentForm({ initialValues, estudiantes, cursos, onSubmit, onCancel }) {
  const [form, setForm] = useState(
    initialValues || {
      student_id: estudiantes[0]?.id ?? '',
      course_id: cursos[0]?.id ?? '',
      enrollment_date: new Date().toISOString().slice(0, 10),
      enrollment_status: 'activa',
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === 'student_id' || name === 'course_id' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-1">Estudiante</label>
        <select name="student_id" value={form.student_id} onChange={handleChange} className={inputClasses}>
          {estudiantes.map((e) => (
            <option key={e.id} value={e.id}>
              {e.first_name} {e.last_name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-1">Curso</label>
        <select name="course_id" value={form.course_id} onChange={handleChange} className={inputClasses}>
          {cursos.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-1">Fecha</label>
        <input
          type="date"
          name="enrollment_date"
          value={form.enrollment_date}
          onChange={handleChange}
          required
          className={inputClasses}
        />
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-1">Estado</label>
        <select name="enrollment_status" value={form.enrollment_status} onChange={handleChange} className={inputClasses}>
          <option value="activa">Activa</option>
          <option value="finalizada">Finalizada</option>
          <option value="cancelada">Cancelada</option>
        </select>
      </div>
      <div className="flex justify-end gap-2 pt-2">
        <button
          type="button"
          onClick={onCancel}
          className="text-xs font-semibold px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-800 transition-colors"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="text-xs font-semibold px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white transition-colors"
        >
          Guardar
        </button>
      </div>
    </form>
  );
}
