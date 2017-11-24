import { Component, OnInit } from '@angular/core';
import { CcaBankComponent } from '../cca-bank/cca-bank.component';
import { DataService } from '../data.service'

@Component({
  selector: 'app-cca-bank-branch',
  templateUrl: './cca-bank-branch.component.html',
  styleUrls: ['./cca-bank-branch.component.css']
})
export class CcaBankBranchComponent implements OnInit {
  
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
  OnChoosingBranch(){
    this.data.ChangeBankBranchWasNotChoosen(false);
    this.data.ChangeBranchNum(parseInt(this.bankBranchNum));
  };
}
