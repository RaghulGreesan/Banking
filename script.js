class Bank{
    constructor (name, acctype, balance, accno){
      this.name= name;
      this.acctype= acctype;
      this.balance= balance;
      this.accno=accno;
    }
     getBalance(){
       return "your balance is " + this.balance;
     }
     withdraw(withdrawAmt){
       if (withdrawAmt <=this.balance){
         this.balance=this.balance-withdrawAmt;
         return this.getBalance();
         
       }else{
         return "Insufficient balance "  +  this.getBalance();
       }
     }
     deposit(depositAmt){
         this.balance=this.balance+depositAmt;
         return this.getBalance();
     }
  }
  let sourabh=new Bank ("Sourabh","savings",10000,1234567);
  let lokesh=new Bank ("Lokesh","savings",25000,4356797);
  let surya =new Bank ("Surya","savings",100000,13546728);
  let asritha=new Bank ("Asritha","savings",20000,1456282);
  
  console.log(sourabh,lokesh,surya,asritha);
  console.log(sourabh.getBalance());
  
  console.log(surya.withdraw(25000));
  console.log(surya.withdraw(80000));
  console.log(asritha.deposit(20000));