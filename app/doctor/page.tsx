"use client";
import Link from "next/link";
import { Activity, ArrowUpRight, CreditCard, Users } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { LapTimerIcon, CalendarIcon } from "@radix-ui/react-icons";
import { Badge } from "@/components/Badge/Badge";
import { useToast } from "@/components/ui/use-toast";

export default function Dashboard() {
  const { toast } = useToast();
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="grid gap-4 grid-cols-3">
          <section className="col-span-2 flex flex-col gap-3">
            <div className="grid gap-4 grid-cols-4">
              <Card x-chunk="dashboard-01-chunk-0">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Patients
                  </CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">55</div>
                </CardContent>
              </Card>
              <Card x-chunk="dashboard-01-chunk-1">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Abnormal
                  </CardTitle>
                  <Activity className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5</div>
                </CardContent>
              </Card>
              <Card x-chunk="dashboard-01-chunk-2">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Appointments
                  </CardTitle>
                  <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">13</div>
                </CardContent>
              </Card>
              <Card x-chunk="dashboard-01-chunk-3">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Pending Today
                  </CardTitle>
                  <LapTimerIcon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">5</div>
                </CardContent>
              </Card>
            </div>

            <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
              <CardHeader className="flex flex-row items-center">
                <div className="grid gap-2">
                  <CardTitle>Patients</CardTitle>
                  <CardDescription>
                    Patients with abnormal test reports
                  </CardDescription>
                </div>
                <Button asChild size="sm" className="ml-auto gap-1">
                  <Link href="#">
                    View All
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="">Name</TableHead>
                      <TableHead className="text-center">Condition</TableHead>
                      <TableHead className="text-center">Note</TableHead>
                      <TableHead className="text-center">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className=" font-semibold pl-0">
                        Oliva martin
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge variant="error">Critical</Badge>
                      </TableCell>
                      <TableCell className="text-center">-</TableCell>
                      <TableCell className="text-center">
                        <Button variant="outline" className="font-normal">
                          Check reports
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className=" font-semibold pl-0">
                        Sainath Reddy
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge variant="warning">Abnormal</Badge>
                      </TableCell>
                      <TableCell className="text-center">Chest pain</TableCell>
                      <TableCell className="text-center">
                        <Button variant="outline" className="font-normal">
                          Check reports
                        </Button>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className=" font-semibold pl-0">
                        William Kim
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge variant="warning">Abnormal</Badge>
                      </TableCell>
                      <TableCell className="text-center">Migrain</TableCell>
                      <TableCell className="text-center">
                        <Button variant="outline" className="font-normal">
                          Check reports
                        </Button>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </section>
          <section className="col-span-1 flex flex-col gap-3">
            <Card x-chunk="dashboard-01-chunk-5">
              <CardHeader>
                <CardTitle className="text-lg">
                  Add an appointment to your schedule now
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-8">
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button variant="outline">Add Appointment</Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Add Appointment</AlertDialogTitle>
                      <AlertDialogDescription>
                        Coming Soon...
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={(): void => {
                          toast({
                            title: "Added Appointment : Root Clenaing",
                            description:
                              "Friday, February 10, 2023 at 12:00 PM",
                          });
                        }}
                      >
                        Continue
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-5">
              <CardHeader>
                <CardTitle>Today's Schedule</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-8">
                <div className="flex items-center gap-4">
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">
                      10:30am - 11:00am
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Genaral Checkup
                    </p>
                  </div>
                  <div className="ml-auto font-medium">
                    <Button variant="outline">View details</Button>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">
                      11:00am - 11:30am
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Root cleaning
                    </p>
                  </div>
                  <div className="ml-auto font-medium">
                    <Button variant="outline">View Details</Button>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">
                      12:00pm - 12:30pm
                    </p>
                    <p className="text-sm text-muted-foreground">Bleaching</p>
                  </div>
                  <div className="ml-auto font-medium">
                    <Button variant="outline">View Details</Button>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">
                      12:30pm - 1:00pm
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Genaral Checkup
                    </p>
                  </div>
                  <div></div>
                  <div className="ml-auto font-medium">
                    <Button variant="outline">View Details</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-5">
              <CardHeader>
                <CardTitle>Recent Appointments</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-8">
                <div className="flex items-center gap-4">
                  <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src="/avatars/01.png" alt="Avatar" />
                    <AvatarFallback>OM</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">
                      Olivia Martin
                    </p>
                    <p className="text-sm text-muted-foreground">
                      olivia.martin@email.com
                    </p>
                  </div>
                  <div className="ml-auto font-medium">
                    <Button variant="outline">Remarks</Button>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src="/avatars/02.png" alt="Avatar" />
                    <AvatarFallback>JL</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">
                      Jackson Lee
                    </p>
                    <p className="text-sm text-muted-foreground">
                      jackson.lee@email.com
                    </p>
                  </div>
                  <div className="ml-auto font-medium">
                    <Button variant="outline">Remarks</Button>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src="/avatars/03.png" alt="Avatar" />
                    <AvatarFallback>IN</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">
                      Isabella Nguyen
                    </p>
                    <p className="text-sm text-muted-foreground">
                      isabella.nguyen@email.com
                    </p>
                  </div>
                  <div className="ml-auto font-medium">
                    <Button variant="outline">Remarks</Button>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Avatar className="hidden h-9 w-9 sm:flex">
                    <AvatarImage src="/avatars/04.png" alt="Avatar" />
                    <AvatarFallback>WK</AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <p className="text-sm font-medium leading-none">
                      William Kim
                    </p>
                    <p className="text-sm text-muted-foreground">
                      will@email.com
                    </p>
                  </div>
                  <div className="ml-auto font-medium">
                    <Button variant="outline">Remarks</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </div>
  );
}
