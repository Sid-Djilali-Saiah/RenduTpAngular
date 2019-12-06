import { Component, OnInit } from '@angular/core';
import { Channels } from '../channels'
import { ChatService } from '../chat.service'
import { from } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  myMessage : FormGroup;
  channels: Channels[] = [];

  constructor(private chatService : ChatService, public fb: FormBuilder) { }

  ngOnInit() {
    this.refreshChannels();
    this.myMessage = this.fb.group({message: ["", Validators.required]});
  }

  public errorHandling = (control: string, error: string) => {
    return this.myMessage.controls[control].hasError(error);
  };

  onSend() {
    console.log(this.myMessage.get('message').value);
  }

  private refreshChannels() {
    this.chatService.getChannels().subscribe(
      (channels: Channels[]) => this.channels = channels)
  }
}
