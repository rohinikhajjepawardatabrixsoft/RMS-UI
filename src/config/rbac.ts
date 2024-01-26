const FEAT_CAMPUS = 'campus';
const FEAT_STUDENT = 'student';
const FEAT_STUDENT_COMMENTS = 'studentComments';
const FEAT_STUDENT_FEEDBACKS = 'studentFeedbacks';
const FEAT_BATCH = 'batch';
const FEAT_BATCH_SESSION_UPDATE = 'batchSessionUpdate';
const FEAT_SLOT = 'slot';
const FEAT_INSTRUCTOR = 'instructor';
const FEAT_FEES = 'fees';
const FEAT_HOLIDAYS = 'holidays';
const FEAT_ESCALATIONS = 'escalations';
const FEAT_REVIEWS = 'reviews';
const FEAT_USERS = 'users';
const FEAT_ATTENDANCE = 'attendance';
const FEAT_COURSES = 'courses';
const FEAT_FEEDBACKS = 'feedbacks';
const FEAT_CALENDER = 'calender';
const FEAT_COURSE_MODULES = 'courseModules';
const FEAT_COURSE_CHAPTERS = 'courseChapters';
const FEAT_COURSE_SYLLABUS = 'courseSyllabus';
const FEAT_PAYMENT_METHODS = 'paymentMethods';
const FEAT_PAYMENT_OPTIONS = 'paymentOptions';
const FEAT_PAYMENT_INSTALMENT_CONFIG = 'paymentInstalmentConfig';
const FEAT_PAYMENT_CURRENCIES = 'paymentCurrencies';
const FEAT_PAYMENT_REMINDERS = 'paymentReminders';
const FEAT_PAYMENT_DISCOUNTS = 'paymentDiscounts';
const FEAT_PARTICULAR = 'particular';
const FEAT_STUDENT_GRADES = 'studentGrades';
const FEAT_STUDENT_LEVELS = 'studentLevels';
const FEAT_STUDENT_LEARNING_ATTRIBUTES = 'studentLearningAttributes';
const FEAT_ALLCAMPUS_HOLIDAY = 'allCampusHoliday';

const FEATURES = [
  FEAT_CAMPUS,
  FEAT_STUDENT,
  FEAT_STUDENT_COMMENTS,
  FEAT_BATCH,
  FEAT_CALENDER,
  FEAT_BATCH_SESSION_UPDATE,
  FEAT_SLOT,
  FEAT_INSTRUCTOR,
  FEAT_FEES,
  FEAT_STUDENT_FEEDBACKS,
  FEAT_REVIEWS,
  FEAT_USERS,
  FEAT_ATTENDANCE,
  FEAT_COURSES,
  FEAT_FEEDBACKS,
  FEAT_COURSE_MODULES,
  FEAT_COURSE_CHAPTERS,
  FEAT_COURSE_SYLLABUS,
  FEAT_PAYMENT_METHODS,
  FEAT_PAYMENT_OPTIONS,
  FEAT_PAYMENT_INSTALMENT_CONFIG,
  FEAT_PAYMENT_CURRENCIES,
  FEAT_PAYMENT_REMINDERS,
  FEAT_PAYMENT_DISCOUNTS,
  FEAT_PARTICULAR,
  FEAT_STUDENT_GRADES,
  FEAT_STUDENT_LEVELS,
  FEAT_STUDENT_LEARNING_ATTRIBUTES,
  FEAT_HOLIDAYS,
  FEAT_ESCALATIONS,
  FEAT_ALLCAMPUS_HOLIDAY,
] as const;

export type Feature = (typeof FEATURES)[number];

export type RoleActionMap = {
  create?: readonly Feature[];
  read?: readonly Feature[];
  update?: readonly Feature[];
  delete?: readonly Feature[];
  import?: readonly Feature[];
};

const superAdminRole: RoleActionMap = {
  create: FEATURES,
  read: FEATURES,
  update: FEATURES,
  delete: FEATURES,
  import: [FEAT_STUDENT],
};

const adminRole: RoleActionMap = {
  create: FEATURES,
  read: FEATURES,
  update: FEATURES,
  delete: FEATURES,
  import: [FEAT_STUDENT],
};

const operationsManagerRole: RoleActionMap = {
  read: FEATURES,
  update: FEATURES.filter(
    (it) =>
      ![
        FEAT_STUDENT_FEEDBACKS,
        FEAT_USERS,
        FEAT_COURSES,
        FEAT_COURSE_MODULES,
        FEAT_COURSE_CHAPTERS,
        FEAT_COURSE_SYLLABUS,
        FEAT_ALLCAMPUS_HOLIDAY,
      ].includes(it),
  ),
  import: [FEAT_STUDENT],
};

