document.addEventListener("DOMContentLoaded", () => {
    let currentCarousel = 0;
	const carouselPrevBtn = document.querySelector(".first-carousel .carousel-prev");
	const carouselNextBtn = document.querySelector(".first-carousel .carousel-next");
	const carouselBody = document.querySelector(".first-carousel .carousel-main-slide");

	if (!carouselPrevBtn || !carouselNextBtn || !carouselBody) return;
	const totalItems = carouselBody.children.length;
	const itemsToShow = carouselBody.dataset.itemCnt;

	const updateCarouselPosition = () => {
		carouselBody.style.transform = `translateX(-${(100 / itemsToShow) * currentCarousel}%)`;
	};

	updateCarouselPosition();

	carouselPrevBtn.addEventListener("click", () => {
		if (currentCarousel > 0) {
			currentCarousel--;
			updateCarouselPosition();
		}
	});

	carouselNextBtn.addEventListener("click", () => {
		if (currentCarousel < totalItems - itemsToShow) {
			currentCarousel++;
			updateCarouselPosition();
		}
	});
});

document.addEventListener("DOMContentLoaded", () => {
    let currentCarousel = 0;
	const carouselPrevBtn = document.querySelector(".second-carousel .carousel-prev");
	const carouselNextBtn = document.querySelector(".second-carousel .carousel-next");
	const carouselBody = document.querySelector(".second-carousel .carousel-slide");

	if (!carouselPrevBtn || !carouselNextBtn || !carouselBody) return;
	const totalItems = carouselBody.children.length;
	const itemsToShow = carouselBody.dataset.itemCnt;

	const updateCarouselPosition = () => {
		carouselBody.style.transform = `translateX(-${(100 / itemsToShow) * currentCarousel}%)`;
	};

	updateCarouselPosition();

	carouselPrevBtn.addEventListener("click", () => {
		if (currentCarousel > 0) {
			currentCarousel--;
			updateCarouselPosition();
		}
	});

	carouselNextBtn.addEventListener("click", () => {
		if (currentCarousel < totalItems - itemsToShow) {
			currentCarousel++;
			updateCarouselPosition();
		}
	});
});

document.addEventListener("DOMContentLoaded", () => {
    let currentCarousel = 0;
	const carouselPrevBtn = document.querySelector(".third-carousel .carousel-prev");
	const carouselNextBtn = document.querySelector(".third-carousel .carousel-next");
	const carouselBody = document.querySelector(".third-carousel .carousel-slide");

	if (!carouselPrevBtn || !carouselNextBtn || !carouselBody) return;
	const totalItems = carouselBody.children.length;
	const itemsToShow = carouselBody.dataset.itemCnt;

	const updateCarouselPosition = () => {
		carouselBody.style.transform = `translateX(-${(100 / itemsToShow) * currentCarousel}%)`;
	};

	updateCarouselPosition();

	carouselPrevBtn.addEventListener("click", () => {
		if (currentCarousel > 0) {
			currentCarousel--;
			updateCarouselPosition();
		}
	});

	carouselNextBtn.addEventListener("click", () => {
		if (currentCarousel < totalItems - itemsToShow) {
			currentCarousel++;
			updateCarouselPosition();
		}
	});
});

document.addEventListener("DOMContentLoaded", () => {
    let currentCarousel = 0;
	const carouselPrevBtn = document.querySelector(".forth-carousel .carousel-prev");
	const carouselNextBtn = document.querySelector(".forth-carousel .carousel-next");
	const carouselBody = document.querySelector(".forth-carousel .carousel-slide");

	if (!carouselPrevBtn || !carouselNextBtn || !carouselBody) return;
	const totalItems = carouselBody.children.length;
	const itemsToShow = carouselBody.dataset.itemCnt;

	const updateCarouselPosition = () => {
		carouselBody.style.transform = `translateX(-${(100 / itemsToShow) * currentCarousel}%)`;
	};

	updateCarouselPosition();

	carouselPrevBtn.addEventListener("click", () => {
		if (currentCarousel > 0) {
			currentCarousel--;
			updateCarouselPosition();
		}
	});

	carouselNextBtn.addEventListener("click", () => {
		if (currentCarousel < totalItems - itemsToShow) {
			currentCarousel++;
			updateCarouselPosition();
		}
	});
});