import { React } from "react";

import { Sec, UserImg, TitleImg, Welcome } from "./UserLog.styled";

export const Userlog = ({ name, desc }) => {
  return (
    <>
      <Sec>
        <UserImg>
          <TitleImg>{name}</TitleImg>
        </UserImg>
        <Welcome>{desc}</Welcome>

      </Sec>
    </>
  );
};
