import m from 'mithril';
import { Page } from '../components/Page';

export class HomePage {
    view() {
        return (
            <Page title="Example app">
                <ul class="list-disc p-4 space-y-4">
                    <li>
                        <a href="#!/api-example">API example page</a>
                    </li>
                    <li>
                        <a href="#!/form-example">Form example page</a>
                    </li>
                </ul>
            </Page>
        );
    }
}
