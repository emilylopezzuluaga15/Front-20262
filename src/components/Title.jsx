export default function Title({ text, subtitle }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900">{text}</h2>
      {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
    </div>
  );
}