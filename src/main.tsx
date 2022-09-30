import m from 'mithril'
import './style.css'

class Hello {
    count = 0

    view() {
        return (
            <div>
                <h1>Hello!</h1>
                <button onclick={() => this.count++}>
                    Increment the counter
                </button>
                <p>Count = {this.count}</p>
            </div>
        )
    }
}

m.mount(document.body, new Hello())
