export default function SidebarButton({ label, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left px-3 py-2 text-xs font-medium rounded-md transition-colors ${
        isActive 
          ? 'text-white bg-blue-600 font-semibold' 
          : 'text-slate-400 hover:text-white'
      }`}
    >
      {label}
    </button>
  );
}