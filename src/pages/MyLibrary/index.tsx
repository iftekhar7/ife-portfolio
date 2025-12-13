import React, { useState } from "react";
import dayjs from "dayjs";
import { files } from "./data";

import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

import SortableItem from "./SortableItem";
import TreeView from "../../components/TreeView";

/* ---------------------------------------------
   TABLE ROW COMPONENT
----------------------------------------------*/
const RunRow = ({ item }: any) => {
  return (
    <li className="list-view-item flex">
      <div className="flex-20">
        <h6>
          <i className="fa-solid fa-gear fa-lg mr-2"></i>
          {item?.name ?? "-"}
        </h6>
      </div>

      <div className="flex-20">
        {item?.tags?.length > 0 ? (
          <span className="pill pill-primary mr-2">{item.tags.join(", ")}</span>
        ) : (
          <h6 className="text-capitalize">--</h6>
        )}
      </div>

      <div className="flex-20">
        <h6>{item.brand ?? "--"}</h6>
      </div>

      <div className="flex-20">
        <h6 className="truncate pr-2">{item.size || "--"}</h6>
      </div>

      <div className="flex-15">
        <h6>{dayjs(item?.date).format("MM-DD-YYYY HH:mm:ss")}</h6>
      </div>

      <div className="flex-5">
        <div className="action-button"></div>
      </div>
    </li>
  );
};

/* ---------------------------------------------
   CARD COMPONENT
----------------------------------------------*/
const FileCard = ({
  file,
  selected,
  toggleSelection,
  handleDragStart,
}: any) => {
  return (
    <div
      draggable
      onDragStart={(e) => handleDragStart(e, file)}
      onClick={() => toggleSelection(file.id)}
      className={`file-card ${selected ? "selected" : ""}`}
    >
      <div className="file-card__preview">
        <i className="fas fa-file file-card__icon" />
      </div>

      <h3 className="file-card__name">{file.name}</h3>

      <div className="file-card__tags">
        {file.tags.map((tag:any) => (
          <span key={tag} className="file-card__tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="file-card__meta">
        <span>{file.size}</span>
        <span>{file.date}</span>
      </div>
    </div>
  );
};

/* ---------------------------------------------
   MAIN COMPONENT
----------------------------------------------*/
function MyLibrary() {
  const [viewTab, setViewTab] = useState("table");
  const [items, setItems] = useState(files);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  /* ---- SELECTION HANDLERS ---- */
  const toggleItemSelection = (id: number) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleDragStart = (e: any, file: any) => {
    // Optional highlight or data storing
    e.dataTransfer.setData("text/plain", file.id);
  };

  /* ---- DnD ---- */
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (!over) return; // prevent crash

    if (active.id !== over.id) {
      setItems((prev) => {
        const oldIndex = prev.findIndex((it) => it.id === active.id);
        const newIndex = prev.findIndex((it) => it.id === over.id);
        return arrayMove(prev, oldIndex, newIndex);
      });
    }
  };

  return (
    <>
      {/* PAGE HEADER */}
      <div className="page-header">
        <h4 className="page-title">My Library</h4>
        <div className="button-groups">
          <button
            onClick={() => setViewTab("table")}
            className={`btn btn-${viewTab === "table" ? "primary" : "secondary"}`}
          >
            <i className="fa-sharp fa-regular fa-bars"></i>
          </button>

          <button
            onClick={() => setViewTab("card")}
            className={`btn btn-${viewTab === "card" ? "primary" : "secondary"}`}
          >
            <i className="fa-jelly-fill fa-regular fa-grid"></i>
          </button>
        </div>
      </div>

      {/* PAGE CONTENT */}
      <div className="page-content">
        {/* <TreeView /> */}
        {/* ---------- TABLE VIEW ---------- */}
        {viewTab === "table" ? (
          <div className="list-wrapper">
            <div className="list-header">
              <h6 className="flex-20">Name</h6>
              <h6 className="flex-20">Tags</h6>
              <h6 className="flex-20">Brand</h6>
              <h6 className="flex-20">Size</h6>
              <h6 className="flex-15">Date</h6>
              <h6 className="flex-5"></h6>
            </div>

            <DndContext
              sensors={sensors}
              collisionDetection={closestCenter}
              onDragEnd={handleDragEnd}
            >
              <SortableContext
                items={items.map((i) => i.id)}
                strategy={verticalListSortingStrategy}
              >
                <ul className="list-view">
                  {items.map((item) => (
                    <SortableItem key={item.id} id={item.id}>
                      <RunRow item={item} />
                    </SortableItem>
                  ))}
                </ul>
              </SortableContext>
            </DndContext>
          </div>
        ) : (
          /* ---------- CARD VIEW ---------- */
          <div className="file-grid">
            {items.map((file:any) => (
              <FileCard
                key={file.id}
                file={file}
                selected={selectedItems.includes(file.id)}
                toggleSelection={toggleItemSelection}
                handleDragStart={handleDragStart}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default MyLibrary;
