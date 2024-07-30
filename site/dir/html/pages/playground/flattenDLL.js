console.log("Running Playground.js");
// Javascript program to flatten a multilevel linked list recursively

/**
 * Input:
 * 1 - 2 - 3 - 4
 *     |
 *     7 -  8 - 10 - 12
 *     |    |    |
 *     9    16   11
 *     |    |
 *     14   17 - 18 - 19 - 20
 *     |                    |
 *     15 - 23             21
 *          |
 *          24
 *
 * Output:
 * Linked List to be flattened to
 * 1 - 2 - 7 - 9 - 14 - 15 - 23 - 24 - 8
 *  - 16 - 17 - 18 - 19 - 20 - 21 - 10 -
 * 11 - 12 - 3 - 4
 * Note: 9 appears before 8 (When we are
 * at a node, we process down pointer before
 * right pointer)
 *
 * */

// Node of Multi-level Linked List
class Node {
  constructor(val) {
    this.data = val;
    this.down = null;
    this.next = null;
  }
}
let last;

// Flattens a multi-level linked
// list depth wise
function flattenList(node)
{
  if (node === null) return null;

  // To keep track of last visited node
  last = node;

  // Store next pointer
  let next = node.next;

  // If down list exists, process it first. Add down list as next of current node
  if (node.down !== null) node.next = flattenList(node.down);

  // If next exists, add it after the next of last added node
  if (next !== null) last.next = flattenList(next);

  return node;
}

// Utility method to print a linked list
function printFlattenedNodes(head) {
  let curr = head;
  while (curr !== null)
  {
    document.write(curr.data + " ");
    curr = curr.next;
  }
}

// Driver code
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

// Two Series
head.next.down = new Node(7);
head.next.down.down = new Node(9);
head.next.down.down.down = new Node(14);
head.next.down.down.down.down = new Node(15);
head.next.down.down.down.down.next = new Node(23);
head.next.down.down.down.down.next.down = new Node(24);
head.next.down.next = new Node(8);
head.next.down.next.down = new Node(16);
head.next.down.next.down.down = new Node(17);
head.next.down.next.down.down.next = new Node(18);
head.next.down.next.down.down.next.next = new Node(19);
head.next.down.next.down.down.next.next.next = new Node(20);
head.next.down.next.down.down.next.next.next.down = new Node(21);
head.next.down.next.next = new Node(10);
head.next.down.next.next.down = new Node(11);
head.next.down.next.next.next = new Node(12);
let flattenedList = flattenList(head);
printFlattenedNodes(flattenedList);
