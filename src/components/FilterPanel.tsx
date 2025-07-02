import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

interface FilterPanelProps {
  search: string;
  onSearch: (val: string) => void;
  sort: string;
  onSort: (val: "asc" | "desc") => void;
}

export function FilterPanel({
  search,
  onSearch,
  sort,
  onSort,
}: FilterPanelProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
      <Input
        placeholder="Search by name"
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        className="w-full sm:w-1/3"
      />
      <Select value={sort} onValueChange={onSort}>
        <SelectTrigger className="w-full sm:w-[200px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="asc">Name Ascending</SelectItem>
          <SelectItem value="desc">Name Descending</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
