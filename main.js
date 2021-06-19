var gga=[];

function submit(){
   var huu=[];
   for(i=1; i<=4; i++){
       var n = document.getElementById("student_"+i) .value;
       gga.push(n);
   }
    console.log(gga);
    for(i=0; i<gga.length; i++){
        huu.push(gga[i]+"<br>")
    }
    document.getElementById("output").innerHTML=huu
    document.getElementById("sort_out").innerHTML=huu.join(" ")
}

function sorting(){
    gga.sort();
    console.log(gga);
    var huu=[]
    for(i=0; i<gga.length; i++){
        huu.push(gga[i]+"<br>")
    }
    document.getElementById("output").innerHTML=huu
    document.getElementById("sort_out").innerHTML=huu.join(" ")

    
}