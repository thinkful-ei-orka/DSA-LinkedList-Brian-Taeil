class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }
  find(item) {
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item
    while (currNode.value !== item) {
      /* Return null if it's the end of the list
        and the item is not on the list */
      if (currNode.next === null) {
        return null;
      }
      else {
        // Otherwise, keep looking
        currNode = currNode.next;
      }
    }
    // Found it
    return currNode;
  }
  remove(item){
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      // Save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
  insertBefore(newItem, existingItem) {
    // Start at the head
    let currNode = this.head;
    let prevNode;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item
    while (currNode.value !== existingItem) {
      /* Return null if it's the end of the list
        and the item is not on the list */
      if (currNode.next === null) {
        return null;
      }
      else {
        // Otherwise, keep looking
        prevNode = currNode;
        currNode = currNode.next;
      }
    }
    let newNode = new _Node(newItem, currNode);
    prevNode.next = newNode;
  }
  insertAfter(newItem, existingItem) {
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item
    while (currNode.value !== existingItem) {
      /* Return null if it's the end of the list
        and the item is not on the list */
      if (currNode.next === null) {
        return null;
      }
      else {
        // Otherwise, keep looking
        currNode = currNode.next;
      }
    }
    // The existing item is the last item
    if (currNode.next === null) {
      this.insertLast(newItem);
    } else {
      let newNode = new _Node(newItem, currNode.next);
      currNode.next = newNode;
    }
  }
  insertAt(newItem, position) {
    // Start at the head
    let currNode = this.head;
    let prevNode;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item
    for (let i = 1; i < position; i++) {
      if (currNode.next === null) {
        return null;
      }
      else {
        // Otherwise, keep looking
        prevNode = currNode;
        currNode = currNode.next;
      }
    }

    // currNode = item before the new item
    let newNode = new _Node(newItem, currNode);
    prevNode.next = newNode;
  }
}

class _doubleNode {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  insertFirst(item) {
    if (this.head === null) {
      this.head = new _doubleNode(item, null, null);
      this.tail = this.head;
    } else {
      let secondNode = this.head;
      this.head = new _doubleNode(item, null, secondNode);
      secondNode.prev = this.head;
    }
  }
  insertLast(item) {
    if (this.tail === null) {
      this.tail = new _doubleNode(item, null, null);
      this.head = this.tail;
    } else {
      let secondToLastNode = this.tail;
      this.tail = new _doubleNode(item, secondToLastNode, null);
      secondToLastNode.next = this.tail;
    }
  }
  insertBefore(newItem, existingItem) {
    // Start at the head
    let currNode = this.head;
    let prevNode;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item
    while (currNode.value !== existingItem) {
      /* Return null if it's the end of the list
        and the item is not on the list */
      if (currNode.next === null) {
        return null;
      }
      else {
        // Otherwise, keep looking
        prevNode = currNode;
        currNode = currNode.next;
      }
    }
    let newNode = new _Node(newItem, prevNode, currNode);
    prevNode.next = newNode;
    currNode.prev = newNode;
  }
  insertAfter(newItem, existingItem) {
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item
    while (currNode.value !== existingItem) {
      /* Return null if it's the end of the list
        and the item is not on the list */
      if (currNode.next === null) {
        return null;
      }
      else {
        // Otherwise, keep looking
        currNode = currNode.next;
      }
    }
    // The existing item is the last item
    if (currNode.next === null) {
      this.insertLast(newItem);
    } else {
      let newNode = new _Node(newItem, currNode, currNode.next);
      currNode.next = newNode;
      currNode.prev = newNode;
    }
  }
  insertAt(newItem, position) {
    // Start at the head
    let currNode = this.head;
    let prevNode;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item
    for (let i = 1; i < position; i++) {
      if (currNode.next === null) {
        return null;
      }
      else {
        // Otherwise, keep looking
        prevNode = currNode;
        currNode = currNode.next;
      }
    }

    // currNode = item before the new item
    let newNode = new _Node(newItem, prevNode, currNode);
    prevNode.next = newNode;
    currNode.prev = newNode;
  }
  remove(item){
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      // Save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
    currNode.next.prev = previousNode;
  }
  find(item) {
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item
    while (currNode.value !== item) {
      /* Return null if it's the end of the list
        and the item is not on the list */
      if (currNode.next === null) {
        return null;
      }
      else {
        // Otherwise, keep looking
        currNode = currNode.next;
      }
    }
    // Found it
    return currNode;
  }
}

