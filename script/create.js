let tambahbahan=()=>{const e=document.getElementsByClassName("tambahbahan")[0],a=e.cloneNode(!0);a.classList.remove("hidden"),document.getElementsByClassName("bahan")[0].appendChild(a)},kurangbahan=()=>{if(!(document.getElementsByClassName("bahan")[0].childElementCount<=3)){let e=document.getElementsByClassName("bahan")[0];e.removeChild(e.lastElementChild)}},tambahlangkah=()=>{const e=document.getElementsByClassName("tambahlangkah")[0],a=e.cloneNode(!0);a.classList.remove("hidden"),document.getElementsByClassName("langkah")[0].appendChild(a)},kuranglangkah=()=>{if(!(document.getElementsByClassName("langkah")[0].childElementCount<=3)){let e=document.getElementsByClassName("langkah")[0];e.removeChild(e.lastElementChild)}};