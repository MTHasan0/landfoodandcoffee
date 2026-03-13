import '../../app/globals.css';
import React from 'react';

const menuExplore = () => {
    return (
        <div
            className="hero"
            style={{
                backgroundImage:
                    "url('https://res.cloudinary.com/dyijaykqi/image/upload/v1769899919/coffee-5966013_1920_x9sl8r.jpg')"
            }}
        >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className=" button w-full p-4">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default menuExplore;