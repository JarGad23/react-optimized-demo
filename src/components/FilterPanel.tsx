import { Input } from "@/components/ui/input";

import { memo } from "react";
import { SortUsers } from "./SortUsers";

interface FilterPanelProps {
  search: string;
  onSearch: (val: string) => void;
  sort: "asc" | "desc" | "default";
  onSort: (val: "asc" | "desc" | "default") => void;
}

export const FilterPanel = memo(
  ({ search, onSearch, sort, onSort }: FilterPanelProps) => {
    return (
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
        <Input
          placeholder="Search by name"
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          className="w-full sm:w-1/3"
        />
        <SortUsers sort={sort} onSort={onSort} />
      </div>
    );
  }
);
