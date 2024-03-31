"use client"

import React, { useEffect, useRef, useState } from "react";
import subpages from "../../data/subpages.json"
import Subpage from "../../components/subpages/subpage";

export default function NEURO({set_selected_content}) {
  return (
    <>   
        <Subpage return_home={()=>set_selected_content(0)} content={subpages.neuro} />
    </>  );
}