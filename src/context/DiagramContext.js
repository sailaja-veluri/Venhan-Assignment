import React, { createContext, useContext, useState } from 'react';

const DiagramContext = createContext();

export const useDiagramContext = () => useContext(DiagramContext);

export const DiagramProvider = ({ children }) => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  const addNode = (node) => {setNodes((prevNodes) => [...prevNodes, node]);};
  const addEdge = (edge) => {setEdges((prevEdges) => [...prevEdges, edge]);};

  const handleEditNode = (updatedNode) => {
    setNodes((nds) =>
      nds.map((node) =>
        node.id === updatedNode.id
          ? { ...node, data: { label: updatedNode.label }, position: { x: parseFloat(updatedNode.x), y: parseFloat(updatedNode.y) } }
          : node
      )
    );
  };

  const handleEditEdge = (updatedEdge) => {
    setEdges((eds) =>
      eds.map((edge) =>
        edge.id === updatedEdge.id
          ? { ...edge, source: updatedEdge.source, target: updatedEdge.target }
          : edge
      )
    );
  };

  const handleDeleteNode = (nodeId) => {
    setNodes((nds) => nds.filter((node) => node.id !== nodeId));
    setEdges((eds) => eds.filter((edge) => edge.source !== nodeId && edge.target !== nodeId));
  };

  const handleDeleteEdge = (deleteEdgeData) => {
    //setEdges((eds) => eds.filter((edge) => edge.id !== edgeId));
    setEdges((eds) => eds.filter((edge) => !(edge.id === deleteEdgeData.id && edge.source === deleteEdgeData.source && edge.target === deleteEdgeData.target)));
  };

  return (
    <DiagramContext.Provider value={{ nodes, setNodes, edges, setEdges, addNode, addEdge, handleEditNode,
        handleEditEdge,
        handleDeleteNode,
        handleDeleteEdge, }}>
      {children}
    </DiagramContext.Provider>
  );
};
