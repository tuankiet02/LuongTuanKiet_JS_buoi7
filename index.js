
var mangDuLieu = [];
function themSoVaoMang() {
  var duLieu = document.getElementById("soN").value * 1;
  // mangDuLieu = [16.5, 16, 12, 19, 20, 19, 3];
  mangDuLieu.push(duLieu);

  document.getElementById("mangNguoiDungNhap").innerHTML = "👉" + mangDuLieu;
}

// ===Bai 1============
function tinhTongCacSoDuong() {
  var tongSoDuong = 0;
  for (var i = 0; i < mangDuLieu.length; i++) {
    if (mangDuLieu[i] > 0) {
      tongSoDuong += mangDuLieu[i];
    }
  }
  console.log(tongSoDuong);
  document.getElementById("tongCacSoDuong").innerHTML =
    "👉 Tổng số dương: " + tongSoDuong;
}

// ===Bai 2============
function demCacSoDuong() {
  var demCacSoDuong = 0;
  for (var i = 0; i < mangDuLieu.length; i++) {
    if (mangDuLieu[i] > 0) {
      demCacSoDuong++;
    }
  }
  document.getElementById("demSoDuong").innerHTML =
    "👉Số dương:" + demCacSoDuong;
}

// ===Bai 3============
function timSoNhoNhat() {
  var min = mangDuLieu[0];
  for (var i = 0; i < mangDuLieu.length; i++) {
    if (min > mangDuLieu[i]) {
      min = mangDuLieu[i];
    }
  }
  document.getElementById("timSoNhoNhat").innerHTML = "👉 Số nhỏ nhất:  " + min;
}

// ===Bai 4============
function timSoDuongNhoNhat() {
  var timSoDuongNhoNhat = 0;
  for (var i = 0; i < mangDuLieu.length; i++) {
    if ((timSoDuongNhoNhat == 0 ||timSoDuongNhoNhat > mangDuLieu[i]) && mangDuLieu[i] > 0) {
      timSoDuongNhoNhat = mangDuLieu[i];
    }
  }
  document.getElementById("timSoDuongNhoNhat").innerHTML = "👉 Số dương nhỏ nhất: " + timSoDuongNhoNhat;
}

// ===Bai 5============
function timSoChanCuoi() {
  var soChanCuoi = 0;
  var lastIndex = mangDuLieu.length - 1;

  for (var i = lastIndex; i > 0; i--) {
    if (mangDuLieu[i] % 2 == 0) {
      soChanCuoi = mangDuLieu[i];
      break;
    }
    if (mangDuLieu[i] % 2 != 0) {
      soChanCuoi = -1;
    }
  }

  document.getElementById("timSoChanCuoi").innerHTML =
    "👉 Số chẵn cuối cùng: " + soChanCuoi;
}

// ===Bai 6============
function hoanDoiViTri() {
  var viTri1 = document.getElementById("viTri1").value;
  var viTri2 = document.getElementById("viTri2").value;
  var bienTam = mangDuLieu[viTri1];

  mangDuLieu[viTri1] = mangDuLieu[viTri2];
  mangDuLieu[viTri2] = bienTam;
  document.getElementById("doiViTri").innerHTML ="👉 Mảng sau khi đổi:" + mangDuLieu;
}

// ===Bai 7============
function sapXepTangDan() {
  var mangDuLieu2 = [];
  for (var i = 0; i < mangDuLieu.length; i++) {
    var duLieu2 = parseInt(mangDuLieu[i], 10);
    mangDuLieu2.push(duLieu2);
  }
  document.getElementById("sapXepTangDan").innerHTML =
    "👉Mảng sau khi sắp xếp: " +
    mangDuLieu2.sort(function (a, b) {
      return a - b;
    });
}

// ===Bai 8============
function xacDinhNguyenTo() {
  var ketQua = 0;
  var soNguyenTo = 0;

  for (var z = 0; z < mangDuLieu.length; z++) {
    soNguyenTo = 0;
    for (var j = 1; j <= mangDuLieu[z]; j++) {
      if (mangDuLieu[z] % j == 0) {
        soNguyenTo++;
      }
    }
    if (soNguyenTo == 2) {
      ketQua = mangDuLieu[z];
      break;
    } else {
      ketQua = -1;
    }
  }

  document.getElementById("timSoNguyenTo").innerHTML =
    "👉Số nguyên tố đầu tiên: " + ketQua;
}

// ===Bai 9============
function demCacSoNguyen() {
  var demSoNguyen = 0;
  for (var i = 0; i < mangDuLieu.length; i++)
    if (Number.isInteger(mangDuLieu[i])) {
      demSoNguyen++;
    }
  document.getElementById("nhapSoThuc").innerHTML =
    "👉Số nguyên: " + demSoNguyen;
}

// ===Bai 10============
function soSanhAmDuong() {
  var soDuong = 0;
  var soAm = 0;
  for (var i = 0; i < mangDuLieu.length; i++) {
    if (mangDuLieu[i] > 0) {
      soDuong++;
    } else {
      soAm++;
    }
  }
  if (soDuong > soAm) {
    document.getElementById("soSanhAmDuong").innerHTML =
      "👉Số dương > Số âm";
  } else {
    document.getElementById("soSanhAmDuong").innerHTML =
      "👉Số âm > Số dương";
  }
}
