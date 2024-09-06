'use client'
import Dashboard from '@/components/Dashboard';
import DashboardForm from '@/components/DashboardForm';
import { Suspense, type FC } from 'react';

interface pageProps {}

const page: FC<pageProps> = ({}) => {
        return (
            <Suspense>
                <DashboardForm/>
            </Suspense>
        );
}
export default page;