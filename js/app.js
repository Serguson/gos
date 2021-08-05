//Switching Tabs
const tabEl = document.getElementsByClassName("tab-el");
const tabElActive=document.getElementsByClassName("tab-el-active");
const tabContent=document.getElementsByClassName("tab-content");
const tabContentActive = document.getElementsByClassName("tab-content-active");
const intimacy = document.getElementById("intimacy");
const charm = document.getElementById("charm");
const talent=document.getElementById("talent");
for (const el of tabEl) {el.addEventListener("click", e=>{
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
const intimacyCompanions = document.getElementById("intimacy-companions");
const amulet = document.getElementById("intimacy-amulet");
const energyOrbs = document.getElementById("intimacy-energy-orbs");
const fortune = document.getElementById("intimacy-fortune");
const silverNecklace=document.getElementById("silver-necklace");
const vip=document.getElementById("intimacy-vip");

const intimacyInputs=document.getElementsByClassName("intimacy-input")
const intimacyButton=document.getElementById("intimacy-button")

for (const el of intimacyInputs) {
  el.addEventListener ("input", e=>{
    el.setAttribute("value", `${el.value}`)})
}

function countIntimacyChest (value) {
    const intimacyChestCounted = {
        minValue: value*2*intimacyCompanions.value,
        maxValue: value*2*intimacyCompanions.value,
        averageValue: value*2*intimacyCompanions.value,}
    return intimacyChestCounted;
}

function countIntimacyPack (value) {
    const intimacyPackCounted = {
        minValue: value*10,
        maxValue: value*50,
        averageValue: value*30,
    }
    return intimacyPackCounted
}
function countAgateBracelet (value) {
    const agateBraceletCounted = {
        minValue: value*2,
        maxValue: value*5,
        averageValue: Math.round(value*3.5)
    }
    return agateBraceletCounted;
}
function countEmeraldBracelet (value) {
    const emeraldBraceletCounted ={
        minValue: value*6,
        maxValue: value*10,
        averageValue: value*8,
    }
    return emeraldBraceletCounted
}

function countBraceletChest (value) {
    const braceletChestCounted = {
        minValue: value*intimacyCompanions.value,
        maxValue: value*intimacyCompanions.value*5,
        averageValue: value*intimacyCompanions.value*3,
    } 
    return braceletChestCounted;
}

function countLazuriteNecklace (value) {
    const lazuriteNecklaceCounted = {
        minValue: value*5,
        maxValue: value*5,
        averageValue: value*5,
    }
    return lazuriteNecklaceCounted;
}

function countCarmelianNecklace (value) {
    const carmelianNecklaceCounted = {
        minValue: value*10,
        maxValue: value*10,
        averageValue: value*10,
    }
    return carmelianNecklaceCounted;
}

function countBlackDiamondNecklace (value) {
    const blackDiamondNecklaceCounted = {
        minValue: Number(value)*20,
        maxValue: Number(value)*20,
        averageValue: Number(value)*20,
    }
    return blackDiamondNecklaceCounted;
}

function countAgateRing (value) {
    const agateRingCounted = {
        minValue: Number(value),
        maxValue: Number(value),
        averageValue: Number(value),
    }
    return agateRingCounted;
}

function countEmeraldRing (value) {
    const emeraldRingCounted = {
        minValue: value*2,
        maxValue: value*2,
        averageValue: value*2,
    }
    return emeraldRingCounted;
}

for (const el of intimacyInputs) {
  el.addEventListener("input", e=>{
    el.setAttribute("value", `${el.value}`)
    })
}

function countMasquarade (orbs, fortune, vip, amulets, companions) {
    const singleOrb = vip+3;
    const maxMasquarade = orbs*singleOrb;
    const maxFortune = Number(fortune)+Number(amulets)*10;
    const maxFortuneValue = Math.floor(maxFortune/2);
    const maxProbability = Number(companions)/(Number(companions)+14);
    const minValue = 0;
    let maxValue =0;
    let averageValue = 0;   
    if (maxMasquarade>=maxFortuneValue && maxFortuneValue>49) {
      maxValue+=maxFortuneValue;
      averageValue+=(maxFortuneValue-49)*maxProbability+49*maxProbability*0.5;
      console.log("case 1")
    }
    else if (maxMasquarade>=maxFortuneValue && maxFortuneValue<=49) {
      maxValue+=maxFortuneValue;
      averageValue=maxFortuneValue*maxProbability*0.5;
      console.log ("case 2")
    }
    else if (maxMasquarade<maxFortuneValue && maxFortuneValue>=maxMasquarade+49){
      maxValue+=maxMasquarade;
      averageValue+=maxMasquarade*maxProbability;
      console.log("case 3")
    }
    else if (maxMasquarade<maxFortuneValue && maxFortuneValue<=49){
      const usedFortuneFactor=(maxFortune-maxMasquarade+1)/100
      maxValue+=maxMasquarade;
      averageValue+=maxMasquarade*maxProbability*usedFortuneFactor;
      console.log ("case 4")
    }
    else if (maxMasquarade<maxFortuneValue && maxFortuneValue>49 && maxFortuneValue<maxMasquarade+49){
      const usedFullFortune = maxFortuneValue-49;
      const restMasquarade = maxMasquarade-usedFullFortune
      const usedFortuneFactor = (maxFortune-restMasquarade+1)/100
      maxValue+=maxMasquarade;
      averageValue+=usedFullFortune*maxProbability+restMasquarade*maxProbability*usedFortuneFactor;
      console.log ("case 5")
    }
    const object={
      minValue: minValue,
      maxValue: maxValue,
      averageValue: Math.round(averageValue),
    }
    return object
  }

function countTotal (table) {
  let minValueTotal=0;
  let maxValueTotal=0;
  let averageValueTotal=0;
  const [minValue, maxValue, averageValue] = table;
  table.forEach (el=> {
    minValueTotal+=el.minValue;
    maxValueTotal+=el.maxValue;
    averageValueTotal+=el.averageValue})
  const totalValue={
    minValue: minValueTotal,
    maxValue: maxValueTotal,
    averageValue: averageValueTotal,}
  return totalValue}

intimacyButton.addEventListener("click", e=>{
  let resultTable = []
  let valuesTable=[]
  for (const el of intimacyInputs) {
    valuesTable.push(el.value)
    }
  resultTable.push(countIntimacyChest(valuesTable[0]), countIntimacyPack(valuesTable[1]), countAgateBracelet(valuesTable[2]), countEmeraldBracelet(valuesTable[3]), countBraceletChest(valuesTable[4]), countLazuriteNecklace(valuesTable[5]), countCarmelianNecklace(valuesTable[6]), countBlackDiamondNecklace(valuesTable[7]), countAgateRing(valuesTable[8]), countEmeraldRing(valuesTable[9]), countMasquarade(valuesTable[12],valuesTable[13], valuesTable[15], valuesTable[11], valuesTable[10]));
  
  countTotal(resultTable);
  console.log (countTotal(resultTable))
})
  
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


function countCharmChest (value) {
  const charmChestValue = {
    minValue: Number(value)*Number(charmCompanions)*5,
    maxValue: Number(value)*Number(charmCompanions)*5,
    averageValue: Number(value)*Number(charmCompanions)*5,}
  return charmChestValue}

function countCharmPack (value) {
  const charmPackValue = {
    minValue: Number(value)*Number(charmCompanions)*10,
    maxValue: Number(value)*Number(charmCompanions)*50,
    averageValue: Number(value)*Number(charmCompanions)*30,}
  return charmPackValue}

function countSilverHairpin (value) {
  const silverHairpinValue = {
    minValue: value*2,
    maxValue: value*5,
    averageValue: Math.round(value*3.5),}
  return silverHairpinValue}

function countGoldHairpin (value) {
  const goldHairpinValue = {
    minValue: value*6,
    maxValue: value*10,
    averageValue: value*8,}
  return goldHairpinValue}

function countDiamondHairpin (value) {
  const diamondHairpinValue = {
    minValue: value*11,
    maxValue: value*20,
    averageValue: Math.round(value*15.5),}
  return diamondHairpinValue}

function countHairpinChest (value) {
  const hairpinChestValue = {
    minValue: Number(value)*Number(charmCompanions)*5,
    maxValue: value*10,
    averageValue: Math.round(value*7.5),}
  return hairpinChestValue}

function countJadeBrooch (value) {
  const jadeBroochValue = {
    minValue: value*5,
    maxValue: value*5,
    averageValue: value*5,}
  return jadeBroochValue}


function countGemstoneBrooch (value) {
  const gemstoneBroochValue = {
    minValue: value*10,
    maxValue: value*10,
    averageValue: value*10,}
  return gemstoneBroochValue}


function countDiamondBrooch (value) {
  const diamondBroochValue = {
    minValue: value*20,
    maxValue: value*20,
    averageValue: value*20,}
  return diamondBroochValue}

function countSilverEarrings (value) {
  const silverEarringsValue = {
    minValue: Number(value),
    maxValue: Number(value),
    averageValue: Number(value),}
  return silverEarringsValue}

function countGoldEarrings (value) {
  const goldEarringsValue = {
    minValue: value*2,
    maxValue: value*2,
    averageValue: value*2,}
  return goldEarringsValue}

charmButton.addEventListener("click", e=>{
  let resultTable = []
  let valuesTable=[]
  for (const el of charmInputs) {
    valuesTable.push(el.value)
    }
  console.log(valuesTable)
  resultTable.push(countCharmChest(valuesTable[0]), countCharmPack(valuesTable[1]), countSilverHairpin(valuesTable[2]), countGoldHairpin(valuesTable[3]), countDiamondHairpin(valuesTable[4]), countHairpinChest(valuesTable[5]), countJadeBrooch(valuesTable[6]), countGemstoneBrooch(valuesTable[7]), countDiamondBrooch(valuesTable[8]), countSilverEarrings(valuesTable[9]), countGoldEarrings(valuesTable[10]));
  countTotal(resultTable);
  console.log(resultTable)
  console.log (countTotal(resultTable))
})
