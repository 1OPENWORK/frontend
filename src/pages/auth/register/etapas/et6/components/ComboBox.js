import React from "react";
import { Select } from "./ComboBox.styled";

export const ComboBox = ({}) => {
  return (
    <>
      <Select>
        <option>Proficiência</option>
        <option value="1" min="0" step="1">
          Iniciante
        </option>
        <option value="2" min="0" step="1">
          Intermediário
        </option>
        <option value="3" min="0" step="1">
          Avançado
        </option>
      </Select>
    </>
  );
};
