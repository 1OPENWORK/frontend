import { GenericSolidButton } from "./Button.styled";

export const FilledButton = ({
  color,
  width,
  onClick,
  disabled,
  children,
  heigth,
  isDark,
  marginRight,
  marginLeft,
}) => {
  return (
    <GenericSolidButton
      marginRight={marginRight}
      color={color}
      width={width}
      disabled={disabled}
      heigth={heigth}
      onClick={onClick}
      isDark={isDark}
      marginLeft={marginLeft}
    >
      {children}
    </GenericSolidButton>
  );
};
