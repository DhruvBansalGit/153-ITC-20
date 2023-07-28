class NumberLogic {
    constructor(queryString) {
        this.queryString = queryString;
      }
      filter() {
        // 1A) FILTERING'
        let url;
        if(this.queryString.url){
           url = this.queryString.url;
        }
        console.log(url);
        return this;
        console.log(queryStr);
      }
      
}
module.exports = NumberLogic;