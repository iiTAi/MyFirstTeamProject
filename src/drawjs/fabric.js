const canvas = new fabric.Canvas("canvas");
canvas.backgroundColor = "white";

document.getElementById("draw").addEventListener("click", function () {
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
  }, 300);
  reloadImg(stage);
});
document.getElementById("reset").addEventListener("click", () => {
  canvas.clear();
});
document.getElementById("close").addEventListener("click", () => {
  document.getElementById("canv-back").classList.add("none");
});
