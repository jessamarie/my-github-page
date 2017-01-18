(function () {

  'use strict';

  angular
  .module('app.main.controller', [])
  .controller('MainController', MainController);

  /* @ngInject */
  function MainController() {

    var vm = this;

    vm.mainOptions = {

      // navigation
      menu: '#menu',
      anchors: ['home', 'about', 'projects', 'contact'],
      navigation: true,
      navigationPosition: 'right',
      navigationColor: '#000',
      navigationTooltips: [],
      showActiveTooltip: false,
      slidesNavigation: false,
      slidesNavPosition: 'bottom',
      // lockAnchors: true,

      // scrolling
      css3: true,
      scrollingSpeed: 700,
      autoScrolling: true,
      fitToSection: true,
      fitToSectionDelay: 1000,
      // scrollBar: false,
      // easing: 'easeInQuart', //requires jquery.easings.min.js
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
      normalScrollElements: null,
      scrollOverflow: false,
      scrollOverflowReset: false,
      scrollOverflowOptions: null,
      touchSensitivity: 15,
      normalScrollElementTouchThreshold: 5,
      bigSectionsDestination: null,

      // Accessibility
      keyboardScrolling: true,
      animateAnchor: true,
      recordHistory: true,

      // design
      controlArrows: true,
      // controlArrowColor: '#fff',
      verticalCentered: true,
      // resize: true,
      sectionsColor: ['#FFFFFF', '#D94E67', '#FFFFFF', '#D94E67'],
      paddingTop: 0,
      paddingBottom: 0,
      fixedElements: null,
      responsiveWidth: 0,
      responsiveHeight: 0,
      responsiveSlides: false,

      // custom selectors
      sectionSelector: '.section',
      slideSelector: '.slide',

      lazyLoading: true,

      // events
      afterLoad: null,
      onLeave: null,
      afterRender: null,
      afterResize: null,
      afterReBuild: null,
      afterSlideLoad: null,
      onSlideLeave: null

      /*
      onLeave: function(index, nextIndex, direction){},
      afterLoad: function(anchorLink, index){},
      afterRender: function(){},
      afterResize: function(){},
      afterResponsive: function(isResponsive){},
      afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
      onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
      */
    };

  }

})();
