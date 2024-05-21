import './menu.css';

const menuData = require('../../data/menu.json');

const menu = (bread=true) => {
    const element = document.createElement('div');
    element.classList.add('menu__container');

    menuData.forEach(sectionData => {
        const section = document.createElement('div');
        section.classList.add('menu__section');

        const header = document.createElement('h2');
        header.innerText = sectionData['section'];
        section.appendChild(header);

        const itemsData = sectionData['items'];
        itemsData.forEach(entryData => {
            const entry = document.createElement('div');
            entry.classList.add('menu__entry');

            const entryHeader = document.createElement('h3');
            if (bread) {
                entryHeader.innerText = entryData['name'] + ' - ' + entryData['cost'].toString();
            } else {
                entryHeader.innerText = entryData['alt-name'] + ' - ' + entryData['cost'].toString();
            }
            
            entry.appendChild(entryHeader);

            const entryDescription = document.createElement('div');
            entryDescription.innerText = (bread) ? entryData['description'] : entryData['alt-description'];
            entry.appendChild(entryDescription);

            section.appendChild(entry);
        });

        element.appendChild(section);
    });
    return element;
}

export default menu;