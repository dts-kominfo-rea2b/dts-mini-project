// set category
export function setCategory(id) {
  let categoryName = "";
  switch (id) {
    case 28:
      categoryName = "Action";
      break;
    case 12:
      categoryName = "Adventure";
      break;
    case 16:
      categoryName = "Animation";
      break;
    case 35:
      categoryName = "Comedy";
      break;
    case 80:
      categoryName = "Crime";
      break;
    case 99:
      categoryName = "Documentary";
      break;
    case 18:
      categoryName = "Drama";
      break;
    case 10751:
      categoryName = "Family";
      break;
    case 14:
      categoryName = "Fantasy";
      break;
    case 36:
      categoryName = "History";
      break;
    case 27:
      categoryName = "Horror";
      break;
    case 10402:
      categoryName = "Music";
      break;
    case 9648:
      categoryName = "Mystery";
      break;
    case 10749:
      categoryName = "10749";
      break;
    case 878:
      categoryName = "Science Fiction";
      break;
    case 10770:
      categoryName = "TV Movie";
      break;
    case 53:
      categoryName = "Thriller";
      break;
    case 10752:
      categoryName = "War";
      break;
    case 37:
      categoryName = "Western";
      break;

    default:
      categoryName = "-";
      break;
  }
  return categoryName;
}
