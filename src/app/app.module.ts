import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PostComponent } from './post/post.component';
import { CommentComponent } from './comment/comment.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AsideMenuComponent } from './aside-menu/aside-menu.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { MessageService } from './message.service';
import { FormsModule } from '@angular/forms';
import { NewPostComponent } from './new-post/new-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeedComponent,
    AboutUsComponent,
    PostComponent,
    CommentComponent,
    NotificationsComponent,
    AsideMenuComponent,
    LoginComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    AuthService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
