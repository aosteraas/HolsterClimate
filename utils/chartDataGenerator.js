const addMinutes = require('date-fns/addMinutes');
const fs = require('fs');
// the time now
const now = new Date();
// two days ago
const year = now.getFullYear();
const month = now.getMonth();
const twoDaysAgo = new Date(year, month, now.getDate() - 2);
const twoDaysAhead = new Date(year, month, now.getDate() + 2);

const data = [];

for (let d = new Date(twoDaysAgo); d <= twoDaysAhead; d = addMinutes(d, 10)) {
  const temperature = parseFloat((Math.random() * 10 + 10).toFixed(2));
  const feelsLike = parseFloat((Math.random() * 10).toFixed(2));

  data.push({
    date: d,
    temperature,
    feelsLike,
  });
}

fs.writeFileSync('./data.json', JSON.stringify(data));
