export const FilterPanel = ({
  query,
  onQueryChange,
  sort,
  onSortChange,
}: {
  query: string;
  onQueryChange: (q: string) => void;
  sort: "asc" | "desc";
  onSortChange: (s: "asc" | "desc") => void;
}) => {
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        placeholder="Szukaj..."
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        className="border p-2 rounded w-1/2"
      />
      <select
        value={sort}
        onChange={(e) => onSortChange(e.target.value as "asc" | "desc")}
        className="border p-2 rounded"
      >
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>
    </div>
  );
};
