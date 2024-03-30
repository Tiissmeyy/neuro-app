"use client"

import React, { useState } from "react";
import styles from "./page.module.css";
import subpages from "./data/subpages.json"
import Main_Page from "./components/main_page/main_page";
import Hamburger from "./components/hamburger/hambuger";
import Aside_Sec from "./components/aside_sec/aside_sec";
import Subpage from "./components/subpages/subpage";
import Banner from "./components/banner/banner";

export default function Home() {
    const [open_menu, set_open_menu] = useState(false)
    const [selected_content, set_selected_content] = useState(0)

    const selection_array = [
        <Main_Page key={0} />,
        <Subpage return_home={()=>set_selected_content(0)} content={subpages.psycho} />,
        <Subpage return_home={()=>set_selected_content(0)} content={subpages.emdr} />,    
        <Subpage return_home={()=>set_selected_content(0)} content={subpages.neuro} />,      
        <Subpage return_home={()=>set_selected_content(0)} content={subpages.cogni} />  
    ]

    const handle_click = ()=>{
        set_open_menu(prev=>!prev)
    }

    const handle_selection = (e) => {
        const value = parseInt(e.target.value, 10);
        set_selected_content(value);
        console.log(value)
    }

  return (
    <>
        <Aside_Sec open_nav={open_menu} />
        <main className={styles.main}>
            {selection_array[selected_content]}
            <Banner handle_selection={handle_selection} />
            <div className={`${styles.filter} ${open_menu ? "visible": "unvisible"}`}>
            </div> 
        </main>
        <div className={styles.menu_div} onClick={()=>handle_click()}>
            <div className={styles.burger_div} style={!open_menu ? {borderRadius: "6px"}: {borderRadius: "50%"}}>
               <Hamburger open={open_menu} />
            </div>
            <h2>MENU</h2>
        </div>
        
    </>  );
}


