interface User {
  id: number;
  name: string;
  email: string;
  role: Role;
}

type Role = "user" | "admin" | "owner";
