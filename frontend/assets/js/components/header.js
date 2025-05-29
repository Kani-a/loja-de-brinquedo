export const createHeader = () => {
    const $header = `
        <div class="container d-flex align-items-center justify-content-start py-3 px-4">
            <img src="https://cdn-icons-png.flaticon.com/512/146/146008.png" alt="Logo brinquedo" class="me-3 header-logo">
            <h1 class="m-0 fw-bold text-dark">100Esperança</h1>
        </div>
    `;

    const header = document.createElement('header');
    header.classList = 'bg-warning shadow-sm border-bottom';
    header.insertAdjacentHTML('afterbegin', $header);
    document.body.insertAdjacentElement('afterbegin', header);
};
