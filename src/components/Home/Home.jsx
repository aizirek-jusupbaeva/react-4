import React from 'react';
import './Home.css'

const Home = () => {
	return (
		<div className='home'>
			<div className="container">
                <div className="home-flex">
                    <h1 className='regestration'>Sign In Now!</h1>
                    <h2> To order, please sign in</h2>
                    <div className="flex-forum">
                        <input className='forum' type="email" name="" id="" />
                        <input className='forum' type="password" name="" id="" />
                        <button className='btn'>Sign in</button>
                    </div>
                    <br />
                    <br />
                    <p>if you need help click "About"</p>
                </div>
            </div>
		</div>
	)
}

export default Home;