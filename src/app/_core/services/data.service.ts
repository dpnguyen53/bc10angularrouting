import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getListCourse(): Observable<any> {
    const url =
      'https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01';

    return this.http.get(url).pipe(
      tap(() => {}),
      catchError((error: any) => {
        return this.handleError(error);
      })
    );
  }

  getDetailCourse(id:any): Observable<any> {
    const url =
      `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`;

    return this.http.get(url).pipe(
      tap(() => {}),
      catchError((error: any) => {
        return this.handleError(error);
      })
    );
  }

  registerUser(user:any): Observable<any> {
    const url =
      `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy`;

    return this.http.post(url, user).pipe(
      tap(() => {}),
      catchError((error: any) => {
        return this.handleError(error);
      })
    );
  }

  loginUser(user:any): Observable<any> {
    const url =
      `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap`;

    return this.http.post(url, user).pipe(
      tap(() => {}),
      catchError((error: any) => {
        return this.handleError(error);
      })
    );
  }

  handleError(error: any) {
    switch (error.status) {
      case 300:
        break;

      case 400:
        break;

      case 500:
        alert(error.error);
        break;

      default:
        break;
    }
    return throwError(error);
  }
}
