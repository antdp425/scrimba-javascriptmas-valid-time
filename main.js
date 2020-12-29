function validTime(str) {
   let [hours, minutes] = str.split(":")
   let validHours = hours < 24
   let validMinutes = minutes < 60
   return !!(validHours && validMinutes)
}



/**
* Test Suite 
*/
describe('validTime()', () => {
   it('returns true for valid time', () => {
       // arrange
       const str = '13:58';
       
       // act
       const result = validTime(str);

       // log
       console.log("result 1: ", result);
       
       // assert
       expect(result).toBe(true);
   });

   it('returns false when invalid hours', () => {
       // arrange
       const str = '25:51';
       
       // act
       const result = validTime(str);

       // log
       console.log("result 1: ", result);
       
       // assert
       expect(result).toBe(false);
   });

   it('returns false when invalid minutes', () => {
       // arrange
       const str = '02:76';
       
       // act
       const result = validTime(str);

       // log
       console.log("result 1: ", result);
       
       // assert
       expect(result).toBe(false);
   });
});