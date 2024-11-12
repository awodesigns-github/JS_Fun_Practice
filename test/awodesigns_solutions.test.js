import { describe, test, it, expect } from "vitest";
import { addb, identity, subb, mulb, minb, add, maxb } from "../Solutions/awodesigns_solutions";

describe('identity', () => {
    it('should return the argument passed', () => {
        // Arrange phase
        const arg = 5;
        // Act phase
        const result = identity(arg);
        // Assert phase
        expect(result).toBe(5);
    });
});

describe('addb', () => {
    it('should return the sum of two numbers', () => {
        expect(addb(2, 2)).toBe(4)
    });
});

describe('subb', () => {
    it('should return the difference of two numbers', () => {
        expect(subb(2, 2)).toBe(0);
    });
});

describe('mulb', () => {
    it('should return the product of two numbers', () => {
        expect(mulb(2, 3)).toBe(6);
    });
});

describe('minb', () => {
    it('should return the minimum of two numbers', () => {
        expect(minb(2, 3)).toBe(2);
    });
});

describe('maxb', () => {
    it('should return the maximum of two numbers', () => {
        expect(maxb(1, 2)).toBe(2);
    });
});

describe('add', () => {
    it('should return the sum of all arguments passed', () => {
        expect(add(1, 2, 3, 4, 5)).toBe(15);
    });
});