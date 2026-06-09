import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilServiceService {

  constructor() { }


  shortenId(id?: string): string {
    if (!id) {
      return '-';
    }

    return id.length > 13
      ? `${id.slice(0, 5)}...${id.slice(-5)}`
      : id;
  }




  isResizing: boolean = false;


  // Resizable splitter  
  startResize(
    event: MouseEvent | TouchEvent,
    currentRatio: number,
    setRatio: (ratio: number) => void,
    min = 20,
    max = 80,
    axis: 'y' | 'x' = 'y'
  ) {

    this.isResizing = true;
    const startCoord = axis === 'y'
        ? ('clientY' in event ? event.clientY : event.touches[0].clientY)
        : ('clientX' in event ? event.clientX : event.touches[0].clientX);
    const startRatio = currentRatio;
    const container = (event.target as HTMLElement).parentElement!;
    // const containerHeight = container.clientHeight;
    const containerSize = axis === 'y' ? container.clientHeight : container.clientWidth;

    console.log(`Starting resize-${axis},ratio,containerSize:`, { startCoord, startRatio, containerSize });

    const moveHandler = (e: MouseEvent | TouchEvent) => {
      const clientCoord = axis === 'y' 
        ? ('clientY' in e ? e.clientY : e.touches[0].clientY) 
        : ('clientX' in e ? e.clientX : e.touches[0].clientX);
      const delta = clientCoord - startCoord;
      const deltaPercent = (delta / containerSize) * 100;
      const newRatio = Math.max(min, Math.min(max, startRatio + deltaPercent));
      setRatio(newRatio);
      console.log(`Resizing-${axis},delta,deltaPercent,currentRatio:`, { clientCoord, delta, deltaPercent, currentRatio: newRatio });
    };

    const upHandler = () => {
      this.isResizing = false;
      document.removeEventListener('mousemove', moveHandler);
      document.removeEventListener('touchmove', moveHandler);
      document.removeEventListener('mouseup', upHandler);
      document.removeEventListener('touchend', upHandler);
    };

    document.addEventListener('mousemove', moveHandler);
    document.addEventListener('touchmove', moveHandler);
    document.addEventListener('mouseup', upHandler);
    document.addEventListener('touchend', upHandler);
  }

}
