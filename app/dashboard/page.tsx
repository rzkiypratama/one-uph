'use client'
import Dashboard from '@/components/Dashboard';
import DashboardForm from '@/components/DashboardForm';
import type { FC } from 'react';

interface pageProps {}

const page: FC<pageProps> = ({}) => {
        return (
            <DashboardForm/>
        );
}
export default page;