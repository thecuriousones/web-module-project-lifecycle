import React from 'react';
import axios from 'axios';
import Follower from './Follower';



class Followers extends React.Component {
    constructor() {
        super();
        this.state = {
            followers: []
        }
    }

    componentDidMount = () => {
        console.log('is this working?')
        axios.get('https://api.github.com/users/thecuriousones/followers')
            .then(res => {
                console.log(res);
                this.setState({
                    ...this.state,
                    followers: res.data
                });
            })
            .catch(err => console.log(err));
    }


    render() {
        return (
            <div>
                <div className="shadow-lg p-4 bg-white dark:bg-gray-800  mb-10 w-3/5 ml-96 -mt-72" style={{marginLeft: '23.2rem', width: '55rem', height: '18rem'}}>
                    <p class="text-left text-2xl font-bold text-gray-800 dark:text-white">
                        My Followers
                   </p>
                    <p class="text-left mb-12 text-l font-normal text-gray-500 dark:text-gray-300">
                        Find others like me!
                   </p>
                    <div class="flex items-center flex-col md:flex-row justify evenly">
                        {this.state.followers.map(users => (
                            <Follower key={users.id} users={users} />
                        ))}
                    </div>
                </div>
               
            </div>
        )
    }
}

export default Followers;
