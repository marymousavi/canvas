let canvas = document.querySelector("canvas");

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let c = canvas.getContext("2d")

//line
c.beginPath()             //new line
c.lineTo(800,300)
c.lineTo(900,100)
c.lineTo(1300,300)
c.closePath()             //close line
c.strokeStyle = "#8e44ad"
c.stroke()
c.lineTo(1300,200)
c.stroke()
c.beginPath()              //new line
c.lineTo(1500,300)
c.lineTo(1000,1500)
c.stroke()


c.beginPath()
c.lineTo(900,700)
c.lineTo(700,300)
c.lineTo(1300,700)
c.fillStyle = "#8e44ad"
c.fill()

//text
c.font = "30px verdana"
c.fillText("hello world", 10 , 55)

c.translate(100,100)               //place

//squer
c.fillStyle = "#27ae60"            //color
c.fillRect(100,0,100,100)          //width,height
c.fillStyle = "#3498db"
c.fillRect(300,100,100,100)
c.fillStyle = "#8e44ad"
c.fillRect(500,0,100,100)


//arc , circle
// 1/4 line
c.beginPath()
c.arc(300,300,50, Math.PI/2, Math.PI)    //x,y,r
c.strokeStyle = "red"
c.stroke()
// 1/2 fill
c.beginPath()
c.arc(400,300,50, Math.PI/2, 1.5*Math.PI)
c.fillStyle = "blue"
c.fill()
// 1/4 line und fill
c.beginPath()
c.arc(200,300,50, Math.PI/2, Math.PI)
c.fillStyle = "lightblue"
c.strokeStyle = "red"
c.fill()
c.stroke()

for(let i=0; i<5; i++){
    x = Math.random() * window.innerWidth
    y = Math.random() * window.innerHeight
    c.beginPath()
    c.arc(x,y,50, 0,2*Math.PI)
    c.strokeStyle = "green"
    c.stroke()
}


//clear canvas

//c.clearRect(100,200,200,200)                              (clear this plase)
//c.clearRect(0,0,window.innerWidth,window.innerHeight)     (clear all canvas)