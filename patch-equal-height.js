(()=>{'use strict';const layout=document.querySelector('.asr-steps-123'),right=layout?.querySelector('.asr-steps-right'),left=layout?.querySelector('.asr-step1-panel'),step2=layout?.querySelector('.asr-step2-panel'),step3=layout?.querySelector('.asr-step3-panel');if(!layout||!right||!left||!step2||!step3){console.error('ASR equal-height: required cards missing');return}const style=document.createElement('style');style.textContent=`
@media(min-width:981px){
.asr-steps-123{align-items:stretch!important;grid-auto-rows:auto!important}
.asr-steps-123>.asr-step1-panel{height:100%!important;align-self:stretch!important}
.asr-steps-123>.asr-steps-right{height:100%!important;align-self:stretch!important;display:grid!important;grid-template-rows:minmax(0,1fr) minmax(0,1fr)!important;gap:20px!important;align-content:stretch!important}
.asr-steps-123>.asr-steps-right>.asr-step2-panel,.asr-steps-123>.asr-steps-right>.asr-step3-panel{height:100%!important;min-height:0!important;align-self:stretch!important}
}
@media(max-width:980px){.asr-steps-123>.asr-steps-right{height:auto!important;display:flex!important;flex-direction:column!important}.asr-steps-123>.asr-steps-right>.asr-step2-panel,.asr-steps-123>.asr-steps-right>.asr-step3-panel{height:auto!important}}
`;document.head.append(style);const check=()=>{if(!matchMedia('(min-width:981px)').matches)return;const l=left.getBoundingClientRect(),r=right.getBoundingClientRect(),s=step3.getBoundingClientRect();console.info('ASR column bottom ali¶»§q«^