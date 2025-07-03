import { Card, CardContent } from "@/components/ui/card";

interface UserCardProps {
  user: User;
  isFavorite?: boolean;
  onToggleFavorite?: (id: number) => void;
}

import React from "react";

const UserCardComponent = ({
  user,
  isFavorite,
  onToggleFavorite,
}: UserCardProps) => {
  return (
    <Card className="w-full shadow-md">
      <CardContent>
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold">{user.name}</h2>
          {onToggleFavorite && (
            <button
              type="button"
              aria-label={
                isFavorite ? "Usuń z ulubionych" : "Dodaj do ulubionych"
              }
              onClick={() => onToggleFavorite(user.id)}
              className={
                isFavorite
                  ? "text-yellow-500 hover:text-yellow-600"
                  : "text-gray-300 hover:text-yellow-400"
              }
            >
              ★
            </button>
          )}
        </div>
        <p className="text-sm text-muted-foreground">Email: {user.email}</p>
        <p className="text-sm text-muted-foreground">Role: {user.role}</p>
      </CardContent>
    </Card>
  );
};

export const UserCard = React.memo(UserCardComponent);
