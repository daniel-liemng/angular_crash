import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { AppendPipe } from 'src/pipes/append.pipe';
import { AppendCLIPipe } from './pipes/append-cli.pipe';
import { SummaryPipe } from './pipes/summary.pipe';
import { PostService } from './services/post.service';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { CustomValidateFormComponent } from './custom-validate-form/custom-validate-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostComponent,
    PostListComponent,
    AppendPipe,
    AppendCLIPipe,
    SummaryPipe,
    FormComponent,
    ReactiveFormComponent,
    CustomValidateFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [PostService],
  bootstrap: [AppComponent],
})
export class AppModule {}
