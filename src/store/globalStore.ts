import { hookstate, State, useHookstate } from '@hookstate/core';
import moment from 'moment';

interface GlobalStateInterface {
  campusSummaryTab: number;
  instructorTab: number;
  sessionTrackTab: number;
  batchDetailsTab: number;
  studentDetailsTab: number;
  newlyAddedAbsents: { comment: string; studentId: string }[];
  newlyAddedPresents: { comment: string; studentId: string }[];
  absenteesList: { comment: string; studentId: string; isEditEnabled: boolean }[];
  currentAttendenceDate: string;
}

const initialState = {
  campusSummaryTab: 0,
  instructorTab: 0,
  sessionTrackTab: 0,
  batchDetailsTab: 0,
  studentDetailsTab: 0,
  absenteesList: [],
  newlyAddedAbsents: [],
  newlyAddedPresents: [],
  currentAttendenceDate: moment(new Date()).format('YYYY-MM-DD'),
};

const globalState = hookstate<GlobalStateInterface>(initialState);

const useGlobalUtilityState = (): { globalUtilityState: State<GlobalStateInterface> } => {
  const globalUtilityState = useHookstate(globalState);
  return { globalUtilityState };
};

export default useGlobalUtilityState;
