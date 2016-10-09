module.exports = function () {
        this.data=[];
        this.n=0;
        this.maxnum=0;
        this.push=function (x) {
            if (this.n>0) {
                if (x>this.maxnum) {
                    this.data.push((this.maxnum<<1)+1);
                    this.maxnum=x;
                } else this.data.push(x<<1);
            } else {
                this.data.push((x<<1)+1);
                this.maxnum=x;
            }
            ++this.n;
        };
        this.pop=function () {
            if (this.n>0) {
                --this.n;
                var x=this.data.pop();
                if (x%2 == 1) {
                   var v=this.maxnum;
                   this.maxnum=x>>1;
                   return v;
                } else return (x>>1)
            } else throw Error('empty stack');
        };
        this.max=function () {
            if (this.n == 0) throw Error('empty stack');
            return this.maxnum
        };
}


