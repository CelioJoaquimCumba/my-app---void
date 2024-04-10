import { TopBar } from "../components/molecules/topbar"

export const Main = () => {
    return (
        <main className="max-w-7xl mx-auto">
            <TopBar/>
            <section className="bg-[url('https://assets.website-files.com/5be96251aaba7a7b19ecdf69/5be96251aaba7a58aaecdfba_Header-Pic.jpg')] bg-bottom  flex flex-col items-center justify-center py-64">
                <h3 className="capitalize text-lg text-gray-100 font-semibold">Best place to buy design</h3>
                <h2 className="text-5xl text-white font-bold">Coffee Mugs</h2>
                <p className="text-gray-100 text-2xl">The most versatile furniture system ever created. Designed to fit your life, made to move and grow.</p>
            </section>
        </main>
    )
}