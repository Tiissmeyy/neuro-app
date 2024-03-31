import Button from "../button/button"
import styles from "./subpage.module.css"
import { satis, roboto } from "@/app/fonts"

const Subpage = ({content}) => {
    let content_jsx = <div className={`${styles.subpage} ${roboto.className}`}>
        <h1 className={satis.className}>{content.title}</h1>
        <p>{content.description}</p>
        <h2 className={satis.className}>Pour qui ?</h2>
        {content.who.map((e,i)=>{
            return <p key={i} className={styles.text}>{e}</p>
        })}
        <h2 className={satis.className}>Méthode</h2>
        {content.methode.map((e,i)=>{
            return <p key={i} className={styles.text}>{e}</p>
        })}
        <h2 className={satis.className}>Objectifs</h2>
        {content.goal.map((e,i)=>{
            return <p key={i} className={styles.text}>{e}</p>
        })}
        <Button link={true} href={"/"}>
            <p>Retour Acceuil</p>
        </Button>
    </div>
    

    return (
        content_jsx
    )
}

export default Subpage