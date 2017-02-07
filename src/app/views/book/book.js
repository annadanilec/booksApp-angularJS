class BookController {
  constructor(booksService, $stateParams) {
    this.booksService = booksService;
    booksService.getBooks().then(books => {
      this.book = books.find(element => {
        return element.id === $stateParams.id;
      });
    });
  }
}

export const Book = {
  template: require('./book.html'),
  controller: BookController
}
