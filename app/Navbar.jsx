'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { authClient } from './lib/auth-client';
import Image from "next/image";


const Navbar = () => {

  const pathname = usePathname();

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const links = <>
    <li><Link href={'/'} className={pathname === '/' ? "btn btn-outline btn-warning" : 'font-semibold'}>Home</Link></li>
    <li><Link href={'/allBooks'} className={pathname === '/allBooks' ? "btn btn-outline btn-warning" : 'font-semibold '}>All Books</Link></li>
    <li><Link href={'/profile'} className={pathname === '/profile' ? "btn btn-outline btn-warning" : 'font-semibold '}>My Profile</Link></li>
  </>



  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="navbar bg-base-100 shadow-sm container mx-auto p-3 mt-4 rounded">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl font-bold">
            <span className="text-stone-800">book<span className="text-amber-500">Shelph</span></span></a>
        </div>
        <div className="navbar-center hidden lg:flex gap-2">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>

        {user ?
          <div className="navbar-end flex gap-2.5">
            <div className="flex gap-1 items-center">
              <h3>Hi {user?.name}!</h3>
              <div className="w-10 h-10 rounded-full overflow-hidden relative">
                <Image className="object-cover" src={user?.image} alt="image" fill ></Image>
              </div>
            </div>

            <Link href={'/signup'}>
            <button onClick={async () => await authClient.signOut()} className="btn btn-warning">Sign-Out</button>
            </Link>
          </div> :

          <div className="navbar-end">
            <Link href={'/signup'}>
              <button className="btn btn-warning">Sign-Up</button>
            </Link>
          </div>
        }

      </div>
    </div>
  );
};

export default Navbar;