export class Filters {
  static categoryFilter(items, word) {
    let itemsToReturn = [];
    if (word) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].genre.category === word) {
          itemsToReturn.push(items[i]);
        }
      }
    } else {
      itemsToReturn = items;
    }
    return itemsToReturn;
  }
  static genreFilter(items, word) {
    let itemsToReturn = [];
    if (word) {
      for (let i = 0; i < items.length; i++) {
        if (items[i].genre.name === word) {
          itemsToReturn.push(items[i]);
        }
      }
    } else {
      itemsToReturn = items;
    }
    return itemsToReturn;
  }
}
