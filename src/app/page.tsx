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
      <Modal modal={modal} projects={projects} />
    </main>
  );
}
