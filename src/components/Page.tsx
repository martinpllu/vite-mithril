import m, { Vnode } from 'mithril';
import { MithrilTsxComponent } from 'mithril-tsx-component';

interface Attrs {
    title: string;
}

export class Page extends MithrilTsxComponent<Attrs> {
    view(node: Vnode<Attrs>) {
        return (
            <div class="p-4">
                <h1 class="text-3xl font-bold underline pb-4">
                    {node.attrs.title}
                </h1>
                {node.children}
            </div>
        );
    }
}
