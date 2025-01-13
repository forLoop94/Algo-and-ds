class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(n) {
    let current = this.head;
    if (!current) {
			this.head = new Node(n);
		} else {
			while (current.next_node) {
				current = current.next_node
			}
			current.next_node = new Node(n)
		}
  }
	
	getNodeAt(i) {
		let current = this.head;
		let count = 0;
		if (i === 0) {
			return current
		} else {
			while (current) {
				if (count === i) {
					return current;
				}
				current = current.next_node;
				count++;
			}
		}
	}
	
	getValueAt(i) {
		let current = this.head;
		let count = 0;
		if (i === 0) {
			return current.value
		} else {
			while (current) {
				if (count === i) {
					return current.value;
				}
				current = current.next_node;
				count++;
			}
		}
	}
  
  insertAt(i, n) {
		if (i === 0) {
			let nextNode = this.head;
			let prevNode = new Node(n)
			this.head = prevNode;
			prevNode.next_node = nextNode;
			this.size++;
		} else if (i >= this.size) {
			console.log("Unprocessable Entity");
		} else {
			let prevNode = this.getNodeAt(i - 1);
			let nextNode = this.getNodeAt(i);
			const newNode = new Node(n);
			prevNode.next_node = newNode;
			newNode.next_node = nextNode;
			this.size++;
		}
	}

  deleteAt(i) {
		if(i === 0) {
			let nextNode = this.getNodeAt(i + 1);
			let currentNode = this.getNodeAt(i);
			this.head = nextNode;
			this.size--;
			return currentNode
		} else {
			let currentNode = this.getNodeAt(i);
			let prevNode = this.getNodeAt(i + 1);
			let nextNode = this.getNodeAt(i + 1);
			prevNode.next_node = nextNode;
			this.size--;
			return currentNode
		}
	}
}

const list = new LinkedList();
list.add(3)
list.add(4)
list.add(5)
list.add(6)
list.add(8)
list.add(9)
list.insertAt(5, 2)
list.deleteAt(4)

console.log(list.getValueAt(4))
console.log(list)