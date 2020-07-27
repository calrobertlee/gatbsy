import React from 'react'
import { Link } from "gatsby"

import headerStyles from './header.module.scss'

const Header = () => {
    return (
        <div>
            <header className={headerStyles.header}>
                <h1>
                    <Link className={headerStyles.title}to="/">
                        Cal Robert Lee
                    </Link>    
                </h1>
                <nav>
                    <ul className={headerStyles.navList}>
                        <li>
                            <Link className={headerStyles.navItem} to="/">Home</Link>
                        </li>
                        <li>
                            <Link className={headerStyles.navItem} to="/blog">Blog</Link>
                        </li>
                        <li>
                            <Link className={headerStyles.navItem} to="/bookshelf">Bookshelf</Link>
                        </li>
                        <li>
                            <Link className={headerStyles.navItem} to="/contact">Contact</Link>
                        </li>
                    </ul>
                </nav>
            </header>          
        </div>
    )
}

export default Header
