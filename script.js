//Hàm Xóa lớp border-end và border-start cho thanh navbar
function removeBorderOnXs(id, className) {
    const element = document.getElementById(id);
    if (element && window.innerWidth < 576) {
      element.classList.remove(className);
    } else {
      element.classList.add(className);
    }
  }
  
  //Hàm Ẩn hiện border cho Certificate Section khi thay đổi kích thước màn hình
  function addBorderOnXs(id, className) {
    const element = document.getElementById(id);
    if (element && window.innerWidth < 576) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  }
  
  //Hàm bắt sự kiện ẩn hiện border của thanh navbar và certificate section
  function EventBorder(id, className) {
    window.addEventListener("load", function () {
      removeBorderOnXs(id, className);
    });
    window.addEventListener("resize", function () {
      removeBorderOnXs(id, className);
    });
  }
  
  //Hàm bắt sự kiện ẩn hiện border của certificate section
  function EventCer(id, className) {
    window.addEventListener("load", function () {
      addBorderOnXs(id, className);
    });
    window.addEventListener("resize", function () {
      addBorderOnXs(id, className);
    });
  }
  
  //Ẩn border của thanh navbar khi thay đổi kích thước màn hình
  EventBorder("navigation1", "border-end");
  EventBorder("navigation1", "border-start");
  EventBorder("navigation3", "border-end");
  EventBorder("navigation3", "border-start");
  EventBorder("navigation2", "border-end");
  EventBorder("navigation4", "border-end");
  
  //Ẩn hiện border cho Certificate Section khi thay đổi kích thước màn hình
  EventBorder("cer1", "border-end");
  EventCer("cer1", "border-bottom");
  
  var container = document.getElementById("subCertificate");
  var element = document.getElementById("cer0");
  var existingDiv = document.getElementById("cer3");
  window.addEventListener("resize", function () {
    if (element && window.innerWidth < 576) {
      // Xóa element lớp cer0 khi kích thước màn hình nhỏ hơn 576
      container.removeChild(element);
    } else if (element && window.innerWidth >= 576) {
      // Thêm element lớp cer0 trước element lớp cer3 khi kích thước màn hình nhỏ hơn 576
      container.insertBefore(element, cer3);
    }
  });
  window.addEventListener("load", function () {
    if (element && window.innerWidth < 576) {
      // Xóa element lớp cer0 khi kích thước màn hình nhỏ hơn 576
      container.removeChild(element);
    } else if (element && window.innerWidth >= 576) {
      // Thêm element lớp cer0 trước element lớp cer3 khi kích thước màn hình nhỏ hơn 576
      container.insertBefore(element, cer3);
    }
  });
  
  EventCer("cer2", "border-bottom");
  EventCer("cer2", "border-1");
  EventCer("cer2", "border-warning");
  
  //Hàm kiểm tra email có phù hợp không
  function isValidEmail(email) {
    // Biểu thức chính quy để kiểm tra định dạng email
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  }
  
  //Hiển thị thông tin cá nhân khi nhập email
  document.getElementById("Email").addEventListener("input", function (event) {
    // Lấy giá trị đã nhập vào ô input
    let email = event.target.value;
    if (isValidEmail(email)) {
      const submitButton = document.getElementById("submitButton");
      const displayParagraph = document.getElementById("Info");
      const sign = document.querySelector(".sign");
      submitButton.addEventListener("click", function () {
        // Hiển thị thẻ p khi nút "Gửi" được nhấp
        displayParagraph.classList.remove("d-none");
        sign.classList.add("d-none");
      });
    }
  });
  
  //Hiển thị thay đổi view less - view more khi nhấn nút để mở rộng cửa sổ
  document.addEventListener("DOMContentLoaded", function () {
    const titles = document.querySelectorAll("#viewMoreBtn");
  
    titles.forEach((title) => {
      title.addEventListener("click", function () {
        const button = this;
        if (button.getAttribute("aria-expanded") === "true") {
          button.textContent = "View Less";
        } else {
          button.textContent = "View More";
        }
      });
    });
  });