import { Component, h, State } from '@stencil/core';
import { Data } from '../stencil_api';

@Component({
  tag: 'total-report',
  styleUrl: 'total-report.css',
  shadow: true,
})
export class TotalReport {

@State() attendance:any[]

async componentWillLoad(){
  this.attendance = await Data.api('getReport','GET','')
  
}

  render() {
    return (
        <div>
        
      <div class='table'>
     { this.attendance.map(element=>{
        let percentage:number = Math.round((element.present/(element.present+element.absent))*100)
        return(
          <ol class='body'><li>{element.rollNo}</li><li>{element.name}</li><li>{element.section}</li><li>PRESENT:{element.present}</li><li>ABSENT:{element.absent}</li><li>PERCENTAGE: {percentage}%</li></ol>
        )
      }) }
      </div>
   
    </div>
    );
  }

}
