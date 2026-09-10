import { useState } from 'react';

const inputClasses =
  'w-full border border-slate-300 rounded-md px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-blue-500';

export default function StudentForm({ initialValues, onSubmit, onCancel }) {
  const isEditing = Boolean(initialValues);
  const [form, setForm] = useState(
    initialValues || { id: '', first_name: '', last_name: '', email: '' }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...form, id: form.id === '' ? form.id : Number(form.id) });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-1">Documento (ID)</label>
        <input
          type="number"
          name="id"
          value={form.id}
          onChange={handleChange}
          required
          disabled={isEditing}
          className={`${inputClasses} disabled:bg-slate-100 disabled:text-slate-400`}
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1">Nombre</label>
          <input name="first_name" value={form.first_name} onChange={handleChange} required className={inputClasses} />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-600 mb-1">Apellido</label>
          <input name="last_name" value={form.last_name} onChange={handleChange} required className={inputClasses} />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold text-slate-600 mb-1">Correo</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} required className={inputClasses} />
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
