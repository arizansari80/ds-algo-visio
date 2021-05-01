class TreeNode {
    constructor(value,pc,pl,gap,r,isLeft,n) {
        this.data = value
        this.left = null
        this.right = null
        this.level = pl + 1
        this.isLeft = isLeft
        this.pos = {
            x : pc.x,
            y : pc.y
        }

        this.update(r,n,pc)

        if (this.isLeft === true)
            this.pos.y += gap
        else if (this.isLeft === false)
            this.pos.y += gap
    }

    update(r,n,ppos) {
        if (this.isLeft === true)
            this.pos.x = ppos.x - ((Math.pow(2,n - this.level)) * 2 * r)
        else if (this.isLeft === false)
            this.pos.x = ppos.x + ((Math.pow(2,n - this.level)) * 2 * r)
    }

    show(radius,ppos) {
        if (this.data) {
            line(this.pos.x, this.pos.y, ppos.x, ppos.y)
            fill('#352ea6')
            ellipse(this.pos.x, this.pos.y, radius, radius)
            textAlign(CENTER,CENTER)
            textStyle(BOLD)
            fill('white')
            text(this.data,this.pos.x, this.pos.y)
        }
    }
}