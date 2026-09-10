import Title from './Title';
import Button from './Button';
import SearchBar from './SearchBar';
import CourseRow from './CourseRow';

export default function CoursesModule({
  searchTerm,
  onSearchChange,
  cursos,
  onDeleteCourse,
  onAddCourse,
  onEditCourse,
}) {
  return (
    <main className="p-8 max-w-6xl mx-auto w-full">
      <div className="flex justify-between items-center mb-6">
        <Title text="Cursos" subtitle="Gestion de cursos ofrecidos" />
        <Button label="Nuevo Curso" onClick={onAddCourse} />
      </div>

      <SearchBar
        placeholder="Buscar curso por nombre..."
        value={searchTerm}
        onChange={onSearchChange}
      />

      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-xs font-bold text-slate-600 uppercase tracking-wider">
              <th className="py-3 px-4">Código</th>
              <th className="py-3 px-4">Nombre</th>
              <th className="py-3 px-4">Descripción</th>
              <th className="py-3 px-4">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {cursos.length > 0 ? (
              cursos.map((curso) => (
                <CourseRow
                  key={curso.id}
                  code={curso.code}
                  name={curso.name}
                  description={curso.description}
                  onEdit={() => onEditCourse(curso)}
                  onDelete={() => onDeleteCourse(curso.id)}
                />
              ))
            ) : (
              <tr>
                <td colSpan="4" className="py-6 text-center text-xs text-slate-400">
                  No se encontraron cursos.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
