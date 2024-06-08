import React from "react";
import { Command, CommandItem, CommandList } from "@/components/ui/command";
import {
  CalendarIcon,
  EnvelopeClosedIcon,
  PersonIcon,
  DashboardIcon,
  ChatBubbleIcon,
} from "@radix-ui/react-icons";

import { Card, CardTitle } from "../ui/card";
const Sidebar = () => {
  return (
    <div className="hidden sm:block min-w-[250px] shadow-xl  p-3">
      <header>
        <Card className="p-4 py-6 shadow-none border-none">
          <CardTitle className="text-[2rem]">WeCare</CardTitle>
        </Card>
      </header>
      <Command className="text-muted-foreground font-semibold">
        <CommandList>
          <CommandItem className="flex gap-1 items-center my-2">
            <DashboardIcon className="mr-2 h-6 w-6" />
            <span>Dashboard</span>
          </CommandItem>
          <CommandItem className="flex gap-1 items-center my-2">
            <CalendarIcon className="mr-2 h-6 w-6" />
            <span>Appointments</span>
          </CommandItem>
          <CommandItem className="flex gap-1 items-center my-2">
            <PersonIcon className="mr-2 h-6 w-6" />
            <span>Patient List</span>
          </CommandItem>
          <CommandItem className="flex gap-1 items-center my-2">
            <EnvelopeClosedIcon className="mr-2 h-6 w-6" />
            <span>Messages</span>
          </CommandItem>
          <CommandItem className="flex gap-1 items-center my-2">
            <ChatBubbleIcon className="mr-2 h-6 w-6" />
            <span>Support</span>
          </CommandItem>
        </CommandList>
      </Command>
    </div>
  );
};

export default Sidebar;
