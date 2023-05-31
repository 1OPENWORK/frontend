import React from "react";
import {TableTag} from "./tag.styled";

const Tag = ({ status, statusColor }) => {
  return (
    <TableTag status={statusColor}>
      {status == "open"
        ? "Concluído"
        : status == "progress"
        ? "Em Progresso"
        : "Fechado"}
    </TableTag>
  );
};

export default Tag;
