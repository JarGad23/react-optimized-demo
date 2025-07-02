import { Card, CardContent } from "@/components/ui/card";

interface UserCardProps {
  user: User;
}

export function UserCard({ user }: UserCardProps) {
  return (
    <Card className="w-full shadow-md">
      <CardContent>
        <h2 className="text-lg font-semibold mb-2">{user.name}</h2>
        <p className="text-sm text-muted-foreground">Email: {user.email}</p>
        <p className="text-sm text-muted-foreground">Role: {user.role}</p>
      </CardContent>
    </Card>
  );
}
