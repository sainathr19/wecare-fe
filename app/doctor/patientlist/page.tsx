import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/Badge/Badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ListFilter } from "lucide-react";
import { Input } from "@/components/ui/input";
const Dummydata = [
  {
    id: "PT1001",
    name: "Sainath",
    gender: "Male",
    age: "20",
    lastcheckup: "20 May 2023",
    status: "Normal",
    membership: "Active",
  },
  {
    id: "PT1002",
    name: "Oliver James",
    gender: "Male",
    age: "45",
    lastcheckup: "20 June 2024",
    status: "Normal",
    membership: "Expired",
  },
  {
    id: "PT1003",
    name: "William Smith",
    gender: "Female",
    age: "18",
    lastcheckup: "1 Dec 2023",
    status: "Abnormal",
    membership: "Active",
  },
  {
    id: "PT1004",
    name: "Allison Osman",
    gender: "Female",
    age: "25",
    lastcheckup: "26 Jan 2023",
    status: "Normal",
    membership: "Active",
  },
  {
    id: "PT1004",
    name: "Allison Osman",
    gender: "Female",
    age: "25",
    lastcheckup: "26 Jan 2023",
    status: "Normal",
    membership: "Expired",
  },
  {
    id: "PT1004",
    name: "Allison Osman",
    gender: "Female",
    age: "25",
    lastcheckup: "26 Jan 2023",
    status: "Normal",
    membership: "Active",
  },
  {
    id: "PT1004",
    name: "Allison Osman",
    gender: "Female",
    age: "25",
    lastcheckup: "26 Jan 2023",
    status: "Normal",
    membership: "Active",
  },
  {
    id: "PT1004",
    name: "Allison Osman",
    gender: "Female",
    age: "25",
    lastcheckup: "26 Jan 2023",
    status: "Normal",
    membership: "Active",
  },
  {
    id: "PT1004",
    name: "Allison Osman",
    gender: "Female",
    age: "25",
    lastcheckup: "26 Jan 2023",
    status: "Normal",
    membership: "Active",
  },
  {
    id: "PT1004",
    name: "Allison Osman",
    gender: "Female",
    age: "25",
    lastcheckup: "26 Jan 2023",
    status: "Normal",
    membership: "Active",
  },
  {
    id: "PT1004",
    name: "Allison Osman",
    gender: "Female",
    age: "25",
    lastcheckup: "26 Jan 2023",
    status: "Normal",
    membership: "Active",
  },
  {
    id: "PT1004",
    name: "Allison Osman",
    gender: "Female",
    age: "25",
    lastcheckup: "26 Jan 2023",
    status: "Normal",
    membership: "Active",
  },
  {
    id: "PT1004",
    name: "Allison Osman",
    gender: "Female",
    age: "25",
    lastcheckup: "26 Jan 2023",
    status: "Normal",
    membership: "Active",
  },
  {
    id: "PT1004",
    name: "Allison Osman",
    gender: "Female",
    age: "25",
    lastcheckup: "26 Jan 2023",
    status: "Normal",
    membership: "Active",
  },

  {
    id: "PT1004",
    name: "Allison Osman",
    gender: "Female",
    age: "25",
    lastcheckup: "26 Jan 2023",
    status: "Normal",
    membership: "Active",
  },
];

const Patients = () => {
  return (
    <div className="p-5">
      <Card>
        <CardHeader className="flex flex-row justify-around gap-4  px-10">
          <section className="w-[25%]">
            <CardTitle className="text-xl">Patients List</CardTitle>
            <CardDescription>Patients associated to you</CardDescription>
          </section>
          <Input placeholder="Search for patient" />
          <section className="w-[20%] flex justify-center">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-7 gap-1 text-sm"
                >
                  <ListFilter className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only">Filter</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Conditon</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>
                  <Badge variant="neutral">All</Badge>
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  <Badge variant="error">Critical</Badge>
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  <Badge variant="warning">Abnormal</Badge>
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>
                  <Badge variant="neutral">Normal</Badge>
                </DropdownMenuCheckboxItem>
                <DropdownMenuLabel>Membership</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem checked>
                  Active
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem>Expired</DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </section>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-center">Patient ID</TableHead>

                <TableHead className="text-center">Name</TableHead>
                <TableHead className="text-center">Gender</TableHead>
                <TableHead className="text-center">Age</TableHead>
                <TableHead className="text-center">Last Checkup</TableHead>

                <TableHead className="text-center">Status</TableHead>
                <TableHead className="text-center">Note</TableHead>
                <TableHead className="text-center">Membership</TableHead>

                <TableHead className="text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Dummydata.map((patient) => {
                return (
                  <TableRow key={patient.id}>
                    <TableCell className=" pl-0 text-center">
                      {patient.id}
                    </TableCell>
                    <TableCell className=" font-semibold text-center">
                      {patient.name}
                    </TableCell>
                    <TableCell className="text-center">
                      {patient.gender}
                    </TableCell>
                    <TableCell className="text-center">{patient.age}</TableCell>
                    <TableCell className="text-center">
                      {patient.lastcheckup}
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge
                        variant={
                          patient.status === "Abnormal" ? "warning" : "success"
                        }
                      >
                        {patient.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-center">--- </TableCell>
                    <TableCell className="text-center">
                      <Badge
                        variant={
                          patient.membership === "Expired" ? "error" : "success"
                        }
                      >
                        {patient.membership}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-center">
                      <Button variant="outline" className="font-normal">
                        <Link href={"/doctor/patientprofile"}>Profile</Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Patients;
