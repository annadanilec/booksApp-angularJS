import angular from 'angular';
//Services
import { BooksService } from './app/services/books';
//Filters
import { Filters } from './app/filters/filters';
//Components
import { Books } from './app/views/books/books';
import { Book } from './app/views/book/book';
//Components
import { RecommendedBooks } from './app/components/recommendedBooks/recommendedBooks';
//Others
import 'angular-ui-router';
import routesConfig from './routes';
import 'angular-utils-pagination';
import 'angular-moment';
//Styles
import './index.scss';

export const app = 'books';

angular
  .module(app, ['ui.router', 'angularMoment', 'angularUtils.directives.dirPagination'])
  .config(routesConfig)
  .service('booksService', BooksService)
  .component('books', Books)
  .component('book', Book)
  .component('recommendedBooks', RecommendedBooks)
  .filter('categoryFilter', () => Filters.categoryFilter)
  .filter('genreFilter', () => Filters.genreFilter);
