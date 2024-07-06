import { Box } from "@radix-ui/themes";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingNewIssuePage = () => {
  return (
    // <Box className="max-w-xl">
    //   <Skeleton />
    //   <Skeleton className="h-[20rem]" />
    // </Box>
    <div>
      <h1>Loading...</h1>
    </div>
  );
};

export default LoadingNewIssuePage;
