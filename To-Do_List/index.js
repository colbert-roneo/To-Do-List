// function add(){
//     let text=document.getElementById("text").value
//     if(text==""){
//         alert("Please Enter Text")
//     }
//     else{
//         let ul=document.getElementById("ul")
//         let li=document.createElement("li")
//         li.className="list-group-item list-group-item-action list-group-item-dark d-inline-block"
//         li.innerHTML=text
//         let deleteBtn=document.createElement("button")
//         deleteBtn.className="btn btn-outline-danger"
//         deleteBtn.type="button"
//         deleteBtn.id="button-addon2"
//         deleteBtn.innerHTML="Remove"
//         li.appendChild(deleteBtn)
//         ul.appendChild(li)
//         document.getElementById("text").value=""
//         deleteBtn.onclick = function() {
//             li.remove();
//         };
//     }

// }

let deleteAll;
addEventListener("keydown",(e)=>{
    if(e.key=="Enter"){
        add()
    }
})

function add(){
    let text=document.getElementById("text").value
    if(text==""){
        alert("Please Enter Text")
    }
    else{
        let ul=document.getElementById("ul")
        let li=document.createElement("li")
        li.className="list-group-item list-group-item-action list-group-item-dark d-inline-block"
        li.innerHTML=text
        let deleteBtn=document.createElement("button")
        deleteBtn.className="btn btn-outline-danger"
        deleteBtn.type="button"
        deleteBtn.id="button-addon2"
        deleteBtn.innerHTML="Remove"
        li.appendChild(deleteBtn)
        ul.appendChild(li)
        document.getElementById("text").value=""
        deleteBtn.onclick = function() {
            li.remove();
        };
        if (!deleteAll) {
            deleteAll=document.createElement("button")
            deleteAll.className="btn btn-outline-danger"
            deleteAll.type="button"
            deleteAll.id="button-addon3"
            deleteAll.innerHTML="Remove All"
            ul.parentNode.appendChild(deleteAll)
            deleteAll.onclick = function() {
                while (ul.firstChild) {
                    ul.removeChild(ul.firstChild);
                    deleteAll.remove();
                }
            };
        }
    }
}
