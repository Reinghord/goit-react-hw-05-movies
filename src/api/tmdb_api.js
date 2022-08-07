// let PAGE_COUNTER = 1;

export async function fetchTitles(searchValue) {
  const BASIC_URL = `https://api.themoviedb.org/3`;
  const searchParam = new URLSearchParams({
    api_key: '44d6575d8f8dedfd36c7023de34a30c4',
  });
  try {
    const response = await fetch(
      `${BASIC_URL}/trending/movie/day?${searchParam}`
    );
    const parsed = await response.json();
    const titles = parsed.results;
    console.log(titles);
    return titles;
  } catch (error) {
    throw new Error(console.log(error));
  }
}

export async function fetchMovies(searchQuery) {
  const BASIC_URL = `https://api.themoviedb.org/3`;
  const searchParam = new URLSearchParams({
    api_key: '44d6575d8f8dedfd36c7023de34a30c4',
    query: searchQuery,
  });
  try {
    const response = await fetch(`${BASIC_URL}/search/movie?${searchParam}`);
    const parsed = await response.json();
    const titles = parsed.results;
    console.log(titles);
    return titles;
  } catch (error) {
    throw new Error(console.log(error));
  }
}

export async function fetchMovieDetails(movieId) {
  const BASIC_URL = `https://api.themoviedb.org/3`;
  const searchParam = new URLSearchParams({
    api_key: '44d6575d8f8dedfd36c7023de34a30c4',
  });
  try {
    const response = await fetch(
      `${BASIC_URL}/movie/${movieId}?${searchParam}`
    );
    const parsed = await response.json();
    return parsed;
  } catch (error) {
    throw new Error(console.log(error));
  }
}
//Function to reset PAGE_COUNTER
// export const resetPage = () => {
//   PAGE_COUNTER = 1;
// };
