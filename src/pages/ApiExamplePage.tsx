import m from 'mithril';
import { Page } from '../components/Page';
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
            <Page title="Bank holidays">
                <p class="py-4 pl-1 font-mono text-sm">
                    Data from{' '}
                    <a href={url} target="_blank">
                        {url}
                    </a>
                </p>
                {this.holidaysList()}
            </Page>
        );
    }

    holidaysList() {
        return this.holidays.length === 0 ? (
            <div>Loading...</div>
        ) : (
            <table>
                <div class="overflow-x-auto">
                    <table class="min-w-full divide-y divide-gray-200 text-sm">
                        <thead class="bg-gray-100">
                            <tr>
                                <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                                    Date
                                </th>
                                <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                                    Title
                                </th>
                            </tr>
                        </thead>

                        <tbody class="divide-y divide-gray-200">
                            {this.holidays.map((h) => (
                                <tr>
                                    <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                        {h.date}
                                    </td>
                                    <td class="whitespace-nowrap px-4 py-2 text-gray-700">
                                        {h.title}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </table>
        );
    }
}
