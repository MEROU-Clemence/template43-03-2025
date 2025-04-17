$(document).ready(function () {
    // Mobile Nav
    var MobNav = $('.navbar-toggler');
    MobNav.on('click', function () {
        $('.menu-mobile').toggleClass('menu-mobile-active');
        $('.first-nav').toggleClass('first-nav-fixed');
        $('.navbar-toggler .btn-menu').toggleClass('d-none');
    });

    // Sous-menu mobile
    $('.clic-sub-menu').on('click', function () {
        if ($(this).children('.sub-menu').hasClass('sub-menu-active')) {
            $('.clic-sub-menu .sub-menu').removeClass('sub-menu-active');
        } else {
            $('.clic-sub-menu .sub-menu').removeClass('sub-menu-active');
            $(this).children('.sub-menu').addClass('sub-menu-active');
        }

        if ($(this).children('a').hasClass('a-active')) {
            $('.clic-sub-menu a').removeClass('a-active');
        } else {
            $('.clic-sub-menu a').removeClass('a-active');
            $(this).children('a').addClass('a-active');
        }
    });

    // ****** Texte presentation page Home
    if ($(".description").length > 0) {
        var $description = $(".description");
        var $seeMore2 = $("#seeMore2");
        var $seeLess2 = $("#seeLess2");

        // Check si le texte est limité, on affiche pas les boutons
        if ($description[0].scrollHeight <= $description.height()) {
            $seeMore2.hide();
            $seeLess2.hide();
        } else {
            $seeMore2.show();
            $seeLess2.hide();
        }

        // Voir plus presentation
        $seeMore2.on('click', function (e) {
            e.preventDefault();
            $description.css('height', 'auto').addClass("expanded");
            $seeMore2.hide();
            $seeLess2.show();
        });

        // Voir moins presentation
        $seeLess2.on('click', function (e) {
            e.preventDefault();
            $description.css('height', 'auto').removeClass("expanded");
            $seeMore2.show();
            $seeLess2.hide();
        });
    };

    // ****** Hover sur les liens de la section btn-contain-other-pages
    $(".btn-contain.btn-contain-other-pages .link-page-global").hover(
        function () {
            $(this).closest(".btn-contain.btn-contain-other-pages").addClass("hover-active");
        },
        function () {
            $(this).closest(".btn-contain.btn-contain-other-pages").removeClass("hover-active");
        }
    );
    
    if ($('main').hasClass('page-home')) {
        // ****** Bannière bienvenue sliders
        setupSliderTrack('.slider-track', '.items-welcome');
        setupSliderTrack('.slider-track-2', '.items-welcome-2');

        // ****** Slider Galerie
        setupGallerySlider();

        // ****** Click sur les scea home
        var SceaHome = $('.btn-scea.link-page-global.link-page-global-home');

        // Fonction pour vérifier si des éléments dépassent la hauteur visible
        function updateButtonVisibility() {
            var container = $('.picto-informations');

            // Vérifier si le contenu dépasse la hauteur du conteneur
            var isOverflowing = container[0].scrollHeight > container[0].clientHeight;

            // Afficher ou masquer le bouton en conséquence
            if (isOverflowing) {
                $('.btn-contain-contain.btn-contain-contain-scea-home').show();
            } else {
                $('.btn-contain-contain.btn-contain-contain-scea-home').hide();
            }
        }

        // Ajouter l'événement click pour le bouton
        SceaHome.on('click', function () {
            $('.picto-informations').toggleClass('picto-informations-more');
            $('.btn-scea.link-page-global').toggleClass('d-none');
            
            updateButtonVisibility();
        });
        
        updateButtonVisibility();
    };

    // ****** Slider page offer
    $('.slider-gallery-offer').owlCarousel({
        loop: true,
        rewind: false,
        autoplay: false,
        navText: [
            "<svg xmlns='http://www.w3.org/2000/svg' width='32' height='16' viewBox='0 0 32 16' fill='none'><path d='M31 9C31.5523 9 32 8.55228 32 8C32 7.44772 31.5523 7 31 7L31 9ZM0.292891 7.29289C-0.0976333 7.68341 -0.0976334 8.31658 0.29289 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31945 8.07107 0.92893C7.68054 0.538406 7.04738 0.538406 6.65685 0.92893L0.292891 7.29289ZM31 7L0.999998 7L0.999998 9L31 9L31 7Z' fill='var(--color-link)' /></svg>",
            "<svg xmlns='http://www.w3.org/2000/svg' width='32' height='16' viewBox='0 0 32 16' fill='none'><path d='M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM31.7071 8.70711C32.0976 8.31658 32.0976 7.68342 31.7071 7.29289L25.3431 0.928932C24.9526 0.538408 24.3195 0.538408 23.9289 0.928932C23.5384 1.31946 23.5384 1.95262 23.9289 2.34315L29.5858 8L23.9289 13.6569C23.5384 14.0474 23.5384 14.6805 23.9289 15.0711C24.3195 15.4616 24.9526 15.4616 25.3431 15.0711L31.7071 8.70711ZM1 9H31V7H1V9Z' fill='var(--color-link)' /></svg >"
        ],
        responsiveClass: true,
        dots: false,
        nav: true,
        items: 1,
        responsive: {
            0: {
                touchDrag: true,
                mouseDrag: true,
            },
            1220: {
                touchDrag: false,
                mouseDrag: true,
            },
        }
    });

    // ****** Slider options
    $('.slider-options').owlCarousel({
        loop: false,
        rewind: true,
        autoplay: false,
        navText: [
            "<svg xmlns='http://www.w3.org/2000/svg' width='32' height='16' viewBox='0 0 32 16' fill='none'><path d='M31 9C31.5523 9 32 8.55228 32 8C32 7.44772 31.5523 7 31 7L31 9ZM0.292891 7.29289C-0.0976333 7.68341 -0.0976334 8.31658 0.29289 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31945 8.07107 0.92893C7.68054 0.538406 7.04738 0.538406 6.65685 0.92893L0.292891 7.29289ZM31 7L0.999998 7L0.999998 9L31 9L31 7Z' fill='var(--color-link)' /></svg>",
            "<svg xmlns='http://www.w3.org/2000/svg' width='32' height='16' viewBox='0 0 32 16' fill='none'><path d='M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM31.7071 8.70711C32.0976 8.31658 32.0976 7.68342 31.7071 7.29289L25.3431 0.928932C24.9526 0.538408 24.3195 0.538408 23.9289 0.928932C23.5384 1.31946 23.5384 1.95262 23.9289 2.34315L29.5858 8L23.9289 13.6569C23.5384 14.0474 23.5384 14.6805 23.9289 15.0711C24.3195 15.4616 24.9526 15.4616 25.3431 15.0711L31.7071 8.70711ZM1 9H31V7H1V9Z' fill='var(--color-link)' /></svg >"
        ],
        responsiveClass: true,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1,
                margin: 0,
                touchDrag: true,
                mouseDrag: true,
            },
            768: {
                items: 3,
                margin: 16,
                touchDrag: true,
                mouseDrag: true,
            },
            1024: {
                items: 4,
                margin: 24,
                touchDrag: true,
                mouseDrag: true,
            },
            1220: {
                items: 5,
                margin: 40,
                touchDrag: false,
                mouseDrag: true,
            },
        }
    });

    // ****** Slider autres offres
    $('.slider-other-offers').owlCarousel({
        loop: false,
        rewind: true,
        autoplay: false,
        navText: [
            "<svg xmlns='http://www.w3.org/2000/svg' width='32' height='16' viewBox='0 0 32 16' fill='none'><path d='M31 9C31.5523 9 32 8.55228 32 8C32 7.44772 31.5523 7 31 7L31 9ZM0.292891 7.29289C-0.0976333 7.68341 -0.0976334 8.31658 0.29289 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31945 8.07107 0.92893C7.68054 0.538406 7.04738 0.538406 6.65685 0.92893L0.292891 7.29289ZM31 7L0.999998 7L0.999998 9L31 9L31 7Z' fill='var(--color-link)' /></svg>",
            "<svg xmlns='http://www.w3.org/2000/svg' width='32' height='16' viewBox='0 0 32 16' fill='none'><path d='M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM31.7071 8.70711C32.0976 8.31658 32.0976 7.68342 31.7071 7.29289L25.3431 0.928932C24.9526 0.538408 24.3195 0.538408 23.9289 0.928932C23.5384 1.31946 23.5384 1.95262 23.9289 2.34315L29.5858 8L23.9289 13.6569C23.5384 14.0474 23.5384 14.6805 23.9289 15.0711C24.3195 15.4616 24.9526 15.4616 25.3431 15.0711L31.7071 8.70711ZM1 9H31V7H1V9Z' fill='var(--color-link)' /></svg >"
        ],
        responsiveClass: true,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1,
                margin: 0,
                touchDrag: true,
                mouseDrag: true,
            },
            768: {
                items: 2,
                margin: 16,
                touchDrag: true,
                mouseDrag: true,
            },
            1024: {
                items: 3,
                margin: 24,
                touchDrag: true,
                mouseDrag: true,
            },
            1220: {
                items: 4,
                margin: 40,
                touchDrag: false,
                mouseDrag: true,
            },
        }
    });

    if ($('main').hasClass('page-discover')) {
        // ****** Titre des pages pages
        const currentPageTitle = document.querySelector('.h2-page-title').textContent.trim();
        const otherPageLinks = document.querySelectorAll('.section-other-pages .link-page-global');

        // Parcourir chaque lien pour comparer son texte avec le titre actuel
        otherPageLinks.forEach(link => {
            if (link.textContent.trim() === currentPageTitle) {
                // Ajouter la classe 'link-page-global-active' au lien correspondant
                link.classList.add('link-page-global-active');

                // Ajouter la classe 'btn-contain-other-pages-active' uniquement si le lien est actif
                if (link.classList.contains('link-page-global-active')) {
                    const parentContainer = link.closest('.btn-contain.btn-contain-other-pages');
                    if (parentContainer) {
                        parentContainer.classList.add('btn-contain-other-pages-active');
                    }
                }
            }
        });

        // ****** Texte descrip page page
        if ($(".title-and-descrip-page").length > 0) {
            var $titleAndDescripPage = $(".title-and-descrip-page");
            var $descriptionPage = $(".descrip-page");
            var $seeMore3 = $("#seeMore3");
            var $seeLess3 = $("#seeLess3");

            // Fonction pour vérifier si le bouton doit être affiché
            function checkButtonVisibility() {
                var viewportWidth = window.innerWidth;

                if (viewportWidth >= 1220) {
                    // Large écran (1220px & plus)
                    if ($titleAndDescripPage[0].scrollHeight <= 640) {
                        $seeMore3.hide();
                        $seeLess3.hide();
                        $titleAndDescripPage.removeClass("expanded");
                    } else {
                        $seeMore3.show();
                        $seeLess3.hide();
                    }
                } else if (viewportWidth >= 1024 && viewportWidth < 1220) {
                    // Bureau standard (1024px - 1219px)
                    if ($titleAndDescripPage[0].scrollHeight <= 330) {
                        $seeMore3.hide();
                        $seeLess3.hide();
                        $titleAndDescripPage.removeClass("expanded");
                    } else {
                        $seeMore3.show();
                        $seeLess3.hide();
                    }
                } else {
                    // Mobile ou tablette (< 1024px)
                    if ($descriptionPage[0].scrollHeight <= $descriptionPage.height()) {
                        $seeMore3.hide();
                        $seeLess3.hide();
                        $descriptionPage.removeClass("expanded");
                    } else {
                        $seeMore3.show();
                        $seeLess3.hide();
                    }
                }
            }

            // Initial check
            checkButtonVisibility();

            // Voir plus descrip
            $seeMore3.on('click', function (e) {
                e.preventDefault();
                if (window.innerWidth >= 1220) {
                    $titleAndDescripPage.css('max-height', 'none').addClass("expanded");
                } else if (window.innerWidth >= 1024) {
                    $titleAndDescripPage.css('max-height', 'none').addClass("expanded");
                } else {
                    $descriptionPage.css('height', 'auto').addClass("expanded");
                }
                $seeMore3.hide();
                $seeLess3.show();
            });

            // Voir moins descrip
            $seeLess3.on('click', function (e) {
                e.preventDefault();
                if (window.innerWidth >= 1220) {
                    $titleAndDescripPage.css('max-height', '640px').removeClass("expanded");
                } else if (window.innerWidth >= 1024) {
                    $titleAndDescripPage.css('max-height', '330px').removeClass("expanded");
                } else {
                    $descriptionPage.css('height', '').removeClass("expanded");
                }
                $seeMore3.show();
                $seeLess3.hide();
            });

            // Re-check on window resize
            $(window).on('resize', function () {
                checkButtonVisibility();
            });
        };
    };

    if ($('main').hasClass('page-news')) {
        // ****** Clic description news page
        // Fonction pour vérifier si le bouton "Voir plus" doit être affiché
        function toggleSeeMoreVisibility() {
            $(".title-descrip-and-btn-page.title-descrip-and-btn-page-in-news").each(function () {
                var $container = $(this);
                var $descriptionNews = $container.find(".description.descrip-news-in-news");
                var $titleAndDescrip = $container.find(".title-and-descrip-page.title-and-descrip-page-news");
                var $seeMore = $container.find(".seeMore1");

                // Vérifie pour le mode mobile (moins de 1024px)
                if (window.innerWidth < 1024) {
                    // Ne rien changer, la logique du mode mobile est intacte
                    if ($descriptionNews[0].scrollHeight > $descriptionNews[0].clientHeight) {
                        $seeMore.show(); // Affiche "Voir plus" si la description est trop longue
                    } else {
                        $seeMore.hide(); // Sinon, cache le bouton
                    }
                } else {
                    // Mode desktop (au-dessus de 1024px) : vérifier la visibilité du conteneur titre + description
                    if ($titleAndDescrip[0].scrollHeight > $titleAndDescrip[0].clientHeight) {
                        $seeMore.show(); // Si le conteneur est trop long, affiche "Voir plus"
                    } else {
                        $seeMore.hide(); // Cache le bouton sinon
                    }
                }
            });
        }

        // Appelle cette fonction au chargement de la page
        toggleSeeMoreVisibility();

        // Clic sur "Voir plus"
        $(".seeMore1").on("click", function (e) {
            e.preventDefault();
            var $container = $(this).closest(".title-descrip-and-btn-page.title-descrip-and-btn-page-in-news");
            var $descriptionNews = $container.find(".description.descrip-news-in-news");
            var $titleAndDescrip = $container.find(".title-and-descrip-page.title-and-descrip-page-news");

            if (window.innerWidth < 1024) {
                // Mode mobile : étendre la description
                $descriptionNews.addClass("expanded");
                $container.find(".seeMore1").hide();
                $container.find(".seeLess1").show();
            } else {
                // Mode desktop : étendre tout le conteneur titre + description
                $titleAndDescrip.addClass("expanded");
                $container.find(".seeMore1").hide();
                $container.find(".seeLess1").show();
            }
        });

        // Clic sur "Voir moins"
        $(".seeLess1").on("click", function (e) {
            e.preventDefault();
            var $container = $(this).closest(".title-descrip-and-btn-page.title-descrip-and-btn-page-in-news");
            var $descriptionNews = $container.find(".description.descrip-news-in-news");
            var $titleAndDescrip = $container.find(".title-and-descrip-page.title-and-descrip-page-news");

            if (window.innerWidth < 1024) {
                // Mode mobile : réduire la description
                $descriptionNews.removeClass("expanded");
                $container.find(".seeMore1").show();
                $container.find(".seeLess1").hide();
            } else {
                // Mode desktop : réduire tout le conteneur titre + description
                $titleAndDescrip.removeClass("expanded");
                $container.find(".seeMore1").show();
                $container.find(".seeLess1").hide();
            }
        });
    };

    if ($('main').hasClass('page-detail')) {
        // ****** SCEA Offer
        var BtnOfferScea = $('.more-less-btn-contain.more-less-btn-contain-offer');
        BtnOfferScea.on('click', function () {
            $('.picto-informations.picto-informations-offer').toggleClass('picto-informations-offer-more');
            $('.more-less-btn-contain.more-less-btn-contain-offer .btn-scea-2').toggleClass('d-none');
        });

        // ****** Voir plus SCEA
        var SeeScea = $('.btn-scea');
        var pictoInformations = $('.picto-informations');

        // Fonction pour vérifier si le contenu déborde
        function checkOverflow() {
            if (pictoInformations[0].scrollHeight <= pictoInformations[0].clientHeight) {
                SeeScea.parent().hide();
            } else {
                SeeScea.parent().show();
            }
        }

        checkOverflow();

        SeeScea.on('click', function () {
            pictoInformations.toggleClass('picto-informations-more');
            SeeScea.toggleClass('d-none');
        });

        // Appeler la vérification en cas de modification dynamique
        $(window).on('resize', checkOverflow);
    };

    if ($('main').hasClass('gifts')) {
        // Clics sur les liens des prix chèques cadeaux
        $('.all-prices-vouchers a').on('click', function (event) {
            event.preventDefault();

            var targetId = $(this).attr('id');

            // Trouver l'élément correspondant dans le slider
            var targetElement = $(targetId);
            if (targetElement.length) {
                var index = $('.slider-vouchers').find('.owl-item').filter(function () {
                    return $(this).find(targetId).length > 0;
                }).index();

                // Si un index valide est trouvé, déplacer le slider
                if (index !== -1) {
                    $('.slider-vouchers').trigger('to.owl.carousel', [index, 600]);
                } else {
                    console.error("Impossible de trouver l'index dans Owl Carousel pour :", targetId);
                }
            } else {
                console.error("Cible non trouvée pour :", targetId);
            }
        });

        // Slider vouchers
        $('.slider-vouchers').owlCarousel({
            loop: false,
            rewind: true,
            autoplay: false,
            navText: ["<i class='las la-angle-left'></i>", "<i class='las la-angle-right'></i>"],
            margin: 20,
            items: 1,
            autoHeight: true,
            responsiveClass: true,
            dots: false,
            nav: false,
            responsive: {
                0: {
                    touchDrag: true,
                    mouseDrag: true,
                },
                1220: {
                    touchDrag: false,
                    mouseDrag: true,
                },
            }
        });
    }
});

