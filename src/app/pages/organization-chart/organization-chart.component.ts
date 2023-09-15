import { Component, OnInit } from '@angular/core';
import {TreeNode} from 'primeng/api';

@Component({
  selector: 'app-organization-chart',
  templateUrl: './organization-chart.component.html',
  styleUrls: ['./organization-chart.component.scss']
})
export class OrganizationChartComponent implements OnInit {
  data: TreeNode[] | any;

  ngOnInit() {
    this.data = [{
      label: 'CEO',
      type: 'leaf',
      name: 'Công Trà',
      expanded: true,
      children: [
        {
            label: 'CFO',
            type: 'leaf',
            name: 'Bảo Chung',
            expanded: true,
            children: [
                {
                    label: 'dev1',
                },
                {
                    label: 'dev2',
                }
            ]
        },
        {
            label: 'COO',
            name: 'Văn bảo',
            type: 'leaf',
            expanded: true,
            children: [
                {
                    label: 'dev3',
                },
                {
                    label: 'dev4',
                }
            ]
        }
      ]
    }];
  }
}