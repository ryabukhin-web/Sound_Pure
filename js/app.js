window.onload = function () {
    const tx = document.getElementsByTagName('textarea');
    for (let i = 0; i < tx.length; i++) {
        tx[i].setAttribute('style', 'height:' + (tx[i].scrollHeight) + 'px;overflow-y:hidden;');
        tx[i].addEventListener("input", OnInput, false);
    }
    
    function OnInput() {
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    }
}

function openSidebar() {
    var x = document.getElementById("sidebar");
    if ( x.classList.contains("_open") ) {
        x.classList.remove("_open");
    } else {
        x.classList.add("_open");
    }
}