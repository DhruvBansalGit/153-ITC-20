class NumberLogic {
    constructor(queryString) {
        this.queryString = queryString;
      }
      filter() {
        // 1A) FILTERING
        const queryObj = { ...this.queryString };
        const excludeFields = ['url'];
    
        excludeFields.forEach((el) => delete queryObj[el]);
    
        // 1B) ADVANCED FILTERING
        let queryStr = JSON.stringify(queryObj);
        // queryStr = queryStr.replaceAll(
        //   /\b(gte|gt|lte|lt)\b/g,
        //   (match) => `$${match}`
        // );
        return this;
        console.log(queryStr);
      }
}
module.exports = NumberLogic;