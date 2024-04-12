import { getUUIdv4 } from "../../src/plugins";

describe('get-uuid.plugin.ts', () => { 
    
    test('getUUIdv4() should return a UUID', () => { 
        const uuid = getUUIdv4();
        
        expect(typeof uuid).toBe('string');
        expect(uuid.length).toBe(36);
    })
});
