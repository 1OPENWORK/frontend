// --------------------------------------------------------
// CANCEL OR EDIT BUTTON - CancelOrEditButton
// --------------------------------------------------------

// --------------------------------------------------------
// GENERAL
// --------------------------------------------------------
import React from 'react'
import { BlueEditButton, RedCancelButton } from './Button.styled';
// --------------------------------------------------------

// --------------------------------------------------------
// IMPORTS
// --------------------------------------------------------
// --------------------------------------------------------

// --------------------------------------------------------
// CANCEL OR EDIT BUTTON INTERFACE
// --------------------------------------------------------

interface ICancelOrEditButton {
    isEdit: boolean;
    style?: any;
    onEditClick: () => void
    onCancelClick: () => void
}
/**
/**
 * A component that renders a Component description here.
 *
 * @param props The component props.
 * @returns The component JSX.
 */
const CancelOrEditButton = ({ isEdit, style = {}, onEditClick, onCancelClick }: ICancelOrEditButton) => {
    // --------------------------------------------------------
    // CANCEL OR EDIT BUTTON PRIVATE DECLARATIONS
    // --------------------------------------------------------
    // --------------------------------------------------------

    // --------------------------------------------------------
    // REACT RETURN FUNCTION
    // --------------------------------------------------------
    return (
        <>
            {isEdit ? 
            (<BlueEditButton
                type="button"
                style={style}
                onClick={onEditClick}>
                Editar
            </BlueEditButton>) :
            (<RedCancelButton
                style={style}
                type="button"
                onClick={onCancelClick}>
                Voltar
            </RedCancelButton>)}
        </>
    )
    // --------------------------------------------------------
}

export default CancelOrEditButton