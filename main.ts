import { series } from './data.js';
import { Serie } from './Serie.js';

function renderSeriesTable(series: Serie[]): void {
  const tableBody = document.getElementById('series-table-body');
  if (tableBody) {
    tableBody.innerHTML = ''; 
    series.forEach((serie) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${serie.id}</td>
        <td><a href="${serie.link}" target="_blank">${serie.name}</a></td>
        <td>${serie.channel}</td>
        <td>${serie.seasons}</td>
      `;
      tableBody.appendChild(row);
    });
  }
}

function calculateAverageSeasons(series: Serie[]): number {
  const totalSeasons = series.reduce((acc, serie) => acc + serie.seasons, 0);
  return series.length > 0 ? totalSeasons / series.length : 0;
}

function renderAverageSeasons(series: Serie[]): void {
  const averageElement = document.getElementById('average-seasons');
  const average = calculateAverageSeasons(series);
  if (averageElement) {
    averageElement.textContent = `Average seasons: ${average.toFixed(2)}`;
  }
}

function initialize(): void {
  renderSeriesTable(series);
  renderAverageSeasons(series);
}

document.addEventListener('DOMContentLoaded', initialize);


