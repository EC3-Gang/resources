---
title: Base64
---

# Base64 (Encoding)
Base64 is an encoding method based on the base-64 number system that uses an alphabet of 64 digits, each of which represents a different combination of 6 bits ($2^6$). It is commonly used in computing to represent binary data in a human-readable format. 

Base64 encoding is used in various scenarios, such as encoding binary data in email attachments, embedding images in HTML, and storing complex data in URLs (otherwise known as [Data URLs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs)).

As for why, the [official RFC](https://www.rfc-editor.org/rfc/rfc4648) does a pretty good job of explaining it:

> Base encoding of data is used in many situations to store or transfer data in environments that, perhaps for legacy reasons, are restricted to US-ASCII data. Base encoding can also be used in new applications that do not have legacy restrictions, simply because it makes it possible to manipulate objects with text editors.
>
> In the past, different applications have had different requirements and thus sometimes implemented base encodings in slightly different ways. Today, protocol specifications sometimes use base encodings in general, and "base64" in particular, without a precise description or reference. Multipurpose Internet Mail Extensions (MIME) is often used as a reference for base64 without considering the consequences for line-wrapping or non-alphabet characters. The purpose of this specification is to establish common alphabet and encoding considerations. This will hopefully reduce ambiguity in other documents, leading to better interoperability.

## Conversion

Below are [RFC 4648](https://tools.ietf.org/html/rfc4648) compliant implementations of base64 encoding in Python, JavaScript, and C++ (see [RFC 4648 §4](https://datatracker.ietf.org/doc/html/rfc4648#section-4)).

::: code-group
```python
import base64
print(base64.b64encode(b'Hello World!').decode('utf-8'))
```

```js
// Only available in Node.js
console.log(Buffer.from('Hello World!').toString('base64'));
```

```js
console.log(btoa('Hello World!'));
```

```cpp
#include <iostream>
#include <string>
#include <vector>
using namespace std;

string base64Encode(const string &input) {
		const string base64Chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
		string output = "";
		int i = 0;
		while (i < input.size()) {
				int byte1 = input[i++];
				int byte2 = (i < input.size()) ? input[i++] : 0;
				int byte3 = (i < input.size()) ? input[i++] : 0;
				int combined = (byte1 << 16) + (byte2 << 8) + byte3;
				output += base64Chars[(combined >> 18) & 0x3F];
				output += base64Chars[(combined >> 12) & 0x3F];
				output += (i > input.size() + 1) ? '=' : base64Chars[(combined >> 6) & 0x3F];
				output += (i > input.size()) ? '=' : base64Chars[combined & 0x3F];
		}
		return output;
}

int main() {
		cout << base64Encode("Hello World!") << endl;
}
```
