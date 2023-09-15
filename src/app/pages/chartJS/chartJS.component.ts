import { Component, OnInit,ViewChild } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-chartJS',
  templateUrl: './chartJS.component.html',
  styleUrls: ['./chartJS.component.css']
})
export class ChartJSComponent implements OnInit {
  @ViewChild('chart') chart: ChartModule | any;

  data: any;
  chartData: any[] = [];
    
  constructor() {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          type: 'line',
          label: 'Dataset 1',
          borderColor: '#42A5F5',
          borderWidth: 2,
          fill: false,
          data: [50,25,12,48,56,76, 42]
        },
        {
          type: 'bar',
          label: 'Dataset 2',
          backgroundColor: '#66BB6A',
          data: [ 21, 84, 24,75,37, 65,34],
          borderColor: 'white',
          borderWidth: 2
        },
        {
          type: 'bar',
          label: 'Dataset 3',
          backgroundColor: '#FFA726',
          data: [ 41, 52, 24, 74, 23, 21, 32]
        }
      ]
    }
  }
  ngOnInit() {
  }

  update() {
    const sttData = this.data.datasets.length + 1;
    const obj =  {
      type: 'bar',
      label: `Dataset ${sttData}`,
      backgroundColor: this.getRandomColor(),
      data: [ 21, 84, 24, 75, 37, 65, 34]
    };
    this.data.datasets.push(obj);
    this.chart.refresh();
  }

  getRandomColor() {
    const red = Math.floor(Math.random() * 256); 
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256); 
    return `rgb(${red}, ${green}, ${blue})`;
  }
}
