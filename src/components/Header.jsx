export default function Header({ title, subtitle, buttonText, onButtonClick }) {
  return (
    <div className="flex justify-between items-center p-6">
      <div>
        <h1 className="text-4xl font-bold text-slate-800">{title}</h1>
        {subtitle && <p className="text-slate-500 mt-1">{subtitle}</p>}
      </div>

      {buttonText && (
        <button 
          onClick={onButtonClick}
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-md transition-colors"
        >
          {buttonText}
        </button>
      )}
    </div>
  );
}