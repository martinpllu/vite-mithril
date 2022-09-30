import m from 'mithril';

export class HomePage {
    view() {
        return (
            <div>
                <h1>Example app</h1>
                <ul>
                    <li>
                        <a href="#!/api-example">API example page</a>
                    </li>
                    <li>
                        <a href="#!/form-example">Form example page</a>
                    </li>
                </ul>
            </div>
        );
    }
}
