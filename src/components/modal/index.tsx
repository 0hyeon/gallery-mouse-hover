"use client";
import React, { useEffect, useRef } from "react";
import styles from "./style.module.css";
import Image from "next/image";
import { motion } from "framer-motion";
import gsap from "gsap";

// 애니메이션설정
const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  open: {
    scale: 1,
    x: "-50%", //모달의위치 정중앙
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  close: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};
export default function Modal({ modal, projects }: any) {
  const { active, index } = modal;
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  const container = useRef(null);
  useEffect(() => {
    const moveContainerX = gsap.quickTo(container.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const moveContainerY = gsap.quickTo(container.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    const moveCursorX = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    const moveCursorY = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
    const moveCursorLabelX = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    const moveCursorLabelY = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    });
    // 마우스가 이동할때마다 실행됨 window.addEventListener("mousemove")
    // 이유는 Project 컴포넌트에서 modal 상태가 변경되면,
    // Home 컴포넌트와 그 하위의 Modal 컴포넌트도 새로 렌더링되어
    // 해당 useEffect가 다시 실행될 수 있습니다.
    window.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e;
      // 네모박스
      moveContainerX(clientX);
      moveContainerY(clientY);
      //동그라미
      moveCursorX(clientX);
      moveCursorY(clientY);
      //동그라미안에 view text
      moveCursorLabelX(clientX);
      moveCursorLabelY(clientY);
    });
  }, []);
  return (
    <>
      {/* 컨테이너 */}
      <motion.div
        ref={container}
        variants={scaleAnimation}
        initial={"initial"}
        animate={active ? "open" : "close"}
        className={styles.modalContainer}
      >
        <div style={{ top: index * -100 + "%" }} className={styles.modalSlider}>
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
      </motion.div>
      {/* 커서 */}
      <motion.div
        variants={scaleAnimation}
        initial={"initial"}
        animate={active ? "open" : "close"}
        ref={cursor}
        className={styles.cursor}
      ></motion.div>
      {/* 커서라벨 */}
      <motion.div
        variants={scaleAnimation}
        initial={"initial"}
        animate={active ? "open" : "close"}
        ref={cursorLabel}
        className={styles.cursorLabel}
      >
        View
      </motion.div>
    </>
  );
}
