import { Outlet } from 'react-router-dom';
import SideMenu from '@components/layout/Sidemenu';

const AdminLayout = () => {

    return (
        <div>
            <SideMenu />
            <Outlet />
        </div>
    );
};

export default AdminLayout;
