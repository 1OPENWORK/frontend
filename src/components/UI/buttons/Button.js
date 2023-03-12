
import { GenericSolidButton } from './Button.styled';



export const FilledButton = ({color, width, onClick, disabled, children, heigth, inverted})=>{

    return(
        <GenericSolidButton  color={color} width={width} disabled={disabled} heigth={heigth} onClick={onClick} inverted={inverted}>
            {children}
        </GenericSolidButton>
    )
}

FilledButton.displayName = 'FilledButton';