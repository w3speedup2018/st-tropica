"use strict";Shopify.theme.mobileMenu={init:function(i){var e=$(".mobile-menu__toggle"),t=$(".mobile-menu .close-dropdown");e.on("click",function(){$(this).toggleClass("is-active"),$("body").toggleClass("mobile-menu--opened")}),t.on("click",function(){var s=$(this).parents(".has-submenu").find(".submenu__input").attr("id");$(".mobile-menu .submenu__input:not(#"+s+")").not(this).prop("checked",!1)}),Shopify.theme.jsHeader.enable_sticky===!0&&this.enableSticky()},enableSticky:function(i){var e=this,t=$("#mobile-header");t.addClass("sticky--enabled"),t.sticky({wrapperClassName:"header-sticky-wrapper",zIndex:40,topSpacing:i||0}).on("sticky-start",function(){e.enable_overlay===!0&&e.sectionUnderlayIsImage()===!0?(t.parent().addClass("has-overlaid-header"),e.disableOverlayStyle()):e.enable_overlay===!0&&e.disableOverlayStyle()}).on("sticky-end",function(){setTimeout(function(){t.sticky("update")},250),e.$el.find(".sticky-menu-wrapper").removeClass("is-visible"),e.$menuToggle.removeClass("is-active"),e.enable_overlay===!0&&e.sectionUnderlayIsImage()===!0&&e.updateOverlayStyle(e.sectionUnderlayIsImage())})},disableSticky:function(){var i=$("#mobile-header");i.unstick(),i.removeClass("sticky--enabled"),setTimeout(function(){i.css("height","auto")},250)},unload:function(i){$(".mobile-menu .close-dropdown").off()}};
//# sourceMappingURL=/s/files/1/0818/8965/t/95/assets/z__jsMobileMenu.js.map?v=1647433214