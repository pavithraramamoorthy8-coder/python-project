function goBack() {
  window.location.href = "dash.html";
}

// Sample energy data
const daily = [3.2, 4.1, 3.9, 5.0, 4.6, 5.3, 4.8];
const weekly = [28, 32, 30, 35];
const monthly = [120, 135, 150, 140, 160, 170, 165];

// === Daily Usage (Line Chart) ===
Plotly.newPlot('dailyChart', [{
  x: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  y: daily,
  type: 'scatter',
  mode: 'lines+markers',
  marker: { color: '#00bfa5', size: 8 },
  line: { color: '#0288d1', width: 3 },
  name: 'Daily Usage (kWh)'
}], {
  title: 'Daily Energy Usage',
  plot_bgcolor: 'rgba(0,0,0,0)',
  paper_bgcolor: 'rgba(0,0,0,0)',
});

// === Weekly Usage (Bar Chart) ===
Plotly.newPlot('weeklyChart', [{
  x: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
  y: weekly,
  type: 'bar',
  marker: {
    color: ['#43a047', '#0288d1', '#f06292', '#9575cd']
  },
  name: 'Weekly Usage (kWh)'
}], {
  title: 'Weekly Energy Consumption',
  plot_bgcolor: 'rgba(0,0,0,0)',
  paper_bgcolor: 'rgba(0,0,0,0)',
});

// === Monthly Usage (Pie Chart) ===
Plotly.newPlot('monthlyChart', [{
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  values: monthly,
  type: 'pie',
  marker: {
    colors: ['#00bfa5', '#0288d1', '#f48fb1', '#ba68c8', '#4db6ac', '#81d4fa', '#ce93d8']
  }
}], {
  title: 'Monthly Energy Distribution',
  plot_bgcolor: 'rgba(0,0,0,0)',
  paper_bgcolor: 'rgba(0,0,0,0)',
});
