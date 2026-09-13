import{a as e,c as t,s as n}from"./index-B8xiXFZz.js";import{n as r,r as i,t as a,w as o}from"./SiteChrome-D4cfubSq.js";import{t as s}from"./circle-check-DcacQvXj.js";import{t as c}from"./flask-conical-BFNKfYM7.js";var l=o(`circle-x`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`m15 9-6 6`,key:`1uzhvr`}],[`path`,{d:`m9 9 6 6`,key:`z0biqf`}]]),u=t(n(),1),d=e(),f=[{title:`Água + Areia`,desc:`Amostra turva coletada de rio. Os grãos sólidos não se dissolvem na água e tendem a se assentar no fundo com o tempo.`,type:`Mistura Heterogênea (Sólido + Líquido)`,correctMethod:`filtracao`,colors:{bottom:`#c2b280`,top:`#4ba3e3`},particleType:`sand`,explanation:`Correto! A FILTRAÇÃO retém os grãos de areia insolúveis no filtro de papel enquanto a água límpida passa como filtrado.`},{title:`Água + Óleo Vegetal`,desc:`Dois líquidos imiscíveis (não se misturam) que formam duas fases distintas e visíveis.`,type:`Mistura Heterogênea (Líquido + Líquido)`,correctMethod:`decantacao`,colors:{bottom:`#3a88c8`,top:`#e8c83e`},particleType:`none`,explanation:`Perfeito! A DECANTAÇÃO (com funil de bromo/decantação) permite escoar a água mais densa pela torneira inferior, restando o óleo.`},{title:`Areia + Limalha de Ferro`,desc:`Pó escuro com grãos minerais e partículas de ferro finamente trituradas misturadas solidamente.`,type:`Mistura Heterogênea (Sólido + Sólido)`,correctMethod:`magnetica`,colors:{bottom:`#d2b48c`,top:`transparent`},particleType:`iron`,explanation:`Excelente! A SEPARAÇÃO MAGNÉTICA atrai a limalha de ferro ferromagnética através do ímã, deixando a areia intocada.`},{title:`Água + Sal de Cozinha (Solução)`,desc:`Líquido totalmente transparente e homogêneo. O cloreto de sódio está completamente dissolvido.`,type:`Mistura Homogênea (Sólido dissolvido)`,correctMethod:`destilacao`,colors:{bottom:`#5fa8d3`,top:`transparent`},particleType:`none`,explanation:`Muito bem! A DESTILAÇÃO SIMPLES aquece o líquido: a água evapora (menor ponto de ebulição), condensa em outro tubo, deixando o sal para trás.`},{title:`Amostra de Sangue Fresco`,desc:`Suspensão coloidal contendo plasma líquido e células sanguíneas densas em suspensão quase indistinguíveis a olho nu.`,type:`Mistura Heterogênea (Coloide)`,correctMethod:`centrifugacao`,colors:{bottom:`#8a0303`,top:`#a80f0f`},particleType:`blood`,explanation:`Correto! A CENTRIFUGAÇÃO acelera o processo de sedimentação por força centrífuga, separando o plasma amarelado do sedimento celular vermelho.`}],p=[{id:`filtracao`,icon:`🧪`,label:`Filtração`},{id:`decantacao`,icon:`⏳`,label:`Decantação`},{id:`magnetica`,icon:`🧲`,label:`Separação Magnética`},{id:`destilacao`,icon:`🔥`,label:`Destilação Simples`},{id:`centrifugacao`,icon:`🌀`,label:`Centrifugação`}],m=`
  .chemistry-stage {
      height: 280px;
      background: radial-gradient(circle at center, #1b222c 0%, #0d1117 100%);
      border-radius: 8px;
      position: relative;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px dashed #30363d;
  }
  .chem-beaker {
      width: 140px;
      height: 180px;
      border: 3px solid rgba(255, 255, 255, 0.4);
      border-top: none;
      border-radius: 0 0 16px 16px;
      position: relative;
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(2px);
      overflow: hidden;
      display: flex;
      flex-direction: column-reverse;
  }
  .chem-liquid-layer {
      width: 100%;
      position: relative;
  }
  .chem-particles {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      pointer-events: none;
  }
  .chem-particle {
      position: absolute;
      border-radius: 50%;
  }
  .chem-magnet {
      width: 40px;
      height: 50px;
      border: 8px solid #ff4d4d;
      border-bottom: 8px solid silver;
      border-radius: 20px 20px 0 0;
      position: absolute;
      z-index: 10;
      transition: all 0.5s ease;
  }
  .chem-funnel {
      width: 0;
      height: 0;
      border-left: 50px solid transparent;
      border-right: 50px solid transparent;
      border-top: 60px solid rgba(255,255,255,0.3);
      position: absolute;
      top: 20px;
  }
  .chem-bunsen-burner {
      position: absolute;
      bottom: 10px;
      width: 60px;
      height: 20px;
      background: #555;
      border-radius: 5px;
  }
  .chem-flame {
      position: absolute;
      top: -25px;
      left: 20px;
      width: 20px;
      height: 25px;
      background: radial-gradient(circle, #ffeb3b, #ff5722);
      border-radius: 50% 50% 20% 20%;
      animation: chem-flicker 0.2s infinite alternate;
  }
  @keyframes chem-flicker {
      0% { transform: scale(1); opacity: 0.9; }
      100% { transform: scale(1.1) translateY(-2px); opacity: 1; }
  }
`;function h(){let[e,t]=(0,u.useState)(0),[n,r]=(0,u.useState)(0),[a,o]=(0,u.useState)(null),[c,h]=(0,u.useState)(!1),[g,_]=(0,u.useState)(null),[v,y]=(0,u.useState)(!1),[b,x]=(0,u.useState)([]),[S,C]=(0,u.useState)({height:`50%`,backgroundColor:``,transition:`all 1s ease`}),[w,T]=(0,u.useState)({height:`0%`,backgroundColor:``,transition:`all 1s ease`}),[E,D]=(0,u.useState)({top:`-70px`}),[O,k]=(0,u.useState)(`none`),[A,j]=(0,u.useState)(`none`),[M,N]=(0,u.useState)({transform:`none`,transition:`all 1s ease`}),P=e=>{let n=f[e];if(!n)return;t(e),o(null),h(!1),_(null),D({top:`-70px`}),k(`none`),j(`none`),N({transform:`none`,transition:`all 1s ease`}),C({height:`50%`,backgroundColor:n.colors.bottom,transition:`all 1s ease`}),n.colors.top===`transparent`?T({height:`0%`,backgroundColor:`transparent`,transition:`all 1s ease`}):T({height:`40%`,backgroundColor:n.colors.top,transition:`all 1s ease`});let r=[];if(n.particleType===`iron`||n.particleType===`sand`)for(let e=0;e<35;e++)r.push({id:e,size:Math.random()*4+3+`px`,left:Math.random()*120+10+`px`,top:Math.random()*60+110+`px`,bg:n.particleType===`iron`?`#2f3542`:`#8c7b4e`});x(r)};(0,u.useEffect)(()=>{P(0)},[]);let F=(e,t,n)=>{e===`magnetica`?(D({top:`40px`}),setTimeout(()=>{t&&x(e=>e.map(e=>({...e,top:`60px`,transition:`all 0.8s ease`}))),setTimeout(n,1200)},600)):e===`filtracao`?(k(`block`),setTimeout(()=>{t&&(T(e=>({...e,height:`0%`})),C(e=>({...e,height:`30%`}))),setTimeout(n,1200)},600)):e===`decantacao`?setTimeout(()=>{t&&C(e=>({...e,height:`10%`})),setTimeout(n,1200)},600):e===`destilacao`?(j(`block`),setTimeout(()=>{t&&(C(e=>({...e,height:`15%`})),T(e=>({...e,height:`0%`}))),setTimeout(()=>{j(`none`),n()},1200)},600)):e===`centrifugacao`?(N({transform:`rotate(2500deg)`,transition:`all 2.5s ease-in-out`}),setTimeout(()=>{t&&(T(e=>({...e,height:`35%`,backgroundColor:`#f1e05a`})),C(e=>({...e,height:`15%`,backgroundColor:`#da3633`}))),N({transform:`none`,transition:`all 0.5s ease`}),n()},2500)):setTimeout(n,1e3)},I=()=>{if(g!==null){e+1<f.length?P(e+1):y(!0);return}if(!a||c)return;h(!0);let t=f[e];if(!t)return;let n=a===t.correctMethod;F(a,n,()=>{n?(r(e=>e+20),_({success:!0,text:t.explanation})):_({success:!1,text:`Método Ineficaz! Essa técnica não explora as propriedades físicas corretas dos componentes dessa mistura.`}),h(!1)})};if(v)return(0,d.jsxs)(`div`,{className:`w-full bg-card rounded-xl border border-border p-8 text-center shadow-sm`,children:[(0,d.jsx)(`h2`,{className:`text-3xl font-bold mb-4`,children:`Laboratório Concluído!`}),(0,d.jsxs)(`div`,{className:`text-5xl font-black text-blue-500 mb-6`,children:[n,` `,(0,d.jsxs)(`span`,{className:`text-2xl text-muted-foreground font-normal`,children:[`/ `,f.length*20]})]}),(0,d.jsx)(`p`,{className:`text-lg text-muted-foreground mb-8`,children:n===f.length*20?`Perfeito! Você dominou a separação de misturas.`:`Bom trabalho! Continue estudando os processos de separação.`}),(0,d.jsx)(i,{onClick:()=>{y(!1),r(0),P(0)},size:`lg`,children:`Refazer Laboratório`})]});let L=f[e];return L?(0,d.jsxs)(`div`,{className:`w-full bg-card rounded-xl border border-border p-5 md:p-8 shadow-sm`,children:[(0,d.jsx)(`style`,{children:m}),(0,d.jsxs)(`div`,{className:`flex justify-between items-center mb-6`,children:[(0,d.jsxs)(`div`,{className:`text-sm font-semibold bg-secondary px-4 py-2 rounded-full`,children:[`Amostra: `,(0,d.jsx)(`span`,{className:`text-blue-500`,children:e+1}),` / `,f.length]}),(0,d.jsxs)(`div`,{className:`text-sm font-semibold bg-secondary px-4 py-2 rounded-full`,children:[`Pontos: `,(0,d.jsx)(`span`,{className:`text-yellow-500`,children:n})]})]}),(0,d.jsxs)(`div`,{className:`bg-secondary/50 p-4 rounded-lg border-l-4 border-blue-500 mb-6`,children:[(0,d.jsx)(`h2`,{className:`text-lg font-bold mb-1`,children:L.title}),(0,d.jsx)(`p`,{className:`text-sm text-muted-foreground mb-2`,children:L.desc}),(0,d.jsx)(`span`,{className:`inline-block px-2.5 py-1 text-xs rounded bg-blue-500/10 text-blue-500 font-medium`,children:L.type})]}),(0,d.jsxs)(`div`,{className:`chemistry-stage mb-6`,children:[(0,d.jsx)(`div`,{className:`chem-magnet`,style:E}),(0,d.jsx)(`div`,{className:`chem-funnel`,style:{display:O}}),(0,d.jsx)(`div`,{className:`chem-bunsen-burner`,style:{display:A},children:(0,d.jsx)(`div`,{className:`chem-flame`})}),(0,d.jsxs)(`div`,{className:`chem-beaker`,style:M,children:[(0,d.jsx)(`div`,{className:`chem-liquid-layer`,style:S}),(0,d.jsx)(`div`,{className:`chem-liquid-layer`,style:w}),(0,d.jsx)(`div`,{className:`chem-particles`,children:b.map(e=>(0,d.jsx)(`div`,{className:`chem-particle`,style:{width:e.size,height:e.size,left:e.left,top:e.top,backgroundColor:e.bg,transition:e.transition||`none`,transform:e.transform||`none`}},e.id))})]})]}),(0,d.jsxs)(`div`,{className:`mb-6`,children:[(0,d.jsx)(`h3`,{className:`text-base font-semibold mb-3`,children:`Escolha a Técnica Adequada:`}),(0,d.jsx)(`div`,{className:`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3`,children:p.map(e=>(0,d.jsxs)(`button`,{type:`button`,onClick:()=>o(e.id),disabled:c||g!==null,className:`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${a===e.id?`ring-2 ring-blue-500 bg-blue-500/10 border-blue-500`:`border-border bg-card hover:border-blue-500/50 hover:bg-secondary`} ${c||g!==null?`opacity-50 cursor-not-allowed`:`cursor-pointer`}`,children:[(0,d.jsx)(`span`,{className:`text-2xl mb-2`,children:e.icon}),(0,d.jsx)(`span`,{className:`text-xs font-medium text-center`,children:e.label})]},e.id))})]}),g&&(0,d.jsxs)(`div`,{className:`p-4 rounded-lg mb-6 flex items-start gap-3 border ${g.success?`bg-green-500/10 border-green-500/50 text-green-700 dark:text-green-400`:`bg-red-500/10 border-red-500/50 text-red-700 dark:text-red-400`}`,children:[g.success?(0,d.jsx)(s,{className:`w-5 h-5 mt-0.5 shrink-0`}):(0,d.jsx)(l,{className:`w-5 h-5 mt-0.5 shrink-0`}),(0,d.jsxs)(`div`,{children:[(0,d.jsx)(`strong`,{className:`block mb-1`,children:g.success?`Sucesso!`:`Método Ineficaz!`}),(0,d.jsx)(`span`,{className:`text-sm`,children:g.text})]})]}),(0,d.jsx)(`div`,{className:`flex justify-end`,children:(0,d.jsx)(i,{size:`lg`,onClick:I,disabled:!a&&g===null||c,className:g===null?`bg-green-600 hover:bg-green-700 text-white`:`bg-blue-600 hover:bg-blue-700 text-white`,children:c?`Processando...`:g===null?`Executar Separação`:e<f.length-1?`Próxima Amostra ➜`:`Finalizar Laboratório`})})]}):null}function g(){return(0,d.jsxs)(`div`,{className:`min-h-screen bg-background flex flex-col`,children:[(0,d.jsx)(r,{}),(0,d.jsx)(`main`,{className:`flex-1 pt-24 pb-12 px-4 md:px-8 flex flex-col items-center`,children:(0,d.jsxs)(`div`,{className:`w-full max-w-4xl flex flex-col`,children:[(0,d.jsxs)(`div`,{className:`mb-6 text-center`,children:[(0,d.jsxs)(`h1`,{className:`text-3xl font-bold text-foreground sm:text-4xl flex items-center justify-center gap-3`,children:[`Laboratório Químico `,(0,d.jsx)(c,{className:`text-blue-500 h-8 w-8`})]}),(0,d.jsx)(`p`,{className:`mt-2 text-lg text-muted-foreground`,children:`Desafio da Separação de Misturas: Escolha a técnica adequada para cada amostra.`})]}),(0,d.jsx)(h,{})]})}),(0,d.jsx)(a,{})]})}export{g as component};