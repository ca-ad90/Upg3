var box = document.getElementById("dbOn")
const debugBox = document.getElementById("dbControl")

box.addEventListener("change", function(e){
    if(e.target.checked){
        document.getElementById("page-wrapper").classList.add("showDebug")
    } else {
        document.getElementById("page-wrapper").classList.remove("showDebug")
    }
})

var test = debugBox.querySelector(".bar")
debugBox.addEventListener("dblclick",function(e){
    if(e.target.classList.contains("bar")){
        debugBox.classList.toggle("closed")
    }
})

debugBox.addEventListener("mousedown", function (e) {
    
    if(e.target.classList.contains("bar")){
        console.log("mouseDown")
        debugBox.drag = true;
        debugBox.mStartX = e.clientX
        debugBox.mStartY = e.clientY
        debugBox.bStartX = Number(debugBox.style.left.replace(/[^\d|.]/g,""))
        debugBox.bStartY = Number(debugBox.style.top.replace(/[^\d|.]/g,""))
        
    }
  })
  window.addEventListener("mousemove", function (e) {
    console.log("mouseDrag")
    console.log(debugBox.drag)
    if(debugBox.drag){
        let moveX = e.clientX - debugBox.mStartX
        let moveY = e.clientY - debugBox.mStartY
        debugBox.style.left =(debugBox.bStartX +  moveX) + "px"
        debugBox.style.top = (debugBox.bStartY +moveY)+ "px"
        
    }
  })

  debugBox.addEventListener("mouseup", function (e) {
    if(e.target.classList.contains("bar")){
        debugBox.drag = false;
        debugBox.mStartX =null;
        debugBox.mStartY =null;
        debugBox.bStartX =null;
        debugBox.bStartTop =null;
        
    }
  })