---
title: Decimal
---

# Decimal

Decimal is a base-10 number system that uses ten digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, and 9. It is the most commonly used number system in everyday life. In the decimal system, each digit represents powers of 10.

Each digit takes up 3.32 bits.

## Conversion

Converting to decimal from other bases involves multiplying each digit by the base raised to the power of its position and then summing the results.

### From Binary

The rough logic for converting a binary number to decimal is as follows:

$$
\begin{align*}
\text{Let } b &= \text{the binary number to convert} \\
\text{Let } \text{decimal} &= 0 \\
\text{For } i &= 0 \text{ to } \text{length of } b - 1 \\
\text{decimal} &+= \mathrm{b_i} \times 2^i \\
\text{Return } \text{decimal}
\end{align*}
$$

::: code-group

```python
def binary_to_decimal(binary: str) -> int:
    decimal = 0
    binary = binary[::-1]
    for i in range(len(binary)):
        decimal += int(binary[i]) * (2 ** i)
    return decimal

print(binary_to_decimal("1010"))  # 10
```

```js
function binaryToDecimal(binary) {
    let decimal = 0;
    binary = binary.split("").reverse().join("");
    for (let i = 0; i < binary.length; i++) {
        decimal += parseInt(binary[i]) * Math.pow(2, i);
    }
    return decimal;
}

console.log(binaryToDecimal("1010")); // 10
```

```cpp
#include <iostream>
#include <cmath>
using namespace std;

int binaryToDecimal(string binary) {
    int decimal = 0;
    reverse(binary.begin(), binary.end());
    for (int i = 0; i < binary.length(); i++) {
        decimal += (binary[i] - '0') * pow(2, i);
    }
    return decimal;
}

int main() {
    cout << binaryToDecimal("1010") << endl; // 10
}
```

```rust
fn binary_to_decimal(binary: &str) -> i32 {
    let mut decimal = 0;
    let reversed_binary: String = binary.chars().rev().collect();
    for (i, digit) in reversed_binary.chars().enumerate() {
        if digit == '1' {
            decimal += 2i32.pow(i as u32);
        }
    }
    decimal
}

fn main() {
    println!("{}", binary_to_decimal("1010")); // 10
}
```

:::

### From Octal

$$
\begin{align*}
\text{Let } o &= \text{the octal number to convert} \\
\text{Let } \text{decimal} &= 0 \\
\text{For } i &= 0 \text{ to } \text{length of } o - 1 \\
\text{decimal} &+= \mathrm{o_i} \times 8^i \\
\text{Return } \text{decimal}
\end{align*}
$$


::: code-group

```python
def octal_to_decimal(octal: str) -> int:
    decimal = 0
    octal = octal[::-1]
    for i in range(len(octal)):
        decimal += int(octal[i]) * (8 ** i)
    return decimal

print(octal_to_decimal("24"))  # 20
```

```js
function octalToDecimal(octal) {
    let decimal = 0;
    octal = octal.split("").reverse().join("");
    for (let i = 0; i < octal.length; i++) {
        decimal += parseInt(octal[i]) * Math.pow(8, i);
    }
    return decimal;
}

console.log(octalToDecimal("24")); // 20
```

```cpp
#include <iostream>
#include <cmath>
using namespace std;

int octalToDecimal(string octal) {
    int decimal = 0;
    reverse(octal.begin(), octal.end());
    for (int i = 0; i < octal.length(); i++) {
        decimal += (octal[i] - '0') * pow(8, i);
    }
    return decimal;
}

int main() {
    cout << octalToDecimal("24") << endl; // 20
}
```

```rust
fn octal_to_decimal(octal: &str) -> i32 {
    let mut decimal = 0;
    let reversed_octal: String = octal.chars().rev().collect();
    for (i, digit) in reversed_octal.chars().enumerate() {
        decimal += (digit.to_digit(10).unwrap() as i32) * 8i32.pow(i as u32);
    }
    decimal
}

fn main() {
    println!("{}", octal_to_decimal("24")); // 20
}
```

:::


### From Hexadecimal

$$
\begin{align*}
\text{Let } h &= \text{the hexadecimal number to convert} \\
\text{Let } \text{decimal} &= 0 \\
\text{For } i &= 0 \text{ to } \text{length of } h - 1 \\
\text{If } \mathrm{h_i} &\text{ is a digit} \\
\text{decimal} &+= \mathrm{h_i} \times 16^i \\
\text{Else} \\
\text{decimal} &+= (\mathrm{h_i} - 55) \times 16^i \\
\text{Return } \text{decimal}
\end{align*}
$$


::: code-group

```python
def hexadecimal_to_decimal(hexadecimal: str) -> int:
		decimal = 0
		hexadecimal = hexadecimal[::-1]
		for i in range(len(hexadecimal)):
				if hexadecimal[i].isdigit():
						decimal += int(hexadecimal[i]) * (16 ** i)
				else:
						decimal += (ord(hexadecimal[i].upper()) - 55) * (16 ** i)
		return decimal

print(hexadecimal_to_decimal("A"))  # 10

```

```js
function hexadecimalToDecimal(hexadecimal) {
		let decimal = 0;
		hexadecimal = hexadecimal.split("").reverse().join("");
		for (let i = 0; i < hexadecimal.length; i++) {
				if (hexadecimal[i].match(/[0-9]/)) {
						decimal += parseInt(hexadecimal[i]) * Math.pow(16, i);
				} else {
						decimal += (hexadecimal[i].toUpperCase().charCodeAt(0) - 55) * Math.pow(16, i);
				}
		}
		return decimal;
}

console.log(hexadecimalToDecimal("A")); // 10
```

```cpp
#include <iostream>
#include <cmath>
using namespace std;

int hexadecimalToDecimal(string hexadecimal) {
		int decimal = 0;
		reverse(hexadecimal.begin(), hexadecimal.end());
		for (int i = 0; i < hexadecimal.length(); i++) {
				if (isdigit(hexadecimal[i])) {
						decimal += (hexadecimal[i] - '0') * pow(16, i);
				} else {
						decimal += (toupper(hexadecimal[i]) - 55) * pow(16, i);
				}
		}
		return decimal;
}

int main() {
		cout << hexadecimalToDecimal("A") << endl; // 10
}
```

```rust
fn hexadecimal_to_decimal(hexadecimal: &str) -> i32 {
		let mut decimal = 0;
		let reversed_hexadecimal: String = hexadecimal.chars().rev().collect();
		for (i, digit) in reversed_hexadecimal.chars().enumerate() {
				if digit.is_digit(10) {
						decimal += digit.to_digit(10).unwrap() as i32 * 16i32.pow(i as u32);
				} else {
						decimal += (digit.to_ascii_uppercase() as u8 - 55) as i32 * 16i32.pow(i as u32);
				}
		}
		decimal
}

fn main() {
		println!("{}", hexadecimal_to_decimal("A")); // 10
}
```

:::