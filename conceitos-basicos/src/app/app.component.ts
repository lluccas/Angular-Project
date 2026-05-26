import { Component, AfterViewInit } from '@angular/core';
import { CalculadoraComponent } from './calculadora/calculadora.component'
import { ListaComprasComponent } from "./lista-compras/lista-compras.component"



@Component({
  selector: 'app-root',
  imports: [ListaComprasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit  {
  title = 'conceitos-basicos';
  ngAfterViewInit(): void {

    const canvas = document.getElementById('matrix') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters =
      'アァカサタナハマヤャラワ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    const fontSize = 16;
    const columns = canvas.width / fontSize;

    const drops = Array(Math.floor(columns)).fill(1);

    function draw() {

      ctx!.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx!.fillRect(0, 0, canvas.width, canvas.height);

      ctx!.fillStyle = '#0F0';
      ctx!.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {

        const text =
          letters.charAt(Math.floor(Math.random() * letters.length));

        ctx!.fillText(text, i * fontSize, drops[i] * fontSize);

        if (
          drops[i] * fontSize > canvas.height &&
          Math.random() > 0.975
        ) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    }

    setInterval(draw, 33);
  }
}



