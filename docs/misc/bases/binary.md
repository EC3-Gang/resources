---
title: Binary
---

# Binary

Binary is a base-2 number system that uses only two digits: 0 and 1, and are used by computers to store and process data. In the binary system, each digit, known as a "bit" (short for binary digit), can only be either 0 or 1.

These binary digits are combined to represent numerical values and form the basis for encoding complex information within computers. Understanding how to convert between decimal (base-10) and binary is crucial for working with low-level data and programming.


## Conversion

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