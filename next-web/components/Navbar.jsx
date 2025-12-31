import Link from "next/link";

export default function Navbar(){
    return(
        <nav style={{padding: "20px", borderBottom: "1px solid #ddd"
        }}>
            <Link style={{margin:"0 10px"}}href="/">Home</Link>
            <Link style={{margin:"0 10px"}}href="/login">About</Link>
            <Link style={{margin:"0 10px"}}href="/register">Register</Link>
            <Link style={{margin:"0 10px"}}href="/blog/hello-world">Dynamic Route</Link>
        </nav>
    );
}