let a = 6;
let result = ++a + a + a++ + ++a + a;

console.log("result=" + result);

/* ++a được gọi là toán tử tăng tiền tố. Khi gặp ++a, giá trị của a sẽ tăng lên 1 đơn vị trước khi sử dụng nó trong phép tính. Vì vậy, sau khi gặp ++a, giá trị của a sẽ trở thành 7.
a++ được gọi là toán tử tăng hậu tố. Khi gặp a++, giá trị của a sẽ được sử dụng trong phép tính trước khi tăng lên 1 đơn vị. Vì vậy, sau khi gặp a++, giá trị của a sẽ là 7 trong phép tính, nhưng sau đó nó sẽ tăng lên 1 đơn vị, trở thành 8 để sử dụng trong các phép tính tiếp theo. */

/* Giải thích sự khác nhau giữa ++a và a++:

++a tăng giá trị của a lên trước khi sử dụng nó trong biểu thức.
a++ sử dụng giá trị hiện tại của a trong biểu thức trước khi tăng giá trị của a lên. */