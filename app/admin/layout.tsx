import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const AdminLayout = ({ children }: Props) => {
  return (
    <div className="flex">
      <aside className="bg-slate-200 p-5 m-5">Admin Sibebar</aside>
      <div>{children}</div>
    </div>
  );
};

export default AdminLayout;
