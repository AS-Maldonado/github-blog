export function IssueCard() {
  return (
    <div className="max-w-[416px] cursor-pointer rounded-xl bg-post p-8">
      <div>
        <h2 className="mb-5 text-xl font-bold text-title">
          JavaScript data types and data structures
        </h2>
        <span className="text-span">Há 1 dia</span>
      </div>
      <p className="line-clamp-4 text-text">
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in JavaScript and what properties
        they have. These can be used to build other data structures. Wherever
        possible, comparisons with other languages are drawn.
      </p>
    </div>
  );
}
