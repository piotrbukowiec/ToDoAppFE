import { ReactNode } from 'react';
import './Container.css';

interface ContainerProps {
	children: ReactNode;
}

export const Container = ({ children }: ContainerProps) => <div className='container'>{children}</div>;
