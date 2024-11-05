const list = document.querySelectorAll(`#categories .item`);
console.log(`Number of categories: ${list.length}`);
list.forEach((element) => {
    const listTitle = element.querySelector(`h2`).textContent;
    const listItems = element.querySelectorAll(`li`).length;
        console.log(`Category: ${listTitle}`);
    console.log(`Number of items: ${listItems}`);
})
