const PI = 3.14;
var banKinh = parseFloat(prompt("Nhập bán kính của hình tròn:"));

var chuVi = 2 * PI * banKinh;
var dienTich = PI * banKinh * banKinh;

console.log("Chu vi của hình tròn là: " + chuVi);
console.log("Diện tích của hình tròn là: " + dienTich);