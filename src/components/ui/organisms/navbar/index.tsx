import { useEffect, useState } from 'react';
import NavButton from '../../atoms/NavButton';
import NavLink from '../../atoms/NavLink';
import { cn } from '../../../../utils/cn';

function Navbar() {

  const [show, setShow] = useState(false)
  useEffect(() => {
    const media = window.matchMedia('(min-width: 768px)')
    media.addEventListener('change', e => {
      if (e.matches) {
        setShow(false)
        console.log('changed')
      }
    })

    return () => {
      media.removeEventListener('change', () => { })
    }
  }, []);

  return (
    <header className="flex flex-col w-full py-5 bg-transparent lg:absolute lg:top-0 lg:left-0 px-7 lg:px-24 xl:px-48">

      <div className="flex items-center justify-between w-full">

        <a className='font-bold text-h3 text-text font-martel' href='/'>Litigate</a>
        <div className='flex items-center gap-9'>
          <div className='hidden gap-5 lg:flex'>
            <NavLink href='#Home' name='Home' />
            <NavLink href='#Product' name='Product' />
            <NavLink href='#Pricing' name='Pricing' />
            <NavLink href='#Contact' name='Contact' />
          </div>
          <div className='flex items-center gap-4'>
            <NavButton icon="bx:search" />
            <NavButton icon="f7:cart" />
            <NavButton icon={show ? "bx:menu-alt-right" : "bx:menu"} className='lg:hidden' onClick={() => setShow(!show)} />
          </div>
        </div>
      </div>

      <div
        className={cn({
          "w-full pt-20 pb-24 lg:hidden": true,
          "transition duration-200 ease-out": show,
          "hidden": !show,
         
        })}
        id="mobile-menu"
      >
        <ul className="flex flex-col items-center w-full gap-8">
          <li>
            <a
              href="#"
              className="text-mobile-menu font-open-sans text-second-text hover:underline"
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-mobile-menu font-open-sans text-second-text hover:underline"
            >
              Product
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-mobile-menu font-open-sans text-second-text hover:underline"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-mobile-menu font-open-sans text-second-text hover:underline"
            >
              Contact
            </a>
          </li>

        </ul>
      </div>

    </header>
  )
}

export default Navbar