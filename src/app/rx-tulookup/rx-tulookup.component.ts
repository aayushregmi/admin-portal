import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-rx-tulookup',
  templateUrl: './rx-tulookup.component.html',
  styleUrls: ['./rx-tulookup.component.scss']
})
export class RxTulookupComponent implements OnInit {
  rxTulookups: Array<RxTulookup>;
  isLoading: boolean;

  constructor(private http: HttpClient) {
    this.rxTulookups = [];
  }

  ngOnInit() {
    this.isLoading = true;
    this.http.get<any>('https://simulator-simulator-02.vmi-aws.com/api/tulookups')
      .subscribe(({_embedded}) => {
        const lookups = _embedded.tulookups.map(item => item);
        [].push.apply(this.rxTulookups, lookups);
        this.isLoading = false;
      }, (err) => {
        console.error(err);
      });
  }

  getFullName(name: RxTulookup) {
    return name.firstName + (name.middleName ? name.middleName + ' ' : ' ') + name.lastName;
  }

  getGenderValue(g) {
    if (g == null) { return '-'; }

    return g === 'F' ? 'Female' : 'Male';
  }
}
