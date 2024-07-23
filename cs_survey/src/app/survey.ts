export class Survey {
    constructor(
        //private id: number = 0,
        public id: number,

        public firstName: string,
        public lastName: string,
        public streetAddress: string,
        public city: string,
        public state: string,
        public zip: string,
        public telephone: string,
        public email: string,
        public dateOfSurvey: Date,
        public likedMost: string[],
        public interestSource: string,
        public recommendationLikelihood: string,
        public additionalComments: string
    ) {}
    getSurveyId(){
        return this.id;
    }
}