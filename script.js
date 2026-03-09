let t=1,p1=0,p2=0;

function restart(){
    document.getElementById("c").value="";
    document.getElementById("c1").value="";
    document.getElementById("c2").value="";
    document.getElementById("c3").value="";
    document.getElementById("c4").value="";
    document.getElementById("c5").value="";
    document.getElementById("c6").value="";
    document.getElementById("c7").value="";
    document.getElementById("c8").value="";
    t=1
}

function winner(){
    let a1=document.getElementById("c").value;
    let a2=document.getElementById("c1").value;
    let a3=document.getElementById("c2").value;
    let a4=document.getElementById("c3").value;
    let a5=document.getElementById("c4").value;
    let a6=document.getElementById("c5").value;
    let a7=document.getElementById("c6").value;
    let a8=document.getElementById("c7").value;
    let a9=document.getElementById("c8").value;
    if(a1=="x"&& a2=="x" && a3=="x"||a4=="x"&& a5=="x" && a6=="x"||
    a7=="x"&& a8=="x" && a9=="x"||a1=="x"&& a4=="x" && a7=="x"||
    a2=="x"&& a5=="x" && a8=="x"||a3=="x"&& a6=="x" && a9=="x"||
    a1=="x"&& a5=="x" && a9=="x"||a3=="x"&& a5=="x" && a7=="x"){
        p1++;
        document.getElementById("p1").innerHTML=p1
        if(p1==3){
            alert(" Player 1 is Winner ");
            window.location.reload();
        }
        restart()
    }
    else if(a1=="o"&& a2=="o" && a3=="o"||a4=="o"&& a5=="o" && a6=="o"||
    a7=="o"&& a8=="o" && a9=="o"||a1=="o"&& a4=="o" && a7=="o"||
    a2=="o"&& a5=="o" && a8=="o"||a3=="o"&& a6=="o" && a9=="o"||
    a1=="o"&& a5=="o" && a9=="0"||a3=="o"&& a5=="o" && a7=="o"){
        p2++;
        document.getElementById("p2").innerHTML=p2
        if(p2==3){
            alert(" Player 2 is Winner ");
            window.location.reload();
        }
        restart()
    }
       if(t==10){
        alert("no winner, Play again")
        restart()
       }
    

}

function show1(){
    if(document.getElementById("c").value==""){
        if(t%2==1){
            document.getElementById("c").value="x";
            document.getElementById("c").style.color="#c94f7c"
        }
        else{
            document.getElementById("c").value="o";
            document.getElementById("c").style.color="#6a9c89"
        }
        t++
        winner()
    }
}

function show2(){
    if(document.getElementById("c1").value==""){
        if(t%2==1){
            document.getElementById("c1").value="x";
            document.getElementById("c1").style.color="#c94f7c"
        }
        else{
            document.getElementById("c1").value="o";
            document.getElementById("c1").style.color="#6a9c89"
        }
        t++
        winner()
    }
}

function show3(){
    if(document.getElementById("c2").value==""){
        if(t%2==1){
            document.getElementById("c2").value="x";
            document.getElementById("c2").style.color="#c94f7c"
        }
        else{
            document.getElementById("c2").value="o";
            document.getElementById("c2").style.color="#6a9c89"
        }
        t++
        winner()
    }
}

function show4(){
    if(document.getElementById("c3").value==""){
        if(t%2==1){
            document.getElementById("c3").value="x";
            document.getElementById("c3").style.color="#c94f7c"
        }
        else{
            document.getElementById("c3").value="o";
            document.getElementById("c3").style.color="#6a9c89"
        }
        t++
        winner()
    }
}

function show5(){
    if(document.getElementById("c4").value==""){
        if(t%2==1){
            document.getElementById("c4").value="x";
            document.getElementById("c4").style.color="#c94f7c"
        }
        else{
            document.getElementById("c4").value="o";
            document.getElementById("c4").style.color="#6a9c89"
        }
        t++
        winner()
    }
}

function show6(){
    if(document.getElementById("c5").value==""){
        if(t%2==1){
            document.getElementById("c5").value="x";
            document.getElementById("c5").style.color="#c94f7c"
        }
        else{
            document.getElementById("c5").value="o";
            document.getElementById("c5").style.color="#6a9c89"
        }
        t++
        winner()
    }
}

function show7(){
    if(document.getElementById("c6").value==""){
        if(t%2==1){
            document.getElementById("c6").value="x";
            document.getElementById("c6").style.color="#c94f7c"
        }
        else{
            document.getElementById("c6").value="o";
            document.getElementById("c6").style.color="#6a9c89"
        }
        t++
        winner()
    }
}

function show8(){
    if(document.getElementById("c7").value==""){
        if(t%2==1){
            document.getElementById("c7").value="x";
            document.getElementById("c7").style.color="#c94f7c"
        }
        else{
            document.getElementById("c7").value="o";
            document.getElementById("c7").style.color="#6a9c89"
        }
        t++
        winner()
    }
}

function show9(){
    if(document.getElementById("c8").value==""){
        if(t%2==1){
            document.getElementById("c8").value="x";
            document.getElementById("c8").style.color="#c94f7c"
        }
        else{
            document.getElementById("c8").value="o";
            document.getElementById("c8").style.color="#6a9c89"
        }
        t++
        winner()
    }
}