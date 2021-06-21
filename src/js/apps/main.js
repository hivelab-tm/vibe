;(function (win, $) {
    // Global variable
    var screenSm = 768;

    var descriptionListSec3 = function() {
        var swiperDescriptionListSec3 = new Swiper('.js_description_list .swiper-container', {
            slidesPerView: 1,
            spaceBetween: 30,
            navigation: {
                prevEl: '.js_description_list .btn_slide_prev',
                nextEl: '.js_description_list .btn_slide_next'
            }
        });

        // Show/Hide navigator button
        swiperDescriptionListSec3.on('slideChange', function() {
            if (swiperDescriptionListSec3.activeIndex == 0) { // On the first slide
                $('.js_description_list .btn_slide_prev').hide();
                $('.js_description_list .btn_slide_next').show();
            } else if (swiperDescriptionListSec3.activeIndex == (swiperDescriptionListSec3.slides.length - 1)) { // Most right postion
                $('.js_description_list .btn_slide_prev').show();
                $('.js_description_list .btn_slide_next').hide();
            } else { // Middle positions
                $('.js_description_list .btn_slide_prev').show();
                $('.js_description_list .btn_slide_next').show();
            }
        });
    };

    var articleSec5 = function() {
        var settingMobile = {
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 16,
            initialSlide: 0,
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            }
        };

        var settingPC = {
            slidesPerView: 'auto',
            centeredSlides: true,
            spaceBetween: 40,
            initialSlide: 1,
            loop: false,
            navigation: {
                prevEl: '.js_article .btn_slide_prev',
                nextEl: '.js_article .btn_slide_next'
            }
        };


        var swiperArticleSec5;
        var init = false;

        function swiperMode() {
            var mobile = win.matchMedia('(max-width: 1279px)');

            // Init swiper
            if (mobile.matches) {
                if (!init) {
                    init = true;
                    swiperArticleSec5 = new Swiper('.js_article .swiper-container', settingMobile);
                } else {
                    swiperArticleSec5.destroy();
                    swiperArticleSec5 = new Swiper('.js_article .swiper-container', settingMobile);
                }
            } else {
                if (init) {
                    swiperArticleSec5.destroy();
                    swiperArticleSec5 = new Swiper('.js_article .swiper-container', settingPC);
                } else {
                    init = true;
                    swiperArticleSec5 = new Swiper('.js_article .swiper-container', settingPC);
                }
            }

            // Disable button
            function disableBtn() {
                // Disable Prev button
                if (!mobile.matches && swiperArticleSec5.activeIndex <= 1) {
                    $('.js_article .btn_slide_prev').addClass('swiper-button-disabled').prop('disabled', true);
                    swiperArticleSec5.allowSlidePrev = false;
                } else {
                    $('.js_article .btn_slide_prev').removeClass('swiper-button-disabled').prop('disabled', false);
                    swiperArticleSec5.allowSlidePrev = true;
                }
    
                // Disable Next button
                if (!mobile.matches && swiperArticleSec5.activeIndex >= (swiperArticleSec5.slides.length - 2)) {
                    $('.js_article .btn_slide_next').addClass('swiper-button-disabled').prop('disabled', true);
                    swiperArticleSec5.allowSlideNext = false;
                } else {
                    $('.js_article .btn_slide_next').removeClass('swiper-button-disabled').prop('disabled', false);
                    swiperArticleSec5.allowSlideNext = true;
                }
            }
            swiperArticleSec5.on('slideChange', disableBtn);
            disableBtn();
        }
        $(win).on('resize', swiperMode);
        swiperMode();
    };

    var challengeSec6 = function() {
        var swiperChallengeSec6;
        var init = false;

        function swiperMode() {
            var mobile = win.matchMedia('(max-width: 1279px)');

            if (mobile.matches) {
                if (!init) {
                    init = true;
                    swiperChallengeSec6 = new Swiper('.js_challenge .swiper-container', {
                        slidesPerView: 'auto',
                        centeredSlides: true,
                        spaceBetween: 32,
                        loop: true,
                        autoplay: {
                            disableOnInteraction: false
                        },
                        breakpoints : {
                            768: {
                                spaceBetween: 49
                            }
                        }
                    });
                }
            } else {
                if (init) {
                    swiperChallengeSec6.destroy();
                    init = false;
                }
            }
        }
        $(win).on('resize', swiperMode);
        swiperMode();
    };

    var rewardSec8 = function() {
        var swiperrewardSec8;
        var init = false;

        function swiperMode() {
            var mobile = win.matchMedia('(max-width: 1279px)');

            if (mobile.matches) {
                if (!init) {
                    init = true;
                    swiperrewardSec8 = new Swiper('.js_reward .swiper-container', {
                        slidesPerView: 'auto',
                        centeredSlides: true,
                        loop: true,
                        autoplay: {
                            disableOnInteraction: false
                        }
                    });
                }
            } else {
                if (init) {
                    swiperrewardSec8.destroy();
                    init = false;
                }
            }
        }
        $(win).on('resize', swiperMode);
        swiperMode();
    };

    var noticeTitle = function() {
        var swiperNoticeTitle = new Swiper(".js_notice_title .swiper-container", {
            direction: 'vertical',
            autoplay: true,
            speed: 500,
            loop: true
        });
    };

    var vidSource = function() {
        var $vid = $('.spot_bg video'),
            $vidSrc = $vid.find('source');

        if ($(win).outerWidth() < screenSm) {
            $vidSrc.attr('src', '../img/vid_spotlight.mp4');
        } else {
            $vidSrc.attr('src', '../img/vid_spotlight_pc.mp4');
        }

        // Load video
        $vid.get(0).load();

        // Play video
        var isPlaying = $vid.get(0).currentTime > 0 && !$vid.get(0).paused && !$vid.get(0).ended && $vid.get(0).readyState > $vid.get(0).HAVE_CURRENT_DATA;

        if (!isPlaying) {
            $vid.get(0).play();
        }
    };

    var spotHeight = function() {
        var $spot = $('.spot');

        var winHeight = null;

        function onResize() {
            winHeight = document.documentElement.clientHeight;

            $spot.css('height', winHeight);
        }
        $(win).on('resize', onResize);
        onResize();
    };

    var fullIframe = function() {
        var $spot = $('.spot'),
            $spotVid = $spot.find('.spot_bg video');

        var res = null;

        if ($(win).outerWidth() < screenSm) {
            res = 0.5625;
        } else {
            res = 1.778;
        }

        function onResize() {
            var h = $spot.outerHeight() + 100,
                w = $spot.outerWidth() + 100;

            if (res > w / h) {
                $spotVid.width(h * res).height(h);
            } else {
                $spotVid.width(w).height(w / res);
            }
        }
        $(win).on('resize', onResize);
        onResize();
    };

    var scrollNext = function() {
        function scrollNextFunc(currentSection, nextSection) {
            if($(nextSection).length) {
                $(currentSection).find('.js_btn_next').on('click', function() {
                    var nextSectionPostion = $(nextSection).offset().top;

                    $('html, body').stop().animate({
                        scrollTop: nextSectionPostion
                    }, {
                        duration: 800,
                        easing: 'easeInOutCubic'
                    });
                });
            }
        };

        scrollNextFunc('.spot', '.section1');
        scrollNextFunc('.section1', '.section2');
        scrollNextFunc('.section2', '.section3');
        scrollNextFunc('.section3', '.section4');
        scrollNextFunc('.section4', '.section6');
        scrollNextFunc('.section6', '.section8');
        scrollNextFunc('.section8', '.section5');
        scrollNextFunc('.section5', '.section7');
    };

    var headerStatus = function() {
        var $header = $('#header');
        
        var initPosition = null,
        headerHeight = $header.outerHeight();

        function onScroll() {
            initPosition = $(win).scrollTop();

            function headerBlack(section, boolean) {
                if ($(section).length) {
                    var sectionPosition = $(section).offset().top;
    
                    if (initPosition >= (sectionPosition - (headerHeight / 2))) {
                        if (boolean) {
                            $('body').addClass('is_black_header');
                        } else {
                            $('body').removeClass('is_black_header');
                        }
                    }
                }
            }

            headerBlack('.spot', false);
            headerBlack('.section1', false);
            headerBlack('.section2', true);
            headerBlack('.section3', false);
            headerBlack('.section4', true);
            headerBlack('.section5', true);
            headerBlack('.section6', true);
            headerBlack('.section7', true);
        }
        $(win).on('scroll', onScroll);
        onScroll();
    };

    var noteToggle = function() {
        var $btnNote = $('.js_btn_note');

        $btnNote.on('click', function() {
            $(this).parents('.note').toggleClass('is_opening');

            if ($(this).parents('.note').hasClass('is_opening')) {
                $(this).parents('.note').find('.note_content').stop().slideDown();
            } else {
                $(this).parents('.note').find('.note_content').stop().slideUp();
            }
        });
    };

    var floatingBanner = function() {
        var $banner = $('.js_floating_banner'),
            $content = $('#content'),
            $sectionBanner = $('.section7');

        var initPosition = null,
            winHeight = window.innerHeight;


        function onScroll() {
            var mobile = win.matchMedia('(max-width: 767px)');

            initPosition = $(win).scrollTop();

            if ($content.length) {
                if (mobile.matches) {
                    if (initPosition >= $content.offset().top && (initPosition + winHeight) <= $sectionBanner.offset().top) {
                        $banner.css('visibility', 'visible').stop().animate({
                            opacity: 1
                        }, 150);
                    } else {
                        $banner.stop().animate({
                            opacity: 0
                        }, 0, function() {
                            $banner.css('visibility', 'hidden');
                        });
                    }
                } else {
                    $banner.stop().animate({
                        opacity: 0
                    }, 0, function() {
                        $banner.css('visibility', 'hidden');
                    });
                }
            }
        }
        $(win).on('scroll resize', onScroll);
        onScroll();
    };


    $(document).ready(function() {
        spotHeight();
    });

    $(win).on('load', function() {
        descriptionListSec3();
        articleSec5();
        challengeSec6();
        rewardSec8();
        noticeTitle();
        vidSource();
        fullIframe();
        scrollNext();
        headerStatus();
        floatingBanner();
        noteToggle();
    });
})(window, window.jQuery);