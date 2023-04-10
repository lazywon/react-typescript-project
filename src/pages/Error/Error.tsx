import React from 'react';
import styles from './Error.module.css';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <div className={styles.error_w}>
      <div className={styles.error}>
        <ul>
          <li>서비스 이용에 불편을 드려 죄송합니다.</li>
          <li>
            존재하지 않는 페이지거나
            <br />
            오류로 인하여 현재 페이지를 볼 수 없습니다.
          </li>
          <li>
            <button type="button" id="ID_BTN_BACK" onClick={goBack}>
              돌아가기
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ErrorPage;
