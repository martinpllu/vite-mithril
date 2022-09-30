import m from 'mithril';

export class FormExamplePage {
    text: string = 'Hello world';

    view() {
        return (
            <div>
                <h1>Form example</h1>
                <input
                    type="text"
                    value={this.text}
                    oninput={(e: Event) =>
                        (this.text = (e.target as HTMLInputElement).value)
                    }
                />
                <p>The text in the input is "{this.text}"</p>
            </div>
        );
    }
}
