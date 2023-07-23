"user client";
import { useState, useEffect } from "react";

export default function List() {
  const [list, setList] = useState([]);

  useEffect(() => {}, []);
  return (
    <div>
      <h2>List</h2>
    </div>
  );
}
