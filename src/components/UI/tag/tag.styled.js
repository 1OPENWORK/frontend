import styled from "styled-components";

export const TableTag = styled.span `
    color: #fff;
    padding-inline: 10px;
    border-radius: 18px;
    padding-block: 5px;
    background-color: ${props => props.status == 'open' ? '#48DC72' :  props.status == 'progress' ? '#47B6E9' : '#F34B4B'};
`