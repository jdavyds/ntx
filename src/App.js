import './App.css';
import styles from './style/style.module.css'
import axios from 'axios';
import { useEffect, useState } from 'react';
function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    axios.get(`https://swapi.dev/api/planets/?page=${page}`)
    .then(res => {
      const feed = res.data.results;
      setData(feed);
    })
  }, [page]);
  return (
    <div className="App">
      <h2>Page {page}</h2>
      <div className={styles.tableCont}>
                    <div className={styles.tableHeader}>
                        <div>S/N</div>
                        <div>Name</div>
                        <div>Diameter</div>
                        <div>Climate</div>
                        <div>Gravity</div>
                        <div>Terrain</div>
                        <div>Population</div>
                        <div>Date Created</div>
                        <div>Orbital Period</div>
                        <div>Rotation Period</div>
                    </div>
                    {data  && (
                        data.map((row, index) => {
                            return (
                            <div className={styles.tableRow} key={index}>
                                <div>{index + 1}</div>
                                <div>{row.name}</div>
                                <div>{row.diameter}</div>
                                <div>{row.climate}</div>
                                <div>{row.gravity}</div>
                                <div>{row.terrain}</div>
                                <div>{row.population}</div>
                                <div>{(row.created).slice(0, 10)}</div>
                                <div>{row.orbital_period}</div>
                                <div>{row.rotation_period}</div>
                            </div>
                            )
                        }))
                    }
                </div>
                <div className={styles.navigator}>
                    <button className={styles.navigate} onClick={() => {
                      if(page !== 1) {
                        setPage(page - 1)}
                      }
                      }>
                      {'<'} Previous
                    </button>
                    <nav className={styles.pageNumbers}>
                        <button onClick={() => setPage(1)}>1</button>
                        <button onClick={() => setPage(2)}>2</button>
                        <button onClick={() => setPage(3)}>3</button>
                        <button onClick={() => setPage(4)}>4</button>
                        <button onClick={() => setPage(5)}>5</button>
                    </nav>
                    <button className={styles.navigate} onClick={() => {
                      if(page !== 5) {
                        setPage(page + 1)}
                      }
                      }>
                        Next {'>'}
                    </button>
                </div>
    </div>
  );
}

export default App;
