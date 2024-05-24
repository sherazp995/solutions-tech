function windowScrollBtns() {
  if ($("#footer").length > 0) {
    var e = $(window).height();
    $(window).scrollTop() >= e
      ? ($("#windowScrollDown").stop().fadeOut(250),
        $("#windowScrollUp").stop().fadeIn(250))
      : ($("#windowScrollUp").stop().fadeOut(250),
        $("#windowScrollDown").stop().fadeIn(250));
  }
}
function equalHeights(e) {
  var n = 0;
  $(e).each(function () {
    $(this).height() > n && (n = $(this).height());
  }),
    $(e).css("min-height", n);
}
function menuFunc() {
  var e,
    n = $(window).width();
  $("#mainMenu").css("width", n + "px"),
    (e = n < 1300),
    $(window).on("resize", function () {
      (n = $(window).width()),
        (e = n < 1300),
        $("#mainMenu").css("width", n + "px");
    }),
    $("#mainMenuNew ul > li.hasSubMenu div > a").on(
      "click touchend",
      function (n) {
        if (e)
          return (
            $("#mainMenuNew ul > li.hasSubMenu").removeClass("active"),
            $(this).parents("li").hasClass("openSubMenu")
              ? $("#mainMenuNew ul > li.hasSubMenu").removeClass("openSubMenu")
              : ($("#mainMenuNew ul > li.hasSubMenu").removeClass(
                  "openSubMenu"
                ),
                $(this).parents("li").addClass("openSubMenu")),
            !1
          );
      }
    );
}
function setfilename(e) {
  var n = e.value;
  (filename = n.split("\\").pop().split("/").pop()),
    $(e).siblings(".fileFieldText").text(filename);
}
$(document).ready(function () {
  var e = $(window).height();
  $(window).innerWidth();
  $("#mainMenuLink").click(function () {
    return (
      $(this).toggleClass("active"),
      $(this).hasClass("active")
        ? ($(this).find("label").text("CLOSE"),
          $(this).parents("body").hasClass("homePage")
            ? $("html").addClass("overflowHidden")
            : $("html").addClass("overflowHiddenScroll"),
          $("#mainMenu").addClass("active"),
          $("#headerLang .formField").removeClass("darkStyle"))
        : ($(this).find("label").text("MENU"),
          $(this).parents("#header").hasClass("headerWhite") ||
            $("#headerLang .formField").addClass("darkStyle"),
          $("html").removeClass("overflowHiddenScroll"),
          $("#mainMenu").removeClass("active")),
      !1
    );
  }),
    $("#menuchatbtn").click(function () {
      return $("#mainMenuLink").click(), !1;
    }),
    $(".faqsSection h4, .faqsSection h5").click(function (e) {
      return (
        $(this).toggleClass("active"),
        $(this).next(".faqsContent").stop().slideToggle(300),
        !1
      );
    }),
    $(".ascentInfographicsNav li").click(function (e) {
      var n = $(this).attr("data-id");
      return (
        $(".ascentInfographicsNav li").removeClass("active"),
        $(this).addClass("active"),
        $(".ascentInfographicsContent").hide(0),
        $(n).show(0),
        !1
      );
    }),
    $(document).keyup(function (e) {
      "Escape" === e.key &&
        ($("#mainMenu,#mainMenuLink").removeClass("active"),
        $("#mainMenuLink").find("label").text("MENU"),
        $("#mainMenuLink").parents("#header").hasClass("headerWhite") ||
          $("#headerLang .formField").addClass("darkStyle"),
        $("#mainMenu").removeClass("active"),
        $("#header").removeClass("active"),
        setTimeout(function () {
          $("html").removeClass("overflowHiddenScroll");
        }, 300),
        $(".model-window").stop().fadeOut(300));
    }),
    $("#mainMenuNew ul li a").hover(function () {
      var e = $(this).attr("data-vector");
      return $(".menuVector").stop().fadeOut(500), $(e).stop().fadeIn(500), !1;
    }),
    $(".newMainBoxNav ul li").click(function () {
      $(this).parents(".newMainBoxNav").find("li").removeClass("active"),
        $(this).addClass("active");
      var e = $(this).attr("data-id");
      $(this)
        .parents(".newMainBox")
        .find(".newMainBoxContent")
        .removeClass("activeContent"),
        $(e).addClass("activeContent");
    }),
    $(".model-window").each(function () {
      $(this)
        .find(".model-content")
        .wrap('<div class="model-container"></div>');
    }),
    $(".open-model-window").click(function () {
      var e = $(this).attr("href");
      if ($(e).length) {
        $("html").addClass("overflowHiddenScroll");
        e = $(this).attr("href");
        $(e).stop().fadeIn(300);
      }
      return !1;
    }),
    $(".close-window, .model-overlay").click(function () {
      $(this).attr("href");
      return (
        $(".model-window").stop().fadeOut(300),
        setTimeout(function () {
          $("html").removeClass("overflowHiddenScroll");
        }, 300),
        !1
      );
    }),
    $("#globalOffices a").click(function () {
      if ($(this).hasClass("active")) return !1;
      $("#globalOffices a").removeClass("active"),
        $(this).addClass("active"),
        $(".globalOfficesText").hide(0);
      var e = $(this).attr("href");
      return (
        $('.globalOfficesText[data-id="' + e + '"]')
          .stop()
          .fadeIn(300),
        !1
      );
    }),
    $(".formField input,.formField textarea").each(function (e, n) {
      "" != $(this).val() && $(this).parents(".formField").addClass("filled");
    }),
    $(document).on(
      "focus",
      ".formField input,.formField textarea",
      function () {
        $(this).parents(".formField").addClass("focus");
      }
    ),
    $(document).on("blur", ".formField input,.formField textarea", function () {
      $(this).parents(".formField").removeClass("focus filled"),
        "" != $(this).val() && $(this).parents(".formField").addClass("filled");
    }),
    windowScrollBtns(),
    $(window).scroll(function () {
      windowScrollBtns();
    }),
    $("#windowScrollDown").click(function () {
      return (
        $("html,body")
          .stop()
          .animate({ scrollTop: e }, 500, function () {
            $("#windowScrollDown").fadeOut(500);
          }),
        !1
      );
    }),
    $("#windowScrollUp").click(function () {
      return (
        $("html,body")
          .stop()
          .animate({ scrollTop: 0 }, 1e3, function () {}),
        $("#windowScrollUp").fadeOut(500),
        !1
      );
    }),
    $(".loadMoreBtn").click(function () {
      var e = $(this).attr("data-load");
      return (
        $(e).children(".aboutUsBoxListIn").addClass("fadeInUp animated"),
        (showDataClass = e.replace(".", "")),
        $(e).removeClass(showDataClass),
        $(this).hide(0),
        !1
      );
    }),
    menuFunc(),
    equalHeights(".subProductsBoxes.digitalSelfService p"),
    equalHeights(".subProductsBoxes.digitalDealership p"),
    equalHeights(".subProductsBoxes.digitalFieldTeam p"),
    equalHeights(".subProductsBoxes.digitalFloorplan p"),
    equalHeights(".featureBenefitsMain.whyLeasePakCloud .featureBenefits h2"),
    $("#mainMenuNew ul li ul li a").on("click", function () {
      var e = $(this).attr("href").split("#");
      $("#" + e[1]).length > 0 && $("#mainMenuLink").click();
    });
}),
  $(window).resize(function () {});
