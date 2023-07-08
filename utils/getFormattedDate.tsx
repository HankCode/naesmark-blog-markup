import { parseISO, format } from "date-fns";

type Props = {
  dateString: string;
};

const GetFormattedDate = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  return <>{format(date, "LLLL d, yyyy")}</>;
};

export default GetFormattedDate;
