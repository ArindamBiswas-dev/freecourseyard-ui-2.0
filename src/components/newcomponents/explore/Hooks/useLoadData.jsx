import axios from 'axios';
import { useEffect, useState } from 'react'
import { trackPromise } from 'react-promise-tracker';

function useLoadData(searchType, searchValue, pageNumber) {

    const [courses, setCourses] = useState([]);
    const [hasMoreCourses, setHasMorecourses] = useState(true);
    let url = '';

    useEffect(() => {
        
        if (searchType === 'getAll') {
            // url = `https://jsonplaceholder.typicode.com/posts/`;
            url = `http://openlibrary.org/search.json?q=test&page=${pageNumber}`;
            trackPromise(
                axios.get(url)
                    .then(res => {
                        setCourses((prevCourses) => {
                            return [...prevCourses, ...res.data.docs]
                        });
                    })
                    .catch(err => console.log(err)));
        }

        else if (searchType === 'findOne') {
            url = `http://trackPromise(localhost:8000/getbysearch/:${searchValue}`;

            trackPromise(
                axios.get(url)
                    .then(res => {
                        setCourses(res.data);
                    })
                    .catch(err => console.log(err)));
        }

        else {
            url = 'http://localhost:8000/popularchoices/';

            trackPromise(
                axios.get(url)
                    .then(res => {
                        setCourses(res.data);
                    })
                    .catch(err => console.log(err)));
        }


    }, [searchType, pageNumber])

    return { courses }
}

export default useLoadData