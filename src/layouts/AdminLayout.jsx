import { Outlet } from 'react-router-dom';
import SideMenu from '@components/layout/Sidemenu';
import Header from '@components/layout/Header';

const AdminLayout = () => {

    return (
        <div className='font-AlbertSans w-full overflow-x-hidden'>
            <div className='flex w-full'>
                <SideMenu />
                <Header />
            </div>
            <Outlet />
        </div>
    );
};

export default AdminLayout;
