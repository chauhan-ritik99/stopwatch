let hr=0
let min=0
let sec=0
let milli=0

let timer=false

function start(){
    timer=true
    myfun()

}

function stop(){
    timer=false
    myfun()
}

function reset(){
   location.reload()
}

function myfun(){
    if(timer==true){
        milli=milli+1
    }
    if(milli==100){
        sec=sec+1
        milli=0
    }

    if(sec==60){
        min=min+1
        sec=0
    }

    if(min==60){
        hr=hr+1
        min=0
    }

    let getsec=sec
    let getmin=min
    let gethr=hr

    if(sec<10){
        getsec="0"+sec
    }

    if(min<10){
        getmin="0"+min
    }
    
    if(hr>10){
        gethr="0"+hr
    }

    setTimeout(()=>{
        myfun()
    },10)

    document.getElementById("milli").innerText=milli
     document.getElementById("sec").innerText=getsec
      document.getElementById("min").innerText=getmin
       document.getElementById("hr").innerText=gethr
}

