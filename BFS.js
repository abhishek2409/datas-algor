class MYBFS extends BinarySearchTree{
    constructor(props){
        super(props);
        this.root = null;
    }
    bfsSearch(){
        let currentNode = this.root;
        let list = []
        let queue = []
        queue.push(currentNode)

        while(queue.length > 0){
            currentNode = queue.shift();
            list.push(currentNode.value);
            if(currentNode.left){
                queue.push(currentNode.left)
            }
            if(currentNode.right){
                queue.push(currentNode.right)
            }
        }
        return list
    }

    dfInOrder(){
        return traverseInOrder(this.root, [])
    }
    dfPreOrder(){
        return traversePreOrder(this.root, [])
    }
    dfPostOrder(){
        return traversePostOrder(this.root, [])
    }
}

function traversePostOrder(node, list){
    if(node.left){
        traversePostOrder(node.left, list)
    }
    if(node.right){
        traversePostOrder(node.right, list)
    }
    list.push(node.value)
    return list
}

function traversePreOrder(node, list){
    list.push(node.value)
    if(node.left){
        traversePreOrder(node.left, list)
    }
    if(node.right){
        traversePreOrder(node.right, list)
    }
    return list
}

function traverseInOrder(node, list){
    if(node.left){
        traverseInOrder(node.left, list)
    }
    list.push(node.value)
    if(node.right){
        traverseInOrder(node.right, list)
    }
    return list
}


const bfstree = new MYBFS();
  bfstree.insert(9)
  bfstree.insert(4)
  bfstree.insert(6)
  bfstree.insert(20)
  bfstree.insert(170)
  bfstree.insert(15)
  bfstree.insert(1)
//   console.log(bfstree.dfInOrder())
//   console.log(bfstree.dfPreOrder())
//   console.log(bfstree.dfPostOrder())
//   console.log(JSON.stringify(traverse(bfstree.root)))
// console.log(bfstree.bfsSearch())
  
  //     9
  //  4     20
  //1  6  15  170
  
  function traverse(node) {
    const bfstree = { value: node.value };
    bfstree.left = node.left === null ? null : traverse(node.left);
    bfstree.right = node.right === null ? null : traverse(node.right);
    return bfstree;
  }
  