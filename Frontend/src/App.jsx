import { ToastContainer,toast} from "react-toastify";
import './App.css';
import Header from "./components/ui/Header.jsx";
import { Button, buttonVariants } from './components/ui/button';
import "react-toastify/dist/ReactToastify.css";
import Home from "./components/ui/Home.jsx";
import Course from "./components/ui/Course.jsx";
import { CardDescription, CardTitle } from "./components/ui/card.jsx";
import Allcourses from "./components/ui/Allcourses.jsx";
import { Toaster } from "@/components/ui/toaster"
import './index.css';
import AddCourse from "./components/ui/AddCourse";
import { Switch } from "@/components/ui/switch"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "./components/ui/textarea"
import Option from "./components/ui/Option";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/ui/About"
import  Contact  from "./components/ui/Contact";


function App() {
  const btnHandle =()=> 
  {
    toast("Welcome");
    toast.success("Done",{position:"bottom-center"});
    toast.error("Not Done",{position:"bottom-left"})
  };
  return (
    
    <div>
     <ToastContainer/>
     <BrowserRouter>
     <Header/>
     <div className="grid grid-cols-12 gap-4">
      
    <div className="col-span-4 bg-gray-100 p-4">
    <Option/>
    </div>
    <div className="col-span-8 bg-gray-200 p-4">
  <Routes>
  <Route path="/" element={<Home/>} exact />
  <Route path="/add-course" element={<AddCourse/>} exact/>
  <Route path="/view-courses" element={<Allcourses/>} exact/>
  <Route path="/about" element={<About/>} exact/>
  <Route path="/contact" element={<Contact/>} exact/>
    </Routes>
  </div>
</div>

    
</BrowserRouter>    
    </div>
   
    
  );
}

export default App;
