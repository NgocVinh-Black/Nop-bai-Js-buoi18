//Khởi tạo mảng lưu trữ số n khi bấm vào thêm số
var arrSoN = [];
document.getElementById("txtThemSo").onclick = function () {
  var soN = document.getElementById("txtThemSoN").value * 1;
  arrSoN.push(soN);
  document.getElementById("txtChuoiTS").innerHTML = `${arrSoN}`;
};

//Tính tổng số dương khi bấm tính tổng
//Xác định số > 0 và tính tổng
document.getElementById("txtTinhTong").onclick = function () {
  var tongSoDuong = 0;
  for (var i = 0; i < arrSoN.length; i++) {
    if (arrSoN[i] >= 0) {
      tongSoDuong += arrSoN[i];
    }
  }
  document.getElementById(
    "txtKetQua"
  ).innerHTML = `Tổng số dương là: ${tongSoDuong}`;
};

//Đếm số dương
//Xác định số > 0 và đếm số lượng
document.getElementById("txtDemSo").onclick = function () {
  var demSoDuong = 0;
  for (var i = 0; i < arrSoN.length; i++) {
    if (arrSoN[i] >= 0) {
      demSoDuong++;
    }
  }
  document.getElementById(
    "txtKetQua"
  ).innerHTML = `Tổng số dương đếm được là: ${demSoDuong}`;
};

//Tìm số nhỏ nhất
//Sắp xếp tăng dần và lấy giá trị đầu tiên là giá trị nhỏ nhất
document.getElementById("txtSoNhoNhat").onclick = function () {
  var newArrSoN = arrSoN.sort(function (a, b) {
    return a - b;
  });
  var soNhoNhat = newArrSoN[0];
  document.getElementById(
    "txtKetQua"
  ).innerHTML = `Số nhỏ nhất là: ${soNhoNhat}`;
};

//Tìm số dương nhỏ nhất
//Sắp xếp tăng dần và lấy số lớn > 0 đầu tiên là giá trị số dương nhỏ nhất
document.getElementById("txtSoDuongNhoNhat").onclick = function () {
  var arrCacSoDuong = [];
  for (var i = 0; i < arrSoN.length; i++) {
    if (arrSoN[i] >= 0) {
      arrCacSoDuong.push(arrSoN[i]);
    }
  }
  if (arrCacSoDuong.length === 0) {
    document.getElementById(
      "txtKetQua"
    ).innerHTML = `Không có số dương trong mảng`;
  } else {
    var newArrCacSoDuong = arrCacSoDuong.sort(function (a, b) {
      return a - b;
    });
    var soDuongNhoNhat = newArrCacSoDuong[0];
    document.getElementById(
      "txtKetQua"
    ).innerHTML = `Số dương nhỏ nhất là: ${soDuongNhoNhat}`;
  }
};

//Tìm số chẵn cuối cùng
//xét mảng tìm mảng mới chứa số chẵn và lấy phần tử cuối cùng trong mảng mới
document.getElementById("txtTimSoChan").onclick = function () {
  var arrSoChan = [];
  for (var i = 0; i < arrSoN.length; i++) {
    if (arrSoN[i] % 2 == 0) {
      arrSoChan.push(arrSoN[i]);
    }
  }
  if (arrSoChan === 0) {
    document.getElementById(
      "txtKetQua"
    ).innerHTML = `Không có số chẵn trong mảng`;
  } else {
    var soChanCuoiCung = arrSoChan.pop();
    document.getElementById(
      "txtKetQua"
    ).innerHTML = `Số chẵn cuối cùng là: ${soChanCuoiCung}`;
  }
};

//Đổi chỗ
//Xác định vị trí 1 và vị trí 2 nằm trong chiều dài chuỗi N và vị trí 1 nhỏ hơn vị trí 2
//Tạo biến tạm thời và lưu trữ đổi chỗ vị trí 1 vs 2
document.getElementById("txtDoiCho").onclick = function () {
  var viTri1 = document.getElementById("txtViTri1").value * 1;
  var viTri2 = document.getElementById("txtViTri2").value * 1;
  var bienTamThoi = 0;
  if (
    arrSoN[0] <= viTri1 &&
    viTri1 <= arrSoN.length &&
    arrSoN[0] <= viTri2 &&
    viTri2 <= arrSoN.length &&
    viTri1 < viTri2
  ) {
    for (var i = 0; i < arrSoN.length; i++) {
      bienTamThoi = arrSoN[viTri1];
      arrSoN[viTri1] = arrSoN[viTri2];
      arrSoN[viTri2] = bienTamThoi;
    }
    document.getElementById(
      "txtKetQua"
    ).innerHTML = `Chuỗi sau khi đổi chỗ là: ${arrSoN}`;
  } else {
    document.getElementById("txtKetQua").innerHTML = `Nhập sai dữ liệu`;
  }
};

//Sắp xếp tăng dần
document.getElementById("txtSapXep").onclick = function () {
  var newArrSoN = arrSoN.sort(function (a, b) {
    return a - b;
  });
  document.getElementById(
    "txtKetQua"
  ).innerHTML = `Sắp xếp tăng dần: ${newArrSoN}`;
};

//Tìm số nguyên tố đầu tiên
function timSoNguyenTo(i){
  if (i<2) return !1;
  for (var r = 2; r <= Math.sqrt(i); r++) if (i % r == 0) return !1;
  return !0;
}
document.getElementById("txtTimSoNguyenTo").onclick = function () {
  for (var i = -1, r = 0; r < arrSoN.length; r++){
    if (timSoNguyenTo(arrSoN[r])){
      i = arrSoN[r];
      break
    }
  }
  if (-1 !== i) {
    document.getElementById("txtKetQua").innerHTML = "Số nguyên tố đầu tiên: " +i;
  } else {
    document.getElementById("txtKetQua").innerHTML = "không có số nguyên tố";
  }
};

//Tìm số nguyên
var arrNhapSo = [];
document.getElementById("txtThemSoNguyen").onclick = function () {
  var soN9 = document.getElementById("txtNhapSo").value * 1;
  arrNhapSo.push(soN9);
  document.getElementById("txtKetQuanew").innerHTML = `${arrNhapSo}`;
};
document.getElementById("txtDemSoNguyen").onclick = function () {
  var demSoNguyen = 0;
  for (var i = 0; i < arrNhapSo.length; i++) {
    if (Number.isInteger(arrNhapSo[i]) === true) {
      demSoNguyen++;
    }
  }
  document.getElementById(
    "txtKetQua"
  ).innerHTML = `Tổng số nguyên đếm được là: ${demSoNguyen}`;
};

//So sánh số lượng số âm và số dương
document.getElementById("txtSoSanh").onclick = function () {
  var demSoDuong10 = 0;
  var demSoAm10 = 0;
  for (var i = 0; i < arrSoN.length; i++) {
    if (arrSoN[i] >= 0) {
      demSoDuong10++;
    } else {
      demSoAm10++;
    }
  }
  if (demSoDuong10 > demSoAm10) {
    document.getElementById("txtKetQua").innerHTML = `Số dương > Số âm`;
  } else if (demSoDuong10 < demSoAm10) {
    document.getElementById("txtKetQua").innerHTML = `Số dương < Số âm`;
  } else {
    document.getElementById("txtKetQua").innerHTML = `Số dương = Số âm`;
  }
};
