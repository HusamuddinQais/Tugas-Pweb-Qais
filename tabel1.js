var list1 = [];
var list2= [];
var list3= [];


var n = 1;
var x = 0;
alert("welcome")

function ftambah(){
    jumlah.value = Number(angka1.value) +Number(angka2.value);

    var AddRown = document.getElementById('show');
    var NewRow = AddRown.insertRow(n);

    list1[x] = document.getElementById("angka1").value;
    list2[x] = document.getElementById("angka2").value;
    list3[x] = document.getElementById("jumlah").value;
    


    var cell1 = NewRow.insertCell(0);
    var cell2 = NewRow.insertCell(1);
    var cell3 = NewRow.insertCell(2);
    
    

    cell1.innerHTML = list1[x];
    cell2.innerHTML = list2[x];
    cell3.innerHTML = list3[x];
   

    n++;
    x++;

    document.body.style.backgroundColor="green"
    
}
