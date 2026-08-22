function Nav() {
  return (
    <nav className="h-16 bg-white border-b-2 border-gray-200 flex items-center px-6">
      <div className="flex gap-6">
        <a href="/" className="font-semibold text-gray-700 hover:text-blue-600">Dashboard</a>
        <a href="/students" className="font-semibold text-gray-700 hover:text-blue-600">Estudiantes</a>
        <a href="/courses" className="font-semibold text-gray-700 hover:text-blue-600">Cursos</a>
        <a href="/enrollments" className="font-semibold text-gray-700 hover:text-blue-600">Inscripciones</a>
      </div>
    </nav>
  );
}

export default Nav;