function goBack() {
  window.location.href = "dash.html";
}

function addAppliance() {
  const name = document.getElementById("applianceName").value.trim();
  const power = document.getElementById("powerRating").value.trim();
  const list = document.getElementById("applianceList");

  if (name === "" || power === "") {
    alert("⚠️ Please enter appliance name and power rating!");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <span>🔌 <b>${name}</b> — ${power} W</span>
    <i class="ri-delete-bin-5-fill" onclick="removeAppliance(this)"></i>
  `;

  li.style.opacity = "0";
  li.style.transform = "translateY(20px)";
  list.appendChild(li);

  setTimeout(() => {
    li.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    li.style.opacity = "1";
    li.style.transform = "translateY(0)";
  }, 100);

  document.getElementById("applianceName").value = "";
  document.getElementById("powerRating").value = "";
}

function removeAppliance(icon) {
  const li = icon.parentElement;
  li.style.transition = "transform 0.3s ease, opacity 0.3s ease";
  li.style.transform = "scale(0.9)";
  li.style.opacity = "0";
  setTimeout(() => li.remove(), 300);
}
