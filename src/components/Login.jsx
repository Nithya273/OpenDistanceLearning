import { useState, useEffect } from 'react';
import './Login.css';

function LoginForm() {
    const [activeTab, setActiveTab] = useState('login');

    const switchTab = (tab) => {
        setActiveTab(tab);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    useEffect(() => {
        const canvas = document.getElementById('canvas');
        const context = canvas.getContext('2d');
        canvas.width = 300;
        canvas.height = 345;
        const x = canvas.width / 2;
        const y = canvas.height / 2;
        const radius = 100;
        const endPercent = 102;
        let curPerc = 0;
        const circ = Math.PI * 2;
        const quart = Math.PI / 2;
        const green = '#17BD96';

        context.lineWidth = 5;
        context.fillStyle = green;
        context.strokeStyle = green;

        function animate(current) {
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.beginPath();
            context.arc(x, y, radius, -(quart), ((circ) * current) - quart, false);
            context.stroke();
            curPerc += 2;
            if (curPerc < endPercent) {
                requestAnimationFrame(function () {
                    animate(curPerc / 100);
                });
            } else {
                document.getElementById('fill').classList.add('animate');
            }
        }

        setTimeout(animate, 1000);

        const onAnimationEnd = () => {
            document.querySelector('.success').style.opacity = '1';
        };

        canvas.addEventListener('webkitAnimationEnd', onAnimationEnd);

        return () => {
            canvas.removeEventListener('webkitAnimationEnd', onAnimationEnd);
        };
    }, []);

    return (
        <div className="grid">
            <div className="cube">
                <div className="item">
                    <ul className="tabs">
                        <li>
                            <input
                                type="radio"
                                name="tabs"
                                id="tab1"
                                checked={activeTab === 'login'}
                                onChange={() => switchTab('login')}
                            />
                            <label htmlFor="tab1" className="nav">Login</label>
                            <div id="loginTabContent" className="tab-content">
                                <form id="loginForm" onSubmit={handleSubmit}>
                                    <label htmlFor="email" className="frm">Email Address</label>
                                    <input type="email" name="login" required />

                                    <label htmlFor="password" className="frm">Password</label>
                                    <input type="password" name="password" required />

                                    <input type="checkbox" name="keep" id="keep" />
                                    <label htmlFor="keep" className="frm">Keep me logged in.</label>

                                    <button id="loginBtn" type="submit">Login</button>

                                    <span>
                                        <a href="#">Forgot your password?</a>
                                    </span>
                                </form>
                            </div>
                        </li>
                        <li>
                            <input
                                type="radio"
                                name="tabs"
                                id="tab2"
                                checked={activeTab === 'register'}
                                onChange={() => switchTab('register')}
                            />
                            <label htmlFor="tab2" className="nav">Register</label>
                            <div id="signupTabContent" className="tab-content">
                                <form onSubmit={handleSubmit}>
                                    <label htmlFor="email" className="frm">Email Address</label>
                                    <input type="email" name="login" required />

                                    <label htmlFor="password" className="frm">Password</label>
                                    <input type="password" name="password" required />

                                    <label htmlFor="password" className="frm">Confirm Password</label>
                                    <input type="password" name="password" required />

                                    <button id="registerBtn" type="submit">Register</button>
                                </form>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="done">
                    <canvas id="canvas"></canvas>
                    <div id="fill"></div>
                    <div className="success">
                        <span>Login Successful</span>
                        <i className="fa fa-check"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;
