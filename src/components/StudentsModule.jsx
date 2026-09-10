import Title from './Title';
import Button from './Button';
import SearchBar from './SearchBar';
import StudentRow from './StudentRow';

export default function StudentsModule({
  searchTerm,
  onSearchChange,
  estudiantes,
  onDeleteStudent,
  onAddStudent,
  onEditStudent
}) {
  return (
    <main className="p-8 max-w-6xl mx-auto w-full">
      <div className="flex justify-between items-center mb-6">
        <Title text="Estudiantes" subtitle="Gestión de estudiantes registrados" />
        <Button label="Nuevo Estudiante" onClick={onAddStudent} />
      </div>

      <SearchBar
        placeholder="Buscar estudiante por nombre, apellido o correo..."
        value={searchTerm}
        onChange={onSearchChange}
      />

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold text-slate-600 uppercase tracking-wider">
              <th className="py-3 px-4">Documento</th>
              <th className="py-3 px-4">Nombre</th>
              <th className="py-3 px-4">Apellido</th>
              <th className="py-3 px-4">Correo</th>
              <th className="py-3 px-4">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {estudiantes.length > 0 ? (
              estudiantes.map((est) => (
                <StudentRow
                  key={est.id}
                  id={est.id}
                  first_name={est.first_name}
                  last_name={est.last_name}
                  email={est.email}
                  onEdit={() => onEditStudent(est)}
                  onDelete={() => onDeleteStudent(est.id)}
                />
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-6 text-center text-xs text-slate-400">
                  No se encontraron estudiantes.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
