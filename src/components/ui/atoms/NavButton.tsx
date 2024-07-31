import { Icon } from '@iconify/react';
import { cn } from '../../../utils/cn';

interface NavButtonProps {
    icon: string
    className?: string,
    onClick?: () => void
}
function NavButton({ icon, className, onClick }: NavButtonProps) {
    return (
        <button className={
            cn("p-2 rounded-md font-semibold text-link hover:bg-second-text/10 text-second-text", className)
        }
        onClick={onClick}
        >
            <Icon icon={icon} className='w-6 h-6' />
        </button>
    )
}

export default NavButton