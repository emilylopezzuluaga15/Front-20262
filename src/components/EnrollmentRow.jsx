const STATUS_STYLES = {
  activa: 'bg-green-50 text-green-700 border-green-200',
  finalizada: 'bg-slate-100 text-slate-600 border-slate-200',
  cancelada: 'bg-red-50 text-red-700 border-red-200',
};

const STATUS_LABELS = {
  activa: 'Activa',
  finalizada: 'Finalizada',
  cancelada: 'Cancelada',
};

export default function EnrollmentRow({ estudianteNombre, cursoNombre, enrollment_date, enrollment_status, onEdit, onDelete }) {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50 text-xs">
      <td className="py-3 px-4 text-gray-800">{estudianteNombre}</td>
      <td className="py-3 px-4 text-gray-800">{cursoNombre}</td>
      <td className="py-3 px-4 text-gray-600">{enrollment_date}</td>
      <td className="py-3 px-4">
        <span
          className={`inline-block px-2 py-1 rounded-full border text-[11px] font-semibold ${
            STATUS_STYLES[enrollment_status] ?? 'bg-slate-100 text-slate-600 border-slate-200'
          }`}
        >
          {STATUS_LABELS[enrollment_status] ?? enrollment_status ?? 'N/D'}
        </span>
      </td>
      <td className="py-3 px-4 space-x-2 font-semibold">
        <button onClick={onEdit} className="text-gray-500 hover:text-blue-600 transition-colors">Editar</button>
        <button onClick={onDelete} className="text-gray-500 hover:text-red-600 transition-colors">Eliminar</button>
      </td>
    </tr>
  );
}