function main() {
  const SLL = new LinkedList;

  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  SLL.remove('squirrel');

  SLL.insertBefore('Athena', 'Boomer');
  SLL.insertAfter('Hotdog', 'Helo');
  SLL.insertAt('Kat', 3);
  SLL.remove('Tauhida');

  // Apollo, Athena, Kat, Boomer, Helo, Hotdog, Husker, Starbuck

  const DLL = new DoubleLinkedList;

  DLL.insertFirst('Aquaria');
  DLL.insertLast('Caprica');
  DLL.insertLast('Gemenon');
  DLL.insertLast('Picon');
  DLL.insertLast('Sagittaron');
  DLL.insertLast('Tauron');
  DLL.remove('Picon');

  // Aquaria, Caprica, Gemenon, Sagittaron, Tauron

  // console.log(SLL.find('Husker'));
  // console.log(findPrevious('Boomer', SLL));
  // console.log(cycle(SLL));
  // console.log(display(DLL));
  // console.log(display(reverseDouble(DLL)));
}

main();

function display(linkedList) {
  let list = [];
  // Start at the head
  let currNode = linkedList.head;
  // Run through all items
  while (currNode !== null) {
    list.push(currNode.value);
    currNode = currNode.next;
  }
  // Return the list
  return list;
}

function size(linkedList) {
  let counter = 0;
  // Start at the head
  let currNode = linkedList.head;
  // If the list is empty
  if (!linkedList.head) {
    return counter;
  }
  // Run through all items
  while (currNode !== null) {
    counter += 1;
    currNode = currNode.next;
  }
  // Return the list
  return counter;
}

function isEmpty(linkedList) {
  // If the list is empty
  if (!linkedList.head) {
    return true;
  }
  return false;
}

function findPrevious(item, linkedList) {
  // Start at the head
  let currNode = linkedList.head;
  let prevNode;
  // If the list is empty
  if (!linkedList.head) {
    return null;
  }
  // Check for the item
  while (currNode.value !== item) {
    /* Return null if it's the end of the list
      and the item is not on the list */
    if (currNode.next === null) {
      return null;
    }
    else {
      // Otherwise, keep looking
      prevNode = currNode;
      currNode = currNode.next;
    }
  }
  // Found it
  return prevNode;
}

function findLast(linkedList) {
  // Start at the head
  let currNode = linkedList.head;
  // If the list is empty
  if (!linkedList.head) {
    return null;
  }
  // Run through all items
  while (currNode.next !== null) {
    currNode = currNode.next;
  }
  // Return the last node
  return currNode;
}

function WhatDoesThisProgramDo(lst) {
  let current = lst.head;
  while (current !== null) {
    let newNode = current;
    while (newNode.next !== null) {
      if (newNode.next.value === current.value) {
        newNode.next = newNode.next.next;
      }
      else {
        newNode = newNode.next;
      }
    }
    current = current.next;
  }
}
// ^^ Takes out duplicates ^^

function reverse(linkedList) {
  // Start at the head
  let currNode = linkedList.head;
  let prevPrevNode;
  let prevNode;
  // If the list is empty
  if (!linkedList.head) {
    return null;
  }
  // Run through all items
  while (currNode !== null) {
    prevPrevNode = prevNode;
    prevNode = currNode;
    currNode = currNode.next;

    if (prevPrevNode === undefined) {
      // if it's the first item, set the first item's next to null
      prevNode.next = null;
    } else {
      prevNode.next = prevPrevNode;
    }
  }
  linkedList.head = prevNode;

  // Return the list
  return linkedList;
}

function reverseDouble(linkedList) {
  // If the list is empty
  if (!linkedList.head) {
    return null;
  }

  // Start at the head
  let currNode = linkedList.head;

  // Set the new heads and tails
  let newHead = linkedList.tail;
  let newTail = linkedList.head;
  linkedList.head = newHead;
  linkedList.tail = newTail;

  // Run through all items
  while (currNode !== null) {
    let currPrev = currNode.prev;
    let currNext = currNode.next;

    if (currPrev !== undefined) {
      currNode.next = currPrev;
    }
    if (currNext !== undefined) {
      currNode.prev = currNext;
    }

    currNode = currNext;
  }

  // Return the list
  return linkedList;
}

function third (lst){
  // Start at the head
  let currNode = lst.head;

  // If the list is empty
  if (!lst.head) {
    return null;
  }
  // Run through all items
  while (currNode.next.next.next !== null) {
    currNode = currNode.next;
  }
   // Return the list
  return currNode;
}

function middle (lst) {
  let counter = 0;
  // Start at the head
  let currNode = lst.head;
  let halfNode = currNode;
  // If the list is empty
  if (!lst.head) {
    return null;
  }
  // Run through all items
  while (currNode !== null) {
    if (counter % 2 === 1){
      halfNode = halfNode.next;
    }
    counter += 1;
    currNode = currNode.next;
  }
  // Return the list
  return halfNode;
}

function cycle (lst){
  // Start at the head
  let currNode = lst.head;
  let seenArray = [];
  // If the list is empty
  if (!lst.head) {
    return null;
  }
  // Run through all items
  while (currNode !== null) {
    seenArray.push(currNode);
    for (let i = 0; i < seenArray.length; i++){
      if (currNode.next === seenArray[i]){
        return true;
      } else {


      }
      currNode = currNode.next;
    }
  }
   // Return the list
  return false;
}
