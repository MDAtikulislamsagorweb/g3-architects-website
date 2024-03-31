import { Outlet } from 'react-router-dom';
import Root from 'Root';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Root></Root>
        </div>
    );
};

export default Root;