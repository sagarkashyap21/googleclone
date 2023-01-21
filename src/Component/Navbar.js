import React,{useState} from 'react'
// import Menu from "./Menu"
export default function Navbar() {
    // const [data, setdata] = useState(Menu)
    
   
   
    const Icons=(e)=>{
        // e.target.className="fa fa-solid fa-bars"
     let id=document.getElementById("menu");
     id.className="newMenu"
     console.log("c,")
    }
    // style={{color:"gray",marginRight:"20px",textDecoration:"none"}}
    return (
     

       <div style={{}}>
           <ul style={{listStyle:"none",marginTop:"10px",display:"flex",justifyContent:"flex-end",alignItems:"center",marginRight:"10px"}}>
               <li><a  style={{color:"gray",marginRight:"20px",textDecoration:"none"}} href="">Gmail</a></li>
               <li><a  style={{color:"gray",marginRight:"20px",textDecoration:"none"}} href="">Images</a></li>
               <li style={{fontSize:"20px"}}><i onClick={Icons} style={{color:"gray",marginRight:"20px"}} className="fa fa-solid fa-bars"></i></li>
            <li style={{}}><a href=""><img style={{height:"50px",borderRadius:"50px",width:"50px"}} src="https://images.unsplash.com/photo-1673981171808-549ab1f51f1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" /></a></li>
           </ul>
           
       </div>
    )
}
