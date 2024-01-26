// import { AddStudent, StudentImport, StudentListing, ViewStudent } from '../containers/students';
// import CoursePage from '../containers/course';
import { ROUTES, ROUTES_NAME } from '../constants/routes';

// import Dashboard from '../containers/dashboard/Dashboard';
// import Payments from '../containers/settings/Payments';
// import Courses from '../containers/settings/Courses';
// import Alert from '../containers/settings/Alert';
// import Students from '../containers/settings/Students';
// import ViewInstructor from '../containers/instructor/viewdetails/ViewDetails';
// import InstructorListing from '../containers/instructor/main/InstructorListing';
// import instructorForm from '../containers/instructor/addInstructor/InstructorForm';
// import SlotList from '../containers/batches/slots/SlotList';
// import StudentList from '../containers/batches/slots/StudentList';
// import BatchList from '../containers/batches/batches/BatchList';
// import FeeStudents from '../containers/fees/student-fee/FeeStudents';
// import FeeSection from '../containers/fees/add-fee/FeeSection';
// import StudentFeeInfo from '../containers/fees/student-fee/student-info/StudentFeeInfo';
// import CampusList from '../containers/campus/CampusList';
// import CampusSummary from '../containers/campus/campusSummary/CampusSummary';
// import ViewFeedback from '../containers/batches/feedback/ViewFeedback';
// import Review from '../containers/review';
// import UserList from '../containers/users/UserList';
// import FeeCampus from '../containers/fees/student-fee/FeeCampus';
// import ViewBatchDetails from '../containers/batches/batches/ViewBatchDetails';
// import AttendanceStudentList from '../containers/attendance/AttendanceStudentList';
// import Attendance from '../containers/attendance/Attendance';
// import SessionTracking from '../containers/batches/session-tracking/SessionTracking';
// import InstructorCalendarView from '../containers/instructor/main/InstructorCalendarView';
// import Instructor from '../containers/instructor/main/Instructor';
// import Calender from '../containers/batches/batches/Calender';
// import UserProfile from '../containers/users/UserProfile';
// import Campus from '../containers/settings/Campus';
// import MainFeedback from '../containers/feedback/MainFeedback';
// import SubFeedback from '../containers/feedback/SubFeedback';
// import Questions2 from '../containers/feedback/questions/Questions2';
// import FeedbackOnDate from '../containers/feedback/FeedbackOnDate';
// import FeedbackOnCampus from '../containers/feedback/FeedbackOnCampus';
// import FeedbackReports from '../containers/feedback/FeedbackReports';
// import Tasks from '../containers/tasks';
// import CertificateDetails from '../containers/Certificate/Certificate';
// import AddCertificate from '../containers/Certificate/AddCertificate';
import User from '../Containers/User/User'

type RouteDescription = {
  name: string;
  path: string;
  isPublic?: boolean;
  component: React.FC;
};

