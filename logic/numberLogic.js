class NumberLogic {
    constructor(queryString) {
        this.queryString = queryString;
        this.value = [];
      }
      filter() {
        // 1A) FILTERING'
        let url;
        if(this.queryString.url){
           url = this.queryString.url;
        }
        // console.log(url[0]);
        
        for(let i = 0;i< url.length;i++){
          let querystr = fetch(url[i],{
            headers:{
              Authentication: 'Authorization',
            }
          })
          querystr.then(res=> res.json()).then(val=> {
          this.value = [...this.value ,...(JSON.stringify(val.numbers).split(',').join(' ').map((value,index)=>+value))]
          console.log(this.value)
        })
        }
        console.log(this.value)
        // let querystr = fetch(url[0],{
        //   headers:{
        //     Authentication: 'Authorization',
        //   }
        // })
        // querystr.then(res=> res.json()).then(value=>console.log(value))
      
      }

}
module.exports = NumberLogic;