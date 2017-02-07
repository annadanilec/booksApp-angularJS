class BooksController {
  constructor(booksService) {
    this.booksService = booksService;
      booksService.getBooks().then(books => {
        this.books = books;
    });
    this.categories = booksService.getCategories();
    this.genres = booksService.getGenres();
  }
  setSelected(category, genre, book) {
    localStorage.setItem('category', category);
    localStorage.setItem('genre', genre);
    localStorage.setItem('book', book);
  }
}

export const Books = {
  template: require('./books.html'),
  controller: BooksController
};
