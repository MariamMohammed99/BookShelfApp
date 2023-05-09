// import "@testing-library/jest-dom";
// import { DragDropContext } from "react-beautiful-dnd";
// import React from "react";
// import { render } from "@testing-library/react";

// // const CustomWrapper<React.Fc{children:}> = function ({ children }) {
// //   return <DragDropContext>{children}</DragDropContext>;
// // };

// const customRender = (ui, options) =>
//   render(ui, { wrapper: CustomWrapper, ...options });

// export function simulateDragDrop(sourceNode, destinationNode) {
//   // Create dragstart event
//   const dragStartEvent = new Event("dragstart", {
//     bubbles: true,
//     cancelable: true,
//   });

//   // Create dragend event
//   const dragEndEvent = new Event("dragend", {
//     bubbles: true,
//     cancelable: true,
//   });

//   // Create drop event
//   const dropEvent = new Event("drop", {
//     bubbles: true,
//     cancelable: true,
//   });
//   sourceNode.dispatchEvent(dragStartEvent);
//   sourceNode.dispatchEvent(dropEvent);
//   sourceNode.dispatchEvent(dragEndEvent);
// }

// export * from "@testing-library/react";
// export { customRender as render };
