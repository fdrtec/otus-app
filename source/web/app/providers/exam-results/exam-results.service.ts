import {Injectable} from '@angular/core';
import {Report} from '../../model/exam-results/report';
import {ExamClientService} from '../rest/exam-results/exam-client.service';
import {concatMap, filter, map, mergeMap, toArray} from 'rxjs/operators';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExamResultsService {

  constructor(private examClientService: ExamClientService) {
  }

  getReportByParticipant(ownerRn: string): Observable<Report[]>{
    return this.examClientService.getReportByParticipant(ownerRn)
  }

  getFullReport(ownerRn: string, reportId): Observable<Report>{
    return this.examClientService.getFullReport(ownerRn, reportId)
  }

  // getReportByParticipant(ownerRn: string) {
  //   return this.examClientService.getReportByParticipant(ownerRn)
  //     .pipe(
  //       // tap(ver1 => console.log(ver1)),
  //       mergeMap(response => response['data']),
  //       concatMap(report => {
  //         if ((report['label']) !== 'Retinografia') {
  //           return this.examClientService.getFullReport(ownerRn, report['_id']);
  //         } else {
  //           return [{data: {}}];
  //         }
  //       }),
  //       //tap((ver2 => console.log(ver2))),
  //       map(item => this.isValidReport(item.data)),
  //       filter(valid => valid !== undefined),
  //       toArray()
  //     );
  // }
  //
  // isValidReport(candidate) {
  //   try {
  //     return new Report(candidate);
  //   } catch (e) {
  //     //throw new Error('Invalid Report')
  //     console.log('Invalid Report');
  //   }
  // }
}
