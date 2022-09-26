import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

const GardenCreateModal = ({ modalOpen, closeModal }) => {
  const [imgFile, setImgFile] = useState(null); // img 전송용
  const [imgSrc, setImgSrc] = useState(null); // img 표시용
  const [gardenInputs, setGardenInputs] = useState({
    plantname: '',
    date_grow: null,
    watering_schedule: null,
    recent_water: null,
  });

  const onImageChange = (e) => {
    e.preventDefault();
    const imgTarget = e.target.files[0];
    setImgFile(imgTarget);
    if (imgTarget) {
      const reader = new FileReader();
      reader.readAsDataURL(imgTarget);
      reader.onload = (e) => {
        setImgSrc(e.target.result);
      };
    } else {
      setImgSrc(null);
    }
  };

  const onChangeHandler = (e) => {
    setGardenInputs({
      ...gardenInputs,
      [e.target.id]: e.target.value,
    });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('inputs', gardenInputs);
    formData.append('files', imgFile);
    formData.append('enctype', 'multipart/form-data');
    // const URL = 'http://127.0.0.1:8000/api/mygardens/';
    // const configs = {
    //   'Content-Type': 'multipart/form-data',
    // };
    // axios.post(URL, formData, configs).then((res) => {
    //   console.log(res);
    // });
  };

  return (
    <Wrapper modalOpen={modalOpen}>
      <div className="close-modal" onClick={closeModal} />
      <div className="modal-div">
        <CloseIcon className="close-btn" onClick={closeModal} />
        <GardenForm onSubmit={onSubmitHandler}>
          <label htmlFor="plantname">식물 이름</label>
          <input type="text" id="plantname" onChange={onChangeHandler} />
          <label htmlFor="date_grow">키운 날짜</label>
          <input type="date" id="date_grow" onChange={onChangeHandler} />
          <label htmlFor="watering_schedule">물주기 주기</label>
          <input
            type="text"
            id="watering_schedule"
            onChange={onChangeHandler}
          />
          <label htmlFor="recent_water">최근 물 준 날짜</label>
          <input type="date" id="recent_water" onChange={onChangeHandler} />
          <label htmlFor="plant_img">식물 사진</label>
          <input
            type="file"
            id="plant_img"
            className="plant-img-input"
            accept="image/*"
            onChange={onImageChange}
          />
          <img src={imgSrc} alt="aabbb" className="plant-img" />
          <button>작성</button>
        </GardenForm>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: none;
  ${({ modalOpen }) =>
    modalOpen &&
    css`
      display: flex;
      align-items: center;
      animation: modal-bg-show 0.4s;
    `}
  position: fixed;
  z-index: 99;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.65);

  & .close-modal {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  & .modal-div {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    padding: 50px;
    left: 50%;
    transform: translateX(-50%);
    animation: modal-show 0.4s;
    background-color: #ffffff;
    box-shadow: 0px 4px 4px 5px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    @media (min-width: 1200px) {
      width: 850px;
      height: 800px;
    }
    @media (max-width: 1199px) {
      width: 850px;
      height: 800px;
    }
    & .close-btn {
      position: absolute;
      right: 30px;
      top: 30px;
      opacity: 0.5;
      &:hover {
        opacity: 1;
        cursor: pointer;
      }
    }
  }

  @keyframes modal-show {
    from {
      margin-top: -50px;
    }
    to {
      margin-top: 0;
    }
  }
  @keyframes modal-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const GardenForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  & label {
    margin-top: 16px;
    color: #787878;
  }
  & input {
    padding: 8px 0;
    border-width: 0 0 1px 0;
    &:focus {
      outline: none;
    }
  }
  & > div > label {
    margin-left: 6px;
  }
  & button {
    border: none;
    margin-top: 10px;
    background-color: ${({ theme }) => theme.themeColor[1]};
    height: 44px;
    color: #ffffff;
    border-radius: 8px;
  }
  & .plant-img {
    border: 2px dashed black;
    width: 300px;
    height: 300px;
  }
`;

export default GardenCreateModal;