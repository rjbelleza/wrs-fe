import { loginUser } from "@/api/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import { handleInputChange } from "@/utils/helpers";
import { checkRole, isEmptyInput } from "@/utils/validators";
import { Eye, EyeOff } from "lucide-react";

const LoginForm = () => {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [showPass, setShowPass] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            setError("");

            const usernameField = isEmptyInput(formData.username);
            const passwordField = isEmptyInput(formData.password);

            if (usernameField || passwordField) {
                setError("Username and password are required.");
                return;
            }
            setIsLoading(true);

            const res = await loginUser(formData);
            await login(res.token, res.user);

            const redirectTo = checkRole(res.user.role);
            navigate(redirectTo);
        } catch (err) {
            setError(err || "Login failed. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };
    
    return (
        <form onSubmit={handleSubmit} className="flex flex-col bg-white border border-gray-400 shadow-md rounded-md">
            <div className="flex justify-between items-center border-b border-gray-400 p-5">
                <h1 className="text-xl text-primary font-AlbertSans-Bold">Login</h1>
                <img src="src/assets/images/logo.png" alt="logo" width={50} />
            </div>
            <div className="w-90 font-AlbertSans p-5 space-y-5">
                <div className="flex flex-col gap-2">
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text"
                        id="username"
                        name="username"
                        className="border border-gray-400 rounded py-2 px-5"
                        placeholder="Enter username here.."
                        value={formData.username}
                        onChange={(e) => handleInputChange(e, setFormData)}
                        required
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="password">Password</label>
                    <div className="relative w-full">
                        <input
                            type={showPass ? 'text' : 'password'}
                            id="password"
                            name="password"
                            className="border border-gray-400 w-full rounded py-2 px-5"
                            placeholder="Enter password here.."
                            value={formData.password}
                            onChange={(e) => handleInputChange(e, setFormData)}
                            autoComplete="off"
                            required
                        />
                        <button 
                            type="button"
                            className="absolute right-2 bottom-2 text-primary cursor-pointer"
                            onClick={() => setShowPass(!showPass)}
                        >
                            { !showPass ? (
                                <Eye  />
                            ) : (
                                <EyeOff />
                            )}
                        </button>
                    </div>
                </div>
                <div>
                    {error && (<p>{error}</p>)}
                </div>
                <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-primary disabled:bg-gray-400 hover:bg-primary-hover text-white rounded font-AlbertSans py-2 cursor-pointer disabled:cursor-wait"
                >
                    {isLoading ? "Logging in..." : "Login"}
                </button>
            </div>
        </form>
    );
};

export default LoginForm;
