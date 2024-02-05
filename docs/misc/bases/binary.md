---
title: Binary
---

# Binary

Binary is a base-2 number system that uses only two digits: 0 and 1, and are used by computers to store and process data. In the binary system, each digit, known as a "bit" (short for binary digit), can only be either 0 or 1.

These binary digits are combined to represent numerical values and form the basis for encoding complex information within computers. Understanding how to convert between decimal (base-10) and binary is crucial for working with low-level data and programming.


## Conversion from decimal

Here's some math explaining the rough idea behind converting a decimal number to binary:

$$
\begin{align*}
\text{Let } n &= \text{the decimal number to convert} \\
\text{Let } \text{binary} &= \text{empty string} \\
\text{While } n &> 0 \\
\text{binary} &= (n \mod 2) + \text{binary} \\
n &= \lfloor n / 2 \rfloor \\
\text{Return } \text{binary}
\end{align*}
$$


Most languages do have inbuilt functions to convert between binary and decimal, but if you were to do implement it yourself, here's how you would do it:

### For the bored

::: code-group

```python Python
def decimal_to_binary(decimal: int) -> str:
	binary = ""
	while decimal > 0:
		binary = str(decimal % 2) + binary
		decimal = decimal // 2
	return binary	

print(decimal_to_binary(10)) # 1010
```

```js JavaScript
function decimalToBinary(decimal) {
	let binary = "";
	while (decimal > 0) {
		binary = (decimal % 2) + binary;
		decimal = Math.floor(decimal / 2);
	}
	return binary;
}

console.log(decimalToBinary(10)); // 1010
```

```cpp C++
#include <iostream>
#include <string>
using namespace std;

string decimalToBinary(int decimal) {
	string binary = "";
	while (decimal > 0) {
		binary = to_string(decimal % 2) + binary;
		decimal /= 2;
	}
	return binary;
}

int main() {
	cout << decimalToBinary(10) << endl; // 1010
}
```

```rust Rust
fn decimal_to_binary(decimal: i32) -> String {
	let mut binary = String::new();
	let mut decimal = decimal;
	while decimal > 0 {
		binary = format!("{}{}", decimal % 2, binary);
		decimal /= 2;
	}
	binary
}

fn main() {
	println!("{}", decimal_to_binary(10)); // 1010
}
```
:::


### For the not-so-bored

You can, of course, use the inbuilt functions to convert between binary and decimal if you value your time:

::: code-group

```python Python
print(bin(10)) # 0b1010
```

```js JavaScript
console.log((10).toString(2)); // 1010
```

```cpp C++
#include <iostream>
#include <bitset>
using namespace std;

int main() {
	cout << bitset<4>(10) << endl; // 1010
}
```

```rust Rust
fn main() {
	println!("{:b}", 10); // 1010
}
```
:::

## Conversion from Octal

Here's a quick explanation of how you would convert from octal to binary:

Let's say we had an octal number $(o_n o_{n-1} \ldots o_2 o_1)_8$, where $o_i$ represents the $i$-th digit of the octal number. To convert this octal number to binary, we can use the following steps:

1. First, we need to convert each octal digit to its equivalent 3-bit binary representation:

$$
\begin{align*}
o_1 & : \text{Convert } o_1 \text{ to binary} \\
o_2 & : \text{Convert } o_2 \text{ to binary} \\
& \vdots \\
o_{n-1} & : \text{Convert } o_{n-1} \text{ to binary} \\
o_n & : \text{Convert } o_n \text{ to binary} \\
\end{align*}
$$

2. Concatenate the binary representations obtained in step 1 to form the binary equivalent of the octal number:

$$
(o_n o_{n-1} \ldots o_2 o_1)_8 = (b_nb_{n-1} \ldots b_2 b_1)_2
$$

Here's an example with specific values:

Let's convert the octal number $(352)_8$ to binary:

$$
\begin{align*}
o_1 &= 2 \quad \Rightarrow \quad b_1 = 010 \\
o_2 &= 5 \quad \Rightarrow \quad b_2 = 101 \\
o_3 &= 3 \quad \Rightarrow \quad b_3 = 011 \\
\end{align*}
$$

Now concatenate the binary representations:

$$
(352)_8 = (011101010)_2
$$

So, $(352)_8$ in octal is equivalent to $(011101010)_2$ in binary.

<br />
Luckily, most languages have inbuilt functions to convert between octal and binary, so you would have no need to implement it yourself:

::: code-group

```python Python
def octal_to_binary(octal: str) -> str:
	return bin(int(octal, 8))[2:]

print(octal_to_binary("12")) # 1010
```

```js JavaScript
function octalToBinary(octal) {
	return parseInt(octal, 8).toString(2);
}

console.log(octalToBinary("12")); // 1010
```

```cpp C++
#include <iostream>
#include <bitset>
using namespace std;

int main() {
	cout << bitset<4>(stoi("12", 0, 8)) << endl; // 1010
}
```

```rust Rust
fn main() {
	println!("{:b}", i32::from_str_radix("12", 8).unwrap()); // 1010
}
```
:::

## Conversion from Hexadecimal

Similarly, you can convert from hexadecimal to binary (duh) using the following steps:

Let's say you have a hexadecimal number $X_{16}$ with digits $x_n x_{n-1} \ldots x_2 x_1 x_0$. To convert this hexadecimal number to binary, you can use the following steps:

$$
\text{B}_{2} = \underbrace{b_n b_{n-1} \ldots b_2 b_1 b_0}_{\text{Binary representation}}
$$

The binary digits ($b_i$) are given by (cabrón if you don't know consider scrolling up):

$$
b_i = \begin{cases} 
0000 & \text{if } x_i = 0 \\
0001 & \text{if } x_i = 1 \\
0010 & \text{if } x_i = 2 \\
0011 & \text{if } x_i = 3 \\
0100 & \text{if } x_i = 4 \\
0101 & \text{if } x_i = 5 \\
0110 & \text{if } x_i = 6 \\
0111 & \text{if } x_i = 7 \\
1000 & \text{if } x_i = 8 \\
1001 & \text{if } x_i = 9 \\
1010 & \text{if } x_i = A \\
1011 & \text{if } x_i = B \\
1100 & \text{if } x_i = C \\
1101 & \text{if } x_i = D \\
1110 & \text{if } x_i = E \\
1111 & \text{if } x_i = F \\
\end{cases}
$$

So let's say you wanted to convert $420F$ to binary:

$$
\begin{align*}
4 & : 0100 \\
2 & : 0010 \\
0 & : 0000 \\
F & : 1111 \\
\end{align*}
$$

So, $420F$ in hexadecimal is equivalent to $0100001000001111$ in binary.


Likewise, most languages have inbuilt functions to convert between hexadecimal and binary:

::: code-group

```python Python
def hex_to_binary(hexadecimal: str) -> str:
	return bin(int(hexadecimal, 16))[2:]

print(hex_to_binary("420F"))
```

```js JavaScript
function hexToBinary(hexadecimal) {
	return parseInt(hexadecimal, 16).toString(2);
}

console.log(hexToBinary("420F"));
```

```cpp C++
#include <iostream>
#include <bitset>
using namespace std;

int main() {
	cout << bitset<16>(stoi("420F", 0, 16)) << endl;
}
```

```rust Rust
fn main() {
	println!("{:b}", i32::from_str_radix("420F", 16).unwrap());
}
```
:::
