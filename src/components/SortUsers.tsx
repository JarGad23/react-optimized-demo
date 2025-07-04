import { memo } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

type SortType = "asc" | "desc" | "default";

interface SortUsersProps {
  sort: SortType;
  onSort: (val: SortType) => void;
}

export const SortUsers = memo(({ sort, onSort }: SortUsersProps) => {
  return (
    <Select value={sort} onValueChange={onSort}>
      <SelectTrigger className="w-full sm:w-[200px]">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="default">Name Default</SelectItem>
        <SelectItem value="asc">Name Ascending</SelectItem>
        <SelectItem value="desc">Name Descending</SelectItem>
      </SelectContent>
    </Select>
  );
});
