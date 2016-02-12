// Application Scripts:

// Запускаем мобильное меню
// Фиксируем хидер при скролле
// Покажем - спрячем форму поиска в десктоп-меню по клику на кнопку
// Модальное окно
// Фильтры
// Календарь
// Слайдеры
// Фотогалерея
// Стилизация input[type=file]
// Если о плейсхолдерах не слышали

jQuery(document).ready(function ($) {
    //Кэшируем
    var $window = $(window),
        $html=$('html'),
        $body = $('body'),
        BREAKPOINT = 992;

    $body.append('<div id="overlay" class="overlay"></div>');//оверлей
    var $overlay = $('#overlay');

    //
    // Запускаем мобильное меню
    //---------------------------------------------------------------------------------------
    function initMobileMenu() {
        var $btn = $('.js-mtoggle'),
            $menu = $('.js-mmenu'),
            $submenu = $menu.find('.m-submenu');

        $menu.find('li').has('ul').children('a').addClass('has-menu');
        var $s_btn = $menu.find('.has-menu'); //заголовки суб-меню

        $('.header__main').on('click', '.js-mtoggle', function () {//покажем - спрячем
            if ($(this).hasClass('active')) {
                hideMenu();
            } else {
                showMenu();
            }
        });

        $menu.on('click', '.m-menu__label', hideMenu); //закроем по клику по заголовку

        function hideMenu() {
            $btn.removeClass('active');
            $menu.removeClass('active');
            hideSubMenu();
            $html.css('overflow', 'auto');
            $overlay.unbind('click', hideMenu).hide();
        }

        function showMenu() {
            $btn.addClass('active');
            $menu.addClass('active');
            $html.css('overflow', 'hidden');
            $overlay.show();
        }

        $menu.mouseleave(function () {//будем закрывать по клику на оверлей
            $overlay.bind('click', hideMenu)
        }).mouseenter(function () {
            $overlay.unbind('click', hideMenu);
        });


        $menu.on('click', '.has-menu', function (e) {//покажем - спрячем подменю
            e.preventDefault();
            var $el = $(this);
            if ($el.hasClass('active')) {
                hideSubMenu();
            } else {
                hideSubMenu();
                $el.addClass('active').parent('li').find('ul').slideDown();
            }
        });

        function hideSubMenu() {
            $s_btn.removeClass('active');
            $submenu.slideUp();
        }

        $menu.on('click', '[data-modal]', function (e) {//если в моб.меню есть ссылка на модальное окно - закроем меню, но вернем оверлей
            hideMenu();
            $overlay.show();
        });
    }
    initMobileMenu();
   

    //
    // Фиксируем хидер при скролле
    //---------------------------------------------------------------------------------------
    function stickyHeader() {
        var $header = $('.js-header');
        $header.wrap('<div class="header__wrap"></div>');
        var $wrap = $header.parent('div'),
            flag = false,
            activeClass = 'scrolled',
            topOffset = 48, //высота десктоп-меню
            isStick = verge.inViewport($wrap, -topOffset);

        //проверим скролл при загрузке страницы
        if (!isStick) {
            $header.addClass(activeClass);
            $wrap.addClass(activeClass);
            flag = true;
        }

        $window.on('scroll', function () {
            isStick = verge.inViewport($wrap, -topOffset);

            if (!isStick && !flag) {
                $header.addClass(activeClass);
                $wrap.addClass(activeClass);
                flag = true;
            }

            if (isStick && flag) {
                $header.removeClass(activeClass);
                $wrap.removeClass(activeClass);

                if ($header.hasClass('compact')) {//если открыта форма поиска в хидере - закроем
                    headerSearch.close();
                }

                flag = false;
            }
        });
    }
    stickyHeader();


    //
    // Выпадающее десктоп-меню
    //---------------------------------------------------------------------------------------
    var topMenu = (function () {
        var $menu = $('.js-menu'),
            $btn = $menu.children('li').children('a'),
            $submenu = $menu.find('.submenu'),
            method = {};

        $menu.find('li').has('ul').children('a').addClass('has-menu');

        $menu.on('click', '.has-menu', function (e) {
            e.preventDefault();
            if ($(this).hasClass('active')) {//кликаем по активному пункту - сворачиваем
                $submenu.slideUp();
                $btn.removeClass('active');
                $overlay.removeClass('half').unbind('click', method.close).hide();
            } else {//спрячем (если открыты) активные подменю, развернем текущее
                var $el = $(this);
                method.close();
                $el.addClass('active').parent('li').find('.submenu').slideDown();
                $overlay.addClass('half').show(); //накрыли контент оверлеем
            }
        });

        $menu.mouseleave(function () {//закроем подменю по клику на оверлей
            $overlay.bind('click', method.close);
        }).mouseenter(function () {
            $overlay.unbind('click', method.close);
        });

        if ($html.hasClass('lt-ie9')) {//плохой браузер
            $submenu.find('li:nth-child(3n)').addClass('last');
        }

        method.close = function () {
            $submenu.hide();
            $btn.removeClass('active');
            $overlay.removeClass('half').unbind('click', method.close).hide();
        }
        return method;
    })();
   

    //
    // Модальное окно
    //---------------------------------------------------------------------------------------
    var showModal = (function (link) {
        var
        method = {},
        $modal,
        $close;

        // добавим в документ
        $close = $('<a class="modal__close" href="#"><i class="icon-cancel"></i></a>'); //иконка закрыть


        $close.on('click', function (e) {
            e.preventDefault();
            method.close();
        });

        // центрируем окно
        method.center = function () {
            var top, left;

            top = Math.max($window.height() - $modal.outerHeight(), 0) / 2;
            left = Math.max($window.width() - $modal.outerWidth(), 0) / 2;

            $modal.css({
                top: top + $window.scrollTop(),
                left: left + $window.scrollLeft()
            });
        };


        // открываем
        method.open = function (link) {
            $modal = $(link);
            $modal.append($close);
            method.center();
            $window.bind('resize.modal', method.center);
            topMenu.close();//если открыто десктоп-субменю - закроем
            $modal.show();
            $overlay.show();
            $overlay.bind('click', method.close);
            method.resizeMap(link);
        };

        // закрываем
        method.close = function () {
            $modal.hide();
            $overlay.fadeOut('fast', function () {
                $overlay.unbind('click', method.close);
            });
            $window.unbind('resize.modal');
        };

        method.resizeMap = function (link) {//если в окне Гугл-карта - перерисуем ее после открытия
            var $map = $(link).find('.b-modal-map');
            if ($map.length) {
                google.maps.event.trigger(map, "resize");
            }
        }

        return method;
    }());

    // клик по кнопке с атрибутом data-modal - открываем модальное окно
    $('[data-modal]').on('click', function (e) {//передаем айди модального окна
        e.preventDefault();
        var link = $(this).data('modal');
        if (link) { showModal.open(link); }
    });

    //
    // Фильтры
    //---------------------------------------------------------------------------------------
    function initScroller() {//скроллер
        var options = {
            axis: "y",
            size: 10,
            sizethumb: 30,
            turnOffWheel: true,
            onScroll: function (percent, offset) { },
        }

        $('.js-scroll').each(function () {
            var current = '#' + $(this).attr('id');
            new Miniscroll(current, options);
        });
    }
    if($('.js-scroll').length){initScroller()}


    function initCheckboxList() {
        var $list = $('.js-checkbox-list'),
            $btn = $('.b-filter__label'),
            method = {};

        method.showList = function (el) {//раскроем контейнер
            el.addClass('active').parents('.b-filter').find('.b-filter__inner').slideDown('fast');
            el.parents('.b-filter').mouseleave(function () {
                $body.bind('click', method.hideAllLists);
            }).mouseenter(function () {
                $body.unbind('click', method.hideAllLists);
            });
        }

        method.hideList = function (el) {//скроем контейнер
            el.removeClass('active').parents('.b-filter').find('.b-filter__inner').slideUp('fast');
            $body.unbind('click', method.hideAllLists);
        }

        method.hideAllLists = function () {//скроем все контейнеры
            $btn.removeClass('active').parents('.b-filter').find('.b-filter__inner').slideUp('fast');
            $body.unbind('click', method.hideAllLists);
        }

        method.rewriteLabel = function (el) {//перепишем названия отмеченных пунктов
            $label = el.find('.b-filter__label'),
            $item=el.find('.b-filter__box'),
            info = '';

            $item.each(function () {
                if ($(this).hasClass('checked')) {
                    info = info + $(this).find('.b-filter__name').text() + ' ';
                }
            });
            $label.text(info);
        }

        method.showSubMenu = function (el) {//покажем суб-меню
            el.addClass('active').nextAll('.b-filter__list').slideDown('fast');
            el.children('i').removeClass('icon-plus-squared-alt').addClass('icon-minus-squared-alt');
        }

        method.hideSubMenu = function (el) {
            el.removeClass('active').nextAll('.b-filter__list').slideUp('fast');
            el.children('i').removeClass('icon-minus-squared-alt').addClass('icon-plus-squared-alt');
        }

        method.showAllSubMenu = function (block) {
            block.find('.b-filter__toggle').each(function () {
                var $el = $(this);
                method.showSubMenu($el);
            });
        }

        method.hideAllSubMenu = function (block) {
            block.find('.b-filter__toggle').each(function () {
                var $el = $(this);
                method.hideSubMenu($el);
            });
        }

        $list.each(function () {//старт - покажем чек-иконки, если инпут - чекед
            var $item = $(this).find('.b-filter__box'),
                $filter = $(this).parents('.b-filter');
                
            $item.each(function () {
                var $el=$(this),
                    $check = $el.find('input[type="checkbox"], input[type="radio"]');
                if ($check.is(':checked')) {
                    $el.addClass('checked');
                }
            });

            method.rewriteLabel($filter);
        });


        $btn.on('click', function () {//покажем - спрячем контейнер
            var $el = $(this);
            if ($el.hasClass('active')) {
                method.hideList($el);
            } else {
                method.hideAllLists();
                method.showList($el);
            }
        });


        $list.on('click', '.b-filter__box', function (e) {//клик по "чекбоксу" или "радио" в списке
            e.preventDefault();
            var $el = $(this),
                $check = $el.find('input[type="checkbox"]'),
                $radio=$el.find('input[type="radio"]'),
                $block = $el.parents('.b-filter');

            if ($check.length) {//если кликаем на чекбокс
                if ($el.hasClass('checked')) {
                    $el.removeClass('checked');
                    $check.prop('checked', false);
                } else {
                    $el.addClass('checked');
                    $check.prop('checked', true);
                }
            }

            if ($radio.length) {//если кликаем на радио
                if ($el.hasClass('checked')) {
                    return false;
                } else {
                    $block.find('.b-filter__box').removeClass('checked');
                    $el.addClass('checked');
                    $radio.prop('checked', true);
                }
            }

            method.rewriteLabel($block);
        });


        $list.on('click', '.b-filter__toggle', function () {//раскроем - скроем субменю по клику на "плюс (минус)"
            var $el = $(this);
            if ($el.hasClass('active')) {
                method.hideSubMenu($el);
            } else {
                method.showSubMenu($el);
            }
        });

        //поиск в списке
        function initSearchList() {
            $('.js-search-list').each(function () {
                var $list=$(this),
                    $input = $list.parents('.b-filter').find('.b-filter__search');

                $list.find('.b-filter__name').each(function () {
                    $(this).closest('.b-filter__item').attr('data-search-term', $(this).text().toLowerCase());
                });

                $input.on('keyup', function () {
                    method.showAllSubMenu($list);
                    var searchTerm = $(this).val().toLowerCase();
                    $list.find('.b-filter__item').each(function () {
                        if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
                            $(this).show().parents('.b-filter__item').show();
                        } else {
                            $(this).hide();
                        }
                    });
                });
            });
        }
        if($('.js-search-list').length){initSearchList()}

    }
    if ($('.js-checkbox-list').length) { initCheckboxList() }

    // Календарь
    function initCalendar() {
        moment.locale('uk');
        var picker_lang = {
            previousMonth: 'Попередній місяць',
            nextMonth: 'Наступний місяць',
            months: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'],
            weekdays: ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', "П'ятниця", 'Субота'],
            weekdaysShort: ['Нед', 'Пон', 'Вів', 'Сер', 'Чет', 'Птн', 'Суб']
        };

        var $label = $('.js-calendar').parents('.b-filter').find('.b-filter__label');

        var startDate,
        endDate,
        startPicker = new Pikaday({
            field: document.getElementById('start_date'),
            container: document.getElementById('start_holder'),
            format: 'L',
            firstDay: 1,
            yearRange: [2010, 2030],
            minDate: moment('2010-01-01'),
            maxDate: moment().toDate(),
            i18n: picker_lang,
            onSelect: function () {
                startDate = this.getDate();
                updateStartDate();
            }
        }),
        endPicker = new Pikaday({
            field: document.getElementById('end_date'),
            container: document.getElementById('end_holder'),
            format: 'L',
            firstDay: 1,
            yearRange: [2010, 2030],
            maxDate:moment().toDate(),
            i18n: picker_lang,
            onSelect: function () {
                endDate = this.getDate();
                updateEndDate();
            }
        });

        function updateEndDate() {
            startPicker.setMaxDate(moment(endDate).subtract(1, 'days'));
            rewriteLabel();
        };

        function updateStartDate() {
            endPicker.setMinDate(new Date(moment(startDate).add(1, 'days')));
            rewriteLabel();
        };

        function rewriteLabel() {//перепишем текст в ячейку
            var info = $('#start_date').val() + ' - ' + $('#end_date').val();
            $label.text(info);
        }

        function setStartDate() {
            startPicker.setDate(moment().subtract(1, 'month').toDate());
            endPicker.setDate(moment().toDate());
            rewriteLabel();
        }

        setStartDate();//установим интервал в 1 месяц по-умолчанию

        $('.js-calendar').on('click', '.b-date__btn--day', function () {//интервал в 1 день
            startPicker.setDate(moment().subtract(1, 'day').toDate());
            endPicker.setDate(moment().toDate());
            rewriteLabel();
        });

        $('.js-calendar').on('click', '.b-date__btn--week', function () {//интервал в 1 неделю
            startPicker.setDate(moment().subtract(1, 'week').toDate());
            endPicker.setDate(moment().toDate());
            rewriteLabel();
        });

        $('.js-calendar').on('click', '.b-date__btn--month', function () {//интервал в 1 неделю
            startPicker.setDate(moment().subtract(1, 'month').toDate());
            endPicker.setDate(moment().toDate());
            rewriteLabel();
        });

        $('.js-calendar').on('click', '.b-date__btn--clear', function () {//сброс дат
            startPicker.setDate(moment().subtract(1, 'days').toDate());
            endPicker.setDate(moment().toDate());
            $('#start_date').val('');
            $('#end_date').val('');
            rewriteLabel();
            $label.trigger('click');
        });
    };
    if ($('.js-calendar').length) { initCalendar() }


    //
    // Слайдеры
    //---------------------------------------------------------------------------------------
    function initSlider() {
        $('.js-slider').each(function () {
            var $slider = $(this),
                $prev = $slider.parent().find('.feed-slider__arrow--prev'),
                $next = $slider.parent().find('.feed-slider__arrow--next');

            getSliderSettings = function () {//будем показывать разное кол-во слайдов на разных разрешениях
                var setting,
                    settings1 = {
                        maxSlides: 1,
                    },
                    settings2 = {
                        maxSlides: 2,
                    },
                    settings3 = {
                        maxSlides: 3,
                    },
                    settings4 = {
                        maxSlides: 4,
                    },
                    settings5 = {
                        maxSlides: 5,
                    },
                    common = {
                        minSlides: 1,
                        moveSlides: 1,
                        slideWidth: 230,
                        slideMargin: 10,
                        auto: false,
                        pager: false,
                        controls:false,
                        infiniteLoop: false,
                    },
                    winW = $window.width();
                if (winW < 500) {
                    setting = $.extend(settings1, common);
                }
                if (winW >= 500 && winW < 800) {
                    setting = $.extend(settings2, common);
                }
                if (winW >= 800 && winW < 1100) {
                    setting = $.extend(settings3, common);
                }
                if (winW >= 1100 && winW < 1300) {
                    setting = $.extend(settings4, common);
                }
                if (winW >= 1300) {
                    setting = $.extend(settings5, common);
                }
                return setting;
            }
            $slider = $slider.bxSlider(getSliderSettings()); //запускаем слайдер

            $window.on('resize', function () {
                setTimeout(recalcSliderSettings, 500);
            });

            function recalcSliderSettings() {
                $slider.reloadSlider($.extend(getSliderSettings(), { startSlide: $slider.getCurrentSlide() }));
            }

            $prev.on('click', function () {
                $slider.goToPrevSlide();
            });

            $next.on('click', function () {
                $slider.goToNextSlide();
            });
        });
    }
    if ($('.js-slider').length) { initSlider() }


    //
    // Фотогалерея
    //---------------------------------------------------------------------------------------
    function initGallery() {
        $('.js-gallery a').lightbox({blur:false});
    }
    if ($('.js-gallery').length) { initGallery() }

    //
    // Стилизация input[type=file]
    //---------------------------------------------------------------------------------------
    function styleInputFile() {
        $('.js-inputfile').each(function () {
            var $input = $(this),
                $label = $input.next('label'),
                labelVal = $label.html();

            $input.on('change', function (e) {
                var fileName = '';

                if (this.files && this.files.length > 1)
                    fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
                else if (e.target.value)
                    fileName = e.target.value.split('\\').pop();

                if (fileName)
                    $label.find('span').html(fileName);
                else
                    $label.html(labelVal);
            });

            // Firefox bug fix
            $input
            .on('focus', function () { $input.addClass('has-focus'); })
            .on('blur', function () { $input.removeClass('has-focus'); });
        });
    }
    if($('.js-inputfile').length){styleInputFile()}

    //
    // Если о плейсхолдерах не слышали
    //---------------------------------------------------------------------------------------
    if (!Modernizr.input.placeholder) {

        $('[placeholder]').focus(function () {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
                input.val('');
                input.removeClass('placeholder');
            }
        }).blur(function () {
            var input = $(this);
            if (input.val() == '' || input.val() == input.attr('placeholder')) {
                input.addClass('placeholder');
                input.val(input.attr('placeholder'));
            }
        }).blur();
        $('[placeholder]').parents('form').submit(function () {
            $(this).find('[placeholder]').each(function () {
                var input = $(this);
                if (input.val() == input.attr('placeholder')) {
                    input.val('');
                }
            })
        });
    };

    
});
