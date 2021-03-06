import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubredditModel } from './../../../services/subreddit/subreddit-response';
import { SubredditService } from './../../../services/subreddit/subreddit.service';

@Component({
  selector: 'app-create-subreddit',
  templateUrl: './create-subreddit.component.html',
  styleUrls: ['./create-subreddit.component.css']
})
export class CreateSubredditComponent implements OnInit {

  createSubredditForm:FormGroup;
  SubredditModel:SubredditModel;
  title=new FormControl('');
  description=new FormControl('');
  constructor(private router:Router,private SubredditService:SubredditService) {
    this.createSubredditForm=new FormGroup({
      title:new FormControl('',Validators.required),
      description:new FormControl('',Validators.required),
    });
    this.SubredditModel={
      name:'',
      description:''
    }
  }

  ngOnInit(): void {
  }
  discard(){
    this.router.navigateByUrl('/')
  }
  createSubreddit(){
    this.SubredditModel.name=this.createSubredditForm.get('title').value;
    this.SubredditModel.description=this.createSubredditForm.get('description').value;
    this.SubredditService.createSubreddit(this.SubredditModel).subscribe((data)=>{
      console.log("alahhhhhh",data);
      this.router.navigateByUrl("/list-subreddits")
    },error=>{
      console.log('Error occurred')
    })
  }

}
