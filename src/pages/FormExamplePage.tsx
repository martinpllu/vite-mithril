import m from 'mithril';
import { Page } from '../components/Page';

export class FormExamplePage {
    text: string = 'Hello world';

    oncreate() {
        document.getElementById('text-input')?.focus();
    }

    view() {
        return (
            <Page title="Form example">
                <form action="" class="mt-8 mb-0 max-w-md space-y-4 pb-8">
                    <input
                        id="text-input"
                        class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-md"
                        type="text"
                        value={this.text}
                        oninput={(e: Event) =>
                            (this.text = (e.target as HTMLInputElement).value)
                        }
                    />
                </form>
                <p>The text in the input is "{this.text}"</p>
            </Page>
        );
    }
}
