import React, { useState } from "react";

interface TreeNode {
  id: string;
  label: string;
  type?: "country" | "state" | "asset" |'file';
  children?: TreeNode[];
  alertCount?: number;
}

const treeData: TreeNode[] = [
  {
    id: "file",
    label: "File 1",
    type: "file",
    alertCount: 40,
    children: [
      { id: "asset1", label: "folder 1", type: "asset" },
      { id: "asset2", label: "folder 2", type: "asset" },
      { id: "asset3", label: "folder 3", type: "asset" },
      { id: "asset4", label: "folder 4", type: "asset" },
      { id: "asset5", label: "folder 5", type: "asset" },
      { id: "asset6", label: "folder 6", type: "asset" }, 
      {
        id: "subfile2",
        label: "Sub File 2",
        type: "file",
        children: [
          { id: "asset6", label: "folder 2.1", type: "asset" },
          { id: "asset7", label: "folder 2.2", type: "asset" },
          {
            id: "asset8",
            label: "folder 2.3",
            type: "asset",
          },
        ],
      },
      {
        id: "subFile3",
        label: "Folder 3.1",
        type: "state",
      },
    ],
  },
];

const TreeItem: React.FC<{ node: TreeNode }> = ({ node }) => {
  const [open, setOpen] = useState(false);
  const hasChildren = node.children && node.children.length > 0;

  const getIcon = () => {
    switch (node.type) {
      case "country":
        return <i className="fa-solid fa-folder mr-2"></i>;
      case "state":
        return <i className="fa-solid fa-folder mr-2"></i>;
      default:
        return <i className="fa-solid fa-folder mr-2"></i>;
    }
  };

  return (
    <div className="pl-2 select-none">
      <div
        className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded cursor-pointer"
        onClick={() => hasChildren && setOpen(!open)}
      >
        {hasChildren ? (
          open ? (
            <i className="fa-sharp fa-solid fa-chevron-down mr-2" />
          ) : (
            <i className="fa-sharp fa-solid fa-chevron-right mr-2" />
          )
        ) : (
          <span className="w-4" />
        )}

        {getIcon()}

        <span>{node.label}</span>

        {node.alertCount && (
          <div className="flex items-center gap-1 text-red-600 ml-auto"> 
            <span>{node.alertCount}</span>
          </div>
        )}
      </div>

      {open && hasChildren && (
        <div className="pl-4 border-l ml-2">
          {node.children!.map((child) => (
            <TreeItem key={child.id} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default function TreeView() {
  return (
    <div className="w-80 bg-white shadow rounded p-3 max-h-[90vh] overflow-y-auto">
      <h2 className="text-lg font-semibold mb-3">All File</h2>
      {treeData.map((node) => (
        <TreeItem key={node.id} node={node} />
      ))}
    </div>
  );
}
