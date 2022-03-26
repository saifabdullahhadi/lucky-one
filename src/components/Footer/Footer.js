import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="question">
                <div className="answer">
                    <h4>How React Works?</h4>
                    <p>React, at its core, essentially maintains a tree for us. This tree can perform efficient diff computations on its nodes.
                        Consider our HTML code to be a tree. In fact, the browser treats our DOM in this manner (our rendered HTML on the browser). React enables us to effectively re-construct our DOM in JavaScript and push only the changes that have actually occurred to the DOM.</p>
                </div>
                <div className="answer">
                    <h4>What is the difference between Props and State?</h4>
                    <p>Both state and props in react are used to control data into a component, generally props are set by parent and passed to child components and they are fixed throughout the component. We must use state for data that is likely to change. And, while props are immutable, states are mutable; if you want to change props, you can do so from the parent component and then pass it to the child components.</p>
                </div>
                <div className="answer">
                    <h4>How useState works?</h4>
                    <p>useState is a Hook that enables state variables in functional components. When we pass the initial state to this function, and it returns a variable containing the current state value (which may or may not be the initial state) and another function to update this value.</p>
                </div>
            </div>
            <h3 className='copy-right'>© All Right Reserved By saif abdullah hadi Siam</h3>
        </div>
    );
};

export default Footer;