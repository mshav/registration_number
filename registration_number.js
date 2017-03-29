function myFunction() {
    var user = document.getElementById("myInput").value;
    var filter = user.toUpperCase();
    var plate = document.createElement('div');

    plate.classList.add('myReg');
    var t = document.createTextNode(filter);
    plate.appendChild(t);
    document.body.appendChild(plate);
    document.getElementById("myInput").value = "";
    regNumbers.push(plate);
}

function checkTown(location) {
    var fromTownReg = [];
    for (var i = 0; i < regNumbers.length; i++) {
        if (document.body.children[i].textContent.startsWith(location)) {
            // fromTownReg.push(regNumbers)
            document.body.children[i].style.display = 'block';
        }else{
            document.body.children[i].style.display = 'none';
        }
    }
}

function allTown(){
    if (document.getElementById('bellville').checked) {
        checkTown('CY');

    } else if(document.getElementById('capetown').checked) {
        checkTown('CA');

    } else if (document.getElementById('paarl').checked) {
        checkTown('CJ')

    } else if (document.getElementById('all').checked) {
        document.body.appendChild(plate);
}
}
