"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import Project from "@/components/project";
import Modal from "@/components/modal";
interface ProjectData {
  title: string;
  src: string;
  color: string;
}

export default function Home() {
  const projects: ProjectData[] = [
    {
      title: "C2 Montreal",
      src: "c2montreal.png",
      color: "#000000",
    },
    {
      title: "Office Studio",
      src: "officestudio.png",
      color: "#8C8C8C",
    },
    {
      title: "Locomotive",
      src: "locomotive.png",
      color: "#EFE8D3",
    },
    {
      title: "Silencio",
      src: "silencio.png",
      color: "#706D63",
    },
  ];
  const [modal, setModal] = useState({ active: false, index: 0 });
  return (
    <main className={styles.main}>
      {/* Project 컴포넌트들이 렌더링되고, 각각의 Project 컴포넌트는 setModal을 통해 modal 상태를 변경  */}
      {/* 컴포넌트 위로 올리거나 떠날 때마다 setModal이 호출되어 modal 상태 변경 */}
      <div className={styles.body}>
        {projects.map((el, idx) => {
          return (
            <Project
              key={idx}
              index={idx}
              title={el.title}
              setModal={setModal}
            />
          );
        })}
      </div>
      {/* Home 컴포넌트의 리렌더링을 유발 */}
      {/* Modal 컴포넌트 내 useEffect */}
      <Modal modal={modal} projects={projects} />
    </main>
  );
}
