const ROUTES = {
  LOGIN: '/login',
  COURSES: '/courses',
  DASHBOARD: '/dashboard',
  SETTINGS: '/settings',
  SETTINGS_PAYMENTS: '/settings/payments',
  SETTINGS_COURSES: '/settings/courses',
  CAMPUS: '/campus',
  CAMPUS_SUMMARY: '/campus-summary/:campusId/:campusName',
  ADD_CAMPUS_STUDENT: '/campus-summary/:campusId/add-student',
  CAMPUS_ADD_FEE: '/campus-summary/:campusName/:campusId/add-fee',
  CAMPUS_STUDENTS_IMPORT: '/campus/:id/student-import',
  SETTINGS_STUDENTS: '/settings/students',
  SETTINGS_CAMPUS: '/settings/campus',
  SETTINGS_ALERT: '/settings/alert-config',
  STUDENT_LISTING: '/student-listing',
  ADD_STUDENT: '/add-student',
  VIEW_BATCH: '/view-batch/:batchId',
  STUDENT_EDIT: '/edit-student/',
  MODIFY_STUDENT: '/modify-student/:id',
  STUDENT_VIEW: '/view-student/:id',
  STUDENT_IMPORT: '/import-student',
  BATCHES: '/batches/table',
  DEFAULT_BATCHS_ROUTE: '/batches/table',
  SLOTS: '/batches/slots/table',
  BATCH_STUDENT_LIST: '/batches/slots/:id/students',
  STUDENT_INFO: '/fee/:feeId/student-fee-info/:studentId',
  FEES: '/fees',
  CERTIFICATE: '/certificate',
  ADD_CERTIFICATE: '/create-certificate',
  EDIT_CERTIFICATE: '/edit-certificate/:id',
  FEES_ID: '/fees/:feeId',
  ADD_FEE: '/create-fee',
  INSTRUCTOR_LIST: '/instructor',
  INSTRUCTOR_TEAM: '/instructor-teams',
  ADD_INSTRUCTOR: '/add-instructor',
  INSTRUCTOR_VIEW: '/view-instructor/:id',
  INSTRUCTOR_EDIT: '/edit-instructor/:id',
  ATTENDANCE: '/attendance',
  MARK_ATTENDANCE: '/mark-attendance/:batchId/:dateFilter',
  EDIT_FEE: '/edit-fee/:feeId',
  VIEW_FEEDBACK: '/batches/student/:studentId/feedback',
  REVIEW: '/reviews',
  USERS: '/users',
  USERS_USER: '/users/user',
  USERS_ROLE: '/users/role',
  MASTER: '/master',
  MASTER_BRANCH: '/master/brnach',
  MASTER_CLIENT: '/master/client',
  MASTER_COURIER: '/master/courier',
  MASTER_MENU: '/master/menu',
  MASTER_PICKLIST: '/master/picklist',
  MASTER_TEMPLATE: '/master/template',
  MASTER_ROLE: '/master/role',
  MASTER_PROJECT: '/master/project',
  FEE_CAMPUS: '/fees/:feeId/campus/:campusId',
  SESSION_TRACKING: 'batch/:batchId/session-tracking',
  INSTRUCTOR_CALENDAR: '/instructor-calendar/:instructorId',
  BATCH_SLOT_CALENDER: '/batches/batch-slot-calender',
  CALENDER: '/calender',
  USER_PROFILE: '/user-profile',
  FEEDBACKS: '/feedbacks',
  SUB_FEEDBACK: '/feedbacks/:id/:feedName',
  QUESTIONS: '/feedbacks/:id/questions',
  FEEDBACK_DATE: '/feedbacks/:id/:feedName/:date',
  FEEDBACK_CAMPUS: '/feedbacks/:id/:feedName/:date/:campus',
  FEEDBACK_REPORTS: '/feedbacks/:id/:feedName/:date/:campus/:count',
  TASKS: '/tasks',
};

const ROUTES_NAME = {
  LOGIN: 'login',
  COURSES: 'courses',
  DASHBOARD: 'dashboard',
  CAMPUS: 'campus',
  VIEW_BATCH: 'view-batch',
  CAMPUS_SUMMARY: 'campus-summary',
  SETTINGS: 'settings',
  SETTINGS_PAYMENTS: 'settings-payments',
  SETTINGS_COURSES: 'settings-courses',
  SETTINGS_CAMPUS: 'settings-campus',
  SETTINGS_ALERT: 'settings-alert-config',
  ADD_CAMPUS_STUDENT: 'add-campus-student',
  CAMPUS_ADD_FEE: 'campus-add-fee',
  SETTINGS_STUDENTS: 'settings-students',
  CAMPUS_STUDENTS_IMPORT: 'campus-student-import',
  STUDENT_LISTING: 'student-listing',
  ADD_STUDENT: 'add-student',
  MODIFY_STUDENT: 'edit-student',
  INSTRUCTOR_CALENDAR: 'instructor-calendar',
  STUDENT_VIEW: 'view-student',
  STUDENT_IMPORT: 'import-student',
  BATCHES: 'batches-table',
  SLOTS: 'slots',
  BATCH_STUDENT_LIST: 'batch-students-list',
  STUDENT_INFO: 'student-fee-info',
  INSTRUCTOR_LIST: 'instructor',
  INSTRUCTOR_TEAM: 'instructor-teams',
  ADD_INSTRUCTOR: 'add-instructor',
  INSTRUCTOR_VIEW: 'view-instructor',
  INSTRUCTOR_EDIT: 'edit-instructor',
  ATTENDANCE: 'attendance',
  MARK_ATTENDANCE: 'mark-attendance',
  FEES: 'fees',
  CERTIFICATE: 'certificate',
  ADD_FEE: 'fee',
  FEES_ID: 'fees-id',
  ADD_CERTIFICATE: 'add-certificate',
  EDIT_CERTIFICATE: 'edit-certificate',
  EDIT_FEE: 'fee',
  VIEW_FEEDBACK: 'feedback',
  REVIEW: 'reviews',
  USERS: 'users',
  USERS_USER: 'user',
  USERS_ROLE: 'role',
  MASTER: 'master',
  MASTER_BRANCH: 'master-brnach',
  MASTER_CLIENT: 'master-client',
  MASTER_COURIER: 'master-courier',
  MASTER_MENU: 'master-menu',
  MASTER_PICKLIST: 'master-picklist',
  MASTER_TEMPLATE: 'master-template',
  MASTER_ROLE: 'master-role',
  MASTER_PROJECT: 'master-project',
  FEE_CAMPUS: 'fee-campus',
  SESSION_TRACKING: 'session-tracking',
  BATCH_SLOT_CALENDER: 'batch-slot-calender',
  CALENDER: 'calender',
  USER_PROFILE: 'user-profile',
  FEEDBACKS: 'feedback',
  SUB_FEEDBACK: 'feed-info',
  QUESTIONS: 'questions_feedback',
  FEEDBACK_DATE: 'feedback_on_date',
  FEEDBACK_CAMPUS: 'feedback_on_campus',
  FEEDBACK_REPORTS: 'feedback_reports',
  TASKS: 'tasks',
};

export { ROUTES, ROUTES_NAME };
