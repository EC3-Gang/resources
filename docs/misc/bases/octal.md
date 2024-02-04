---
title: Octal
---

# Octal

Octal is a base-8 number system that uses eight digits: 0, 1, 2, 3, 4, 5, 6, and 7. Octal numbers are commonly used in computing, especially in the Unix and Linux operating systems, for representing file permissions and other system-related values.

In the octal system, each digit represents powers of 8, similar to how each digit in the decimal system represents powers of 10. Octal is used less frequently than binary or hexadecimal in modern computing but is still relevant in certain contexts.

## Conversion

Converting between decimal (base-10) and octal can be done using various programming languages. Here's an example of how you can implement the conversion yourself:

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