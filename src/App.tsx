import { useState } from "react";
import { FilterPanel } from "./components/FilterPanel";
import usersData from "./data/users.json";
import { UserCard } from "./components/UserCard";
import { ExpensiveChart } from "./components/ExpensiveChart";
import { UserForm } from "./components/UserForm";

export const App = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<"asc" | "desc">("asc");

  const filteredUsers = usersData
    .filter((u) => u.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) =>
      sort === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

  return (
    <div className="max-w-7xl mx-auto space-y-4 pt-16 h-full bg-white">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="flex gap-x-4">
        <div className="w-full flex flex-col gap-y-4">
          <UserForm />
          <div className="flex-1 flex flex-col gap-y-6">
            <FilterPanel
              search={search}
              onSearch={setSearch}
              sort={sort}
              onSort={setSort}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {filteredUsers.map((user) => (
              <UserCard
                key={user.id}
                user={{
                  ...user,
                  role: user.role as Role,
                }}
              />
            ))}
          </div>
        </div>
        <ExpensiveChart />
      </div>
    </div>
  );
};
