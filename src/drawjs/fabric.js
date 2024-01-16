const canvas = new fabric.Canvas("canvas");
canvas.backgroundColor = "white";
let stackSwitch = false;
const Undo_register = []
const Redo_register = []


canvas.on('object:added', () =>{
  if(stackSwitch)return;
  console.log("object:added")
  Undo_register.push(JSON.stringify(canvas));
  console.log(Undo_register)
  Redo_register.length = 0
});

const undo = () => {
  console.log("undo")
  if (Undo_register.length > 0) {
    stackSwitch = true;
    if (Undo_register.length > 1) {
      Redo_register.push(Undo_register.pop())
      const content = Undo_register[Undo_register.length - 1];
      
      canvas.loadFromJSON(content, ()=> {
        canvas.renderAll();
        stackSwitch = false;
      });

    }else if(Undo_register.length==1){
      Redo_register.push(Undo_register.pop())
      canvas.clear();
    } 
  }
  console.log(Undo_register.length)
}
const redo = ()=>{
  if (Redo_register.length > 0) {
    stackSwitch = true;
    const content = Redo_register.pop();
    Undo_register.push(content);
    canvas.loadFromJSON(content, ()=> {
      canvas.renderAll();
      stackSwitch=false;
    });
  }
}
document.getElementById("undo").addEventListener("click",undo)
document.getElementById("redo").addEventListener("click",redo)

document.getElementById("draw").addEventListener("click", ()=> {
  canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
  canvas.freeDrawingBrush.width = document.getElementById("weight").value;
  canvas.freeDrawingBrush.color = "black";
  canvas.isDrawingMode = true;
});

document.getElementById("erase").addEventListener("click", () => {
  canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
  canvas.freeDrawingBrush.width = document.getElementById("weight").value;

  canvas.freeDrawingBrush.color = "white";
  canvas.isDrawingMode = true;
});
document.getElementById("weight").addEventListener("change", (event) => {
  canvas.freeDrawingBrush.width = event.target.value;
});

document.getElementById("submit").addEventListener("click", () => {
  if(Undo_register.length!=0){
    console.log("submit")
    canvas.backgroundColor = "white";
    const base64 = canvas.toDataURL({
      format: "png",
    });
    const formData = new FormData();
    formData.append("file", base64);
    axios.post("http://localhost:3000/" + stage, { base: base64 });
    // document.getElementById("downloadPng").classList.toggle("none");
    setTimeout(() => {
      canvas.clear();
      document.getElementById("canv-back").classList.toggle("none");
      reloadImg(stage);
    }, 300);

  }
});
document.getElementById("reset").addEventListener("click", () => {
  canvas.clear();
});
document.getElementById("close").addEventListener("click", () => {
  document.getElementById("canv-back").classList.add("none");
});
