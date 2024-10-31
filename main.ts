import { series } from './data';

function renderSeriesTable(series: Serie[]) {
    const tableBody = document.getElementById('series-table-body');
    if (tableBody) {
        tableBody.innerHTML = '';
        series.forEach(serie => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${serie.id}</td>
                <td>${serie.name}</td>
                <td>${serie.channel}</td>
                <td>${serie.seasons}</td>
            `;
            tableBody.appendChild(row);
        });
    }
}

function calculateSeasonsAverage(series: Serie[]): number {
    const totalSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0);
    return totalSeasons / series.length;
}

function displaySeasonsAverage(series: Serie[]) {
    const average = calculateSeasonsAverage(series);
    const averageElement = document.getElementById('seasons-average');
    if (averageElement) {
        averageElement.textContent = `Seasons average: ${average.toFixed(1)}`;
    }
}

// Inicializar la tabla y el promedio
renderSeriesTable(series);
displaySeasonsAverage(series);
