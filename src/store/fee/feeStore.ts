import { hookstate, ImmutableObject, State, useHookstate } from '@hookstate/core';

export enum BillingCycle {
  MONTHLY = 'MONTHLY',
  YEARLY = 'YEARLY',
  QUARTERLY = 'QUARTERLY',
  HALFYEARLY = 'HALFYEARLY',
}

export interface FeeUtilityState {
  id: string;
  feeName: string;
  feeDescription: string;
  startDate: string;
  endDate: string;
  particulars: string;
  currency: string;
  autoReminder: string;
  paidBySchool: boolean | null;
  campusId: string;
  campusName: string;
  paymentType: string;
  noOfInstallment: number;
  amount: number;
  discount: {
    value: number | undefined;
    type: string;
  };
  perStudentAmount: number;
  installmentAmount: number;
  batches: string[];
  courseId: string;
  courseName: string;
  students: string[];
  studentType: string;
  totalAmount: number;
  received: number;
  balance: number;
  status: string;
  includeCampusStudents: boolean;
  billingCycle: string;
}

export interface FeeHelperState {
  feeToEdit: string;
  currentPage: number;
  viewFeePage: boolean;
  feeToView: string;
  studentToView: string;
  addStudent: boolean;
}

export const initialHelperState = {
  feeToEdit: '',
  currentPage: 1,
  viewFeePage: false,
  feeToView: '',
  studentToView: '',
  addStudent: false,
};

export const initialState = {
  id: '',
  feeName: '',
  feeDescription: '',
  startDate: new Date().toISOString().substring(0, 10),
  endDate: new Date().toISOString().substring(0, 10),
  particulars: '',
  currency: 'INR',
  autoReminder: '',
  paidBySchool: null,
  campusId: '',
  campusName: '',
  paymentType: 'Installments',
  noOfInstallment: 1,
  amount: 0,
  perStudentAmount: 0,
  discount: {
    value: 0,
    type: '',
  },
  installmentAmount: 0,
  batches: [] || null,
  courseId: '',
  courseName: '',
  students: [] || null,
  studentType: '',
  totalAmount: 0,
  received: 0,
  balance: 0,
  status: '',
  includeCampusStudents: false,
  billingCycle: BillingCycle.MONTHLY,
};

const globalState = hookstate<FeeUtilityState>(initialState);
const helperState = hookstate<FeeHelperState>(initialHelperState);

const useFeeUtilityState = (): {
  feeUtilityState: State<ImmutableObject<FeeUtilityState>>;
  resetFeeForm: () => void;
  feeHelperState: State<FeeHelperState>;
} => {
  const feeUtilityState = useHookstate(globalState);
  const feeHelperState = useHookstate(helperState);
  const resetFeeForm = () => {
    feeHelperState.feeToEdit.set('');
    feeHelperState.currentPage.set(1);
    feeUtilityState.set({
      id: '',
      feeName: '',
      feeDescription: '',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
      particulars: '',
      currency: 'INR',
      autoReminder: '',
      paidBySchool: null,
      campusId: '',
      campusName: '',
      paymentType: 'Installments',
      noOfInstallment: 1,
      amount: 0,
      perStudentAmount: 0,
      installmentAmount: 0,
      discount: {
        value: 0,
        type: '',
      },
      batches: [] || null,
      courseId: '',
      courseName: '',
      students: [] || null,
      studentType: '',
      totalAmount: 0,
      received: 0,
      balance: 0,
      status: '',
      includeCampusStudents: false,
      billingCycle: BillingCycle.MONTHLY,
    });
  };

  return { feeUtilityState, resetFeeForm, feeHelperState };
};
export default useFeeUtilityState;
