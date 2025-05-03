import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
//import * as pdfjsLib from 'pdfjs-dist';
//pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
  standalone: false,
})
export class UploadPage {
  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef;
  selectedFile!: File;

  

  constructor(private router: Router, private apiService: ApiService) {}

  async usarCamera() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
      });
  
      console.log('Imagem capturada:', image.dataUrl);
  
      if (!image.dataUrl) {
        throw new Error('Imagem inválida: dataUrl não disponível.');
      }
      
      const blob = this.dataURLToBlob(image.dataUrl);
      
      const file = new File([blob], 'foto-camera.png', { type: blob.type });
  
      const senha = prompt('Digite a senha do boleto (ou deixe em branco):') || '';
  
      this.apiService.uploadBoleto(file, senha).subscribe({
        next: (res) => {
          console.log('Resposta do backend:', res);
          this.router.navigate(['/result'], { state: { resultado: res } });
        },
        error: (err) => {
          alert('Erro ao processar o boleto: ' + err.error?.error || 'Erro desconhecido');
        },
      });
  
    } catch (error) {
      console.error('Erro ao capturar imagem:', error);
    }
  }
  

  abrirGaleria() {
    this.fileInput.nativeElement.click();
  }

  arquivoSelecionado(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;

      const senha = prompt('Digite a senha do boleto (ou deixe em branco):') || '';

      this.apiService.uploadBoleto(this.selectedFile, senha).subscribe({
        next: (res) => {
          console.log('Resposta do backend:', res);
          this.router.navigate(['/result'], { state: { resultado: res } });
        },
        error: (err) => {
          alert('Erro ao processar o boleto: ' + err.error?.error || 'Erro desconhecido');
        },
      });
    }
  }

  dataURLToBlob(dataUrl: string): Blob {
    const arr = dataUrl.split(',');
    const mimeMatch = arr[0].match(/:(.*?);/);
    if (!mimeMatch) {
      throw new Error('Tipo MIME inválido na dataURL.');
    }
    const mime = mimeMatch[1];
  
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  }
  
  
}
