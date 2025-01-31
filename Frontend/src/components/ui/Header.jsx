import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
function Header({ name, title }) {
  return (
    <div>
      <CardContent className="border border-black p-4 rounded-lg bg-yellow-400">
      <h1 className="text-center">Welcome to Courses Application</h1>
      </CardContent>
    </div>
  );
}

export default Header;
