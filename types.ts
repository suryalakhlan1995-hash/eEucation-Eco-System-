
import React from 'react';

export enum UserRole {
    Admin = 'Admin',
    School = 'School',
    College = 'College',
    University = 'University',
    Student = 'Student',
    Teacher = 'Teacher',
    Parent = 'Parent',
    Director = 'Director',
    ITI = 'ITI',
    TechnicalInstitute = 'TechnicalInstitute',
    Medical = 'Medical',
    Nurse = 'Nurse',
    JobSeeker = 'JobSeeker',
    Company = 'Company',
    CoachingCenter = 'CoachingCenter',
    ComputerCenter = 'ComputerCenter',
    NGO = 'NGO',
    Security = 'Security',
    Staff = 'Staff',
    Farmer = 'Farmer'
}

export interface User {
    id: string;
    name: string;
    role: UserRole;
    username: string;
    email?: string;
    mobileNumber?: string;
    fatherName?: string;
    motherName?: string;
    photoUrl?: string;
}

export type ServiceName =
  | 'AI Tutor' | 'AI Study Guru' | 'AI Virtual Lab' | 'Smart Admissions' 
  | 'Placement Forum' | 'Job Database' | 'Student Database' 
  | 'Fee Management' | 'Attendance Log' | 'Face Attendance' | 'QR Attendance'
  | 'AI Homework Hub' | 'Analytics Dashboard' | 'Change Password'
  | 'Franchise Configurator' | 'Digital Notice Board' | 'Smart Proxy Manager'
  | 'AI Teacher Evaluator' | 'Recruitment Prep Guru' | 'AI Medical Guru' 
  | 'AI ITI Guru' | 'AI Anatomy Lab' | 'AI Machine Workshop'
  | 'Classroom' | 'overview' | 'Talent Scout' | 'Sync Center'
  | 'EduReels' | 'AI Staff Assistant' | 'AI Ad Generator' | 'CV Generator'
  | 'Online Exam' | 'Progress Monitor' | 'Campus Kart' | 'Smart Canteen'
  | 'Test Paper Guru' | 'Access Control Center' | 'AI Video Generator'
  | 'World Expansion Planner' | 'Nearby School Finder' | 'Franchise Plans'
  | 'Franchise Support' | 'Fee Notification' | 'AI Certificate Generator'
  | 'Placement Reporting' | 'Leaderboard' | 'AI Wellness Guru'
  | 'Interactive 3D Lab' | 'Personalized Learning Path' | 'AI Proctor for Exams'
  | 'Automated Timetable Generator' | 'Skill Marketplace' | 'Sports & Games Hub'
  | 'Classroom Management' | 'AI Interview Coach' | 'Know Your Rights'
  | 'Social Media Ad Generator' | 'Smart Design Studio' | 'AI Sarkari Job Guru'
  | 'NGO Connect' | 'Auto-Dialer' | 'Alumni Connect' | 'AI Debate Coach'
  | 'Career Simulator' | 'AI Code Lab' | 'Daily Knowledge Shorts' | 'AI Language Lab'
  | 'Smart Note Maker' | 'Voice Memo' | 'AI Flashcards' | 'Lost and Found'
  | 'Video Guide' | 'Smart Library' | 'Exam Result Portal' | 'Visitor Management'
  | 'Campus Messenger' | 'Inventory Manager' | 'Smart Campus Calendar'
  | 'Digital Locker' | 'Infirmary' | 'Campus Voting' | 'Quiz Arena'
  | 'Focus Zone' | 'Campus Radio' | 'AI Astro Guru' | 'AI Finance Guru'
  | 'AI Cyber Smart' | 'Grievance Portal' | 'Alumni Donation' | 'Psychometric Test'
  | 'Mess Management' | 'Smart Digital Diary' | 'AI Website Builder'
  | 'Profit Calculator' | 'Lead Generator' | 'AI Chemistry Lab' | 'Spiritual Wellness'
  | 'Smart Transport' | 'Smart HR Manager' | 'Vedic Math Lab' | 'AI Gallery' | 'Syllabus Tracker'
  | 'AI Maker Lab' | 'AI Electric Lab' | 'AI Agriculture Lab' | 'Handwriting Coach' | 'Hostel Management'
  | 'AI Smart Board' | 'Parent Connect' | 'Lesson Planner' | 'Career Predictor'
  | 'Parent Coach' | 'AI Global Bazaar' | 'Solar Study Clock' | 'AI Parent Voice Hub' | 'Safety SOS'
  | 'AI Master Setup' | 'Stability Analyzer' | 'Anti-Fraud Shield'
  | '777 Authority Dashboard' | 'Chief Talent Scientist' | 'Employer Peace of Mind'
  | 'Master Pitch Deck' | 'Smart Matching Engine' | 'Custom Training Plan'
  | 'Student Incubator' | 'Corporate Hiring Panel' | 'Smart Brand Studio' | 'Data Import Wizard'
  | 'AI Gita Guru' | 'AI Business Manager' | 'AI Profit Forecaster' | 'Book Exchange' | 'Meditation Studio'
  | 'AI Ayurveda Guru' | 'Metaverse Learning' | 'AI Fashion Stylist' | 'AI Robotics Lab' | 'AI Space Station'
  | 'AI Universal Lab' | 'Creative Studio' | 'Future Career Hub' | 'Smart Admin Office' | 'Smart PTM Scheduler';

