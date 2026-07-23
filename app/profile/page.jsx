'use client'
import React from 'react';
import { authClient } from '../lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';

const MyProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  return (
    <div>
      <div>
        <h3 className='text-xl'>Hi <span className='font-bold italic'>{user?.name}!</span> This is Your Profile....</h3>
      </div>

      <div>
        <div>
          <div className='m-10 flex justify-center'>

            {/* section-1  */}
            <div className='flex justify-center text-center bg-white shadow-md rounded-md p-10 w-90'>
              <ul className='space-y-3'>
                <li>
                  <div className="w-24 h-24 mx-auto overflow-hidden rounded-full aspect-square relative">
                    <Image className="object-cover" sizes="96px" src={user?.image} fill alt={user?.name || "User Avatar"}></Image>
                  </div></li>
                <li><h3 className='text-xl font-semibold'>{user?.name}</h3></li>
                <li className='text-[#64748B] text-lg'>{user?.email}</li>
                <li><Link href={'profile/editProfile'} className='btn btn-warning'>Edit</Link></li>
              </ul>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default MyProfilePage;