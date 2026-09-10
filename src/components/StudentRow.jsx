export default function StudentRow({ id, first_name, last_name, email, onEdit, onDelete }) {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50 text-xs">
      <td className="py-3 px-4 text-gray-800">{id}</td>
      <td className="py-3 px-4 text-gray-800">{first_name}</td>
      <td className="py-3 px-4 text-gray-800">{last_name}</td>
      <td className="py-3 px-4 text-gray-600">{email}</td>
      <td className="py-3 px-4 space-x-2 font-semibold">
        <button onClick={onEdit} className="text-gray-500 hover:text-blue-600 transition-colors">Editar</button>
        <button onClick={onDelete} className="text-gray-500 hover:text-red-600 transition-colors">Eliminar</button>
      </td>
    </tr>
  );
}
