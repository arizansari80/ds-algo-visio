class StackElement {
    constructor(node,toPrint,toCall) {
        this.node = node
        this.toPrint = toPrint
        this.toCall = toCall
    }

    print() {
        if (this.node.data)
            console.log(this.node.data)
    }

    inCall(stack) {
        stack.push(new StackElement(this.node.right,false,true))
        stack.push(new StackElement(this.node,true,false))
    }

    preCall(stack) {
        stack.push(new StackElement(this.node.right,false,true))
    }

    postCall(stack) {
        stack.push(new StackElement(this.node,true,false))
        stack.push(new StackElement(this.node.right,false,true))
    }
}

class Stack {
    constructor() {
        this.item = []
    }

    push(val) {
        this.item.push(val)
        return val
    }

    pop() {
        if (this.item.length === 0)
            return "Underflow"
        else {
            var retVal = this.peek()
            this.item.pop()
            return retVal
        }
    }

    isEmpty() {
        return this.item.length === 0
    }

    peek() {
        if (this.item.length === 0)
            return "Underflow"
        return this.item[this.item.length - 1]
    }
}