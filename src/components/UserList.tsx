import { useState, useMemo, useCallback } from "react";
import { FilterPanel } from "./FilterPanel";
import { UserCard } from "./UserCard";

type Props = {
  loadingUsers?: boolean;
  users: User[];
};

export const UserList = ({ loadingUsers, users }: Props) => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<"asc" | "desc" | "default">("default");

  const filteredUsers = useMemo(() => {
    const filtered = users.filter((u) =>
      u.name.toLowerCase().includes(search.toLowerCase())
    );
    if (sort === "default") {
      return filtered;
    }
    return filtered
      .slice()
      .sort((a, b) =>
        sort === "asc"
          ? a.name.localeCompare(b.name)
          : b.name.localeCompare(a.name)
      );
  }, [search, sort, users]);

  const onSendMessage = useCallback(
    (msg: string, name: string) => {
      console.log(filteredUsers[0]);
      console.log(`Message for ${name}: ${msg}`);
    },
    [filteredUsers]
  );

  return (
    <>
      <FilterPanel
        search={search}
        onSearch={setSearch}
        sort={sort}
        onSort={setSort}
      />
      {loadingUsers && (
        <div className="h-20 bg-gray-200 animate-pulse">Loading...</div>
      )}

      <div className="grid grid-cols-2 gap-4">
        {filteredUsers.map((user) => {
          return (
            <UserCard
              key={user.id}
              user={{
                ...user,
                role: user.role as Role,
              }}
              onSendMessage={onSendMessage}
            />
          );
        })}
      </div>
    </>
  );
};
