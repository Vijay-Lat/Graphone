import styles from './expandingSearch.module.css'
function ExpandingSearch() {
  return (
    <div className={styles.expandingSearchBox}>
        <label htmlFor="search" className={styles.hide}> 
            Search
        </label>
        <input id='search' type="search" placeholder='search' className={styles.searchBar} />
    </div>
  )
}

export default ExpandingSearch