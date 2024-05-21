import './about.css';

const aboutData = require('../../data/about.json');

const about = (bread=true) => {
    const element = document.createElement('div');
    element.classList.add('about__container');

    const hoursSection = document.createElement('div');
    hoursSection.classList.add('about__hours-section');

    const hoursHeader = document.createElement('h2');
    hoursHeader.innerText = 'Hours';
    hoursSection.appendChild(hoursHeader);

    const hoursTable = document.createElement('table');
    hoursTable.classList.add('about__hours-table');

    const hoursTableBody = document.createElement('tbody');
    hoursTable.appendChild(hoursTableBody);

    const hoursData = aboutData['hours'];
    for (let day in hoursData) {
        const row = document.createElement('tr');

        const dayLabel = document.createElement('td');
        dayLabel.classList.add('about__day-label');
        dayLabel.innerText = day + ": ";
        row.appendChild(dayLabel);
        
        const hourRange = document.createElement('td');
        hourRange.classList.add('about__hour-range');
        hourRange.innerText = hoursData[day];
        row.appendChild(hourRange);

        hoursTableBody.appendChild(row);
    }
    hoursSection.appendChild(hoursTable);

    element.appendChild(hoursSection);

    const locationSection = document.createElement('div');
    locationSection.classList.add('about__location_section');

    const locationHeader = document.createElement('h2');
    locationHeader.innerText = 'Location';
    locationSection.appendChild(locationHeader);
    
    const locationDescription = document.createElement('div');
    locationDescription.innerText = aboutData['location'];
    locationSection.appendChild(locationDescription);

    element.appendChild(locationSection);

    return element;
}

export default about;