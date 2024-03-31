"use client"

import React, { useEffect, useRef, useState } from "react";
import subpages from "./data/subpages.json"
import Main_Page from "./components/main_page/main_page";
import Subpage from "./components/subpages/subpage";

export default function Home({selected_content, set_selected_content}) {

    const selection_array = [
        <Subpage return_home={()=>set_selected_content(0)} content={subpages.psycho} />,
        <Subpage return_home={()=>set_selected_content(0)} content={subpages.emdr} />,    
        <Subpage return_home={()=>set_selected_content(0)} content={subpages.neuro} />,      
        <Subpage return_home={()=>set_selected_content(0)} content={subpages.cogni} />  
    ]


  return (
    <>        
        <Main_Page key={0} />
    </>  );
}


