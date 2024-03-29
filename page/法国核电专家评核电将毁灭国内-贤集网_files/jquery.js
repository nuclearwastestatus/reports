(function($) {
    $.fn.lightbox_me = function(options) {
        return this.each(function() {
            var opts = $.extend({},
                    $.fn.lightbox_me.defaults, options),
                $overlay = $(),
                $self = $(this),
                $iframe = $('<iframe id="foo" style="z-index: ' + (opts.zIndex + 1) + ';border: none; margin: 0; padding: 0; position: absolute; width: 100%; height: 100%; top: 0; left: 0; filter: mask();"/>');
            if (opts.showOverlay) {
                var $currentOverlays = $(".js_lb_overlay:visible");
                if ($currentOverlays.length > 0) {
                    $overlay = $('<div class="lb_overlay_clear js_lb_overlay"/>')
                } else {
                    $overlay = $('<div class="' + opts.classPrefix + '_overlay js_lb_overlay"/>')
                }
            }
            $("body").append($self.hide()).append($overlay);
            if (opts.showOverlay) {
                setOverlayHeight();
                $overlay.css({
                    position: "absolute",
                    width: "100%",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: (opts.zIndex + 2),
                    display: "none"
                });
                if (!$overlay.hasClass("lb_overlay_clear")) {
                    $overlay.css(opts.overlayCSS)
                }
            }
            if (opts.showOverlay) {
                $overlay.fadeIn(opts.overlaySpeed,
                    function() {
                        setSelfPosition();
                        $self[opts.appearEffect](opts.lightboxSpeed,
                            function() {
                                setOverlayHeight();
                                setSelfPosition();
                                opts.onLoad()
                            })
                    })
            } else {
                setSelfPosition();
                $self[opts.appearEffect](opts.lightboxSpeed,
                    function() {
                        opts.onLoad()
                    })
            }
            if (opts.parentLightbox) {
                opts.parentLightbox.fadeOut(200)
            }
            $(window).resize(setOverlayHeight).resize(setSelfPosition).scroll(setSelfPosition);
            $(window).bind("keyup.lightbox_me", observeKeyPress);
            if (opts.closeClick) {
                $overlay.click(function(e) {
                    closeLightbox();
                    e.preventDefault
                })
            }
            $self.delegate(opts.closeSelector, "click",
                function(e) {
                    closeLightbox();
                    e.preventDefault()
                });
            $self.bind("close", closeLightbox);
            $self.bind("reposition", setSelfPosition);
            function closeLightbox() {
                var s = $self[0].style;
                if (opts.destroyOnClose) {
                    $self.add($overlay).remove()
                } else {
                    $self.add($overlay).hide()
                }
                if (opts.parentLightbox) {
                    opts.parentLightbox.fadeIn(200)
                }
                if (opts.preventScroll) {
                    $("body").css("overflow", "")
                }
                $iframe.remove();
                $self.undelegate(opts.closeSelector, "click");
                $self.unbind("close", closeLightbox);
                $self.unbind("repositon", setSelfPosition);
                $(window).unbind("resize", setOverlayHeight);
                $(window).unbind("resize", setSelfPosition);
                $(window).unbind("scroll", setSelfPosition);
                $(window).unbind("keyup.lightbox_me");
                opts.onClose()
            }
            function observeKeyPress(e) {
                if ((e.keyCode == 27 || (e.DOM_VK_ESCAPE == 27 && e.which == 0)) && opts.closeEsc) {
                    closeLightbox()
                }
            }
            function setOverlayHeight() {
                if ($(window).height() < $(document).height()) {
                    $overlay.css({
                        height: $(document).height() + "px"
                    });
                    $iframe.css({
                        height: $(document).height() + "px"
                    })
                } else {
                    $overlay.css({
                        height: "100%"
                    })
                }
            }
            function setSelfPosition() {
                var s = $self[0].style;
                $self.css({
                    left: "50%",
                    marginLeft: ($self.outerWidth() / 2) * -1,
                    zIndex: (opts.zIndex + 3)
                });
                if (($self.height() + 80 >= $(window).height()) && ($self.css("position") != "absolute")) {
                    var topOffset = $(document).scrollTop() + 40;
                    $self.css({
                        position: "absolute",
                        top: topOffset + "px",
                        marginTop: 0
                    })
                } else {
                    if ($self.height() + 80 < $(window).height()) {
                        if (opts.centered) {
                            $self.css({
                                position: "fixed",
                                top: "50%",
                                marginTop: ($self.outerHeight() / 2) * -1
                            })
                        } else {
                            $self.css({
                                position: "fixed"
                            }).css(opts.modalCSS)
                        }
                        if (opts.preventScroll) {
                            $("body").css("overflow", "hidden")
                        }
                    }
                }
            }
        })
    };
    $.fn.lightbox_me.defaults = {
        appearEffect: "fadeIn",
        appearEase: "",
        overlaySpeed: 250,
        lightboxSpeed: 300,
        closeSelector: ".close",
        closeClick: true,
        closeEsc: true,
        destroyOnClose: false,
        showOverlay: true,
        parentLightbox: false,
        preventScroll: false,
        onLoad: function() {},
        onClose: function() {},
        classPrefix: "lb",
        zIndex: 999,
        centered: false,
        modalCSS: {
            top: "40px"
        },
        overlayCSS: {
            background: "black",
            opacity: 0.3
        }
    }
})(jQuery);