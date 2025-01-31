import React from "react";
import Course from "./Course";


import { useState } from "react";
import { CardDescription, CardTitle } from "./card";
const Allcourses =()=>{
    const [courses,setCourses]=useState(
        [
            {CardTitle:"Java Course", CardDescription:"This is a demo Course"},
            {CardTitle:"Python Course", CardDescription:"This is a demo Course"},
            {CardTitle:"HTML Course", CardDescription:"This is a demo Course"},
            {CardTitle:"Django Course", CardDescription:"This is a demo Course"},
            {CardTitle:"Angular Course", CardDescription:"This is a demo Course"},

        ]
    )
    return(
        <div>
            <h1>All Courses</h1>
            <p><h3>List of Courses are as follows</h3></p>
            {
                courses.length>0 ? courses.map((item)=>(
                    <Course course={item}/>
                )) 

                  : "No Courses"
            }
        </div>
    )
}
export default Allcourses; 