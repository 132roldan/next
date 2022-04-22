import Link from 'next/link'
export default function Nav(){
return(

<nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/project">
              <a>Project</a>
            </Link>
          </li>
          <li>
            <Link href="contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>

      </nav>
)

}
