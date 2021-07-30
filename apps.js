const tabEl = document.getElementByClassName("tab-el");
const tabElActive=document.getElementByClassName("tab-el-active")
const tabLink=document.getElementByClassName("tab-link")
for (const el of tabEl) {el.addEventListener("click", e=>{
  console.log("Kliknięto!");}

