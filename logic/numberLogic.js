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
        // console.log(url[0]);
        let value ={
          numbers:[]
        };
        for(let i = 0;i< url.length;i++){
          let querystr = fetch(url[i],{
            headers:{
              Authentication: 'Authorization',
            }
          })
          querystr.then(res=> res.json()).then(val=> console.log(JSON.stringify(val.numbers)) )
        }
        console.log(value.numbers)
        // let querystr = fetch(url[0],{
        //   headers:{
        //     Authentication: 'Authorization',
        //   }
        // })
        // querystr.then(res=> res.json()).then(value=>console.log(value))
      
      }

}
module.exports = NumberLogic;