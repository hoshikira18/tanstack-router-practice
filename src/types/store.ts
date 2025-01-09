export type AccountProps = {
    balance: number;
    loan: number;
    loanPurpose: string;
    isLoading: boolean;
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
