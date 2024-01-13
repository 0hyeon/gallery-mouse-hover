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
