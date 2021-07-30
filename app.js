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

//Calculate Intimacy
const intimacyChest = document.getElementById("intimacy-chest");
const intimacyPack=document.getElementById("intimacy-pack");
const agateBracelet=document.getElementById("agate-bracelet");
const emeraldBracelet=document.getElementById("emerald-bracelet");
const braceletChest=document.getElementById("bracelet-chest");
const lazuriteNecklace=document.getElementById("lazurite-necklace");
const carmelianNecklace=document.getElementById("carmelian-necklace");
const blackDiamondNecklace=document.getElementById("black-diamond-necklace");
const agateRing = document.getElementById("agate-ring");
const emeraldRing = document.getElementById("emerald-ring");
const companions = document.getElementById("companions");
const amulet = document.getElementById("amulet");
const energyOrbs = document.getElementById("energy-orbs");
const fortune = document.getElementById("fortune");
const silverNecklace=document.getElementById("silver-necklace");
const vip=document.getElementById("vip");

const boxes=document.getElementsByClassName("box")

for (const el of boxes) {
  boxes.closest("input").addEventListener("input", e=>{
    console.log(input.value)})
}

const result = Number(intimacyChest.value)+Number(intimacyPack.value)


