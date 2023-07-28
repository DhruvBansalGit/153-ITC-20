class NumberLogic {
    constructor(queryString) {
        this.queryString = queryString;
        this.ans2 = [];
      }
      async filter() {
        try{const ar = this.queryString.url;
        const ans = [];
        for(let x of ar ) {
            let data = await fetch(x, { headers : {"Authentication" : `Authentication` }});
            let d = await data.json();
            ans.push(d.numbers);
          }

        ans.forEach(x => this.ans2.push(...x))
        this.ans2 = Array.from(new Set(this.ans2));
        this.ans2.sort((a, b) => a - b);
        // console.log(this.ans2);
        return this.ans2;
      }catch(err){
          console.log(err)
        }

      }
      
}

module.exports = NumberLogic;