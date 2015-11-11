

// function easeOutBounce (x) {
//         var base = -Math.cos(x * (0.5 * Math.PI)) + 1;
//         var rate = Math.pow(base,1.5);
//         var rateR = Math.pow(1 - x, 2);
//         var progress = -Math.abs(Math.cos(rate * (2.5 * Math.PI) )) + 1;
//         return (1- rateR) + (progress * rateR);
//       }

      // var timing,
      //   timingProps = {
      //     type: 'delayed',
      //     duration: 150,
      //     start: 'autostart',
      //     pathTimingFunction: Vivus.LINEAR,
      //     animTimingFunction: Vivus.LINEAR
      //   };

      var dominic = new Vivus('Layer_1', {
        type: 'async', //mapping
        pathTimingFunction: Vivus.EASE_OUT_BOUNCE,
        duration: 200,
        start: 'autostart',
        dashGap: 60,
        forceRender: false},

        function () {
          if (window.console) {
            console.log('Animation finished. [log triggered from callback]');
          }
        });
