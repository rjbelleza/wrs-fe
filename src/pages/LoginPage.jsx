import LoginForm from "../components/auth/LoginForm";

const LoginPage = () => {

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="text-2xl mb-3 font-AlbertSans-Bold">Aqua Springs</h1>
            <h4 className="font-AlbertSans mb-10">POS System</h4>
            <LoginForm />
        </div>
    )
}

export default LoginPage;
