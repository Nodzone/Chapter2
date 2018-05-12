import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { Validators,FormBuilder } from "@angular/forms";
/**
 * Generated class for the InputPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-input',
  templateUrl: 'input.html',
})

export class InputPage {
  private formData:any;
  public name:string;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder:FormBuilder,
    public alertController:AlertController ) {
    this.formData = formBuilder.group({
      fname:['',Validators.required],
      sname:['',Validators.required]
    });

  }
saveData(){
  let alert = this.alertController.create({
    title: "Data",
    subTitle: "Name : "+this.formData.value.fname +"Surname: "+this.formData.value.sname,
    buttons: ["Nice"]

  });
  alert.present();

    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad InputPage');
  }
}
  


