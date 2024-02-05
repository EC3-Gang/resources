---
title: Base32
---

# Base32 (encoding)
Base32 is an encoding method based on the base-32 number system that uses an alphabet of 32 digits, each of which represents a different combination of 5 bits ($2^5$). It is not as common as hexadecimal but finds applications in various encoding scenarios. Since each base32 digit represents five bits, it allows for a more compact representation of binary data compared to base64.

Since base32 is not very widely adopted, the question of notation—which characters to use to represent the 32 digits—is not as settled as in the case of more well-known numeral systems (such as hexadecimal), though RFCs (like [RFC 4648](https://tools.ietf.org/html/rfc4648)) and unofficial and de-facto standards exist. One way to represent Base32 numbers in human-readable form (base32hex as defined in [RFC 4648 §7](https://datatracker.ietf.org/doc/html/rfc4648#section-7)) is using digits 0–9 followed by the twenty-two upper-case letters A–V.

::: warning
Base32 encoding is not the same as base32hex encoding. Base32hex encoding uses the same 32 characters as base32 encoding but with a different sorting order. Base32hex is not covered in this article.
:::

## Conversion as per §6

Below are [RFC 4648](https://tools.ietf.org/html/rfc4648) compliant implementations of base32 encoding in Python and JavaScript (see [RFC 4648 §6](https://datatracker.ietf.org/doc/html/rfc4648#section-6) and [RFC 3548](https://datatracker.ietf.org/doc/html/rfc3548)). This uses an alphabet of A–Z, followed by 2–7. The digits 0, 1 and 8 are skipped due to their similarity with the letters O, I and B (thus "2" has a decimal value of 26).

::: code-group

```python
import base64
print(base64.b32encode(b'Hello World!').decode('utf-8'))
```

```js
const base32 = require('hi-base32');

console.log(base32.encode('Hello World!'));
```
:::

