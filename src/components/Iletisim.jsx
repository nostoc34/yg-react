import React from "react";

export default function Iletisim() {
  return (
    <div>
      <form aaction="mailto:mselimyaman@gmail.com" method="post" enctype="text/plain">
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname" />
        <input type="text" name="mail"></input>
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
