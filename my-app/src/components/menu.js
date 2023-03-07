import '../index.css';
import { NavLink } from 'react-router-dom';

export default function Menu() {
    return (
        <>
            <div className='dditems'>
                <NavLink to='/' className='dditem'>Burgers</NavLink>
                <NavLink to='/' className='dditem'>Sides</NavLink>
                <NavLink to='/' className='dditem'>Drinks</NavLink>
                <NavLink to='/' className='dditem'>Desserts</NavLink>
            </div>
        </>
    )
}