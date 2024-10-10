"use client";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Dot, Loader2, Plus } from "lucide-react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "./ui/toast/use-toast";
import dayjs from "dayjs";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
  name: z.string().min(3).max(200),
  avatarUrl: z.string().optional(),
  message: z.string().min(3).max(150),
  date: z.string(),
});

function AddCommentBtn() {
  const [isCommentDialogOpen, setIsCommentDialogOpen] = useState(false);
  const { toast } = useToast();
  const addComment = useMutation(api.comments.createComment);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      date: dayjs(new Date()).format("YYYY-MM-DDTHH:mm:ssZ[Z]"),
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      await addComment({
        name: values.name,
        avatarUrl: values.avatarUrl
          ? values?.avatarUrl!
          : "https://cdn.vectorstock.com/i/500p/95/56/user-profile-icon-avatar-or-person-vector-45089556.jpg",
        message: values.message,
        date: dayjs(new Date()).format("YYYY-MM-DD"),
      });
      form.reset();
      setIsCommentDialogOpen(false);
      toast({
        variant: "success",
        title: `Hi ${values.name} `,
        description: "Thank you for your comment",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: `Hi ${values.name} `,
        description: "Please try again",
      });
    }
  }
  return (
    <Dialog
      open={isCommentDialogOpen}
      onOpenChange={(isOpen) => {
        setIsCommentDialogOpen(isOpen);
        form.reset();
      }}
    >
      <DialogTrigger asChild>
        <button className="flex items-center gap-2 rounded-sm border border-black px-3 py-2 text-sm transition-colors delay-75 hover:border-white">
          <Plus size={18} />
          Comment
        </button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-8">Upload your file here</DialogTitle>
          <DialogDescription>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="avatarUrl"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>AvatarUrl</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Comment</FormLabel>
                      <FormControl>
                        <Textarea {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={form.formState.isSubmitting}
                  className="flex gap-1"
                >
                  {form.formState.isSubmitting && (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  )}
                  Submit
                </Button>
              </form>
            </Form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default AddCommentBtn;
