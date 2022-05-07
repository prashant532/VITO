

const Navbar = () => {
  

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
    
    <h1 className="text-5xl sm:text-5xl text-white text-gradient py-1">
            VITO
          </h1>
      
    </nav>
  );
};

export default Navbar;



// // import logo from '../../images/logo.png';

// const NavbarItem = ({ title , classProps }) => (
//      <li className={`mx-4 cursor-pointer ${classProps}`}>
//      {title}
//      </li>
//    )
// const  Navbar = () => {
//     return(
//         <nav className='w-full flex md:justify-center justify-between items-center p-4'>
//            <div className='md:flex-[0.5] flex-initial justify-center items-center '>
//              <img src='images/logo.png' alt='logo' className="w-32 cursor-pointer"/>
//            </div>
//            <ul className='text-white md:flex hiddent list-none flex-row justify-between items-center flex-initial'>
//               <NavbarItem />
//               {["MArket","Exchange","wallets"].map((item,index) => (
//                   <NavbarItem key={item+index} title={item} />
//               ))}
//               <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg=[#2546Bd]'>
//                 Login
//               </li>
//            </ul>
//         </nav>
//     );
// }
