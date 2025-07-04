import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { Button } from "./ui/button";

interface UserCardProps {
  user: User;
  onSendMessage: (msg: string, name: string) => void;
}

const UserCardComponent = ({ user, onSendMessage }: UserCardProps) => {
  const [message, setMessage] = React.useState("");

  const handleSend = React.useCallback(() => {
    onSendMessage(message, user.name);
    setMessage("");
  }, [onSendMessage, message, user.name]);

  return (
    <Card className="w-full shadow-md">
      <CardContent>
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-semibold">{user.name}</h2>
          </div>
          <p className="text-sm text-muted-foreground">Email: {user.email}</p>
          <p className="text-sm text-muted-foreground">Role: {user.role}</p>
          <div className="flex gap-2 mt-2">
            <input
              className="border px-2 py-1 rounded text-sm"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Wpisz wiadomość..."
            />
            <Button
              type="button"
              className="bg-blue-500 text-white px-2 py-1 rounded text-sm"
              onClick={handleSend}
              disabled={!message.trim()}
            >
              Send
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const UserCard = React.memo(UserCardComponent);
