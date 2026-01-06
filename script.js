const data = [
  { level: "INFO", message: "Server started", time: "10:00" },
  { level: "ERROR", message: "Database connection failed", time: "10:05" },
  { level: "INFO", message: "Request processed", time: "10:10" }
];

const logs = document.getElementById("logs");

function render(list) {
  logs.innerHTML = "";
  list.forEach(l => {
    logs.innerHTML += `
      <tr class="${l.level}">
        <td>${l.level}</td>
        <td>${l.message}</td>
        <td>${l.time}</td>
      </tr>
    `;
  });
}

function filter(level) {
  if (level === "ALL") render(data);
  else render(data.filter(l => l.level === level));
}

render(data);
