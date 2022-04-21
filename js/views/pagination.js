import View from "./view";

export default class PaginationView extends View {
  pagBtnClickListener;

  init() {
    this.root = document.querySelector(".control-pagination");
  }

  addHandlerClick(onPageClick) {
    this.root.removeEventListener("click", this.pagBtnClickListener);

    this.pagBtnClickListener = (e) => {
      const btn = e.target.closest(".btn-pagination");

      if (!btn) return;
      const getNumberPage = +btn.dataset.goto;

      console.log("the number", getNumberPage);
      onPageClick(getNumberPage);
    };

    this.root.addEventListener("click", this.pagBtnClickListener);
  }

  renderLeftButton(curPage) {
    const btnLeft = `

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
    this.render(btnLeft);
  }

  renderRightButton(curPage) {
    const btnRight = `
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
    this.render(btnRight);
  }

  renderLeftRightButtons(curPage) {
    const btnleftRight = `

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

    this.render(btnleftRight);
  }

  renderPagination(curPage, numPages) {
    // page 1 with another pages
    if (curPage === 1 && numPages > 1) {
      this.renderRightButton(curPage);
      return;
    }

    //last page
    if (curPage === numPages && numPages > 1) {
      this.renderLeftButton(curPage);
      return;
    }

    //other pages
    if (curPage < numPages) {
      this.renderLeftRightButtons(curPage);
      return;
    }
  }
}
