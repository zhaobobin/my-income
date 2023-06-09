function __dealCssEvent(a, f) {
  var c = a,
    b,
    d = this;
  function e(g) {
    if (g.target !== this) {
      return;
    }
    f.call(this, g);
    for (b = 0; b < c.length; b++) {
      d.off(c[b], e);
    }
  }
  if (f) {
    for (b = 0; b < c.length; b++) {
      d.on(c[b], e);
    }
  }
}
$.fn.animationEnd = function (a) {
  __dealCssEvent.call(this, ['webkitAnimationEnd', 'animationend'], a);
  return this;
};
$.fn.transitionEnd = function (a) {
  __dealCssEvent.call(this, ['webkitTransitionEnd', 'transitionend'], a);
  return this;
};
$(
  (function () {
    var r = {
      display: 'bottom',
      shadow: false,
      level: 1,
      rows: 4,
      Linkage: false,
      dataJson: '',
      height: 36,
      idDefault: false,
      splitStr: ' ',
      jsonName: 'name',
      jsonChild: 'child',
      jsonValue: 'value',
      header: '<div class="mPicker-header"></div>',
      footer:
        '<div class="mPicker-footer"><a href="javascript:;" class="mPicker-cancel">取消</a><a href="javascript:;" class="mPicker-confirm">确认</a></div>',
      confirm: function () {},
      cancel: function () {},
    };
    var h;
    var i = ['100%', '50%'];
    var j = $('body');
    var w = $('<div class="mPicker-mask hide"></div>');
    var c = $('<div class="mPicker hide"></div>');
    var u, k;
    if (!$('.mPicker').length) {
      j.append(c);
      c.append(w);
    }
    j.on('touchmove', function (x) {
      if (u) {
        x.stopPropagation();
      }
    });
    j.on(
      {
        touchstart: function (x) {
          u = 1;
        },
        touchmove: function (x) {
          clearTimeout(k);
          k = setTimeout(function () {
            u = 0;
          }, 100);
        },
        touchend: function (x) {
          u = 0;
        },
      },
      '.mPicker-main'
    );
    function v(y, x) {
      if (!y.length) {
        return false;
      }
      this.container = y;
      this.mpicker = $('.mPicker');
      this.mask = this.mpicker.find('.mPicker-mask');
      this.options = $.extend({}, r, x);
      this.init();
      this.event();
      this.container.data('mPicker', this);
    }
    v.prototype = {
      init: function (y, x) {
        this.middleRowIndex = parseInt(this.options.rows / 2.5);
        this.disy =
          this.options.display === 'bottom'
            ? 'mPicker-bottom down'
            : 'mPicker-modal';
        this.container.attr('readonly', true);
      },
      render: function () {
        var A;
        var E = [];
        var H;
        var D = this;
        E.push(D.options.dataJson);
        if (D.options.level >= 2) {
          var x = D.options.dataJson;
          for (var y = 2; y <= D.options.level; y++) {
            x = e.call(D, x[0]);
            E.push(x);
          }
        }
        A = q.call(D, E);
        H =
          '<div class="mPicker-main ' +
          D.disy +
          '" data-pickerId="' +
          D.pickerId +
          '">' +
          D.options.header +
          '<div class="mPicker-content">' +
          A +
          '</div><div class="mPicker-shadow"></div>' +
          D.options.footer +
          '</div>';
        D.mpicker.append(H);
        D.mpickerMain = D.mpicker.find('.mPicker-main');
        var z = D.mpickerMain.find('.mPicker-content');
        var B = D.mpickerMain.find('.mPicker-list');
        var C = B.find('ul');
        D.options.level > 1
          ? B.width((100 / D.options.level).toFixed(2) + '%')
          : false;
        B.append('<div class="mPicker-active-box"></div>');
        B.find('.mPicker-active-box').height(D.options.height);
        var G =
          D.options.rows % 2 === 0
            ? -D.options.height - 2 + 'px'
            : -D.options.height * 0.5 - 2 + 'px';
        z.find('.mPicker-active-box').css({ 'margin-top': G });
        var F = D.options.height * D.options.rows;
        z.height(F);
        B.height(F);
      },
      showPicker: function () {
        var z = this;
        z.render();
        var x = z.mpicker.find('.mPicker-list');
        z.container.focus();
        z.container.blur();
        z.mpicker.removeClass('hide');
        z.mask.removeClass('hide');
        clearTimeout(z.timer);
        z.timer = setTimeout(function () {
          z.mpickerMain.removeClass('down');
        }, 10);
        if (!z.noFirst && z.options.idDefault) {
          p.call(z);
        }
        var y = [];
        m(z.container, 0);
        x.each(function (B, C) {
          var A = z.container.data('id' + (B + 1))
            ? z.container.data('id' + (B + 1))
            : 0;
          y.push(A);
        });
        f.call(z, y);
      },
      hidePicker: function (y) {
        var x = this;
        x.mask.addClass('hide');
        if (x.options.display === 'bottom') {
          x.mpicker
            .find('.mPicker-main')
            .addClass('down')
            .transitionEnd(function () {
              x.mpicker.addClass('hide');
              x.mpicker.find('.mPicker-main').remove();
              if (typeof y === 'function') {
                var B = [];
                var z = [];
                var A = x.container.val();
                for (var C = 1; C <= x.options.level; C++) {
                  B.push(x.container.data('id' + C));
                  z.push(x.container.data('value' + C));
                }
                B = B.join(x.options.splitStr);
                z = z.join(x.options.splitStr);
                y.call(x, { values: z, ids: B, name: A });
              }
            });
          return false;
        }
        x.mpicker.addClass('hide');
        y.call(x);
        x.mpicker.find('.mPicker-main').remove();
      },
      updateData: function (y) {
        var z = this;
        if (!y.length) {
          return;
        }
        z.noFirst = false;
        for (var x = 0; x < z.options.level; x++) {
          z.container.data('id' + (x + 1), 0);
          z.container.data('value' + (x + 1), '');
        }
        z.options.dataJson = y;
        z.container.val('');
      },
      confirm: function () {
        var A = this;
        var y = '';
        var x = A.mpicker.find('.mPicker-main').find('.mPicker-list');
        var z = x.find('ul');
        A.noFirst = true;
        $.each(z, function (C, E) {
          var B = $(E).find('.active');
          var D = C === 0 ? '' : A.options.splitStr;
          if (B.length > 0) {
            C = C + 1;
            A.container.data('value' + C, B.data('value'));
            A.container.data('id' + C, B.data('id'));
            y += D + B.text();
          }
        });
        A.container.val(y);
        A.hidePicker(A.options.confirm);
      },
      cancel: function () {
        var x = this;
        x.hidePicker(x.options.cancel);
      },
      event: function () {
        var A = this;
        this.container
          .off('touchstart.container click.container')
          .on('touchstart.container click.container', function (C) {
            C.preventDefault();
            C.stopPropagation();
            var B = $(this);
            $('.mPicker').data('object', B.data('mPicker'));
            A.showPicker();
          });
        this.mpicker
          .off('touchstart.confirm click.confirm')
          .on(
            'touchstart.confirm click.confirm',
            '.mPicker-confirm',
            function (B) {
              B.preventDefault();
              var C = $('.mPicker').data('object');
              C.confirm();
            }
          );
        this.mpicker
          .off('touchstart.cancel click.cancel')
          .on(
            'touchstart.cancel click.cancel',
            '.mPicker-cancel',
            function (B) {
              B.preventDefault();
              var C = $('.mPicker').data('object');
              C.cancel();
            }
          );
        this.mpicker
          .off('touchstart.mask click.mask')
          .on('touchstart.mask click.mask', '.mPicker-mask', function (B) {
            B.preventDefault();
            var C = $('.mPicker').data('object');
            if (C.options.shadow) {
              C.cancel();
            }
          });
        var y;
        var x;
        var z;
        this.mpicker
          .off('touchstart.list mousedown.list')
          .on('touchstart.list mousedown.list', '.mPicker-list', function (B) {
            g(B);
            var D = $(this).find('ul');
            var C = a(D);
            y = n(B).y - C;
            o(0, D);
            h = true;
          });
        this.mpicker
          .off('touchmove.list mousemove.list')
          .on('touchmove.list mousemove.list', '.mPicker-list', function (E) {
            E.preventDefault();
            if (!h) {
              return false;
            }
            var I = $('.mPicker').data('object');
            g(E);
            var G;
            var F = $(this).find('ul');
            var C = F.height();
            var H = I.options.height * I.options.rows;
            var B = H - C - parseInt(I.options.rows / 2) * I.options.height;
            var D = I.middleRowIndex * I.options.height;
            x = n(E).y;
            z = x - y;
            G = Math.round(z);
            G = G > D ? D : G;
            G = G < B ? B : G;
            m(F, G);
            clearTimeout(I.timeTouchend);
            I.timeTouchend = setTimeout(function () {
              d.call(I, F);
            }, 100);
          });
        this.mpicker
          .off('touchend.list mouseup.list')
          .on('touchend.list mouseup.list', '.mPicker-list', function (B) {
            B.preventDefault();
            var D = $('.mPicker').data('object');
            var C = $(this).find('ul');
            d.call(D, C);
          });
      },
    };
    function n(x) {
      if (x.touches !== undefined) {
        return { x: x.touches[0].pageX, y: x.touches[0].pageY };
      }
      if (x.touches === undefined) {
        if (x.pageX !== undefined) {
          return { x: x.pageX, y: x.pageY };
        }
        if (x.pageX === undefined) {
          return { x: x.clientX, y: x.clientY };
        }
      }
    }
    function d(F) {
      clearTimeout(this.timeTouchend);
      var G = b.call(this, F);
      var B = G.target.data('id');
      var E = this.mpicker.find('.mPicker-list ul');
      var x = E.index(F);
      var A = E.length;
      if (this.options.Linkage && x < A - 1) {
        var D = this.options.dataJson[l(E, 0)];
        var C;
        for (var z = 2; z <= A; z++) {
          var y = e.call(this, D);
          if (z > x + 1) {
            C = t.call(this, y);
            E.eq(z - 1).html(C);
            b.call(this, E.eq(z - 1), 0);
            D = y[0];
          } else {
            D = y[l(E, z - 1)];
          }
        }
      }
      o(400, F);
      h = false;
    }
    function l(x, y) {
      return x.eq(y).find('li.active').data('id');
    }
    function p() {
      var A = this;
      var x = A.container.val().split(A.options.splitStr);
      var y = [];
      var C = [];
      var E;
      var F;
      var B = function (H, G) {
        $.each(H, function (I, J) {
          if (J[A.options.jsonName] == x[G]) {
            y[G] = I;
            C[G] = J[A.options.jsonValue];
            A.container.data('value' + (G + 1), C[G]);
            A.container.data('id' + (G + 1), y[G]);
            return false;
          }
        });
      };
      if (
        typeof x !== 'object' ||
        !x.length ||
        !A.mpicker.find('.mPicker-main')
      ) {
        return;
      }
      B(A.options.dataJson, 0);
      var D = A.options.dataJson;
      if (A.options.Linkage) {
        for (var z = 2; z <= A.options.level; z++) {
          if (y[z - 2]) {
            D = e.call(A, D[y[z - 2]]);
            B(D, z - 1);
          }
        }
        return;
      }
      for (var z = 2; z <= A.options.level; z++) {
        B(D[z - 1], z - 1);
      }
    }
    // 滚动放开后的事件
    function b(B, C) {
      var dataJson = this.options.dataJson;
      var x;
      var D = Math.round(a(B) / this.options.height);
      var z =
        typeof C === 'number'
          ? B.find('li').index(B.find('li[data-id="' + C + '"]'))
          : this.middleRowIndex - D;
      var A = -this.options.height * (z - this.middleRowIndex);
      m(B, A);
      B.find('li')
        .eq(z)
        .addClass('active')
        .siblings('li')
        .removeClass('active');
      x = { target: B.find('li').eq(z), index: z };
      var startdateDefaultText = '开始日期';
      var enddateDefaultText = '结束日期';
      var startdateHtml = $("#startdate").html();
      if (!startdateHtml) {
        $("#startdate").html(startdateDefaultText);
        $("#enddate").html(enddateDefaultText);
      }
      if (startdateHtml === startdateDefaultText) {
        $("#startdate").addClass('active').html(dataJson[z].name);
        $("#filter").attr('selected-start', dataJson[z].value);
      }
      if (startdateHtml && startdateHtml !== startdateDefaultText) {
        $("#enddate").addClass('active').html(dataJson[z].name);
        $("#filter").attr('selected-end', dataJson[z].value);
      }
      var startdateIndex;
      var enddateIndex;
      dataJson.forEach(function(item, index) {
        if (item.name === startdateHtml) {
          startdateIndex = index;
        }
        if (startdateHtml && startdateHtml !== startdateDefaultText && item.name === dataJson[z].name) {
          enddateIndex = index;
        }
      });
      if (enddateIndex !== undefined && enddateIndex < startdateIndex) {
        $("#enddate").html(startdateHtml);
        m(B, -this.options.height * (startdateIndex - this.middleRowIndex));
      }
      return x;
    }
    function f(z) {
      var C = this;
      var y = C.mpicker.find('.mPicker-list ul');
      var x = C.options.dataJson[z[0]];
      b.call(C, y.eq(0), z[0]);
      if (C.options.Linkage) {
        for (var A = 1; A < z.length; A++) {
          var B = z[A] || 0;
          x = s.call(C, y, A, B, x);
        }
        return;
      }
      for (var A = 1; A < z.length; A++) {
        var B = z[A] || 0;
        b.call(C, y.eq(A), B);
      }
    }
    function s(y, z, C, x) {
      var D = this;
      var A = e.call(D, x);
      var B = t.call(D, A);
      y.eq(z).html(B);
      b.call(D, y.eq(z), C);
      return A[C];
    }
    function e(y) {
      if (!y) {
        return [];
      }
      var z = this.options.jsonChild;
      var x = {}.hasOwnProperty.call(y, z) ? y[z] : [];
      return x;
    }
    function t(x) {
      var y = '';
      var z = this;
      $.each(x, function (B, D) {
        var A = D[z.options.jsonName];
        var C = D[z.options.jsonValue] || A;
        y += '<li data-value="' + C + '" data-id="' + B + '">' + A + '</li>';
      });
      return y;
    }
    function q(A) {
      var z = '';
      for (var y = 0; y < A.length; y++) {
        var x = t.call(this, A[y]);
        z += '<div class="mPicker-list"><ul>' + x + '</ul></div>';
      }
      return z;
    }
    function o(y, x) {
      x.css({
        '-webkit-transition-duration': y + 'ms',
        'transition-duration': y + 'ms',
      });
    }
    function g(x) {
      if (!x.touches) {
        x.touches = x.originalEvent.touches;
      }
    }
    function m(x, z) {
      x.css({
        '-webkit-transform': 'translateY(' + z + 'px)',
        transform: 'translateY(' + z + 'px)',
      });
    }
    function a(z) {
      var y = /\.*translateY\((.*)px\)/i;
      var x;
      if (z[0].style.WebkitTransform) {
        x = parseInt(y.exec(z[0].style.WebkitTransform)[1]);
      } else {
        if (z[0].style.transform) {
          x = parseInt(y.exec(z[0].style.transforms)[1]);
        }
      }
      return x;
    }
    $.fn.mPicker = function (x) {
      return this.each(function () {
        new v($(this), x);
      });
    };
  })()
);
