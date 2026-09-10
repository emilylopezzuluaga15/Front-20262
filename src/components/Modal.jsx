export default function Modal({ isOpen, title, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center px-6 py-4 border-b border-slate-200">
          <h3 className="text-sm font-bold text-slate-800">{title}</h3>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 text-lg leading-none transition-colors"
          >
            &times;
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
