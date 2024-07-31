import { Icon } from "@iconify/react/dist/iconify.js"
import { cn } from "../../../utils/cn"

interface SelectProps {
    placeholder: string,
    title?: string,
    clasName?: string,
    options: string[],
    id: string,
    name: string,
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
    error?: string,

}
function Select({
    placeholder,
    title,
    options,
    id,
    name,
    onChange,
    error
}: SelectProps) {
    return (
        <div className="relative flex flex-col w-full gap-2 py-1">
            {title && <label className={cn({
                'text-h6 text-text font-open-sans font-bold': true,
            })}>{title}*</label>}
            <select defaultValue={placeholder} className={cn({
                'border border-muted rounded-md px-5 py-3 bg-zinc-50 text-second-text placeholder:text-second-text placeholder:font-medium font-montserrat appearance-none focus:outline-secondary-4': true,
            })}
                id={id}
                name={name}
                onChange={onChange}
            >
                <option value={placeholder} disabled>{placeholder}</option>
                {options.map(option => (
                    <option value={option} key={option}>{option}</option>
                ))}
            </select>
            {error && <p className="py-0 -mt-1 text-xs font-normal text-red-600 font-open-sans">{error}</p>}
            <Icon icon="mdi:chevron-down" className={cn({
                "absolute w-5 h-6 pointer-events-none right-3  text-second-text": true,
                "top-12": title,
                "top-4": !title
            })} />

        </div>
    )
}

export default Select