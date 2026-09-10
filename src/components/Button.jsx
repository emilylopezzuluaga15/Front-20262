export default function Button({ label, onClick, variant = 'primary', disabled = false }) {
  const styles = variant === 'primary'
    ? 'bg-blue-600 hover:bg-blue-700 text-white'
    : 'bg-gray-200 hover:bg-gray-300 text-gray-800';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${styles} text-xs font-semibold px-4 py-2 rounded-md shadow-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {label}
    </button>
  );
}