// FONCTIONS
// ****** Bannière bienvenue
function setupSliderTrack(selector, itemSelector) {
    const sliderTrack = document.querySelector(selector);
    const items = document.querySelectorAll(itemSelector);
    const containerWidth = sliderTrack.parentElement.offsetWidth; // Largeur visible du conteneur

    // Cloner les items jusqu'à ce que la largeur soit suffisante
    while (sliderTrack.scrollWidth < containerWidth * 2) { // *2 pour garantir une transition fluide
        items.forEach((item) => {
            const clonedItem = item.cloneNode(true); // Clone l'item avec son contenu
            sliderTrack.appendChild(clonedItem); // Ajoute le clone
        });
    }
};

// ****** Slider Galerie
function setupGallerySlider() {
    // Sélection des éléments principaux
    const carouselLittle = document.querySelector(".carousel-little-photos");
    const mainImage = document.querySelector(".main-image");

    // Initialisation : la main image: img 1, première miniature img 2, etc.
    initializeGallery();

    // Ajouter les listeners pour les flèches
    const prevButton = document.querySelector(".prev-arrow");
    const nextButton = document.querySelector(".next-arrow");

    prevButton.addEventListener("click", () => updateCarousel("prev-arrow"));
    nextButton.addEventListener("click", () => updateCarousel("next-arrow"));

    // Ajouter les listeners pour les miniatures
    carouselLittle.addEventListener("click", (event) => {
        const littlePhotoContain = event.target.closest(".little-photo-contain");
        if (!littlePhotoContain) return; // Si ce n'est pas un conteneur valide, on sort
        updateMainImageAndShift(littlePhotoContain);
    });

    // Fonction pour initialiser la galerie
    function initializeGallery() {
        const littlePhotoContainers = Array.from(carouselLittle.children);

        // Si la liste des miniatures n'est pas vide
        if (littlePhotoContainers.length > 0) {
            const firstLittlePhotoContain = littlePhotoContainers[0]; // La première miniature
            const firstLittlePhoto = firstLittlePhotoContain.querySelector(".little-photo");

            // Définir la main image comme la première miniature
            mainImage.src = firstLittlePhoto.src;

            // Retirer cette miniature (elle devient la main image)
            firstLittlePhotoContain.remove();
        }
    }

    // Fonction pour mettre à jour l'image principale et réorganiser la liste au clic sur une miniature
    function updateMainImageAndShift(clickedPhotoContain) {
        const littlePhoto = clickedPhotoContain.querySelector(".little-photo"); // Récupérer l'image dans le conteneur
        const newMainImageSrc = littlePhoto.src;

        // Ajouter l'ancienne image principale comme dernière miniature
        const newLittlePhotoContain = document.createElement("div");
        newLittlePhotoContain.className = "little-photo-contain";

        const newLittlePhoto = document.createElement("img");
        newLittlePhoto.className = "little-photo";
        newLittlePhoto.src = mainImage.src; // Ancienne image principale
        newLittlePhoto.alt = "Ancienne image principale";

        newLittlePhotoContain.appendChild(newLittlePhoto);
        carouselLittle.appendChild(newLittlePhotoContain);

        // Mettre à jour la main image
        mainImage.src = newMainImageSrc;

        // Retirer l'image cliquée de la liste des miniatures
        clickedPhotoContain.remove();
    }

    // Fonction pour mettre à jour le carousel avec les flèches
    function updateCarousel(direction) {
        const littlePhotoContainers = Array.from(carouselLittle.children);

        if (littlePhotoContainers.length === 0) return; // S'il n'y a pas de miniatures, on ne fait rien

        if (direction === "next-arrow") {
            // Déplacer la première miniature dans la grande image
            const firstLittlePhotoContain = littlePhotoContainers[0]; // Première miniature
            const firstLittlePhoto = firstLittlePhotoContain.querySelector(".little-photo");

            // Ajouter l'ancienne main image comme dernière miniature
            const newLittlePhotoContain = document.createElement("div");
            newLittlePhotoContain.className = "little-photo-contain";

            const newLittlePhoto = document.createElement("img");
            newLittlePhoto.className = "little-photo";
            newLittlePhoto.src = mainImage.src; // Ancienne image principale
            newLittlePhoto.alt = "Ancienne image principale";

            newLittlePhotoContain.appendChild(newLittlePhoto);
            carouselLittle.appendChild(newLittlePhotoContain);

            // Mettre à jour la main image
            mainImage.src = firstLittlePhoto.src;

            // Supprimer l'ancienne miniature
            firstLittlePhotoContain.remove();
        } else if (direction === "prev-arrow") {
            // Déplacer la dernière miniature dans la grande image
            const lastLittlePhotoContain = littlePhotoContainers[littlePhotoContainers.length - 1]; // Dernière miniature
            const lastLittlePhoto = lastLittlePhotoContain.querySelector(".little-photo");

            // Ajouter l'ancienne main image comme première miniature
            const newLittlePhotoContain = document.createElement("div");
            newLittlePhotoContain.className = "little-photo-contain";

            const newLittlePhoto = document.createElement("img");
            newLittlePhoto.className = "little-photo";
            newLittlePhoto.src = mainImage.src; // Ancienne image principale
            newLittlePhoto.alt = "Ancienne image principale";

            newLittlePhotoContain.appendChild(newLittlePhoto);
            carouselLittle.insertBefore(newLittlePhotoContain, carouselLittle.firstChild);

            // Mettre à jour la main image
            mainImage.src = lastLittlePhoto.src;

            // Supprimer l'ancienne miniature
            lastLittlePhotoContain.remove();
        }
    }
};

