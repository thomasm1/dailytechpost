
export function buildYTicks(max: number, top: number, innerHeight: number): { value: number; y: number }[] {
    const tickCount = 5;

    return Array.from({ length: tickCount + 1 }, (_, idx) => {
      const value = Math.round((max / tickCount) * idx);
      const y = top + innerHeight - (innerHeight / max) * value;

      return { value, y };
    });
  }  
//   // Given data max and chart height, where the y-axis labels should sit.
//   private buildYTicks(): { value: number; y: number }[] {
//     const max = this.getYMax(this.data);
//     const tickCount = 5;

//     return Array.from({ length: tickCount + 1 }, (_, idx) => {
//       const value = Math.round((max / tickCount) * idx);
//       const y = this.top + this.innerHeight - (this.innerHeight / max) * value;

//       return { value, y };
//     });
//   }

  export function  buildXTicks(data: number[], left: number, innerWidth: number): { label: string; x: number }[] {
    // Fixed number of ticks (5). 
    // ..calculates x position for each tick based on the chart width.
    const xStep =
    data.length > 1 ? innerWidth / (data.length - 1) : 0;

    return data.map((_, idx) => ({
      label: `${idx}m`,
      x: left + idx * xStep,
    })); 
    // #2 FIXED DATAPOINTS
    // const tickCount = 5;
  // const ticks: { label: string; x: number }[] = [];
  // for (let idx = 0; idx <= tickCount; idx++) {
  //   const x = left + (innerWidth / tickCount) * idx; 
  //   ticks.push({
  //     label: `${idx}d`,
  //     x: x,
  //   });
  // } 
  // return ticks; 
  // #3 FIXED DATAPOINTS
    // const tickCount = 5;
    // return Array.from({ length: tickCount + 1 }, (_, idx) => {
    //   const x = left + (innerWidth / tickCount) * idx;

    //   return { label: `${idx}m`, x };
    // });
  }