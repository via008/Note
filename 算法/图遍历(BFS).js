import GraphAdjMat from "./图(邻接表)";

const edges = [[0, 1], [0, 3], [1, 2], [2, 3], [2, 4], [3, 4]];
const test1 = new GraphAdjMat(edges);
test1.adjMat; // Map(5) {0 => Array(2), 1 => Array(2), 2 => Array(3), 3 => Array(3), 4 => Array(2)}

function graphBFS(graph, vertex) {
  const res = [];
  const visited = new Set();
  visited.add(vertex);
  const queue = [vertex];
  while(queue.length) {
    const v = queue.shift();
    res.push(v);
    for(const item of graph.adjMat.get(v)) {
      if (visited.has(item)) {
        continue;
      }
      visited.add(item);
      queue.push(item);
    }
  }
  return res;
}
graphBFS(test1, 0); // [0, 1, 3, 2, 4]
