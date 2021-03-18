var btnAccaunts = document.querySelector('#btnAccounts');
var btnaddAccaunts = document.querySelector('#btnAddacc');
var btneditDelete = document.querySelector('#btnEditDell');

var btnsaveAcc = document.querySelector('.addAcc');
var btnsaveAccChanges = document.querySelector('.saveChanges');

// PRIKAZI U BROWSERU
var viewAccaunts = document.querySelector('.accauntsTable');
var viewAddAcc = document.querySelector('.addAccview');
var viewEditDell = document.querySelector('.editDelltable');
var viewEditAcc = document.querySelector('.editAcc');

var accauntsTable = document.querySelector(".accauntsTable");
var bodyBody = document.querySelector("#bodyBody");
var editEdit = document.querySelector("#editEdit");
var id;
var podaci = [
    {
        id: '1',
        name: "Danilo",
        deposit: '22000',
        card: 'visa'
    }, {
        id: '2',
        name: 'Perica',
        deposit: '14000',
        card: 'visa'
    }
];

createTable();

function createTable() {
    bodyBody.innerHTML = "";

    for (var i = 0; i < podaci.length; i++) {
        table = `<tr>
<td>${podaci[i].id}</td>
<td>${podaci[i].name}</td>
<td>${podaci[i].deposit}</td>
<td>${podaci[i].card}</td>
</tr>`;
        bodyBody.innerHTML += table;

    }
}
/************************** PAMETNIJE *************************
 createTable();
function createTable(){
     var create = "";
    for (var i = 0; i < bankClients.length; i++) {
         create += `<tr>
                        <td>${bankClients[i].id}</td>
                        <td>${bankClients[i].name}</td>
                        <td>${bankClients[i].deposit}</td>
                        <td>${bankClients[i].card}</td>
                    </tr>`;
         bodyBody.innerHTML = create;
    }
   
}
 */

createEditDelltable();
function createEditDelltable() {
    editEdit.innerHTML = "";
    for (var i = 0; i < podaci.length; i++) {

        table = `<tr>
<td>${podaci[i].id}</td>
<td>${podaci[i].name}</td>
<td>${podaci[i].deposit}</td>
<td>${podaci[i].card}</td>
<td><button data-id="` + i + `"  class="btnUbaci"> EDIT </button></td>
<td><button id=" ` + i + ` "  class="btnBrisanje"> DELETE </button></td>      
</tr>`;
        editEdit.innerHTML += table;
    }
    var btnBrisanje = document.querySelectorAll('.btnBrisanje');
    var btnUbaci = document.querySelectorAll('.btnUbaci');
    for (var i = 0; i < btnBrisanje.length; i++) {
        btnBrisanje[i].addEventListener('click', obrisiAccaunt);
        btnUbaci[i].addEventListener('click', editujAccaunt);
    }
    ;
}
;

function obrisiAccaunt() {
    var id = this.id;
    podaci.splice(id, 1);
    createTable();
    createEditDelltable();
    accView();
}
;
function editujAccaunt() {
    editAccView();
    id = this.getAttribute('data-id');//GLOBALNA VARIJABLA
    einputid.value = podaci[id].id;
    einputname.value = podaci[id].name;
    einputdeposit.value = podaci[id].deposit;
    einputcard.value = podaci[id].card;
}
;
btnsaveAccChanges.addEventListener('click', function () {
    var accId = einputid.value;
    var accName = einputname.value;
    var accDeposit = einputdeposit.value;
    var accCard = einputcard.value;
    podaci[id] = {
        id: accId,
        name: accName,
        deposit: accDeposit,
        card: accCard
    };
   
    createTable();
   
    accView();
});


var inputid = document.querySelector('#unesiid');
var inputname = document.querySelector('#unesiname');
var inputdeposit = document.querySelector('#unesideposit');
var inputcard = document.querySelector('#unesicard');

var einputid = document.querySelector('#Eunesiid');
var einputname = document.querySelector('#Eunesiname');
var einputdeposit = document.querySelector('#Eunesideposit');
var einputcard = document.querySelector('#Eunesicard');

btnsaveAcc.addEventListener('click', function () {
    var id = inputid.value;
    var name = inputname.value;
    var deposit = inputdeposit.value;
    var card = inputcard.value;
    var newPodaci = {
        id: id,
        name: name,
        deposit: deposit,
        card: card
    };
    podaci.push(newPodaci);
    createTable();
    createEditDelltable();

    accView();
});

//EVENTS
btnAccaunts.addEventListener('click', accView);
btnaddAccaunts.addEventListener('click', addaccView);
btneditDelete.addEventListener('click', editDellView);

//btnUbaci.addEventListener('click', );
//btnBrisanje.addEventListener('click', dellAccView);


function accView() {
    viewAccaunts.style.display = 'block';
    viewAddAcc.style.display = 'none';
    viewEditDell.style.display = 'none';
    viewEditAcc.style.display = 'none';
}

function addaccView() {
    viewAddAcc.style.display = 'block';
    viewAccaunts.style.display = 'none';
    viewEditDell.style.display = 'none';
    viewEditAcc.style.display = 'none';
}

function editDellView() {
    viewAddAcc.style.display = 'none';
    viewAccaunts.style.display = 'none';
    viewEditDell.style.display = 'block';
    viewEditAcc.style.display = 'none';
}

function editAccView() {
    viewAddAcc.style.display = 'none';
    viewAccaunts.style.display = 'none';
    viewEditDell.style.display = 'none';
    viewEditAcc.style.display = 'block';

}

function dellAccView() {
    viewAddAcc.style.display = 'none';
    viewAccaunts.style.display = 'block';
    viewEditDell.style.display = 'none';
    viewEditAcc.style.display = 'none';
}

