import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'localDateTime'
})
export class LocalDateTimePipe implements PipeTransform {

  transform(dateIn: string,): string {
    let dateOut: moment.Moment = moment(dateIn, "YYYY-MM-DDTHH:mm:ss")
    return dateOut.format("DD-MM-YY - HH:mm");
  }

}
