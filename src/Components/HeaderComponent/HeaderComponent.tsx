import styles from './HeaderComponent.module.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom';
export default function HeaderComponent() {
    const [menuCollapsed, setMenuCollapsed] = useState(true);
    return (
        <>
            <div className={`${styles.headerWrapper} ${menuCollapsed ? '' : styles.headerShown}`}>
                <div className={styles.headerLeft}><Link to ='/REST/'>
                    <h5>Postman Book API</h5>
                </Link></div>
                <div className={`${styles.headerCenter} ${menuCollapsed ? '' : styles.shown}`}>
                    <ul>
                        <Link to='/REST/Create/'><li>Create</li></Link>
                        <Link to='/REST/Read'><li>Read</li></Link>
                        <Link to='/REST/Update'><li>Update</li></Link>
                        <Link to='/REST/Delete'><li>Delete</li></Link>

                    </ul>
                </div>
                <button className={styles.menuBtn} onClick={() => { setMenuCollapsed(!menuCollapsed) }}>
                    <span className={`${menuCollapsed ? "" : styles.show}`}></span>
                    <span className={`${menuCollapsed ? "" : styles.show}`}></span>
                    <span className={`${menuCollapsed ? "" : styles.show}`}></span>
                </button>


                
                   
            </div >

        </>
    )
}