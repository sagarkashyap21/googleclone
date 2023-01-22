import React, { useState } from 'react'
export default function Section() {
  const [data, setdata] = useState(null)

  const Input = (e) => {
    // console.log(e.code)
    const input = e.target.value;
    // e.prvent.default();
    // console.log(input)
    setdata(input);

  }
  console.log(data)

  const google = () => {
    if (data !== null && data !== "") {

      window.location.href = "https://www.google.com/search?q=" + data + "&oq=git&aqs=chrome.0.35i39i355j46i39i199i465j69i57j0i131i433i512l4j0i433i512j0i512.1071j0j15&sourceid=chrome&ie=UTF-8"
    }
  }
  const Search = (e) => {
    if (e.code === "Enter" && (data !== null)) {
      google();
    }


  }
  return (
    <div style={{}}>
      <img id="img" style={{ height: "200px", width: "400px", marginTop: "20px", display: "block", margin: "auto" }} src="http://www.golegal.co.za/wp-content/uploads/2015/09/google-logo.jpg" alt="" />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <ul style={{ border: "1px solid lightgray", boxShadow: "2px 2px lightgray", height: "40px", borderRadius: "20px", listStyle: "none", display: "flex", alignItems: "center" }}>
          <li><i onClick={google} style={{ color: "gray", marginRight: "10px" }} class="fa fa-solid fa-magnifying-glass"></i></li>
          <li><input id="input" style={{ width: "500px", border: "0 solid", outline: "none" }} type="text" placeholder="Search Google or type a URL" onChange={Input} onKeyDown={Search} /></li>
          <li><i style={{ marginRight: "30px", marginLeft: "10px" }} class="fa fa-solid fa-microphone"></i></li>
        </ul>
      </div>
      <ul style={{display:"flex",listStyle:"none",justifyContent:"center"}}>
        <li><button style={{border:"0",height:"30px",borderRadius:"20px"}}>Google Search</button></li>
        <li><button style={{border:"0",marginLeft:"8px",height:"30px",borderRadius:"20px"}}>I'm Feeling Lucky</button></li>
      </ul>


    </div>
  )
}
