import React from 'react';
import {Background, LoadingText} from './loading.style';
import Spinner from './Spinner.gif';

export default () => {
  return (
    <Background>
      <LoadingText>사용자에 대한 추천 알고리즘이 작동중 입니다!! 잠시만 기다려 주세요. :)</LoadingText>
      <img src={Spinner} alt="로딩중" width="5%" />
    </Background>
  );
};