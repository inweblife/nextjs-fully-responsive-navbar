import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-success">
          <a className="navbar-brand" href="/">inweblife</a>
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
           </button>
         <div className="collapse navbar-collapse" id="navbar">
           <ul className="navbar-nav ml-auto">
             <li className="nav-item">
              <Link href="/"><a className="nav-link">Home</a></Link>
            </li>
            <li className="nav-item">
              <Link href="/about"><a className="nav-link">About</a></Link>
            </li>
            <li className="nav-item">
              <Link href="/news"><a className="nav-link">News</a></Link>
            </li>
            <li className="nav-item">
              <Link href="/contact"><a className="nav-link">Contact</a></Link>
            </li>
            </ul>
         </div>
        </nav>
    )
}