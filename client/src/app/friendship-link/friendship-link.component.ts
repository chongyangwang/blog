import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-friendship-link',
  templateUrl: './friendship-link.component.html',
  styleUrls: ['./friendship-link.component.css']
})
export class FriendshipLinkComponent implements OnInit {
  
  public friendShipList: any = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('/api/friendship').pipe(map(res=>res)).subscribe((data)=>{
      this.friendShipList = data
    })
  }
  handelFriendShipLink(address){
    window.location.href = address
  }
}
