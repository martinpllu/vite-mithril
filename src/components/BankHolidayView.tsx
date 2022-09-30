import m, { Vnode } from 'mithril';
import { MithrilTsxComponent } from 'mithril-tsx-component';
import { BankHoliday } from '../model/bank-holiday';

interface Attrs {
    holiday: BankHoliday;
}

export class BankHolidayView extends MithrilTsxComponent<Attrs> {
    view(vnode: Vnode<Attrs>) {
        let { holiday } = vnode.attrs;
        return (
            <div>
                {holiday.date}
                &nbsp;
                {holiday.title}
            </div>
        );
    }
}
