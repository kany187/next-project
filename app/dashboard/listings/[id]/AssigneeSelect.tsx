"use client";

import { Select } from "@chakra-ui/react";
import { Property, User } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import toast, { Toaster } from "react-hot-toast";

const AssigneeSelect = ({ property }: { property: Property }) => {
  const { data: users, error, isLoading } = useUsers();

  if (isLoading) return <Skeleton />;

  if (error) return null;

  const assignedAgent = async (userId: string) => {
    try {
      await axios.patch("/api/properties/" + property.id, {
        assignedToUserId: userId || null,
      });
    } catch (error) {
      toast.error("Changes could not be saved");
    }
  };

  return (
    <>
      <Select
        placeholder="Assign Agent..."
        width="50"
        defaultValue={property.assignedToUserId || ""}
        onChange={(e) => {
          const userId = e.target.value;
          assignedAgent(userId);
        }}
      >
        <option value="">Unassigned</option>
        {users?.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </Select>
      <Toaster />
    </>
  );
};

const useUsers = () =>
  useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => axios.get("/api/users").then((res) => res.data),
    staleTime: 60 * 1000, // 60s
    retry: 3,
  });

export default AssigneeSelect;
