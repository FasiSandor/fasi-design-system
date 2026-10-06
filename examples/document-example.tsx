"use client";

import {useState} from "react";
import {
  DocumentTemplate,
  DocumentTable,
  PrintControls,
  type PrintMode,
} from "../src/index";

export default function Example(){
  const [mode,setMode]=useState<PrintMode>("branded");
  return <main style={{padding:24,background:"#F2F7FB"}}>
    <PrintControls mode={mode} onModeChange={setMode}/>
    <DocumentTemplate
      mode={mode}
      title="HAVI NYERSANYAGRENDELÉS"
      subtitle="Havi rendelési összesítő"
      meta={[
        {label:"Tanév",value:"2026/27"},
        {label:"Hónap",value:"Október"},
        {label:"Készült",value:"2026.10.06"},
      ]}
      footer={<span>FS Document System</span>}
    >
      <DocumentTable>
        <thead><tr><th>Nyersanyag</th><th>Terv</th><th>Maradt</th><th>Végleges</th><th>Egység</th></tr></thead>
        <tbody>
          <tr><td>Búzaliszt</td><td>120</td><td>12</td><td>108</td><td>kg</td></tr>
          <tr><td>Kristálycukor</td><td>35</td><td>5</td><td>30</td><td>kg</td></tr>
        </tbody>
      </DocumentTable>
    </DocumentTemplate>
  </main>;
}
