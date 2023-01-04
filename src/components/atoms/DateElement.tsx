import { format } from "date-fns";

interface DateProps {
  date: Date;
}

export const DateElement = ({ date }: DateProps) => {
  return (
    <div className="d-flex gap-2">
      <span>{format(new Date(date), "d.MM.yyy")}</span>
      <span className="text-primary">{format(new Date(date), "H:mm")}</span>
    </div>
  );
};
