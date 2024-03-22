import React from "react";
function Item({ isPacked, name }) {
//   if (isPacked) {
//     return <li>{name} ✔</li>;
//   } else {
//     return null; 
//   }
    return(
        <>
            <li>{isPacked?name+ '✔':name}</li>
        </>
    )
}
const Conditional = () => {
  return (
    <div>
      <h1>Aamir's Packing List</h1>
      <ul>
        <Item isPacked={true} name="Transcript" />
        <Item isPacked={false} name="Jeans Pent" />
        <Item isPacked={true} name="Documents" />
      </ul>
    </div>
  );
};

export default Conditional;
