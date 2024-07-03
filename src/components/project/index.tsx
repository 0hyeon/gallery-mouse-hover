import React from "react";
import styles from "./style.module.css";
export default function Project({
  index,
  title,
  setModal,
}: {
  index: number;
  title: string;
  setModal: React.Dispatch<
    React.SetStateAction<{ active: boolean; index: number }>
  >;
}) {
  //Home 컴포넌트 내부에 있는 Project 컴포넌트들이 렌더링되고, 
  //각각의 Project 컴포넌트는 setModal을 통해 modal 상태를 변경할 수 있는 기능
  return (
    <div
      className={styles.project}
      onMouseOver={() => {
        setModal({ active: true, index: index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index: index });
      }}
    >
      <h2>{title}</h2>
      <p>Design & Development</p>
    </div>
  );
}
