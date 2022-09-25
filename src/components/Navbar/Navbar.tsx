import { FcCalendar } from 'react-icons/fc';
import {GrLogout} from 'react-icons/gr'
export const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-dark mb-4 px-4'>
      <span className='navbar-brand'>
        <FcCalendar className='mr-2' color='white' size='1.5rem' />
        Fran
      </span>
      <button className='btn btn-outline-danger'>
        <GrLogout
          className='mr-2'
          size='1.5em'
        />
        <span>Salir</span>
      </button>
    </nav>
  );
};