export enum ServiceCategory {
    LEARN_PRACTICE = 'LEARN & PRACTICE',
    CAREER_DEVELOPMENT = 'CAREER DEVELOPMENT',
    CREATIVE_STUDIO = 'CREATIVE STUDIO',
    ADMINISTRATION = 'ADMINISTRATION',
    CAMPUS_LIFE = 'CAMPUS LIFE',
    HEALTH_WELLNESS = 'HEALTH & WELLNESS',
    GROWTH_EXPANSION = 'GROWTH & EXPANSION',
    EXECUTIVE = 'EXECUTIVE',
}

export enum LocationType {
    School = 'School',
    College = 'College',
    University = 'University',
    CoachingCenter = 'CoachingCenter',
    ITI = 'ITI',
    TechnicalInstitute = 'TechnicalInstitute',
    ComputerCenter = 'ComputerCenter',
    Medical = 'Medical',
    Corporate = 'Corporate',
    NGO = 'NGO',
}

export interface Service {
    name: ServiceName;
    description: string;
    hindiDescription?: string;
    icon: React.ReactElement;
    roles: UserRole[];
    category?: ServiceCategory;
    institutionTypes?: LocationType[];
}

export interface Institution {
    name: string;
    address: string;
    lat: number;
    lng: number;
}

export interface Exam {
    subject: string;
    className: string;
    duration: number;
    totalMarks: number;
    questions: ExamQuestion[];
}

export interface ExamQuestion {
    question: string;
    options?: string[];
    answer: string;
    marks: number;
    type: 'multiple-choice' | 'true-false' | 'short-answer';
}

export interface LearningPath {
    subject: string;
    steps: LearningPathStep[];
}

export interface LearningPathStep {
    step: number;
    topic: string;
    objective: string;
    status: LearningPathStatus;
    suggestion: string;
}

export enum LearningPathStatus {
    ToReview = 'To Review',
    NextUp = 'Next Up',
    InProgress = 'In Progress',
    Completed = 'Completed'
}

export interface SarkariJob {
    title: string;
    organization: string;
    eligibility: string;
    lastDate: string;
    link: string;
    requiredDocuments?: string[];
}

export interface Scholarship {
    id: string;
    ngoName: string;
    title: string;
    description: string;
    eligibility: string;
    amount: string;
    deadline: string;
}

export interface Transcript {
    role: 'user' | 'model';
    text: string;
}

export interface TimetableConstraints {
    classNames: string[];
    subjects: string[];
    teachers: string[];
    periodsPerDay: number;
    workingDays: string[];
    additionalRules?: string;
}

export interface Timetable {
    className: string;
    timetable: { day: string; schedule: { period: number; subject: string; teacher: string }[] }[];
}

export interface GitaVerse {
    shloka: string;
    hindi_explanation: string;
    english_explanation: string;
}

export interface YogaPose {
    sanskrit_name: string;
    english_name: string;
    instructions_hindi: string;
    instructions_english: string;
    benefits_hindi: string;
    benefits_english: string;
}

export interface Franchise {
    id: string;
    name: string;
    type: LocationType;
    studentCount: number;
    revenue: number;
    isVerified?: boolean;
    logoUrl?: string;
    address?: string;
    description?: string;
    ownerName?: string;
    mobile?: string;
    state?: string;
    board?: string;
}

export interface ChatMessage {
    sender: 'user' | 'ai';
    text: string;
    filePreview?: string;
    fileType?: string;
}

export interface LocationData {
    id: string;
    name: string;
    type: LocationType;
    description: string;
    lat: number;
    lng: number;
}

export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    category: string;
}

export interface CartItem extends Product {
    quantity: number;
}

