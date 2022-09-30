import m from 'mithril';
import { BankHolidayView } from '../components/BankHolidayView';
import { BankHoliday } from '../model/bank-holiday';

const url = 'https://www.gov.uk/bank-holidays.json';

export class ApiExamplePage {
    holidays: BankHoliday[] = [];

    async oninit() {
        const data: any = await m.request({ url });
        this.holidays = data['scotland'].events.reverse();
        m.redraw();
    }

    view() {
        return (
            <div>
                <h1>Bank Holidays</h1>
                <p>Data from {url}</p>
                {this.holidaysList()}
                <a href="#!/item">Item</a>
            </div>
        );
    }

    holidaysList() {
        return this.holidays.length === 0 ? (
            <div>Loading...</div>
        ) : (
            this.holidays.map((h) => <BankHolidayView holiday={h} />)
        );
    }
}
