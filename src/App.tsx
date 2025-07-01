import { useState } from "react";
import { FilterPanel } from "./components/FilterPanel";
import usersData from "./data/users.json";
import { UserCard } from "./components/UserCard";
import { ExpensiveChart } from "./components/ExpensiveChart";
import { UserForm } from "./components/UserForm";

export const App = () => {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<"asc" | "desc">("asc");

  const filteredUsers = usersData
    .filter((u) => u.name.toLowerCase().includes(query.toLowerCase()))
    .sort((a, b) =>
      sort === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );

  return (
    <div className="p-4 max-w-4xl mx-auto space-y-4">
      <h1 className="text-2xl font-bold">Dashboard użytkowników</h1>

      <FilterPanel
        query={query}
        onQueryChange={setQuery}
        sort={sort}
        onSortChange={setSort}
      />

      <div className="grid grid-cols-2 gap-4">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>

      <ExpensiveChart />

      <UserForm />
    </div>
  );
};
