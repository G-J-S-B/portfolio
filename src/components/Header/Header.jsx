import './Header.css'
import navLinks from '../../data/nav-items.json'


function Header()
{
    return (
        <header>
            <div className='nav-bar'>
                <div className="nav-icon">
                    <a href="/">GJSB</a>
                </div>
                <nav>
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href}>
                            {link.label}
                        </a>
                        ))}
                </nav>
            </div>
        </header>
    )
}

export default Header