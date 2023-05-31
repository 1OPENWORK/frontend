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
  marginTop,
  alignSelf,
  semHouver
}) => {
  return (
    <GenericSolidButton
      marginTop={marginTop}
      marginRight={marginRight}
      color={color}
      width={width}
      disabled={disabled}
      heigth={heigth}
      onClick={onClick}
      isDark={isDark}
      marginLeft={marginLeft}
      alignSelf={alignSelf}
      semHouver={semHouver}
    >
      {children}
    </GenericSolidButton>
  );
};
