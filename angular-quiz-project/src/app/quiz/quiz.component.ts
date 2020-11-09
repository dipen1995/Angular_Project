import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';

import { Quiz, Question, Option } from '../models';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  providers:[QuizService]
})
export class QuizComponent implements OnInit {
  
  quizes;
  quiz: Quiz;
  mode = 'quiz';
  quizName: string;
  
  Qus = {
    index: 0,
    size: 1,
    count: 0
  };
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.quizes = this.getAll();    
    this.quizName = this.quizes[0].id;
    this.loadQuiz(this.quizName);   
  }
  getAll(){
    return[
      {id: 'assets/data/angular.json'}
    
    ]
  }
  loadQuiz(quizName:string){
    this.get(quizName).subscribe(res => {      
      this.quiz = new Quiz(res);
      this.Qus.count = this.quiz.questions.length;
    });
    this.mode = 'quiz';
  }
  get Questions() {
    return (this.quiz.questions) ?
      this.quiz.questions.slice(this.Qus.index, this.Qus.index + this.Qus.size) : [];
  }
  onSelect(question: Question, option: Option) {
    if (question.questionTypeId === 1) {
      question.options.forEach((x) => { if (x.id !== option.id) x.selected = false; });
    }
  }

  goTo(index: number) {
    if (index >= 0 && index < this.Qus.count) {
      this.Qus.index = index;
      this.mode = 'quiz';
    }
  }

  isCorrect(question: Question) {
    return question.options.every(x => x.selected === x.isSelected) ? 'correct' : 'wrong';
  };
  onSubmit() {
    let answers = [];
    this.mode = 'result';
  }
  get(url: string) {
    return this.http.get(url).pipe(map(res => {return res}));  

  }

}
