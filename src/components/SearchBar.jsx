export default function SearchBar({ placeholder, value, onChange }) {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-white border border-gray-300 rounded-md px-4 py-2 text-xs text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-sm"
      />
    </div>
  );
}