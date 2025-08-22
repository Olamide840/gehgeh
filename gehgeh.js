const params = new URLSearchParams(window.location.search);
const name = params.get("name");
const course = params.get("course");
const type = params.get("type");

const output = document.getElementById("output");

if (type === "id") {
  output.innerHTML = `
    <div class="id-card" id="card">
      <div class="id-header">
        <img src="gehgeh.png" class="logo" alt="GehGeh University Logo" style="width: 200px;">
        <h3>GehGeh University of Wisdom and Understanding.</h3>
      </div>
      <hr>
      <p><b>Name:</b> ${name}</p>
      <p><b>Course:</b> ${course}</p>
      <p><b>Matric No:</b> GEH2025-${Math.floor(1000 + Math.random() * 9000)}</p>
      <p><b>Status:</b> Student for Life 🎓</p>
      <p><b>Expiry Date:</b> Valid Forever</p>
    </div>
  `;
} else if (type === "certificate") {
  output.innerHTML = `
    <div class="certificate" id="card">
      <img src="gehgeh.png" class="watermark" alt="Watermark Logo">
      <h1>Certificate of Wisdom and Understanding</h1>
      <p>This is to certify that</p>
      <h2 style="font-size: 45px;text-decoration: underline;">${name}</h2>
      <p>has successfully completed the course</p>
      <h3 style="color: #5a2d82;font-weight: bolder;font-style: italic;">${course}</h3>
      <p>at GehGeh University of Wisdom & Understanding.</p>
      <p style="color: #222;">...and he has demonstrated excellence in knowledge and character, upholding the values and standards of Geh Geh</p> 
      <br><br>
      <p style="font-style: italic;font-family: cursive;text-decoration: underline;">Signed: Prof. GehGeh Obruste, Chancellor</p>
      <p>Date: <b style="color: #5a2d82;">${new Date().toLocaleDateString()}</b></p>
    </div>
  `;
}

document.getElementById("download").addEventListener("click", () => {
  const card = document.getElementById("card");
  html2canvas(card).then(canvas => {
    const link = document.createElement("a");
    link.download = `${type}_${name}.png`;
    link.href = canvas.toDataURL();
    link.click();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const courseSelect = document.getElementById("courseSelect");
  const customCourse = document.getElementById("customCourse");

  courseSelect.addEventListener("change", () => {
    if (courseSelect.value === "other") {
      customCourse.style.display = "block";
      customCourse.required = true;
    } else {
      customCourse.style.display = "none";
      customCourse.required = false;
    }
  });
});
