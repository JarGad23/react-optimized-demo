import { useState, useMemo, useCallback } from "react";
import { FilterPanel } from "./FilterPanel";
import { UserCard } from "./UserCard";
import { users } from "../data/users.ts";

type Props = {
  loadingUsers?: boolean;
};

export const UserList = ({ loadingUsers }: Props) => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<"asc" | "desc">("asc");

  const [favorites, setFavorites] = useState<number[]>([]);
  const toggleFavorite = useCallback((id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  }, []);

  const filteredUsers = useMemo(() => {
    return users
      .filter((u) => u.name.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) =>
        sort === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)
      );
  }, [search, sort]);
  return (
    <>
      <FilterPanel
        search={search}
        onSearch={setSearch}
        sort={sort}
        onSort={setSort}
      />
      {loadingUsers && <div className="h-20 bg-red-500">Loading...</div>}
      <div className="grid grid-cols-2 gap-4">
        {filteredUsers.map((user) => (
          <UserCard
            key={user.id}
            user={{
              ...user,
              role: user.role as Role,
            }}
            isFavorite={favorites.includes(user.id)}
            onToggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </>
  );
};
