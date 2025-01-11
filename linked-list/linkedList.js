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
			while (current.next_node) {
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
			while (current.next_node) {
				if (count === i) {
					return current.value;
				}
				current = current.next_node;
				count++;
			}
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

console.log(list.getValueAt(4))
console.log(list)