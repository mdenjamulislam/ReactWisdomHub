import React from 'react';

const User = ({ user }) => {
    const { name, username, email, profile_img, banner, bio, social_media } = user;

    return (
        <div className='col-span-12 md:col-span-3 border border-slate-400'>
            <div>
                <img className='relative w-full h-auto' src={banner} alt="" />
                <div class="avatar online -mt-6 lg:-mt-10 ml-3">
                    <div class="w-12 lg:w-16 rounded-full">
                        <img src={profile_img} alt={name} />
                    </div>
                </div>
            </div>
            <div className='p-2 md:p-3 flex flex-col gap-5'>
                <div className='text-center'>
                    <h4 className='text-base font-bold'>{name}</h4>
                    <p className='text-sm'>{email}</p>
                    <p className='text-sm italic'>@{username}</p>
                </div>
                <div>
                    <h3 className='text-base font-bold pb-1'>Bio:</h3>
                    <p className='p-2 ml-3 text-xs md:text-sm border border-slate-600 rounded-lg'>{bio}</p>
                </div>
                <div>
                    <h3 className='text-base font-bold pb-1'>Social Media</h3>
                    <ul className='flex flex-col gap-2 pl-3'>
                        {
                            Object.entries(social_media || {}).map(([key, social]) => (
                                <li className='flex flex-row gap-2 items-center'>
                                    <img className='w-8 h-8 rounded-full' src={social.icon} alt="" />
                                    <a className='text-xs md:text-sm' href={social.profile_link}>{key}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default User;