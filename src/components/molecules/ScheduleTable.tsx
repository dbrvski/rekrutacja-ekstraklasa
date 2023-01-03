import React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { SimplifiedMatchStats } from "../../types/SimplifiedMatchStats";
import { TeamName } from "../atoms/TeamName";
import { DateElement } from "../atoms/DateElement";

interface ScheduleTableProps {
  data?: SimplifiedMatchStats[];
}

export const ScheduleTable = ({ data }: ScheduleTableProps) => {
  const columnHelper = createColumnHelper<SimplifiedMatchStats>();

  const columns = [
    columnHelper.accessor("startTime", {
      cell: (info) => <DateElement date={info.getValue()} />,
      header: "Date",
    }),
    columnHelper.accessor("homeTeam", {
      cell: (info) => <TeamName team={info.getValue()} />,
      header: "Home Team",
    }),
    columnHelper.accessor("awayTeam", {
      cell: (info) => <TeamName team={info.getValue()} />,
      header: "Away Team",
    }),

    columnHelper.accessor("score", {
      cell: (info) => info.getValue(),
      header: "Score",
    }),
    columnHelper.accessor("scoreHt", {
      cell: (info) => info.getValue(),
      header: "HT",
    }),
    columnHelper.accessor("venueName", {
      cell: (info) => info.getValue(),
      header: "Stadium",
    }),
  ];

  const table = useReactTable({
    data: data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
