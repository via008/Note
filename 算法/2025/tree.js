function isSameTree(tree1, tree2) {
    if (tree1 === null && tree2 === null) {
        return true;
    }

    if (tree1 === null || tree2 === null) {
        return false;
    }

    if (tree1.val !== tree2.val) {
        return false;
    }

    const children1 = tree1.children || [];
    const children2 = tree2.children || [];

    if (children1.length !== children2.length) {
        return false;
    }

    const unmatched = new Array(children2.length).fill(false);

    for(let child of children1) {
        let found = false;

        for(let i = 0; i < children2.length; i ++) {
            if (isSameTree(child, children2[i])) {
                unmatched[i] = true;
                found = true;
                break;
            }
        }

        if (!found) {
            return false;
        }
    }

    return unmatched.every(item => item);
}

class TreeNode {
    constructor(val, children = []) {
        this.val = val;
        this.children = children;
    }
}

const tree1 = new TreeNode(1, [
    new TreeNode(2),
    new TreeNode(3),
    new TreeNode(2),
    new TreeNode(2),
])
const tree2 = new TreeNode(1, [
    new TreeNode(2),
    new TreeNode(2),
    new TreeNode(3),
])

console.log(isSameTree(tree1, tree2));