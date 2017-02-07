class RecommendedBooksController {
  constructor(booksService) {
    this.booksService = booksService;
      booksService.getBooks().then(books => {
        this.books = books;
        const selectedBook = localStorage.getItem('book');
        const selectedCategory = localStorage.getItem('category');
        const selectedGenre = localStorage.getItem('genre');
        const recommendedBooks = [];
        this.recommendedBooks = recommendedBooks;
        this.recommendedBooksCount = 3;
        for (let i = 0; i < this.recommendedBooksCount; i++) {
          search ();
        }
        function search() {
          let pickedBook = books[Math.floor(Math.random() * books.length)];
          if (pickedBook.genre.category === selectedCategory && pickedBook.genre.name === selectedGenre && pickedBook.name !== selectedBook) {
            if (recommendedBooks.indexOf(pickedBook) == -1)
              recommendedBooks.push(pickedBook);
          }
          else
            search();
        }
    });
  }
  setSelected(category, genre, book) {
    localStorage.setItem('category', category);
    localStorage.setItem('genre', genre);
    localStorage.setItem('book', book);
  }
}

export const RecommendedBooks = {
  template: require('./recommendedBooks.html'),
  controller: RecommendedBooksController
};
