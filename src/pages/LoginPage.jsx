import LoginForm from "../components/auth/LoginForm";

const LoginPage = () => {

    return (
        <div className="flex flex-col md:justify-center items-center h-screen pt-20 md:pt-0 
                        bg-[url('src/assets/images/bg2.png')] md:bg-[url('src/assets/images/bg1.png')] bg-no-repeat md:bg-center md:bg-cover"
        >
            <h1 className="text-2xl text-primary mb-3 font-AlbertSans-Bold">Aqua Springs</h1>
            <h4 className="text-gray-600 font-AlbertSans mb-10">POS System</h4>
            <LoginForm />
        </div>
    )
}

export default LoginPage;
