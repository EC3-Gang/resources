---
title: Octal
---

# Octal

Octal is a base-8 number system that uses eight digits: 0, 1, 2, 3, 4, 5, 6, and 7. Octal numbers are commonly used in computing, especially in the Unix and Linux operating systems, for representing file permissions and other system-related values. Each digit takes up $3$ bits.

In the octal system, each digit represents powers of 8, similar to how each digit in the decimal system represents powers of 10. Octal is used less frequently than binary or hexadecimal in modern computing but is still relevant in certain contexts.

## Conversion from Decimal

Converting between decimal (base-10) and octal can be done using various programming languages.

Here's some rough math explaining how it's done:

$$
\begin{align*}
\text{Let } n &= \text{the decimal number to convert} \\
\text{Let } \text{octal} &= \text{empty string} \\
\text{While } n &> 0 \\
\text{octal} &= (n \mod 8) + \text{octal} \\
n &= \lfloor n / 8 \rfloor \\
\text{Return } \text{octal}
\end{align*}
$$


Here's an example of how you can implement the conversion yourself:

### For the curious

::: code-group

```python
def decimal_to_octal(decimal: int) -> str:
    octal = ""
    while decimal > 0:
        octal = str(decimal % 8) + octal
        decimal = decimal // 8
    return octal

print(decimal_to_octal(20))  # 24
```

```js
function decimalToOctal(decimal) {
    let octal = "";
    while (decimal > 0) {
        octal = (decimal % 8) + octal;
        decimal = Math.floor(decimal / 8);
    }
    return octal;
}

console.log(decimalToOctal(20)); // 24
```

```cpp
#include <iostream>
#include <string>
using namespace std;

string decimalToOctal(int decimal) {
    string octal = "";
    while (decimal > 0) {
        octal = to_string(decimal % 8) + octal;
        decimal /= 8;
    }
    return octal;
}

int main() {
    cout << decimalToOctal(20) << endl; // 24
}
```

```rust
fn decimal_to_octal(decimal: i32) -> String {
    let mut octal = String::new();
    let mut decimal = decimal;
    while decimal > 0 {
        octal = format!("{}{}", decimal % 8, octal);
        decimal /= 8;
    }
    octal
}

fn main() {
    println!("{}", decimal_to_octal(20)); // 24
}
```
:::

### For the practical

::: code-group

```python
print(oct(20))  # 0o24
```

```js
console.log((20).toString(8)); // 24
```

```cpp
#include <iostream>
#include <bitset>
using namespace std;

int main() {
    cout << oct << 20 << endl; // 24
}
```

```rust
fn main() {
    println!("{:o}", 20); // 24
}
```
:::


## Conversion from Binary

Converting between binary (base-2) and octal can be done using various programming languages.

Once again, here's some math:

Say for example we have the binary number $110101011110_2$. We can split it into groups of $3$ bits from the right, padding with $0$s if necessary:

$$
\begin{align*}
\underbrace{110}_{\text{Group 1}} \ \underbrace{101}_{\text{Group 2}} \ \underbrace{011}_{\text{Group 3}} \ \underbrace{110}_{\text{Group 4}}
\end{align*}
$$

Then we can convert each group to its octal equivalent:

$$
\begin{align*}
\text{For Group 1: } (110)_2 = (\underline{6}_8) \\
\text{For Group 2: } (101)_2 = (\underline{5}_8) \\
\text{For Group 3: } (011)_2 = (\underline{3}_8) \\
\text{For Group 4: } (110)_2 = (\underline{6}_8) \\
\end{align*}
$$

As for how to convert each group to its octal equivalent:

$$
\begin{align*}
\text{Let } b_1b_2b_3 &= \text{the binary number to convert} \\
\text{Let } \text{octal} &= (b_1 \times 2^2) + (b_2 \times 2^1) + (b_3 \times 2^0) \\
\end{align*}
$$

After going through each group, we can concatenate the octal representations to get the final octal number:

$$
\begin{align*}
(110101011110)_2 = (6536)_8
\end{align*}
$$

Here's an example of how you would implement the conversion yourself:

::: code-group

```python
def binary_to_octal(binary: str) -> str:
		octal = ""
		binary = binary.zfill(3 * ((len(binary) + 2) // 3))
		for i in range(0, len(binary), 3):
				octal += str(int(binary[i:i + 3], 2))
		return octal

print(binary_to_octal("110101011110"))  # 6536
```

```js
function binaryToOctal(binary) {
		let octal = "";
		binary = binary.padStart(3 * Math.ceil(binary.length / 3), "0");
		for (let i = 0; i < binary.length; i += 3) {
				octal += parseInt(binary.slice(i, i + 3), 2);
		}
		return octal;
}

console.log(binaryToOctal("110101011110")); // 6536
```

```cpp
#include <iostream>
#include <bitset>
using namespace std;

string binaryToOctal(string binary) {
		string octal = "";
		binary = binary.insert(0, 3 - (binary.length() % 3), '0');
		for (int i = 0; i < binary.length(); i += 3) {
				octal += to_string(bitset<3>(binary.substr(i, 3)).to_ulong());
		}
		return octal;
}

int main() {
		cout << binaryToOctal("110101011110") << endl; // 6536
}
```

```rust
fn binary_to_octal(binary: &str) -> String {
		let mut octal = String::new();
		let binary = binary.chars().rev().collect::<String>().chars().rev().collect::<String>();
		let binary = format!("{:0>1$}", binary, 3 * ((binary.len() + 2) / 3));
		for i in (0..binary.len()).step_by(3) {
				octal.push_str(&format!("{}", u8::from_str_radix(&binary[i..i + 3], 2).unwrap()));
		}
		octal
}

fn main() {
		println!("{}", binary_to_octal("110101011110")); // 6536
}
```
:::

And of course, I'd understand if you'd rather use built-in functions:

::: code-group

```python
print(oct(int("110101011110", 2)))  # 0o6536
```

```js
console.log((parseInt("110101011110", 2)).toString(8)); // 6536
```

```cpp
#include <iostream>
#include <bitset>
using namespace std;

int main() {
		cout << oct << bitset<12>("110101011110").to_ulong() << endl; // 6536
}
```

```rust
fn main() {
		println!("{:o}", u16::from_str_radix("110101011110", 2).unwrap()); // 6536
}
```
:::

## Conversion from Hexadecimal

Converting between hexadecimal (base-16) and octal can also be done using various programming languages (shocker, I know).

But yes, before that, the math:

Let's say you have a hexadecimal number, $420AF_{16}$. To convert this hexadecimal number to octal, you can first convert it to binary, then convert the binary number to octal (you may refer to [the previous section](/misc/bases/binary.html#conversion-from-hexadecimal) as well):

$$
\begin{align*}
4 &\rightarrow 0100 \\
2 &\rightarrow 0010 \\
0 &\rightarrow 0000 \\
A &\rightarrow 1010 \\
F &\rightarrow 1111 \\
\end{align*}
$$

Then you can convert the binary number to octal (refer to the above section for the steps):

$$
\begin{align*}
(01000010000010101111)_2 &= (010)(000)(100)(101)(011)(111)_2 \\
&= (1020257)_8
\end{align*}
$$