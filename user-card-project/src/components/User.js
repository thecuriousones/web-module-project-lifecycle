import React from 'react';

class User extends React.Component {
    render() {
        const { userObject } = this.props;
        return (
            <div>
                <div className='flex w-full flex-row flex-wrap'>
                    <div className="flex w-full flex-row flex-wrap justify-start border-2 h-20 ml-6 mt-4 rounded-md bg-gray-500 shadow-lg">
                        <h3 className='mt-6 font-semibold ml-4'>WELCOME BACK</h3>
                        <div className='text-gray-500'>Empty Space</div>
                        <div className='text-gray-500'>Empty Space</div>
                        <div className='text-gray-500'>Empty Space</div>
                        <div className='text-gray-500'>Empty Space</div>
                        <div className='text-gray-500'>Empty Space</div>
                        <div className='text-gray-500'>Empty Space</div>
                        <div className='text-gray-500'>Empty Space</div>
                        <div className='text-gray-500'>Empty Space</div>
                        <div className='text-gray-500'>Empty Space</div>
                        <div className='text-gray-500'>Empty Space</div>
                        <div className='text-gray-500'>Empty Space</div>
                        <div className='text-gray-500'>Empty Space</div>
                        <div className='text-gray-500'>Empty Space</div>
                        <div className='text-gray-500'>Empty Space</div>
                        <div class="relative inline-block">
                            <img
                                class="inline-block object-cover w-12 h-12 rounded-full mt-4"
                                src={userObject.avatar_url}
                                alt="Profile.img"
                            />
                            <span class="absolute bottom-0 right-0 inline-block w-3 h-3 bg-green-600 border-2 border-white rounded-full"></span>
                        </div>
                    </div>

                    <div class="bg-white p-3 mt-8 ml-8 w-80 shadow-md">
                        <hr className='border-t-4 border-green-400 w-60 ml-8' />
                        <div class="image overflow-hidden">
                            <img
                                class="h-auto w-full mx-auto"
                                src={userObject.avatar_url}
                                alt={userObject.name}
                                className="w-60 h-60 rounded-lg mt-5 ml-8"
                            />
                        </div>
                        <h1 class="text-gray-900 font-bold text-xl leading-8 my-1 ml-8">{userObject.name}</h1>
                        <h3 class="text-gray-600 font-lg text-semibold leading-6 ml-8">{userObject.bio}</h3>
                        <p class="text-sm text-gray-500 hover:text-gray-600 leading-6 w-56 ml-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur non deserunt</p>
                        <ul class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm  w-56 ml-8">
                            <li class="flex items-center py-3">
                                <span>Status</span>
                                <span class="ml-auto"><span class="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
                            </li>
                            <li class="flex items-center py-3">
                                <span>Member since</span>
                                <span class="ml-auto">Nov 07, 2016</span>
                            </li>
                        </ul>
                    </div>

                    <div class="bg-white p-3 rounded-sm h-60 mt-14 ml-5 shadow-lg">
                        <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                            <span clas="text-green-500">
                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </span>
                            <span class="tracking-wide">About</span>
                        </div>
                        <div class="text-gray-700">
                            <div class="grid md:grid-cols-2 text-sm">
                                <div class="grid grid-cols-2">
                                    <div class="px-4 py-2 font-semibold">First Name</div>
                                    <div class="px-4 py-2">Tamara</div>
                                </div>
                                <div class="grid grid-cols-2">
                                    <div class="px-4 py-2 font-semibold">Last Name</div>
                                    <div class="px-4 py-2">Leonard</div>
                                </div>
                                <div class="grid grid-cols-2">
                                    <div class="px-4 py-2 font-semibold">Gender</div>
                                    <div class="px-4 py-2">Female</div>
                                </div>
                                <div class="grid grid-cols-2">
                                    <div class="px-4 py-2 font-semibold">Contact No.</div>
                                    <div class="px-4 py-2">+11 998001001</div>
                                </div>
                                <div class="grid grid-cols-2">
                                    <div class="px-4 py-2 font-semibold">Email</div>
                                    <div class="px-4 py-2">
                                        <a class="text-blue-800" href="tamaraleonard46@gmail.com">tamaraleonard46@gmail.com</a>
                                    </div>
                                </div>
                                <div class="grid grid-cols-2">
                                    <div class="px-4 py-2 font-semibold">Birthday</div>
                                    <div class="px-4 py-2">Feb, 5, 2001</div>
                                </div>
                                <div class="grid grid-cols-2">
                                    <div class="px-4 py-2 font-semibold">Followers</div>
                                    <div class="px-4 py-2">
                                        {userObject.followers}
                                    </div>
                                </div>
                                <div class="grid grid-cols-2">
                                    <div class="px-4 py-2 font-semibold">Following</div>
                                    <div class="px-4 py-2">{userObject.following}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default User;