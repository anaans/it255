import {Pipe} from '@angular/core';

@Pipe({
  name: 'PretragaTip'
})

export class PretragaTipComponent {
  transform(value: Object[], anotherValue: string): Object[] {
    if (value == null) {
      return null;
    }
    if (anotherValue !== undefined) {
      return value.filter((item: Object) =>
        item['tip'].toLowerCase().indexOf(anotherValue.toLowerCase()) !== -1
      );
    } else {
      return value;
    }
  }
}
