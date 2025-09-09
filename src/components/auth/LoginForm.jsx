
const LoginForm = () => {
    
    return (
        <form className="flex flex-col bg-white border border-gray-400 shadow-md rounded-md">
            <div className="flex justify-between items-center border-b border-gray-400 p-5">
                <h1 className="text-xl text-primary font-AlbertSans-Bold">Login</h1>
                <img src="src/assets/images/logo.png" alt="logo" width={50} />
            </div>
            <div className="w-90 font-AlbertSans p-5 space-y-5">
                <div className="flex flex-col gap-2">
                    <label htmlFor="username">Username</label>
                    <input 
                        type="email"
                        id="username"
                        name="username"
                        className="border border-gray-400 rounded py-2 px-5"
                        placeholder="Enter username here.."
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password"
                        id="password"
                        name="password"
                        className="border border-gray-400 rounded py-2 px-5"
                        placeholder="Enter password here.."
                    />
                </div>
                <button
                    className="w-full bg-primary hover:bg-primary-hover text-white rounded font-AlbertSans py-2 cursor-pointer"
                >
                    Login
                </button>
            </div>
        </form>
    );
};

export default LoginForm;
