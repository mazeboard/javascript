module.exports = function () {
        this.data=[];
        this.mdata=[];
        this.n=0;
        this.maxnum=0;
        this.push=function (x) {
            if (this.n>0) {
                if (x>=this.maxnum) {
                    this.mdata.push(x);
                    this.maxnum=x;
                } 
                this.data.push(x);
            } else {
                this.data.push(x);
                this.mdata.push(x);
                this.maxnum=x;
            }
            ++this.n;
        };
        this.pop=function () {
            if (this.n>0) {
                --this.n;
                var x=this.data.pop();
                if (x == this.maxnum) {
                   this.mdata.pop();
                   this.maxnum=this.mdata.pop();
                   this.mdata.push(this.maxnum);
                }
                return x;
            } else throw Error('empty stack');
        };
        this.max=function () {
            if (this.n==0) throw Error('empty stack');
            return this.maxnum
        };
}


