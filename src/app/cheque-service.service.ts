import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class chequeTransactions{

  transactionID:number;
  transactionDate:string;
  transactionType:string;
  chequeID:string;
  payeeAccountNo:string;
  recipientAccountNo:string;
  amount:number;
  bankName:string;
  Ifsc:string;
  issueDate:string;

  constructor(transactionID:number,transactionDate:string,transactionType:string,chequeID:string,payeeAccountNo:string,recipientAccountNo:string,amount:number,bankName:string,Ifsc:string,issueDate:string){
    this.transactionID=transactionID;
    this.transactionDate=transactionDate;
    this.transactionType=transactionType;
    this.chequeID=chequeID;
    this.payeeAccountNo=payeeAccountNo;
    this.recipientAccountNo=recipientAccountNo;
    this.amount=amount;
    this.bankName=bankName;
    this.Ifsc=Ifsc;
    this.issueDate=issueDate;
    
  }
}


@Injectable({
  providedIn: 'root'
})
export class ChequeServiceService {

  constructor(private http:HttpClient) { }

  
  public debitusingcheque(debit:chequeTransactions){   
    console.log(debit) 
    return this.http.put("http://localhost:1811/debit-using-cheque/debit-amount",debit,{responseType: 'json'});
  }
  public creditusingcheque(credit:chequeTransactions){   
    console.log(credit) 
    return this.http.put("http://localhost:1812/credit-using-cheque/credit-amount",credit,{responseType: 'json'});
  }

}
