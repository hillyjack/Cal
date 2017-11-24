import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service'



@Component({
  selector: 'app-cca-bank',
  templateUrl: './cca-bank.component.html',
  styleUrls: ['./cca-bank.component.css']
})
export class CcaBankComponent implements OnInit {
  
  chosenBankName:string;
  bankBranchNum:string;
  
  BankNameWasChoosen:boolean; 
  BankBranchWasNotChoosen:boolean;
  
  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentBankName.subscribe(bankName => this.chosenBankName = bankName)
    this.data.currentBranchNum.subscribe(branch => this.bankBranchNum = branch)
    this.data.currentBankNameWasChoosen.subscribe(BankNameTF => this.BankNameWasChoosen = BankNameTF)
    this.data.currentBankBranchWasNotChoosen.subscribe(BranchNumberTF => this.BankBranchWasNotChoosen = BranchNumberTF)
  }

  OnChoosingBank(){
    this.data.ChangeBankNameWasChoosen(true);
    this.data.ChangeBankName(this.chosenBankName);
  };
}
