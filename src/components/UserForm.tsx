import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<Role>("user");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Creating user", { name, email });
  };

  const onRoleChange = (value: Role) => {
    setRole(value);
  };

  const isValid = name.trim() !== "" && email.trim() !== "";

  return (
    <form onSubmit={handleSubmit} className="space-y-4 flex-1">
      <Input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Select value={role} onValueChange={onRoleChange}>
        <SelectTrigger className="w-full sm:w-[200px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="user">User</SelectItem>
          <SelectItem value="admin">Admin</SelectItem>
          <SelectItem value="owner">Owner</SelectItem>
        </SelectContent>
      </Select>
      <Button type="submit" disabled={!isValid}>
        Create
      </Button>
    </form>
  );
}
