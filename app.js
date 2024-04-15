 function newElement() {
   let li = document.createElement("li");
   let inputValue = document.getElementById("myInput").value;
   let t = document.createTextNode(inputValue);
   li.appendChild(t);
   if (inputValue === "") {
     alert("Hech narsa kiritilmadi!");
   } else {
     document.getElementById("myUL").appendChild(li);
   }
   document.getElementById("myInput").value = "";

   // O'chirish va tahrirlash tugmalarini yaratish
   let spanDelete = document.createElement("SPAN");
   let txtDelete = document.createTextNode("\u00D7");
   spanDelete.className = "close";
   spanDelete.appendChild(txtDelete);
   li.appendChild(spanDelete);

   let spanEdit = document.createElement("SPAN");
   let txtEdit = document.createTextNode("\u270E");
   spanEdit.className = "edit";
   spanEdit.appendChild(txtEdit);
   li.appendChild(spanEdit);

   // O'chirish tugmasi bosilganda elementni o'chirish
   let close = document.getElementsByClassName("close");
   for (var i = 0; i < close.length; i++) {
     close[i].onclick = function () {
       let div = this.parentElement;
       div.style.display = "none";
     };
   }

   // Tahrirlash tugmasi bosilganda elementni tahrirlash
   let edit = document.getElementsByClassName("edit");
   for (let i = 0; i < edit.length; i++) {
     edit[i].onclick = function () {
       let li = this.parentElement;
       let input = document.createElement("input");
       input.type = "text";
       input.value = li.firstChild.textContent;
       li.innerHTML = "";
       li.appendChild(input);
       input.focus();
       input.onblur = function () {
         let text = this.value;
         li.innerHTML = text;
         li.appendChild(spanDelete);
         li.appendChild(spanEdit);
       };
     };
   }
 }