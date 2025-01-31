"use client";
import { Textarea } from "@/components/ui/textarea";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// ✅ Define the schema with required fields
const formSchema = z.object({
  courseId: z.string().min(1, "Course ID is required"),
  courseTitle: z.string().min(1, "Course Title is required"),
  courseDescription: z.string().min(1, "Course Description is required"),
});

export function AddCourse() {
  // Initialize form
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      courseId: "",
      courseTitle: "",
      courseDescription: "",
    },
  });

  // ✅ Add Course function
  const onSubmit = (values) => {
    console.log("Form Submitted:", values);
    toast.success("Form submitted successfully!");
  };

  // ✅ Clear form function
  const onClear = () => {
    console.log("Form Cleared");
    form.reset(); // Reset form values
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <ToastContainer />
      <h1 className="text-xl font-bold mb-4">Fill Course Details</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {/* Course ID */}
          <FormField
            control={form.control}
            name="courseId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Course ID</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Enter Course ID" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Course Title */}
          <FormField
            control={form.control}
            name="courseTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Course Title</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Enter Course Title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Course Description */}
          <FormField
            control={form.control}
            name="courseDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Course Description</FormLabel>
                <FormControl>
                  <Textarea placeholder="Enter Course Description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Buttons */}
          <div className="flex space-x-4">
            <Button type="submit">Add Course</Button>
            <Button variant="destructive" onClick={onClear} type="button">Clear</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default AddCourse;
