const icon = document.getElementById("icon");
const input = document.getElementById("input");
const box=document.querySelector(".box")
icon.onclick = function () {
    input.click();
}

input.onchange = function (ev) {
    let files = ev.target.files;
    addDatas(files)
}

box.ondragover=function(e){
    e.preventDefault();
}
box.ondrop=function(e){
    e.preventDefault();
    let files = e.dataTransfer.files;
    addDatas(files)
}
function addDatas(files){
    for (const file of files) {
        let fileReader = new FileReader();
        fileReader.onload = function (ev) {

        let tr=document.createElement("tr");

        let imgTd=document.createElement("td");
        let img=document.createElement("img");
        img.setAttribute("src",ev.target.result);
        img.style.width="150px";
        img.style.height="150px";

        imgTd.append(img)


        let name=document.createElement("td");
        name.innerText=file.name;

        let size=document.createElement("td");
        size.innerText=file.size;

        let remove=document.createElement("td");
        remove.innerHTML='<i class="fa-solid fa-trash"></i>';

        tr.append(imgTd,name,size,remove)
        document.getElementById("body").append(tr)
        
        }
        fileReader.readAsDataURL(file);
    }
}





// let id;
// dragTest.ondragstart = function (e) {
//     id = this.id //burdaki this dragTest di
// }
// dropTest.ondrop = function () {
//     let dragElement = document.getElementById(id);
//     this.append(dragElement)//burdaki this dropTest di
// }
// // dragTest.ondragend=function(){
// //     console.log("sagol");
// // }

// // dragTest.ondrag=()=>{
// //     console.log("gozle");
// // }

// // dropTest.ondragenter=()=>{
// //     console.log("girdi");
// // }

// // dropTest.ondragleave=()=>{
// //     console.log("chixdi");
// // }

// dropTest.ondragover = (e) => {
//     e.preventDefault();
//     console.log("icherdeyem");
// }
