import { sum } from "../sum";

test("calculate two sum", ()=>{
    const result = sum(3,4);
    expect(result).toBe(7);
});