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
  const base64 = canvas.toDataURL({
    format: "png",
  });
  const formData = new FormData();
  formData.append("file", base64);
  axios.post("http://localhost:3000", { base: base64 });
  // document.getElementById("downloadPng").classList.toggle("none");
  setTimeout(() => {
    document.getElementById("canv-back").classList.toggle("none");
  }, 300);
});
document.getElementById("reset").addEventListener("click", () => {
  canvas.clear();
});
document.getElementById("close").addEventListener("click", () => {
  document.getElementById("canv-back").classList.add("none");
});

window.addEventListener("load", () => {
  const img_holder = document.getElementById("img-holder");
  axios.get("http://localhost:3000").then((ele) => {
    url = ele.data.urls;
    url.forEach((element) => {
      let img_element = document.createElement("img");
      img_element.src = element; // 画像パス
      img_element.width = 200; // 横サイズ（px）
      img_element.height = 100;
      img_element.style.position = "absolute";
      let x = Math.random() * 1000 + 100;
      let y = Math.random() * 500 + 100;
      img_element.style.top = y;
      img_element.style.left = -x;
      img_element.style.zIndex = 5;

      img_holder.appendChild(img_element);
    });
  });
});
