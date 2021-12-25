export interface UserInfo {
  person: {
    name: string;
    picture: string;
    professionalHeadline: string;
    summaryOfBio: string;
    publicId: string;
  };
  strengths: [
    {
      id: string;
      code: number;
      name: string;
      proficiency: string;
    },
  ];
}
