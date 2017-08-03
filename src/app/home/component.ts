import { Component, OnInit }      from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

export class Dojo {
  name: string;
  mapSrc: string;
  safeSrc: SafeResourceUrl;
};



var dojos: Dojo[] = [{
  name: 'CMW',
  safeSrc: null,
  mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.4156807837403!2d-1.8906783839349268!3d52.41726547979494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bc1d7f081219%3A0xb7553955309e8561!2sCocks+Moor+Woods+Leisure+Centre!5e0!3m2!1sen!2suk!4v1455482325797'
}, {
  safeSrc: null,
  name: 'Tudor Grange',
  mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.6759822068166!2d-1.7901712838346382!3d52.412548379794096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870b9c16c5192fd%3A0xccd43ef7b61b9d15!2sTudor+Grange+Aikido!5e0!3m2!1sen!2suk!4v1497217458235'
}, {
  safeSrc: null,
  name: 'Ei Oh Kan',
  mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2430.957005723903!2d-1.8204822838332058!3d52.46180607980319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870ba4f0b8718af%3A0x9f9552922e68032b!2sEi+Oh+Kan+Aikido+Dojo!5e0!3m2!1sen!2suk!4v1497215858513'
}];

@Component({
  selector: 'hero-detail',
  templateUrl: './template.html',
})
export class HomeComponent {
  dojos = dojos;
  constructor(private sanitizer: DomSanitizer) {
    // javascript: URLs are dangerous if attacker controlled.
    // Angular sanitizes them in data binding, but you can
    // explicitly tell Angular to trust this value:
    this.dojos.forEach(function (dojo) {
      dojo.safeSrc =  sanitizer.bypassSecurityTrustResourceUrl(dojo.mapSrc);
    });
  };
}
