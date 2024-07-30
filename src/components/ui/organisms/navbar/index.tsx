import NavButton from '../../atoms/NavButton';
import NavLink from '../../atoms/NavLink';

function Navbar() {
  return (
    <header className="fixed top-0 left-0 flex items-center justify-between w-full py-5 bg-transparent border-b px-7 sm:py-6 sm:px-9">
      <h3 className='font-bold text-h3 text-text font-martel'>Litigate</h3>
      <div className='flex items-center gap-9'>
        <div className='flex gap-5'>
          <NavLink href='#Home' name='Home' />
          <NavLink href='#Product' name='Product' />
          <NavLink href='#Pricing' name='Pricing' />
          <NavLink href='#Contact' name='Contact' />


        </div>
        <div className='flex items-center gap-4'>
          <NavButton icon="bx:search" />
          <NavButton icon="f7:cart" />
          <NavButton icon="bx:menu" className='md:hidden' />
        </div>
      </div>
    </header>
  )
}

export default Navbar