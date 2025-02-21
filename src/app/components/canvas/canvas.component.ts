import {  AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {Canvas,Rect, Triangle, Textbox, Circle,Polygon } from 'fabric';
import { CanvasJsonService } from '../../../../services/canvas-json.service';

@Component({
  selector: 'app-canvas',
  imports: [CommonModule],
  templateUrl: './canvas.component.html',
  styleUrl: './canvas.component.scss'
})
export class CanvasComponent implements OnInit, AfterViewInit {

  canvas : any;
  machinecodecanvas! : ElementRef;
  @ViewChild('fontFamily') fontFamily! : ElementRef;
  @ViewChild('fontStyle') fontStyle! : ElementRef;

  constructor(private canvasService : CanvasJsonService,
    private router: Router
  ) {}

  ngOnInit() : void {
    if (typeof document !== 'undefined') {
      this.loadcanvas();
      this.loadCanvasData();
    }
 
  }

  ngAfterViewInit() {
  }

  loadcanvas() {
    this.canvas = new Canvas('machinecodecanvas',{
      hoverCursor : 'pointer',
    });
  }

  addText() {
    const textBox = new Textbox("Enter Text",{
      selectable : true,
      left: 200,
      top: 100,
      fontSize : 20,
      fill : 'black',
      strokeUniform : true
    })
    this.canvas.add(textBox);
  }

  addRectangle() {
    const rect = new Rect({
      width: 100,
      height: 50,
      left: 120,
      top: 100,
      angle : 0,
      stroke : '#000000',
      strokeWidth : 1,
      fill : '',
      selectable : true,
    });
    this.canvas.add(rect);
  }

  addSquare() {
    const square = new Rect({
      width: 100,
      height: 100,
      left: 50,
      top: 50,
      angle : 0,
      stroke : '#000000',
      strokeWidth : 1,
      fill : '',
      selectable : true,
    });
    this.canvas.add(square);
  }

  addTriangle() {
    const triangle = new Triangle({
      width: 100,
      height: 100,
      left: 90,
      top: 90,
      angle : 0,
      stroke : '#000000',
      strokeWidth : 1,
      selectable : true,
      fill : ''
    });
    this.canvas.add(triangle);
  }

  addCircle() {
    const circle = new Circle({
      radius : 50,
      left: 70,
      top: 70,
      stroke : '#000000',
      strokeWidth : 1,
      selectable : true,
      fill : ''
    });
    this.canvas.add(circle);
  }

  addRhombus() {
    const diamond = [
      { x : 100, y : 50 },
      { x : 150, y : 90 },
      { x : 100, y : 130 },
      { x : 50, y : 90 },
  ];
  const rhombus = new Polygon(diamond,{
    left: 120,
    top: 120,
    stroke : '#000000',
    strokeWidth : 1,
    selectable : true,
    fill : ''
  });
  this.canvas.add(rhombus);
  }

  addPentagon() {
    const pentagonCords = [
      { x : 200, y : 10 },
      { x : 250, y : 50 },
      { x : 230, y : 110 },
      { x : 170, y : 110 },
      { x : 150, y : 50 }
  ];
  const pentagon = new Polygon(pentagonCords,{
    left: 60,
    top: 60,
    stroke : '#000000',
    strokeWidth : 1,
    selectable : true,
    fill : ''
  });
  this.canvas.add(pentagon);
  }

  changeFontStyle() {
    const activeObject = this.canvas.getActiveObject();
    activeObject.set('fontStyle',this.fontStyle.nativeElement.value);
    activeObject.set('fontFamily',this.fontFamily.nativeElement.value);
    this.canvas.renderAll();
  }

  saveCanvasData(){
    if (this.canvas) {
      const canvasData = this.canvas.toJSON();
      this.canvasService.saveCanvasData(canvasData);
      this.canvas.renderAll();
    }
    
  }

  loadCanvasData() {
    this.canvasService.loadCanvasData().subscribe(canvasData => {
      if (canvasData && this.canvas) {
        this.canvas.loadFromJSON((canvasData), () => {
          this.canvas.renderAll();
        });
      }
    });
    
  }

  redirectHome() {
    this.router.navigate(['/']);
  }

}
