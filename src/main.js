import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const searchInput = document.querySelector('input[name="search-text"]');
const loadMoreBtn = document.querySelector('.load-more-btn');

let query = '';
let page = 1;
const PER_PAGE = 15;

form.addEventListener('submit', event => {
  event.preventDefault();

  query = searchInput.value.trim();
  if (!query.trim()) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }

  page = 1;
  clearGallery();
  hideLoadMoreButton();
  fetchAndRenderImages();
});

loadMoreBtn.addEventListener('click', () => {
  hideLoadMoreButton();
  page += 1;
  fetchAndRenderImages(true);
});

async function fetchAndRenderImages(isLoadMore = false) {
  showLoader();
  try {
    const { hits, totalHits } = await getImagesByQuery(query, page);

    if (!hits.length) {
      hideLoadMoreButton();
      return;
    }

    createGallery(hits, query);

    const loadedCount = page * PER_PAGE;
    if (loadedCount < totalHits) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
      if (page > 1) {
        iziToast.info({
          title: 'End of Results',
          message: "We're sorry, but you've reached the end of search results.",
          position: 'topRight',
        });
      }
    }

    if (isLoadMore) {
      smoothScrollAfterRender();
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: `Something went wrong: ${error.message}`,
      position: 'topRight',
    });
  } finally {
    hideLoader();
  }
}

function smoothScrollAfterRender() {
  const galleryItem = document.querySelector('.gallery-item');
  if (!galleryItem) return;
  const { height: cardHeight } = galleryItem.getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
