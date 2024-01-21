---
title: Introduction to Competitive Programming
---

# Introduction to Competitive Programming

## What is Competitive Programming?

*Informatics olympiads*, also known as *competitive programming*,
is a form of programming where contestants are required to solve
problems within a certain time limit.

Their code will be checked against a set of inputs and outputs,
which determine if the code is correct.

This form of programming requires a vast amount of knowledge in
common algorithms, math, as well as logical thinking.

### Common Terminology

Not sure what the abbreviations mean? Here you go:

| Abbr.   | Meaning               | Notes                                                            |
| ------- | --------------------- | ---------------------------------------------------------------- |
| AC      | All Correct           | Your code produced expected results with the testcases provided. |
| WA      | Wrong Answer          | Some/all of the testcases did not produce the expected result.   |
| TLE     | Time Limit Exceeded   | Your code has run for too long, and the program was killed.      |
| MLE     | Memory Limit Exceeded | Your code took up too much memory, and the program was killed.   |
| RTE(6)  | Runtime Error (6)     | Your program has overflowed in terms of memory capacity.         |
| RTE(11) | Runtime Error (11)    | Your program accessed areas in memory which were out of range.   |

For those interested in USACO:
| Abbr. | Meaning                                |
| ----- | -------------------------------------- |
| \*    | Correct answer                         |
| X     | Wrong answer                           |
| !     | Runtime error or memory limit exceeded |
| E     | Empty output file                      |
| M     | Missing output file                    |
| T     | Time limit exceeded                    |

### Hello, World

A very simple program allowing you to AC [this CP problem](https://codebreaker.xyz/problem/helloworld)

```cpp
#include <iostream>
using namespace std;

int main() {
  cout << "Hello World";
  return 0;
}
```