class Tree {
	constructor(r,d,lg) {
		this.depth = 1
		this.root = null
		this.radius = 2 * r
		this.gridLength = this.radius * (Math.pow(2,this.depth) - 1)
		this.leftOffset = (width - this.gridLength) / 2
		this.levelGap = lg
		this.rootPos = {
			x : this.leftOffset + (this.gridLength / 2),
			y : 20
		}
		this.root = new TreeNode(d,this.rootPos,0,lg,r,undefined,this.depth)
	}

	updateTree(r,p) {
		if (!r)
			return
		r.update(this.radius / 2,this.depth,p.pos)
		this.updateTree(r.left,r)
		this.updateTree(r.right,r)
	}

	show(r,p) {
		if (!r)
			return
		r.show(this.radius,p.pos)
		this.show(r.left,r)
		this.show(r.right,r)
	}

	add(d,lg) {
		var temp = this.root
		var pTemp = this.root
		var isLeft = false
		while (temp != null) {
			if (d === temp.data)
				return
			else if (d < temp.data) {
				pTemp = temp
				temp = temp.left
				isLeft = true
			}
			else {
				pTemp = temp
				temp = temp.right
				isLeft = false
			}
		}
		this.depth = this.getDepth(this.root)
		if (this.getDepth > 7)
			return
		temp = new TreeNode(d,pTemp.pos,pTemp.level,lg,this.radius / 2,isLeft,this.depth)
		if (isLeft)
			pTemp.left = temp
		else
			pTemp.right = temp
		this.updateTree(this.root,this.root)
	}

	getDepth(node) {
		if (node == null)
			return 0
		return 1 + max(this.getDepth(node.left),this.getDepth(node.right))
	}

	inOrder() {
		var stack = new Stack()
		stack.push(new StackElement(null,false,true))
		var pop = new StackElement(this.root,false,true)
		pop.inCall(stack)
		pop = new StackElement(pop.node.left,false,true)
		while (!stack.isEmpty()) {
			if (pop.node === null) {
				pop = stack.pop()
				continue
			}
			if (pop.toPrint) {
				pop.print()
				pop = stack.pop()
				continue
			}
			if (pop.toCall) {
				pop.inCall(stack)
				pop = new StackElement(pop.node.left,false,true)
			}
		}
	}

	preOrder() {
		var stack = new Stack()
		stack.push(new StackElement(null,true,false))
		var pop = new StackElement(this.root,true,false)
		while(!stack.isEmpty()) {
			if (pop.node != null) {
				pop.print()
				pop.preCall(stack)
				pop = new StackElement(pop.node.left,true,false)
				continue
			}
			pop = stack.pop()
		}
	}

	postOrder() {
		var stack = new Stack()
		stack.push(new StackElement(null,false,true))
		var pop = new StackElement(this.root,false,true)
		pop.postCall(stack)
		pop = new StackElement(pop.node.left,false,true)
		while (!stack.isEmpty()) {
			if (pop.node === null) {
				pop = stack.pop()
				continue
			}
			if (pop.toPrint) {
				pop.print()
				pop = stack.pop()
				continue
			}
			if (pop.toCall) {
				pop.postCall(stack)
				pop = new StackElement(pop.node.left,false,true)
			}
		}
	}
}