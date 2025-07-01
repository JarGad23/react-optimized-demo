interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

export const UserCard = ({ user }: { user: User }) => {
  console.log("Render UserCard:", user.name);
  return (
    <div className="p-4 border rounded shadow">
      <h2 className="font-semibold">{user.name}</h2>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
    </div>
  );
};
