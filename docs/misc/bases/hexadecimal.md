---
title: Hexadecimal
---

# Hexadecimal
Hexadecimal is a base-16 number system that uses sixteen digits: 0-9 and A-F. It is commonly used in computing to represent binary-coded values more concisely. Each hexadecimal digit represents four bits, allowing for a more compact representation of binary data.

In the hexadecimal system, the digits 0-9 represent values 0-9, and the letters A-F represent values 10-15. Hexadecimal is often used in programming for memory addresses, color codes, and other low-level data representations.

## Conversion from Decimal

1. Divide the decimal number by 16 and note down the remainder.  
2. Repeat Step 1 with the quotient until the quotient becomes 0.  
3. Convert each remainder to its hexadecimal equivalent.

For example, let's convert the decimal number 345 to hexadecimal:

1. $\frac{345}{16} = 21 \text{R} 9$

2. $\frac{21}{16} = 1 \text{R} 5$

3. Hexadecimal equivalents: $9 \rightarrow 9$, $5 \rightarrow 5$, $1 \rightarrow 1$

Therefore, $345_{10} = 159_{16}$



While most programming languages provide built-in functions for converting between decimal and hexadecimal, here's how you can implement it yourself:


::: code-group

```python
def decimal_to_hexadecimal(decimal: int) -> str:
    hexadecimal = ""
    while decimal > 0:
        remainder = decimal % 16
        if remainder < 10:
            hexadecimal = str(remainder) + hexadecimal
        else:
            hexadecimal = chr(ord('A') + remainder - 10) + hexadecimal
        decimal //= 16
    return hexadecimal

print(decimal_to_hexadecimal(30))  # 1E
```

```js
function decimalToHexadecimal(decimal) {
    let hexadecimal = "";
    while (decimal > 0) {
        const remainder = decimal % 16;
        if (remainder < 10) {
            hexadecimal = remainder + hexadecimal;
        } else {
            hexadecimal = String.fromCharCode('A'.charCodeAt(0) + remainder - 10) + hexadecimal;
        }
        decimal = Math.floor(decimal / 16);
    }
    return hexadecimal;
}

console.log(decimalToHexadecimal(30)); // 1E
```

```cpp
#include <iostream>
#include <sstream>
using namespace std;

string decimalToHexadecimal(int decimal) {
    stringstream ss;
    while (decimal > 0) {
        int remainder = decimal % 16;
        if (remainder < 10) {
            ss << remainder;
        } else {
            ss << char('A' + remainder - 10);
        }
        decimal /= 16;
    }
    string hexadecimal = ss.str();
    reverse(hexadecimal.begin(), hexadecimal.end());
    return hexadecimal.empty() ? "0" : hexadecimal;
}

int main() {
    cout << decimalToHexadecimal(30) << endl; // 1E
}
```

```rust
fn decimal_to_hexadecimal(decimal: i32) -> String {
    let mut hexadecimal = String::new();
    let mut decimal = decimal;
    while decimal > 0 {
        let remainder = decimal % 16;
        if remainder < 10 {
            hexadecimal = format!("{}{}", remainder, hexadecimal);
        } else {
            hexadecimal = format!("{}{}", (b'A' + remainder as u8 - 10) as char, hexadecimal);
        }
        decimal /= 16;
    }
    hexadecimal
}

fn main() {
    println!("{}", decimal_to_hexadecimal(30)); // 1E
}
```

:::

You can use the built-in functions to convert between decimal and hexadecimal:

::: code-group

```python
print(hex(30))  # 0x1e
```

```js
console.log((30).toString(16)); // 1e
```

```cpp
#include <iostream>
using namespace std;

int main() {
    cout << hex << 30 << endl; // 1e
}
```


```rust
fn main() {
    println!("{:x}", 30); // 1e
}
```

:::

## Conversion from Binary

Converting binary to hexadecimal involves grouping binary digits into sets of four, and then converting each group to its hexadecimal equivalent. Here are the steps expressed as equations:

Let's assume we have a binary number $B$ and a hexadecimal number $H$.

1. First, group the binary digits into sets of four starting from the rightmost side:
$$ B = b_{n}b_{n-1}b_{n-2}...b_{3}b_{2}b_{1}b_{0} $$

2. To find the number of groups, use the formula:
$$ \text{Number of groups} = \left\lceil \frac{n}{4} \right\rceil $$

