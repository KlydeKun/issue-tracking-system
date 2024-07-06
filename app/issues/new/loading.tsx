import { Box, TextArea, TextField } from "@radix-ui/themes";
import React, { Suspense } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingNewIssuePage = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Skeleton className="h-[20rem]" />
    </Box>
  );
};

export default LoadingNewIssuePage;
