"use client";
import { Button, Callout, Text, TextArea, TextField } from "@radix-ui/themes";
import dynamic from "next/dynamic";
import SimpleMdeReact from "react-simplemde-editor";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { issueSchema } from "@/app/validationSchema";
import { z } from "zod";
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";
import delay from "delay";
import IssueForm from "../_components/IssueForm";

type IssueForm = z.infer<typeof issueSchema>;
delay(3000);

const NewIssuePage = () => {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(issueSchema),
  });
  const [error, setError] = useState("");
  const [isSubmit, setSubmitt] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmitt(true);
      await axios.post("/api/issues", data);
      router.push("/issues");
    } catch (error) {
      setSubmitt(false);
      setError("An unexpected error occured.");
    }
  });

  return <IssueForm />;
};

export default NewIssuePage;
