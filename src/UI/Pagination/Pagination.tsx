

const Pagination = function ({totalPageArray, changePosts, page}:{totalPageArray:any, changePosts:any, page:any}) {



    return(

        <div className = "pagination">
            {totalPageArray.map((pageCount:any)=>
                <button
                onClick = {()=>changePosts(pageCount)}
                className = {page === pageCount?'page__current pagePugination': 'pagePugination'}
                key = {pageCount}>{pageCount}
                </button>
            ) }
        </div>
    )


}


export default Pagination
