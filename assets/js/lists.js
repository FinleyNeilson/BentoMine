// ┬  ┬┌─┐┌┬┐┌─┐
// │  │└─┐ │ └─┐
// ┴─┘┴└─┘ ┴ └─┘
// Functions for printing both lists

const generateFirstListsContainer = () => {
	for (const list of CONFIG.firstlistsContainer) {
		const linkItems = list.links
			.map(
				(link) => `
          <a
          href="${link.link}"
          class="listItem"
          >${link.name}</a>`
			)
			.join('');
		let item = `
        <div class="card list list__${list.id}" id="list_${list.id}">
          <i class="listIcon" icon-name="${list.icon}"></i>${linkItems}
        </div>
      `;
		const position = 'beforeend';
		lists_1.insertAdjacentHTML(position, item);
	}
};

const generateSecondListsContainer = () => {
	for (const list of CONFIG.secondListsContainer) {
		const linkItems = list.links
			.map(
				(link) => `
        <a
        href="${link.link}"
        class="listItem"
        >${link.name}</a>`
			)
			.join('');
		let item = `
        <div class="card list list__${list.id}" id="list_${list.id}">
        <i class="listIcon" icon-name="${list.icon}"></i>${linkItems}
        </div>
      `;
		const position = 'beforeend';
		lists_2.insertAdjacentHTML(position, item);
	}
};

const generateLists = () => {
	switch (CONFIG.bentoLayout) {
		case 'bento':
			generateFirstListsContainer();
			break;
		case 'lists':
			generateFirstListsContainer();
			generateSecondListsContainer();
			break;
		default:
			break;
	}
};

generateLists();
