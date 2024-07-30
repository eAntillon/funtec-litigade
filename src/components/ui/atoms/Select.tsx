import { Icon } from "@iconify/react/dist/iconify.js"
import { cn } from "../../../utils/cn"

interface SelectProps {
    placeholder: string,
    title: string,
    clasName?: string,
    options: string[],
}
function Select({
    placeholder,
    title,
    options,
}: SelectProps) {
    return (
        <div className="relative flex flex-col w-full gap-2 py-1">
            <label className={cn({
                'text-h6 text-text font-open-sans font-bold': true,
            })}>{title}*</label>
            <select defaultValue={placeholder} className={cn({
                'border border-muted rounded-md px-5 py-3 bg-zinc-50 text-second-text placeholder:text-second-text placeholder:font-medium font-montserrat appearance-none': true,
            })}>
                <option value={placeholder} disabled>{placeholder}</option>
                {options.map(option => (
                    <option value={option} key={option}>{option}</option>
                ))}
            </select>
                <Icon icon="mdi:chevron-down" className="absolute w-5 h-6 pointer-events-none right-3 bottom-4 text-second-text" />
        </div>
    )
}

export default Select