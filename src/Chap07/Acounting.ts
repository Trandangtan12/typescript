import Department from './index'
class AccountingDepartment extends Department {
    constructor(id: string, private reports: string){
        super(id, 'Acounting')
    }
    addEmployee(name: string){
        if(name === 'Max'){
            return;
        }
        this.employees.push(name);
    }
}
export default AccountingDepartment