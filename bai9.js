let a = 5;
let b= “5”;
console.log(a==b);  // True
console.log(a===b); // False
console.log(a!=b);  // False
console.log(a!==b); //True
/* Dòng console.log(a == b); sử dụng toán tử so sánh == để kiểm tra xem giá trị của a có bằng giá trị của b hay không. Trong trường hợp này, giá trị của a là số 5 và giá trị của b là chuỗi "5". Toán tử == thực hiện chuyển đổi kiểu tự động và so sánh giá trị, nên kết quả là true.*/
/*Dòng console.log(a === b); sử dụng toán tử so sánh === để kiểm tra xem giá trị và kiểu dữ liệu của a có bằng giá trị và kiểu dữ liệu của b hay không. Trong trường hợp này, a là số nguyên và b là chuỗi. Vì kiểu dữ liệu không giống nhau, kết quả là false.
Dòng console.log(a != b); sử dụng toán tử so sánh != để kiểm tra xem giá trị của a có khác giá trị của b hay không. Giống như trường hợp trên, toán tử != cũng thực hiện chuyển đổi kiểu tự động và so sánh giá trị, nên kết quả là false.
Dòng console.log(a !== b); sử dụng toán tử so sánh !== để kiểm tra xem giá trị và kiểu dữ liệu của a có khác giá trị và kiểu dữ liệu của b hay không. Vì a và b có kiểu dữ liệu khác nhau, kết quả là true.*/
