export const edgeStyle = (x: number, y: number, length: number, degree: number) => `
    left: ${x + 50}px;
    top: ${y + 50}px;
    width: ${length}px;
    transform: rotate(${degree}deg);
`