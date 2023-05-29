import React, { useEffect, useState } from "react";
import Styled from "./BarProgress.styled";

const BarProgress = ({ atualEtapa, qtdMax }) => {
  const [porcent, setPorcent] = useState(atualEtapa);

  useEffect(() => {
    const divisao = 100 / qtdMax;
    setPorcent(parseInt(divisao * atualEtapa));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [atualEtapa]);

  return (
    <Styled.Container porcent={porcent + "%"}>
      <Styled.Porcentend>{porcent + "%"}</Styled.Porcentend>
    </Styled.Container>
  );
};

export default BarProgress;
