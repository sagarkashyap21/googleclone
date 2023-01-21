import React,{useState} from 'react'
import "./App.css"

export default function App() {
const [data, setdata] = useState()

  const Input=(e)=>{
    // console.log(e.code)
    const input=e.target.value;
    // console.log(input)
    setdata(input);
   
  }

  const google=()=>{
      
    window.location.href="https://www.google.com/search?q="+data+"&oq=git&aqs=chrome.0.35i39i355j46i39i199i465j69i57j0i131i433i512l4j0i433i512j0i512.1071j0j15&sourceid=chrome&ie=UTF-8"
  }
  const Search=(e)=>{
    // Input();
    if(e.code==="Enter"){
      google();
    }

    
    // console.log("hello peter this is harry");
    // console.log(e.code)
    // console.log(data)
  }
  return (
    <> 
    
    
    <input type="text" name="" id="" onChange={Input}  onKeyDown={Search}/>
    
    
    
    
    </>
  )
}
