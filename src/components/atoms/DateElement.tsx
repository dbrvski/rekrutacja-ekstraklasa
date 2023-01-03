import React from "react";
import { format } from "date-fns";

interface DateProps {
  date: Date;
}

export const DateElement = ({ date }: DateProps) => {
  return (
    <div style={{ display: "flex", gap: "5px" }}>
      <span>{format(new Date(date), "d.MM.yyy")}</span>
      <span style={{ color: "red" }}>{format(new Date(date), "H:mm")}</span>
    </div>
  );
};
