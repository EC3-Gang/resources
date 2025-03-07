---
title: Stack
description: Introduction to the stack data structure.
---

A stack is a linear data structure that follows the Last In First Out (LIFO) principle. This means that the last element added to the stack is the first element to be removed. Stacks are used in many applications, such as function calls, undo mechanisms, and expression evaluation.

## Operations

A stack supports the following operations:

- `push(item)`: Adds an item to the top of the stack.
- `pop()`: Removes and returns the item at the top of the stack.
- `peek()`: Returns the item at the top of the stack without removing it.
- `is_empty()`: Returns `True` if the stack is empty, `False` otherwise.
- `size()`: Returns the number of items in the stack.

## Implementation

A stack can be implemented using an array or a linked list. Here is an example of a stack implemented using an array in Python:

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
```

## Example

Here is an example of using a stack to reverse a string:

```python
def reverse_string(s):
    stack = Stack()
    for char in s:
        stack.push(char)

    reversed_string = ""
    while not stack.is_empty():
        reversed_string += stack.pop()

    return reversed_string

print(reverse_string("hello"))  # Output: "olleh"
```
