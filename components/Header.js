import Link from 'next/link'
import headerNavLinks from '../pages/headerNavLinks'
import Image from 'next/image'

export default function Header() {
  return (
    <header>
      <div className='container'>
        <Link href='/' passHref>
          <h2>Nova Blog</h2>
        </Link>
        <div className="navbar">
            <div className="navmenu">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="navitem"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
           
            
                    
      </div>
    </header>
  )
}