3. Then, pad the leftmost group with zeros if necessary so that it contains four digits.

4. For each group of four binary digits, convert them to their equivalent hexadecimal value using the formula:
$$ H_i = \sum_{k=0}^{3} b_{i+k} \times 2^k $$

5. Finally, concatenate the hexadecimal values obtained from each group to get the hexadecimal representation of the binary number.

Let's break it down further with an example:
Suppose we have the binary number $10111011001010_2$ that we want to convert to hexadecimal.

1. Group the binary digits into sets of four:
$$ 10 \quad 1110 \quad 1100 \quad 1010 $$

2. Since there are 14 binary digits, we have $\left\lceil \frac{14}{4} \right\rceil = 4$ groups.

3. Pad the leftmost group with zeros:
$$ 0010 \quad 1110 \quad 1100 \quad 1010 $$

4. Convert each group to its hexadecimal equivalent:
$$ 2 \quad E \quad C \quad A $$

You may refer to the [next section](/misc/bases/conv-table.html) for the conversion table.

5. Concatenate the hexadecimal values:
$$ 2ECA_{16} $$

So, the binary number $101110110010101_2$ is equivalent to the hexadecimal number $2ECA_{16}$.


Here's how you would convert binary to hexadecimal in various programming languages:

::: code-group
```python
def binary_to_hexadecimal(binary: str) -> str:
		return hex(int(binary, 2))[2:]

print(binary_to_hexadecimal("10111011001010"))  # 2eca
```

```js
function binaryToHexadecimal(binary) {
		return parseInt(binary, 2).toString(16);
}

console.log(binaryToHexadecimal("10111011001010")); // 2eca
```

```cpp
#include <iostream>
#include <bitset>
using namespace std;

int main() {
		cout << hex << bitset<16>(stoi("10111011001010", 0, 2)).to_ulong() << endl; // 2eca
}
```

```rust
fn main() {
		let binary_number = "10111011001010"; // Change this value to the binary number you want to convert
		let decimal_number = i32::from_str_radix(binary_number, 2).unwrap(); // Convert binary to decimal
		let hexadecimal_number = format!("{:X}", decimal_number); // Convert decimal to hexadecimal
		println!("Binary {} is equivalent to Hexadecimal {}", binary_number, hexadecimal_number);
}
```
:::


## Conversion from Octal

Converting from octal to hexadecimal involves first converting the octal number to binary and then converting the binary number to hexadecimal:

1. Convert the octal number to binary.
2. Convert the binary number to hexadecimal.

Quite simple, isn't it?

Here's an example:

Let's convert the octal number $(352)_8$ to hexadecimal:

1. First, convert the octal number to binary:
$$ (352)_8 = (011101010)_2 $$

2. Then, convert the binary number to hexadecimal:
$$ (011101010)_2 = (7A)_{16} $$

So, $(352)_8$ in octal is equivalent to $(EA)_{16}$ in hexadecimal.


You can also implement the conversion in various languages (although not necessarily with the aforementioned steps):

::: code-group
```python
octal = "352"
binary = bin(int(octal, 8))[2:]
hexadecimal = hex(int(binary, 2))[2:]
print(hexadecimal)  # ea
```

```js
const octal = "352";
const binary = parseInt(octal, 8).toString(2);
const hexadecimal = parseInt(binary, 2).toString(16);
console.log(hexadecimal); // ea
```

```cpp
#include <iostream>
#include <sstream>
#include <iomanip>

int main() {
    // Input octal number
    std::string octalStr = "352";
    int decimal;
    std::istringstream(octalStr) >> std::oct >> decimal;

    // Convert decimal integer to hexadecimal string
    std::ostringstream hexStream;
    hexStream << std::hex << decimal;
    std::string hexStr = hexStream.str();

    // Output hexadecimal equivalent
    std::cout << "Hexadecimal equivalent: " << hexStr << std::endl;

    return 0;
}

```

```rust
fn main() {
    let octal_number = "377"; // Change this value to the octal number you want to convert
    let decimal_number = i32::from_str_radix(octal_number, 8).unwrap(); // Convert octal to decimal
    let hexadecimal_number = format!("{:X}", decimal_number); // Convert decimal to hexadecimal
    println!("Octal {} is equivalent to Hexadecimal {}", octal_number, hexadecimal_number);
}
```
:::