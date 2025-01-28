import React from "react";
import ReusablePriorityPage from "@/components/pages/priority/ReusablePriorityPage";
import { Priority } from "@/state/api";

const High = () => {
  return <ReusablePriorityPage priority={Priority.High} />;
};

export default High;