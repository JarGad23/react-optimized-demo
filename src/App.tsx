import React, { Suspense, useCallback, useState, useTransition } from "react";
import { UserList } from "./components/UserList";
import { UserForm } from "./components/UserForm";

import { users as initialUsers } from "./data/users";

const ExpensiveChart = React.lazy(() =>
  import("./components/ExpensiveChart").then((module) => ({
    default: module.ExpensiveChart,
  }))
);

export const App = () => {
  const [userList, setUserList] = useState([...initialUsers]);
  const [isPending, startTransition] = useTransition();

  const addUser = useCallback((name: string, email: string, role: Role) => {
    startTransition(() => {
      setUserList((prev) => [
        {
          id: Math.floor(Math.random() * 1000000),
          name,
          email,
          role,
        },
        ...prev,
      ]);
    });
  }, []);

  const isLoading = isPending;

  return (
    <div className="max-w-7xl mx-auto space-y-4 pt-16 h-full bg-white px-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="flex flex-col xl:flex-row gap-y-4 gap-x-4">
        <div className="w-full xl:w-1/2 flex flex-col gap-y-4">
          <UserForm addUser={addUser} />
          <UserList loadingUsers={isLoading} users={userList} />
        </div>
        <div className="flex-1 min-w-0">
          <Suspense
            fallback={
              <div className="w-full h-[500px] bg-gray-100 animate-pulse rounded-lg" />
            }
          >
            <ExpensiveChart />
          </Suspense>
        </div>
      </div>
    </div>
  );
};
