import { Eye, EyeOff } from 'lucide-react'
import React, { Dispatch, SetStateAction, useState } from 'react'

interface IconProps {
    className?: string
    fill?: string
    stroke?: string
    height?: string
    width?: string
    viewBox?: string
}

interface Styles {
    classInput?: string
    Icon?: IconProps
}

const InputPassword:
    React.FC<{ className?: string; styles?: Styles, value: string, setter: Dispatch<SetStateAction<string>> }> =
    ({ className, styles, value, setter }) => {


        const [showPassword, setShowPassword] = useState<boolean>(false)

        return (
            <div className={`flex items-center ${className}`}>
                <input
                    className={`${styles?.classInput} outline-none p-0`}
                    type={showPassword ? 'text' : 'password'}
                    value={value}
                    onChange={(e) => setter(e.target.value)}
                    id="Password"
                />
                <button
                    className="all-unset !cursor-pointer"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                >
                    <EyeIcon styles={styles?.Icon} showPassword={showPassword} />
                </button>
            </div>
        )
    }

const EyeIcon: React.FC<{ styles?: IconProps; showPassword: boolean }> = ({ styles, showPassword }) => {
    const IconComponent = showPassword ? Eye : EyeOff
    return <IconComponent className={styles?.className}
        stroke={styles?.stroke||"black"}
        width={styles?.width||24}
        height={styles?.height||24}
        fill={styles?.fill||"none"}
        viewBox={styles?.viewBox||"0 0 24 24"}  
    />
}

export default InputPassword
