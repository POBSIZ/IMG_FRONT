import React from 'react';
import ProfileComponent from './profile.component';

interface QuizLogItemType {
  quiz_id: number | bigint;
  quizLog_id: number | bigint;
  userQuiz_id: number | bigint;
  date: string;
  title: string;
  score: number;
  probCount: number;
}

export interface UserProfile {
  name: string;
  school: string;
  grade: string;
  phone: string;
}

export interface ProfileTemplatePropsType {
  profile: UserProfile;
  quizLog: QuizLogItemType[];
}

const ProfileTemplate: React.FC<ProfileTemplatePropsType> = (props) => {
  return (
    <>
      <ProfileComponent {...props} />
    </>
  );
};

export default ProfileTemplate;
