function Header({ description = "Plataforma educativa para estudiantes y cursos", buttonText = "Inicio" }) {
  return (
    <header className="bg-blue-600 text-white py-4 px-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Sistema de Gestión de Cursos</h1>
          <p className="text-blue-100 mt-1">{description}</p>
        </div>
        <button className="bg-white text-blue-600 hover:bg-gray-200 py-2 px-4 rounded font-semibold">
          {buttonText}
        </button>
      </div>
    </header>
  );
}

export default Header;