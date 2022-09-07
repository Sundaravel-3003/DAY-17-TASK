

let h1 = document.createElement("h1");
h1.setAttribute("id","hell");
document.body.append(h1);

setTimeout(()=>{
    document.getElementById("hell").innerHTML = 10;
    setTimeout(()=>{
        document.getElementById("hell").innerHTML = 9;
        setTimeout(()=>{
            document.getElementById("hell").innerHTML = 8;
            setTimeout(()=>{
                document.getElementById("hell").innerHTML = 7;
                setTimeout(()=>{
                    document.getElementById("hell").innerHTML = 6;
                    setTimeout(()=>{
                        document.getElementById("hell").innerHTML = 5;
                        setTimeout(()=>{
                            document.getElementById("hell").innerHTML = 4;
                            setTimeout(()=>{
                                document.getElementById("hell").innerHTML = 3;
                                setTimeout(()=>{
                                    document.getElementById("hell").innerHTML = 2;
                                    setTimeout(()=>{
                                        document.getElementById("hell").innerHTML = 1;
                                        setTimeout(()=>{
                                            document.getElementById("hell").innerHTML = "Happy Independence Day";
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)               
            },1000)
        },1000)
    },1000)
},1000)