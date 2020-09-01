/**
 * /*
 * Search in a Binary Search Tree
 *
 * Given the root node of a binary search tree (BST) and a value. You need to find the node in the BST that the node's value equals the given value. Return the subtree rooted with that node. If such node doesn't exist, you should return NULL.
 *
 * For example,
 *
 * Given the tree:
 *         4
 *        / \
 *       2   7
 *      / \
 *     1   3
 *
 * And the value to search: 2
 * You should return this subtree:
 *
 *       2
 *      / \
 *     1   3
 * In the example above, if we want to search the value 5, since there is no node with value 5, we should return NULL.
 *
 * Note that an empty tree is represented by NULL, therefore you would see the expected output (serialized tree format) as [], not null.
 *
 * @format
 */

var searchBST = function (root, val) {
  // If such node doesn't exist, you should return NULL:
  if (!root) return null;

  //You need to find the node in the BST that the node's value equals the             given value:
  if (root.val === val) return root;

  //Return the subtree rooted with that node:
  return searchBST(root.left, val) || searchBST(root.right, val);
};

/*

Alternative Way

var searchBST = function (root, val) {
  function searchInBts(node) {
    // If such node doesn't exist, you should return NULL:
    if (!node) return null;

    //You need to find the node in the BST that the node's value equals the             given value:
    if (node.val === val) return node;

    //Return the subtree rooted with that node:
    return val < node.val ? searchInBts(node.left) : searchInBts(node.right);
  }
  return searchInBts(root);
}
*/
