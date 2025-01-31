import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { Container } from "postcss";
import { Button, buttonVariants} from "./button";

const Course=({ course })=>{
    return(
        <Card   >
            <CardHeader className="flex flex-col items-center text-center">
                <CardTitle className="font-bold">{course.CardTitle }</CardTitle>
                <CardDescription >{course.CardDescription}</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-center gap-4 " >
                    <Button variant="danger">Delete</Button>
                    <Button variant="warning" >Update</Button>
            </CardFooter>
        </Card>

    )
}
export default Course;