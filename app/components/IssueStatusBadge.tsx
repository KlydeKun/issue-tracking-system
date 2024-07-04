import { Status } from "@prisma/client";
import React from "react";

interface Props {
  status: Status;
}

const IssueStatusBadge = ({ status }: Props) => {
  return <div>IssueStatusBadge</div>;
};

export default IssueStatusBadge;
