interface SearchProps {
  setSearchText: (text: string) => void;
}

export function Search({ setSearchText }: SearchProps) {
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTimeout(() => {
      setSearchText(e.target.value);
    }, 3000);
  }

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
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}
