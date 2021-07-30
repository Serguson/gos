//Switching Tabs
const tabEl = document.getElementsByClassName("tab-el");
const tabElActive=document.getElementsByClassName("tab-el-active");
const tabContent=document.getElementsByClassName("tab-content");
const tabContentActive = document.getElementsByClassName("tab-content-active");
const intimacy = document.getElementById("intimacy");
const charm = document.getElementById("charm");
const talent=document.getElementById("talent");
for (const el of tabEl) {el.addEventListener("click", e=>{
  console.log("Kliknięto!");
  for (const el of tabElActive) {el.classList.remove("tab-el-active")};
  el.classList.add("tab-el-active");
  for (const el of tabContentActive) {el.classList.remove("tab-content-active")};
  if (el.firstElementChild.getAttribute("href")==="#intimacy"){intimacy.classList.add("tab-content-active")}
  else if (el.firstElementChild.getAttribute("href")==="#charm"){charm.classList.add("tab-content-active")}
  else if (el.firstElementChild.getAttribute("href")==="#talent"){talent.classList.add("tab-content-active")}
})
}

