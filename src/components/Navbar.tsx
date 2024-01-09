"use client";
// import React from "react";
// import Link from "next/link";
// import { signOut, useSession } from "next-auth/react";

// const Navbar = () => {
  
//   const { data: session }: any = useSession();
//   return (
//     <div>
//       <ul className="flex justify-between m-10 items-center  ">
//         <div>
//           <Link href="/">
//             <li>Home</li>
//           </Link>
//         </div>
//         <div className="flex gap-10 items-center ${isActive ? 'text-[#909090]' : 'text-[#484848]'}`">
//           {/* <Link href="/dashboard">
//             <li>Dashboard</li>
//           </Link> */}
//           {!session ? (
//             <>
//               <Link href="/login">
//                 <li>Login</li>
//               </Link>
//               <Link href="/register">
//                 <li>Register</li>
//               </Link>
//             </>
//           ) : (
//             <>
//               {session.user?.email}
//               <li>
//                 <button
//                   onClick={() => {
//                     signOut();
//                   }}
//                   className="p-2 px-5 -mt-1 bg-blue-800 rounded-full text-white hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
//                 >
//                   Logout
//                 </button>
//               </li>
//             </>
//           )}
//         </div>
//       </ul>
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <div>
      <ul className="flex justify-between m-10 items-center">
        <div>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
        </div>
        <div className="flex gap-10 items-center">
          {!session ? (
            <>
              <Link href="/login">
                <li>Login</li>
              </Link>
              <Link href="/register">
                <li>Register</li>
              </Link>
            </>
          ) : (
            <>
              {session.user?.email}
              <li>
                <button
                  onClick={() => {
                    signOut();
                  }}
                  className="p-2 px-5 -mt-1 bg-blue-800 rounded-full text-white hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </div>
      </ul>
    </div>
  );
};

export default Navbar;

