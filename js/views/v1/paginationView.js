import View from "./view";

class PaginationView extends View {
  _parentEl = document.querySelector(".control-pagination");

  addHandlerClick(handler) {
    this._parentEl.addEventListener("click", function (e) {
      const btn = e.target.closest(".btn-pagination");

      if (!btn) return;
      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }
  markupsButtonsPaginationLeft(curPage) {
    return `

    <button data-goto="${curPage - 1}" class="btn-pagination btn--left">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="btn-icon-pagination icon-active"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        />
      
      </svg>

      <nav>
      <a class="numeration-page number">Page ${curPage - 1}</a>
      </nav>
    </button>
   
   `;
  }

  markupsButtonsPaginationRight(curPage) {
    return `
    <button data-goto="${curPage + 1}" class="btn-pagination btn--right">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="btn-icon-pagination"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        />
        
      </svg>
      <nav>
      <a class="numeration-page number">Page ${curPage + 1}</a>
      </nav>
    </button>

  `;
  }

  markupsButtonsPaginationLeftRight(curPage) {
    return `

      <button data-goto="${curPage - 1}" class="btn-pagination btn--left">
        <nav>
        <a class="numeration-page number">Page ${curPage - 1}</a>
        </nav>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="btn-icon-pagination icon-active"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />

        </svg>

      </button>

      <button data-goto="${curPage + 1}" class="btn-pagination btn--right">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="btn-icon-pagination"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        />

      </svg>
      <nav>
        <a class="numeration-page number">Page ${curPage + 1}</a>
      </nav>
     </button>
     `;
  }

  _generateMarkupCategoryNoAllProducts() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.category.length / this._data.resultsPerPage
    );

    if (curPage === 1 && numPages > 1) {
      return this.markupsButtonsPaginationRight(curPage);
    }

    //last page
    if (curPage === numPages && numPages > 1) {
      return this.markupsButtonsPaginationLeft(curPage);
    }

    //other pages
    if (curPage < numPages) {
      return this.markupsButtonsPaginationLeftRight(curPage);
    }

    //page 1 and NO other pages
    return "";
  }

  _generateMarkupCategoryAllProducts() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.products.length / this._data.resultsPerPage
    );

    if (curPage === 1 && numPages > 1) {
      return this.markupsButtonsPaginationRight(curPage);
    }

    //last page
    if (curPage === numPages && numPages > 1) {
      return this.markupsButtonsPaginationLeft(curPage);
    }

    //other pages
    if (curPage < numPages) {
      return this.markupsButtonsPaginationLeftRight(curPage);
    }

    //page 1 and NO other pages
    return "";
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    //page 1 with another pages
    if (curPage === 1 && numPages > 1) {
      return this.markupsButtonsPaginationRight(curPage);
    }

    //last page
    if (curPage === numPages && numPages > 1) {
      return this.markupsButtonsPaginationLeft(curPage);
    }

    //other pages
    if (curPage < numPages) {
      return this.markupsButtonsPaginationLeftRight(curPage);
    }
    //page 1 and NO other pages
    return "";
  }
}
export default new PaginationView();
