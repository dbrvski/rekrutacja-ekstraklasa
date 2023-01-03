import React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useSeasonSchedule } from "../hooks/useSeasonSchedule";
import { SimplifiedMatchStats } from "../types/SimplifiedMatchStats";
export const ScheduleTable = () => {
  const query = useSeasonSchedule();
  const columnHelper = createColumnHelper<SimplifiedMatchStats>();

  const columns = [
    columnHelper.accessor("teamNames", {
      cell: (info) => info.getValue(),
      header: "Team names",
    }),
    columnHelper.accessor("score", {
      cell: (info) => info.getValue(),
      header: "Score",
    }),
  ];

  const table = useReactTable({
    data: query.data || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div>
      {query.isLoading && <div>loading...</div>}
      {query.isError && <div>error</div>}
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
    </div>
  );
};
