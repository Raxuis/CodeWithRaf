import React, {ReactNode} from 'react';

const Layout = ({children}: { children: ReactNode }) => {
    return (
        <div className="relative overflow-y-auto max-w-5xl w-full flex-col py-6 flex gap-4 mx-auto px-4">
            {children}
        </div>
    );
};
export default Layout;