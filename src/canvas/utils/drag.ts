// Reference to https://www.w3schools.com/howto/howto_js_draggable.asp


export default function dragElement(element: HTMLElement, updatePosition: (x: number, y: number) => void): void {
  let next_x = 0, next_y = 0
  element.onmousedown = dragMouseDown;


  function dragMouseDown(e: MouseEvent) {
    e.preventDefault();
  
    next_x = Math.max(0, e.clientX);
    next_y = Math.max(0, e.clientY);
    element.classList.add('dragging');

    document.onmouseup = stopDragElement;
    document.onmousemove = elementDrag;
  }
  
  function stopDragElement(): void { 
    document.onmouseup = null;
    document.onmousemove = null;
    element.classList.remove('dragging');
  }
  
  function elementDrag(e: MouseEvent) {
    console.log(e.clientX, e.clientY);
    updatePosition(Math.max(0, element.offsetLeft - next_x + e.clientX), Math.max(0, element.offsetTop - next_y + e.clientY));
    next_x = Math.max(0, e.clientX);
    next_y = Math.max(0,e.clientY);
  }
}

