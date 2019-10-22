import {
  Component,
  ViewChild
} from '@angular/core';
import {
  IonSlides
} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('slideWithNav', {
    static: false
  }) slideWithNav: IonSlides;
  @ViewChild('slideWithNav2', {
    static: false
  }) slideWithNav2: IonSlides;
  @ViewChild('slideWithNav3', {
    static: false
  }) slideWithNav3: IonSlides;

  sliderOne: any;
  sliderTwo: any;
  sliderThree: any;
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };
  slideOptsTwo = {
    initialSlide: 1,
    slidesPerView: 2,
    loop: true,
    centeredSlides: true
  };
  slideOptsThree = {
    initialSlide: 0,
    slidesPerView: 3
  };
  constructor() {}
  slideNext(object, slideView) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }
  slidePrev(object, slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }
  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }
}
