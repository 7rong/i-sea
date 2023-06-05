export default {
  setFavorite(fav) {
    const favoriteStr = JSON.stringify(fav);
    localStorage.setItem('favoriteList', favoriteStr);
  },
  getFavorite() {
    return JSON.parse(localStorage.getItem('favoriteList'));
  },
};
