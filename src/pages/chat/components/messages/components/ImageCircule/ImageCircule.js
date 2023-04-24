import React, { useEffect, useRef, useState } from "react";
import Styled from "./ImageCircule.styled";
import imgDefault from "../../../../../../assets/imgs/default.png";
const ImageCircule = ({ setImg }) => {
  const [previewImage, setPreviewImage] = useState("");
  const inputRef = useRef(null);

  const handleImageChange = () => {
    inputRef.current.click();
  };

  const handleInputChange = e => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
      setImg(file);
    }
  };

  return (
    <Styled.Container onClick={handleImageChange}>
      <Styled.Input type="file" onChange={handleInputChange} ref={inputRef} />
      {previewImage ? (
        <Styled.Img src={previewImage} alt="Preview" />
      ) : (
        <Styled.Img src={imgDefault} alt="Preview" />
      )}
      <p>
        <ion-icon name="camera-outline"></ion-icon> Editar Foto
      </p>
    </Styled.Container>
  );
};

export default ImageCircule;
