export function Search() {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-bold text-title">Publicações</h2>
        <span className="text-sm text-span">6 publicações</span>
      </div>

      <input
        type="text"
        placeholder="Buscar conteúdo"
        className="w-full rounded-lg border border-border bg-input px-4 py-3 text-border placeholder:text-border"
      />
    </div>
  );
}
