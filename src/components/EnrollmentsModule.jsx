import Title from './Title';
import Button from './Button';
import SearchBar from './SearchBar';
import EnrollmentRow from './EnrollmentRow';

export default function EnrollmentsModule({
  searchTerm,
  onSearchChange,
  inscripciones,
  onDeleteEnrollment,
  onAddEnrollment,
  onEditEnrollment,
  canAdd,
}) {
  return (
    <main className="p-8 max-w-6xl mx-auto w-full">
      <div className="flex justify-between items-center mb-6">
        <Title text="Inscripciones" subtitle="Gestion de inscripciones de estudiantes a cursos" />
        <Button label="Nueva Inscripcion" onClick={onAddEnrollment} disabled={!canAdd} />
      </div>

      {!canAdd && (
        <p className="text-xs text-amber-600 bg-amber-50 border border-amber-200 rounded-md px-4 py-2 mb-4">
          Se necesita al menos un estudiante y un curso registrados para crear inscripciones.
        </p>
      )}

      <SearchBar
        placeholder="Buscar por estudiante o curso..."
        value={searchTerm}
        onChange={onSearchChange}
      />

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold text-slate-600 uppercase tracking-wider">
              <th className="py-3 px-4">Estudiante</th>
              <th className="py-3 px-4">Curso</th>
              <th className="py-3 px-4">Fecha</th>
              <th className="py-3 px-4">Estado</th>
              <th className="py-3 px-4">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {inscripciones.length > 0 ? (
              inscripciones.map((insc) => (
                <EnrollmentRow
                  key={insc.id}
                  estudianteNombre={insc.estudianteNombre}
                  cursoNombre={insc.cursoNombre}
                  enrollment_date={insc.enrollment_date}
                  enrollment_status={insc.enrollment_status}
                  onEdit={() => onEditEnrollment(insc)}
                  onDelete={() => onDeleteEnrollment(insc.id)}
                />
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-6 text-center text-xs text-slate-400">
                  No se encontraron inscripciones.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
