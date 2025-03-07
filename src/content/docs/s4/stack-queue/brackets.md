---
title: The Brackets Problem
description: Learn how to use a stack to solve the brackets problem.
---

The brackets problem is a classic problem that can be solved using a stack. The problem involves checking if a given string of brackets is balanced. A string is considered balanced if it contains only pairs of opening and closing brackets that are properly nested.

For example, the following strings are balanced:

- `()`
- `([])`
- `({})`
- `([]{})`

The following strings are not balanced:

- `(` (missing closing bracket)
- `)` (missing opening bracket)
- `([)]` (closing bracket does not match opening bracket)
- `({[})` (closing bracket does not match opening bracket)

## Approach

To solve the brackets problem, we can use a stack to keep track of the opening brackets we encounter. When we encounter a closing bracket, we can check if it matches the opening bracket at the top of the stack. If it does, we can continue processing the string. If it doesn't, the string is not balanced.

Here is the algorithm to solve the brackets problem:

1. Initialize an empty stack.
2. Iterate over each character in the string:
   - If the character is an opening bracket (`(`, `[`, `{`), push it onto the stack.
   - If the character is a closing bracket (`)`, `]`, `}`), pop the top element from the stack and check if it matches the corresponding opening bracket.
     - If it matches, continue processing the string.
     - If it doesn't match, the string is not balanced.
3. After processing all characters in the string, check if the stack is empty. If it is, the string is balanced. If it's not, the string is not balanced.

## Implementation

Here is an example of using a stack to solve the brackets problem in Python:

```python
class Stack:
    def __init__(self):
        self.items = []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        if not self.is_empty():
            return self.items.pop()
        else:
            raise IndexError("pop from an empty stack")

    def peek(self):
        if not self.is_empty():
            return self.items[-1]
        else:
            raise IndexError("peek from an empty stack")

    def is_empty(self):
        return len(self.items) == 0

    def size(self):
        return len(self.items)

def is_balanced_brackets(s):
    stack = Stack()
    opening_brackets = "([{"
    closing_brackets = ")]}"
    bracket_pairs = {")": "(", "]": "[", "}": "{"}

    for char in s:
        if char in opening_brackets:
            stack.push(char)
        elif char in closing_brackets:
            if stack.is_empty() or stack.pop() != bracket_pairs[char]:
                return False

    return stack.is_empty()

# Test the implementation
print(is_balanced_brackets("()"))  # Output: True
print(is_balanced_brackets("([])"))  # Output: True
print(is_balanced_brackets("([)]"))  # Output: False
print(is_balanced_brackets("({[})"))  # Output: False
```