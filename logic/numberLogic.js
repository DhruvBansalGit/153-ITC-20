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
        console.log(url[0]);
        let querystr = fetch(url[0],{
          headers:{
            Authentication: 'Authorization',
          }
        })
        querystr.then(res=> res.json()).then(value=>console.log(value))
      
      }

}
module.exports = NumberLogic;