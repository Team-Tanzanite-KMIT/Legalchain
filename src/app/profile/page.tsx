"use client";
import React, { useEffect, useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import { UserCircleIcon } from "@heroicons/react/24/solid";

interface UserData {
  email: string;
  role: string;
}

const UserProfile: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({ email: "", role: "" });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("/api/user");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: UserData = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="to-dark-blue-800 flex h-screen items-center justify-center bg-gradient-to-br from-indigo-800">
      <Card className="flex max-w-md items-center gap-8 rounded-md bg-white p-8 shadow-md">
        <div className="flex-shrink-0">
          <UserCircleIcon className="h-24 w-24 text-gray-500" />
        </div>
        <div className="flex flex-col">
          <Typography variant="h2" color="gray">
            USER PROFILE
          </Typography>
          <div className="flex flex-col gap-4">
            <div className="rounded-md bg-gray-100 p-4 shadow-md">
              <Typography variant="h3" color="gray">
                <strong>Email:</strong> {userData.email}
              </Typography>
            </div>
            <div className="rounded-md bg-gray-100 p-4 shadow-md">
              <Typography variant="h3" color="gray">
                <strong>Role:</strong> {userData.role}
              </Typography>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default UserProfile;
