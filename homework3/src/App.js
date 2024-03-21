import './App.css'
import Item from './components/item';
function App() {
    return (
        <>
            <main className="container">
                <Item title='Lorem, ipsum dolor'
                    url='https://source.unsplash.com/random/200x300'
                    stock='In Stock'
                    rating='Points 1.5/5'
                    action='sport'
                    lifestyle='lifestyle'>
                </Item>
                <Item title='Lorem, ipsum dolor'
                    url='https://source.unsplash.com/random/200x300'
                    stock='Out Stock'
                    rating='Points 3.4/5'
                    action='Casual'
                    lifestyle='lifestyle'></Item>
                <Item title='Lorem, ipsum dolor'
                    url='https://source.unsplash.com/random/200x300'
                    stock='Out Stock'
                    rating='Points 0.5/5'
                    action='sport'
                    lifestyle='lifestyle'></Item>
                <Item title='Lorem, ipsum dolor'
                    url='https://source.unsplash.com/random/200x300'
                    stock='In Stock'
                    rating='Points 1/5'
                    action='Casual'
                    lifestyle='lifestyle'></Item>
                <Item title='Lorem, ipsum dolor'
                    url='https://source.unsplash.com/random/200x300'
                    stock='In Stock'
                    rating='Points 2.5/5'
                    action='Casual'
                    lifestyle='lifestyle'></Item>
                <Item title='Lorem, ipsum dolor'
                    url='https://source.unsplash.com/random/200x300'
                    stock='Out Stock'
                    rating='Points 4.9/5'
                    action='sport'
                    lifestyle='lifestyle'></Item>
            </main>
            <section className="container">
                <div className="block-listing">
                    <span className="badge-1">Random 1</span>
                    <span className="badge-2">Random 2</span>
                    <span className="badge-3">Random 3</span>
                    <span className="badge-4">Random 4</span>
                </div>
                <div className="banner"></div>
            </section>
        </>
    )
}

export default App;
