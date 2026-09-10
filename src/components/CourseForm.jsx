import { useState } from 'react';

const inputClasses =
  'w-full border border-slate-300 rounded-md px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500';

export default function CourseForm({ initialValues, onSubmit, onCancel }) {
  const [form, setForm] = useState(
    initialValues || { code: '', name: '', description: '' }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-1">Código</label>
        <input name="code" value={form.code} onChange={handleChange} required className={inputClasses} />
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-1">Nombre del curso</label>
        <input name="name" value={form.name} onChange={handleChange} required className={inputClasses} />
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-1">Descripción</label>
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          rows={3}
          className={inputClasses}
        />
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
