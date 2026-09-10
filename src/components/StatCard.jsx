export default function StatCard({ title, total }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex-1">
      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{title}</p>
      <p className="text-3xl font-bold text-slate-800 mt-2">{total}</p>
    </div>
  );
}
