import React from "react";

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

interface UserListProps {
  users: User[];
}

export default function UserList(props: UserListProps) {
  return (
    <div>
      <center>
        {props.users.map((user) => {
          return (
            <div
              style={{
                width: "15em",
                backgroundColor: "#35D841",
                padding: 2,
                borderRadius: 10,
                marginBlock: 10,
              }}
              key={user.id}
            >
              <p style={{ fontSize: 20, color: "white" }}>{user.name}</p>
            </div>
          );
        })}
      </center>
    </div>
  );
}
