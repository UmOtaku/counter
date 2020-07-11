function count(){
    let start = Number(document.getElementById("start").value);
    let end = Number(document.getElementById("end").value);
    let path = Number(document.getElementById("path").value);
    let res = document.getElementById("text");
    res.innerHTML = "Counting: <br>";
    if(path == 0 || path == ""){
        alert("[ERROR] Path defined to default");
        path = 1;
    }
    if(end < start || start == "" || end == ""){
        res.innerHTML("[ERROR] Impossible count");
    }
    else{
        for(start; start <= end; start += path){
            res.innerHTML += `${start} &#128073`;
        }
            res.innerHTML += `&#127937`;
        }
    }