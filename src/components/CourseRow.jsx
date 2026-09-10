export default function CourseRow({ code, name, description, onEdit, onDelete }) {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50 text-xs">
      <td className="py-3 px-4 text-gray-800">{code}</td>
      <td className="py-3 px-4 text-gray-800">{name}</td>
      <td className="py-3 px-4 text-gray-600">{description}</td>
      <td className="py-3 px-4 space-x-2 font-semibold">
        <button onClick={onEdit} className="text-gray-500 hover:text-blue-600 transition-colors">Editar</button>
        <button onClick={onDelete} className="text-gray-500 hover:text-red-600 transition-colors">Eliminar</button>
      </td>
    </tr>
  );
}
