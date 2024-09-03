const originalPositions = [];
let footerDetail;
let footerMap;
let footerService;
let detailSmallDevice;
let originalContainer;
footerDetail = document.querySelector(".footer-details");
detailSmallDevice = document.querySelector(".footer-details-small-device");
originalContainer = document.querySelector(".footer-main");
footerMap = document.querySelector(".footer-map");
footerService = document.querySelector(".footer-service");

document.querySelectorAll('.div_box').forEach(divBox => {
    const gridImg = divBox.querySelector('#grid_img');
    if (gridImg) {
        originalPositions.push({ parent: divBox, element: gridImg, nextSibling: gridImg.nextSibling });
    }
});

function newImgOrder() {
    if (window.innerWidth <= 674) {
        document.querySelectorAll('.div_box').forEach(divBox => {
            const gridImg = divBox.querySelector('#grid_img');
            if (gridImg) {
                divBox.insertBefore(gridImg, divBox.firstChild);
            }
        });
    } else {
        originalPositions.forEach(({ parent, element, nextSibling }) => {
            parent.insertBefore(element, nextSibling);
        });
    }

    if (window.innerWidth <= 850) {
        footerDetail.remove();
        detailSmallDevice.appendChild(footerDetail);
        footerDetail.style.width = "100%";
        detailSmallDevice.style.padding = "1rem";
        originalContainer.classList.add("hr-grey");
    }
    else {
        footerDetail.remove();
        originalContainer.prepend(footerDetail);
        footerDetail.style.width = "";
        detailSmallDevice.style.padding = "";
        originalContainer.classList.remove("hr-grey");
    }

    if (window.innerWidth <= 530) {
        footerMap.remove();
    }
    else {
        footerService.insertAdjacentElement('afterend',footerMap);
    }
}

window.addEventListener('resize', newImgOrder);

// Initial call to set the correct order based on the current window size
newImgOrder();

var prevScrollPos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    // Scrolling up, show the navbar
    document.querySelector("header").style.top = "0";
  } else {
    // Scrolling down, hide the navbar
    document.querySelector("header").style.top = "-90px"; // Adjust the value as needed
  }
  prevScrollPos = currentScrollPos;
};