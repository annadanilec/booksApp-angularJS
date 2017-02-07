export class BooksService {
  constructor($http) {
    this.$http = $http;
  }
  getBooks() {
    return this.$http.get('/app/books-api/books.json').then(data => {
      return data.data;
    }, err => {
      return err;
    });
  }
  getCategories() {
    const categories = [];
    this.$http.get('/app/books-api/books.json').then(data => {
      const books = data.data;
      for (let i = 0; i < books.length; i++) {
        let add = true;
        if (categories.length > 0) {
          for (let j = 0; j < categories.length; j++) {
            if (categories[j] === books[i].genre.category) {
              add = false;
            }
          }
        }
        if (add) {
          categories.push(books[i].genre.category);
        }
      }
    });
    return categories;
  }
  getGenres() {
    const genres = [];
    this.$http.get('/app/books-api/books.json').then(data => {
      const books = data.data;
      for (let i = 0; i < books.length; i++) {
        let add = true;
        if (genres.length > 0) {
          for (let j = 0; j < genres.length; j++) {
            if (genres[j] === books[i].genre.name) {
              add = false;
            }
          }
        }
        if (add) {
          genres.push(books[i].genre.name);
        }
      }
    });
    return genres;
  }
}
