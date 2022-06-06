import { test, expect } from "@jest/globals";
import wordCheck from "../src/index.js";

describe('check if letter is c', () => {
test('test if letter is correct, missplaced or incorrect', () => {
    const output = wordCheck ("HALLA", "CYKLA");
    expect(output[0].result).toBe("correct");
    expect(output[1].result).toBe("incorrect");
    expect(output[2].result).toBe("missplaced");
    expect(output[3].result).toBe("missplaced");
})

test('test if all are correct', () => {
    const output = wordCheck ("hello", "hello");
    expect(output[0].result).toBe("correct");
    expect(output[1].result).toBe("correct");
    expect(output[2].result).toBe("correct");
    expect(output[3].result).toBe("correct");
    expect(output[4].result).toBe("correct");
})


test('test if all are incorrect', () => {
    const output = wordCheck ("play", "into");
    expect(output[0].result).toBe("incorrect");
    expect(output[1].result).toBe("incorrect");
    expect(output[2].result).toBe("incorrect");
    expect(output[3].result).toBe("incorrect");
    
})

test('test if all are misplaced', () => {
    const output = wordCheck ("barn", "nrab");
    expect(output[0].result).toBe("misplaced");
    expect(output[1].result).toBe("misplaced");
    expect(output[2].result).toBe("misplaced");
    expect(output[3].result).toBe("misplaced");
    
})



});