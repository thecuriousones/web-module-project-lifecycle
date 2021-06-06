import React from 'react';
import User from './User';


class Follower extends React.Component {
    render() {
        const { users } = this.props;

        return (
            <div class="p-4">
                <div class="flex-col  flex justify-center items-center">
                    <div class="flex-shrink-0">
                        <a href="#" class="block relative">
                            <img alt="profil" src={users.avatar_url} class="mx-auto object-cover rounded-full h-20 w-20 " />
                        </a>
                    </div>
                    <div class="mt-2 text-center flex flex-col">
                        <span class="text-gray-600 dark:text-white text-lg font-medium">
                            {users.login}
                        </span>
                        <span class="text-gray-400 text-xs">
                            Friend
                        </span>
                    </div>
                </div>
            </div>
        )
    }


}

export default Follower;