import Link from "next/link";
import React from "react";


const ButtonMailto = ({ mailto, label }:{
    mailto:string,label:string
}) => {
    return (
        <button className="link-flash text-gray-700" onClick={() => window.location.href = 'mailto:mahbubrahim926@gmail.com'}>Contact Me</button>
    );
};

export default ButtonMailto;
