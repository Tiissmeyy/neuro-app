import Image from "next/image";
import styles from "./styles.module.css";
import Cards_Container from "../cards_container/cards_container";
import { satis } from "@/app/fonts";
import Button from "../button/button";

const Main_Page =() => {
  return (
    <section className={styles.main_page}>
            {/* Logo du site  */}
            <Image className={styles.main_logo} src={"/img/neuro_logo.png"} width={100} height={100} alt="logo du site Neuro" />

            {/* Titre du site  */}
            <h1 className={styles.main_title}>Karine Duval <span>Cabinet de Psychologie et de Neuropsychologie à Chambéry</span></h1>
            <p className="mb-var">_____</p>

            {/* description du site  */}
            <div className={`${styles.main_describe} ${satis.className}`}>
                <p>Le Cabinet de Psychologie et de Neuropsychologie vous reçoit à Chambéry ​dans un cadre de discrétion et de profond respect.</p>
                <p>Les informations partagées lors des consultations restent confidentielles.</p>
            </div>

            <Button actions={[()=>console.log("banana"), ()=>console.log("split")]} text={"Prendre rendez vous"}>
                <p>Prendre RDV</p>
            </Button>

            <Cards_Container />

    </section>  );
}


export default Main_Page