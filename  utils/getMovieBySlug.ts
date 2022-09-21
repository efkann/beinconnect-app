import { getCategories } from './getCategories';
import { getHeadlines } from './getHeadlines';

export function getMovieBySlug(slug: string) {
  const headlineMovies = getHeadlines();
  const foundHeadlineMovie = headlineMovies.find(
    (movie) => movie.slug === `/film/${slug}`
  );
  if (foundHeadlineMovie !== undefined) {
    return foundHeadlineMovie;
  }
  const categories = getCategories();
  for (const category of categories) {
    const foundMovie = category.contents.find(
      (movie) => movie.slug === `/film/${slug}`
    );
    if (foundMovie !== undefined) {
      return foundMovie;
    }
  }
}
