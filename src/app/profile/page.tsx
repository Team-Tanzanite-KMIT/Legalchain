"use client";
import React, { useEffect, useState } from 'react';
import { Card, Typography } from '@material-tailwind/react';
import { UserCircleIcon } from "@heroicons/react/24/solid";

interface UserData {
  email: string;
  role: string;
}

const UserProfile: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({ email: '', role: '' });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('/api/user');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: UserData = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-indigo-800 to-dark-blue-800">
      <Card className="max-w-md p-8 flex items-center gap-8 bg-white shadow-md rounded-md">
        <div className="flex-shrink-0">
          <UserCircleIcon className="h-24 w-24 text-gray-500" />
        </div>
        <div className="flex flex-col">
          <Typography variant="h2" color="gray">
            USER PROFILE
          </Typography>
          <div className="flex flex-col gap-4">
            <div className="bg-gray-100 p-4 rounded-md shadow-md">
              <Typography variant="h3" color="gray">
                <strong>Email:</strong> {userData.email}
              </Typography>
            </div>
            <div className="bg-gray-100 p-4 rounded-md shadow-md">
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
