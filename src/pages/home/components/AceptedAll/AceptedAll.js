import React, { useState } from 'react';
import imgInitial from "../../../../assets/imgs/imageInitial2.svg";
import {DivHome,ImgHome,ContainerAceptedAll} from '../../Home.styled'
import {Paragrafo,DivSocialMedia, TitleDivInformationAceptedAll} from "./AceptedAll.styled";
import Colors from "../../../../constants/Colors";
import DadosDep from "../../../../constants/json/Informations.json";
import ArrowNexts from "../../../../components/arrows/ArrowNexts";

const AceptedAll = ({ }) => {

    const [list] = useState(DadosDep.aceptedAll);

    const [descriptionSelected, setDescriptionSelected] = useState(0);

    return (
        <ContainerAceptedAll>
            <DivHome w="20%" center={true}>
                <ImgHome src={imgInitial} />
            </DivHome>
            <DivHome>
                <TitleDivInformationAceptedAll color={Colors.PRIMARY_COLOR}> {"Aceitamos a Todos"} </TitleDivInformationAceptedAll>
                {list?.map((d, index) => {
                    return (
                        <div>
                            {descriptionSelected === index && (
                                <Paragrafo fw={0} key={index}>
                                    {d.description}
                                </Paragrafo>
                            )}
                        </div>
                    );
                })}

                <ArrowNexts length={"100%"} selected={descriptionSelected} handleSelected={() => { setDescriptionSelected( descriptionSelected + 1 >= list.length  ? descriptionSelected - 1 : descriptionSelected + 1 ) }} />


            </DivHome>
        </ContainerAceptedAll>

    );
}

export default AceptedAll;