import { lights } from "../reducers";


describe('lights reducer test suite', () => {
  
    it('should return initial state', () => {
        
        expect(lights()).toMatchSnapshot();
    });
});
