import React from "react";

import { getDatabase, ref, set } from "firebase/database";
import { app } from "../firbase";

export default function AddData() {
  function addDemoData(userId, name, phoneNr) {
    const user = {
      userId,
      name,
      phoneNr,
    };

    const db = getDatabase(app);
    set(ref(db, "student/" + userId), user);

    console.log(user);
  }
  return (
    <div>
      <h1>AddData</h1>{" "}
      <button onClick={() => addDemoData(1, "Jahid", "00000")}>Add</button>
    </div>
  );
}
