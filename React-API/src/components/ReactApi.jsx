import React from "react";
import "./ReactApi.css";
const ReactApi = () => {
  const api = {
    students: [
      {
        username: "Aamir Majeed Khan",
        rollNo: "21045112028",
        grade:"A+"
      },
      {
        username: "Faisal Rasheed Lon",
        rollNo: "21045112029",
        grade:"A+"
      },
      {
        username: "Hanan Rasheed Najar",
        rollNo: "21045112030",
        grade:"A+"
      },
      {
        username: "Mudasir Maqbool Lone",
        rollNo: "21045112031",
        grade:"A+"
      },
    ],
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Username</td>
            <td>RollNo</td>
            <td>Grade</td>
          </tr>
        </thead>
        <tbody>
          {api.students.map((data, index) => (
            <tr key={index}>
              <td> {data.username}</td>
              <td> {data.rollNo}</td>
              <td style={{textAlign:"center"}}>{data.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReactApi;
