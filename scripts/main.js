import { series } from './data.js';
function renderSeriesTable(series) {
    var tableBody = document.getElementById('series-table-body');
    if (tableBody) {
        tableBody.innerHTML = '';
        series.forEach(function (serie) {
            var row = document.createElement('tr');
            row.innerHTML = "\n        <td>".concat(serie.id, "</td>\n        <td><a href=\"").concat(serie.link, "\" target=\"_blank\">").concat(serie.name, "</a></td>\n        <td>").concat(serie.channel, "</td>\n        <td>").concat(serie.seasons, "</td>\n      ");
            tableBody.appendChild(row);
        });
    }
}
function calculateAverageSeasons(series) {
    var totalSeasons = series.reduce(function (acc, serie) { return acc + serie.seasons; }, 0);
    return series.length > 0 ? totalSeasons / series.length : 0;
}
function renderAverageSeasons(series) {
    var averageElement = document.getElementById('average-seasons');
    var average = calculateAverageSeasons(series);
    if (averageElement) {
        averageElement.textContent = "Average seasons: ".concat(average.toFixed(2));
    }
}
function initialize() {
    renderSeriesTable(series);
    renderAverageSeasons(series);
}
document.addEventListener('DOMContentLoaded', initialize);
