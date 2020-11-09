
import { Question } from './question';

export class Quiz {
 
  
    questions: Question[];
    
    constructor(data: any) {             
            this.questions = [];
            data.questions.forEach(q => {
                this.questions.push(new Question(q));
            });
        
    }
}
