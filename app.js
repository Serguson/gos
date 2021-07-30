const tabEl = document.getElementsByClassName("tab-el");
const tabElActive=document.getElementsByClassName("tab-el-active")
const tabLink=document.getElementsByClassName("tab-link")
for (const el of tabEl) {el.addEventListener("click", e=>{
  console.log("Kliknięto!");
})
}

