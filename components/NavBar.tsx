import Link from "next/link";

export default function NavBar(){
    return(
        <div>
         <ul className="Nav">
         <Link className="navLink" href="/">WELCOME</Link>
         <Link className="navLink" href="/about">YOU'RE INVITED</Link>
         <Link className="navLink" href="/contact">CONTACT</Link>
         </ul>
        </div>
    );
}