import React from "react";

export type PrintMode = "branded" | "school";

export const fsTokens = {
  color: {
    navy: "#081B4B",
    navyDeep: "#050B2E",
    blue: "#0877FF",
    blueLight: "#2A9CFF",
    cyan: "#22D3EE",
    green: "#16C66A",
    orange: "#FF8A00",
    red: "#EF4444",
    ink: "#10243B",
    muted: "#71859A",
    border: "#CAD8E5",
    paper: "#FFFFFF",
    canvas: "#F2F7FB",
  },
  radius: { sm: 10, md: 14, lg: 18, xl: 22 },
} as const;

export function FSMark({size=40,className=""}:{size?:number;className?:string}) {
  return <svg className={className} width={size} height={size} viewBox="0 0 64 64" aria-label="FS">
    <defs>
      <linearGradient id="fsMarkBg" x1="0" y1="0" x2="1" y2="1">
        <stop stopColor="#0B2A77"/>
        <stop offset=".55" stopColor="#0877FF"/>
        <stop offset="1" stopColor="#22D3EE"/>
      </linearGradient>
    </defs>
    <rect x="3" y="3" width="58" height="58" rx="16" fill="#06133E" stroke="url(#fsMarkBg)" strokeWidth="4"/>
    <path d="M16 17h27v8H25v8h15v8H25v14h-9V17Z" fill="white"/>
    <path d="M35 34h13v7h-9c-2.5 0-3.5.9-3.5 2.4S36.7 46 39 46h10v8H38c-7 0-11.5-3.3-11.5-9.3 0-6.2 4.1-10.7 8.5-10.7Z" fill="#22D3EE"/>
  </svg>;
}

export function FSBrand({subtitle="digitális rendszerek",compact=false}:{subtitle?:string;compact?:boolean}) {
  return <div className={"fs-brand "+(compact?"fs-brand--compact":"")}>
    <FSMark size={compact?34:42}/>
    <div><strong>FÁSI SÁNDOR</strong><span>{subtitle}</span></div>
  </div>;
}

export function GlossyCard({children,className=""}:{children:React.ReactNode;className?:string}) {
  return <section className={"fs-card "+className}>{children}</section>;
}

export function GlossyButton({
  children,tone="blue",type="button",onClick,className="",disabled=false
}:{
  children:React.ReactNode;
  tone?:"blue"|"green"|"orange"|"red"|"violet"|"navy";
  type?:"button"|"submit"|"reset";
  onClick?:()=>void;
  className?:string;
  disabled?:boolean;
}) {
  return <button type={type} onClick={onClick} disabled={disabled} className={"fs-button fs-button--"+tone+" "+className}>{children}</button>;
}

export function AppHeader({
  title,subtitle,back,actions
}:{
  title:string;subtitle?:string;back?:React.ReactNode;actions?:React.ReactNode
}) {
  return <header className="fs-app-header">
    <div className="fs-app-header__left">{back}<div><h1>{title}</h1>{subtitle&&<p>{subtitle}</p>}</div></div>
    {actions&&<div className="fs-app-header__actions">{actions}</div>}
  </header>;
}

export function PrintControls({
  mode,onModeChange,onPrint,onPdf
}:{
  mode:PrintMode;
  onModeChange:(mode:PrintMode)=>void;
  onPrint?:()=>void;
  onPdf?:()=>void;
}) {
  return <div className="fs-print-controls fs-no-print">
    <div className="fs-segmented">
      <button className={mode==="branded"?"active":""} onClick={()=>onModeChange("branded")}>Fejléccel</button>
      <button className={mode==="school"?"active":""} onClick={()=>onModeChange("school")}>Fejléc nélkül</button>
    </div>
    <div className="fs-print-actions">
      {onPdf&&<GlossyButton tone="green" onClick={onPdf}>PDF mentése</GlossyButton>}
      <GlossyButton tone="orange" onClick={onPrint||(()=>window.print())}>Nyomtatás</GlossyButton>
    </div>
  </div>;
}

export function DocumentTemplate({
  mode="branded",
  title,
  subtitle,
  meta=[],
  children,
  footer,
}:{
  mode?:PrintMode;
  title:string;
  subtitle?:string;
  meta?:Array<{label:string;value:string}>;
  children:React.ReactNode;
  footer?:React.ReactNode;
}) {
  return <article className={"fs-document fs-document--"+mode}>
    {mode==="branded"&&<div className="fs-document__brand"><FSBrand/></div>}
    <div className="fs-document__title"><h1>{title}</h1>{subtitle&&<p>{subtitle}</p>}</div>
    {meta.length>0&&<div className="fs-document__meta">{meta.map((m,i)=><div key={i}><span>{m.label}</span><strong>{m.value}</strong></div>)}</div>}
    <div className="fs-document__content">{children}</div>
    {footer&&<footer className="fs-document__footer">{footer}</footer>}
  </article>;
}

export function DocumentTable({children}:{children:React.ReactNode}) {
  return <div className="fs-table-wrap"><table className="fs-document-table">{children}</table></div>;
}
