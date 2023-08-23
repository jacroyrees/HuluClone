import React from 'react'
import Thumbnail from './Thumbnail'
import MovieListResult from '../types/MovieResultsList';

type ResultsProps = {
  results: MovieListResult[];
};

const Results = ({ results }: ResultsProps) => {
  return (
    <div className={"px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center"}>
       {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </div>
  )
}

export default Results