// eslint-disable-next-line import/prefer-default-export
export const routes: RouteDescription[] = [
  {
    name: ROUTES_NAME.USERS_USER,
    component: User,
    path: ROUTES.USERS_USER,
  },
  {
    name: ROUTES_NAME.USERS_ROLE,
    component: User,
    path: ROUTES.USERS_ROLE,
  },
  {
    name: ROUTES_NAME.MASTER_BRANCH,
    component: User,
    path: ROUTES.MASTER_BRANCH,
  },
  {
    name: ROUTES_NAME.MASTER_CLIENT,
    component: User,
    path: ROUTES.MASTER_CLIENT,
  },
  {
    name: ROUTES_NAME.MASTER_COURIER,
    component: User,
    path: ROUTES.MASTER_COURIER,
  },
  {
    name: ROUTES_NAME.MASTER_MENU,
    component: User,
    path: ROUTES.MASTER_MENU,
  },
  {
    name: ROUTES_NAME.MASTER_PICKLIST,
    component: User,
    path: ROUTES.MASTER_PICKLIST,
  },
  {
    name: ROUTES_NAME.MASTER_ROLE,
    component: User,
    path: ROUTES.MASTER_ROLE,
  },
  {
    name: ROUTES_NAME.MASTER_TEMPLATE,
    component: User,
    path: ROUTES.MASTER_TEMPLATE,
  },
  // {
  //   name: ROUTES_NAME.COURSES,
  //   component: CoursePage,
  //   path: ROUTES.COURSES,
  // },
  // {
  //   name: ROUTES_NAME.CAMPUS,
  //   component: CampusList,
  //   path: ROUTES.CAMPUS,
  // },
  // {
  //   name: ROUTES_NAME.STUDENT_LISTING,
  //   component: StudentListing,
  //   path: ROUTES.STUDENT_LISTING,
  // },
  // {
  //   name: ROUTES_NAME.ADD_STUDENT,
  //   component: AddStudent,
  //   path: ROUTES.ADD_STUDENT,
  // },
  // {
  //   name: ROUTES_NAME.ADD_CAMPUS_STUDENT,
  //   component: AddStudent,
  //   path: ROUTES.ADD_CAMPUS_STUDENT,
  // },
  // {
  //   name: ROUTES_NAME.VIEW_BATCH,
  //   component: ViewBatchDetails,
  //   path: ROUTES.VIEW_BATCH,
  // },
  // {
  //   name: ROUTES_NAME.CAMPUS_SUMMARY,
  //   component: CampusSummary,
  //   path: ROUTES.CAMPUS_SUMMARY,
  // },
  // {
  //   name: ROUTES_NAME.ATTENDANCE,
  //   component: Attendance,
  //   path: ROUTES.ATTENDANCE,
  // },
  // {
  //   name: ROUTES_NAME.MARK_ATTENDANCE,
  //   component: AttendanceStudentList,
  //   path: ROUTES.MARK_ATTENDANCE,
  // },
  // {
  //   name: ROUTES_NAME.MODIFY_STUDENT,
  //   component: AddStudent,
  //   path: ROUTES.MODIFY_STUDENT,
  // },
  // {
  //   name: ROUTES_NAME.STUDENT_VIEW,
  //   component: ViewStudent,
  //   path: ROUTES.STUDENT_VIEW,
  // },
  // {
  //   name: ROUTES_NAME.INSTRUCTOR_EDIT,
  //   component: instructorForm,
  //   path: ROUTES.INSTRUCTOR_EDIT,
  // },
  // {
  //   name: ROUTES_NAME.ADD_INSTRUCTOR,
  //   component: instructorForm,
  //   path: ROUTES.ADD_INSTRUCTOR,
  // },
  // {
  //   name: ROUTES_NAME.INSTRUCTOR_LIST,
  //   component: Instructor,
  //   path: ROUTES.INSTRUCTOR_LIST,
  // },

  // {
  //   name: ROUTES_NAME.INSTRUCTOR_TEAM,
  //   component: InstructorListing,
  //   path: ROUTES.INSTRUCTOR_TEAM,
  // },
  // {
  //   name: ROUTES_NAME.INSTRUCTOR_VIEW,
  //   component: ViewInstructor,
  //   path: ROUTES.INSTRUCTOR_VIEW,
  // },
  // {
  //   name: ROUTES_NAME.STUDENT_IMPORT,
  //   component: StudentImport,
  //   path: ROUTES.STUDENT_IMPORT,
  // },
  // {
  //   name: ROUTES_NAME.CAMPUS_STUDENTS_IMPORT,
  //   component: StudentImport,
  //   path: ROUTES.CAMPUS_STUDENTS_IMPORT,
  // },
  // {
  //   name: ROUTES_NAME.BATCHES,
  //   component: BatchList,
  //   path: ROUTES.BATCHES,
  // },
  // {
  //   name: ROUTES_NAME.SLOTS,
  //   component: SlotList,
  //   path: ROUTES.SLOTS,
  // },
  // {
  //   name: ROUTES_NAME.BATCH_STUDENT_LIST,
  //   component: StudentList,
  //   path: ROUTES.BATCH_STUDENT_LIST,
  // },
  // {
  //   name: ROUTES_NAME.SETTINGS_PAYMENTS,
  //   component: Payments,
  //   path: ROUTES.SETTINGS_PAYMENTS,
  // },
  // {
  //   name: ROUTES_NAME.SETTINGS_COURSES,
  //   component: Courses,
  //   path: ROUTES.SETTINGS_COURSES,
  // },
  // {
  //   name: ROUTES_NAME.SETTINGS_ALERT,
  //   component: Alert,
  //   path: ROUTES.SETTINGS_ALERT,
  // },
  // {
  //   name: ROUTES_NAME.SETTINGS_STUDENTS,
  //   component: Students,
  //   path: ROUTES.SETTINGS_STUDENTS,
  // },
  // {
  //   name: ROUTES_NAME.FEES,
  //   component: Fees,
  //   path: ROUTES.FEES,
  // },
  // {
  //   name: ROUTES_NAME.FEES_ID,
  //   component: FeeStudents,
  //   path: ROUTES.FEES_ID,
  // },
  // {
  //   name: ROUTES_NAME.CERTIFICATE,
  //   component: CertificateDetails,
  //   path: ROUTES.CERTIFICATE,
  // },
  // {
  //   name: ROUTES_NAME.INSTRUCTOR_CALENDAR,
  //   component: InstructorCalendarView,
  //   path: ROUTES.INSTRUCTOR_CALENDAR,
  // },
  // {
  //   name: ROUTES_NAME.FEE_CAMPUS,
  //   component: FeeCampus,
  //   path: ROUTES.FEE_CAMPUS,
  // },
  // {
  //   name: ROUTES_NAME.ADD_FEE,
  //   component: FeeSection,
  //   path: ROUTES.ADD_FEE,
  // },
  // {
  //   name: ROUTES_NAME.ADD_CERTIFICATE,
  //   component: AddCertificate,
  //   path: ROUTES.ADD_CERTIFICATE,
  // },
  // {
  //   name: ROUTES_NAME.EDIT_CERTIFICATE,
  //   component: AddCertificate,
  //   path: ROUTES.EDIT_CERTIFICATE,
  // },
  // {
  //   name: ROUTES_NAME.EDIT_FEE,
  //   component: FeeSection,
  //   path: ROUTES.EDIT_FEE,
  // },
  // {
  //   name: ROUTES_NAME.CAMPUS_ADD_FEE,
  //   component: FeeSection,
  //   path: ROUTES.CAMPUS_ADD_FEE,
  // },
  // {
  //   name: ROUTES_NAME.STUDENT_INFO,
  //   component: StudentFeeInfo,
  //   path: ROUTES.STUDENT_INFO,
  // },
  // {
  //   name: ROUTES_NAME.VIEW_FEEDBACK,
  //   component: ViewFeedback,
  //   path: ROUTES.VIEW_FEEDBACK,
  // },
  // {
  //   name: ROUTES_NAME.REVIEW,
  //   component: Review,
  //   path: ROUTES.REVIEW,
  // },
  // {
  //   name: ROUTES_NAME.USERS,
  //   component: UserList,
  //   path: ROUTES.USERS,
  // },
  // {
  //   name: ROUTES_NAME.SESSION_TRACKING,
  //   component: SessionTracking,
  //   path: ROUTES.SESSION_TRACKING,
  // },
  // {
  //   name: ROUTES_NAME.BATCH_SLOT_CALENDER,
  //   component: Calender,
  //   path: ROUTES.BATCH_SLOT_CALENDER,
  // },
  // {
  //   name: ROUTES_NAME.CALENDER,
  //   component: Calender,
  //   path: ROUTES.CALENDER,
  // },
  // {
  //   name: ROUTES_NAME.USER_PROFILE,
  //   component: UserProfile,
  //   path: ROUTES.USER_PROFILE,
  // },
  // {
  //   name: ROUTES_NAME.SETTINGS_CAMPUS,
  //   component: Campus,
  //   path: ROUTES.SETTINGS_CAMPUS,
  // },
  // {
  //   name: ROUTES_NAME.FEEDBACKS,
  //   component: MainFeedback,
  //   path: ROUTES.FEEDBACKS,
  // },
  // {
  //   name: ROUTES_NAME.SUB_FEEDBACK,
  //   component: SubFeedback,
  //   path: ROUTES.SUB_FEEDBACK,
  // },
  // {
  //   name: ROUTES_NAME.QUESTIONS,
  //   component: Questions2,
  //   path: ROUTES.QUESTIONS,
  //   isPublic: true,
  // },
  // {
  //   name: ROUTES_NAME.FEEDBACK_DATE,
  //   component: FeedbackOnDate,
  //   path: ROUTES.FEEDBACK_DATE,
  // },
  // {
  //   name: ROUTES_NAME.FEEDBACK_CAMPUS,
  //   component: FeedbackOnCampus,
  //   path: ROUTES.FEEDBACK_CAMPUS,
  // },
  // {
  //   name: ROUTES_NAME.FEEDBACK_REPORTS,
  //   component: FeedbackReports,
  //   path: ROUTES.FEEDBACK_REPORTS,
  // },
  // {
  //   name: ROUTES_NAME.TASKS,
  //   component: Tasks,
  //   path: ROUTES.TASKS,
  // },
];
