console.log("welome to the my app");
showNotes();
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', function (e) {

    let addtext = document.getElementById('addtext');
    let addtitle = document.getElementById('addtitle');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    } else {
        notesobj = JSON.parse(notes)
    }

    let newobj = {
        title: addtitle.value,
        text: addtext.value,
    }
    // local storage are the updated
    notesobj.push(newobj);
    localStorage.setItem('notes', JSON.stringify(notesobj));
    addtext.value = "";
    showNotes();
});

// function are creted they are show the notes in local storage
function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = []
    } else {
        notesobj = JSON.parse(notes)
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html += ` <div class="notecard my-2 mx-2" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.text}</p>
          <button id="${index}"onclick="deletnote(this.id)" class="btn btn-primary">delete notes</button>
        </div>
      </div>`
    });
    let notelm = document.getElementById('notes');
    if (notesobj.length != 0) {
        notelm.innerHTML = html;
    } else {
        notelm.innerHTML = `if you want take a Anynotes "Check the above section and crate the notes"`;
       
    }
}

// delete the notes
function deletnote(index) {
    // console.log("this notes is deleted", index);

    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesobj = [];
    } else {
        notesobj = JSON.parse(notes)
    };

    notesobj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesobj));
    showNotes();

};

// search the element
let textsearch = document.getElementById('textsearch');
textsearch.addEventListener('input', function () {

    let invalue = textsearch.value.toLowerCase();
    console.log("input are fired", invalue);
    let notecard = document.getElementsByClassName('notecard');
    Array.from(notecard).forEach(function(element){
        let cardtext = element.getElementsByTagName('p')[0].innerText;
        if(cardtext.includes(invalue)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        

    });
    

});