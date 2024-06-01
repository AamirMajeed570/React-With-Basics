import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./cards/Card";
import { Counter } from "./cards/Counter";
import Checkbox from "./cards/Checkbox";

function App() {
  // const mentors = [
  //   {
  //     name: "Sheikh Umar Farooq",
  //   },
  //   {
  //     name: "Faisal Sir",
  //   },
  //   {
  //     name: "Gulnawaz Sir",
  //   },
  //   {
  //     name: "Nayeem Sir",
  //   },
  //   {
  //     name: "Sheikh Umar Farooq",
  //   },
  //   {
  //     name: "Faisal Sir",
  //   },
  //   {
  //     name: "Gulnawaz Sir",
  //   },
  //   {
  //     name: "Nayeem Sir",
  //   },
  //   {
  //     name: "Mohsina Maa'm"
  //   }
  // ];

  return (
    <>
      {/* <h1 className="bg-slate-600 h-[40px] text-center py-1 text-2xl w-[98%]">
        List Of Mentors
      </h1>
      <div className="grid grid-cols-3 gap-3 justify-center align-middle m-2">
        {mentors.map((mentor,index)=>(
        <Card key={index} mentor={mentor} />
        ))}
      </div> */}
      {/* <Counter /> */}
      {/* <Checkbox /> */}
    </>
  );
}

export default App;
// !Use DevUi.io from react components Very useful Website
//! **********Key**********
//! In React, when rendering a list of elements dynamically using map, React requires each rendered element to have a unique key prop. This helps React identify which items have changed, are added, or are removed efficiently, especially when the list is updated