const operationsRole: RoleActionMap = {
  read: FEATURES,
  update: operationsManagerRole.update?.filter(
    (it) =>
      ![
        FEAT_PAYMENT_METHODS,
        FEAT_PAYMENT_OPTIONS,
        FEAT_PAYMENT_INSTALMENT_CONFIG,
        FEAT_PAYMENT_CURRENCIES,
        FEAT_PAYMENT_REMINDERS,
        FEAT_PAYMENT_DISCOUNTS,
        FEAT_PARTICULAR,
        FEAT_STUDENT_GRADES,
        FEAT_STUDENT_LEVELS,
        FEAT_STUDENT_LEARNING_ATTRIBUTES,
        FEAT_ALLCAMPUS_HOLIDAY,
      ].includes(it),
  ),
  import: [FEAT_STUDENT],
};

const instructorAdminRole: RoleActionMap = {
  read: [
    FEAT_CAMPUS,
    FEAT_STUDENT,
    FEAT_STUDENT_COMMENTS,
    FEAT_BATCH,
    FEAT_CALENDER,
    FEAT_BATCH_SESSION_UPDATE,
    FEAT_SLOT,
    FEAT_INSTRUCTOR,
    FEAT_REVIEWS,
    FEAT_ATTENDANCE,
    FEAT_COURSES,
    FEAT_COURSE_MODULES,
    FEAT_COURSE_CHAPTERS,
    FEAT_COURSE_SYLLABUS,
    FEAT_STUDENT_GRADES,
    FEAT_STUDENT_LEVELS,
    FEAT_STUDENT_LEARNING_ATTRIBUTES,
    FEAT_STUDENT_FEEDBACKS,
  ],
  update: [
    FEAT_STUDENT_COMMENTS,
    FEAT_BATCH_SESSION_UPDATE,
    FEAT_SLOT,
    FEAT_INSTRUCTOR,
    FEAT_REVIEWS,
    FEAT_ATTENDANCE,
    FEAT_STUDENT_GRADES,
    FEAT_STUDENT_LEVELS,
    FEAT_STUDENT_LEARNING_ATTRIBUTES,
    FEAT_STUDENT_FEEDBACKS,
    FEAT_COURSE_MODULES,
    FEAT_COURSE_CHAPTERS,
    FEAT_COURSE_SYLLABUS,
  ],
};

const instructorRole: RoleActionMap = {
  read: [
    FEAT_CAMPUS,
    FEAT_STUDENT,
    FEAT_STUDENT_COMMENTS,
    FEAT_BATCH,
    FEAT_CALENDER,
    FEAT_BATCH_SESSION_UPDATE,
    FEAT_SLOT,
    FEAT_INSTRUCTOR,
    FEAT_STUDENT_FEEDBACKS,
    FEAT_ATTENDANCE,
    FEAT_COURSES,
    FEAT_COURSE_MODULES,
    FEAT_COURSE_CHAPTERS,
    FEAT_COURSE_SYLLABUS,
    FEAT_STUDENT_GRADES,
    FEAT_STUDENT_LEVELS,
    FEAT_STUDENT_LEARNING_ATTRIBUTES,
  ],
  update: [
    FEAT_STUDENT_COMMENTS,
    FEAT_REVIEWS,
    FEAT_ATTENDANCE,
    FEAT_BATCH_SESSION_UPDATE,
    FEAT_STUDENT_FEEDBACKS,
    FEAT_COURSE_MODULES,
    FEAT_COURSE_CHAPTERS,
    FEAT_COURSE_SYLLABUS,
  ],
};

const contentAdminRole: RoleActionMap = {
  read: [
    FEAT_COURSES,
    FEAT_COURSE_MODULES,
    FEAT_COURSE_CHAPTERS,
    FEAT_COURSE_SYLLABUS,
    FEAT_STUDENT_GRADES,
    FEAT_STUDENT_LEVELS,
    FEAT_STUDENT_LEARNING_ATTRIBUTES,
  ],
  update: [
    FEAT_COURSES,
    FEAT_COURSE_MODULES,
    FEAT_COURSE_CHAPTERS,
    FEAT_COURSE_SYLLABUS,
    FEAT_STUDENT_GRADES,
    FEAT_STUDENT_LEVELS,
    FEAT_STUDENT_LEARNING_ATTRIBUTES,
  ],
};

const studentRole: RoleActionMap = {
  read: [FEAT_STUDENT_COMMENTS],
};

// const userRole: RoleActionMap = {};

export type RoleMap = Record<string, RoleActionMap>;

const roleMap: RoleMap = {
  SUPER_ADMIN: superAdminRole,
  ADMIN: adminRole,
  OPERATIONS_MANAGER: operationsManagerRole,
  OPERATIONS: operationsRole,
  INSTRUCTOR_ADMIN: instructorAdminRole,
  INSTRUCTOR: instructorRole,
  CONTENT_ADMIN: contentAdminRole,
  STUDENT: studentRole,
  // END_USER
};

export default roleMap;
