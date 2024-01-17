using { sap.capire.bookshop as my } from '../db/schema';
service GenreService @(path:'/genre') {
  entity Genres as projection on my.Genres;
}
