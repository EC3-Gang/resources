---
title: Hexadecimal
---

# Hexadecimal
Hexadecimal is a base-16 number system that uses sixteen digits: 0-9 and A-F. It is commonly used in computing to represent binary-coded values more concisely. Each hexadecimal digit represents four bits, allowing for a more compact representation of binary data.

In the hexadecimal system, the digits 0-9 represent values 0-9, and the letters A-F represent values 10-15. Hexadecimal is often used in programming for memory addresses, color codes, and other low-level data representations.

## Conversion
While most programming languages provide built-in functions for converting between decimal and hexadecimal, here's how you can implement it yourself:

### For the enthusiasts

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

### For the time-conscious
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