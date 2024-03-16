const BooksMarks = ({bookmarks}) => {
    return (
        <div className="lg:w-1/3 w-full">
            <h2 className="text-2xl font-semibold">BooksMarks : {bookmarks.length}</h2>
        </div>
    );
};

export default BooksMarks;