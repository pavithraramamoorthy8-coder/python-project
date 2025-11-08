// Animate "Meet Our Team" when loaded
document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".title");
  title.style.opacity = "0";
  setTimeout(() => {
    title.style.transition = "all 1.5s ease";
    title.style.opacity = "1";
    title.style.transform = "translateY(0)";
  }, 200);
});

// 🌟 Plotly Energy Chart
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"];
const energyUsage = [450, 420, 400, 380, 360, 340, 330, 320, 310];
const energySaved = [0, 30, 50, 70, 90, 110, 120, 130, 140];

const trace1 = {
  x: months,
  y: energyUsage,
  type: "scatter",
  mode: "lines+markers",
  name: "Energy Used (kWh)",
  line: { color: "#ff4081", width: 3 },
  marker: { size: 8 }
};

const trace2 = {
  x: months,
  y: energySaved,
  type: "bar",
  name: "Energy Saved (kWh)",
  marker: { color: "#00e676" }
};

const layout = {
  paper_bgcolor: "rgba(0,0,0,0)",
  plot_bgcolor: "rgba(0,0,0,0)",
  font: { color: "#fff" },
  title: { text: "Monthly Energy Usage vs Savings", x: 0.5 }, // Center the title
  xaxis: { title: "Month" },
  yaxis: { title: "kWh" },
  legend: { x: 0.5, y: 1.15, xanchor: "center", orientation: "h" }
};

Plotly.newPlot("energyChart", [trace1, trace2], layout);
