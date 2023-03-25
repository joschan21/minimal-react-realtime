type Draw = {
  ctx: CanvasRenderingContext2D | null
  currentPoint: Point | null
  prevPoint: Point | null
}

type Point = { x: number; y: number }
