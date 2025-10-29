import { Link } from 'react-router-dom';

const SideMenu = () => {

    return (
        <div className="h-screen w-55 bg-white shadow-lg shadow-gray-500">
            <div className="flex items-center w-full h-15 border-b border-gray-300">
                <Link to="/admin" className='flex w-full h-fit justify-center gap-3 items-center'>
                    <img src="logo.png" alt="Logo" title='Go To Home' className="w-10" />
                    <p className='font-AlbertSans-SemiBold text-sm text-gray-700'>
                        Aqua Springs 
                    </p>
                </Link>
            </div>
        </div>
    );
}

export default SideMenu;
