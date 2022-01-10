//Show the element of the items in the information card
showNotes();


// Add more information
let btnAdd = document.getElementById("btnAdd");
btnAdd.addEventListener('click',function(){
    let myInput = document.getElementById("myInput");
    if(myInput.value == ""){
        alert("Bạn phải nhập một thông tin nào đó!");
    }else{
        //Get information from the localStorage
        let notes = localStorage.getItem("notes");
        //create a new list if there is none in the localStorage
        if(notes == null){
            notesObj = []; //This list is to save information
        }else{
            notesObj = JSON.parse(notes); // change to object
        }
        notesObj.push(myInput.value); //push the information to the list
        // save information after update in the localStorage
        localStorage.setItem("notes",JSON.stringify(notesObj));
        // Delete the input value 
        myInput.value = "";
        // show the list
        showNotes();
    }
})

function showNotes(){
    // Take information from the localstorage that has the key "notes"
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = []; //Save information
    }else{
        notesObj = JSON.parse(notes);
    }


    let innerUL = "";
    notesObj.forEach(function(element,index){
        innerUL += `<li>${element} <button id="${index}" onclick="rmvNote(this.id)"> Xóa</button><hr></li>`; //Template String
    })
    // Xac dinh MOC tren CAY ma minh se them noi dung.
    let notesRoot = document.getElementById("myUL");

    if(notesObj.length > 0) {
        notesRoot.innerHTML = innerUL;
    }else{
        notesRoot.innerHTML = "<h4> Không có dữ liệu gì cả</h4>";
    }

}



function rmvNote(a){
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = []; //Luu gia tri sau chuyen doi
    }else{
        notesObj = JSON.parse(notes);
    }
  
    notesObj.splice(a,1);

  
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();
}