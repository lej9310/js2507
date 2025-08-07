import Book from './Book'

function Library() {
    return (
        <div>
            <Book name={"오늘의 리엑트"} total={200}></Book>
            <Book name={"오늘의 Node"} total={50}></Book>
            <Book name={"오늘의 DOS"} total={1000}></Book>
        </div>
    )
}

export default Library