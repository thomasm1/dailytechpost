import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';

@Component({
  selector: 'app-play-slider',
  standalone: true,
  template: `
    <div class="play-slider">
      <button type="button" (click)="toggle()" [disabled]="max <= min"
        [attr.aria-label]="paused ? 'Play timeline' : 'Pause timeline'">
        {{ paused ? 'Play' : 'Pause' }}
      </button>
      <input type="range" aria-label="Map date" [min]="min" [max]="max"
        [step]="step" [value]="value" [disabled]="max <= min"
        (input)="onChangeValue($event)" />
    </div>
  `,
  styles: [`
    :host { display: block; }
    .play-slider { display: flex; align-items: center; gap: 10px; padding: 6px 10px; }
    button { min-width: 64px; cursor: pointer; font-size: 1rem; }
    input { flex: 1; min-width: 0; }
  `]
})
export class PlaySliderComponent implements OnDestroy {
  @Input() min = 0;
  @Input() max = 100;
  @Input() step = 1;
  @Input() speed = 100; // milliseconds between updates (300 is slower)
  @Input() value = 0;
  @Output() changeValue = new EventEmitter<number>();

  paused = true;
  private interval?: ReturnType<typeof setInterval>;

  play(): void {
    if (!this.paused || this.max <= this.min || this.step <= 0) return;
    if (this.value >= this.max) this.setValue(this.min);
    this.paused = false;
    this.interval = setInterval(() => {
      this.setValue(Math.min(this.value + this.step, this.max));
      if (this.value >= this.max) this.pause();
    }, this.speed);
  }

  pause(): void {
    this.paused = true;
    clearInterval(this.interval);
    this.interval = undefined;
  }

  toggle(): void {
    this.paused ? this.play() : this.pause();
  }

  onChangeValue(event: Event): void {
    this.pause();
    this.setValue(Number((event.target as HTMLInputElement).value));
  }

  ngOnDestroy(): void {
    this.pause();
  }

  private setValue(value: number): void {
    this.value = value;
    this.changeValue.emit(value);
  }
}
