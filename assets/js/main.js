(function () {
  var onLoad = function () {
    var mobileMenuToggle = document.getElementById("mobile-menu-toggle");
    mobileMenuToggle.addEventListener("click", function () {
      toggleClass(mobileMenuToggle, "open");
    });
  };

  var hasClass = function (element, classNameSearch) {
    if (element.className.indexOf(classNameSearch) !== -1) {
      return true;
    } else {
      return false;
    }
  };

  var removeClass = function (element, className) {
    element.className = element.className.replace(className, "").trim();
  };

  var addClass = function (element, className) {
    removeClass(element);
    element.className += " " + className;
  };

  toggleClass = function (element, className) {
    console.log(element, className);
    if (hasClass(element, className)) {
      removeClass(element, className);
    } else {
      addClass(element, className);
    }
  };

  document.addEventListener("DOMContentLoaded", onLoad);
})();
