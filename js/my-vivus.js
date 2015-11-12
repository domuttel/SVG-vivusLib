      var dominic = new Vivus('firstname', {
        type: 'delayed', //mapping
        pathTimingFunction: Vivus.EASE_OUT_BOUNCE,
        duration: 150,
        delay: 1,
        start: 'autostart',
        dashGap: 5,
        forceRender: false},

        function () {
          if (window.console) {
            console.log('Animation finished. [log triggered from callback]');
          }
        });

      var dominic = new Vivus('chevron', {
        type: 'async', //mapping
        pathTimingFunction: Vivus.EASE_IN,
        duration: 100,
        start: 'autostart',
        dashGap: 10,
        forceRender: false},

        function () {
          if (window.console) {
            console.log('Animation finished. [log triggered from callback]');
          }
        });