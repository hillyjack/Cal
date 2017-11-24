import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()
export class DataService {

  private chosenBankName = new BehaviorSubject<string>('');
  currentBankName = this.chosenBankName.asObservable();

  private bankBranchNum = new BehaviorSubject<string>(''); ;
  currentBranchNum  = this.bankBranchNum .asObservable();

  private BankNameWasChoosen = new BehaviorSubject<boolean> (false); 
  currentBankNameWasChoosen = this.BankNameWasChoosen.asObservable();

  private BankBranchWasNotChoosen = new BehaviorSubject<boolean> (true); 
  currentBankBranchWasNotChoosen = this.BankBranchWasNotChoosen.asObservable();

  constructor() { }
  ChangeBankName(bankName: string){
    this.chosenBankName.next(bankName)
  }

  ChangeBranchNum(branch: number){
    this.bankBranchNum.next(branch.toString())
  }

  ChangeBankNameWasChoosen(BankNameTF: boolean){
    this.BankNameWasChoosen.next(BankNameTF)
  }

  ChangeBankBranchWasNotChoosen(BranchNumberTF: boolean){
    this.BankBranchWasNotChoosen.next(BranchNumberTF)
  }
}