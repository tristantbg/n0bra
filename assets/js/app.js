/* globals $:false */
var width = $(window).width(),
    height = $(window).height(),
    $slider,
    isMobile = false,
    $root = '/';
$(function() {
    var app = {
        init: function() {
            $(window).resize(function(event) {});
            $(document).ready(function($) {
                $body = $('body');
                $landing = $("#landing");
                $contributors = $('#contributors');
                $stockists = $('#stockists, #filter-overlay, #buy');
                $contact = $('#contact');
                $(document).keyup(function(e) {
                    //esc
                    if (e.keyCode === 27) {
                        $contributors.removeClass('visible');
                        $stockists.removeClass('visible');
                        $contact.removeClass('visible');
                        $('.menu-dot').removeClass('active');
                    }
                });
                $body.on('click', '[event-target="contributors"]', function(event) {
                    event.preventDefault();
                    if ($('#stockists').hasClass('visible')) {
                        $stockists.removeClass('visible');
                        $('.menu-dot.right').removeClass('active');
                    }
                    $(this).toggleClass('active');
                    $contributors.toggleClass('visible');
                });
                $body.on('click', '[event-target="stockists"]', function(event) {
                    event.preventDefault();
                    if ($contributors.hasClass('visible')) {
                        $contributors.removeClass('visible');
                        $('.menu-dot.left').removeClass('active');
                    }
                    $(this).toggleClass('active');
                    $stockists.toggleClass('visible');
                });
                $body.on('click', '[event-target="contact"]', function(event) {
                    event.preventDefault();
                    $contact.toggleClass('visible');
                });
                $body.on('click', '[event-target="landing"]', function(event) {
                    event.preventDefault();
                    $(this).fadeOut('300', function() {
                        $landing.addClass('hidden');
                        setTimeout(function() {
                            $landing.remove();
                        }, 800);
                    });
                });
                $('[event-target="landing"]').hover(function() {
                    $landing.removeClass('negative');
                }, function() {
                    $landing.addClass('negative');
                });
                $body.on('click', '#contact', function(event) {
                    if ($(event.target).is('a')) {
                        return;
                    }
                    $contact.removeClass('visible');
                });

                app.fullPager();
                $(window).load(function() {
                    $(".loader").fadeOut("fast");
                });
            });
        },
        sizeSet: function() {
            width = $(window).width();
            height = $(window).height();
            if (width <= 770 || Modernizr.touch) isMobile = true;
            if (isMobile) {
                if (width >= 770) {
                    //location.reload();
                    isMobile = false;
                }
            }
        },
        fullPager: function() {
            $('#wrapper').fullpage({
                //Navigation
                navigation: false,
                showActiveTooltip: false,
                slidesNavigation: false,
                slidesNavPosition: 'bottom',
                //Scrolling
                scrollingSpeed: 800,
                autoScrolling: true,
                scrollBar: false,
                //easing: 'easeInOutExpo',
                easingcss3: 'ease',
                loopBottom: false,
                loopTop: false,
                loopHorizontal: true,
                continuousVertical: false,
                continuousHorizontal: false,
                scrollHorizontally: false,
                interlockedSlides: false,
                dragAndMove: false,
                offsetSections: false,
                resetSliders: false,
                fadingEffect: false,
                normalScrollElements: '#contributors, #stockists, #buy',
                scrollOverflow: false,
                scrollOverflowReset: false,
                scrollOverflowOptions: null,
                touchSensitivity: 15,
                normalScrollElementTouchThreshold: 5,
                bigSectionsDestination: null,
                //Accessibility
                keyboardScrolling: true,
                animateAnchor: true,
                recordHistory: true,
                //Design
                controlArrows: true,
                responsiveWidth: 0,
                responsiveHeight: 0,
                responsiveSlides: false,
                //Custom selectors
                sectionSelector: 'section',
                slideSelector: 'none',
                lazyLoading: false,
                //events
                onLeave: function(index, nextIndex, direction) {
                    if (nextIndex > 1) {
                        $('.menu-dot').addClass('visible');
                    } else {
                        $('.menu-dot').removeClass('active visible');
                        $contributors.removeClass('visible');
                        $stockists.removeClass('visible');
                        $contact.removeClass('visible');
                    }

                },
                afterLoad: function(anchorLink, index) {
                  if (index == 3) {
                    $slider.flickity('playPlayer');
                  }
                },
                // afterRender: function() {},
                // afterResize: function() {},
                // afterResponsive: function(isResponsive) {},
                // afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {
                //     var nextLoad = $('#overview .slide').eq(slideIndex + 1).find('img');
                //     nextLoad.addClass('lazyload');
                // },
                // onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {}
            });
            app.loadSlider();

        },

        loadSlider: function() {
            $slider = $('#overview-slider').flickity({
                cellSelector: '.slide',
                imagesLoaded: false,
                lazyLoad: false,
                setGallerySize: false,
                autoPlay: 1000,
                pauseAutoPlayOnHover: false,
                accessibility: true,
                wrapAround: true,
                prevNextButtons: true,
                pageDots: false,
                draggable: true
            });
            $slider.flickity('stopPlayer');
            flkty = $slider.data('flickity');
            $slider.on('staticClick.flickity', function(event, pointer, cellElement, cellIndex) {
                if (!cellElement) {
                    return;
                }
                app.goNext($slider);
            });
        },
        goNext: function($slider) {
            if ($slider) {
                $slider.flickity('next', false);
            }
        },
        goPrev: function($slider) {
            if ($slider) {
                $slider.flickity('previous', false);
            }
        },
        loadContent: function(url, target) {
            $.ajax({
                url: url,
                success: function(data) {
                    $(target).html(data);
                }
            });
        },
        deferImages: function() {
            var imgDefer = document.getElementsByTagName('img');
            for (var i = 0; i < imgDefer.length; i++) {
                if (imgDefer[i].getAttribute('data-src')) {
                    imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-src'));
                }
            }
        }
    };
    app.init();
});