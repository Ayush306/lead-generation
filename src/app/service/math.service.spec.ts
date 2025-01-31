import { TestBed } from '@angular/core/testing';
import { MathService } from "./math.service";

describe('MathService', () => {
  let service: MathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add two numbers correctly', () => {
    const result = service.add(2, 3);
    expect(result).toBe(5);
  });

  it('should subtract two numbers correctly', () => {
    const result = service.subtract(5, 3);
    expect(result).toBe(2);
  });

  it('should multiply two numbers correctly', () => {
    const result = service.multiply(2, 3);
    expect(result).toBe(6);
  });

  it('should divide two numbers correctly', () => {
    const result = service.divide(6, 3);
    expect(result).toBe(2);
  });

  it('should return NaN when dividing by zero', () => {
    const result = service.divide(6, 0);
    expect(result).toBeNaN();
  });
});