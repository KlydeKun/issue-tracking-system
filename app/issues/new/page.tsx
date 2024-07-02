"use client";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<IssueForm>();

  return (
    <form
      className="max-w-xl space-y-3"
      onSubmit={handleSubmit(async (data) => {
        await axios.post("/api/issues", data);
        router.push("/issues");
      })}
    >
      <TextField.Root placeholder="Title" {...register("title")} />

      {/* TODO:
       Controller is the cause of having GET request server error */}
      {/* <Controller
        name="description"
        control={control}
        // render={({ field }) => (
        //   <SimpleMDE placeholder="Description" {...field} />
        // )}
        render={({ field }) => (
          <SimpleMDE
            {...field}
            onChange={(value) => field.onChange(value)}
            options={{
              placeholder: "Description",
            }}
          />
        )}
      /> */}
      <Button>Submit New Issue</Button>
    </form>
  );
};

export default NewIssuePage;
