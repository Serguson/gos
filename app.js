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
const companions = document.getElementById("intimacy-companions");
const amulet = document.getElementById("intimacy-amulet");
const energyOrbs = document.getElementById("intimacy-energy-orbs");
const fortune = document.getElementById("intimacy-fortune");
const silverNecklace=document.getElementById("silver-necklace");
const vip=document.getElementById("intimacy-vip");

const intimacyInputs=document.getElementsByClassName("intimacy-input")

const intimacyButton=document.getElementById("intimacy-button")
let result = 0

for (const el of intimacyInputs) {
  el.addEventListener("input", e=>{
    el.setAttribute("value", `${el.value}`)})
}
intimacyButton.addEventListener("click", e=>{
  result = Number(intimacyChest.value)+Number(intimacyPack.value);
  console.log(result);})

//Calculate Charm

const charmChest=document.getElementById("charm-chest")
const charmPack=document.getElementById("charm-pack")
const silverHairpin=document.getElementById("silver-hairpin")
const goldHairpin=document.getElementById("gold-hairpin")
const diamondHairpin=document.getElementById("diamond-hairpin")
const hairpinChest=document.getElementById("hairpin-chest")
const jadeBrooch=document.getElementById("jade-brooch")
const gemstoneBrooch=document.getElementById("gemstone-brooch")
const diamondBrooch=document.getElementById("diamond-brooch")
const silverEarrings=document.getElementById("silver-earrings")
const goldEarrings=document.getElementById("gold-earrings")
const charmCompanions=document.getElementById("charm-companions")

const charmInputs=document.getElementsByClassName("charm-input")
const charmButton=document.getElementById("charm-button")

for (const el of charmInputs) {
  el.addEventListener ("input", e=>{
    el.setAttribute("value", `${el.value}`)})
}
