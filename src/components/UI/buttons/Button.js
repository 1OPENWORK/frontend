import { GenericSolidButton } from "./Button.styled";




export const FilledButton = ({color, width, onClick, disabled, children, heigth})=>{

    return(
        <GenericSolidButton  color={color} width={width} disabled={disabled} heigth={heigth} onClick={onClick}>
            {children}
        </GenericSolidButton>
    )
}
