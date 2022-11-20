import React from "react";

export default function Contact(props) {
    return(
        <div className="contact-card">
            <img src={props.image}/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={require("../phone-icon.png")} />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src={require("../mail-icon.png")} />
                <p>{props.email}</p>
            </div>
        </div>
    )
}

// export default function Contact({image, name, phone, email}) {
//     return(
//         <div className="contact-card">
//             <img src={image}/>
//             <h3>{name}</h3>
//             <div className="info-group">
//                 <img src={require("../phone-icon.png")} />
//                 <p>{phone}</p>
//             </div>
//             <div className="info-group">
//                 <img src={require("../mail-icon.png")} />
//                 <p>{email}</p>
//             </div>
//         </div>
//     )
// }