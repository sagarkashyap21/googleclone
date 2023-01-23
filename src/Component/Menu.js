import React from 'react'
import "../App.css"


export default function Menu() {
    const removeIcons = () => {
        let id = document.getElementById("menu");
        id.className = "menu";
        console.log(id.className);
    }
    return (
        <div id="menu" className="menu" style={{ border: "",backgroundColor:"white", width: "370px", position: "absolute", top: "70px", right: "-40px" }}>
            <div id="Wrong" onClick={removeIcons} style={{ border: "", width: "100px", marginLeft: "127px", display: "flex", justifyContent: "center" }}><i style={{ fontSize: "30px", color: "gray" }} class="fa fa-regular fa-circle-xmark"></i></div>
            <ul className="menuUl">
                <a style={{ textDecoration: "none", color: "black" }}>  <li><img src="https://cdn-icons-png.flaticon.com/512/61/61205.png" alt="" />Account</li></a>
                <a href="https://mail.google.com/" style={{ textDecoration: "none", color: "black" }}> <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png" alt="" />Gmail</li></a>
                <a href="https://www.youtube.com/" style={{ textDecoration: "none", color: "black" }}><li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/800px-YouTube_full-color_icon_%282017%29.svg.png" alt="" />Youtube</li></a>

                <a> <li><img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Google_Contacts_logo.png" alt="" />Contacts</li></a>

                <a style={{ textDecoration: "none", color: "black" }} href="https://meet.google.com/?pli=1"><li><img src="https://1000logos.net/wp-content/uploads/2021/12/Google-Meet-Logo-500x281.png" alt="" />Meet</li></a>
                <a >  <li><img src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=595&height=400&name=image8-2.jpg" alt="" />Search</li></a>

                <a style={{ textDecoration: "none", color: "black" }} href="https://www.google.com/maps"> <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Google_Maps_icon_%282015-2020%29.svg/512px-Google_Maps_icon_%282015-2020%29.svg.png?20200220195824" alt="" />Maps</li></a>

                <a style={{ textDecoration: "none", color: "black" }} href="https://play.google.com/store/games?pli=1">  <li><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Google_Play_Arrow_logo.svg/512px-Google_Play_Arrow_logo.svg.png?20160711072735" alt="" />Play</li></a>

                <a style={{ textDecoration: "none", color: "black" }} href="https://www.google.com/intl/en_in/drive/">  <li><img src="https://zeevector.com/wp-content/uploads/Google-Drive-Logo-Transparent.png" alt="" />Drive</li></a>



            </ul>

        </div>
    )
}
