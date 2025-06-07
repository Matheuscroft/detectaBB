import { Component, ElementRef, ViewChild } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
//import * as pdfjsLib from 'pdfjs-dist';
//pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.4.120/pdf.worker.min.js';
import * as pdfjsLib from 'pdfjs-dist/build/pdf';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;

@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
  standalone: false,
})
export class UploadPage {
  @ViewChild('fileInput', { static: false }) fileInput!: ElementRef;
  selectedFile!: File;

  constructor(private router: Router, private apiService: ApiService, private loadingController: LoadingController,) {}

 async presentLoading(message: string = 'Processando boleto...'): Promise<HTMLIonLoadingElement> {
    const loading = await this.loadingController.create({
      message,
      spinner: 'circles', 
      backdropDismiss: false, 
    });
    await loading.present();
    return loading;
  }

  async usarCamera() {
    let loading: HTMLIonLoadingElement | undefined;
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

      loading = await this.presentLoading('Enviando imagem...');  
  
      this.apiService.uploadBoleto(file, '').subscribe({
        next: (res) => {
          loading?.dismiss();
          console.log('Resposta do backend:', res);
          this.router.navigate(['/result'], { state: { resultado: res } });
        },
        error: (err) => {
          loading?.dismiss();
          alert('Erro ao processar o boleto: ' + err.error?.error || 'Erro desconhecido');
        },
      });
  
    } catch (error) {
      loading?.dismiss();
      console.error('Erro ao capturar imagem:', error);
    }
  }
  
  abrirGaleria() {
    this.fileInput.nativeElement.click();
  }

  async arquivoSelecionado(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    this.selectedFile = file;

    if (file.type === 'application/pdf') {
      const arrayBuffer = await file.arrayBuffer();

      try {
        await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
        this.enviarArquivo(file, '');
      } catch (err: any) {
        if (err?.name === 'PasswordException') {
          const senha = prompt('Este PDF está protegido. Digite a senha do boleto:') || '';
          this.enviarArquivo(file, senha);
        } else {
          alert('Erro ao processar o PDF: ' + err.message);
        }
      }

  } else {
    this.enviarArquivo(file, '');
  }

  }

  async enviarArquivo(file: File, senha: string) {
    const loading = await this.presentLoading();
    this.apiService.uploadBoleto(file, senha).subscribe({
      next: (res) => {
        loading.dismiss();
        console.log('Resposta do backend:', res);
        this.router.navigate(['/result'], { state: { resultado: res } });
      },
      error: (err) => {
        loading.dismiss();
        alert('Erro ao processar o boleto: ' + err.error?.error || 'Erro desconhecido');
      },
    });
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