var x,
  i,
  j,
  selElmnt,
  a,
  b,
  c,
  val = 17,
  menuCount = 0,
  menuStatus = !0,
  menuDragStatus = !0;
function menuScrollFunc() {
  jQuery("#mainMenuNavIn").draggable({
    drag: function (e, n) {
      var t = parseInt(Math.abs(n.position.left));
      if (1 == menuDragStatus && t > 50)
        return (
          n.originalPosition.left > n.position.left
            ? menuScrollDown()
            : menuScrollUp(),
          (menuDragStatus = !1),
          setTimeout(function () {
            menuDragStatus = !0;
          }, 300),
          !1
        );
    },
  }),
    $("#mainMenuNavIn").mousedown(function () {
      $(this).addClass("grabbing");
    }),
    $("#mainMenuNavIn").mouseup(function () {
      $(this).removeClass("grabbing");
    }),
    (document.onkeydown = checkKey),
    $("#mainMenuNavIn ul#mainUL").css({ transform: "translate(17vw,-50%)" }),
    $("#mainMenuNavIn").bind("mousewheel DOMMouseScroll", function (e, n) {
      return (
        1 == menuStatus &&
          (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0
            ? menuScrollUp()
            : menuScrollDown(),
          (menuStatus = !1),
          setTimeout(function () {
            menuStatus = !0;
          }, 500)),
        !1
      );
    });
}
function menuScrollUp() {
  if (menuCount >= 1) {
    menuCount--,
      (val += 50),
      $("#mainMenuNavIn ul#mainUL").css({
        transform: "translate(" + val + "vw,-50%)",
      });
    var e = $("#mainMenuNav ul li.centerItem");
    $("#mainMenuNav ul li.centerItem").removeClass("centerItem"),
      e.prev("li").addClass("centerItem");
    var n = e.prev("li").find("a").attr("data-vector");
    $(".menuVector").stop().fadeOut(500), $(n).stop().fadeIn(500);
  }
}
function menuScrollDown() {
  if (menuCount <= 5) {
    menuCount++,
      (val -= 50),
      $("#mainMenuNavIn ul#mainUL").css({
        transform: "translate(" + val + "vw,-50%)",
      });
    var e = $("#mainMenuNav ul li.centerItem");
    $("#mainMenuNav ul li.centerItem").removeClass("centerItem"),
      e.next("li").addClass("centerItem");
    var n = e.next("li").find("a").attr("data-vector");
    $(".menuVector").stop().fadeOut(500), $(n).stop().fadeIn(500);
  }
}
function checkKey(e) {
  "37" == (e = e || window.event).keyCode &&
  $("#mainMenuLink").hasClass("active")
    ? menuScrollUp()
    : "39" == e.keyCode &&
      $("#mainMenuLink").hasClass("active") &&
      menuScrollDown();
}
for (
  $(window).on("load", function () {
    $("#mainMenu").removeClass("hideWhileReady"),
      $("#privacyPolicy").addClass("active"),
      $("#hidePrivacyPolicy").click(function () {
        $("#privacyPolicy").removeClass("active");
      });
  }),
    x = document.getElementsByClassName("selectField"),
    i = 0;
  i < x.length;
  i++
) {
  for (
    selElmnt = x[i].getElementsByTagName("select")[0],
      (a = document.createElement("DIV")).setAttribute(
        "class",
        "select-selected"
      ),
      a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML,
      x[i].appendChild(a),
      (b = document.createElement("DIV")).setAttribute(
        "class",
        "select-items select-hide"
      ),
      j = 0;
    j < selElmnt.length;
    j++
  )
    ((c = document.createElement("DIV")).innerHTML =
      selElmnt.options[j].innerHTML),
      c.addEventListener("click", function (e) {
        var n, t, a, i, s;
        for (
          i = this.parentNode.parentNode.getElementsByTagName("select")[0],
            s = this.parentNode.previousSibling,
            t = 0;
          t < i.length;
          t++
        )
          if (i.options[t].innerHTML == this.innerHTML) {
            for (
              i.selectedIndex = t,
                s.innerHTML = this.innerHTML,
                n = this.parentNode.getElementsByClassName("same-as-selected"),
                a = 0;
              a < n.length;
              a++
            )
              n[a].removeAttribute("class");
            this.setAttribute("class", "same-as-selected");
            break;
          }
        s.click();
      }),
      b.appendChild(c);
  x[i].appendChild(b),
    a.addEventListener("click", function (e) {
      e.stopPropagation(),
        closeAllSelect(this),
        this.nextSibling.classList.toggle("select-hide"),
        this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(e) {
  var n,
    t,
    a,
    i = [];
  for (
    n = document.getElementsByClassName("select-items"),
      t = document.getElementsByClassName("select-selected"),
      a = 0;
    a < t.length;
    a++
  )
    e == t[a] ? i.push(a) : t[a].classList.remove("select-arrow-active");
  for (a = 0; a < n.length; a++)
    i.indexOf(a) && n[a].classList.add("select-hide");
}
document.addEventListener("click", closeAllSelect);
