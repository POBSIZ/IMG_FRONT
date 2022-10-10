export enum Roles {
  ADMIN = 'admin',
  STUDENT = 'student',
  PARENTS = 'parents',
  INSIDER = 'insider',
}

export interface UserEntity {
  user_id: string; // 유저 ID
  chain_id: string; // 연결 ID
  name: string; // 이름
  nickname: string; // 닉네임
  username: string; // 아이디
  password: string; // 비밀번호
  phone: string; // 전화번호
  role: Roles; // 권한
  created_at: Date; // 생성일
  school: string; // 학교
  grade: string; // 학년
  // class_id: ClassEntity; // 반 ID
  address: string; // 주소
  zip: string; // 우편번호
  address_detail: string; // 상세 주소
  academy_admin: boolean; // 학원 권한
  // academy_id: AcademyEntity; // 학원 ID
}
