import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'programmersCalculator';
    value : string ="";
    ans : string = "";
    option1 : string = "";
    option2 : string = "";
    
    onChange1(e:any) {
        this.option1 = e.target.id;
        console.log("opt1 :"+this.option1);
    }
    
    onChange2(e:any) {
        this.option2 = e.target.id;
        console.log("opt2 :"+this.option2);
    }
    
    Convert(val:string)
    {
        if(this.option1 == "binary")
        {
            switch(this.option2){
                    case "binary" : this.ans = val; break;
                    case "octal" : this.ans = (Number(String(parseInt(val,2))).toString(8)); break;
                    case "decimal" : this.ans = String(parseInt(val,2)); break;
                    case "hex" : this.ans = (Number(String(parseInt(val,2))).toString(16)); break;
            }
        } else if(this.option1 == "octal")
        {
            switch(this.option2){
                    case "binary" : this.ans = (Number(String(parseInt(val,8))).toString(2)); break;
                    case "octal" : this.ans = val; break;
                    case "decimal" : this.ans = String(parseInt(val,8)); break;
                    case "hex" : this.ans = (Number(String(parseInt(val,8))).toString(16)); break;
            }
        } else if(this.option1 == "decimal")
        {
            switch(this.option2){
                    case "binary" : this.ans = (Number(val).toString(2)); break;
                    case "octal" : this.ans = (Number(val).toString(8)); break;
                    case "decimal" : this.ans = val; break;
                    case "hex" : this.ans = (Number(val).toString(16)); break;
            }
        } else if(this.option1 == "hex")
        {
            switch(this.option2){
                    case "binary" : this.ans = (Number(String(parseInt(val,16))).toString(2)); break;
                    case "octal" : this.ans = (Number(String(parseInt(val,16))).toString(8)); break;
                    case "decimal" : this.ans = String(parseInt(val,16)); break;
                    case "hex" : this.ans = val; break;
            }
        }
    }
    
}
