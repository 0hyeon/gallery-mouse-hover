"use client";
import React from "react";
import styles from "./style.module.css";
import Image from "next/image";
export default function Modal({ modal, projects }: any) {
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalSlider}>
        {projects.map((el: any, idx: number) => {
          const { src, color } = el;
          return (
            <div
              key={`modal_${idx}`}
              className={styles.modal}
              style={{ background: color }}
            >
              <Image
                src={`/images/${src}`}
                width={300}
                height={0}
                alt="image"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
