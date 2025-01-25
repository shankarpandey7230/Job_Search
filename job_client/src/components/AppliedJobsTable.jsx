import { Badge } from "./ui/badge";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const appliedJobs = ["FrontEnd", "Backend", "FullStack"];
const AppliedJobsTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>Applied jobs List</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>

            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {appliedJobs.length <= 0 ? (
            <span>You have not applied any jobs till now</span>
          ) : (
            appliedJobs.map((jobapplied, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>2020</TableCell>
                  <TableCell>FrontEnd</TableCell>
                  <TableCell>Neon</TableCell>
                  <TableCell className="text-right">
                    <Badge>Success</Badge>
                  </TableCell>
                </TableRow>
              );
            })
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobsTable;
