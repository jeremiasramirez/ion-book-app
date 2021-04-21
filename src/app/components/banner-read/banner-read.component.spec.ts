import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BannerReadComponent } from './banner-read.component';

describe('BannerReadComponent', () => {
  let component: BannerReadComponent;
  let fixture: ComponentFixture<BannerReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerReadComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BannerReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