export interface FeeRecord {
    id: string;
    studentId: string;
    description: string;
    amount: number;
    paidAmount: number;
    dueDate: string;
    status: FeeStatus;
    paymentDate?: string;
}

export enum FeeStatus {
    Paid = 'Paid',
    Due = 'Due',
    Overdue = 'Overdue',
    PartiallyPaid = 'Partially Paid'
}

export interface StudentData {
    id: string;
    name: string;
    age: string;
    className: string;
    address: string;
    fatherName: string;
    motherName: string;
    mobileNumber: string;
    email: string;
    photoUrl?: string;
}

export interface SupportTicket {
    id: string;
    franchiseName: string;
    franchiseType: UserRole;
    category: TicketCategory;
    description: string;
    status: TicketStatus;
    dateReported: string;
}

export enum TicketStatus {
    Open = 'Open',
    InProgress = 'In Progress',
    Resolved = 'Resolved'
}

export enum TicketCategory {
    Technical = 'Technical',
    Billing = 'Billing',
    Academic = 'Academic',
    Administrative = 'Administrative'
}

export interface AttendanceRecord {
    studentId: string;
    name: string;
    time: string;
    imageSrc: string;
    status: 'Present' | 'Absent';
}

export interface AcademicRecord {
    recordId: string;
    studentId: string;
    examName: string;
    date: string;
    results: SubjectResult[];
    overallPercentage: number;
    comments: string;
}

export interface SubjectResult {
    subject: string;
    marksObtained: number;
    totalMarks: number;
}

export interface JobOpening {
    id: string;
    companyId: string;
    companyName: string;
    jobTitle: string;
    location: string;
    description: string;
    postedDate: string;
    isApproved: boolean;
}

export interface JobApplication {
    id: string;
    jobId: string;
    studentId: string;
    studentName?: string;
    status: 'Applied' | 'Shortlisted' | 'Interview' | 'Hired' | 'Rejected' | 'Pending';
    applicationDate: string;
}

export interface Project {
    id: string;
    title: string;
    description: string;
    skills: string[];
    budget: number;
    status: ProjectStatus;
    postedBy: string;
    postedDate: string;
}

export enum ProjectStatus {
    Open = 'Open',
    InProgress = 'In Progress',
    Completed = 'Completed'
}

export interface ProjectApplication {
    projectId: string;
    studentId: string;
    studentName: string;
    applicationDate: string;
    status: 'Pending' | 'Accepted' | 'Rejected';
}

export interface StudentServiceOffering {
    id: string;
    studentId: string;
    studentName: string;
    serviceTitle: string;
    description: string;
    skills: string[];
    rate: string;
    postedDate: string;
    aiGeneratedPortfolioHtml: string;
}

export interface SportsRegistrationData {
    studentName: string;
    selectedSports: string[];
    achievements: string;
    contactNumber: string;
    idProof: File | null;
    certificates: File | null;
    photo: File | null;
    signature: File | null;
}

export interface HomeworkAssignment {
    id: string;
    teacherId: string;
    teacherName: string;
    title: string;
    description: string;
    className: string;
    subject: string;
    dueDate: string;
    createdAt: string;
}

export interface HomeworkSubmission {
    id: string;
    assignmentId: string;
    studentId: string;
    studentName: string;
    submissionDate: string;
    content: string;
    status: 'Submitted' | 'Graded';
    feedback?: string;
}

export interface Notification {
    id: string;
    title: string;
    message: string;
    timestamp: string;
    isRead: boolean;
    icon?: React.ReactNode;
    link?: { service: ServiceName };
}

export interface InventoryItem {
    id: string;
    name: string;
    category: string;
    quantity: number;
    unit: string;
    status: string;
    location: string;
    lastUpdated: string;
}

export interface StatusItem {
    id: string;
    userId: string;
    userName: string;
    userRole: UserRole;
    contentText: string;
    contentImage?: string;
    userAvatar?: string;
    timestamp: string;
    isViewed: boolean;
}

export interface NoticeItem {
    id: string;
    title: string;
    date: string;
    type: 'Urgent' | 'Event' | 'General';
    content: string;
    postedBy: string;
}

export interface BackupData {
    config: any;
    students: any[];
    fees: any[];
    timestamp: string;
    version: string;
}

export interface UserStats {
    studentId: string;
    points: number;
    level: number;
    levelName: string;
    progress: number;
}

export interface Badge {
    id: string;
    name: string;
    description: string;
    icon: React.ReactElement;
}

export interface ProctoringEvent {
    timestamp: string;
    event: string;
    severity: 'low' | 'medium' | 'high';
}

export type Answer = { [questionId: number]: string };