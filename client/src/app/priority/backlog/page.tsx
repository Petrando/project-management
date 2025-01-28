import React from "react";
import ReusablePriorityPage from "@/components/pages/priority/ReusablePriorityPage";
import { Priority } from "@/state/api";

const Backlog = () => {
  return <ReusablePriorityPage priority={Priority.Backlog} />;
};

export default Backlog;