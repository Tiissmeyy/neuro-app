"use client"

import React, { useEffect, useRef, useState } from "react";
import subpages from "../../data/subpages.json"
import Subpage from "../../components/subpages/subpage";

export default function EMDR({ set_selected_content}) {

  return (
    <>        
        <Subpage content={subpages.emdr} />
    </>  );
}