$(document).ready(function () {
    $('.slider-offers').owlCarousel({
        loop: false,
        rewind: true,
        autoplay: false,
        navText: [
            "<svg xmlns='http://www.w3.org/2000/svg' width='32' height='16' viewBox='0 0 32 16' fill='none'><path d='M31 9C31.5523 9 32 8.55228 32 8C32 7.44772 31.5523 7 31 7L31 9ZM0.292891 7.29289C-0.0976333 7.68341 -0.0976334 8.31658 0.29289 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31945 8.07107 0.92893C7.68054 0.538406 7.04738 0.538406 6.65685 0.92893L0.292891 7.29289ZM31 7L0.999998 7L0.999998 9L31 9L31 7Z' fill='var(--color-link)' /></svg>",
            "<svg xmlns='http://www.w3.org/2000/svg' width='32' height='16' viewBox='0 0 32 16' fill='none'><path d='M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM31.7071 8.70711C32.0976 8.31658 32.0976 7.68342 31.7071 7.29289L25.3431 0.928932C24.9526 0.538408 24.3195 0.538408 23.9289 0.928932C23.5384 1.31946 23.5384 1.95262 23.9289 2.34315L29.5858 8L23.9289 13.6569C23.5384 14.0474 23.5384 14.6805 23.9289 15.0711C24.3195 15.4616 24.9526 15.4616 25.3431 15.0711L31.7071 8.70711ZM1 9H31V7H1V9Z' fill='var(--color-link)' /></svg >"
        ],
        responsiveClass: true,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1,
                margin: 0,
                touchDrag: true,
                mouseDrag: true,
            },
            768: {
                items: 2,
                margin: 16,
                touchDrag: true,
                mouseDrag: true,
            },
            1024: {
                items: 3,
                margin: 24,
                touchDrag: true,
                mouseDrag: true,
            },
            1220: {
                items: 4,
                margin: 40,
                touchDrag: false,
                mouseDrag: true,
            },
        }
    });
    $('.slider-special-offers').owlCarousel({
        loop: false,
        rewind: true,
        autoplay: false,
        navText: [
            "<svg xmlns='http://www.w3.org/2000/svg' width='32' height='16' viewBox='0 0 32 16' fill='none'><path d='M31 9C31.5523 9 32 8.55228 32 8C32 7.44772 31.5523 7 31 7L31 9ZM0.292891 7.29289C-0.0976333 7.68341 -0.0976334 8.31658 0.29289 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31945 8.07107 0.92893C7.68054 0.538406 7.04738 0.538406 6.65685 0.92893L0.292891 7.29289ZM31 7L0.999998 7L0.999998 9L31 9L31 7Z' fill='var(--color-link)' /></svg>",
            "<svg xmlns='http://www.w3.org/2000/svg' width='32' height='16' viewBox='0 0 32 16' fill='none'><path d='M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM31.7071 8.70711C32.0976 8.31658 32.0976 7.68342 31.7071 7.29289L25.3431 0.928932C24.9526 0.538408 24.3195 0.538408 23.9289 0.928932C23.5384 1.31946 23.5384 1.95262 23.9289 2.34315L29.5858 8L23.9289 13.6569C23.5384 14.0474 23.5384 14.6805 23.9289 15.0711C24.3195 15.4616 24.9526 15.4616 25.3431 15.0711L31.7071 8.70711ZM1 9H31V7H1V9Z' fill='var(--color-link)' /></svg >"
        ],
        responsiveClass: true,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1,
                margin: 0,
                touchDrag: true,
                mouseDrag: true,
            },
            768: {
                items: 2,
                margin: 16,
                touchDrag: true,
                mouseDrag: true,
            },
            1024: {
                items: 3,
                margin: 24,
                touchDrag: true,
                mouseDrag: true,
            },
            1220: {
                items: 4,
                margin: 40,
                touchDrag: false,
                mouseDrag: true,
            },
        }
    });
    $('.avis-slider').owlCarousel({
        loop: true,
        rewind: false,
        autoplay: false,
        navText: [
            "<svg xmlns='http://www.w3.org/2000/svg' width='32' height='16' viewBox='0 0 32 16' fill='none'><path d='M31 9C31.5523 9 32 8.55228 32 8C32 7.44772 31.5523 7 31 7L31 9ZM0.292891 7.29289C-0.0976333 7.68341 -0.0976334 8.31658 0.29289 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31945 8.07107 0.92893C7.68054 0.538406 7.04738 0.538406 6.65685 0.92893L0.292891 7.29289ZM31 7L0.999998 7L0.999998 9L31 9L31 7Z' fill='var(--color-link)' /></svg>",
            "<svg xmlns='http://www.w3.org/2000/svg' width='32' height='16' viewBox='0 0 32 16' fill='none'><path d='M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM31.7071 8.70711C32.0976 8.31658 32.0976 7.68342 31.7071 7.29289L25.3431 0.928932C24.9526 0.538408 24.3195 0.538408 23.9289 0.928932C23.5384 1.31946 23.5384 1.95262 23.9289 2.34315L29.5858 8L23.9289 13.6569C23.5384 14.0474 23.5384 14.6805 23.9289 15.0711C24.3195 15.4616 24.9526 15.4616 25.3431 15.0711L31.7071 8.70711ZM1 9H31V7H1V9Z' fill='var(--color-link)' /></svg >"
        ],
        responsiveClass: true,
        dots: false,
        nav: true,
        items: 1,
        responsive: {
            0: {
                touchDrag: true,
                mouseDrag: true,
            },
            1220: {
                touchDrag: false,
                mouseDrag: true,
            },
        }
    });
    $('.slider-page-page').owlCarousel({
        loop: true,
        rewind: false,
        autoplay: false,
        navText: [
            "<svg xmlns='http://www.w3.org/2000/svg' width='32' height='16' viewBox='0 0 32 16' fill='none'><path d='M31 9C31.5523 9 32 8.55228 32 8C32 7.44772 31.5523 7 31 7L31 9ZM0.292891 7.29289C-0.0976333 7.68341 -0.0976334 8.31658 0.29289 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31945 8.07107 0.92893C7.68054 0.538406 7.04738 0.538406 6.65685 0.92893L0.292891 7.29289ZM31 7L0.999998 7L0.999998 9L31 9L31 7Z' fill='var(--color-link)' /></svg>",
            "<svg xmlns='http://www.w3.org/2000/svg' width='32' height='16' viewBox='0 0 32 16' fill='none'><path d='M1 7C0.447715 7 0 7.44772 0 8C0 8.55228 0.447715 9 1 9V7ZM31.7071 8.70711C32.0976 8.31658 32.0976 7.68342 31.7071 7.29289L25.3431 0.928932C24.9526 0.538408 24.3195 0.538408 23.9289 0.928932C23.5384 1.31946 23.5384 1.95262 23.9289 2.34315L29.5858 8L23.9289 13.6569C23.5384 14.0474 23.5384 14.6805 23.9289 15.0711C24.3195 15.4616 24.9526 15.4616 25.3431 15.0711L31.7071 8.70711ZM1 9H31V7H1V9Z' fill='var(--color-link)' /></svg >"
        ],
        responsiveClass: true,
        dots: false,
        nav: true,
        items: 1,
        responsive: {
            0: {
                touchDrag: true,
                mouseDrag: true,
            },
            1220: {
                touchDrag: false,
                mouseDrag: true,
            },
        }
    });
});