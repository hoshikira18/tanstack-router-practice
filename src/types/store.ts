export type AccountProps = {
    balance: number;
    loan: number;
    loanPurpose: string;
};

export type CustomerProps = {
    fullName: string;
    nationalID: string;
    createAt: string;
};

export type StoreProps = {
    account: AccountProps;
    customer: CustomerProps;
};
