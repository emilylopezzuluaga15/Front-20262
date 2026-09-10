export default function Navbar({ title }) {
  return (
    <header className="bg-white border-b border-gray-200 px-8 py-3 shadow-sm">
      <h1 className="text-xs font-semibold text-gray-600">{title}</h1>
    </header>
  );
}